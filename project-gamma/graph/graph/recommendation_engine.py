import json
import networkx as nx
import os

# === Paths ===
GRAPH_FILE = 'graph/concept_graph_full.json'
LEARNER_FILE = 'graph/learner_profiles.json'
OUTPUT_DIR = 'graph/recommendations/'

# === Load concept graph ===
with open(GRAPH_FILE) as f:
    graph_data = json.load(f)
G = nx.node_link_graph(graph_data, edges="links")


# === Load learner profiles ===
with open(LEARNER_FILE) as f:
    learners = json.load(f)

# === Ensure output directory exists ===
os.makedirs(OUTPUT_DIR, exist_ok=True)

def recommend_for_learner(profile):
    mastered = set(profile['mastered_concepts'])
    recommendations = []

    for node in G.nodes:
        if node in mastered:
            continue
        prereqs = list(G.predecessors(node))
        if all(p in mastered for p in prereqs):
            recommendations.append(node)

    return recommendations

# === Process all learners ===
for learner in learners:
    learner_id = learner['learner_id']
    recommended = recommend_for_learner(learner)

    output = {
        'learner_id': learner_id,
        'recommended_concepts': recommended
    }

    output_path = os.path.join(OUTPUT_DIR, f'recommendations_{learner_id}.json')
    with open(output_path, 'w') as f:
        json.dump(output, f, indent=4)

    print(f"[✔] Recommendations saved for {learner_id}: {recommended}")
