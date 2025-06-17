#!/usr/bin/env python
# -*- coding: utf-8 -*-

import abc
import asyncio
import logging
from typing import Dict, List, Any, Optional

class BaseScraper(abc.ABC):
    """Base class for all scrapers with common functionality."""
    
    def __init__(self):
        self.logger = logging.getLogger(self.__class__.__name__)
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Accept-Language': 'en-US,en;q=0.9',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
            'Cache-Control': 'max-age=0'
        }
    
    @abc.abstractmethod
    async def scrape_topic(self, topic: str) -> Dict[str, Any]:
        """
        Scrape information about a DSA topic.
        
        Args:
            topic (str): The DSA topic to scrape.
            
        Returns:
            Dict[str, Any]: Dictionary containing topic information.
        """
        pass
    
    @abc.abstractmethod
    async def scrape_subtopic(self, topic: str, subtopic: str) -> Dict[str, Any]:
        """
        Scrape information about a DSA subtopic.
        
        Args:
            topic (str): The main DSA topic.
            subtopic (str): The DSA subtopic to scrape.
            
        Returns:
            Dict[str, Any]: Dictionary containing subtopic information.
        """
        pass
    
    async def extract_resources(self, topic: str, subtopic: Optional[str] = None) -> Dict[str, List[Dict[str, str]]]:
        """
        Extract resources related to a topic or subtopic.
        
        Args:
            topic (str): The main DSA topic.
            subtopic (Optional[str]): The DSA subtopic, if any.
            
        Returns:
            Dict[str, List[Dict[str, str]]]: Dictionary containing resources.
        """
        return {
            "videos": [],
            "articles": []
        }
        
    def clean_text(self, text: str) -> str:
        """
        Clean and normalize text.
        
        Args:
            text (str): Text to clean.
            
        Returns:
            str: Cleaned text.
        """
        if not text:
            return ""
        
        # Remove extra whitespace
        text = " ".join(text.split())
        
        return text.strip()
