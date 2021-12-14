from flask import Flask, request
from flask_cors import CORS
import pickle as pkl
import json
from context import Context
import strategies
import osmnx as ox
import networkx as nx

app = Flask(__name__)
CORS(app)
maps = {}
# make it easier for usera and debugging, only load drive mode
# modes = [("drive", maps), ("walk", maps), ("bike", maps)]
modes = [("drive", maps)]


def loadMap(method, maps):
    with open("data/massachusetts_{}.pkl".format(method), 'rb') as infile:
        _map = pkl.load(infile)
        maps[method] = _map
        print('Load {} map'.format(method))


# Load Cached Graphs from Memory
print("Loading Map")
for mode in modes:
    loadMap(mode[0], mode[1])

print("Map is already Loaded and saved in Cached!")


@app.route("/route", methods=['POST'])
def route():
    '''
    {'source': '', 'destination': '', 'percentage': 100, 'max': False, 'D': True}
    '''
    data = json.loads(request.data)
    print(data)

    # method (drive)
    currMap = maps['drive']
    # maximize the elevation gain or minimize it
    max = data['max']
    # choose the algorithm:
    # True : Dijstra
    # False: Astar
    D = data['D']

    # Get Lat Long of Address from Nominatim Geocoding API

    src_node = getCoordinates(currMap, data['source'])
    dest_node = getCoordinates(currMap, data['destination'])

    limit = float(data['percentage'])/100
    return getRoute(currMap, src_node, dest_node, D, limit, max)

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

# get the coordinates from the address


def getCoordinates(currMap, address):
    latlng = ox.geocode(address)
    coordinates, distance = ox.get_nearest_node(
        currMap, latlng, return_dist=True)

    return coordinates


def getRoute(currMap, src_node, dest_node, D, limit, max):
    if max == True:
        method = 'max '
    else:
        method = 'min '

    if D == True:
        context = Context(strategies.StrategyDijkstra(currMap, limit, method))
        path = context.run_strategy_route(src_node, dest_node)

    else:
        context = Context(strategies.StrategyAStar(currMap, limit, method))
        path = context.run_strategy_route(src_node, dest_node)

    print(path)
    path, path_data = getPathReady(currMap, path)
    return {'path': path, 'path_data': path_data}


def getPathReady(currMap, path):
    final_path = []
    lengths_and_elevations = []
    for i in range(len(path)-1):
        nodeId = path[i]
        nextNode = path[i+1]
        x = currMap.nodes[nodeId]['x']
        y = currMap.nodes[nodeId]['y']
        elevation = currMap.nodes[nodeId]['elevation']
        edge = currMap[nodeId][nextNode][0]
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
    lastNode = currMap.nodes[nextNode]
    final_path.append((lastNode['x'], lastNode['y']))
    lengths_and_elevations.append(
        {'length': 0, 'elevation': lastNode['elevation']})
    return final_path, lengths_and_elevations


# to make sure the connection port is availbale
if __name__ == "__main__":
    app.run(debug=True, port=4001)
