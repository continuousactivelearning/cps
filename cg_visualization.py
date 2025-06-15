from pyvis.network import Network
import networkx as nx
import json
from networkx.readwrite import json_graph

with open("concept_graph_full.json", "r", encoding="utf-8") as f:
    data = json.load(f)
G_loaded = json_graph.node_link_graph(data)

# Created a pyvis network
net = Network(
    height="800px",
    width="100%",
    bgcolor="#ffffff",
    font_color=True,
    directed=True
)

# Converted from networkx
net.from_nx(G_loaded)
#node properties
for node in net.nodes:
    node["size"] = 20
    node["color"] = "#97C2FC"
    node["borderWidth"] = 2
    node["borderColor"] = "#2B7CE9"
    node["font"] = {"size": 12}

# edge properties
for edge in net.edges:
    edge["color"] = "#848484"
    edge["smooth"] = {"type": "continuous"}
    edge["arrows"] = "to"
    edge["arrows"] = {"to": {"enabled": True, "scaleFactor": 0.5}}

# Configure dynamics
net.set_options("""
    var options = {
        "physics": {
            "enabled": true,
            "stabilization": {"iterations": 100},
            "barnesHut": {
                "gravitationalConstant": -2000,
                "springConstant": 0.04,
                "springLength": 95
            }
        }
    }
""")

# Saved the graph
try:
    net.write_html("concept_graph.html")
    print("Graph has been saved as 'concept_graph.html'. Please open it in a web browser to view.")
except Exception as e:
    print(f"Error saving graph: {str(e)}")
