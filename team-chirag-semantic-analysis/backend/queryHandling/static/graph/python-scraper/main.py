#!/usr/bin/env python
# -*- coding: utf-8 -*-

import json
import os
import asyncio
from typing import List, Optional, Dict, Any
from scrapers.gfg_scraper import GFGScraper
from scrapers.w3schools_scraper import W3SchoolsScraper
from scrapers.leetcode_scraper import LeetCodeScraper
from scrapers.nptel_scraper import NPTELScraper
from scrapers.youtube_scraper import YouTubeScraper
from scrapers.online_resources_scraper import OnlineResourcesScraper
from utils.graph_builder import GraphBuilder
from utils.data_processor import DataProcessor
from utils.logger import setup_logger

logger = setup_logger()

# Define the main DSA topics
DSA_TOPICS = [
    "array", "string", "linked list", "stack", "queue", "tree", "binary tree", 
    "binary search tree", "heap", "hashing", "graph", "matrix", "sorting", 
    "searching", "greedy algorithm", "dynamic programming", "recursion", 
    "backtracking", "divide and conquer", "bit manipulation", "trie"
]

# Define subtopics for each main topic
DSA_SUBTOPICS = {
    "array": [
        "array initialization", "array operations", "dynamic array", "array manipulation",
        "array searching", "array sorting", "multidimensional arrays", "array rotation",
        "array traversal", "array algorithms"
    ],
    "linked list": [
        "singly linked list", "doubly linked list", "circular linked list", 
        "linked list operations", "linked list traversal", "linked list reversal",
        "linked list insertion", "linked list deletion", "linked list algorithms"
    ],
    "stack": [
        "stack operations", "stack implementation", "stack applications", "stack algorithms",
        "expression evaluation", "balanced parentheses", "stack using arrays", 
        "stack using linked list"
    ],
    "queue": [
        "queue operations", "queue implementation", "queue applications", "queue algorithms",
        "circular queue", "priority queue", "deque", "queue using arrays", 
        "queue using linked list"
    ],
    # Add more subtopics for other main topics as needed
}

