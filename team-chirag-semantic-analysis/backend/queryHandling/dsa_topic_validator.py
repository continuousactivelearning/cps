#!/usr/bin/env python3
"""
DSA Topic Validator - NLP-based validation for DSA-related queries

This module validates whether user queries are related to Data Structures and Algorithms (DSA) topics.
It uses keyword matching, topic classification, and context analysis to determine relevance.
"""

import re
import json
from typing import List, Dict, Set, Tuple, Optional
from pathlib import Path
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
from sentence_transformers import SentenceTransformer
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

# Download required NLTK data
try:
    nltk.download('punkt', quiet=True)
    nltk.download('stopwords', quiet=True)
    nltk.download('wordnet', quiet=True)
    nltk.download('averaged_perceptron_tagger', quiet=True)
except:
    print("Warning: Could not download NLTK data. Some features may not work.")

class DSATopicValidator:
    def __init__(self):
        """Initialize the DSA topic validator."""
        self.lemmatizer = WordNetLemmatizer()
        self.stop_words = set(stopwords.words('english'))
        
        # Initialize sentence transformer for semantic similarity
        try:
            self.sentence_model = SentenceTransformer('all-MiniLM-L6-v2')
        except:
            print("Warning: Could not load sentence transformer. Semantic similarity disabled.")
            self.sentence_model = None
        
        # DSA-related keywords organized by categories
        self.dsa_keywords = {
            'data_structures': {
                'arrays', 'array', 'list', 'linked list', 'linkedlist', 'stack', 'queue', 'deque',
                'tree', 'binary tree', 'bst', 'binary search tree', 'heap', 'priority queue',
                'hash table', 'hashtable', 'hashmap', 'dictionary', 'set', 'graph', 'trie',
                'prefix tree', 'segment tree', 'fenwick tree', 'binary indexed tree', 'union find',
                'disjoint set', 'avl tree', 'red black tree', 'b-tree', 'sparse table'
            },
            'algorithms': {
                'sorting', 'searching', 'binary search', 'linear search', 'merge sort', 'quick sort',
                'heap sort', 'bubble sort', 'insertion sort', 'selection sort', 'radix sort',
                'counting sort', 'bucket sort', 'dfs', 'bfs', 'depth first search', 'breadth first search',
                'dijkstra', 'bellman ford', 'floyd warshall', 'kruskal', 'prim', 'topological sort',
                'dynamic programming', 'dp', 'greedy', 'divide and conquer', 'backtracking',
                'recursion', 'memoization', 'tabulation'
            },
            'complexity': {
                'time complexity', 'space complexity', 'big o', 'big omega', 'big theta',
                'asymptotic notation', 'o(n)', 'o(log n)', 'o(n log n)', 'o(n^2)', 'o(1)',
                'constant time', 'linear time', 'logarithmic time', 'quadratic time',
                'exponential time', 'polynomial time', 'np complete', 'np hard'
            },
            'techniques': {
                'sliding window', 'two pointers', 'fast slow pointers', 'cyclic sort',
                'merge intervals', 'in place reversal', 'tree traversal', 'graph traversal',
                'bit manipulation', 'mathematical', 'string manipulation', 'pattern matching',
                'kmp', 'rabin karp', 'z algorithm', 'manacher', 'suffix array', 'lcs',
                'longest common subsequence', 'edit distance', 'knapsack', 'coin change',
                'fibonacci', 'factorial', 'permutation', 'combination', 'subset'
            },
            'problem_types': {
                'array problems', 'string problems', 'tree problems', 'graph problems',
                'matrix problems', 'linked list problems', 'stack problems', 'queue problems',
                'heap problems', 'hash problems', 'sorting problems', 'searching problems',
                'dp problems', 'greedy problems', 'backtracking problems', 'recursion problems',
                'mathematical problems', 'bit manipulation problems', 'two sum', 'three sum',
                'palindrome', 'anagram', 'substring', 'subarray', 'subsequence'
            }
        }
        
        # Flatten all keywords for quick lookup
        self.all_keywords = set()
        for category in self.dsa_keywords.values():
            self.all_keywords.update(category)
        
        # Common DSA topics for semantic similarity
        self.dsa_topics = [
            "arrays and dynamic arrays",
            "linked lists and pointers",
            "stacks and queues",
            "trees and binary search trees",
            "heaps and priority queues",
            "hash tables and dictionaries",
            "graphs and graph algorithms",
            "sorting and searching algorithms",
            "dynamic programming",
            "greedy algorithms",
            "divide and conquer",
            "backtracking and recursion",
            "bit manipulation",
            "string algorithms",
            "mathematical algorithms",
            "time and space complexity analysis"
        ]
        
        # Precompute embeddings for DSA topics
        if self.sentence_model:
            self.dsa_topic_embeddings = self.sentence_model.encode(self.dsa_topics)
        else:
            self.dsa_topic_embeddings = None
        
        # Non-DSA keywords that should be filtered out
        self.non_dsa_keywords = {
            'web development', 'frontend', 'backend', 'database', 'sql', 'html', 'css',
            'javascript', 'python', 'java', 'c++', 'programming language', 'framework',
            'library', 'api', 'rest', 'json', 'xml', 'http', 'server', 'client',
            'machine learning', 'ai', 'artificial intelligence', 'neural network',
            'deep learning', 'nlp', 'computer vision', 'data science', 'statistics',
            'weather', 'news', 'sports', 'entertainment', 'cooking', 'travel',
            'health', 'fitness', 'finance', 'business', 'politics', 'history',
            'geography', 'science', 'physics', 'chemistry', 'biology', 'math',
            'literature', 'art', 'music', 'movie', 'book', 'game'
        }
    
    def preprocess_text(self, text: str) -> List[str]:
        """Preprocess text by tokenizing, removing stopwords, and lemmatizing."""
        # Convert to lowercase
        text = text.lower()
        
        # Remove special characters but keep important ones for DSA
        text = re.sub(r'[^\w\s\-\(\)]', ' ', text)
        
        # Tokenize
        tokens = word_tokenize(text)
        
        # Remove stopwords and lemmatize
        processed_tokens = []
        for token in tokens:
            if token not in self.stop_words and len(token) > 1:
                lemmatized = self.lemmatizer.lemmatize(token)
                processed_tokens.append(lemmatized)
        
        return processed_tokens
    
    def extract_phrases(self, text: str) -> List[str]:
        """Extract important phrases from text."""
        # Convert to lowercase
        text = text.lower()
        
        # Extract multi-word DSA terms
        phrases = []
        for keyword in self.all_keywords:
            if ' ' in keyword and keyword in text:
                phrases.append(keyword)
        
        return phrases
    
    def keyword_match_score(self, query: str) -> Tuple[float, List[str], str]:
        """Calculate keyword matching score and return matched keywords."""
        query_lower = query.lower()
        tokens = self.preprocess_text(query)
        phrases = self.extract_phrases(query)
        
        matched_keywords = []
        category_scores = {category: 0 for category in self.dsa_keywords.keys()}
        
        # Check for phrase matches (higher weight)
        for phrase in phrases:
            matched_keywords.append(phrase)
            for category, keywords in self.dsa_keywords.items():
                if phrase in keywords:
                    category_scores[category] += 2
        
        # Check for individual token matches
        for token in tokens:
            if token in self.all_keywords:
                matched_keywords.append(token)
                for category, keywords in self.dsa_keywords.items():
                    if token in keywords:
                        category_scores[category] += 1
        
        # Calculate overall score
        total_matches = sum(category_scores.values())
        total_tokens = len(tokens) + len(phrases)
        
        if total_tokens == 0:
            keyword_score = 0.0
        else:
            keyword_score = min(total_matches / total_tokens, 1.0)
        
        # Determine primary category
        primary_category = max(category_scores, key=category_scores.get) if total_matches > 0 else "unknown"
        
        return keyword_score, matched_keywords, primary_category
    
    def semantic_similarity_score(self, query: str) -> float:
        """Calculate semantic similarity with DSA topics."""
        if not self.sentence_model or self.dsa_topic_embeddings is None:
            return 0.0
        
        try:
            # Encode the query
            query_embedding = self.sentence_model.encode([query])
            
            # Calculate cosine similarity with DSA topics
            similarities = cosine_similarity(query_embedding, self.dsa_topic_embeddings)[0]
            
            # Return the maximum similarity score
            return float(np.max(similarities))
        except Exception as e:
            print(f"Error in semantic similarity: {e}")
            return 0.0
    
    def check_non_dsa_keywords(self, query: str) -> bool:
        """Check if query contains non-DSA keywords."""
        query_lower = query.lower()
        
        for keyword in self.non_dsa_keywords:
            if keyword in query_lower:
                return True
        
        return False
    
    def validate_dsa_query(self, query: str, threshold: float = 0.3) -> Dict:
        """
        Validate if a query is related to DSA topics.
        
        Args:
            query: The user query to validate
            threshold: Minimum score threshold for DSA relevance
            
        Returns:
            Dictionary with validation results
        """
        if not query or len(query.strip()) < 3:
            return {
                'is_dsa_related': False,
                'confidence': 0.0,
                'reason': 'Query too short',
                'matched_keywords': [],
                'primary_category': 'unknown',
                'suggestion': 'Please provide a more detailed question about data structures or algorithms.'
            }
        
        # Check for non-DSA keywords
        has_non_dsa = self.check_non_dsa_keywords(query)
        
        # Calculate keyword matching score
        keyword_score, matched_keywords, primary_category = self.keyword_match_score(query)
        
        # Calculate semantic similarity score
        semantic_score = self.semantic_similarity_score(query)
        
        # Combine scores (weighted average)
        combined_score = (keyword_score * 0.7) + (semantic_score * 0.3)
        
        # Adjust score based on non-DSA keywords
        if has_non_dsa and combined_score < 0.6:
            combined_score *= 0.5
        
        # Determine if query is DSA-related
        is_dsa_related = combined_score >= threshold and not (has_non_dsa and combined_score < 0.6)
        
        # Generate appropriate response
        if is_dsa_related:
            reason = f"Query matches DSA topics with {combined_score:.2f} confidence"
            suggestion = ""
        else:
            reason = f"Query score {combined_score:.2f} below threshold {threshold}"
            suggestion = self._generate_dsa_suggestion(query, matched_keywords, primary_category)
        
        return {
            'is_dsa_related': is_dsa_related,
            'confidence': combined_score,
            'reason': reason,
            'matched_keywords': matched_keywords,
            'primary_category': primary_category,
            'suggestion': suggestion,
            'keyword_score': keyword_score,
            'semantic_score': semantic_score
        }
    
    def _generate_dsa_suggestion(self, query: str, matched_keywords: List[str], primary_category: str) -> str:
        """Generate a helpful suggestion for non-DSA queries."""
        base_message = "I can only help with Data Structures and Algorithms (DSA) related questions. "
        
        if matched_keywords:
            return (f"{base_message}I noticed you mentioned '{', '.join(matched_keywords[:3])}' "
                   f"which relates to DSA. Please rephrase your question to focus on DSA concepts like "
                   f"algorithms, data structures, time/space complexity, or problem-solving techniques.")
        else:
            return (f"{base_message}Please ask questions about topics like:\n"
                   f"• Data Structures (arrays, linked lists, trees, graphs, stacks, queues)\n"
                   f"• Algorithms (sorting, searching, dynamic programming, greedy algorithms)\n"
                   f"• Problem-solving techniques and complexity analysis\n"
                   f"• Coding interview preparation and DSA concepts")
    
    def get_dsa_topics_by_category(self, category: str = None) -> Dict:
        """Get DSA topics organized by category."""
        if category and category in self.dsa_keywords:
            return {category: self.dsa_keywords[category]}
        return self.dsa_keywords
    
    def suggest_related_topics(self, query: str, max_suggestions: int = 5) -> List[str]:
        """Suggest related DSA topics based on the query."""
        if not self.sentence_model or self.dsa_topic_embeddings is None:
            return []
        
        try:
            query_embedding = self.sentence_model.encode([query])
            similarities = cosine_similarity(query_embedding, self.dsa_topic_embeddings)[0]
            
            # Get top similar topics
            top_indices = np.argsort(similarities)[-max_suggestions:][::-1]
            suggestions = [self.dsa_topics[i] for i in top_indices if similarities[i] > 0.3]
            
            return suggestions
        except Exception as e:
            print(f"Error in topic suggestion: {e}")
            return []

# Example usage and testing
if __name__ == "__main__":
    validator = DSATopicValidator()
    
    # Test queries
    test_queries = [
        "What is binary search algorithm?",
        "How to implement a stack?",
        "Explain dynamic programming",
        "What's the weather like today?",
        "How to cook pasta?",
        "Time complexity of merge sort",
        "Best way to traverse a binary tree",
        "Tell me about web development",
        "Difference between array and linked list",
        "How to solve two sum problem?"
    ]
    
    print("DSA Topic Validation Results:")
    print("=" * 50)
    
    for query in test_queries:
        result = validator.validate_dsa_query(query)
        print(f"\nQuery: {query}")
        print(f"DSA Related: {result['is_dsa_related']}")
        print(f"Confidence: {result['confidence']:.3f}")
        print(f"Keywords: {result['matched_keywords']}")
        print(f"Category: {result['primary_category']}")
        if result['suggestion']:
            print(f"Suggestion: {result['suggestion']}")
        print("-" * 30)
