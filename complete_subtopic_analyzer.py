#!/usr/bin/env python3
"""
Complete Subtopic Learning Path Analyzer with Visualization

Analyzes learning paths between subtopics with:
- Real graph-based pathfinding
- Visual graph representation 
- Detailed study recommendations
- Interactive subtopic selection
"""

import json
import networkx as nx
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from datetime import datetime
import argparse

def load_graph_data():
    """Load the DSA graph data."""
    try:
        with open("python-scraper/output/dsa_graph.json", 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"❌ Error loading data: {e}")
        return None

def build_graph(data):
    """Build NetworkX graph from JSON data."""
    G = nx.DiGraph()
    
    # Add nodes
    node_data = {}
    for node in data.get('nodes', []):
        G.add_node(node['id'], **node)
        node_data[node['id']] = node
    
    # Add edges
    for edge in data.get('edges', []):
        G.add_edge(edge['source'], edge['target'], **edge)
    
    return G, node_data

def find_subtopics_by_keyword(node_data, keyword):
    """Find subtopics containing a keyword."""
    matches = []
    for node_id, node in node_data.items():
        if (node.get('type') == 'subtopic' and 
            keyword.lower() in node.get('name', '').lower()):
            matches.append((node_id, node))
    return matches

def analyze_path(G, node_data, source_id, target_id):
    """Analyze the learning path between two subtopics."""
    print(f"\n🎯 LEARNING PATH ANALYSIS")
    print("=" * 60)
    
    source = node_data[source_id]
    target = node_data[target_id]
    
    print(f"📚 From: {source['name']} (ID: {source_id})")
    print(f"🎯 To: {target['name']} (ID: {target_id})")
    
    # Find shortest path
    try:
        path = nx.shortest_path(G, source_id, target_id)
        print(f"\n🛤️  SHORTEST PATH ({len(path)} steps):")
        
        for i, node_id in enumerate(path):
            node = node_data[node_id]
            if i == 0:
                status = "✅ COMPLETED (You know this)"
            elif i == len(path) - 1:
                status = "🎯 TARGET (Your goal)"
            else:
                status = "📚 TO LEARN (Required step)"
            
            print(f"\n   📌 STEP {i+1}: {node['name']}")
            print(f"      {status}")
            print(f"      🆔 ID: {node_id}")
            print(f"      📊 Level: {node.get('level', 'unknown')}")
            print(f"      📝 Description: {node.get('description', 'No description')[:80]}...")
            
            # Show connection type to next node
            if i < len(path) - 1:
                edge_data = G.get_edge_data(node_id, path[i+1], {})
                conn_type = edge_data.get('type', 'unknown')
                print(f"      🔗 Connection to next: {conn_type}")
        
        return path
        
    except nx.NetworkXNoPath:
        print("❌ No direct path found")
        return []

def create_study_plan(path, node_data):
    """Create a detailed study plan."""
    if len(path) <= 1:
        return
        
    print(f"\n📅 PERSONALIZED STUDY PLAN")
    print("=" * 60)
    
    learning_steps = path[1:]  # Exclude what you already know
    weeks_needed = len(learning_steps)
    
    print(f"⏱️  Total learning time: {weeks_needed} weeks")
    print(f"📚 Steps to master: {len(learning_steps)} subtopics")
    
    for i, node_id in enumerate(learning_steps):
        node = node_data[node_id]
        week_num = i + 1
        
        print(f"\n🗓️  WEEK {week_num}: {node['name']}")
        print(f"   🎯 Goal: Master {node['name']} concepts and implementation")
        print(f"   📖 Monday-Tuesday: Study theory and concepts")
        print(f"   💻 Wednesday-Thursday: Practice coding and implementation")  
        print(f"   🧪 Friday-Weekend: Solve problems and apply knowledge")
        
        if node['name'].lower() == 'searching':
            print(f"   💡 Special focus: Learn linear search, binary search, time complexity")
        elif node['name'].lower() == 'sorting':
            print(f"   💡 Special focus: Master bubble sort, merge sort, quick sort algorithms")

