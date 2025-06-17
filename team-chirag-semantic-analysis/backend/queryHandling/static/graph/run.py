#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import sys
import subprocess
import argparse
import time

def parse_args():
    """Parse command line arguments."""
    parser = argparse.ArgumentParser(description="DSA Knowledge Graph System Runner")
    
    parser.add_argument(
        "--topics",
        nargs="+",
        help="Specific DSA topics to scrape. If not provided, all topics will be scraped."
    )
    
    parser.add_argument(
        "--scrape-only",
        action="store_true",
        help="Only run the scraper without starting the frontend."
    )
    
    parser.add_argument(
        "--frontend-only",
        action="store_true",
        help="Only run the frontend without running the scraper."
    )
    
    parser.add_argument(
        "--verbose",
        action="store_true",
        help="Enable verbose logging."
    )
    
    return parser.parse_args()

def run_scraper(topics=None, verbose=False):
    """Run the Python scraper."""
    print("Starting DSA Knowledge Graph Scraper...")
    
    # Build the command
    scraper_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "python-scraper")
    cmd = [sys.executable, os.path.join(scraper_dir, "cli.py")]
    
    if topics:
        cmd.extend(["--topics"] + topics)
    
    if verbose:
        cmd.append("--verbose")
    
    # Run the command
    process = subprocess.run(cmd, check=True, cwd=scraper_dir)
    
    if process.returncode == 0:
        print("Scraper completed successfully.")
    else:
        print(f"Scraper failed with exit code {process.returncode}.")
        sys.exit(1)

def run_frontend():
    """Run the TypeScript frontend."""
    print("Starting DSA Knowledge Graph Frontend...")
    
    # Build the command
    frontend_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "typescript-frontend")
    
    # Check if npm is installed
    try:
        subprocess.run(["npm", "--version"], check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    except (subprocess.SubprocessError, FileNotFoundError):
        print("Error: npm is not installed or not in PATH.")
        print("Cannot start the frontend visualization.")
        print("To install Node.js and npm, visit: https://nodejs.org/")
        print("After installation, run setup.py again to install frontend dependencies.")
        return False
    
    # Check if node_modules exists
    if not os.path.exists(os.path.join(frontend_dir, "node_modules")):
        print("Frontend dependencies not installed. Installing now...")
        try:
            subprocess.run(["npm", "install"], check=True, cwd=frontend_dir)
            print("Dependencies installed successfully.")
        except subprocess.SubprocessError as e:
            print(f"Error installing dependencies: {e}")
            print("Cannot start the frontend visualization.")
            return False
    
    # Start the development server
    print("Starting development server...")
    try:
        subprocess.run(["npm", "run", "dev"], check=False, cwd=frontend_dir)
        return True
    except subprocess.SubprocessError as e:
        print(f"Error starting development server: {e}")
        return False

def main():
    """Main function."""
    args = parse_args()
    
    # Run scraper if not frontend only
    if not args.frontend_only:
        run_scraper(topics=args.topics, verbose=args.verbose)
        
        if args.scrape_only:
            print("\nScraping completed. Output JSON file has been created.")
            print("To visualize the data, run with the --frontend-only flag once you have Node.js installed.")
    
    # Run frontend if not scraper only
    if not args.scrape_only:
        frontend_success = run_frontend()
        
        if not frontend_success and not args.frontend_only:
            print("\nNote: The scraper has successfully run even though the frontend couldn't start.")
            print("You can find the output JSON in the python-scraper/output directory.")

if __name__ == "__main__":
    main()
