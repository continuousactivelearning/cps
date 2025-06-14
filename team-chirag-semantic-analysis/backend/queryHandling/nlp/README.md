# Question Analyzer for NLP

This module provides robust analysis of user questions, including those with mixed languages (e.g., Hinglish), improper grammar, and technical/programming terms.

## Features

- Advanced language detection with Hinglish support
- Technical term detection for Data Structures and Algorithms concepts
- Fuzzy matching for misspelled technical terms
- Keyword extraction and ranking by importance
- Entity recognition
- Question type and intent classification

## Installation

Install the required dependencies:

```bash
pip install -r requirements.txt
```

## Usage

```python
from question_analyzer import analyze_question, interpret_analysis

# Analyze a question
question = "How to find the length of an array in python"
analysis = analyze_question(question)

# Interpret the analysis
understanding = interpret_analysis(analysis)
print(understanding)
```

## Requirements

See `requirements.txt` for the complete list of dependencies.
