#!/usr/bin/env python3
"""
Enhanced Subtopic-to-Subtopic Learning Path Analyzer with Visualization

This provides a complete subtopic learning gap analysis with:
- Real graph-based path finding from any subtopic to any subtopic
- Interactive subtopic selection or direct specification
- Visual graph representation of the learning path
- Detailed step-by-step gap analysis and recommendations
- Study plan generation
"""

import json
import networkx as nx
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import numpy as np
from collections import defaultdict, deque
import heapq
from typing import List, Dict, Set, Tuple, Optional
import argparse
from datetime import datetime

class EnhancedSubtopicPathAnalyzer:
    def __init__(self, graph_file="python-scraper/output/dsa_graph.json"):
        """Initialize with real graph data."""
        self.graph_file = graph_file
        self.graph_data = self.load_graph_data()
        self.graph = self.build_networkx_graph()
        self.all_nodes = {node['id']: node for node in self.graph_data.get('nodes', [])}
        self.topics = [node for node in self.graph_data.get('nodes', []) if node['type'] == 'topic']
        self.subtopics = [node for node in self.graph_data.get('nodes', []) if node['type'] == 'subtopic']
        
        # Create lookup dictionaries
        self.subtopic_name_to_id = {sub['name'].lower(): sub['id'] for sub in self.subtopics}
        self.topic_name_to_id = {topic['name'].lower(): topic['id'] for topic in self.topics}
        self.all_name_to_id = {**self.subtopic_name_to_id, **self.topic_name_to_id}
        
        print(f"✅ Loaded {len(self.subtopics)} subtopics and {len(self.topics)} topics")
    
    def load_graph_data(self):
        """Load the real DSA graph data from JSON file."""
        try:
            with open(self.graph_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except FileNotFoundError:
            print(f"❌ Error: Graph file '{self.graph_file}' not found.")
            return {"nodes": [], "edges": []}
    
    def build_networkx_graph(self):
        """Build NetworkX graph from the actual JSON data."""
        G = nx.DiGraph()
        
        # Add nodes
        for node in self.graph_data.get('nodes', []):
            G.add_node(node['id'], **node)
        
        # Add edges
        for edge in self.graph_data.get('edges', []):
            G.add_edge(edge['source'], edge['target'], **edge)
        
        print(f"📊 Built graph with {G.number_of_nodes()} nodes and {G.number_of_edges()} edges")
        return G
    
    def find_subtopic_by_name(self, name: str) -> Optional[Dict]:
        """Find a subtopic by name (case-insensitive)."""
        name_lower = name.lower()
        
        # Exact match
        if name_lower in self.subtopic_name_to_id:
            subtopic_id = self.subtopic_name_to_id[name_lower]
            return self.all_nodes[subtopic_id]
        
        # Partial match
        matches = []
        for subtopic_name, subtopic_id in self.subtopic_name_to_id.items():
            if name_lower in subtopic_name or subtopic_name in name_lower:
                matches.append((subtopic_name, subtopic_id))
        
        if len(matches) == 1:
            return self.all_nodes[matches[0][1]]
        elif len(matches) > 1:
            print(f"🔍 Multiple matches found for '{name}':")
            for i, (match_name, match_id) in enumerate(matches, 1):
                subtopic_data = self.all_nodes[match_id]
                print(f"   {i}. {subtopic_data['name']} (ID: {match_id})")
            return None
        
        return None
    
    def find_shortest_path(self, source_id: str, target_id: str) -> List[str]:
        """Find shortest path between two nodes using Dijkstra's algorithm."""
        try:
            path = nx.shortest_path(self.graph, source_id, target_id)
            return path
        except nx.NetworkXNoPath:
            print(f"❌ No direct path found from {source_id} to {target_id}")
            return []
        except nx.NodeNotFound as e:
            print(f"❌ Node not found: {e}")
            return []
    
    def find_all_paths(self, source_id: str, target_id: str, max_paths: int = 3) -> List[List[str]]:
        """Find multiple paths between two nodes."""
        try:
            paths = list(nx.all_simple_paths(self.graph, source_id, target_id, cutoff=6))
            # Sort by length and return top paths
            paths.sort(key=len)
            return paths[:max_paths]
        except nx.NetworkXNoPath:
            return []
        except nx.NodeNotFound:
            return []
    
    def analyze_subtopic_path(self, source_name: str, target_name: str, show_viz: bool = True) -> Dict:
        """Analyze learning path between two subtopics."""
        print(f"🎯 SUBTOPIC LEARNING PATH ANALYSIS")
        print("=" * 80)
        print(f"From: {source_name} → To: {target_name}")
        
        # Find source and target subtopics
        source = self.find_subtopic_by_name(source_name)
        target = self.find_subtopic_by_name(target_name)
        
        if not source:
            print(f"❌ Source subtopic '{source_name}' not found")
            return {}
        
        if not target:
            print(f"❌ Target subtopic '{target_name}' not found")
            return {}
        
        print(f"✅ Source: {source['name']} (ID: {source['id']})")
        print(f"✅ Target: {target['name']} (ID: {target['id']})")
        
        # Find paths
        shortest_path = self.find_shortest_path(source['id'], target['id'])
        all_paths = self.find_all_paths(source['id'], target['id'])
        
        if not shortest_path:
            print("❌ No learning path found between these subtopics")
            return {}
        
        # Analyze the path
        path_analysis = self.analyze_path_details(shortest_path, all_paths)
        
        # Generate study plan
        study_plan = self.generate_study_plan(shortest_path)
        
        # Visualize if requested
        if show_viz:
            self.visualize_subtopic_path(shortest_path, source_name, target_name)
        
        return {
            'source': source,
            'target': target,
            'shortest_path': shortest_path,
            'all_paths': all_paths,
            'analysis': path_analysis,
            'study_plan': study_plan
        }
    
    def analyze_path_details(self, path: List[str], all_paths: List[List[str]]) -> Dict:
        """Analyze the details of the learning path."""
        print(f"\n📚 LEARNING PATH ANALYSIS:")
        print("=" * 60)
        
        analysis = {
            'path_length': len(path),
            'steps': [],
            'complexity_progression': [],
            'time_estimate': 0
        }
        
        total_weeks = len(path) - 1  # Exclude starting point
        
        for i, node_id in enumerate(path):
            node = self.all_nodes[node_id]
            
            step_info = {
                'position': i + 1,
                'id': node_id,
                'name': node['name'],
                'type': node['type'],
                'level': node.get('level', 'unknown'),
                'description': node.get('description', 'No description available'),
                'status': 'COMPLETED' if i == 0 else ('TARGET' if i == len(path) - 1 else 'TO LEARN')
            }
            
            # Print step details
            status_emoji = "✅" if step_info['status'] == 'COMPLETED' else ("🎯" if step_info['status'] == 'TARGET' else "📚")
            print(f"   📌 STEP {i + 1}: {node['name']}")
            print(f"      {status_emoji} Status: {step_info['status']}")
            print(f"      🆔 ID: {node_id}")
            print(f"      📊 Level: {step_info['level']}")
            print(f"      📝 Description: {step_info['description']}")
            
            if i > 0:  # Not the starting point
                print(f"      💡 Learning focus: Essential step in your path to {self.all_nodes[path[-1]]['name']}")
            
            analysis['steps'].append(step_info)
            
            if i > 0:  # Add time estimate (exclude starting point)
                analysis['time_estimate'] += 1  # 1 week per step
        
        print(f"\n⏱️  ESTIMATED LEARNING TIME: {analysis['time_estimate']} weeks")
        print(f"📊 PATH EFFICIENCY: {len(path)} steps (including starting point)")
        
        return analysis
    
    def generate_study_plan(self, path: List[str]) -> Dict:
        """Generate a detailed week-by-week study plan."""
        print(f"\n📅 DETAILED STUDY PLAN:")
        print("=" * 60)
        
        study_plan = {
            'total_weeks': len(path) - 1,
            'weekly_plans': []
        }
        
        for i in range(1, len(path)):  # Skip starting point
            node = self.all_nodes[path[i]]
            week_num = i
            
            weekly_plan = {
                'week': week_num,
                'subtopic': node['name'],
                'id': node['id'],
                'focus': f"Master {node['name']} concepts and implementation"
            }
            
            print(f"🗓️  WEEK {week_num}: {node['name']}")
            print(f"   🎯 Goal: {weekly_plan['focus']}")
            print(f"   📚 Monday-Tuesday: Theory and concepts")
            print(f"   💻 Wednesday-Thursday: Implementation and coding")
            print(f"   🧪 Friday-Weekend: Practice problems and review")
            print()
            
            study_plan['weekly_plans'].append(weekly_plan)
        
        return study_plan
    
    def visualize_subtopic_path(self, path: List[str], source_name: str, target_name: str):
        """Create a visual representation of the subtopic learning path."""
        print(f"\n🎨 GENERATING LEARNING PATH VISUALIZATION...")
        
        # Create a subgraph containing the path and immediate neighbors
        subgraph_nodes = set(path)
        
        # Add immediate neighbors for context
        for node_id in path:
            neighbors = list(self.graph.predecessors(node_id)) + list(self.graph.successors(node_id))
            for neighbor in neighbors[:3]:  # Limit neighbors to avoid clutter
                if self.all_nodes[neighbor]['type'] == 'subtopic':
                    subgraph_nodes.add(neighbor)
        
        subgraph = self.graph.subgraph(subgraph_nodes)
        
        # Set up the plot
        plt.figure(figsize=(16, 12))
        pos = nx.spring_layout(subgraph, k=3, iterations=50, seed=42)
        
        # Define colors for different node types
        node_colors = []
        node_sizes = []
        edge_colors = []
        
        for node_id in subgraph.nodes():
            if node_id in path:
                if node_id == path[0]:  # Source
                    node_colors.append('#4CAF50')  # Green
                    node_sizes.append(1200)
                elif node_id == path[-1]:  # Target
                    node_colors.append('#FF5722')  # Red-orange
                    node_sizes.append(1200)
                else:  # Path nodes
                    node_colors.append('#2196F3')  # Blue
                    node_sizes.append(1000)
            else:  # Context nodes
                node_colors.append('#E0E0E0')  # Light gray
                node_sizes.append(600)
        
        # Color edges
        for edge in subgraph.edges():
            if edge[0] in path and edge[1] in path:
                # Check if this is a path edge
                for i in range(len(path) - 1):
                    if (path[i] == edge[0] and path[i + 1] == edge[1]):
                        edge_colors.append('#FF9800')  # Orange for path edges
                        break
                else:
                    edge_colors.append('#CCCCCC')  # Light gray for other edges
            else:
                edge_colors.append('#F0F0F0')  # Very light gray for context edges
        
        # Draw the graph
        nx.draw_networkx_nodes(subgraph, pos, node_color=node_colors, node_size=node_sizes, alpha=0.8)
        nx.draw_networkx_edges(subgraph, pos, edge_color=edge_colors, alpha=0.6, width=2, arrows=True, arrowsize=20)
        
        # Add labels
        labels = {}
        for node_id in subgraph.nodes():
            node_name = self.all_nodes[node_id]['name']
            if len(node_name) > 15:
                node_name = node_name[:12] + "..."
            labels[node_id] = node_name
        
        nx.draw_networkx_labels(subgraph, pos, labels, font_size=10, font_weight='bold')
        
        # Add legend
        legend_elements = [
            mpatches.Patch(color='#4CAF50', label=f'✅ Starting Point: {source_name}'),
            mpatches.Patch(color='#2196F3', label='📚 Learning Steps'),
            mpatches.Patch(color='#FF5722', label=f'🎯 Target: {target_name}'),
            mpatches.Patch(color='#E0E0E0', label='🔗 Related Subtopics'),
            mpatches.Patch(color='#FF9800', label='🛤️ Learning Path')
        ]
        
        plt.legend(handles=legend_elements, loc='upper left', bbox_to_anchor=(0, 1))
        
        # Set title and formatting
        plt.title(f"🎯 Learning Path: {source_name} → {target_name}\n"
                 f"📊 {len(path)} steps • ⏱️ ~{len(path)-1} weeks", 
                 fontsize=16, fontweight='bold', pad=20)
        plt.axis('off')
        plt.tight_layout()
        
        # Save the visualization
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"subtopic_path_{timestamp}.png"
        plt.savefig(filename, dpi=300, bbox_inches='tight', facecolor='white')
        print(f"💾 Visualization saved as: {filename}")
        
        plt.show()
    
    def interactive_subtopic_selection(self):
        """Interactive mode for selecting subtopics."""
        print("🎯 INTERACTIVE SUBTOPIC LEARNING PATH ANALYZER")
        print("=" * 60)
        
        # Show available subtopics by category
        self.show_available_subtopics()
        
        # Get source subtopic
        while True:
            source_name = input("\n📚 Enter the subtopic you already know: ").strip()
            if self.find_subtopic_by_name(source_name):
                break
            print("❌ Subtopic not found. Please try again or check the available subtopics above.")
        
        # Get target subtopic
        while True:
            target_name = input("🎯 Enter the subtopic you want to learn: ").strip()
            if self.find_subtopic_by_name(target_name):
                break
            print("❌ Subtopic not found. Please try again or check the available subtopics above.")
        
        # Analyze the path
        result = self.analyze_subtopic_path(source_name, target_name)
        return result
    
    def show_available_subtopics(self):
        """Show available subtopics organized by topic."""
        print("\n📚 AVAILABLE SUBTOPICS:")
        print("-" * 40)
        
        # Group subtopics by parent topic
        topic_subtopics = defaultdict(list)
        
        # Find parent topics for each subtopic
        for subtopic in self.subtopics:
            # Look for edges from topics to this subtopic
            parent_topics = []
            for edge in self.graph_data.get('edges', []):
                if edge['target'] == subtopic['id']:
                    source_node = self.all_nodes.get(edge['source'])
                    if source_node and source_node['type'] == 'topic':
                        parent_topics.append(source_node['name'])
            
            if parent_topics:
                for parent in parent_topics:
                    topic_subtopics[parent].append(subtopic)
            else:
                topic_subtopics['Other'].append(subtopic)
        
        # Display organized subtopics
        for topic_name, subtopics in sorted(topic_subtopics.items()):
            if subtopics:  # Only show topics that have subtopics
                print(f"\n🗂️  {topic_name}:")
                for subtopic in sorted(subtopics, key=lambda x: x['name'])[:10]:  # Limit to 10 per topic
                    print(f"   • {subtopic['name']}")
                if len(subtopics) > 10:
                    print(f"   ... and {len(subtopics) - 10} more")

def main():
    """Main function with command line interface."""
    parser = argparse.ArgumentParser(description="Enhanced Subtopic Learning Path Analyzer")
    parser.add_argument("--source", help="Source subtopic name")
    parser.add_argument("--target", help="Target subtopic name")
    parser.add_argument("--no-viz", action="store_true", help="Skip visualization")
    parser.add_argument("--interactive", "-i", action="store_true", help="Interactive mode")
    
    args = parser.parse_args()
    
    # Initialize analyzer
    analyzer = EnhancedSubtopicPathAnalyzer()
    
    if args.interactive:
        # Interactive mode
        analyzer.interactive_subtopic_selection()
    elif args.source and args.target:
        # Direct analysis mode
        analyzer.analyze_subtopic_path(args.source, args.target, show_viz=not args.no_viz)
    else:
        # Default: Array Deletion to Array Sorting demo
        print("🎯 DEFAULT DEMO: Array Deletion → Array Sorting")
        analyzer.analyze_subtopic_path("Array Deletion", "Array Sorting", show_viz=not args.no_viz)

if __name__ == "__main__":
    main()
