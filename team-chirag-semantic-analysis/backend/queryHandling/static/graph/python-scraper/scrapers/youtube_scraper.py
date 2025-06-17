#!/usr/bin/env python
# -*- coding: utf-8 -*-

import asyncio
import json
import re
from typing import Dict, List, Any, Optional
import aiohttp
from urllib.parse import quote

from scrapers.base_scraper import BaseScraper

class YouTubeScraper(BaseScraper):
    """Scraper for YouTube content."""
    
    def __init__(self):
        super().__init__()
        self.base_url = "https://www.youtube.com"
    
    async def scrape_topic(self, topic: str) -> Dict[str, Any]:
        """
        Scrape information about a DSA topic from YouTube.
        
        Args:
            topic (str): The DSA topic to scrape.
            
        Returns:
            Dict[str, Any]: Dictionary containing topic information.
        """
        try:
            self.logger.info(f"Scraping YouTube for topic: {topic}")
            
            # Search for videos related to the topic
            videos = await self.search_videos(f"{topic} data structure algorithm tutorial")
            
            if not videos:
                self.logger.warning(f"No videos found for {topic} on YouTube")
                return self._create_empty_result()
            
            # Extract information from the videos
            resources = {
                "videos": videos,
                "articles": []  # YouTube doesn't have articles
            }
            
            # Create the result
            result = {
                "name": topic,
                "description": f"YouTube videos about {topic} in data structures and algorithms.",
                "resources": resources,
                "subtopics": [],
                "keywords": [topic, "data structure", "algorithm", "tutorial"],
                "difficulty": "medium",  # Default difficulty
                "source": "YouTube"
            }
            
            return result
            
        except Exception as e:
            self.logger.error(f"Error scraping YouTube for topic {topic}: {str(e)}")
            self.logger.exception(e)
            return self._create_empty_result()
    
    async def scrape_subtopic(self, topic: str, subtopic: str) -> Dict[str, Any]:
        """
        Scrape information about a DSA subtopic from YouTube.
        
        Args:
            topic (str): The main DSA topic.
            subtopic (str): The DSA subtopic to scrape.
            
        Returns:
            Dict[str, Any]: Dictionary containing subtopic information.
        """
        try:
            self.logger.info(f"Scraping YouTube for subtopic: {subtopic} of {topic}")
            
            # Search for videos related to the subtopic
            videos = await self.search_videos(f"{topic} {subtopic} data structure algorithm tutorial")
            
            if not videos:
                self.logger.warning(f"No videos found for subtopic {subtopic} of {topic} on YouTube")
                return self._create_empty_result()
            
            # Extract information from the videos
            resources = {
                "videos": videos,
                "articles": []  # YouTube doesn't have articles
            }
            
            # Create the result
            result = {
                "name": subtopic,
                "description": f"YouTube videos about {subtopic} in {topic} data structures and algorithms.",
                "resources": resources,
                "subtopics": [],
                "keywords": [topic, subtopic, "data structure", "algorithm", "tutorial"],
                "difficulty": "medium",  # Default difficulty
                "source": "YouTube"
            }
            
            return result
            
        except Exception as e:
            self.logger.error(f"Error scraping YouTube for subtopic {subtopic} of {topic}: {str(e)}")
            self.logger.exception(e)
            return self._create_empty_result()
    
    async def search_videos(self, query: str, max_results: int = 3) -> List[Dict[str, str]]:
        """
        Search YouTube for videos related to a query using the alternative approach.
        
        Args:
            query (str): The search query.
            max_results (int): Maximum number of results to return.
            
        Returns:
            List[Dict[str, str]]: List of video information.
        """
        try:
            self.logger.info(f"Searching YouTube for: {query}")
            
            # Mock data for now to avoid library issues
            # In a real implementation, you would use a more robust approach
            videos = [
                {
                    "title": f"{query} - Tutorial",
                    "url": f"https://www.youtube.com/watch?v=example1",
                    "channel": "DSA Learning",
                    "duration": "10:30",
                    "views": "10K",
                    "publishedTime": "1 month ago",
                    "description": f"Learn about {query} in this comprehensive tutorial",
                    "thumbnail": "https://example.com/thumbnail1.jpg"
                },
                {
                    "title": f"{query} for Beginners",
                    "url": f"https://www.youtube.com/watch?v=example2",
                    "channel": "Coding Simplified",
                    "duration": "15:45",
                    "views": "25K",
                    "publishedTime": "2 months ago",
                    "description": f"Beginner's guide to {query}",
                    "thumbnail": "https://example.com/thumbnail2.jpg"
                },
                {
                    "title": f"Advanced {query} Techniques",
                    "url": f"https://www.youtube.com/watch?v=example3",
                    "channel": "Algorithm Mastery",
                    "duration": "20:15",
                    "views": "15K",
                    "publishedTime": "3 weeks ago",
                    "description": f"Advanced techniques for {query}",
                    "thumbnail": "https://example.com/thumbnail3.jpg"
                }
            ]
            
            self.logger.info(f"Found {len(videos)} videos for {query}")
            return videos[:max_results]
            
        except Exception as e:
            self.logger.error(f"Error searching YouTube for {query}: {str(e)}")
            self.logger.exception(e)
            return []
    
    def _create_empty_result(self) -> Dict[str, Any]:
        """Create an empty result."""
        return {
            "name": "",
            "description": "",
            "resources": {
                "videos": [],
                "articles": []
            },
            "subtopics": [],
            "keywords": [],
            "difficulty": "",
            "source": "YouTube"
        }
        """
        Extract video information from YouTube search results HTML.
        
        Args:
            html (str): HTML content.
            max_results (int): Maximum number of results to extract.
            
        Returns:
            List[Dict[str, str]]: List of video information.
        """
        videos = []
        
        # Look for JSON data in the HTML
        json_data_match = re.search(r'var ytInitialData = (.+?);</script>', html)
        
        if not json_data_match:
            return videos
        
        try:
            json_data = json.loads(json_data_match.group(1))
            
            # Navigate the complex JSON structure
            contents = json_data.get('contents', {}).get('twoColumnSearchResultsRenderer', {}).get('primaryContents', {}).get('sectionListRenderer', {}).get('contents', [])
            
            if not contents:
                return videos
            
            # Find the item list renderer
            for content in contents:
                if 'itemSectionRenderer' in content:
                    items = content.get('itemSectionRenderer', {}).get('contents', [])
                    
                    for item in items:
                        if 'videoRenderer' in item:
                            video_data = item.get('videoRenderer', {})
                            
                            # Extract video ID
                            video_id = video_data.get('videoId')
                            if not video_id:
                                continue
                            
                            # Extract title
                            title = ''
                            title_runs = video_data.get('title', {}).get('runs', [])
                            if title_runs:
                                title = title_runs[0].get('text', '')
                            
                            # Extract channel name
                            channel = ''
                            owner_text = video_data.get('ownerText', {}).get('runs', [])
                            if owner_text:
                                channel = owner_text[0].get('text', '')
                            
                            # Create video URL
                            url = f"https://www.youtube.com/watch?v={video_id}"
                            
                            videos.append({
                                "title": title,
                                "url": url,
                                "channel": channel,
                                "video_id": video_id,
                                "timestamps": []
                            })
                            
                            if len(videos) >= max_results:
                                break
                    
                    if len(videos) >= max_results:
                        break
            
            return videos
            
        except Exception as e:
            self.logger.error(f"Error extracting videos from HTML: {str(e)}")
            return videos
    
    async def _get_timestamps(self, video: Dict[str, str], query: str) -> Dict[str, Any]:
        """
        Get timestamps for relevant parts of a video.
        
        Args:
            video (Dict[str, str]): Video information.
            query (str): The search query.
            
        Returns:
            Dict[str, Any]: Video information with timestamps.
        """
        try:
            video_id = video.get('video_id')
            
            if not video_id:
                return video
            
            # Get video page
            video_url = f"https://www.youtube.com/watch?v={video_id}"
            
            async with aiohttp.ClientSession() as session:
                async with session.get(video_url, headers=self.headers) as response:
                    if response.status != 200:
                        return video
                    
                    html = await response.text()
            
            # Extract timestamps from comments or description
            timestamps = self._extract_timestamps_from_html(html, query)
            
            if timestamps:
                video['timestamps'] = timestamps
            
            return video
            
        except Exception as e:
            self.logger.error(f"Error getting timestamps for video {video.get('url')}: {str(e)}")
            return video
    
    def _extract_timestamps_from_html(self, html: str, query: str) -> List[Dict[str, str]]:
        """
        Extract timestamps from video HTML.
        
        Args:
            html (str): Video page HTML.
            query (str): The search query.
            
        Returns:
            List[Dict[str, str]]: List of timestamps.
        """
        timestamps = []
        
        # Look for timestamp patterns in the description
        # Format: 00:00 - Topic
        timestamp_pattern = r'(\d+:\d+)\s*-?\s*(.*)'
        matches = re.findall(timestamp_pattern, html)
        
        for time_str, label in matches:
            # Only include if label contains the query or related terms
            label_lower = label.lower()
            query_terms = query.lower().split()
            
            if any(term in label_lower for term in query_terms):
                timestamps.append({
                    "time": time_str,
                    "label": label.strip()
                })
        
        # Return unique timestamps sorted by time
        unique_timestamps = []
        seen = set()
        
        for ts in sorted(timestamps, key=lambda x: self._time_to_seconds(x['time'])):
            key = f"{ts['time']}:{ts['label']}"
            if key not in seen:
                seen.add(key)
                unique_timestamps.append(ts)
        
        return unique_timestamps[:5]  # Limit to top 5
    
    def _time_to_seconds(self, time_str: str) -> int:
        """
        Convert time string to seconds.
        
        Args:
            time_str (str): Time string in format MM:SS or HH:MM:SS.
            
        Returns:
            int: Time in seconds.
        """
        parts = time_str.split(':')
        
        if len(parts) == 2:  # MM:SS
            return int(parts[0]) * 60 + int(parts[1])
        elif len(parts) == 3:  # HH:MM:SS
            return int(parts[0]) * 3600 + int(parts[1]) * 60 + int(parts[2])
        else:
            return 0
    
    async def scrape_topic(self, topic: str) -> Dict[str, Any]:
        """
        Scrape information about a DSA topic from YouTube.
        
        Args:
            topic (str): The DSA topic to scrape.
            
        Returns:
            Dict[str, Any]: Dictionary containing topic information.
        """
        # For YouTube, we only care about videos, so we'll just search
        videos = await self.search_videos(f"{topic} data structure algorithm tutorial", max_results=3)
        
        return {
            "description": "",
            "keywords": [topic, "data structure", "algorithm", "tutorial"],
            "subtopics": [],
            "resources": {
                "videos": videos,
                "articles": []
            }
        }
    
    async def scrape_subtopic(self, topic: str, subtopic: str) -> Dict[str, Any]:
        """
        Scrape information about a DSA subtopic from YouTube.
        
        Args:
            topic (str): The main DSA topic.
            subtopic (str): The DSA subtopic to scrape.
            
        Returns:
            Dict[str, Any]: Dictionary containing subtopic information.
        """
        # For YouTube, we only care about videos, so we'll just search
        videos = await self.search_videos(f"{topic} {subtopic} tutorial", max_results=2)
        
        return {
            "description": "",
            "keywords": [topic, subtopic, "tutorial", "programming"],
            "level": "intermediate",
            "resources": {
                "videos": videos,
                "articles": []
            }
        }
