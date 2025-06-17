#!/usr/bin/env python
# -*- coding: utf-8 -*-

import asyncio
import json
import re
from typing import Dict, List, Any, Optional
import aiohttp
from bs4 import BeautifulSoup

from scrapers.base_scraper import BaseScraper

class LeetCodeScraper(BaseScraper):
    """Scraper for LeetCode content."""
    
    def __init__(self):
        super().__init__()
        self.base_url = "https://leetcode.com"
        self.search_url = "https://leetcode.com/problemset/"
        self.api_url = "https://leetcode.com/graphql"
    
    async def scrape_topic(self, topic: str) -> Dict[str, Any]:
        """
        Scrape information about a DSA topic from LeetCode.
        
        Args:
            topic (str): The DSA topic to scrape.
            
        Returns:
            Dict[str, Any]: Dictionary containing topic information.
        """
        try:
            self.logger.info(f"Scraping LeetCode for topic: {topic}")
            
            # Get problems related to the topic
            problems = await self._search_problems(topic)
            
            if not problems:
                self.logger.warning(f"No problems found for {topic} on LeetCode")
                return self._create_empty_result()
            
            # Get topic description from problems
            description = self._generate_topic_description(topic, problems)
            
            # Extract keywords from problems
            keywords = self._extract_keywords(topic, problems)
            
            # Extract subtopics
            subtopics = self._extract_subtopics(topic, problems)
            
            # Convert problems to resources
            articles = []
            for problem in problems[:5]:  # Limit to top 5
                articles.append({
                    "title": problem.get("title", ""),
                    "url": f"{self.base_url}/problems/{problem.get('slug', '')}"
                })
            
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
            self.logger.error(f"Error scraping LeetCode for {topic}: {str(e)}")
            return self._create_empty_result()
    
    async def scrape_subtopic(self, topic: str, subtopic: str) -> Dict[str, Any]:
        """
        Scrape information about a DSA subtopic from LeetCode.
        
        Args:
            topic (str): The main DSA topic.
            subtopic (str): The DSA subtopic to scrape.
            
        Returns:
            Dict[str, Any]: Dictionary containing subtopic information.
        """
        try:
            self.logger.info(f"Scraping LeetCode for subtopic: {subtopic} under {topic}")
            
            # Get problems related to the subtopic
            problems = await self._search_problems(f"{topic} {subtopic}")
            
            if not problems:
                self.logger.warning(f"No problems found for {subtopic} on LeetCode")
                return self._create_empty_result(is_subtopic=True)
            
            # Get subtopic description
            description = self._generate_subtopic_description(topic, subtopic, problems)
            
            # Extract keywords
            keywords = self._extract_keywords(f"{topic} {subtopic}", problems)
            
            # Determine difficulty level
            level = self._determine_level(subtopic, problems)
            
            # Convert problems to resources
            articles = []
            for problem in problems[:3]:  # Limit to top 3
                articles.append({
                    "title": problem.get("title", ""),
                    "url": f"{self.base_url}/problems/{problem.get('slug', '')}"
                })
            
            # Compile results
            result = {
                "description": description,
                "keywords": keywords,
                "level": level,
                "resources": {
                    "articles": articles,
                    "videos": []
                }
            }
            
            return result
            
        except Exception as e:
            self.logger.error(f"Error scraping LeetCode for subtopic {subtopic}: {str(e)}")
            return self._create_empty_result(is_subtopic=True)
    
    async def _search_problems(self, query: str) -> List[Dict[str, Any]]:
        """
        Search for problems on LeetCode.
        
        Args:
            query (str): The search query.
            
        Returns:
            List[Dict[str, Any]]: List of problems.
        """
        try:
            # For simplicity, we'll use a predefined list of LeetCode problems for certain topics
            # In a real implementation, you'd use the LeetCode API or scrape the search results
            
            # Define common DSA topics and associated problems
            topic_problems = {
                "array": [
                    {"id": "1", "title": "Two Sum", "difficulty": "Easy", "slug": "two-sum", "tags": ["array", "hash-table"]},
                    {"id": "53", "title": "Maximum Subarray", "difficulty": "Medium", "slug": "maximum-subarray", "tags": ["array", "dynamic-programming", "divide-and-conquer"]},
                    {"id": "121", "title": "Best Time to Buy and Sell Stock", "difficulty": "Easy", "slug": "best-time-to-buy-and-sell-stock", "tags": ["array", "dynamic-programming"]}
                ],
                "string": [
                    {"id": "3", "title": "Longest Substring Without Repeating Characters", "difficulty": "Medium", "slug": "longest-substring-without-repeating-characters", "tags": ["string", "sliding-window", "hash-table"]},
                    {"id": "5", "title": "Longest Palindromic Substring", "difficulty": "Medium", "slug": "longest-palindromic-substring", "tags": ["string", "dynamic-programming"]}
                ],
                "linked list": [
                    {"id": "206", "title": "Reverse Linked List", "difficulty": "Easy", "slug": "reverse-linked-list", "tags": ["linked-list"]},
                    {"id": "21", "title": "Merge Two Sorted Lists", "difficulty": "Easy", "slug": "merge-two-sorted-lists", "tags": ["linked-list", "recursion"]}
                ],
                "stack": [
                    {"id": "20", "title": "Valid Parentheses", "difficulty": "Easy", "slug": "valid-parentheses", "tags": ["stack", "string"]},
                    {"id": "155", "title": "Min Stack", "difficulty": "Easy", "slug": "min-stack", "tags": ["stack", "design"]}
                ],
                "queue": [
                    {"id": "225", "title": "Implement Stack using Queues", "difficulty": "Easy", "slug": "implement-stack-using-queues", "tags": ["stack", "queue", "design"]},
                    {"id": "232", "title": "Implement Queue using Stacks", "difficulty": "Easy", "slug": "implement-queue-using-stacks", "tags": ["stack", "queue", "design"]}
                ],
                "tree": [
                    {"id": "104", "title": "Maximum Depth of Binary Tree", "difficulty": "Easy", "slug": "maximum-depth-of-binary-tree", "tags": ["tree", "depth-first-search", "breadth-first-search", "binary-tree"]},
                    {"id": "101", "title": "Symmetric Tree", "difficulty": "Easy", "slug": "symmetric-tree", "tags": ["tree", "depth-first-search", "breadth-first-search", "binary-tree"]}
                ]
            }
            
            # Look for match in our predefined topics
            query_terms = query.lower().split()
            matching_problems = []
            
            for topic, problems in topic_problems.items():
                if any(term in topic for term in query_terms):
                    matching_problems.extend(problems)
            
            # If no exact topic match, try to match by problem tags
            if not matching_problems:
                for problems in topic_problems.values():
                    for problem in problems:
                        if any(term in tag for term in query_terms for tag in problem.get("tags", [])):
                            matching_problems.append(problem)
            
            # Deduplicate problems
            seen_ids = set()
            unique_problems = []
            
            for problem in matching_problems:
                if problem["id"] not in seen_ids:
                    seen_ids.add(problem["id"])
                    unique_problems.append(problem)
            
            return unique_problems
            
        except Exception as e:
            self.logger.error(f"Error searching LeetCode problems for {query}: {str(e)}")
            return []
    
    def _generate_topic_description(self, topic: str, problems: List[Dict[str, Any]]) -> str:
        """
        Generate a description for a topic based on related problems.
        
        Args:
            topic (str): The topic name.
            problems (List[Dict[str, Any]]): List of related problems.
            
        Returns:
            str: Generated description.
        """
        # Topic descriptions
        descriptions = {
            "array": "Arrays are linear data structures that store elements in contiguous memory locations, allowing random access through indices. They are fundamental in solving many algorithmic problems.",
            "string": "Strings are sequences of characters used to represent text. String manipulation is a common task in programming and often involves techniques like sliding windows, dynamic programming, and pattern matching.",
            "linked list": "Linked lists are linear data structures where elements are stored in nodes that point to the next node in the sequence. They are efficient for insertions and deletions but lack random access capabilities.",
            "stack": "Stacks are abstract data types that follow the Last-In-First-Out (LIFO) principle. They support two primary operations: push (adding an element) and pop (removing the most recently added element).",
            "queue": "Queues are abstract data types that follow the First-In-First-Out (FIFO) principle. They support enqueue (adding to the end) and dequeue (removing from the front) operations.",
            "tree": "Trees are hierarchical data structures with a root node and child nodes. Binary trees, binary search trees, and balanced trees are common variants used in many algorithms.",
            "binary tree": "Binary trees are tree data structures in which each node has at most two children, referred to as the left child and the right child. They are used in various algorithms for efficient searching and sorting.",
            "graph": "Graphs are non-linear data structures consisting of vertices and edges. They represent relationships between objects and are used in network analysis, pathfinding, and many other applications."
        }
        
        # Look for a predefined description
        for key, desc in descriptions.items():
            if topic.lower() == key:
                return desc
        
        # Generate a generic description
        return f"{topic.title()} is an important concept in data structures and algorithms, frequently featured in coding interviews and competitive programming challenges."
    
    def _generate_subtopic_description(self, topic: str, subtopic: str, problems: List[Dict[str, Any]]) -> str:
        """
        Generate a description for a subtopic.
        
        Args:
            topic (str): The main topic.
            subtopic (str): The subtopic name.
            problems (List[Dict[str, Any]]): List of related problems.
            
        Returns:
            str: Generated description.
        """
        # Subtopic descriptions
        descriptions = {
            "array traversal": "Array traversal involves visiting each element of an array in a specific order, typically from the first element to the last.",
            "array insertion": "Array insertion is the process of adding an element to an array at a specific position, which may require shifting existing elements.",
            "array deletion": "Array deletion involves removing an element from an array, which may require shifting subsequent elements to maintain contiguity.",
            "linked list traversal": "Linked list traversal involves visiting each node of a linked list in sequence, following the next pointers from the head to the tail.",
            "linked list insertion": "Linked list insertion is the process of adding a new node to a linked list, which requires updating the next pointers of adjacent nodes.",
            "linked list deletion": "Linked list deletion involves removing a node from a linked list and reconnecting the adjacent nodes to maintain the list structure.",
            "stack operations": "Stack operations include push (adding an element to the top), pop (removing the top element), and peek (viewing the top element without removing it).",
            "queue operations": "Queue operations include enqueue (adding an element to the rear), dequeue (removing an element from the front), and peek (viewing the front element without removing it)."
        }
        
        # Look for a predefined description
        key = f"{topic} {subtopic}".lower()
        for desc_key, desc in descriptions.items():
            if desc_key == key:
                return desc
        
        # Generate a generic description
        return f"{subtopic.title()} is an important aspect of {topic} in data structures and algorithms, often tested in technical interviews."
    
    def _extract_keywords(self, query: str, problems: List[Dict[str, Any]]) -> List[str]:
        """
        Extract keywords from problems.
        
        Args:
            query (str): The search query.
            problems (List[Dict[str, Any]]): List of problems.
            
        Returns:
            List[str]: List of keywords.
        """
        keywords = set(query.lower().split())
        
        # Add tags from problems
        for problem in problems:
            for tag in problem.get("tags", []):
                keywords.add(tag.lower().replace("-", " "))
        
        # Add difficulty levels
        difficulties = set(problem.get("difficulty", "").lower() for problem in problems if problem.get("difficulty"))
        keywords.update(difficulties)
        
        # Add "leetcode" and "problem"
        keywords.update(["leetcode", "problem", "algorithm", "data structure"])
        
        return list(keywords)
    
    def _extract_subtopics(self, topic: str, problems: List[Dict[str, Any]]) -> List[str]:
        """
        Extract subtopics from problems.
        
        Args:
            topic (str): The main topic.
            problems (List[Dict[str, Any]]): List of problems.
            
        Returns:
            List[str]: List of subtopics.
        """
        # Common operations for data structures
        common_operations = {
            "array": ["traversal", "insertion", "deletion", "searching", "sorting", "dynamic arrays"],
            "string": ["pattern matching", "manipulation", "comparison", "parsing"],
            "linked list": ["traversal", "insertion", "deletion", "reversal", "cycle detection"],
            "stack": ["operations", "implementation", "applications"],
            "queue": ["operations", "implementation", "applications"],
            "tree": ["traversal", "insertion", "deletion", "searching", "balancing"],
            "graph": ["traversal", "shortest path", "minimum spanning tree", "connectivity"]
        }
        
        # Get common operations for the topic
        subtopics = common_operations.get(topic.lower(), [])
        
        # Add tags from problems as potential subtopics
        for problem in problems:
            for tag in problem.get("tags", []):
                tag = tag.lower().replace("-", " ")
                if tag != topic.lower() and tag not in subtopics:
                    subtopics.append(tag)
        
        return subtopics
    
    def _determine_level(self, subtopic: str, problems: List[Dict[str, Any]]) -> str:
        """
        Determine the difficulty level of a subtopic.
        
        Args:
            subtopic (str): The subtopic name.
            problems (List[Dict[str, Any]]): List of problems.
            
        Returns:
            str: Difficulty level ('beginner', 'intermediate', or 'advanced').
        """
        # Count the number of problems by difficulty
        difficulty_counts = {"Easy": 0, "Medium": 0, "Hard": 0}
        
        for problem in problems:
            difficulty = problem.get("difficulty")
            if difficulty in difficulty_counts:
                difficulty_counts[difficulty] += 1
        
        # Determine the most common difficulty
        max_count = 0
        max_difficulty = "Medium"  # Default to Medium
        
        for difficulty, count in difficulty_counts.items():
            if count > max_count:
                max_count = count
                max_difficulty = difficulty
        
        # Map LeetCode difficulty to our levels
        if max_difficulty == "Easy":
            return "beginner"
        elif max_difficulty == "Medium":
            return "intermediate"
        else:  # Hard
            return "advanced"
    
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
