from flask import Flask, request
from flask_cors import CORS
import json
import osmnx as ox
import networkx as nx
import pickle as pkl
from context import Context
import strategies

app = Flask(__name__)
CORS(app)
graphs = {}
# make it easier for usera and debugging, only load drive mode
# modes = [("drive", graphs), ("walk", graphs), ("bike", graphs)]
modes = [("drive", graphs)]


def load_graph(method, graphs):
    with open("data/massachusetts_{}.pkl".format(method), 'rb') as infile:
        _graph = pkl.load(infile)
        graphs[method] = _graph
        print('Loaded {} graph'.format(method))


# Load Cached Graphs from Memory
print("Loading Graphs")
for mode in modes:
    load_graph(mode[0], mode[1])

print("Cached Graphs Loaded!")


@app.route("/route", methods=['POST'])
def route():
    '''
    {'source': '', 'destination': '', 'percentage': 100, 'max': False, 'D': True}
    '''
    data = json.loads(request.data)
    print(data)

    # method (drive)
    graph = graphs['drive']
    # goal
    goal = data['max']
    # algorithm
    algorithm = data['D']

    # Get Lat Long of Address from Nominatim Geocoding API

    start_node = get_node_from_address(graph, data['source'])
    dest_node = get_node_from_address(graph, data['destination'])

    limit = float(data['percentage'])/100
    return get_route(graph, start_node, dest_node, algorithm, limit=limit, goal=goal)

    # test return
    # return{"route":
    #        {
    #            "route":
    #            [
    #                [42.392611, -72.533832],
    #                [42.39107576463665, -72.53321883848933],
    #                [42.38837415353575, -72.53208770671064]
    #            ],
    #            "distance": 9000,
    #            "elevation": 10
    #        }
    #        }


def get_route(graph, start_node, dest_node, algorithm='AStar', limit=0, goal='Minimize Elevation Gain'):
    """
            Receives requests from front end and extracts data to run the routing function.

            Parameters:
            -----------
            graph: networkx Graph
                The graph to perform the routing algorithm on.
            start_node: networkx Node
                The starting node for the graph.
            dest_node: networkx Node
                The destination node for the graph.
            algorithm: String
                The algorithm to run. ex: AStar, Breadth First Search, Dijkstra
            limit: Float
                The percentage that the generated path can deviate from the shortest path.
            goal: String
                The objective of the route. ex: Minimize Elevation Gain, Maximize Elevation Gain

            Returns:
            --------
                {'path': [[long, lat]], 'path_data': [{elevation, length, grade}]}
    """
    print("Setting up right algorithm object")
    if len(goal.split()) > 1:
        weight = goal.split()[1]
        if weight.startswith('Elevation'):
            weight = 'elevation_change'
        else:
            weight = 'grade'
    if goal.startswith('Min'):
        method = 'min ' + weight
    elif goal.startswith('Max'):
        method = 'max ' + weight
    else:
        method = 'vanilla'

    if algorithm == 'Breadth First Search':
        context = Context(strategies.StrategyBFS(graph, limit, method))
        path = context.run_strategy_route(start_node, dest_node)

    elif algorithm == 'Dijkstra':
        context = Context(strategies.StrategyDijkstra(graph, limit, method))
        path = context.run_strategy_route(start_node, dest_node)

    elif algorithm == 'AStar':
        context = Context(strategies.StrategyAStar(graph, limit, method))
        path = context.run_strategy_route(start_node, dest_node)

    print(path)
    path, path_data = prep_path(graph, path)
    return {'path': path, 'path_data': path_data}


# Convert an address to a node
def get_node_from_address(graph, address):
    """
                Converts a string address to the closest node on a graph.

                Parameters:
                -----------
                graph: networkx Graph
                    The graph to perform the look up.
                address: String
                    The address to convert to a node.

                Returns:
                --------
                    node: The closest node to the address given.
     """
    try:
        latlng = ox.geocode(address)
        node, dist = ox.get_nearest_node(graph, latlng, return_dist=True)
        if dist > 10000:
            raise Exception(
                "{} is not currently included in Routing Capabilities".format(address))
        return node
    except:
        raise Exception("Could not find location '{}'".format(address))


def prep_path(graph, path):
    """
                Converts the path of nodes to data that can be sent back to the front end.

                Parameters:
                -----------
                graph: networkx Graph
                    The graph to perform the routing algorithm on.
                path: [networkx Node]
                    The array of nodes produced by the routing function.

                Returns:
                --------
                    final_path: [[long, lat]]
                    lengths_and_elevations: [{elevation, length, grade}]}
    """
    final_path = []
    lengths_and_elevations = []
    for i in range(len(path)-1):
        nodeId = path[i]
        nextNode = path[i+1]
        x = graph.nodes[nodeId]['x']
        y = graph.nodes[nodeId]['y']
        elevation = graph.nodes[nodeId]['elevation']
        edge = graph[nodeId][nextNode][0]
        length = 0
        if 'length' in edge:
            length = edge['length']
        grade = 0
        if 'grade' in edge:
            grade = max(0, edge['grade'])
        final_path.append((x, y))
        lengths_and_elevations.append(
            {'length': length, 'elevation': elevation, 'grade': grade})
    # Add Last Node
    lastNode = graph.nodes[nextNode]
    final_path.append((lastNode['x'], lastNode['y']))
    lengths_and_elevations.append(
        {'length': 0, 'elevation': lastNode['elevation']})
    return final_path, lengths_and_elevations


# to make sure the connection port is availbale
if __name__ == "__main__":
    app.run(debug=True, port=4001)
