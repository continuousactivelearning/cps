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


def load_learner_profile(profile_path, learner_id="L001"):
    with open(profile_path, 'r') as f:
        profiles = json.load(f)

    for profile in profiles:
        if profile["learner_id"] == learner_id:
            return profile
    raise ValueError(f"Learner ID '{learner_id}' not found in profile.")


def dijkstra_recommendation(graph, start_concepts, weak_concepts, target):
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
    learner_profile_path = "learner_profiles.json"
    target_concept = "Sorting"  # ✅ Updated to valid node

    # Load graph
    graph = load_graph(concept_graph_path)

    # Check target exists
    all_nodes = set(graph.keys()) | {n for neighbors in graph.values() for n in neighbors}
    if target_concept not in all_nodes:
        print(f"❌ Target concept '{target_concept}' not found in graph.")
        exit()

    # Load learner profile
    try:
        learner = load_learner_profile(learner_profile_path)
    except ValueError as e:
        print(f"❌ {e}")
        exit()

    result = dijkstra_recommendation(
        graph,
        start_concepts=learner["mastered_concepts"],
        weak_concepts=learner["weak_concepts"],
        target=target_concept
    )

    print("✅ Recommended Path:", result["path"])
    print("💰 Total Cost:", result["cost"])