def visualize_learning_path(G, node_data, path, source_name, target_name):
    """Create a comprehensive visualization of the learning path."""
    if not path:
        print("❌ Cannot visualize - no path found")
        return
    
    print(f"\n🎨 Creating learning path visualization...")
    
    plt.figure(figsize=(16, 12))
    
    # Create subgraph with path and relevant neighbors
    subgraph_nodes = set(path)
    
    # Add related array subtopics for context
    for node_id in path:
        neighbors = list(G.predecessors(node_id)) + list(G.successors(node_id))
        for neighbor in neighbors[:3]:  # Limit neighbors
            neighbor_node = node_data.get(neighbor, {})
            if (neighbor_node.get('type') == 'subtopic' and 
                neighbor_node.get('parent_topic') == 't729'):  # Array topic
                subgraph_nodes.add(neighbor)
    
    subgraph = G.subgraph(subgraph_nodes)
    
    # Position nodes
    pos = nx.spring_layout(subgraph, k=3, iterations=100, seed=42)
    
    # Color and size nodes based on their role
    node_colors = []
    node_sizes = []
    node_labels = {}
    
    for node_id in subgraph.nodes():
        node = node_data[node_id]
        name = node['name']
        if len(name) > 12:
            name = name[:10] + "..."
        node_labels[node_id] = f"{name}\n({node_id})"
        
        if node_id == path[0]:  # Source (known)
            node_colors.append('#4CAF50')  # Green
            node_sizes.append(1500)
        elif node_id == path[-1]:  # Target
            node_colors.append('#FF5722')  # Red-orange  
            node_sizes.append(1500)
        elif node_id in path:  # Learning steps
            node_colors.append('#2196F3')  # Blue
            node_sizes.append(1200)
        else:  # Context nodes
            node_colors.append('#E0E0E0')  # Light gray
            node_sizes.append(800)
    
    # Draw nodes
    nx.draw_networkx_nodes(subgraph, pos, node_color=node_colors, 
                          node_size=node_sizes, alpha=0.9, 
                          edgecolors='black', linewidths=2)
    
    # Color edges
    edge_colors = []
    edge_widths = []
    
    for edge in subgraph.edges():
        # Check if this is a path edge
        is_path_edge = False
        for i in range(len(path) - 1):
            if path[i] == edge[0] and path[i + 1] == edge[1]:
                is_path_edge = True
                break
        
        if is_path_edge:
            edge_colors.append('#FF9800')  # Orange for learning path
            edge_widths.append(4)
        else:
            edge_colors.append('#CCCCCC')  # Gray for context
            edge_widths.append(1)
    
    # Draw edges with varying widths
    for i, edge in enumerate(subgraph.edges()):
        nx.draw_networkx_edges(subgraph, pos, edgelist=[edge], 
                              edge_color=edge_colors[i], width=edge_widths[i],
                              alpha=0.7, arrows=True, arrowsize=20, arrowstyle='->')
    
    # Add labels
    nx.draw_networkx_labels(subgraph, pos, node_labels, font_size=10, 
                           font_weight='bold',
                           bbox=dict(boxstyle="round,pad=0.3", 
                                   facecolor="white", alpha=0.8))
    
    # Create comprehensive legend
    legend_elements = [
        mpatches.Patch(color='#4CAF50', label=f'✅ Known: {source_name}'),
        mpatches.Patch(color='#2196F3', label='📚 To Learn: Learning Steps'),
        mpatches.Patch(color='#FF5722', label=f'🎯 Target: {target_name}'),
        mpatches.Patch(color='#E0E0E0', label='🔗 Related: Other Array Subtopics'),
        mpatches.Patch(color='#FF9800', label='🛤️ Optimal Learning Path')
    ]
    
    plt.legend(handles=legend_elements, loc='upper left', bbox_to_anchor=(0, 1),
              fontsize=12, title="🎨 Learning Path Legend", title_fontsize=13)
    
    # Comprehensive title
    title = f"🎯 Subtopic Learning Path: {source_name} → {target_name}\n"
    title += f"📊 Path: {len(path)} steps • ⏱️ Time: ~{len(path)-1} weeks • 🎓 Level: intermediate"
    
    plt.title(title, fontsize=16, fontweight='bold', pad=30)
    plt.axis('off')
    plt.tight_layout()
    
    # Save visualization
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"learning_path_{source_name.lower().replace(' ', '_')}_to_{target_name.lower().replace(' ', '_')}_{timestamp}.png"
    plt.savefig(filename, dpi=300, bbox_inches='tight', facecolor='white')
    print(f"💾 Visualization saved as: {filename}")
    
    plt.show()
    return filename

