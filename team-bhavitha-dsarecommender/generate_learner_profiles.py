import json
import random

concepts = [
    "Variables", "Data Types", "Operators", "Control Flow", "Loops",
    "Functions", "Recursion", "Arrays", "Linked Lists", "Stacks", "Queues",
    "Trees", "Binary Trees", "Binary Search Trees", "Heaps", "Hash Tables",
    "Graphs", "Graph Traversal", "DFS", "BFS", "Sorting", "Merge Sort",
    "Quick Sort", "Searching", "Binary Search", "Greedy Algorithms",
    "Dynamic Programming", "Backtracking", "Memoization",
    "Complexity Analysis", "Big O Notation", "Divide and Conquer",
    "Bit Manipulation"
]

def generate_profiles(num_profiles=50):
    profiles = []
    for i in range(1, num_profiles + 1):
        learner_id = f"L{i:03}"
        num_mastered = random.randint(4, 8)
        num_weak = random.randint(2, 5)

        mastered = set(random.sample(concepts, num_mastered))
        weak = set(random.sample([c for c in concepts if c not in mastered], num_weak))

        profile = {
            "learner_id": learner_id,
            "mastered_concepts": sorted(list(mastered)),
            "weak_concepts": sorted(list(weak))
        }
        profiles.append(profile)
    return profiles

if __name__ == "__main__":
    learner_profiles = generate_profiles(50)
    with open("learner_profiles.json", "w") as f:
        json.dump(learner_profiles, f, indent=4)
    print("✅ learner_profiles.json successfully created with 50 profiles.")
