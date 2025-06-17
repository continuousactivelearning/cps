#!/usr/bin/env python
# -*- coding: utf-8 -*-

from scrapers.base_scraper import BaseScraper
from scrapers.gfg_scraper import GFGScraper
from scrapers.w3schools_scraper import W3SchoolsScraper
from scrapers.leetcode_scraper import LeetCodeScraper
from scrapers.nptel_scraper import NPTELScraper
from scrapers.youtube_scraper import YouTubeScraper

__all__ = [
    'BaseScraper',
    'GFGScraper',
    'W3SchoolsScraper',
    'LeetCodeScraper',
    'NPTELScraper',
    'YouTubeScraper'
]
