import os
import streamlit as st
from recommendation_engine import load_graph, load_learner_profile, dijkstra_recommendation

# --- File Paths ---
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
GRAPH_PATH = os.path.join(BASE_DIR, "concept_graph_full.json")
PROFILE_PATH = os.path.join(BASE_DIR, "learner_profiles.json")

# --- Load Data ---
graph = load_graph(GRAPH_PATH)

# Get all concept nodes
all_nodes = set(graph.keys()) | {n for neighbors in graph.values() for n in neighbors}

# --- UI ---
st.set_page_config(page_title="DSA Recommendation Engine", layout="centered")
st.title("📘 Personalized Learning Path for DSA")

# Select learner
learner_id = st.text_input("🔎 Enter Learner ID (e.g., L001):", "L001")

# Select target concept
target_concept = st.selectbox("🎯 Select Target Concept:", sorted(list(all_nodes)))

# Run recommendation on button click
if st.button("🚀 Recommend Path"):
    try:
        learner = load_learner_profile(PROFILE_PATH, learner_id)

        result = dijkstra_recommendation(
            graph,
            start_concepts=learner["mastered_concepts"],
            weak_concepts=learner["weak_concepts"],
            target=target_concept
        )

        if result["path"]:
            st.success(f"✅ Recommended Path: {' ➝ '.join(result['path'])}")
            st.info(f"💰 Total Cost: {result['cost']}")
        else:
            st.error("⚠️ No path found to the target concept.")

    except ValueError as e:
        st.error(f"❌ {e}")
