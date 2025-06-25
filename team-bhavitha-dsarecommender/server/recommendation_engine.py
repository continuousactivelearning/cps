import json
import networkx as nx
import os

GRAPH_FILE = 'concept_graph_full.json'
LEARNER_FILE = 'learner_profiles.json'
OUTPUT_DIR = 'graph/recommendations/'
TARGET_CONCEPT = 'Computation'  # Example target

# Load graph
with open(GRAPH_FILE) as f:
    graph_data = json.load(f)
G = nx.DiGraph()
for link in graph_data['links']:
    G.add_edge(link['source'], link['target'])

# Load learners
with open(LEARNER_FILE) as f:
    learners = json.load(f)

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

def recommend_path(profile, target_concept):
    mastered = set(profile['mastered_concepts'])
    min_path = None
    min_length = float('inf')
    for start in mastered:
        if nx.has_path(G, start, target_concept):
            try:
                path = nx.dijkstra_path(G, start, target_concept)
                if len(path) < min_length:
                    min_path = path
                    min_length = len(path)
            except nx.NetworkXNoPath:
                continue
    return min_path if min_path else []

# Generate recommendations
for learner in learners:
    rid = learner['learner_id']
    recs = recommend_for_learner(learner)
    path = recommend_path(learner, TARGET_CONCEPT)
    with open(f"{OUTPUT_DIR}recommendations_{rid}.json", "w") as f:
        json.dump({
            "learner_id": rid,
            "recommended_concepts": recs,
            "path_to_target": path
        }, f, indent=2)
    print(f"[✔] {rid}: {recs} | Path: {path}")
