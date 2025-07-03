#!/usr/bin/env python3
"""
Real Graph-Based Learning Path Analyzer

This system:
1. Loads the actual graph structure from JSON with all edges
2. Performs intelligent clustering of topics based on relationships
3. Uses real graph algorithms to find minimum learning paths
4. Provides personalized gap analysis based on actual graph topology
"""

import json
import networkx as nx
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from collections import defaultdict, deque
import heapq
from typing import List, Dict, Set, Tuple
import numpy as np
from sklearn.cluster import KMeans, DBSCAN
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import argparse

class RealGraphLearningAnalyzer:
    def __init__(self, graph_file=None):
        """Initialize with real graph data."""
        if graph_file is None:
            # Default to graph_data.json in the same directory
            import os
            current_dir = os.path.dirname(__file__)
            graph_file = os.path.join(current_dir, "graph_data.json")
        
        self.graph_file = graph_file
        self.graph_data = self.load_graph_data()
        self.graph = self.build_real_graph()
        self.topics = self.get_all_topics()
        self.subtopics = self.get_all_subtopics()
        self.clusters = self.perform_intelligent_clustering()
        self.topic_name_to_id = {topic['name'].lower(): topic['id'] for topic in self.topics}
        self.subtopic_name_to_id = {subtopic['name'].lower(): subtopic['id'] for subtopic in self.subtopics}
        self.all_name_to_id = {**self.topic_name_to_id, **self.subtopic_name_to_id}
        self.all_id_to_data = {node['id']: node for node in self.graph_data.get('nodes', [])}
        
    def load_graph_data(self):
        """Load the real DSA graph data from JSON file."""
        try:
            with open(self.graph_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except FileNotFoundError:
            print(f"Error: Graph file '{self.graph_file}' not found.")
            return {"nodes": [], "edges": []}
    
    def build_real_graph(self):
        """Build NetworkX graph from the actual JSON data with all edges."""
        G = nx.DiGraph()
        
        # Add all nodes
        for node in self.graph_data.get('nodes', []):
            G.add_node(node['id'], **node)
        
        # Add all edges from the JSON file
        for edge in self.graph_data.get('edges', []):
            # Set edge weights based on relationship type for pathfinding
            weight = self.get_edge_weight(edge.get('type', 'default'))
            G.add_edge(edge['source'], edge['target'], weight=weight, **edge)
        
        print(f"✅ Real graph loaded: {G.number_of_nodes()} nodes, {G.number_of_edges()} edges")
        return G
    
    def get_edge_weight(self, edge_type):
        """Get edge weight based on relationship type for optimal pathfinding."""
        weights = {
            'prerequisite': 0.1,    # Prerequisites are critical - lowest weight (highest priority)
            'sequence': 0.2,        # Sequence learning - very important
            'contains': 0.3,        # Subtopic relationships - important
            'leads_to': 0.5,        # Natural progression - moderate
            'related': 0.8,         # Related concepts - lower priority
            'default': 1.0          # Default relationships
        }
        return weights.get(edge_type, 1.0)
    
    def get_all_topics(self):
        """Get all main topics."""
        return [node for node in self.graph_data.get('nodes', []) if node.get('type') == 'topic']
    
    def get_all_subtopics(self):
        """Get all subtopics."""
        return [node for node in self.graph_data.get('nodes', []) if node.get('type') == 'subtopic']
    
    def perform_intelligent_clustering(self):
        """Perform intelligent clustering based on graph structure and content."""
        print("🔍 Performing intelligent topic clustering...")
        
        # Create feature vectors for topics based on:
        # 1. Description content (TF-IDF)
        # 2. Graph connectivity patterns
        # 3. Subtopic relationships
        
        topic_features = {}
        descriptions = []
        topic_ids = []
        
        for topic in self.topics:
            topic_id = topic['id']
            topic_ids.append(topic_id)
            
            # Content features
            description = topic.get('description', '') + ' ' + topic.get('name', '')
            descriptions.append(description)
            
            # Graph structure features
            in_degree = self.graph.in_degree(topic_id)
            out_degree = self.graph.out_degree(topic_id)
            
            # Subtopic count
            subtopic_count = len([n for n in self.graph.successors(topic_id) 
                                 if self.graph.nodes[n].get('type') == 'subtopic'])
            
            # Prerequisite relationships
            prerequisite_count = len([n for n in self.graph.predecessors(topic_id)
                                    if self.graph.get_edge_data(n, topic_id, {}).get('type') == 'prerequisite'])
            
            topic_features[topic_id] = {
                'in_degree': in_degree,
                'out_degree': out_degree,
                'subtopic_count': subtopic_count,
                'prerequisite_count': prerequisite_count
            }
        
        # TF-IDF on descriptions
        vectorizer = TfidfVectorizer(max_features=100, stop_words='english')
        if descriptions:
            tfidf_matrix = vectorizer.fit_transform(descriptions)
        else:
            tfidf_matrix = np.array([]).reshape(0, 0)
        
        # Combine features
        feature_matrix = []
        for i, topic_id in enumerate(topic_ids):
            features = []
            if tfidf_matrix.shape[0] > 0:
                features.extend(tfidf_matrix[i].toarray()[0])
            features.extend([
                topic_features[topic_id]['in_degree'],
                topic_features[topic_id]['out_degree'],
                topic_features[topic_id]['subtopic_count'],
                topic_features[topic_id]['prerequisite_count']
            ])
            feature_matrix.append(features)
        
        feature_matrix = np.array(feature_matrix)
        
        # Perform clustering
        clusters = {}
        if len(feature_matrix) > 0:
            # Use DBSCAN for automatic cluster detection
            clustering = DBSCAN(eps=0.5, min_samples=1).fit(feature_matrix)
            
            for i, topic_id in enumerate(topic_ids):
                cluster_id = clustering.labels_[i]
                if cluster_id not in clusters:
                    clusters[cluster_id] = []
                clusters[cluster_id].append(topic_id)
        
        print(f"✅ Found {len(clusters)} topic clusters")
        return clusters
    
    def find_node_by_name(self, name):
        """Find a node ID by its name (case-insensitive)."""
        name_lower = name.lower().strip()
        
        # Exact match
        if name_lower in self.all_name_to_id:
            return self.all_name_to_id[name_lower]
        
        # Partial match
        matches = []
        for stored_name, node_id in self.all_name_to_id.items():
            if name_lower in stored_name or stored_name in name_lower:
                matches.append((stored_name, node_id))
        
        if len(matches) == 1:
            return matches[0][1]
        elif len(matches) > 1:
            # Return the best match (shortest name = more specific)
            best_match = min(matches, key=lambda x: len(x[0]))
            return best_match[1]
        
        return None
    
    def find_optimal_learning_path(self, completed_topics, target_topic):
        """Find optimal learning path using real graph structure and Dijkstra's algorithm."""
        print(f"🔍 Finding optimal path from {completed_topics} to {target_topic}")
        
        if target_topic in completed_topics:
            return {'path': [], 'reason': 'already_completed'}
        
        # Method 1: Direct path from any completed topic
        best_path = None
        best_distance = float('inf')
        
        for completed_topic in completed_topics:
            try:
                path = nx.shortest_path(self.graph, completed_topic, target_topic, weight='weight')
                distance = nx.shortest_path_length(self.graph, completed_topic, target_topic, weight='weight')
                
                if distance < best_distance:
                    best_distance = distance
                    best_path = path[1:]  # Remove the starting completed topic
                    
            except nx.NetworkXNoPath:
                continue
        
        if best_path:
            return {
                'path': best_path,
                'distance': best_distance,
                'reason': 'direct_path'
            }
        
        # Method 2: Find missing prerequisites using graph traversal
        print("🔍 No direct path found, analyzing prerequisites...")
        missing_prerequisites = self.find_missing_prerequisites(completed_topics, target_topic)
        
        if missing_prerequisites:
            return {
                'path': missing_prerequisites,
                'distance': len(missing_prerequisites),
                'reason': 'prerequisite_chain'
            }
        
        # Method 3: Use cluster analysis to find related topics
        print("🔍 Analyzing cluster-based learning path...")
        cluster_path = self.find_cluster_based_path(completed_topics, target_topic)
        
        return {
            'path': cluster_path,
            'distance': len(cluster_path),
            'reason': 'cluster_based'
        }
    
    def find_missing_prerequisites(self, completed_topics, target_topic):
        """Find missing prerequisites using graph analysis."""
        missing = []
        visited = set(completed_topics)
        queue = deque([target_topic])
        
        while queue:
            current = queue.popleft()
            if current in visited:
                continue
                
            visited.add(current)
            
            # Find all prerequisites (incoming edges with prerequisite type)
            for predecessor in self.graph.predecessors(current):
                edge_data = self.graph.get_edge_data(predecessor, current, {})
                edge_type = edge_data.get('type', '')
                
                if edge_type in ['prerequisite', 'sequence'] and predecessor not in completed_topics:
                    if predecessor not in missing:
                        missing.append(predecessor)
                    queue.append(predecessor)
        
        # Sort by graph distance from target (closer prerequisites first)
        missing.sort(key=lambda x: self.get_distance_to_target(x, target_topic))
        return missing
    
    def get_distance_to_target(self, node, target):
        """Get graph distance from node to target."""
        try:
            return nx.shortest_path_length(self.graph, node, target, weight='weight')
        except nx.NetworkXNoPath:
            return float('inf')
    
    def find_cluster_based_path(self, completed_topics, target_topic):
        """Find learning path using cluster analysis."""
        # Find which cluster the target topic belongs to
        target_cluster = None
        for cluster_id, topics in self.clusters.items():
            if target_topic in topics:
                target_cluster = cluster_id
                break
        
        if target_cluster is None:
            return []
        
        # Find topics in the same cluster that aren't completed
        cluster_topics = self.clusters[target_cluster]
        missing_in_cluster = [t for t in cluster_topics if t not in completed_topics and t != target_topic]
        
        # Sort by complexity (number of subtopics and prerequisites)
        missing_in_cluster.sort(key=lambda x: self.get_topic_complexity(x))
        
        return missing_in_cluster[:3]  # Return top 3 most relevant topics
    
    def get_topic_complexity(self, topic_id):
        """Calculate topic complexity based on subtopics and prerequisites."""
        subtopic_count = len([n for n in self.graph.successors(topic_id) 
                             if self.graph.nodes[n].get('type') == 'subtopic'])
        prerequisite_count = len([n for n in self.graph.predecessors(topic_id)
                                 if self.graph.get_edge_data(n, topic_id, {}).get('type') == 'prerequisite'])
        
        return subtopic_count + prerequisite_count * 2  # Prerequisites are weighted more
    
    def get_all_subtopics_for_topic(self, topic_id):
        """Get all subtopics for a topic using real graph relationships."""
        subtopics = []
        for successor in self.graph.successors(topic_id):
            if self.graph.nodes[successor].get('type') == 'subtopic':
                edge_data = self.graph.get_edge_data(topic_id, successor, {})
                if edge_data.get('type') == 'contains':
                    subtopics.append(successor)
        return subtopics
    
    def interactive_subtopic_selection(self):
        """Interactive selection of completed subtopics."""
        print("\n" + "="*80)
        print("📝 SUBTOPIC COMPLETION ANALYSIS")
        print("="*80)
        print("Let's analyze your progress at the subtopic level for more precise gap analysis.")
        
        completed_subtopics = []
        
        # Show all available subtopics grouped by topic
        topics_with_subtopics = {}
        for topic in self.topics:
            topic_id = topic['id']
            subtopics = self.get_all_subtopics_for_topic(topic_id)
            if subtopics:
                topics_with_subtopics[topic_id] = subtopics
        
        print(f"\n📚 Available Topics with Subtopics:")
        for i, (topic_id, subtopics) in enumerate(topics_with_subtopics.items(), 1):
            topic_data = self.all_id_to_data[topic_id]
            print(f"\n{i}. {topic_data['name']} (ID: {topic_id}) - {len(subtopics)} subtopics")
            for j, subtopic_id in enumerate(subtopics, 1):
                subtopic_data = self.all_id_to_data[subtopic_id]
                print(f"   {j}. {subtopic_data['name']} (ID: {subtopic_id})")
        
        # Interactive selection
        while True:
            print(f"\n📋 Current completed subtopics: {len(completed_subtopics)}")
            if completed_subtopics:
                for subtopic_id in completed_subtopics:
                    subtopic_data = self.all_id_to_data[subtopic_id]
                    print(f"   ✅ {subtopic_data['name']} (ID: {subtopic_id})")
            
            print(f"\nOptions:")
            print(f"1. Add completed subtopic by name")
            print(f"2. Add completed subtopic by ID")
            print(f"3. Remove subtopic from completed list")
            print(f"4. Continue with analysis")
            print(f"5. Show subtopic connections")
            
            choice = input("Choose option (1-5): ").strip()
            
            if choice == '1':
                name = input("Enter subtopic name: ").strip()
                subtopic_id = self.find_node_by_name(name)
                if subtopic_id and self.all_id_to_data[subtopic_id].get('type') == 'subtopic':
                    if subtopic_id not in completed_subtopics:
                        completed_subtopics.append(subtopic_id)
                        subtopic_data = self.all_id_to_data[subtopic_id]
                        print(f"✅ Added: {subtopic_data['name']}")
                    else:
                        print("⚠️  Already in completed list")
                else:
                    print(f"❌ Subtopic '{name}' not found")
            
            elif choice == '2':
                subtopic_id = input("Enter subtopic ID: ").strip()
                if subtopic_id in self.all_id_to_data and self.all_id_to_data[subtopic_id].get('type') == 'subtopic':
                    if subtopic_id not in completed_subtopics:
                        completed_subtopics.append(subtopic_id)
                        subtopic_data = self.all_id_to_data[subtopic_id]
                        print(f"✅ Added: {subtopic_data['name']}")
                    else:
                        print("⚠️  Already in completed list")
                else:
                    print(f"❌ Subtopic ID '{subtopic_id}' not found")
            
            elif choice == '3':
                if completed_subtopics:
                    print("Select subtopic to remove:")
                    for i, subtopic_id in enumerate(completed_subtopics, 1):
                        subtopic_data = self.all_id_to_data[subtopic_id]
                        print(f"   {i}. {subtopic_data['name']}")
                    try:
                        idx = int(input("Enter number: ")) - 1
                        if 0 <= idx < len(completed_subtopics):
                            removed = completed_subtopics.pop(idx)
                            removed_data = self.all_id_to_data[removed]
                            print(f"❌ Removed: {removed_data['name']}")
                    except ValueError:
                        print("Invalid selection")
                else:
                    print("No subtopics to remove")
            
            elif choice == '4':
                break
                
            elif choice == '5':
                self.show_subtopic_connections()
        
        return completed_subtopics
    
    def show_subtopic_connections(self):
        """Show connections between subtopics."""
        print("\n🔗 SUBTOPIC CONNECTIONS:")
        print("-" * 60)
        
        # Find all subtopic-to-subtopic connections
        subtopic_connections = []
        for edge in self.graph_data.get('edges', []):
            source_data = self.all_id_to_data.get(edge['source'], {})
            target_data = self.all_id_to_data.get(edge['target'], {})
            
            if (source_data.get('type') == 'subtopic' and 
                target_data.get('type') == 'subtopic'):
                subtopic_connections.append(edge)
        
        if subtopic_connections:
            print(f"Found {len(subtopic_connections)} subtopic-to-subtopic connections:")
            for i, edge in enumerate(subtopic_connections[:10], 1):  # Show first 10
                source_data = self.all_id_to_data[edge['source']]
                target_data = self.all_id_to_data[edge['target']]
                edge_type = edge.get('type', 'default')
                print(f"   {i}. {source_data['name']} → {target_data['name']} ({edge_type})")
            
            if len(subtopic_connections) > 10:
                print(f"   ... and {len(subtopic_connections) - 10} more connections")
        else:
            print("No direct subtopic-to-subtopic connections found in the graph.")
        
        # Show topic-subtopic relationships
        print(f"\n📚 Topic-Subtopic Relationships:")
        for topic in self.topics[:3]:  # Show first 3 topics
            topic_id = topic['id']
            subtopics = self.get_all_subtopics_for_topic(topic_id)
            if subtopics:
                print(f"   📖 {topic['name']}: {len(subtopics)} subtopics")
    
    def analyze_subtopic_learning_gaps(self, completed_subtopics, target_topic_id):
        """Analyze learning gaps at subtopic level."""
        print("\n" + "="*80)
        print("🔍 SUBTOPIC-LEVEL GAP ANALYSIS")
        print("="*80)
        
        # Get all subtopics for the target topic
        target_subtopics = self.get_all_subtopics_for_topic(target_topic_id)
        target_data = self.all_id_to_data[target_topic_id]
        
        print(f"🎯 Target Topic: {target_data['name']}")
        print(f"📝 Total subtopics in target: {len(target_subtopics)}")
        print(f"✅ Completed subtopics overall: {len(completed_subtopics)}")
        
        # Find completed subtopics within the target topic
        completed_in_target = [s for s in completed_subtopics if s in target_subtopics]
        missing_in_target = [s for s in target_subtopics if s not in completed_subtopics]
        
        print(f"✅ Completed in target topic: {len(completed_in_target)}")
        print(f"❌ Missing in target topic: {len(missing_in_target)}")
        
        # Show detailed breakdown
        if completed_in_target:
            print(f"\n✅ COMPLETED SUBTOPICS IN TARGET:")
            for i, subtopic_id in enumerate(completed_in_target, 1):
                subtopic_data = self.all_id_to_data[subtopic_id]
                print(f"   {i}. {subtopic_data['name']} (ID: {subtopic_id})")
        
        if missing_in_target:
            print(f"\n❌ MISSING SUBTOPICS IN TARGET:")
            # Sort missing subtopics by their connections to completed ones
            missing_with_priority = []
            for subtopic_id in missing_in_target:
                priority = self.calculate_subtopic_priority(subtopic_id, completed_subtopics)
                missing_with_priority.append((subtopic_id, priority))
            
            missing_with_priority.sort(key=lambda x: x[1], reverse=True)
            
            for i, (subtopic_id, priority) in enumerate(missing_with_priority, 1):
                subtopic_data = self.all_id_to_data[subtopic_id]
                print(f"   {i}. {subtopic_data['name']} (ID: {subtopic_id}) - Priority: {priority:.2f}")
                print(f"      Description: {subtopic_data.get('description', 'No description')[:60]}...")
        
        # Find prerequisite subtopics from other topics
        prerequisite_subtopics = self.find_prerequisite_subtopics(target_topic_id, completed_subtopics)
        
        if prerequisite_subtopics:
            print(f"\n⚡ PREREQUISITE SUBTOPICS FROM OTHER TOPICS:")
            for i, subtopic_id in enumerate(prerequisite_subtopics, 1):
                subtopic_data = self.all_id_to_data[subtopic_id]
                parent_topic_id = subtopic_data.get('parent_topic')
                parent_data = self.all_id_to_data.get(parent_topic_id, {})
                print(f"   {i}. {subtopic_data['name']} from {parent_data.get('name', 'Unknown')} (ID: {subtopic_id})")
        
        return {
            'target_subtopics': target_subtopics,
            'completed_in_target': completed_in_target,
            'missing_in_target': missing_in_target,
            'prerequisite_subtopics': prerequisite_subtopics,
            'completion_percentage': len(completed_in_target) / len(target_subtopics) * 100 if target_subtopics else 0
        }
    
    def calculate_subtopic_priority(self, subtopic_id, completed_subtopics):
        """Calculate priority for a missing subtopic based on connections to completed ones."""
        priority = 0.0
        
        # Check connections to completed subtopics
        for completed_id in completed_subtopics:
            # Direct connection from completed to this subtopic
            if self.graph.has_edge(completed_id, subtopic_id):
                edge_data = self.graph.get_edge_data(completed_id, subtopic_id, {})
                edge_type = edge_data.get('type', 'default')
                if edge_type == 'prerequisite':
                    priority += 3.0
                elif edge_type == 'sequence':
                    priority += 2.0
                elif edge_type == 'leads_to':
                    priority += 1.5
                else:
                    priority += 1.0
            
            # Reverse connection (this subtopic leads to completed)
            if self.graph.has_edge(subtopic_id, completed_id):
                priority += 0.5
        
        # Bonus for subtopics with more connections overall
        total_connections = self.graph.degree(subtopic_id)
        priority += total_connections * 0.1
        
        return priority
    
    def find_prerequisite_subtopics(self, target_topic_id, completed_subtopics):
        """Find subtopics from other topics that are prerequisites for the target."""
        prerequisites = []
        
        # Look for subtopics that have connections to the target topic's subtopics
        target_subtopics = self.get_all_subtopics_for_topic(target_topic_id)
        
        for subtopic_id in self.subtopics:
            if (subtopic_id['id'] not in completed_subtopics and 
                subtopic_id['id'] not in target_subtopics):
                
                # Check if this subtopic connects to any target subtopic
                for target_subtopic in target_subtopics:
                    if self.graph.has_edge(subtopic_id['id'], target_subtopic):
                        edge_data = self.graph.get_edge_data(subtopic_id['id'], target_subtopic, {})
                        if edge_data.get('type') in ['prerequisite', 'sequence']:
                            prerequisites.append(subtopic_id['id'])
                            break
        
        return prerequisites
    
    def analyze_learning_gap_with_real_graph(self, completed_topics_names, target_topic_name):
        """Perform comprehensive learning gap analysis using real graph structure."""
        print("\n" + "="*100)
        print("🎯 REAL GRAPH-BASED LEARNING GAP ANALYSIS")
        print("="*100)
        
        # Convert names to IDs
        completed_topic_ids = []
        for name in completed_topics_names:
            topic_id = self.find_node_by_name(name)
            if topic_id:
                completed_topic_ids.append(topic_id)
                print(f"✅ Completed: {self.all_id_to_data[topic_id]['name']} (ID: {topic_id})")
            else:
                print(f"⚠️  Warning: Topic '{name}' not found")
        
        target_topic_id = self.find_node_by_name(target_topic_name)
        if not target_topic_id:
            print(f"❌ Error: Target topic '{target_topic_name}' not found")
            return None
        
        target_data = self.all_id_to_data[target_topic_id]
        print(f"🎯 Target: {target_data['name']} (ID: {target_topic_id})")
        
        # Interactive subtopic selection
        completed_subtopics = self.interactive_subtopic_selection()
        
        # Analyze subtopic-level gaps
        subtopic_analysis = self.analyze_subtopic_learning_gaps(completed_subtopics, target_topic_id)
        
        # Find optimal learning path using real graph
        path_result = self.find_optimal_learning_path(completed_topic_ids, target_topic_id)
        
        print(f"\n📊 GRAPH ANALYSIS RESULTS:")
        print("-" * 60)
        print(f"   🔍 Analysis method: {path_result['reason'].replace('_', ' ').title()}")
        print(f"   📏 Path distance: {path_result.get('distance', 'N/A')}")
        print(f"   🎯 Topics in path: {len(path_result['path'])}")
        
        # Show cluster information
        self.show_cluster_analysis(target_topic_id, completed_topic_ids)
        
        # Show detailed path analysis
        if path_result['path']:
            print(f"\n📚 OPTIMAL LEARNING PATH:")
            print("-" * 60)
            
            for i, topic_id in enumerate(path_result['path'], 1):
                topic_data = self.all_id_to_data.get(topic_id, {})
                print(f"\n   📌 STEP {i}: {topic_data.get('name', 'Unknown')} (ID: {topic_id})")
                print(f"      📊 Level: {topic_data.get('level', 'Unknown').upper()}")
                print(f"      📝 Description: {topic_data.get('description', 'No description')[:100]}...")
                
                # Show real graph relationships
                self.show_topic_relationships(topic_id)
                
                # Show subtopics
                subtopics = self.get_all_subtopics_for_topic(topic_id)
                if subtopics:
                    print(f"      🔸 Subtopics ({len(subtopics)}):")
                    for j, subtopic_id in enumerate(subtopics[:5], 1):  # Show first 5
                        subtopic_data = self.all_id_to_data.get(subtopic_id, {})
                        print(f"         {j}. {subtopic_data.get('name', 'Unknown')} (ID: {subtopic_id})")
                    if len(subtopics) > 5:
                        print(f"         ... and {len(subtopics) - 5} more subtopics")
        else:
            print(f"\n🎉 EXCELLENT! You can start learning {target_data['name']} immediately!")
        
        # Show subtopic analysis results
        print(f"\n📈 SUBTOPIC ANALYSIS SUMMARY:")
        print("-" * 60)
        completion_pct = subtopic_analysis['completion_percentage']
        print(f"   🎯 Target completion: {completion_pct:.1f}%")
        print(f"   ✅ Completed subtopics: {len(subtopic_analysis['completed_in_target'])}")
        print(f"   ❌ Missing subtopics: {len(subtopic_analysis['missing_in_target'])}")
        print(f"   ⚡ Prerequisites needed: {len(subtopic_analysis['prerequisite_subtopics'])}")
        
        # Learning recommendations based on subtopic analysis
        self.provide_subtopic_recommendations(subtopic_analysis)
        
        # Show target topic analysis
        self.show_target_topic_analysis(target_topic_id)
        
        return {
            'path_result': path_result,
            'subtopic_analysis': subtopic_analysis,
            'completed_subtopics': completed_subtopics
        }
    
    def provide_subtopic_recommendations(self, subtopic_analysis):
        """Provide detailed recommendations based on subtopic analysis."""
        print(f"\n💡 SUBTOPIC-BASED LEARNING RECOMMENDATIONS:")
        print("-" * 60)
        
        completion_pct = subtopic_analysis['completion_percentage']
        missing_count = len(subtopic_analysis['missing_in_target'])
        prereq_count = len(subtopic_analysis['prerequisite_subtopics'])
        
        if completion_pct >= 80:
            print("🎉 You're almost ready! Focus on:")
            print("   1. Complete the remaining subtopics in the target topic")
            print("   2. Review connections between completed subtopics")
            print("   3. Practice integration of all concepts")
        elif completion_pct >= 50:
            print("📚 You're halfway there! Recommended approach:")
            print("   1. Complete prerequisite subtopics first")
            print("   2. Focus on high-priority missing subtopics")
            print("   3. Practice connections between subtopics")
        elif completion_pct >= 20:
            print("🔄 Good foundation! Next steps:")
            print("   1. Master all prerequisite subtopics")
            print("   2. Follow the subtopic sequence carefully")
            print("   3. Build understanding step by step")
        else:
            print("🚀 Starting fresh! Systematic approach:")
            print("   1. Begin with prerequisite subtopics from other topics")
            print("   2. Follow the recommended subtopic order")
            print("   3. Master each subtopic before moving to the next")
        
        if prereq_count > 0:
            print(f"\n⚡ PRIORITY: Complete {prereq_count} prerequisite subtopics first")
        
        if missing_count > 0:
            print(f"📝 FOCUS: {missing_count} subtopics remaining in target topic")
    
    def create_subtopic_visualization(self, completed_subtopics, target_topic_id, subtopic_analysis):
        """Create enhanced visualization showing subtopic-level analysis."""
        plt.figure(figsize=(24, 18))
        
        # Create subgraph with target topic and related subtopics
        relevant_nodes = set()
        
        # Add target topic and its subtopics
        relevant_nodes.add(target_topic_id)
        target_subtopics = subtopic_analysis['target_subtopics']
        relevant_nodes.update(target_subtopics)
        
        # Add prerequisite subtopics
        relevant_nodes.update(subtopic_analysis['prerequisite_subtopics'])
        
        # Add completed subtopics and their parent topics
        for subtopic_id in completed_subtopics:
            relevant_nodes.add(subtopic_id)
            subtopic_data = self.all_id_to_data[subtopic_id]
            parent_topic = subtopic_data.get('parent_topic')
            if parent_topic:
                relevant_nodes.add(parent_topic)
        
        # Create subgraph
        subgraph = self.graph.subgraph(relevant_nodes)
        
        # Enhanced layout
        pos = nx.spring_layout(subgraph, k=4, iterations=200, seed=42)
        
        # Define node categories with colors
        completed_subtopics_set = set(completed_subtopics)
        completed_in_target = set(subtopic_analysis['completed_in_target'])
        missing_in_target = set(subtopic_analysis['missing_in_target'])
        prerequisite_subtopics = set(subtopic_analysis['prerequisite_subtopics'])
        
        # Node styling
        node_configs = [
            ([target_topic_id], {"color": "#D32F2F", "size": 1500, "shape": "D", "label": "🎯 Target Topic"}),
            (completed_in_target, {"color": "#4CAF50", "size": 800, "shape": "s", "label": "✅ Completed in Target"}),
            (missing_in_target, {"color": "#FF9800", "size": 800, "shape": "s", "label": "❌ Missing in Target"}),
            (prerequisite_subtopics, {"color": "#9C27B0", "size": 700, "shape": "^", "label": "⚡ Prerequisites"}),
            (completed_subtopics_set - completed_in_target, {"color": "#2196F3", "size": 600, "shape": "s", "label": "✅ Other Completed"}),
        ]
        
        # Draw nodes
        legend_elements = []
        for nodes, config in node_configs:
            nodes_in_graph = [n for n in nodes if n in subgraph]
            if nodes_in_graph:
                nx.draw_networkx_nodes(
                    subgraph, pos,
                    nodelist=nodes_in_graph,
                    node_color=config["color"],
                    node_size=config["size"],
                    node_shape=config["shape"],
                    alpha=0.9,
                    edgecolors="black",
                    linewidths=2
                )
                legend_elements.append(
                    mpatches.Patch(color=config["color"], label=config["label"])
                )
        
        # Draw other nodes (topics)
        other_nodes = [n for n in subgraph.nodes() 
                      if n not in relevant_nodes or self.all_id_to_data[n].get('type') == 'topic']
        if other_nodes:
            nx.draw_networkx_nodes(
                subgraph, pos,
                nodelist=other_nodes,
                node_color="#E0E0E0",
                node_size=400,
                node_shape="o",
                alpha=0.6
            )
        
        # Enhanced edge drawing with subtopic connections highlighted
        edge_configs = {
            "prerequisite": {"color": "#C62828", "width": 3, "alpha": 0.9},
            "sequence": {"color": "#1565C0", "width": 2.5, "alpha": 0.8},
            "contains": {"color": "#6A1B9A", "width": 2, "alpha": 0.7},
            "leads_to": {"color": "#2E7D32", "width": 1.5, "alpha": 0.6},
            "related": {"color": "#5D4037", "width": 1, "alpha": 0.5}
        }
        
        # Group edges by type
        edges_by_type = defaultdict(list)
        for u, v, data in subgraph.edges(data=True):
            edge_type = data.get('type', 'related')
            edges_by_type[edge_type].append((u, v))
        
        # Draw edges
        for edge_type, edges in edges_by_type.items():
            config = edge_configs.get(edge_type, edge_configs["related"])
            if edges:
                nx.draw_networkx_edges(
                    subgraph, pos,
                    edgelist=edges,
                    edge_color=config["color"],
                    width=config["width"],
                    alpha=config["alpha"],
                    arrows=True,
                    arrowsize=20,
                    arrowstyle="->",
                    connectionstyle="arc3,rad=0.1"
                )
        
        # Enhanced labels
        labels = {}
        for node in subgraph.nodes():
            node_data = self.all_id_to_data[node]
            name = node_data['name']
            if len(name) > 10:
                name = name[:10] + "..."
            labels[node] = f"{name}\n({node})"
        
        nx.draw_networkx_labels(subgraph, pos, labels, font_size=8, font_weight="bold",
                               bbox=dict(boxstyle="round,pad=0.3", facecolor="white", alpha=0.8))
        
        # Create comprehensive legend
        plt.legend(handles=legend_elements, loc="upper left", title="🎨 Subtopic Analysis",
                  fontsize=12, title_fontsize=14, framealpha=0.9)
        
        # Enhanced title with statistics
        target_data = self.all_id_to_data[target_topic_id]
        completion_pct = subtopic_analysis['completion_percentage']
        
        title = f"🔍 Subtopic-Level Learning Gap Analysis: {target_data['name']}\n"
        title += f"📊 Completion: {completion_pct:.1f}% | "
        title += f"✅ {len(completed_in_target)} Completed | "
        title += f"❌ {len(missing_in_target)} Missing | "
        title += f"⚡ {len(prerequisite_subtopics)} Prerequisites"
        
        plt.title(title, fontsize=16, fontweight='bold', pad=30)
        plt.axis('off')
        plt.tight_layout()
        
        # Save visualization
        from datetime import datetime
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        output_file = f"subtopic_analysis_{timestamp}.png"
        plt.savefig(output_file, dpi=300, bbox_inches='tight', facecolor='white')
        
        print(f"\n🎨 Subtopic visualization saved as: {output_file}")
        plt.show()
        
        return output_file
    
    def show_cluster_analysis(self, target_topic_id, completed_topic_ids):
        """Show cluster-based analysis."""
        print(f"\n🔍 CLUSTER ANALYSIS:")
        print("-" * 60)
        
        # Find target's cluster
        target_cluster = None
        for cluster_id, topics in self.clusters.items():
            if target_topic_id in topics:
                target_cluster = cluster_id
                break
        
        if target_cluster is not None:
            cluster_topics = self.clusters[target_cluster]
            completed_in_cluster = [t for t in cluster_topics if t in completed_topic_ids]
            missing_in_cluster = [t for t in cluster_topics if t not in completed_topic_ids and t != target_topic_id]
            
            print(f"   🎯 Target belongs to cluster {target_cluster}")
            print(f"   📊 Cluster size: {len(cluster_topics)} topics")
            print(f"   ✅ Completed in cluster: {len(completed_in_cluster)}")
            print(f"   📋 Still to learn: {len(missing_in_cluster)}")
            
            if missing_in_cluster:
                print(f"   🔸 Related topics in same cluster:")
                for topic_id in missing_in_cluster[:3]:
                    topic_data = self.all_id_to_data.get(topic_id, {})
                    print(f"      • {topic_data.get('name', 'Unknown')} (ID: {topic_id})")
    
    def show_topic_relationships(self, topic_id):
        """Show real graph relationships for a topic."""
        # Prerequisites
        prerequisites = []
        for pred in self.graph.predecessors(topic_id):
            edge_data = self.graph.get_edge_data(pred, topic_id, {})
            if edge_data.get('type') == 'prerequisite':
                prerequisites.append(pred)
        
        if prerequisites:
            print(f"      ⚡ Prerequisites: {len(prerequisites)}")
            for prereq_id in prerequisites[:2]:  # Show first 2
                prereq_data = self.all_id_to_data.get(prereq_id, {})
                print(f"         • {prereq_data.get('name', 'Unknown')}")
        
        # Leads to
        leads_to = []
        for succ in self.graph.successors(topic_id):
            edge_data = self.graph.get_edge_data(topic_id, succ, {})
            if edge_data.get('type') == 'leads_to':
                leads_to.append(succ)
        
        if leads_to:
            print(f"      🎯 Leads to: {len(leads_to)} topics")
    
    def show_target_topic_analysis(self, target_topic_id):
        """Show detailed analysis of the target topic."""
        print(f"\n🎯 TARGET TOPIC DETAILED ANALYSIS:")
        print("-" * 60)
        
        target_data = self.all_id_to_data[target_topic_id]
        subtopics = self.get_all_subtopics_for_topic(target_topic_id)
        
        print(f"   📖 Name: {target_data['name']}")
        print(f"   🆔 ID: {target_topic_id}")
        print(f"   📊 Level: {target_data.get('level', 'Unknown').upper()}")
        print(f"   📝 Description: {target_data.get('description', 'No description')}")
        print(f"   🔸 Total subtopics: {len(subtopics)}")
        
        # Graph metrics
        in_degree = self.graph.in_degree(target_topic_id)
        out_degree = self.graph.out_degree(target_topic_id)
        print(f"   📊 Graph metrics: {in_degree} incoming, {out_degree} outgoing connections")
        
        if subtopics:
            print(f"\n   🔸 All Target Subtopics:")
            for i, subtopic_id in enumerate(subtopics, 1):
                subtopic_data = self.all_id_to_data.get(subtopic_id, {})
                print(f"      {i:2d}. {subtopic_data.get('name', 'Unknown')} (ID: {subtopic_id})")
                if i >= 10:  # Limit display
                    print(f"      ... and {len(subtopics) - 10} more")
                    break
    
    def find_subtopic_to_subtopic_path(self, source_subtopic_name, target_subtopic_name):
        """Find learning path between any two subtopics."""
        print(f"\n🎯 SUBTOPIC-TO-SUBTOPIC LEARNING PATH")
        print("=" * 80)
        print(f"From: {source_subtopic_name} → To: {target_subtopic_name}")
        
        # Find source and target subtopics
        source_id = self.find_node_by_name(source_subtopic_name)
        target_id = self.find_node_by_name(target_subtopic_name)
        
        if not source_id:
            print(f"❌ Source subtopic '{source_subtopic_name}' not found")
            return None
        
        if not target_id:
            print(f"❌ Target subtopic '{target_subtopic_name}' not found")
            return None
        
        source_data = self.all_id_to_data[source_id]
        target_data = self.all_id_to_data[target_id]
        
        # Verify both are subtopics
        if source_data.get('type') != 'subtopic' or target_data.get('type') != 'subtopic':
            print(f"❌ Both nodes must be subtopics")
            return None
        
        print(f"✅ Source: {source_data['name']} (ID: {source_id})")
        print(f"✅ Target: {target_data['name']} (ID: {target_id})")
        
        if source_id == target_id:
            print("🎉 You already know the target subtopic!")
            return {'path': [source_id], 'analysis': 'already_completed'}
        
        # Find the shortest path
        try:
            path = nx.shortest_path(self.graph, source_id, target_id, weight='weight')
            path_length = nx.shortest_path_length(self.graph, source_id, target_id, weight='weight')
            
            print(f"✅ Learning path found: {len(path)} steps")
            print(f"📏 Path complexity: {path_length:.2f}")
            
            # Analyze the path
            path_analysis = self.analyze_subtopic_path_details(path)
            
            # Generate study recommendations
            study_plan = self.generate_subtopic_study_plan(path)
            
            return {
                'source': source_data,
                'target': target_data,
                'path': path,
                'path_length': path_length,
                'analysis': path_analysis,
                'study_plan': study_plan
            }
            
        except nx.NetworkXNoPath:
            print("❌ No direct learning path found between these subtopics")
            # Try to find an alternative path through topics
            alternative_path = self.find_alternative_subtopic_path(source_id, target_id)
            if alternative_path:
                return alternative_path
            return None
    
    def analyze_subtopic_path_details(self, path):
        """Analyze the details of a subtopic learning path."""
        print(f"\n📚 DETAILED LEARNING PATH:")
        print("=" * 60)
        
        analysis = {
            'steps': [],
            'total_time_weeks': len(path) - 1,  # Exclude starting point
            'complexity_progression': []
        }
        
        for i, node_id in enumerate(path):
            node = self.all_id_to_data[node_id]
            step_num = i + 1
            
            # Determine status
            if i == 0:
                status = "✅ COMPLETED (Starting Point)"
                emoji = "✅"
            elif i == len(path) - 1:
                status = "🎯 TARGET (Final Goal)"
                emoji = "🎯"
            else:
                status = "📚 TO LEARN (Required Step)"
                emoji = "📚"
            
            step_info = {
                'position': step_num,
                'id': node_id,
                'name': node['name'],
                'type': node['type'],
                'level': node.get('level', 'unknown'),
                'description': node.get('description', 'No description'),
                'status': status
            }
            
            print(f"   📌 STEP {step_num}: {node['name']}")
            print(f"      {emoji} Status: {status}")
            print(f"      🆔 ID: {node_id}")
            print(f"      🏷️  Type: {node['type']}")
            print(f"      📊 Level: {step_info['level']}")
            print(f"      📝 Description: {step_info['description'][:80]}...")
            
            if i > 0:  # Not the starting point
                # Analyze why this step is important
                edge_data = self.graph.get_edge_data(path[i-1], node_id, {})
                edge_type = edge_data.get('type', 'related')
                
                importance_msg = self.get_step_importance_message(edge_type, node['name'])
                print(f"      💡 Why important: {importance_msg}")
                
                # Show connections to other concepts
                connections = self.get_node_connections(node_id)
                if connections:
                    print(f"      🔗 Related concepts: {', '.join(connections[:3])}")
            
            analysis['steps'].append(step_info)
            print()
        
        # Show learning progression
        print(f"⏱️  LEARNING TIMELINE:")
        print(f"   📅 Total duration: {analysis['total_time_weeks']} weeks")
        print(f"   🎯 Focus per week: 1 subtopic")
        print(f"   📚 Study time per week: 10-15 hours")
        
        return analysis
    
    def get_step_importance_message(self, edge_type, node_name):
        """Get explanation of why this step is important."""
        messages = {
            'prerequisite': f"Essential prerequisite for understanding {node_name}",
            'sequence': f"Next logical step in the learning sequence",
            'leads_to': f"Natural progression that leads to {node_name}",
            'contains': f"Contains fundamental concepts needed",
            'related': f"Related concept that builds foundation"
        }
        return messages.get(edge_type, f"Important step in learning {node_name}")
    
    def get_node_connections(self, node_id):
        """Get names of connected nodes for context."""
        connections = []
        for neighbor in list(self.graph.predecessors(node_id)) + list(self.graph.successors(node_id)):
            if neighbor != node_id:
                neighbor_data = self.all_id_to_data.get(neighbor, {})
                connections.append(neighbor_data.get('name', 'Unknown'))
        return connections[:5]  # Return top 5 connections
    
    def generate_subtopic_study_plan(self, path):
        """Generate a week-by-week study plan for subtopic path."""
        print(f"\n📅 WEEKLY STUDY PLAN:")
        print("=" * 60)
        
        study_plan = {'weekly_plans': []}
        
        for i in range(1, len(path)):  # Skip starting point
            node = self.all_id_to_data[path[i]]
            week_num = i
            
            print(f"🗓️  WEEK {week_num}: {node['name']}")
            print(f"   🎯 Primary Goal: Master {node['name']} concepts")
            print(f"   📚 Monday-Tuesday: Theory and Fundamentals")
            print(f"      • Read documentation and tutorials")
            print(f"      • Understand core concepts")
            print(f"      • Watch educational videos")
            print(f"   💻 Wednesday-Thursday: Implementation Practice")
            print(f"      • Code implementations from scratch")
            print(f"      • Work through examples")
            print(f"      • Debug and optimize code")
            print(f"   🧪 Friday-Weekend: Problem Solving")
            print(f"      • Solve 5-10 practice problems")
            print(f"      • Apply concepts in different contexts")
            print(f"      • Review and connect to previous learning")
            print()
            
            study_plan['weekly_plans'].append({
                'week': week_num,
                'subtopic': node['name'],
                'id': node['id'],
                'focus': f"Master {node['name']}"
            })
        
        return study_plan
    
    def find_alternative_subtopic_path(self, source_id, target_id):
        """Find alternative path through topic relationships."""
        print("🔍 Searching for alternative path through topic relationships...")
        
        # Find parent topics for source and target
        source_topics = self.find_parent_topics(source_id)
        target_topics = self.find_parent_topics(target_id)
        
        if not source_topics or not target_topics:
            return None
        
        # Try to find path through topics
        for source_topic in source_topics:
            for target_topic in target_topics:
                try:
                    topic_path = nx.shortest_path(self.graph, source_topic, target_topic, weight='weight')
                    if len(topic_path) > 1:  # Found a path through topics
                        print(f"✅ Alternative path found through topics: {len(topic_path)} topic steps")
                        
                        # Build recommended learning sequence
                        full_path = [source_id]  # Start with source subtopic
                        
                        # Add intermediate topics and their key subtopics
                        for i in range(1, len(topic_path)):
                            topic_id = topic_path[i]
                            topic_subtopics = self.get_all_subtopics_for_topic(topic_id)
                            
                            # Add 1-2 key subtopics from each topic
                            if topic_subtopics:
                                full_path.extend(topic_subtopics[:2])
                        
                        full_path.append(target_id)  # End with target subtopic
                        
                        return {
                            'source': self.all_id_to_data[source_id],
                            'target': self.all_id_to_data[target_id],
                            'path': full_path,
                            'path_type': 'alternative_through_topics',
                            'topic_path': topic_path
                        }
                        
                except nx.NetworkXNoPath:
                    continue
        
        return None
    
    def find_parent_topics(self, subtopic_id):
        """Find parent topics for a subtopic."""
        parent_topics = []
        for pred in self.graph.predecessors(subtopic_id):
            pred_data = self.all_id_to_data.get(pred, {})
            if pred_data.get('type') == 'topic':
                parent_topics.append(pred)
        return parent_topics
    
    def run_subtopic_path_demo(self, demo_cases=None):
        """Run demonstrations for different subtopic-to-subtopic scenarios."""
        print("🚀 SUBTOPIC-TO-SUBTOPIC LEARNING PATH DEMONSTRATIONS")
        print("=" * 80)
        
        if demo_cases is None:
            # Default demo cases covering different topics
            demo_cases = [
                ("Array Deletion", "Array Sorting"),
                ("Stack Push", "Stack Pop"),
                ("Tree Traversal", "Tree Searching"),
                ("Graph Vertex", "Graph Edge"),
                ("Queue Enqueue", "Queue Dequeue"),
                ("Hash Insert", "Hash Search"),
                ("Binary Search", "Binary Tree"),
                ("Linked List Insert", "Linked List Delete")
            ]
        
        successful_demos = 0
        
        for i, (source, target) in enumerate(demo_cases, 1):
            print(f"\n📋 DEMO {i}: {source} → {target}")
            print("-" * 60)
            
            result = self.find_subtopic_to_subtopic_path(source, target)
            
            if result:
                successful_demos += 1
                print(f"✅ Demo {i} completed successfully!")
                
                # Create visualization for this path if it exists
                if 'path' in result and len(result['path']) > 1:
                    self.visualize_subtopic_learning_path(result['path'], source, target)
            else:
                print(f"❌ Demo {i} - No path found")
            
            print("\n" + "="*80)
        
        print(f"\n🎉 DEMO SUMMARY:")
        print(f"   ✅ Successful demonstrations: {successful_demos}/{len(demo_cases)}")
        print(f"   📊 Success rate: {successful_demos/len(demo_cases)*100:.1f}%")
    
    def visualize_subtopic_learning_path(self, path, source_name, target_name):
        """Create visualization for subtopic learning path."""
        try:
            plt.figure(figsize=(16, 10))
            
            # Create subgraph with path nodes and immediate neighbors
            path_nodes = set(path)
            extended_nodes = set(path)
            
            # Add immediate neighbors for context
            for node_id in path:
                neighbors = list(self.graph.predecessors(node_id)) + list(self.graph.successors(node_id))
                for neighbor in neighbors[:2]:  # Limit to 2 neighbors per node
                    if self.all_id_to_data[neighbor].get('type') == 'subtopic':
                        extended_nodes.add(neighbor)
            
            subgraph = self.graph.subgraph(extended_nodes)
            
            # Create layout
            pos = nx.spring_layout(subgraph, k=3, iterations=50, seed=42)
            
            # Color nodes based on their role in the path
            node_colors = []
            node_sizes = []
            
            for node_id in subgraph.nodes():
                if node_id == path[0]:  # Source
                    node_colors.append('#4CAF50')  # Green
                    node_sizes.append(1000)
                elif node_id == path[-1]:  # Target
                    node_colors.append('#F44336')  # Red
                    node_sizes.append(1000)
                elif node_id in path_nodes:  # Path nodes
                    node_colors.append('#2196F3')  # Blue
                    node_sizes.append(800)
                else:  # Context nodes
                    node_colors.append('#E0E0E0')  # Light gray
                    node_sizes.append(400)
            
            # Draw nodes
            nx.draw_networkx_nodes(subgraph, pos, node_color=node_colors, 
                                 node_size=node_sizes, alpha=0.8)
            
            # Draw edges with different colors for path vs context
            path_edges = []
            context_edges = []
            
            for edge in subgraph.edges():
                # Check if this is a path edge
                is_path_edge = False
                for i in range(len(path) - 1):
                    if (path[i] == edge[0] and path[i + 1] == edge[1]) or \
                       (path[i + 1] == edge[0] and path[i] == edge[1]):
                        path_edges.append(edge)
                        is_path_edge = True
                        break
                
                if not is_path_edge:
                    context_edges.append(edge)
            
            # Draw path edges
            if path_edges:
                nx.draw_networkx_edges(subgraph, pos, edgelist=path_edges, 
                                     edge_color='#FF9800', width=3, alpha=0.8,
                                     arrows=True, arrowsize=20)
            
            # Draw context edges
            if context_edges:
                nx.draw_networkx_edges(subgraph, pos, edgelist=context_edges,
                                     edge_color='#CCCCCC', width=1, alpha=0.5,
                                     arrows=True, arrowsize=15)
            
            # Add labels
            labels = {}
            for node_id in subgraph.nodes():
                node_name = self.all_id_to_data[node_id]['name']
                if len(node_name) > 12:
                    node_name = node_name[:10] + ".."
                labels[node_id] = node_name
            
            nx.draw_networkx_labels(subgraph, pos, labels, font_size=9, font_weight='bold')
            
            # Add legend
            from matplotlib.patches import Patch
            legend_elements = [
                Patch(facecolor='#4CAF50', label=f'🏁 Start: {source_name}'),
                Patch(facecolor='#2196F3', label='📚 Learning Steps'),
                Patch(facecolor='#F44336', label=f'🎯 Goal: {target_name}'),
                Patch(facecolor='#E0E0E0', label='🔗 Related Concepts'),
            ]
            
            plt.legend(handles=legend_elements, loc='upper right')
            
            # Set title
            plt.title(f"🎯 Learning Path: {source_name} → {target_name}\n"
                     f"📊 {len(path)} steps • ⏱️ ~{len(path)-1} weeks", 
                     fontsize=14, fontweight='bold', pad=20)
            
            plt.axis('off')
            plt.tight_layout()
            
            # Save visualization
            from datetime import datetime
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            filename = f"subtopic_path_{source_name.replace(' ', '_')}_{target_name.replace(' ', '_')}_{timestamp}.png"
            plt.savefig(filename, dpi=300, bbox_inches='tight', facecolor='white')
            print(f"💾 Visualization saved: {filename}")
            
            plt.show()
            
        except Exception as e:
            print(f"⚠️ Visualization failed: {e}")

def main():
    """Main function with command line interface."""
    parser = argparse.ArgumentParser(description="Real Graph-Based DSA Learning Path Analyzer with Subtopic Analysis")
    parser.add_argument("--completed", nargs="*", default=[], 
                       help="Names of completed topics")
    parser.add_argument("--target", type=str,
                       help="Name of target topic")
    parser.add_argument("--show-clusters", action="store_true",
                       help="Show cluster analysis")
    parser.add_argument("--interactive", action="store_true",
                       help="Run interactive subtopic analysis")
    parser.add_argument("--visualize", action="store_true",
                       help="Create subtopic visualization")
    parser.add_argument("--subtopic-path", action="store_true",
                       help="Find path between two subtopics")
    parser.add_argument("--source-subtopic", type=str,
                       help="Source subtopic name for subtopic-to-subtopic path")
    parser.add_argument("--target-subtopic", type=str,
                       help="Target subtopic name for subtopic-to-subtopic path")
    parser.add_argument("--demo-subtopic-paths", action="store_true",
                       help="Run demo of various subtopic-to-subtopic paths")
    
    args = parser.parse_args()
    
    analyzer = RealGraphLearningAnalyzer()
    
    if args.show_clusters:
        print("\n🔍 TOPIC CLUSTERS:")
        for cluster_id, topics in analyzer.clusters.items():
            print(f"\nCluster {cluster_id}:")
            for topic_id in topics:
                topic_data = analyzer.all_id_to_data[topic_id]
                print(f"  • {topic_data['name']} (ID: {topic_id})")
        return
    
    if args.demo_subtopic_paths:
        # Run demo of multiple subtopic-to-subtopic scenarios
        analyzer.run_subtopic_path_demo()
        return
    
    if args.subtopic_path or (args.source_subtopic and args.target_subtopic):
        # Subtopic-to-subtopic path analysis
        if not args.source_subtopic or not args.target_subtopic:
            print("Error: Both --source-subtopic and --target-subtopic are required for subtopic path analysis")
            return
        
        result = analyzer.find_subtopic_to_subtopic_path(args.source_subtopic, args.target_subtopic)
        
        if result and args.visualize:
            print("\n🎨 Creating visualization...")
            analyzer.visualize_subtopic_learning_path(result['path'], args.source_subtopic, args.target_subtopic)
        return
    
    if args.target:
        # Traditional topic-based analysis
        result = analyzer.analyze_learning_gap_with_real_graph(args.completed, args.target)
        
        if result and args.visualize:
            print("\n🎨 Creating subtopic visualization...")
            target_topic_id = analyzer.find_node_by_name(args.target)
            analyzer.create_subtopic_visualization(
                result['completed_subtopics'],
                target_topic_id,
                result['subtopic_analysis']
            )
        return
    
    # If no specific action specified, show help
    print("🎯 DSA LEARNING PATH ANALYZER")
    print("=" * 50)
    print("Available modes:")
    print("1. Topic Analysis: --target 'topic_name'")
    print("2. Subtopic Path: --source-subtopic 'name' --target-subtopic 'name'")
    print("3. Demo Multiple Paths: --demo-subtopic-paths")
    print("4. Interactive Mode: --interactive")
    print("5. Show Clusters: --show-clusters")
    print("\nExamples:")
    print("  python real_graph_analyzer.py --demo-subtopic-paths")
    print("  python real_graph_analyzer.py --source-subtopic 'Array Deletion' --target-subtopic 'Array Sorting'")
    print("  python real_graph_analyzer.py --target 'Queue' --interactive")

def run_interactive_demo():
    """Run an interactive demo of the subtopic analysis system."""
    print("🚀 Enhanced Subtopic Analysis Demo")
    print("=" * 80)
    
    analyzer = RealGraphLearningAnalyzer()
    
    print("Choose demo mode:")
    print("1. Traditional Topic-based Analysis")
    print("2. Subtopic-to-Subtopic Path Finding")
    print("3. Multiple Subtopic Path Demonstrations")
    
    try:
        choice = input("\nEnter choice (1-3): ").strip()
        
        if choice == "1":
            # Traditional demo
            print("\n📋 TRADITIONAL DEMO: Topic-based Analysis for Queue")
            result = analyzer.analyze_learning_gap_with_real_graph([], "Queue")
            
            if result:
                target_topic_id = analyzer.find_node_by_name("Queue")
                print("\n🎨 Creating demonstration visualization...")
                analyzer.create_subtopic_visualization(
                    result['completed_subtopics'],
                    target_topic_id,
                    result['subtopic_analysis']
                )
        
        elif choice == "2":
            # Subtopic-to-subtopic demo
            print("\n📋 SUBTOPIC-TO-SUBTOPIC DEMO:")
            source = input("Enter source subtopic (e.g., 'Array Deletion'): ").strip() or "Array Deletion"
            target = input("Enter target subtopic (e.g., 'Array Sorting'): ").strip() or "Array Sorting"
            
            result = analyzer.find_subtopic_to_subtopic_path(source, target)
            if result and 'path' in result:
                analyzer.visualize_subtopic_learning_path(result['path'], source, target)
        
        elif choice == "3":
            # Multiple demonstrations
            print("\n📋 MULTIPLE SUBTOPIC PATH DEMONSTRATIONS:")
            analyzer.run_subtopic_path_demo()
        
        else:
            print("Invalid choice. Running default Array Deletion → Array Sorting demo.")
            analyzer.find_subtopic_to_subtopic_path("Array Deletion", "Array Sorting")
            
    except KeyboardInterrupt:
        print("\n👋 Demo cancelled by user")
    except Exception as e:
        print(f"\n❌ Demo error: {e}")
        # Fallback to simple demo
        print("Running fallback demo...")
        analyzer.find_subtopic_to_subtopic_path("Array Deletion", "Array Sorting")

if __name__ == "__main__":
    import sys
    if len(sys.argv) == 1:
        # No arguments provided, run interactive demo
        run_interactive_demo()
    else:
        main()
