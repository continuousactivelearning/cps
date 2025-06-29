#!/usr/bin/env python
# -*- coding: utf-8 -*-

import json
import random
import re
from typing import Dict, List, Any, Set, Tuple

from utils.logger import setup_logger

class GraphBuilder:
    """Utility class for building a knowledge graph from scraped data."""
    
    def __init__(self, data: Dict[str, Dict[str, Any]]):
        """
        Initialize with scraped data.
        
        Args:
            data (Dict[str, Dict[str, Any]]): Scraped data.
        """
        self.data = data
        self.logger = setup_logger(self.__class__.__name__)
    
    def build_graph(self) -> Dict[str, Any]:
        """
        Build a simplified knowledge graph from the scraped data with only nodes and connections.
        
        Returns:
            Dict[str, Any]: Simplified knowledge graph with nodes and edges.
        """
        try:
            self.logger.info("Building simplified knowledge graph")
            
            # Initialize result structure
            result = {
                "nodes": [],
                "edges": []
            }
            
            # Track all concept IDs and names
            concept_mapping = {}
            all_nodes = []
            
            # Process each topic
            for topic_name, topic_data in self.data.items():
                topic_id = self._generate_id(topic_name, "t")
                concept_mapping[topic_name.lower()] = topic_id
                
                # Create main topic node
                topic_node = {
                    "id": topic_id,
                    "name": topic_name.title(),
                    "type": "topic",
                    "level": self._determine_level(topic_name),
                    "description": topic_data.get("description", "")[:100] + "..." if len(topic_data.get("description", "")) > 100 else topic_data.get("description", ""),
                    "keywords": topic_data.get("keywords", [])[:5]  # Limit keywords
                }
                all_nodes.append(topic_node)
                
                # Process subtopics as separate nodes
                for subtopic_name, subtopic_data in topic_data.get("subtopics", {}).items():
                    subtopic_id = self._generate_id(f"{topic_name}_{subtopic_name}", "s")
                    concept_mapping[f"{topic_name}_{subtopic_name}".lower()] = subtopic_id
                    
                    # Create subtopic node
                    subtopic_node = {
                        "id": subtopic_id,
                        "name": subtopic_name.title(),
                        "type": "subtopic",
                        "level": subtopic_data.get("level", self._determine_level(subtopic_name)),
                        "description": subtopic_data.get("description", "")[:100] + "..." if len(subtopic_data.get("description", "")) > 100 else subtopic_data.get("description", ""),
                        "parent_topic": topic_id
                    }
                    all_nodes.append(subtopic_node)
                    
                    # Create edge from topic to subtopic
                    result["edges"].append({
                        "source": topic_id,
                        "target": subtopic_id,
                        "type": "contains",
                        "label": "contains"
                    })
            
            # Add all nodes to result
            result["nodes"] = all_nodes
            
            # Create connections between topics based on prerequisites and suggestions
            self._create_topic_connections(result, concept_mapping)
            
            return result
            
        except Exception as e:
            self.logger.error(f"Error building knowledge graph: {str(e)}")
            raise
    
    def _generate_id(self, name: str, prefix: str) -> str:
        """
        Generate a unique ID for a concept.
        
        Args:
            name (str): Concept name.
            prefix (str): ID prefix.
            
        Returns:
            str: Unique ID.
        """
        # Clean the name and create a simple hash-based ID
        clean_name = re.sub(r'[^a-z0-9]', '', name.lower())
        
        # Generate a simple numeric ID based on hash
        if len(clean_name) > 0:
            numeric_part = abs(hash(clean_name)) % 1000  # Limit to 3 digits
        else:
            numeric_part = random.randint(1, 999)
        
        return f"{prefix}{numeric_part}"
    
    def _create_topic_connections(self, result: Dict[str, Any], concept_mapping: Dict[str, str]) -> None:
        """
        Create connections between topics based on prerequisites and relationships.
        
        Args:
            result (Dict[str, Any]): The graph result to add edges to.
            concept_mapping (Dict[str, str]): Mapping of concept names to IDs.
        """
        # Define relationships between topics
        topic_relationships = {
            "array": {
                "prerequisites": [],
                "leads_to": ["linked list", "stack", "queue", "sorting", "searching"]
            },
            "linked list": {
                "prerequisites": ["array"],
                "leads_to": ["stack", "queue", "tree"]
            },
            "stack": {
                "prerequisites": ["array", "linked list"],
                "leads_to": ["queue", "tree", "expression evaluation"]
            },
            "queue": {
                "prerequisites": ["array", "linked list"],
                "leads_to": ["tree", "graph", "breadth first search"]
            },
            "tree": {
                "prerequisites": ["linked list"],
                "leads_to": ["binary tree", "binary search tree", "heap", "graph"]
            },
            "binary tree": {
                "prerequisites": ["tree"],
                "leads_to": ["binary search tree", "heap", "tree traversal"]
            },
            "binary search tree": {
                "prerequisites": ["binary tree"],
                "leads_to": ["balanced trees", "tree operations"]
            },
            "graph": {
                "prerequisites": ["tree", "queue"],
                "leads_to": ["graph algorithms", "shortest path", "minimum spanning tree"]
            },
            "sorting": {
                "prerequisites": ["array"],
                "leads_to": ["searching", "merge sort", "quick sort"]
            },
            "searching": {
                "prerequisites": ["array"],
                "leads_to": ["binary search", "hash table"]
            },
            "hash table": {
                "prerequisites": ["array"],
                "leads_to": ["hash functions", "collision resolution"]
            },
            "dynamic programming": {
                "prerequisites": ["recursion"],
                "leads_to": ["optimization problems", "memoization"]
            },
            "recursion": {
                "prerequisites": [],
                "leads_to": ["dynamic programming", "backtracking", "tree traversal"]
            }
        }
        
        # Create prerequisite edges (dependencies)
        for topic_name, relationships in topic_relationships.items():
            topic_id = concept_mapping.get(topic_name.lower())
            if not topic_id:
                continue
                
            # Add prerequisite edges
            for prereq in relationships["prerequisites"]:
                prereq_id = concept_mapping.get(prereq.lower())
                if prereq_id:
                    result["edges"].append({
                        "source": prereq_id,
                        "target": topic_id,
                        "type": "prerequisite",
                        "label": "prerequisite for"
                    })
            
            # Add "leads to" edges (suggestions)
            for suggestion in relationships["leads_to"]:
                suggestion_id = concept_mapping.get(suggestion.lower())
                if suggestion_id:
                    result["edges"].append({
                        "source": topic_id,
                        "target": suggestion_id,
                        "type": "leads_to",
                        "label": "leads to"
                    })
        
        # Create subtopic relationships within the same topic
        topic_subtopics = {}
        for node in result["nodes"]:
            if node["type"] == "subtopic":
                parent_topic = node["parent_topic"]
                if parent_topic not in topic_subtopics:
                    topic_subtopics[parent_topic] = []
                topic_subtopics[parent_topic].append(node["id"])
        
        # Create sequential connections between subtopics of the same topic
        for topic_id, subtopic_ids in topic_subtopics.items():
            if len(subtopic_ids) > 1:
                for i in range(len(subtopic_ids) - 1):
                    result["edges"].append({
                        "source": subtopic_ids[i],
                        "target": subtopic_ids[i + 1],
                        "type": "sequence",
                        "label": "next"
                    })
    
    def _determine_level(self, name: str) -> str:
        """
        Determine the difficulty level of a concept.
        
        Args:
            name (str): Concept name.
            
        Returns:
            str: Difficulty level.
        """
        # Keywords that might indicate difficulty
        beginner_keywords = ["basic", "introduction", "simple", "fundamental", "beginner", "initialization", "declaration"]
        advanced_keywords = ["advanced", "complex", "optimization", "efficient", "algorithms", "balanced", "red-black"]
        
        name_lower = name.lower()
        
        # Check for beginner keywords
        if any(kw in name_lower for kw in beginner_keywords):
            return "beginner"
        
        # Check for advanced keywords
        if any(kw in name_lower for kw in advanced_keywords):
            return "advanced"
        
        # Default to intermediate
        return "intermediate"
