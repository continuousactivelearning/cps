#!/usr/bin/env python3
"""
Simple Prerequisite Graph with Solid Lines using Ollama
Quick and clean implementation focused on solid edge visualization
"""

import ollama
import json
import networkx as nx
import matplotlib.pyplot as plt
import numpy as np

def generate_prerequisites_ollama(topic: str, model: str = "llama2") -> dict:
    """Generate prerequisites using Ollama"""
    
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
        
        # Extract JSON
        start = response_text.find('{')
        end = response_text.rfind('}') + 1
        json_str = response_text[start:end]
        
        return json.loads(json_str)
        
    except Exception as e:
        print(f"Error: {e}")
        # Fallback
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
    """Create and display prerequisite graph with solid lines"""
    
    # Create directed graph
    G = nx.DiGraph()
    
    main_topic = prereq_data['main_topic']
    prerequisites = prereq_data['prerequisites']
    
    # Add nodes
    G.add_node(main_topic, type='main')
    for prereq in prerequisites:
        G.add_node(prereq['name'], type='prerequisite', level=prereq['level'])
        # Connect prerequisite to main topic
        G.add_edge(prereq['name'], main_topic)
    
    # Connect prerequisites sequentially
    for i in range(1, len(prerequisites)):
        G.add_edge(prerequisites[i-1]['name'], prerequisites[i]['name'])
    
    # Create layout
    if layout_style == "circular":
        pos = create_circular_layout(G, main_topic, prerequisites)
    else:
        pos = create_hierarchical_layout(G, main_topic, prerequisites)
    
    # Plot with solid lines
    plt.figure(figsize=(14, 10))
    
    # Draw edges with SOLID lines (key specification)
    nx.draw_networkx_edges(G, pos,
                          edge_color='#1f77b4',      # Blue color
                          arrows=True,
                          arrowsize=20,
                          arrowstyle='->',
                          width=3,                    # Thick solid lines
                          alpha=0.8,
                          style='solid')              # Explicitly solid (not dashed/dotted)
    
    # Draw prerequisite nodes
    prereq_nodes = [p['name'] for p in prerequisites]
    nx.draw_networkx_nodes(G, pos,
                          nodelist=prereq_nodes,
                          node_color='lightblue',
                          node_size=2000,
                          alpha=0.9,
                          edgecolors='black',
                          linewidths=2)
    
    # Draw main topic node
    nx.draw_networkx_nodes(G, pos,
                          nodelist=[main_topic],
                          node_color='orange',
                          node_size=3000,
                          alpha=0.9,
                          edgecolors='black',
                          linewidths=3)
    
    # Add labels
    labels = {}
    for node in G.nodes():
        # Wrap long labels
        if len(node) > 12:
            words = node.split()
            if len(words) > 1:
                mid = len(words) // 2
                labels[node] = '\\n'.join([' '.join(words[:mid]), ' '.join(words[mid:])])
            else:
                labels[node] = node
        else:
            labels[node] = node
    
    nx.draw_networkx_labels(G, pos, labels,
                           font_size=10,
                           font_weight='bold')
    
    # Styling
    plt.title(f"Prerequisites for: {main_topic}", fontsize=16, fontweight='bold', pad=20)
    plt.axis('off')
    plt.tight_layout()
    
    # Add legend
    from matplotlib.patches import Patch
    legend_elements = [
        Patch(facecolor='lightblue', edgecolor='black', label='Prerequisites'),
        Patch(facecolor='orange', edgecolor='black', label='Main Topic'),
        plt.Line2D([0], [0], color='#1f77b4', linewidth=3, label='Learning Path')
    ]
    plt.legend(handles=legend_elements, loc='upper right')
    
    plt.show()
    
    return G

def create_hierarchical_layout(G, main_topic, prerequisites):
    """Create hierarchical layout with main topic at top"""
    pos = {}
    
    # Position prerequisites in levels
    max_level = len(prerequisites)
    
    for prereq in prerequisites:
        level = prereq['level']
        # Horizontal spread
        x = (level - (max_level + 1) / 2) * 2
        y = level
        pos[prereq['name']] = (x, y)
    
    # Main topic at top center
    pos[main_topic] = (0, max_level + 2)
    
    return pos

def create_circular_layout(G, main_topic, prerequisites):
    """Create circular layout with main topic in center"""
    pos = {}
    
    # Prerequisites in circle
    n = len(prerequisites)
    for i, prereq in enumerate(prerequisites):
        angle = 2 * np.pi * i / n
        radius = 4
        x = radius * np.cos(angle)
        y = radius * np.sin(angle)
        pos[prereq['name']] = (x, y)
    
    # Main topic in center
    pos[main_topic] = (0, 0)
    
    return pos

def main():
    """Main execution function"""
    
    print("=== Prerequisite Graph Generator with Solid Lines ===\\n")
    
    # Get input
    topic = input("Enter a topic/subject: ").strip()
    if not topic:
        topic = "Deep Learning"
        print(f"Using default: {topic}")
    
    model = input("Ollama model (default: llama2): ").strip()
    if not model:
        model = "llama2"
    
    layout = input("Layout style (hierarchical/circular, default: hierarchical): ").strip()
    if not layout:
        layout = "hierarchical"
    
    print(f"\\nGenerating prerequisites for '{topic}' using {model}...")
    
    # Generate prerequisites
    prereq_data = generate_prerequisites_ollama(topic, model)
    
    # Display results
    print(f"\\nPrerequisites for: {prereq_data['main_topic']}")
    print("-" * 50)
    for i, prereq in enumerate(prereq_data['prerequisites'], 1):
        print(f"{i}. {prereq['name']}")
    
    # Create and display graph with solid lines
    print(f"\\nCreating {layout} graph with solid lines...")
    G = create_solid_line_graph(prereq_data, layout)
    
    # Save graph data
    filename = f"{topic.replace(' ', '_').lower()}_prerequisites.json"
    with open(filename, 'w') as f:
        json.dump(prereq_data, f, indent=2)
    print(f"\\nData saved to: {filename}")

if __name__ == "__main__":
    main()
