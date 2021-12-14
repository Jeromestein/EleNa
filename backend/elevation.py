import math
import pandas as pd
import requests
import networkx as nx


def add_node_elevations(G, max_loc_per_batch=1000, pause_duration=0.0):
    url_template = 'http://0.0.0.0:8080/api/v1/lookup'

    node_points = [{'latitude': data['y'], 'longitude': data['x']}
                   for node, data in G.nodes(data=True)]

    res = []
    for i in range(0, len(node_points), max_loc_per_batch):
        chunk = node_points[i: i + max_loc_per_batch]
        locations = {'locations': chunk}
        response = requests.post(url_template, json=locations)
        response_json = response.json()

        res.extend(response_json['results'])

    df = pd.DataFrame(node_points, columns=['node_points'])
    df['elevation'] = [result['elevation'] for result in res]

    df['elevation'] = df['elevation'].round(3)
    nx.set_node_attributes(G, name='elevation',
                           values=df['elevation'].to_dict())

    return G
