#!/usr/bin/env python3


import ollama
import json
import networkx as nx
import matplotlib.pyplot as plt
import numpy as np

def generate_prerequisites_ollama(topic: str, model: str = "llama2") -> dict:
    prompt = f"""
    Generate about 3 prerequisites for learning: "{topic}"

    Return only a JSON object with this format:
    {{
        "main_topic": "{topic}",
        "prerequisites": [
            {{"name": "Prerequisite 1", "level": 1}},
            {{"name": "Prerequisite 2", "level": 2}},
            {{"name": "Prerequisite 3", "level": 3}},
            {{"name": "Prerequisite 4", "level": 4}},
            {{"name": "Prerequisite 5", "level": 5}},
            {{"name": "Prerequisite 6", "level": 6}}
        ]
    }}

    Make prerequisites realistic and ordered from basic to advanced.
    """
    try:
        response = ollama.chat(
            model=model,
            messages=[{'role': 'user', 'content': prompt}]
        )
        response_text = response['message']['content']
        start = response_text.find('{')
        end = response_text.rfind('}') + 1
        json_str = response_text[start:end]
        return json.loads(json_str)
    except Exception as e:
        print(f"Error: {e}")
        return {
            "main_topic": topic,
            "prerequisites": [
                {"name": "Basic Mathematics", "level": 1},
                {"name": "Problem Solving", "level": 2},
                {"name": "Logical Thinking", "level": 3},
                {"name": "Foundational Concepts", "level": 4},
                {"name": "Intermediate Skills", "level": 5},
                {"name": "Advanced Preparation", "level": 6}
            ]
        }

def create_solid_line_graph(prereq_data: dict, layout_style: str = "hierarchical"):
    G = nx.DiGraph()
    main_topic = prereq_data['main_topic']
    prerequisites = prereq_data['prerequisites']
    
    G.add_node(main_topic, type='main')
    for prereq in prerequisites:
        G.add_node(prereq['name'], type='prerequisite', level=prereq['level'])
        G.add_edge(prereq['name'], main_topic)
    for i in range(1, len(prerequisites)):
        G.add_edge(prerequisites[i-1]['name'], prerequisites[i]['name'])

    pos = create_hierarchical_layout(G, main_topic, prerequisites) if layout_style == "hierarchical" else create_circular_layout(G, main_topic, prerequisites)
    
    plt.figure(figsize=(14, 10))
    nx.draw_networkx_edges(G, pos,
                          edge_color='#4B8BBE',
                          arrows=True,
                          arrowsize=20,
                          arrowstyle='-|>',
                          width=2.5,
                          alpha=0.85,
                          style='solid')

    prereq_nodes = [p['name'] for p in prerequisites]
    nx.draw_networkx_nodes(G, pos,
                          nodelist=prereq_nodes,
                          node_color='#A6E1FA',
                          edgecolors='#2C3E50',
                          node_size=2200,
                          linewidths=1.8,
                          alpha=0.95)
    
    nx.draw_networkx_nodes(G, pos,
                          nodelist=[main_topic],
                          node_color='#FFB347',
                          edgecolors='#D35400',
                          node_size=3000,
                          linewidths=2.5,
                          alpha=0.95)
    
    labels = {}
    for node in G.nodes():
        words = node.split()
        labels[node] = '\n'.join([' '.join(words[i:i+2]) for i in range(0, len(words), 2)])
    nx.draw_networkx_labels(G, pos, labels,
                           font_size=10,
                           font_weight='bold',
                           font_family='sans-serif')
    
    plt.title(f"📘 Prerequisites for: {main_topic}", fontsize=18, fontweight='bold', pad=20)
    plt.axis('off')
    plt.tight_layout()

    # Set soft background color
    plt.gca().set_facecolor('#F5F9FF')  # Light pleasant blue-ish background

    from matplotlib.patches import Patch
    legend_elements = [
        Patch(facecolor='#A6E1FA', edgecolor='#2C3E50', label='Prerequisites'),
        Patch(facecolor='#FFB347', edgecolor='#D35400', label='Main Topic'),
        plt.Line2D([0], [0], color='#4B8BBE', linewidth=3, label='Learning Path')
    ]
    plt.legend(handles=legend_elements, loc='upper right', fontsize=10)
    plt.show()
    
    return G

def create_hierarchical_layout(G, main_topic, prerequisites):
    pos = {}
    max_level = len(prerequisites)
    for prereq in prerequisites:
        level = prereq['level']
        x = (level - (max_level + 1) / 2) * 2
        y = level
        pos[prereq['name']] = (x, y)
    pos[main_topic] = (0, max_level + 2)
    return pos

def create_circular_layout(G, main_topic, prerequisites):
    pos = {}
    n = len(prerequisites)
    for i, prereq in enumerate(prerequisites):
        angle = 2 * np.pi * i / n
        radius = 4
        x = radius * np.cos(angle)
        y = radius * np.sin(angle)
        pos[prereq['name']] = (x, y)
    pos[main_topic] = (0, 0)
    return pos

def main():
    print("=== 🎓 Prerequisite Graph Generator with Solid Lines ===\n")
    topic = input("Enter a topic/subject: ").strip()
    if not topic:
        topic = "Deep Learning"
        print(f"Using default: {topic}")
    
    model = input("Ollama model (default: llama2): ").strip() or "llama2"
    layout = input("Layout style (hierarchical/circular, default: hierarchical): ").strip() or "hierarchical"
    
    print(f"\nGenerating prerequisites for '{topic}' using {model}...")
    prereq_data = generate_prerequisites_ollama(topic, model)

    print(f"\nPrerequisites for: {prereq_data['main_topic']}")
    print("-" * 50)
    for i, prereq in enumerate(prereq_data['prerequisites'], 1):
        print(f"{i}. {prereq['name']}")
    
    print(f"\nCreating {layout} graph with solid lines...")
    G = create_solid_line_graph(prereq_data, layout)

    filename = f"{topic.replace(' ', '_').lower()}_prerequisites.json"
    with open(filename, 'w') as f:
        json.dump(prereq_data, f, indent=2)
    print(f"\n✅ Data saved to: {filename}")

if __name__ == "__main__":
    main()
