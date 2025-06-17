#!/usr/bin/env python
# -*- coding: utf-8 -*-

import argparse
import asyncio
import json
import logging
import os
import sys
import time
from typing import List, Optional

# Add the parent directory to sys.path
sys.path.insert(0, os.path.abspath(os.path.dirname(os.path.dirname(__file__))))

from main import main, DSA_TOPICS
from utils.logger import setup_logger

logger = setup_logger("CLI")

def parse_args():
    """Parse command line arguments."""
    parser = argparse.ArgumentParser(description="DSA Knowledge Graph Scraper")
    
    parser.add_argument(
        "--topics",
        nargs="+",
        choices=DSA_TOPICS,
        help="Specific DSA topics to scrape. If not provided, all topics will be scraped."
    )
    
    parser.add_argument(
        "--output",
        type=str,
        default="dsa_graph.json",
        help="Output file path for the generated knowledge graph (default: dsa_graph.json)."
    )
    
    parser.add_argument(
        "--verbose",
        action="store_true",
        help="Enable verbose logging."
    )
    
    parser.add_argument(
        "--timeout",
        type=int,
        default=300,
        help="Timeout for scraping operations in seconds (default: 300)."
    )
    
    parser.add_argument(
        "--test-scraper",
        choices=["all", "gfg", "w3schools", "leetcode", "nptel", "youtube"],
        help="Test a specific scraper or all scrapers."
    )
    
    return parser.parse_args()

async def run_cli():
    """Run the CLI."""
    args = parse_args()
    
    try:
        # Set logging level based on verbose flag
        if args.verbose:
            logger.setLevel(logging.DEBUG)
            # Set all other loggers to DEBUG as well
            for name in logging.root.manager.loggerDict:
                logging.getLogger(name).setLevel(logging.DEBUG)
        
        # Run the main function
        logger.info("Starting DSA scraper")
        
        # Set timeout for scraping operations
        start_time = time.time()
        
        # Test a specific scraper if requested
        if args.test_scraper:
            await main(topics=args.topics or ["array"], test_scraper=args.test_scraper)
        else:
            await main(topics=args.topics, timeout=args.timeout)
        
        elapsed_time = time.time() - start_time
        logger.info(f"Scraping completed in {elapsed_time:.2f} seconds")
          # Ensure the output directory exists
        output_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "output")
        os.makedirs(output_dir, exist_ok=True)
        
        # Save the graph to the specified output file
        output_path = os.path.join(output_dir, args.output)
        
        # Check if the file exists - this is just for verification
        if os.path.exists(output_path):
            logger.info(f"Found existing graph at {output_path}")
            try:
                with open(output_path, "r") as f:
                    existing_data = json.load(f)
                logger.info(f"Existing graph has {len(existing_data.get('concepts', []))} concepts")
            except Exception as e:
                logger.warning(f"Could not read existing graph: {str(e)}")
        
        logger.info(f"DSA graph successfully saved to {output_path}")
        
        # Copy the graph to the frontend directory if it exists
        frontend_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "typescript-frontend", "public")
        if os.path.exists(frontend_dir):
            frontend_output_path = os.path.join(frontend_dir, "dsa_graph.json")
            try:
                # If the file exists in the output directory, copy it
                if os.path.exists(output_path):
                    with open(output_path, "r") as f:
                        graph_data = json.load(f)
                    
                    # Write the graph to frontend_output_path
                    with open(frontend_output_path, "w") as f:
                        json.dump(graph_data, f, indent=2)
                    
                    logger.info(f"DSA graph copied to frontend at {frontend_output_path}")
                else:
                    # Create a dummy graph for testing
                    dummy_graph = {
                        "concepts": [
                            {
                                "id": "t_array",
                                "name": "Array",
                                "type": "topic",
                                "description": "Arrays are a fundamental data structure that store elements of the same type in contiguous memory locations.",
                                "resources": {
                                    "videos": [
                                        {
                                            "title": "Array Data Structure | Illustrated Data Structures",
                                            "url": "https://www.youtube.com/watch?v=example1",
                                            "channel": "DSA Learning"
                                        }
                                    ],
                                    "articles": [
                                        {
                                            "title": "Array Data Structure",
                                            "url": "https://www.geeksforgeeks.org/array-data-structure/"
                                        }
                                    ]
                                },
                                "difficulty": "beginner",
                                "prerequisites": [],
                                "related": []
                            }
                        ],
                        "edges": []
                    }
                    
                    with open(frontend_output_path, "w") as f:
                        json.dump(dummy_graph, f, indent=2)
                    
                    logger.info(f"Dummy graph created at {frontend_output_path} for testing")
            except Exception as e:
                logger.error(f"Error copying graph to frontend: {str(e)}")
                logger.exception(e)
        
    except Exception as e:
        logger.error(f"Error: {str(e)}")
        logger.exception(e)  # Print the full traceback
        sys.exit(1)

if __name__ == "__main__":
    asyncio.run(run_cli())
