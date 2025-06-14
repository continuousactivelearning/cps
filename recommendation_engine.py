import json
import heapq


def load_graph(graph_path):
    with open(graph_path, 'r') as f:
        graph_data = json.load(f)

    graph = {}
    for link in graph_data["links"]:
        src = link["source"]
        tgt = link["target"]
        if src not in graph:
            graph[src] = []
        graph[src].append(tgt)
    return graph


def dijkstra_recommendation(graph, start_concepts, weak_concepts, target="Sorting Algorithms"):
    # Each weak concept adds a higher "cost" to traversal
    visited = set()
    heap = []

    for concept in start_concepts:
        heapq.heappush(heap, (0, [concept]))  # (cost, path)

    while heap:
        cost, path = heapq.heappop(heap)
        current = path[-1]

        if current == target:
            return {"path": path, "cost": cost}

        if current in visited:
            continue

        visited.add(current)

        for neighbor in graph.get(current, []):
            edge_cost = 5 if neighbor in weak_concepts else 1
            heapq.heappush(heap, (cost + edge_cost, path + [neighbor]))

    return {"path": [], "cost": float('inf')}
if __name__ == "__main__":
    concept_graph_path = "concept_graph_full.json"
    learner_profile = {
        "learner_id": "L001",
        "mastered_concepts": ["Computation", "Algorithms"],
        "weak_concepts": ["Problem Solving"]
    }

    graph = load_graph(concept_graph_path)
    result = dijkstra_recommendation(
        graph,
        start_concepts=learner_profile["mastered_concepts"],
        weak_concepts=learner_profile["weak_concepts"]
    )

    print("Recommended Path:", result["path"])
    print("Total Cost:", result["cost"])
