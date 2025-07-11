#Author: Snehasis Mukhopadhyay
# STEP 1: Install required packages
!pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
!pip install torch-scatter torch-sparse torch-geometric -f https://data.pyg.org/whl/torch-2.0.0+cu118.html
!pip install networkx matplotlib

# STEP 2: Build Knowledge Graph with full DSA topics
import networkx as nx
import matplotlib.pyplot as plt
import torch
from torch_geometric.utils import from_networkx
from torch_geometric.nn import SAGEConv
import torch.nn.functional as F
import os

# Extended DSA topics and prerequisites
prerequisites = {
    "Arrays": [],
    "Sorting": ["Arrays"],
    "Searching": ["Arrays", "Sorting"],
    "Hashing": ["Arrays", "Searching"],
    "LinkedLists": ["Arrays"],
    "Stacks": ["LinkedLists"],
    "Queues": ["LinkedLists"],
    "Recursion": ["Stacks"],
    "Backtracking": ["Recursion"],
    "Greedy": ["Sorting"],
    "DP": ["Recursion", "Backtracking", "Greedy"],
    "Trees": ["Recursion"],
    "BinaryTree": ["Trees"],
    "BST": ["BinaryTree"],
    "AVLTree": ["BST"],
    "RedBlackTree": ["BST"],
    "BTree": ["BinaryTree"],
    "BPlusTree": ["BTree"],
    "SegmentTree": ["Arrays", "Recursion"],
    "FenwickTree": ["Arrays"],
    "Heaps": ["Arrays"],
    "MinHeap": ["Heaps"],
    "MaxHeap": ["Heaps"],
    "Graphs": ["Trees", "DFS", "BFS", "DP"],
    "DFS": ["Graphs"],
    "BFS": ["Graphs"],
    "Dijkstra": ["Graphs", "Heaps"],
    "Kruskal": ["Graphs", "DisjointSet"],
    "Prim": ["Graphs", "Heaps"],
    "PriorityQueue": ["Heaps"],
    "Trie": ["Strings", "Hashing"],
    "Knapsack": ["DP"],
    "LCS": ["DP"],
    "SudokuSolver": ["Backtracking"],
    "TopologicalSort": ["Graphs", "DFS"],
    "BellmanFord": ["Graphs"],
    "FloydWarshall": ["Graphs"],
    "DisjointSet": ["Arrays"],
    "SlidingWindow": ["Arrays"],
    "TwoPointer": ["Arrays"],
    "PrefixSum": ["Arrays"],
    "NumberTheory": ["Math"],
    "GCD": ["NumberTheory"],
    "Sieve": ["NumberTheory"],
    "ModularExponentiation": ["NumberTheory"],
    "ChineseRemainderTheorem": ["NumberTheory"],
    "EulerTotient": ["NumberTheory"],
    "InclusionExclusion": ["NumberTheory"],
    "FastExponentiation": ["ModularExponentiation"],
    "BitManipulation": ["Arrays"]
}

# Build graph
G = nx.DiGraph()
for topic, deps in prerequisites.items():
    for dep in deps:
        G.add_edge(dep, topic)

mapping = {node: idx for idx, node in enumerate(G.nodes())}
index_to_topic = {idx: node for node, idx in mapping.items()}
G_indexed = nx.relabel_nodes(G, mapping)

data = from_networkx(G_indexed)
num_nodes = len(G_indexed.nodes)
data.x = torch.eye(num_nodes)

# Label recommendation-worthy topics
data.y = torch.zeros(num_nodes, dtype=torch.long)
recommended = [
    "Graphs", "DP", "Trie", "Knapsack", "TopologicalSort",
    "AVLTree", "RedBlackTree", "SegmentTree", "GCD", "ModularExponentiation"
]
for topic in recommended:
    if topic in mapping:
        data.y[mapping[topic]] = 1

mask = torch.rand(num_nodes)
data.train_mask = mask < 0.7
data.test_mask = mask >= 0.7

# STEP 3: Define GraphSAGE model
from torch.nn import Module

class GraphSAGERecommender(Module):
    def __init__(self, in_channels, hidden_channels):
        super().__init__()
        self.sage1 = SAGEConv(in_channels, hidden_channels)
        self.sage2 = SAGEConv(hidden_channels, 2)  # Binary classification

    def forward(self, data):
        x, edge_index = data.x, data.edge_index
        x = F.relu(self.sage1(x, edge_index))
        x = self.sage2(x, edge_index)
        return x

model_path = "model.pth"
model = GraphSAGERecommender(in_channels=num_nodes, hidden_channels=64)
optimizer = torch.optim.Adam(model.parameters(), lr=0.01)
loss_fn = torch.nn.CrossEntropyLoss()

# STEP 4: Train or load model
if os.path.exists(model_path):
    model.load_state_dict(torch.load(model_path))
    print("✅ Loaded saved model.")
else:
    for epoch in range(100):
        model.train()
        optimizer.zero_grad()
        out = model(data)
        loss = loss_fn(out[data.train_mask], data.y[data.train_mask])
        loss.backward()
        optimizer.step()

        if epoch % 10 == 0:
            model.eval()
            pred = out.argmax(dim=1)
            correct = (pred[data.test_mask] == data.y[data.test_mask]).sum()
            acc = int(correct) / int(data.test_mask.sum())
            print(f"Epoch {epoch} | Loss: {loss.item():.4f} | Accuracy: {acc:.4f}")

    torch.save(model.state_dict(), model_path)
    print("💾 Model trained and saved!")

# STEP 5: User Input + Recommendation
model.eval()
pred = model(data).argmax(dim=1)
recommended_ids = [i for i in range(num_nodes) if pred[i] == 1]
recommended_topics = [index_to_topic[i] for i in recommended_ids]

print("\n📚 Recommended DSA Topics:")
for topic in recommended_topics:
    print(f" - {topic}")

# STEP 6: Visualize topic path from known inputs
known_topics = ["Arrays", "Recursion"]
visited = set()
paths = []

def dfs(current, path):
    visited.add(current)
    path.append(current)
    paths.append(list(path))
    for _, neighbor in G.out_edges(current):
        if neighbor not in visited:
            dfs(neighbor, path)
    path.pop()

for topic in known_topics:
    if topic in G:
        visited.clear()
        dfs(topic, [])

print("\n🧭 Sample Learning Paths:")
for path in paths[:5]:
    print(" → ".join(path))
