# DSA Knowledge Graph Scraper

This Python package scrapes information about Data Structures and Algorithms (DSA) topics from various educational resources and builds a comprehensive knowledge graph.

## Features

- Scrapes DSA topics and subtopics from multiple sources:
  - GeeksForGeeks
  - LeetCode
  - NPTEL
  - W3Schools
  - YouTube
  - Coursera
  - Stack Overflow
  - Medium
  - Dev.to
- Processes and merges data into a unified knowledge graph
- Extracts relevant resources (videos, articles, courses, forum posts)
- Outputs a structured JSON file for visualization

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/dsa-scraper.git
   cd dsa-scraper/python-scraper
   ```

2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

## Usage

### Command Line Interface

Run the scraper from the command line:

```bash
python cli.py [--topics TOPIC1 TOPIC2 ...] [--output OUTPUT_FILE] [--verbose]
```

Options:
- `--topics`: Specific DSA topics to scrape (default: all topics)
- `--output`: Output file path for the knowledge graph (default: dsa_graph.json)
- `--verbose`: Enable verbose logging

Example:
```bash
python cli.py --topics array linked-list stack --output my_graph.json --verbose
```

### Testing Individual Scrapers

You can test individual scrapers to see their output:

```python
import asyncio
from main import main

# Test only the online resources scraper with 'array' topic
asyncio.run(main(topics=['array'], test_scraper='online_resources'))
```

Available test options:
- 'gfg' - GeeksForGeeks
- 'w3schools' - W3Schools
- 'leetcode' - LeetCode
- 'nptel' - NPTEL
- 'youtube' - YouTube
- 'online_resources' - Coursera, Stack Overflow, Medium, Dev.to
- 'all' - All scrapers

### Online Resources Scraper

The system includes a dedicated scraper for online educational resources which:

- Searches Coursera for relevant DSA courses
- Retrieves popular questions and answers from Stack Overflow
- Collects in-depth articles from Medium
- Gathers developer-focused content from Dev.to

This provides a comprehensive set of resources for each topic beyond traditional educational content.

### Programmatically

You can also use the scraper in your own Python code:

```python
import asyncio
from main import main

# Scrape all topics
asyncio.run(main())

# Scrape specific topics
asyncio.run(main(topics=["array", "linked list", "stack"]))
```

## Output Format

The scraper generates a JSON file with the following structure:

```json
{
  "concepts": [
    {
      "id": "t1",
      "name": "Array",
      "type": "topic",
      "level": "beginner",
      "description": "An array is a linear data structure...",
      "keywords": ["array", "linear data structure", ...],
      "prerequisites": [],
      "topic_suggestions": ["t2", "t3"],
      "resources": {
        "videos": [
          {
            "title": "Introduction to Arrays | DSA",
            "url": "https://www.youtube.com/watch?v=ZJKO9fEjHbI"
          }
        ],
        "articles": [
          {
            "title": "Understanding Arrays",
            "url": "https://www.geeksforgeeks.org/arrays-in-c-cpp/"
          }
        ]
      },
      "subconcepts": [
        {
          "id": "t1_s1",
          "name": "Initialization",
          "type": "subtopic",
          "level": "beginner",
          "description": "Ways to declare, initialize...",
          "keywords": ["declare array", "initialize", ...],
          "prerequisites": [],
          "topic_suggestions": ["t1_s2"],
          "resources": {
            "videos": [...],
            "articles": [...]
          }
        }
      ]
    }
  ]
}
```

## Project Structure

```
python-scraper/
├── cli.py                 # Command-line interface
├── main.py                # Main orchestration module
├── requirements.txt       # Python dependencies
├── output/                # Generated output files
├── scrapers/              # Web scraping modules
│   ├── __init__.py
│   ├── base_scraper.py    # Base scraper class
│   ├── gfg_scraper.py     # GeeksForGeeks scraper
│   ├── leetcode_scraper.py# LeetCode scraper
│   ├── nptel_scraper.py   # NPTEL scraper
│   ├── w3schools_scraper.py# W3Schools scraper
│   ├── youtube_scraper.py # YouTube scraper
│   └── online_resources_scraper.py # Coursera, Stack Overflow, Medium, Dev.to scraper
└── utils/                 # Utility modules
    ├── __init__.py
    ├── data_processor.py  # Data processing utilities
    ├── graph_builder.py   # Knowledge graph construction
    └── logger.py          # Logging configuration
```
