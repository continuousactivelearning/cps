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
    
    def build_graph(self) -> Dict[str, List[Dict[str, Any]]]:
        """
        Build a knowledge graph from the scraped data.
        
        Returns:
            Dict[str, List[Dict[str, Any]]]: Knowledge graph.
        """
        try:
            self.logger.info("Building knowledge graph")
            
            # Initialize result structure
            result = {
                "concepts": []
            }
            
            # Track all concept IDs
            concept_ids = {}
            
            # Process each topic
            for topic_name, topic_data in self.data.items():
                topic_id = self._generate_id(topic_name, "t")
                concept_ids[topic_name] = topic_id
                
                # Create topic node
                topic_node = {
                    "id": topic_id,
                    "name": topic_name.title(),
                    "type": "topic",
                    "level": self._determine_level(topic_name),
                    "description": topic_data.get("description", ""),
                    "keywords": topic_data.get("keywords", []),
                    "prerequisites": self._determine_prerequisites(topic_name),
                    "topic_suggestions": [],  # Will be filled later
                    "resources": self._process_resources(topic_data.get("resources", {})),
                    "subconcepts": []
                }
                
                # Process subtopics
                for subtopic_name, subtopic_data in topic_data.get("subtopics", {}).items():
                    subtopic_id = self._generate_id(f"{topic_name}_{subtopic_name}", "t_s")
                    
                    # Create subtopic node
                    subtopic_node = {
                        "id": subtopic_id,
                        "name": subtopic_name.title(),
                        "type": "subtopic",
                        "level": subtopic_data.get("level", self._determine_level(subtopic_name)),
                        "description": subtopic_data.get("description", ""),
                        "keywords": subtopic_data.get("keywords", []),
                        "prerequisites": [],  # Will be filled later
                        "topic_suggestions": [],  # Will be filled later
                        "resources": self._process_resources(subtopic_data.get("resources", {}))
                    }
                    
                    # Add subtopic to topic
                    topic_node["subconcepts"].append(subtopic_node)
                
                # Add topic to result
                result["concepts"].append(topic_node)
            
            # Create connections between topics and subtopics
            self._create_connections(result["concepts"], concept_ids)
            
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
        # Clean the name
        clean_name = re.sub(r'[^a-z0-9]', '', name.lower())
        
        # Generate a simple numeric ID based on the first few characters
        if len(clean_name) > 0:
            numeric_part = ord(clean_name[0]) - ord('a') + 1
        else:
            numeric_part = random.randint(1, 26)
        
        return f"{prefix}{numeric_part}"
    
    def _determine_level(self, name: str) -> str:
        """
        Determine the difficulty level of a concept.
        
        Args:
            name (str): Concept name.
            
        Returns:
            str: Difficulty level.
        """
        # Keywords that might indicate difficulty
        beginner_keywords = ["basic", "introduction", "simple", "fundamental", "beginner"]
        advanced_keywords = ["advanced", "complex", "optimization", "efficient"]
        
        name_lower = name.lower()
        
        # Check for beginner keywords
        if any(kw in name_lower for kw in beginner_keywords):
            return "beginner"
        
        # Check for advanced keywords
        if any(kw in name_lower for kw in advanced_keywords):
            return "advanced"
        
        # Default to intermediate
        return "intermediate"
    
    def _determine_prerequisites(self, topic_name: str) -> List[str]:
        """
        Determine prerequisites for a topic.
        
        Args:
            topic_name (str): Topic name.
            
        Returns:
            List[str]: List of prerequisite topic IDs.
        """
        # Define prerequisites for common topics
        prerequisites = {
            "array": [],
            "string": [],
            "linked list": ["t1"],  # Array
            "stack": ["t1", "t3"],  # Array, Linked List
            "queue": ["t1", "t3"],  # Array, Linked List
            "tree": ["t1", "t3"],   # Array, Linked List
            "binary tree": ["t5"],  # Tree
            "binary search tree": ["t5"],  # Tree
            "graph": ["t1", "t3", "t5"],  # Array, Linked List, Tree
            "hash table": ["t1"],  # Array
            "heap": ["t1", "t5"],  # Array, Tree
            "dynamic programming": ["t1", "t19"],  # Array, Recursion
            "greedy algorithm": [],
            "recursion": [],
            "backtracking": ["t19"],  # Recursion
            "sorting": ["t1"],  # Array
            "searching": ["t1"]  # Array
        }
        
        # Return prerequisites for the topic
        for key, prereqs in prerequisites.items():
            if topic_name.lower() == key:
                return prereqs
        
        return []
    
    def _process_resources(self, resources: Dict[str, List[Dict[str, str]]]) -> Dict[str, List[Dict[str, str]]]:
        """
        Process and deduplicate resources.
        
        Args:
            resources (Dict[str, List[Dict[str, str]]]): Resources to process.
            
        Returns:
            Dict[str, List[Dict[str, str]]]: Processed resources.
        """
        result = {
            "videos": [],
            "articles": []
        }
        
        # Deduplicate videos
        seen_video_urls = set()
        for video in resources.get("videos", []):
            url = video.get("url", "")
            if url and url not in seen_video_urls:
                seen_video_urls.add(url)
                result["videos"].append(video)
        
        # Deduplicate articles
        seen_article_urls = set()
        for article in resources.get("articles", []):
            url = article.get("url", "")
            if url and url not in seen_article_urls:
                seen_article_urls.add(url)
                result["articles"].append(article)
        
        # Limit to top 5 of each
        result["videos"] = result["videos"][:5]
        result["articles"] = result["articles"][:5]
        
        return result
    
    def _create_connections(self, concepts: List[Dict[str, Any]], concept_ids: Dict[str, str]) -> None:
        """
        Create connections between concepts.
        
        Args:
            concepts (List[Dict[str, Any]]): List of concepts.
            concept_ids (Dict[str, str]): Mapping of concept names to IDs.
        """
        # Define topic suggestions for common topics
        suggestions = {
            "array": ["string", "linked list", "sorting", "searching"],
            "string": ["array", "dynamic programming"],
            "linked list": ["stack", "queue"],
            "stack": ["queue", "tree", "graph"],
            "queue": ["stack", "tree", "graph"],
            "tree": ["graph", "binary tree", "binary search tree"],
            "binary tree": ["binary search tree", "heap"],
            "binary search tree": ["graph", "tree traversal"],
            "graph": ["tree", "dynamic programming"],
            "hash table": ["array", "string"],
            "heap": ["tree", "sorting"],
            "dynamic programming": ["recursion", "greedy algorithm"],
            "greedy algorithm": ["dynamic programming"],
            "recursion": ["dynamic programming", "backtracking"],
            "backtracking": ["recursion", "dynamic programming"],
            "sorting": ["searching", "array"],
            "searching": ["sorting", "array"]
        }
        
        # Add topic suggestions
        for concept in concepts:
            topic_name = concept["name"].lower()
            suggested_topics = suggestions.get(topic_name, [])
            
            for suggested_topic in suggested_topics:
                if suggested_topic in concept_ids:
                    concept["topic_suggestions"].append(concept_ids[suggested_topic])
            
            # Create connections between subtopics
            self._create_subtopic_connections(concept)
    
    def _create_subtopic_connections(self, concept: Dict[str, Any]) -> None:
        """
        Create connections between subtopics.
        
        Args:
            concept (Dict[str, Any]): Concept with subtopics.
        """
        subtopics = concept.get("subconcepts", [])
        
        if not subtopics:
            return
        
        # Create a mapping of subtopic names to IDs
        subtopic_ids = {s["name"].lower(): s["id"] for s in subtopics}
        
        # Define prerequisites for common subtopics
        prerequisites = {
            "deletion": ["insertion"],
            "traversal": ["implementation"],
            "searching": ["traversal"],
            "sorting": ["traversal"],
            "advanced operations": ["basic operations", "implementation"],
            "applications": ["implementation", "operations"]
        }
        
        # Define topic suggestions for common subtopics
        suggestions = {
            "implementation": ["operations", "applications"],
            "insertion": ["deletion", "traversal"],
            "deletion": ["insertion", "traversal"],
            "traversal": ["searching", "sorting"],
            "searching": ["sorting"],
            "sorting": ["searching"],
            "operations": ["applications"],
            "applications": ["operations"]
        }
        
        # Set up connections
        for subtopic in subtopics:
            subtopic_name = subtopic["name"].lower()
            
            # Add prerequisites
            for prereq_name, prereq_deps in prerequisites.items():
                if subtopic_name == prereq_name:
                    for dep in prereq_deps:
                        if dep in subtopic_ids:
                            subtopic["prerequisites"].append(subtopic_ids[dep])
            
            # Add topic suggestions
            for topic_name, suggested_topics in suggestions.items():
                if subtopic_name == topic_name:
                    for suggested_topic in suggested_topics:
                        if suggested_topic in subtopic_ids:
                            subtopic["topic_suggestions"].append(subtopic_ids[suggested_topic])
