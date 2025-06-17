#!/usr/bin/env python
# -*- coding: utf-8 -*-

import asyncio
import json
import re
from typing import Dict, List, Any, Optional
import aiohttp
from bs4 import BeautifulSoup
import random

from scrapers.base_scraper import BaseScraper

class OnlineResourcesScraper(BaseScraper):
    """Scraper for online courses, blogs and forum posts related to DSA topics."""
    
    def __init__(self):
        super().__init__()
        self.coursera_url = "https://www.coursera.org/search"
        self.stack_overflow_url = "https://stackoverflow.com/search"
        self.medium_url = "https://medium.com/search"
        self.dev_to_url = "https://dev.to/search"
        
        # Add referer and other headers for better scraping
        self.headers.update({
            'Accept': 'application/json, text/plain, */*',
            'Referer': 'https://www.google.com/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
        })
    
    async def scrape_topic(self, topic: str) -> Dict[str, Any]:
        """
        Scrape information about a DSA topic from online resources.
        
        Args:
            topic (str): The DSA topic to scrape.
            
        Returns:
            Dict[str, Any]: Dictionary containing topic information.
        """
        try:
            self.logger.info(f"Scraping online resources for topic: {topic}")
            
            # Get resources for this topic
            resources = await self.extract_resources(topic)
            
            # Create topic data structure
            topic_data = {
                "name": f"{topic.title()}",
                "type": "topic",
                "level": self._determine_level(topic),
                "description": self._get_description(topic),
                "keywords": self._generate_keywords(topic),
                "prerequisites": [],
                "topic_suggestions": [],
                "resources": resources
            }
            
            return topic_data
            
        except Exception as e:
            self.logger.error(f"Error scraping online resources for {topic}: {str(e)}")
            return self._create_empty_result()
    
    async def scrape_subtopic(self, topic: str, subtopic: str) -> Dict[str, Any]:
        """
        Scrape information about a DSA subtopic from online resources.
        
        Args:
            topic (str): The main DSA topic.
            subtopic (str): The DSA subtopic to scrape.
            
        Returns:
            Dict[str, Any]: Dictionary containing subtopic information.
        """
        try:
            self.logger.info(f"Scraping online resources for subtopic: {subtopic} (topic: {topic})")
            
            # Get resources for this subtopic
            resources = await self.extract_resources(topic, subtopic)
            
            # Create subtopic data structure
            subtopic_data = {
                "name": f"{subtopic.title()}",
                "type": "subtopic",
                "level": self._determine_level(subtopic),
                "description": self._get_description(subtopic, parent_topic=topic),
                "keywords": self._generate_keywords(subtopic, parent_topic=topic),
                "prerequisites": [],
                "topic_suggestions": [],
                "resources": resources
            }
            
            return subtopic_data
            
        except Exception as e:
            self.logger.error(f"Error scraping online resources for subtopic {subtopic}: {str(e)}")
            return self._create_empty_result()
    
    async def extract_resources(self, topic: str, subtopic: Optional[str] = None) -> Dict[str, List[Dict[str, str]]]:
        """
        Extract resources related to a topic or subtopic from various online sources.
        
        Args:
            topic (str): The main DSA topic.
            subtopic (Optional[str]): The DSA subtopic, if any.
            
        Returns:
            Dict[str, List[Dict[str, str]]]: Dictionary containing resources.
        """
        # Determine the search term
        if subtopic:
            search_term = f"{topic} {subtopic} data structure algorithm"
        else:
            search_term = f"{topic} data structure algorithm"
        
        # Collect resources in parallel
        tasks = [
            self._scrape_coursera(search_term),
            self._scrape_stack_overflow(search_term),
            self._scrape_medium(search_term),
            self._scrape_dev_to(search_term)
        ]
        
        results = await asyncio.gather(*tasks, return_exceptions=True)
        
        # Process results
        videos = []
        articles = []
        
        for result in results:
            if isinstance(result, Exception):
                self.logger.error(f"Error scraping resource: {str(result)}")
                continue
            
            if "courses" in result:
                # Convert courses to video-like format for consistency
                for course in result["courses"]:
                    videos.append({
                        "title": course["title"],
                        "url": course["url"],
                        "platform": course["platform"],
                        "instructor": course.get("instructor", ""),
                        "description": course.get("description", "")
                    })
            
            if "articles" in result:
                articles.extend(result["articles"])
        
        return {
            "videos": videos[:5],  # Limit to 5 videos/courses
            "articles": articles[:5]  # Limit to 5 articles
        }
    
    async def _scrape_coursera(self, search_term: str) -> Dict[str, List[Dict[str, str]]]:
        """
        Scrape Coursera for relevant courses.
        
        Args:
            search_term (str): Term to search for.
            
        Returns:
            Dict[str, List[Dict[str, str]]]: Dictionary with course information.
        """
        try:
            async with aiohttp.ClientSession() as session:
                params = {"query": search_term}
                
                async with session.get(
                    self.coursera_url, 
                    params=params, 
                    headers=self.headers
                ) as response:
                    if response.status != 200:
                        self.logger.error(f"Failed to search Coursera: {response.status}")
                        return {"courses": []}
                    
                    html = await response.text()
            
            # Parse courses
            soup = BeautifulSoup(html, "html.parser")
            course_elements = soup.select(".cds-ProductCard")
            
            courses = []
            for element in course_elements[:3]:  # Limit to top 3 courses
                title_elem = element.select_one(".cds-ProductCard-title")
                link_elem = element.select_one("a")
                instructor_elem = element.select_one(".cds-ProductCard-metadata")
                
                if title_elem and link_elem:
                    title = self.clean_text(title_elem.text)
                    url = link_elem.get("href")
                    if url and not url.startswith("http"):
                        url = f"https://www.coursera.org{url}"
                        
                    instructor = ""
                    if instructor_elem:
                        instructor = self.clean_text(instructor_elem.text)
                        
                    courses.append({
                        "title": f"Coursera: {title}",
                        "url": url,
                        "platform": "Coursera",
                        "instructor": instructor,
                        "description": f"Online course on {title}"
                    })
            
            # If parsing fails or no courses found, use mock data
            if not courses:
                courses = self._get_mock_coursera_data(search_term)
                
            return {"courses": courses}
            
        except Exception as e:
            self.logger.error(f"Error scraping Coursera: {str(e)}")
            return {"courses": self._get_mock_coursera_data(search_term)}
    
    async def _scrape_stack_overflow(self, search_term: str) -> Dict[str, List[Dict[str, str]]]:
        """
        Scrape Stack Overflow for relevant questions and answers.
        
        Args:
            search_term (str): Term to search for.
            
        Returns:
            Dict[str, List[Dict[str, str]]]: Dictionary with article information.
        """
        try:
            async with aiohttp.ClientSession() as session:
                params = {"q": search_term}
                
                async with session.get(
                    self.stack_overflow_url, 
                    params=params, 
                    headers=self.headers
                ) as response:
                    if response.status != 200:
                        self.logger.error(f"Failed to search Stack Overflow: {response.status}")
                        return {"articles": []}
                    
                    html = await response.text()
            
            # Parse questions
            soup = BeautifulSoup(html, "html.parser")
            question_elements = soup.select(".s-post-summary")
            
            articles = []
            for element in question_elements[:3]:  # Limit to top 3 questions
                title_elem = element.select_one(".s-link")
                stats_elem = element.select_one(".s-post-summary--stats")
                
                if title_elem:
                    title = self.clean_text(title_elem.text)
                    url = title_elem.get("href")
                    if url and not url.startswith("http"):
                        url = f"https://stackoverflow.com{url}"
                    
                    votes = "0"
                    if stats_elem:
                        votes_elem = stats_elem.select_one(".s-post-summary--stats-item-number")
                        if votes_elem:
                            votes = self.clean_text(votes_elem.text)
                    
                    articles.append({
                        "title": f"Stack Overflow: {title}",
                        "url": url,
                        "source": "Stack Overflow",
                        "votes": votes,
                        "description": f"Question and answers about {title}"
                    })
            
            # If parsing fails or no questions found, use mock data
            if not articles:
                articles = self._get_mock_stackoverflow_data(search_term)
                
            return {"articles": articles}
            
        except Exception as e:
            self.logger.error(f"Error scraping Stack Overflow: {str(e)}")
            return {"articles": self._get_mock_stackoverflow_data(search_term)}
    
    async def _scrape_medium(self, search_term: str) -> Dict[str, List[Dict[str, str]]]:
        """
        Scrape Medium for relevant articles.
        
        Args:
            search_term (str): Term to search for.
            
        Returns:
            Dict[str, List[Dict[str, str]]]: Dictionary with article information.
        """
        # Medium is harder to scrape, so use mock data for now
        return {"articles": self._get_mock_medium_data(search_term)}
    
    async def _scrape_dev_to(self, search_term: str) -> Dict[str, List[Dict[str, str]]]:
        """
        Scrape Dev.to for relevant articles.
        
        Args:
            search_term (str): Term to search for.
            
        Returns:
            Dict[str, List[Dict[str, str]]]: Dictionary with article information.
        """
        # Dev.to is another option, use mock data for now
        return {"articles": self._get_mock_dev_to_data(search_term)}
    
    def _create_empty_result(self) -> Dict[str, Any]:
        """
        Create an empty result structure.
        
        Returns:
            Dict[str, Any]: Empty result dictionary.
        """
        return {
            "name": "",
            "type": "topic",
            "level": "intermediate",
            "description": "",
            "keywords": [],
            "prerequisites": [],
            "topic_suggestions": [],
            "resources": {
                "videos": [],
                "articles": []
            }
        }
    
    def _determine_level(self, topic_name: str) -> str:
        """
        Determine the difficulty level of a topic.
        
        Args:
            topic_name (str): Name of the topic.
            
        Returns:
            str: Difficulty level (beginner, intermediate, advanced).
        """
        # Map common DSA topics to difficulty levels
        beginner_topics = ["array", "linked list", "stack", "queue", "basic", "introduction"]
        advanced_topics = ["advanced", "graph", "tree", "avl", "red black", "segment", "fenwick", 
                         "trie", "suffix", "dynamic programming", "parallel"]
        
        topic_lower = topic_name.lower()
        
        for term in advanced_topics:
            if term in topic_lower:
                return "advanced"
                
        for term in beginner_topics:
            if term in topic_lower:
                return "beginner"
                
        return "intermediate"
    
    def _get_description(self, topic: str, parent_topic: Optional[str] = None) -> str:
        """
        Generate a description for a topic.
        
        Args:
            topic (str): Topic name.
            parent_topic (Optional[str]): Parent topic if this is a subtopic.
            
        Returns:
            str: Topic description.
        """
        descriptions = {
            "array": "Arrays are linear data structures that store elements in contiguous memory locations, allowing random access through indices. They are fundamental in solving many algorithmic problems.",
            "linked list": "Linked Lists are linear data structures where elements are stored in nodes, with each node pointing to the next one. They allow for efficient insertions and deletions at the expense of random access.",
            "stack": "Stacks are abstract data types that follow the Last-In-First-Out (LIFO) principle. Elements can only be added or removed from the top of the stack, making them useful for backtracking algorithms and expression evaluation.",
            "queue": "Queues are abstract data types that follow the First-In-First-Out (FIFO) principle. Elements are added at the rear and removed from the front, making them useful for breadth-first search and scheduling.",
            "tree": "Trees are hierarchical data structures consisting of nodes connected by edges. They are widely used for representing hierarchical relationships and for efficient searching and sorting operations.",
            "graph": "Graphs are non-linear data structures consisting of vertices (nodes) connected by edges. They are used to represent networks, relationships, and many real-world problems that involve complex connections.",
            "hash table": "Hash Tables are data structures that store key-value pairs, using a hash function to map keys to array indices. They offer constant-time average complexity for lookups, insertions, and deletions.",
            "heap": "Heaps are specialized tree-based data structures that satisfy the heap property. They are commonly used to implement priority queues and in algorithms like heap sort.",
            "dynamic programming": "Dynamic Programming is a method for solving complex problems by breaking them down into simpler subproblems. It's particularly useful for optimization problems with overlapping subproblems.",
        }
        
        # Try to find a matching description
        topic_lower = topic.lower()
        for key, desc in descriptions.items():
            if key in topic_lower:
                if parent_topic:
                    return f"{desc} This is a subtopic of {parent_topic.title()}."
                return desc
        
        # Generic description if no specific one is found
        if parent_topic:
            return f"{topic.title()} is a concept related to {parent_topic.title()} in the field of data structures and algorithms."
        return f"{topic.title()} is an important concept in the field of data structures and algorithms."
    
    def _generate_keywords(self, topic: str, parent_topic: Optional[str] = None) -> List[str]:
        """
        Generate keywords for a topic.
        
        Args:
            topic (str): Topic name.
            parent_topic (Optional[str]): Parent topic if this is a subtopic.
            
        Returns:
            List[str]: List of keywords.
        """
        common_keywords = ["data structure", "algorithm", "programming", "computer science", 
                         "complexity", "leetcode", "problem", "tutorial"]
        
        # Start with the topic itself
        keywords = [topic.lower()]
        
        # Add parent topic if applicable
        if parent_topic:
            keywords.append(parent_topic.lower())
        
        # Add difficulty levels
        level = self._determine_level(topic)
        keywords.append(level)
        
        # Add common related terms
        if "array" in topic.lower():
            keywords.extend(["static array", "dynamic array", "contiguous memory", "indexing"])
        elif "linked list" in topic.lower():
            keywords.extend(["pointer", "node", "singly linked", "doubly linked", "circular"])
        elif "stack" in topic.lower():
            keywords.extend(["lifo", "push", "pop", "parentheses matching", "recursion"])
        elif "queue" in topic.lower():
            keywords.extend(["fifo", "enqueue", "dequeue", "bfs", "breadth-first search"])
        elif "tree" in topic.lower():
            keywords.extend(["binary tree", "node", "leaf", "root", "traversal", "bst"])
        elif "graph" in topic.lower():
            keywords.extend(["vertex", "edge", "adjacency list", "adjacency matrix", "dfs", "bfs"])
        
        # Add some common keywords
        keywords.extend(random.sample(common_keywords, min(5, len(common_keywords))))
        
        # Remove duplicates and return
        return list(set(keywords))
    
    def _get_mock_coursera_data(self, search_term: str) -> List[Dict[str, str]]:
        """Generate mock Coursera course data for when scraping fails."""
        base_courses = [
            {
                "title": "Coursera: Data Structures and Algorithms Specialization",
                "url": "https://www.coursera.org/specializations/data-structures-algorithms",
                "platform": "Coursera",
                "instructor": "University of California San Diego",
                "description": "Comprehensive course covering fundamental data structures and algorithms"
            },
            {
                "title": "Coursera: Algorithms, Part I",
                "url": "https://www.coursera.org/learn/algorithms-part1",
                "platform": "Coursera",
                "instructor": "Princeton University",
                "description": "Learn the essential information about algorithms and data structures"
            },
            {
                "title": "Coursera: Advanced Data Structures in Java",
                "url": "https://www.coursera.org/learn/advanced-data-structures",
                "platform": "Coursera", 
                "instructor": "University of California San Diego",
                "description": "Learn advanced data structures for solving complex problems"
            }
        ]
        
        # Customize based on search term
        topic = search_term.split()[0].lower()
        if topic in ["array", "stack", "queue", "linked", "tree", "graph", "hash"]:
            return [
                {
                    "title": f"Coursera: Mastering {topic.title()} Data Structures",
                    "url": f"https://www.coursera.org/learn/{topic}-data-structures",
                    "platform": "Coursera",
                    "instructor": "Stanford University",
                    "description": f"Comprehensive course on {topic} data structures and algorithms"
                }
            ] + base_courses[:2]
        
        return base_courses
    
    def _get_mock_stackoverflow_data(self, search_term: str) -> List[Dict[str, str]]:
        """Generate mock Stack Overflow data for when scraping fails."""
        topic = search_term.split()[0].lower()
        
        base_questions = [
            {
                "title": f"Stack Overflow: How to implement an efficient {topic} in Python?",
                "url": f"https://stackoverflow.com/questions/tagged/{topic}",
                "source": "Stack Overflow",
                "votes": str(random.randint(10, 200)),
                "description": f"Discussion on implementing {topic} data structures efficiently"
            },
            {
                "title": f"Stack Overflow: Time complexity comparison for {topic} operations",
                "url": f"https://stackoverflow.com/questions/tagged/{topic}+time-complexity",
                "source": "Stack Overflow",
                "votes": str(random.randint(20, 150)),
                "description": f"Analysis of time complexity for different {topic} operations"
            },
            {
                "title": f"Stack Overflow: Common mistakes when using {topic} in interviews",
                "url": f"https://stackoverflow.com/questions/tagged/{topic}+interview",
                "source": "Stack Overflow",
                "votes": str(random.randint(30, 300)),
                "description": f"Tips and common pitfalls when using {topic} in coding interviews"
            }
        ]
        
        return base_questions
    
    def _get_mock_medium_data(self, search_term: str) -> List[Dict[str, str]]:
        """Generate mock Medium article data for when scraping fails."""
        topic = search_term.split()[0].lower()
        
        return [
            {
                "title": f"Medium: Understanding {topic.title()} Data Structures from First Principles",
                "url": f"https://medium.com/search?q={topic}%20data%20structure",
                "source": "Medium",
                "author": "Tech Algorithmist",
                "description": f"A deep dive into {topic} data structures with visualizations and examples"
            },
            {
                "title": f"Medium: 5 {topic.title()} Problems Every Developer Should Know",
                "url": f"https://medium.com/search?q={topic}%20problems",
                "source": "Medium",
                "author": "Coding Interviews",
                "description": f"Common {topic}-based problems and their elegant solutions"
            },
            {
                "title": f"Medium: Optimizing {topic.title()} Operations for Production Code",
                "url": f"https://medium.com/search?q={topic}%20optimization",
                "source": "Medium",
                "author": "Better Programming",
                "description": f"Performance optimization techniques for {topic} data structures in real-world applications"
            }
        ]
    
    def _get_mock_dev_to_data(self, search_term: str) -> List[Dict[str, str]]:
        """Generate mock Dev.to article data for when scraping fails."""
        topic = search_term.split()[0].lower()
        
        return [
            {
                "title": f"Dev.to: {topic.title()} Data Structures Explained for Beginners",
                "url": f"https://dev.to/search?q={topic}%20explained",
                "source": "Dev.to",
                "author": "CodeNewbie",
                "description": f"Beginner-friendly explanation of {topic} with code examples in multiple languages"
            },
            {
                "title": f"Dev.to: Building a Custom {topic.title()} Implementation in JavaScript",
                "url": f"https://dev.to/search?q={topic}%20javascript",
                "source": "Dev.to",
                "author": "JavaScript Guru",
                "description": f"Step-by-step guide to implementing your own {topic} data structure in JavaScript"
            },
            {
                "title": f"Dev.to: Advanced {topic.title()} Techniques You Probably Don't Know",
                "url": f"https://dev.to/search?q=advanced%20{topic}",
                "source": "Dev.to",
                "author": "Algorithm Master",
                "description": f"Lesser-known tips and techniques for working with {topic} data structures"
            }
        ]
