#!/usr/bin/env python
# -*- coding: utf-8 -*-

import asyncio
import json
import re
from typing import Dict, List, Any, Optional
import aiohttp
from bs4 import BeautifulSoup

from scrapers.base_scraper import BaseScraper

class NPTELScraper(BaseScraper):
    """Scraper for NPTEL content."""
    
    def __init__(self):
        super().__init__()
        self.base_url = "https://nptel.ac.in"
        self.search_url = "https://nptel.ac.in/search_result"
    
    async def scrape_topic(self, topic: str) -> Dict[str, Any]:
        """
        Scrape information about a DSA topic from NPTEL.
        
        Args:
            topic (str): The DSA topic to scrape.
            
        Returns:
            Dict[str, Any]: Dictionary containing topic information.
        """
        try:
            self.logger.info(f"Scraping NPTEL for topic: {topic}")
            
            # Due to limited direct access to NPTEL's search API, we'll use a simpler approach
            # with predefined NPTEL courses related to DSA topics
            
            # Predefined NPTEL courses for common DSA topics
            nptel_courses = {
                "data structures": [
                    {
                        "title": "Data Structures and Algorithms",
                        "url": "https://nptel.ac.in/courses/106/106/106106127/",
                        "instructor": "Prof. Naveen Garg",
                        "institute": "IIT Delhi"
                    },
                    {
                        "title": "Programming, Data Structures and Algorithms",
                        "url": "https://nptel.ac.in/courses/106/106/106106130/",
                        "instructor": "Prof. Sudarshan Iyengar",
                        "institute": "IIT Delhi"
                    }
                ],
                "algorithms": [
                    {
                        "title": "Design and Analysis of Algorithms",
                        "url": "https://nptel.ac.in/courses/106/105/106105157/",
                        "instructor": "Prof. Abhiram G. Ranade",
                        "institute": "IIT Bombay"
                    },
                    {
                        "title": "Algorithm Design and Analysis",
                        "url": "https://nptel.ac.in/courses/106/104/106104110/",
                        "instructor": "Prof. Shai Simonson",
                        "institute": "IIT Madras"
                    }
                ],
                "array": [
                    {
                        "title": "Data Structures and Algorithms - Arrays and Linked Lists",
                        "url": "https://nptel.ac.in/courses/106/106/106106127/",
                        "instructor": "Prof. Naveen Garg",
                        "institute": "IIT Delhi",
                        "lecture": "Lecture 2: Arrays and Linked Lists"
                    }
                ],
                "linked list": [
                    {
                        "title": "Data Structures and Algorithms - Linked Lists",
                        "url": "https://nptel.ac.in/courses/106/106/106106127/",
                        "instructor": "Prof. Naveen Garg",
                        "institute": "IIT Delhi",
                        "lecture": "Lecture 3: Linked Lists"
                    }
                ],
                "stack": [
                    {
                        "title": "Data Structures and Algorithms - Stacks and Queues",
                        "url": "https://nptel.ac.in/courses/106/106/106106127/",
                        "instructor": "Prof. Naveen Garg",
                        "institute": "IIT Delhi",
                        "lecture": "Lecture 4: Stacks and Queues"
                    }
                ],
                "queue": [
                    {
                        "title": "Data Structures and Algorithms - Stacks and Queues",
                        "url": "https://nptel.ac.in/courses/106/106/106106127/",
                        "instructor": "Prof. Naveen Garg",
                        "institute": "IIT Delhi",
                        "lecture": "Lecture 4: Stacks and Queues"
                    }
                ],
                "tree": [
                    {
                        "title": "Data Structures and Algorithms - Trees",
                        "url": "https://nptel.ac.in/courses/106/106/106106127/",
                        "instructor": "Prof. Naveen Garg",
                        "institute": "IIT Delhi",
                        "lecture": "Lecture 5: Trees"
                    }
                ],
                "graph": [
                    {
                        "title": "Data Structures and Algorithms - Graphs",
                        "url": "https://nptel.ac.in/courses/106/106/106106127/",
                        "instructor": "Prof. Naveen Garg",
                        "institute": "IIT Delhi",
                        "lecture": "Lecture 6: Graphs"
                    }
                ]
            }
            
            # Find matching courses
            courses = []
            for key, course_list in nptel_courses.items():
                if topic.lower() in key.lower() or key.lower() in topic.lower():
                    courses.extend(course_list)
            
            # If no specific match, return general DSA courses
            if not courses:
                courses = nptel_courses.get("data structures", [])
            
            # Convert courses to resources
            articles = []
            for course in courses:
                course_title = course.get("title", "")
                if "lecture" in course:
                    course_title += f" - {course.get('lecture', '')}"
                
                articles.append({
                    "title": course_title,
                    "url": course.get("url", "")
                })
            
            # Generate description and subtopics
            description = self._generate_topic_description(topic)
            subtopics = self._generate_subtopics(topic)
            keywords = self._generate_keywords(topic)
            
            # Compile results
            result = {
                "description": description,
                "keywords": keywords,
                "subtopics": subtopics,
                "resources": {
                    "articles": articles,
                    "videos": []
                }
            }
            
            return result
            
        except Exception as e:
            self.logger.error(f"Error scraping NPTEL for {topic}: {str(e)}")
            return self._create_empty_result()
    
    async def scrape_subtopic(self, topic: str, subtopic: str) -> Dict[str, Any]:
        """
        Scrape information about a DSA subtopic from NPTEL.
        
        Args:
            topic (str): The main DSA topic.
            subtopic (str): The DSA subtopic to scrape.
            
        Returns:
            Dict[str, Any]: Dictionary containing subtopic information.
        """
        try:
            self.logger.info(f"Scraping NPTEL for subtopic: {subtopic} under {topic}")
            
            # For simplicity, we'll return a basic structure
            # In a full implementation, you would search for specific lectures
            
            description = self._generate_subtopic_description(topic, subtopic)
            keywords = self._generate_keywords(f"{topic} {subtopic}")
            level = self._determine_level(subtopic)
            
            # Compile results
            result = {
                "description": description,
                "keywords": keywords,
                "level": level,
                "resources": {
                    "articles": [],
                    "videos": []
                }
            }
            
            return result
            
        except Exception as e:
            self.logger.error(f"Error scraping NPTEL for subtopic {subtopic}: {str(e)}")
            return self._create_empty_result(is_subtopic=True)
    
    def _generate_topic_description(self, topic: str) -> str:
        """
        Generate a description for a topic.
        
        Args:
            topic (str): The topic name.
            
        Returns:
            str: Generated description.
        """
        # Topic descriptions
        descriptions = {
            "array": "Arrays are linear data structures that store elements in contiguous memory locations. They provide constant-time access to elements through indices and are fundamental in implementing various algorithms.",
            "linked list": "Linked lists are linear data structures where elements are stored in nodes, each containing data and a reference to the next node. They allow for efficient insertion and deletion operations but do not support random access.",
            "stack": "Stacks are abstract data types that follow the Last-In-First-Out (LIFO) principle. They support push and pop operations and are used in various algorithms and language processing tasks.",
            "queue": "Queues are abstract data types that follow the First-In-First-Out (FIFO) principle. They support enqueue and dequeue operations and are used in scheduling, breadth-first search, and many other algorithms.",
            "tree": "Trees are hierarchical data structures with a root node and child nodes. They are used in search algorithms, file systems, and many other applications requiring hierarchical representation.",
            "graph": "Graphs are non-linear data structures consisting of vertices and edges. They represent relationships between objects and are used in network analysis, pathfinding, and many other applications."
        }
        
        # Look for a predefined description
        for key, desc in descriptions.items():
            if topic.lower() == key:
                return desc
        
        # Generate a generic description
        return f"{topic.title()} is an important concept in data structures and algorithms, covered in detail in NPTEL's computer science courses."
    
    def _generate_subtopic_description(self, topic: str, subtopic: str) -> str:
        """
        Generate a description for a subtopic.
        
        Args:
            topic (str): The main topic.
            subtopic (str): The subtopic name.
            
        Returns:
            str: Generated description.
        """
        # Subtopic descriptions
        descriptions = {
            "array traversal": "Array traversal involves iterating through each element of an array sequentially or according to a specific pattern.",
            "array sorting": "Array sorting is the process of arranging elements in a specific order (ascending or descending) using algorithms like bubble sort, insertion sort, merge sort, or quicksort.",
            "linked list insertion": "Linked list insertion involves adding a new node to a linked list, which can be done at the beginning, end, or any position within the list.",
            "stack implementation": "Stack implementation involves creating a data structure that supports push and pop operations, typically using arrays or linked lists as the underlying storage mechanism.",
            "queue implementation": "Queue implementation involves creating a data structure that supports enqueue and dequeue operations, typically using arrays or linked lists as the underlying storage mechanism.",
            "tree traversal": "Tree traversal is the process of visiting all nodes in a tree data structure in a specific order, such as depth-first (inorder, preorder, postorder) or breadth-first."
        }
        
        # Look for a predefined description
        key = f"{topic} {subtopic}".lower()
        for desc_key, desc in descriptions.items():
            if desc_key == key:
                return desc
        
        # Generate a generic description
        return f"{subtopic.title()} is an important aspect of {topic} in data structures and algorithms, covered in NPTEL courses."
    
    def _generate_keywords(self, query: str) -> List[str]:
        """
        Generate keywords for a query.
        
        Args:
            query (str): The search query.
            
        Returns:
            List[str]: List of keywords.
        """
        keywords = query.lower().split()
        
        # Add common DSA terms
        common_terms = ["algorithm", "data structure", "complexity", "implementation", "nptel", "course", "lecture"]
        keywords.extend(common_terms)
        
        # Deduplicate and return
        return list(set(keywords))
    
    def _generate_subtopics(self, topic: str) -> List[str]:
        """
        Generate subtopics for a topic.
        
        Args:
            topic (str): The topic name.
            
        Returns:
            List[str]: List of subtopics.
        """
        # Common subtopics for data structures
        subtopics = {
            "array": ["traversal", "searching", "sorting", "insertion", "deletion", "dynamic arrays"],
            "linked list": ["traversal", "insertion", "deletion", "reversal", "cycle detection"],
            "stack": ["implementation", "applications", "operations"],
            "queue": ["implementation", "applications", "operations", "priority queue"],
            "tree": ["traversal", "binary tree", "binary search tree", "balanced tree", "heap"],
            "graph": ["traversal", "shortest path", "minimum spanning tree", "connectivity"]
        }
        
        # Look for predefined subtopics
        for key, subtopic_list in subtopics.items():
            if topic.lower() == key:
                return subtopic_list
        
        # Return generic subtopics
        return ["implementation", "applications", "operations", "complexity analysis"]
    
    def _determine_level(self, subtopic: str) -> str:
        """
        Determine the difficulty level of a subtopic.
        
        Args:
            subtopic (str): The subtopic name.
            
        Returns:
            str: Difficulty level ('beginner', 'intermediate', or 'advanced').
        """
        # Keywords that might indicate difficulty
        beginner_keywords = ["basic", "introduction", "simple", "fundamental"]
        advanced_keywords = ["advanced", "complex", "optimization", "efficient"]
        
        # Check for beginner keywords
        if any(kw in subtopic.lower() for kw in beginner_keywords):
            return "beginner"
        
        # Check for advanced keywords
        if any(kw in subtopic.lower() for kw in advanced_keywords):
            return "advanced"
        
        # Default to intermediate
        return "intermediate"
    
    def _create_empty_result(self, is_subtopic: bool = False) -> Dict[str, Any]:
        """
        Create an empty result structure.
        
        Args:
            is_subtopic (bool): Whether this is for a subtopic.
            
        Returns:
            Dict[str, Any]: Empty result structure.
        """
        if is_subtopic:
            return {
                "description": "",
                "keywords": [],
                "level": "intermediate",
                "resources": {
                    "articles": [],
                    "videos": []
                }
            }
        else:
            return {
                "description": "",
                "keywords": [],
                "subtopics": [],
                "resources": {
                    "articles": [],
                    "videos": []
                }
            }