def interactive_mode(G, node_data):
    """Interactive subtopic selection mode."""
    print("🎯 INTERACTIVE SUBTOPIC LEARNING PATH ANALYZER")
    print("=" * 70)
    
    # Show available subtopics
    subtopics = [node for node in node_data.values() if node.get('type') == 'subtopic']
    print(f"\n📚 Available subtopics: {len(subtopics)}")
    print("\nSample Array subtopics:")
    array_subtopics = [sub for sub in subtopics if sub.get('parent_topic') == 't729']
    for i, sub in enumerate(array_subtopics[:10]):
        print(f"   {i+1}. {sub['name']} (ID: {sub['id']})")
    
    # Get source
    while True:
        source_input = input("\n📚 Enter the subtopic you know (name or ID): ").strip()
        source_matches = find_subtopics_by_keyword(node_data, source_input)
        
        if len(source_matches) == 1:
            source_id = source_matches[0][0]
            break
        elif len(source_matches) > 1:
            print("Multiple matches found:")
            for i, (node_id, node) in enumerate(source_matches):
                print(f"   {i+1}. {node['name']} (ID: {node_id})")
            try:
                choice = int(input("Select number: ")) - 1
                source_id = source_matches[choice][0]
                break
            except:
                print("Invalid selection")
        else:
            print("No matches found. Try again.")
    
    # Get target
    while True:
        target_input = input("🎯 Enter the subtopic you want to learn (name or ID): ").strip()
        target_matches = find_subtopics_by_keyword(node_data, target_input)
        
        if len(target_matches) == 1:
            target_id = target_matches[0][0]
            break
        elif len(target_matches) > 1:
            print("Multiple matches found:")
            for i, (node_id, node) in enumerate(target_matches):
                print(f"   {i+1}. {node['name']} (ID: {node_id})")
            try:
                choice = int(input("Select number: ")) - 1
                target_id = target_matches[choice][0]
                break
            except:
                print("Invalid selection")
        else:
            print("No matches found. Try again.")
    
    # Analyze the path
    path = analyze_path(G, node_data, source_id, target_id)
    if path:
        create_study_plan(path, node_data)
        visualize_learning_path(G, node_data, path, 
                               node_data[source_id]['name'], 
                               node_data[target_id]['name'])

def demo_deletion_to_sorting(G, node_data):
    """Demo: Array Deletion to Array Sorting analysis."""
    print("🎯 DEMO: Array Deletion → Array Sorting Learning Path")
    print("=" * 70)
    
    deletion_id = "s164"  # Array Deletion
    sorting_id = "s190"   # Array Sorting
    
    path = analyze_path(G, node_data, deletion_id, sorting_id)
    if path:
        create_study_plan(path, node_data)
        visualize_learning_path(G, node_data, path, "Array Deletion", "Array Sorting")
    
    print("\n🎓 LEARNING INSIGHTS:")
    print("• Array Searching is the key bridge between Deletion and Sorting")
    print("• Searching teaches you to find elements efficiently") 
    print("• This knowledge is essential for sorting algorithms")
    print("• Total learning time: ~2 weeks for this specific path")

def main():
    """Main function with command line interface."""
    parser = argparse.ArgumentParser(description="Subtopic Learning Path Analyzer")
    parser.add_argument("--interactive", "-i", action="store_true", 
                       help="Interactive subtopic selection mode")
    parser.add_argument("--source", help="Source subtopic name or ID")
    parser.add_argument("--target", help="Target subtopic name or ID")
    
    args = parser.parse_args()
    
    # Load data
    data = load_graph_data()
    if not data:
        return
    
    G, node_data = build_graph(data)
    print(f"✅ Loaded graph: {G.number_of_nodes()} nodes, {G.number_of_edges()} edges")
    
    if args.interactive:
        interactive_mode(G, node_data)
    elif args.source and args.target:
        # Find subtopics by name or ID
        source_matches = find_subtopics_by_keyword(node_data, args.source)
        target_matches = find_subtopics_by_keyword(node_data, args.target)
        
        if source_matches and target_matches:
            path = analyze_path(G, node_data, source_matches[0][0], target_matches[0][0])
            if path:
                create_study_plan(path, node_data)
                visualize_learning_path(G, node_data, path, args.source, args.target)
    else:
        # Default demo
        demo_deletion_to_sorting(G, node_data)

if __name__ == "__main__":
    main()
