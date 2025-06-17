#!/usr/bin/env python
# -*- coding: utf-8 -*-

import logging
from typing import Dict, List, Any, Set
from utils.logger import setup_logger

class DataProcessor:
    """Utility class for processing and merging data from different sources."""
    
    def __init__(self):
        self.logger = setup_logger(self.__class__.__name__)
    
    def process_data(self, data: Dict[str, Dict[str, Any]]) -> Dict[str, Dict[str, Any]]:
        """
        Process and standardize the scraped data.
        
        Args:
            data (Dict[str, Dict[str, Any]]): Raw scraped data.
            
        Returns:
            Dict[str, Dict[str, Any]]: Processed data.
        """
        self.logger.info("Processing scraped data")
        
        # Create a copy of the data to avoid modifying the original
        processed_data = {}
        
        # Process each topic
        for topic_name, topic_data in data.items():
            self.logger.debug(f"Processing topic: {topic_name}")
            
            # Create topic entry
            processed_data[topic_name] = {
                "name": topic_name,
                "description": topic_data.get("description", f"Information about {topic_name} in data structures and algorithms."),
                "difficulty": topic_data.get("difficulty", "medium"),
                "keywords": list(set(topic_data.get("keywords", []))),
                "prerequisites": list(set(topic_data.get("prerequisites", []))),
                "sources": list(set(topic_data.get("sources", []))),
                "subtopics": {},
                "resources": {
                    "videos": self._deduplicate_resources(topic_data.get("resources", {}).get("videos", [])),
                    "articles": self._deduplicate_resources(topic_data.get("resources", {}).get("articles", []))
                }
            }
            
            # Process subtopics
            for subtopic_name, subtopic_data in topic_data.get("subtopics", {}).items():
                self.logger.debug(f"Processing subtopic: {subtopic_name} (under {topic_name})")
                
                # Create subtopic entry
                processed_data[topic_name]["subtopics"][subtopic_name] = {
                    "name": subtopic_name,
                    "description": subtopic_data.get("description", f"Information about {subtopic_name} in {topic_name}."),
                    "difficulty": subtopic_data.get("difficulty", "medium"),
                    "keywords": list(set(subtopic_data.get("keywords", []))),
                    "prerequisites": list(set(subtopic_data.get("prerequisites", []))),
                    "sources": list(set(subtopic_data.get("sources", []))),
                    "resources": {
                        "videos": self._deduplicate_resources(subtopic_data.get("resources", {}).get("videos", [])),
                        "articles": self._deduplicate_resources(subtopic_data.get("resources", {}).get("articles", []))
                    }
                }
        
        return processed_data
    
    def _deduplicate_resources(self, resources: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """
        Deduplicate resources based on URL.
        
        Args:
            resources (List[Dict[str, Any]]): List of resources.
            
        Returns:
            List[Dict[str, Any]]: Deduplicated resources.
        """
        # Use a set to track unique URLs
        seen_urls = set()
        deduplicated_resources = []
        
        for resource in resources:
            # Skip if no URL or empty URL
            if not resource.get("url"):
                continue
            
            # Skip if already seen
            if resource["url"] in seen_urls:
                continue
            
            # Add to deduplicated resources
            seen_urls.add(resource["url"])
            deduplicated_resources.append(resource)
        
        return deduplicated_resources
    
    @staticmethod
    def merge_gfg_data(target: Dict[str, Any], source: Dict[str, Any]) -> None:
        """
        Merge data from GeeksForGeeks into the target.
        
        Args:
            target (Dict[str, Any]): Target data structure.
            source (Dict[str, Any]): Source data from GFG.
        """
        # Update description if empty
        if not target.get("description") and source.get("description"):
            target["description"] = source["description"]
        
        # Add keywords
        if "keywords" not in target:
            target["keywords"] = []
        
        target["keywords"].extend(source.get("keywords", []))
        
        # Deduplicate keywords
        if target.get("keywords"):
            target["keywords"] = list(set(target["keywords"]))
        
        # Add subtopics
        if "subtopics" not in target:
            target["subtopics"] = {}
        
        for subtopic in source.get("subtopics", []):
            if subtopic not in target["subtopics"]:
                target["subtopics"][subtopic] = {
                    "resources": {
                        "videos": [],
                        "articles": []
                    }
                }
        
        # Add resources
        target["resources"]["articles"].extend(source.get("resources", {}).get("articles", []))
        target["resources"]["videos"].extend(source.get("resources", {}).get("videos", []))
    
    @staticmethod
    def merge_w3_data(target: Dict[str, Any], source: Dict[str, Any]) -> None:
        """
        Merge data from W3Schools into the target.
        
        Args:
            target (Dict[str, Any]): Target data structure.
            source (Dict[str, Any]): Source data from W3Schools.
        """
        # Similar to GFG, but prioritize W3Schools for beginner-friendly descriptions
        if source.get("description"):
            if not target.get("description") or len(target.get("description", "")) > len(source["description"]):
                target["description"] = source["description"]
        
        # Add keywords
        if "keywords" not in target:
            target["keywords"] = []
        
        target["keywords"].extend(source.get("keywords", []))
        
        # Deduplicate keywords
        if target.get("keywords"):
            target["keywords"] = list(set(target["keywords"]))
        
        # Add subtopics
        if "subtopics" not in target:
            target["subtopics"] = {}
        
        for subtopic in source.get("subtopics", []):
            if subtopic not in target["subtopics"]:
                target["subtopics"][subtopic] = {
                    "resources": {
                        "videos": [],
                        "articles": []
                    }
                }
        
        # Add resources
        target["resources"]["articles"].extend(source.get("resources", {}).get("articles", []))
        target["resources"]["videos"].extend(source.get("resources", {}).get("videos", []))
    
    @staticmethod
    def merge_leetcode_data(target: Dict[str, Any], source: Dict[str, Any]) -> None:
        """
        Merge data from LeetCode into the target.
        
        Args:
            target (Dict[str, Any]): Target data structure.
            source (Dict[str, Any]): Source data from LeetCode.
        """
        # Update description if empty
        if not target.get("description") and source.get("description"):
            target["description"] = source["description"]
        
        # Add keywords
        if "keywords" not in target:
            target["keywords"] = []
        
        target["keywords"].extend(source.get("keywords", []))
        
        # Deduplicate keywords
        if target.get("keywords"):
            target["keywords"] = list(set(target["keywords"]))
        
        # Add subtopics
        if "subtopics" not in target:
            target["subtopics"] = {}
        
        for subtopic in source.get("subtopics", []):
            if subtopic not in target["subtopics"]:
                target["subtopics"][subtopic] = {
                    "resources": {
                        "videos": [],
                        "articles": []
                    }
                }
        
        # Add resources
        target["resources"]["articles"].extend(source.get("resources", {}).get("articles", []))
        target["resources"]["videos"].extend(source.get("resources", {}).get("videos", []))
    
    @staticmethod
    def merge_nptel_data(target: Dict[str, Any], source: Dict[str, Any]) -> None:
        """
        Merge data from NPTEL into the target.
        
        Args:
            target (Dict[str, Any]): Target data structure.
            source (Dict[str, Any]): Source data from NPTEL.
        """
        # Update description if empty
        if not target.get("description") and source.get("description"):
            target["description"] = source["description"]
        
        # Add keywords
        if "keywords" not in target:
            target["keywords"] = []
        
        target["keywords"].extend(source.get("keywords", []))
        
        # Deduplicate keywords
        if target.get("keywords"):
            target["keywords"] = list(set(target["keywords"]))
        
        # Add subtopics
        if "subtopics" not in target:
            target["subtopics"] = {}
        
        for subtopic in source.get("subtopics", []):
            if subtopic not in target["subtopics"]:
                target["subtopics"][subtopic] = {
                    "resources": {
                        "videos": [],
                        "articles": []
                    }
                }
        
        # Add resources
        target["resources"]["articles"].extend(source.get("resources", {}).get("articles", []))
        target["resources"]["videos"].extend(source.get("resources", {}).get("videos", []))
    
    @staticmethod
    def deduplicate_resources(resources: Dict[str, List[Dict[str, str]]]) -> Dict[str, List[Dict[str, str]]]:
        """
        Deduplicate resources by URL.
        
        Args:
            resources (Dict[str, List[Dict[str, str]]]): Resources to deduplicate.
            
        Returns:
            Dict[str, List[Dict[str, str]]]: Deduplicated resources.
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
        
        return result
