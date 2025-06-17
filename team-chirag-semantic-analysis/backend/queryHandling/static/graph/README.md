# DSA Knowledge Graph System

A comprehensive system for scraping, processing, and visualizing Data Structures and Algorithms (DSA) topics and their relationships.

## Overview

This project consists of two main components:

1. **Python Scraper**: Collects data about DSA topics from various educational resources.
2. **TypeScript Frontend**: Visualizes the DSA knowledge graph in an interactive web application.

## Features

- Scrapes information from multiple sources:
  - GeeksForGeeks
  - LeetCode
  - NPTEL
  - W3Schools
  - YouTube
- Processes and organizes data into a knowledge graph
- Interactive visualization with filtering and search
- Detailed view of topics and subtopics
- Resource links to educational videos and articles

## Project Structure

```
dsa-scraper/
├── python-scraper/        # Python backend for data collection
│   ├── cli.py             # Command-line interface
│   ├── main.py            # Main orchestration module
│   ├── requirements.txt   # Python dependencies
│   ├── scrapers/          # Web scraping modules
│   └── utils/             # Utility modules
├── typescript-frontend/   # TypeScript/React frontend
│   ├── src/               # Source code
│   ├── public/            # Static assets
│   └── package.json       # Node.js dependencies
└── run.py                 # Script to run both components
```

## Installation

### Prerequisites

- Python 3.7+
- Node.js 16+
- npm 8+

### Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/dsa-scraper.git
   cd dsa-scraper
   ```

2. Install Python dependencies:
   ```
   cd python-scraper
   pip install -r requirements.txt
   cd ..
   ```

3. Install Node.js dependencies:
   ```
   cd typescript-frontend
   npm install
   cd ..
   ```

## Usage

### Running the Entire System

Use the provided script to run both the scraper and frontend:

```bash
python run.py [--topics TOPIC1 TOPIC2 ...] [--scrape-only] [--frontend-only] [--verbose]
```

Options:
- `--topics`: Specific DSA topics to scrape (default: all topics)
- `--scrape-only`: Only run the scraper without starting the frontend
- `--frontend-only`: Only run the frontend without running the scraper
- `--verbose`: Enable verbose logging

### Running Components Separately

#### Python Scraper

```bash
cd python-scraper
python cli.py [--topics TOPIC1 TOPIC2 ...] [--output OUTPUT_FILE] [--verbose]
```

#### TypeScript Frontend

```bash
cd typescript-frontend
npm run dev
```

## Data Format

The knowledge graph is represented as a JSON structure:

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
        "videos": [...],
        "articles": [...]
      },
      "subconcepts": [...]
    }
  ]
}
```

## License

[MIT License](LICENSE)

## Acknowledgements

- Data sources: GeeksForGeeks, LeetCode, NPTEL, W3Schools, YouTube
- Visualization libraries: D3.js, React Force Graph
