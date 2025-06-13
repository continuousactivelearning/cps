import networkx as nx
import matplotlib.pyplot as plt
import json
from networkx.readwrite import json_graph
concept_map = {
    "What is computation?": ["Computation", "Algorithms", "Problem Solving"],
    "Branching and Iteration": ["Conditionals", "Loops", "Control Flow"],
    "String Manipulation, Guess and Check, Approximations, Bisection": [
        "String Manipulation", "Guess and Check", "Approximation", "Bisection Search"
    ],
    "Decomposition, Abstractions, Functions": ["Decomposition", "Abstraction", "Functions"],
    "Tuples, Lists, Aliasing, Mutability, Cloning": [
        "Tuples", "Lists", "Aliasing", "Mutability", "Cloning"
    ],
    "Recursion, Dictionaries": ["Recursion", "Dictionaries"],
    "Testing, Debugging, Exceptions, Assertions": [
        "Testing", "Debugging", "Exceptions", "Assertions"
    ],
    "Object Oriented Programming": ["Classes", "OOP", "Encapsulation"],
    "Python Classes and Inheritance": ["Inheritance", "Subclasses", "Class Hierarchies"],
    "Understanding Program Efficiency, Part 1": ["Big-O Notation", "Efficiency"],
    "Understanding Program Efficiency, Part 2": ["Efficiency", "Space Complexity"],
    "Searching and Sorting": ["Search Algorithms", "Sorting Algorithms"],
}

G = nx.DiGraph()

# Converted concept_map to a list of concept lists in lecture order
concept_lists = list(concept_map.values())

#  graph
for i, concepts in enumerate(concept_lists):
    # Connected all concepts within the same lecture in sequence
    for j in range(len(concepts) - 1):
        G.add_edge(concepts[j], concepts[j + 1])

    # Connected last concept of this lecture to all concepts in the next lecture
    if i < len(concept_lists) - 1:
        last_concept = concepts[-1]
        next_concepts = concept_lists[i + 1]
        for next_concept in next_concepts:
            G.add_edge(last_concept, next_concept)


data = json_graph.node_link_data(G)

# Saved to json file
with open("concept_graph_full.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=4)

print("Full graph saved to concept_graph_full.json")


'''
plt.figure(figsize=(22, 14))
pos = nx.spring_layout(G, k=0.5, seed=42)
nx.draw(G, pos, with_labels=True,
        node_color="lightblue", node_size=2500,
        edge_color="gray", arrows=True, width=2, font_size=10)
plt.title("Concept Graph from Manually Curated Lecture Concepts", fontsize=14)
plt.axis("off")
plt.tight_layout()
plt.show()
'''
