import os
import json
import streamlit as st
import networkx as nx

st.set_page_config(page_title="📘 Personalized DSA Path", layout="centered")

GRAPH_PATH = "concept_graph_full.json"
PROFILE_PATH = "learner_profiles.json"

@st.cache_resource
def load_graph(path):
    with open(path) as f:
        data = json.load(f)
    G = nx.DiGraph()
    for node in data['nodes']:
        G.add_node(node['id'], resources=node['resources'])
    for link in data['links']:
        G.add_edge(link['source'], link['target'])
    return G

@st.cache_data
def load_learner_profiles(path):
    with open(path) as f:
        return json.load(f)

try:
    graph = load_graph(GRAPH_PATH)
    profiles = load_learner_profiles(PROFILE_PATH)
    all_nodes = sorted(list(graph.nodes))
except Exception as e:
    st.error(f"❌ Error loading data: {e}")

st.title("📘 Personalized Learning Path for DSA")

if 'profiles' in locals() and profiles:
    learner_id = st.selectbox("🔎 Select Learner ID:", [p['learner_id'] for p in profiles])
    target_concept = st.selectbox("🎯 Select Target Concept:", all_nodes)

    if st.button("🚀 Recommend Learning Path"):
        learner = next((l for l in profiles if l["learner_id"] == learner_id), None)
        if not learner:
            st.error("Learner not found.")
        else:
            mastered = set(learner['mastered_concepts'])
            weak = set(learner['weak_concepts'])
            st.write(f"📖 **Mastered Concepts:** {', '.join(mastered) if mastered else 'None'}")
            st.write(f"❗ **Weak Concepts:** {', '.join(weak) if weak else 'None'}")

            min_path = None
            min_length = float('inf')
            for start in mastered:
                if start not in graph:
                    continue
                if nx.has_path(graph, start, target_concept):
                    try:
                        path = nx.shortest_path(graph, start, target_concept)
                        if len(path) < min_length:
                            min_path = path
                            min_length = len(path)
                    except nx.NetworkXNoPath:
                        continue

            if min_path:
                st.success(f"✅ Recommended Path: {' ➝ '.join(min_path)}")
                st.info(f"💰 Path Length: {len(min_path)}")
                for concept in min_path:
                    resources = graph.nodes[concept].get("resources", [])
                    for res in resources:
                        st.markdown(f"[📚 {res['title']}]({res['url']})")
            else:
                st.error("⚠️ No path found to the target concept.")
else:
    st.warning("⚠ Please ensure the learner_profiles.json and concept_graph_full.json files exist in the same directory as app.py.")
