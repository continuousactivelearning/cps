import json
import networkx as nx
import os

# === Paths ===
GRAPH_FILE = 'concept_graph_full.json'

LEARNER_FILE = 'learner_profiles.json'

OUTPUT_DIR = 'graph/recommendations/'

# === Load concept graph as DiGraph ===
with open(GRAPH_FILE) as f:
    graph_data = json.load(f)
G = nx.node_link_graph(graph_data, directed=True, multigraph=False)

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
def recommend_path(learner_profile, goal_concept):
    mastered = set(learner_profile['mastered_concepts'])

    # Find shortest path from any mastered node to goal_concept
    shortest_path = None
    min_length = float('inf')

    for concept in mastered:
        if nx.has_path(G, concept, goal_concept):
            try:
                path = nx.dijkstra_path(G, source=concept, target=goal_concept)
                if len(path) < min_length:
                    shortest_path = path
                    min_length = len(path)
            except nx.NetworkXNoPath:
                continue

    return shortest_path if shortest_path else []


# === Optional batch processing ===
if __name__ == '__main__':
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
