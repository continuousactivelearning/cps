#!/usr/bin/env python
# -*- coding: utf-8 -*-

import asyncio
import json
from typing import Dict, List, Any, Optional
import aiohttp
from bs4 import BeautifulSoup

from scrapers.base_scraper import BaseScraper

class GFGScraper(BaseScraper):
    """Scraper for GeeksForGeeks content."""
    
    def __init__(self):
        super().__init__()
        self.base_url = "https://www.geeksforgeeks.org"
        self.search_url = f"{self.base_url}/search"
    
    async def scrape_topic(self, topic: str) -> Dict[str, Any]:
        """
        Scrape information about a DSA topic from GeeksForGeeks.
        
        Args:
            topic (str): The DSA topic to scrape.
            
        Returns:
            Dict[str, Any]: Dictionary containing topic information.
        """
        try:
            self.logger.info(f"Scraping GFG for topic: {topic}")
            
            # Search for the topic
            async with aiohttp.ClientSession() as session:
                # Build search query
                params = {
                    "q": f"{topic} data structure algorithm"
                }
                
                async with session.get(
                    self.search_url, 
                    params=params, 
                    headers=self.headers
                ) as response:
                    if response.status != 200:
                        self.logger.error(f"Failed to search GFG for {topic}: {response.status}")
                        return self._create_empty_result()
                    
                    html = await response.text()                    
            # Parse search results
            soup = BeautifulSoup(html, "html.parser")
            search_results = soup.select(".gsc-webResult .gsc-result")
            
            if not search_results:
                self.logger.warning(f"No search results found for {topic} on GFG, trying direct URL approach")
                # Try a more direct approach with a known URL pattern
                direct_url = f"{self.base_url}/data-structures/{topic.replace(' ', '-').lower()}/"
                async with session.get(direct_url, headers=self.headers) as response:
                    if response.status == 200:
                        html = await response.text()
                        article_soup = BeautifulSoup(html, "html.parser")
                        title_elem = article_soup.select_one("h1.entry-title")
                        title = self.clean_text(title_elem.get_text()) if title_elem else f"{topic.title()} Data Structure"
                        
                        content_elem = article_soup.select_one(".entry-content")
                        description = ""
                        if content_elem and content_elem.find_all("p"):
                            for p in content_elem.find_all("p")[:3]:  # Get first 3 paragraphs
                                paragraph_text = self.clean_text(p.get_text())
                                if len(paragraph_text) > 20:  # Skip very short paragraphs
                                    description += paragraph_text + " "
                            
                        articles = [{
                            "title": title,
                            "url": direct_url
                        }]
                    else:
                        self.logger.warning(f"Direct URL approach also failed for {topic} on GFG")
                        return self._create_empty_result()
            
            # Get the first 5 relevant results
            articles = []
            subtopics = set()
            
            for result in search_results[:10]:
                title_elem = result.select_one(".gs-title")
                if not title_elem or not title_elem.get_text():
                    continue
                
                title = self.clean_text(title_elem.get_text())
                
                # Skip if title doesn't seem related to DSA
                if not self._is_relevant_title(title, topic):
                    continue
                
                link_elem = title_elem.find("a", class_="gs-title")
                if not link_elem or not link_elem.get("href"):
                    continue
                
                url = link_elem.get("href")
                
                # Extract potential subtopics from the title
                potential_subtopics = self._extract_subtopics(title, topic)
                subtopics.update(potential_subtopics)
                
                articles.append({
                    "title": title,
                    "url": url
                })
                
                if len(articles) >= 5:
                    break
            
            # Get topic description and more details from the first article
            description = ""
            keywords = []
            
            if articles:
                try:
                    article_url = articles[0]["url"]
                    article_info = await self._scrape_article(article_url)
                    description = article_info.get("description", "")
                    keywords = article_info.get("keywords", [])
                except Exception as e:
                    self.logger.error(f"Error scraping article for {topic}: {str(e)}")
            
            # Compile results
            result = {
                "description": description or f"{topic.title()} is a fundamental data structure and algorithm concept in computer science.",
                "keywords": keywords or [topic, "data structure", "algorithm", "computer science"],
                "subtopics": list(subtopics),
                "resources": {
                    "articles": articles,
                    "videos": []
                }
            }
            
            return result
            
        except Exception as e:
            self.logger.error(f"Error scraping GFG for {topic}: {str(e)}")
            return self._create_empty_result()
    
    async def scrape_subtopic(self, topic: str, subtopic: str) -> Dict[str, Any]:
        """
        Scrape information about a DSA subtopic from GeeksForGeeks.
        
        Args:
            topic (str): The main DSA topic.
            subtopic (str): The DSA subtopic to scrape.
            
        Returns:
            Dict[str, Any]: Dictionary containing subtopic information.
        """
        try:
            self.logger.info(f"Scraping GFG for subtopic: {subtopic} under {topic}")
            
            # Search for the subtopic
            search_query = f"{topic} {subtopic} geeksforgeeks"
            
            async with aiohttp.ClientSession() as session:
                params = {
                    "q": search_query
                }
                
                async with session.get(
                    self.search_url, 
                    params=params, 
                    headers=self.headers
                ) as response:
                    if response.status != 200:
                        self.logger.error(f"Failed to search GFG for {subtopic}: {response.status}")
                        return self._create_empty_result(is_subtopic=True)
                    
                    html = await response.text()
            
            # Parse search results
            soup = BeautifulSoup(html, "html.parser")
            search_results = soup.select(".gsc-webResult .gsc-result")
            
            if not search_results:
                self.logger.warning(f"No search results found for {subtopic} on GFG")
                return self._create_empty_result(is_subtopic=True)
            
            # Get the first 3 relevant results
            articles = []
            
            for result in search_results[:5]:
                title_elem = result.select_one(".gs-title")
                if not title_elem or not title_elem.get_text():
                    continue
                
                title = self.clean_text(title_elem.get_text())
                
                # Skip if title doesn't seem relevant
                if not self._is_relevant_title(title, subtopic, topic):
                    continue
                
                link_elem = title_elem.find("a", class_="gs-title")
                if not link_elem or not link_elem.get("href"):
                    continue
                
                url = link_elem.get("href")
                
                articles.append({
                    "title": title,
                    "url": url
                })
                
                if len(articles) >= 3:
                    break
            
            # Get subtopic description from the first article
            description = ""
            keywords = []
            
            if articles:
                try:
                    article_url = articles[0]["url"]
                    article_info = await self._scrape_article(article_url)
                    description = article_info.get("description", "")
                    keywords = article_info.get("keywords", [])
                except Exception as e:
                    self.logger.error(f"Error scraping article for {subtopic}: {str(e)}")
            
            # Determine difficulty level
            level = self._determine_level(subtopic, description)
            
            # Compile results
            result = {
                "description": description or f"{subtopic.title()} is a concept related to {topic}.",
                "keywords": keywords or [topic, subtopic, "data structure", "algorithm"],
                "level": level,
                "resources": {
                    "articles": articles,
                    "videos": []
                }
            }
            
            return result
            
        except Exception as e:
            self.logger.error(f"Error scraping GFG for subtopic {subtopic}: {str(e)}")
            return self._create_empty_result(is_subtopic=True)
    
    async def _scrape_article(self, url: str) -> Dict[str, Any]:
        """
        Scrape an article for more detailed information.
        
        Args:
            url (str): URL of the article to scrape.
            
        Returns:
            Dict[str, Any]: Dictionary with article details.
        """
        try:
            async with aiohttp.ClientSession() as session:
                async with session.get(url, headers=self.headers) as response:
                    if response.status != 200:
                        return {"description": "", "keywords": []}
                    
                    html = await response.text()
            
            soup = BeautifulSoup(html, "html.parser")
            
            # Try to get the main content
            article_content = soup.select_one(".article-content, .entry-content, .post-content")
            
            if not article_content:
                article_content = soup.select_one("article")
            
            if not article_content:
                return {"description": "", "keywords": []}
            
            # Extract the first paragraph as description
            paragraphs = article_content.select("p")
            description = ""
            
            for p in paragraphs:
                text = self.clean_text(p.get_text())
                if len(text) > 50:  # Only consider substantial paragraphs
                    description = text
                    break
            
            # Extract keywords from headings and content
            keywords = []
            headings = article_content.select("h1, h2, h3, h4")
            
            for heading in headings:
                heading_text = self.clean_text(heading.get_text())
                if heading_text and len(heading_text) < 50:  # Reasonable heading length
                    keywords.extend(heading_text.lower().split())
            
            # Clean up keywords
            keywords = [k for k in keywords if len(k) > 3]  # Filter out short words
            keywords = list(set(keywords))[:10]  # Deduplicate and limit
            
            return {
                "description": description,
                "keywords": keywords
            }
            
        except Exception as e:
            self.logger.error(f"Error scraping article {url}: {str(e)}")
            return {"description": "", "keywords": []}
    
    def _is_relevant_title(self, title: str, *keywords) -> bool:
        """
        Check if a title is relevant to the given keywords.
        
        Args:
            title (str): The title to check.
            *keywords: Keywords to check against.
            
        Returns:
            bool: True if relevant, False otherwise.
        """
        title_lower = title.lower()
        
        # Check if all keywords are in the title
        return all(kw.lower() in title_lower for kw in keywords)
    
    def _extract_subtopics(self, title: str, topic: str) -> List[str]:
        """
        Extract potential subtopics from a title.
        
        Args:
            title (str): The title to extract from.
            topic (str): The main topic.
            
        Returns:
            List[str]: List of potential subtopics.
        """
        # Common DSA operations and concepts
        common_operations = [
            "insertion", "deletion", "search", "traversal", "sorting",
            "implementation", "initialization", "memory allocation",
            "operations", "algorithms", "complexity", "time complexity",
            "space complexity", "applications", "examples", "problems",
            "interview questions", "dynamic", "static"
        ]
        
        # Check if any of these operations are mentioned in the title
        subtopics = []
        title_lower = title.lower()
        
        for op in common_operations:
            if op.lower() in title_lower and f"{topic} {op}".lower() in title_lower:
                subtopics.append(op)
        
        return subtopics
    
    def _determine_level(self, subtopic: str, description: str) -> str:
        """
        Determine the difficulty level of a subtopic.
        
        Args:
            subtopic (str): The subtopic name.
            description (str): The description text.
            
        Returns:
            str: Difficulty level ('beginner', 'intermediate', or 'advanced').
        """
        # Keywords that might indicate difficulty
        beginner_keywords = ["basic", "introduction", "simple", "fundamental", "easy", "beginner"]
        advanced_keywords = ["advanced", "complex", "difficult", "optimization", "efficient", "expert"]
        
        combined_text = f"{subtopic} {description}".lower()
        
        # Check for beginner keywords
        if any(kw in combined_text for kw in beginner_keywords):
            return "beginner"
        
        # Check for advanced keywords
        if any(kw in combined_text for kw in advanced_keywords):
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