async def main(topics: Optional[List[str]] = None, timeout: int = 300, test_scraper: Optional[str] = None):
    """Main function to orchestrate the scraping and graph building process."""
    try:
        logger.info("Starting DSA scraper")
        
        # If no topics are specified, use all topics
        if topics is None:
            topics = DSA_TOPICS
        
        # Initialize all scrapers
        gfg_scraper = GFGScraper()
        w3_scraper = W3SchoolsScraper()
        leetcode_scraper = LeetCodeScraper()
        nptel_scraper = NPTELScraper()
        youtube_scraper = YouTubeScraper()
        online_resources_scraper = OnlineResourcesScraper()  # Initialize the online resources scraper
        
        # Dictionary to store all scraped data
        all_data = {}
        
        # If testing a specific scraper
        if test_scraper:
            logger.info(f"Testing scraper: {test_scraper}")
            
            for topic in topics[:1]:  # Just test the first topic
                logger.info(f"Testing with topic: {topic}")
                
                if test_scraper == "all" or test_scraper == "gfg":
                    logger.info("Testing GFG scraper...")
                    result = await gfg_scraper.scrape_topic(topic)
                    logger.info(f"GFG result: {json.dumps(result, indent=2)}")
                
                if test_scraper == "all" or test_scraper == "w3schools":
                    logger.info("Testing W3Schools scraper...")
                    result = await w3_scraper.scrape_topic(topic)
                    logger.info(f"W3Schools result: {json.dumps(result, indent=2)}")
                
                if test_scraper == "all" or test_scraper == "leetcode":
                    logger.info("Testing LeetCode scraper...")
                    result = await leetcode_scraper.scrape_topic(topic)
                    logger.info(f"LeetCode result: {json.dumps(result, indent=2)}")
                
                if test_scraper == "all" or test_scraper == "nptel":
                    logger.info("Testing NPTEL scraper...")
                    result = await nptel_scraper.scrape_topic(topic)
                    logger.info(f"NPTEL result: {json.dumps(result, indent=2)}")
                
                if test_scraper == "all" or test_scraper == "youtube":
                    logger.info("Testing YouTube scraper...")
                    result = await youtube_scraper.scrape_topic(topic)
                    logger.info(f"YouTube result: {json.dumps(result, indent=2)}")
                
                if test_scraper == "all" or test_scraper == "online_resources":
                    logger.info("Testing Online Resources scraper...")
                    result = await online_resources_scraper.scrape_topic(topic)
                    logger.info(f"Online Resources result: {json.dumps(result, indent=2)}")
            
            logger.info("Scraper testing completed.")
            return
        
        # Scrape data for each topic and its subtopics
        for topic in topics:
            logger.info(f"Scraping data for topic: {topic}")
            
            # Create topic entry if it doesn't exist
            if topic not in all_data:
                all_data[topic] = {
                    "subtopics": {},
                    "resources": {
                        "videos": [],
                        "articles": []
                    }
                }
            
            # Gather data for the main topic from different sources concurrently
            main_topic_tasks = [
                gfg_scraper.scrape_topic(topic),
                w3_scraper.scrape_topic(topic),
                leetcode_scraper.scrape_topic(topic),
                nptel_scraper.scrape_topic(topic),
                youtube_scraper.scrape_topic(topic),
                online_resources_scraper.scrape_topic(topic)  # Add online resources scraper
            ]
            
            main_topic_results = await asyncio.gather(*main_topic_tasks, return_exceptions=True)
            
            # Process results for main topic
            for i, result in enumerate(main_topic_results):
                if isinstance(result, Exception):
                    logger.error(f"Error scraping main topic {topic} from source {i}: {str(result)}")
                    continue
                
                # Add resources to the topic
                if result and "resources" in result:
                    # Add videos
                    if "videos" in result["resources"]:
                        all_data[topic]["resources"]["videos"].extend(result["resources"].get("videos", []))
                    
                    # Add articles
                    if "articles" in result["resources"]:
                        all_data[topic]["resources"]["articles"].extend(result["resources"].get("articles", []))
                
                # Add or update subtopics
                if "subtopics" in result and result["subtopics"]:
                    for subtopic in result["subtopics"]:
                        if isinstance(subtopic, str) and subtopic.strip():
                            if subtopic not in all_data[topic]["subtopics"]:
                                all_data[topic]["subtopics"][subtopic] = {
                                    "resources": {
                                        "videos": [],
                                        "articles": []
                                    }
                                }
                        elif isinstance(subtopic, dict) and "name" in subtopic and subtopic["name"].strip():
                            subtopic_name = subtopic["name"]
                            if subtopic_name not in all_data[topic]["subtopics"]:
                                all_data[topic]["subtopics"][subtopic_name] = {
                                    "resources": {
                                        "videos": [],
                                        "articles": []
                                    }
                                }
                            
                            # Add resources to the subtopic
                            if "resources" in subtopic:
                                if "videos" in subtopic["resources"]:
                                    all_data[topic]["subtopics"][subtopic_name]["resources"]["videos"].extend(
                                        subtopic["resources"].get("videos", [])
                                    )
                                if "articles" in subtopic["resources"]:
                                    all_data[topic]["subtopics"][subtopic_name]["resources"]["articles"].extend(
                                        subtopic["resources"].get("articles", [])
                                    )
                
                # Add description if it doesn't exist yet
                if "description" in result and result["description"] and not all_data[topic].get("description"):
                    all_data[topic]["description"] = result["description"]
                
                # Add difficulty if it doesn't exist yet
                if "difficulty" in result and result["difficulty"] and not all_data[topic].get("difficulty"):
                    all_data[topic]["difficulty"] = result["difficulty"]
                
                # Add keywords
                if "keywords" in result and result["keywords"]:
                    if "keywords" not in all_data[topic]:
                        all_data[topic]["keywords"] = []
                    all_data[topic]["keywords"].extend([kw for kw in result.get("keywords", []) if kw not in all_data[topic]["keywords"]])
                
                # Add prerequisites
                if "prerequisites" in result and result["prerequisites"]:
                    if "prerequisites" not in all_data[topic]:
                        all_data[topic]["prerequisites"] = []
                    all_data[topic]["prerequisites"].extend([pre for pre in result.get("prerequisites", []) if pre not in all_data[topic].get("prerequisites", [])])
                
                # Add source to sources list
                if "source" in result and result["source"]:
                    if "sources" not in all_data[topic]:
                        all_data[topic]["sources"] = []
                    if result["source"] not in all_data[topic]["sources"]:
                        all_data[topic]["sources"].append(result["source"])
            
            # Process subtopics for this topic if they exist in DSA_SUBTOPICS
            if topic in DSA_SUBTOPICS:
                for subtopic in DSA_SUBTOPICS[topic]:
                    if subtopic not in all_data[topic]["subtopics"]:
                        all_data[topic]["subtopics"][subtopic] = {
                            "resources": {
                                "videos": [],
                                "articles": []
                            }
                        }
                    
                    logger.info(f"Scraping data for subtopic: {subtopic} of {topic}")
                    
                    # Gather data for the subtopic from different sources concurrently
                    subtopic_tasks = [
                        gfg_scraper.scrape_subtopic(topic, subtopic),
                        w3_scraper.scrape_subtopic(topic, subtopic),
                        leetcode_scraper.scrape_subtopic(topic, subtopic),
                        nptel_scraper.scrape_subtopic(topic, subtopic),
                        youtube_scraper.scrape_subtopic(topic, subtopic),
                        online_resources_scraper.scrape_subtopic(topic, subtopic)  # Add online resources scraper
                    ]
                    
                    subtopic_results = await asyncio.gather(*subtopic_tasks, return_exceptions=True)
                    
                    # Process results for subtopic
                    for i, result in enumerate(subtopic_results):
                        if isinstance(result, Exception):
                            logger.error(f"Error scraping subtopic {subtopic} of {topic} from source {i}: {str(result)}")
                            continue
                        
                        # Add resources to the subtopic
                        if result and "resources" in result:
                            # Add videos
                            if "videos" in result["resources"]:
                                all_data[topic]["subtopics"][subtopic]["resources"]["videos"].extend(
                                    result["resources"].get("videos", [])
                                )
                            
                            # Add articles
                            if "articles" in result["resources"]:
                                all_data[topic]["subtopics"][subtopic]["resources"]["articles"].extend(
                                    result["resources"].get("articles", [])
                                )
                        
                        # Add description if it doesn't exist yet
                        if "description" in result and result["description"] and not all_data[topic]["subtopics"][subtopic].get("description"):
                            all_data[topic]["subtopics"][subtopic]["description"] = result["description"]
                        
                        # Add difficulty if it doesn't exist yet
                        if "difficulty" in result and result["difficulty"] and not all_data[topic]["subtopics"][subtopic].get("difficulty"):
                            all_data[topic]["subtopics"][subtopic]["difficulty"] = result["difficulty"]
                        
                        # Add keywords
                        if "keywords" in result and result["keywords"]:
                            if "keywords" not in all_data[topic]["subtopics"][subtopic]:
                                all_data[topic]["subtopics"][subtopic]["keywords"] = []
                            all_data[topic]["subtopics"][subtopic]["keywords"].extend(
                                [kw for kw in result.get("keywords", []) if kw not in all_data[topic]["subtopics"][subtopic].get("keywords", [])]
                            )
        
        # Process the data to standardize, deduplicate, and merge from different sources
        logger.info("Processing and merging data from different sources")
        data_processor = DataProcessor()
        processed_data = data_processor.process_data(all_data)
        
        # Build the knowledge graph
        logger.info("Building knowledge graph")
        graph_builder = GraphBuilder(processed_data)
        graph = graph_builder.build_graph()
        
        # Save the graph to a JSON file
        logger.info("Saving knowledge graph to file")
        output_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "output")
        os.makedirs(output_dir, exist_ok=True)
        
        output_path = os.path.join(output_dir, "dsa_graph.json")
        with open(output_path, "w") as f:
            json.dump(graph, f, indent=2)
        
        logger.info(f"Knowledge graph saved to {output_path}")
        
        # Copy to frontend directory if it exists
        frontend_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "typescript-frontend", "public")
        if os.path.exists(frontend_dir):
            frontend_output_path = os.path.join(frontend_dir, "dsa_graph.json")
            with open(frontend_output_path, "w") as f:
                json.dump(graph, f, indent=2)
            
            logger.info(f"Knowledge graph copied to frontend at {frontend_output_path}")
        
        # Return the processed data for testing or further processing
        return processed_data
        
    except Exception as e:
        logger.error(f"Error in main function: {str(e)}")
        logger.exception(e)
        raise e
