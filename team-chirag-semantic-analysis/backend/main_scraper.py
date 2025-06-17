import os
import logging
import argparse
from dsa_scraper import DSAWebScraper

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("scraping.log"),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

def main():
    """Main function to run the DSA web scraper."""
    parser = argparse.ArgumentParser(description="DSA Web Scraper")
    parser.add_argument(
        "--output-dir", 
        default="data/scraped_data",
        help="Directory to save scraped data"
    )
    parser.add_argument(
        "--topic", 
        default=None,
        help="Specific DSA topic to scrape (default: scrape all topics)"
    )
    
    args = parser.parse_args()
    
    # Ensure output directory exists
    os.makedirs(args.output_dir, exist_ok=True)
    
    # Initialize and run scraper
    scraper = DSAWebScraper(output_dir=args.output_dir)
    
    if args.topic:
        if args.topic in scraper.dsa_topics:
            logger.info(f"Scraping single topic: {args.topic}")
            scraper.scrape_topic(args.topic)
        else:
            logger.error(f"Unknown topic: {args.topic}")
            logger.info(f"Available topics: {', '.join(scraper.dsa_topics.keys())}")
    else:
        logger.info("Scraping all DSA topics")
        scraper.scrape_all_topics()
    
    logger.info("Web scraping completed")

if __name__ == "__main__":
    main()
