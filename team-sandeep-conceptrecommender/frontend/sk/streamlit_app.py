import streamlit as st
import networkx as nx
from torch_geometric.utils import from_networkx

# -----------------------------
# Load Graph Data
# -----------------------------
@st.cache_resource
def load_graph():
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
        "BitManipulation": ["Arrays"],
        "DivideAndConquer": ["Recursion"],
        "MergeSort": ["DivideAndConquer"],
        "QuickSort": ["DivideAndConquer"],
        "BinarySearch": ["DivideAndConquer"],
        "ClosestPair": ["DivideAndConquer"],
        "StrassenMatrix": ["DivideAndConquer"],
        "Karatsuba": ["DivideAndConquer"],
        "BranchAndBound": ["Backtracking"],
        "NQueens": ["BranchAndBound"],
        "TSP": ["BranchAndBound"],
        "JobAssignment": ["BranchAndBound"]
    }

    G = nx.DiGraph()
    for topic, deps in prerequisites.items():
        for dep in deps:
            G.add_edge(dep, topic)
    return G

# -----------------------------
# Path-Aware Recommendation
# -----------------------------
def get_next_topics(G, known_topics):
    next_topics = set()
    for topic in known_topics:
        if topic in G:
            for _, neighbor in G.out_edges(topic):
                if neighbor not in known_topics:
                    next_topics.add(neighbor)
    return sorted(next_topics)

# -----------------------------
# Streamlit App
# -----------------------------
st.set_page_config(page_title="DSA Recommender", layout="centered")
st.title("📚 AI-Powered DSA Topic Recommender")
st.markdown("🔍 Get next DSA topics to study based on what you already know.")

G = load_graph()

# -----------------------------
# UI: Select Known Topics
# -----------------------------
all_topics = sorted(G.nodes())
default_known = ["Arrays", "Recursion"]
known_topics = st.multiselect("✅ Select topics you already know:", all_topics, default=default_known)

# -----------------------------
# Show Recommendations
# -----------------------------
if st.button("🚀 Recommend My Next Topics"):
    if not known_topics:
        st.warning("Please select at least one known topic.")
    else:
        next_topics = get_next_topics(G, known_topics)
        if next_topics:
            st.success("📘 Next recommended topics based on your knowledge:")
            for topic in next_topics:
                st.markdown(f"- {topic}")
        else:
            st.info("🎉 You've already covered all immediate next steps!")

# -----------------------------
# Optional: Show the Graph Structure (Text only)
# -----------------------------
with st.expander("🔗 Show Topic Dependencies (Text View)"):
    for topic in known_topics:
        st.write(f"**{topic} →** {[n for _, n in G.out_edges(topic)]}")
