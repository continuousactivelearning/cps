import spacy
import nltk
from nltk.tokenize import word_tokenize, sent_tokenize
from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords
import langdetect
from langdetect import DetectorFactory
from transformers import pipeline, AutoTokenizer, AutoModelForSequenceClassification
import re
import json
import os

# Make language detection deterministic
DetectorFactory.seed = 0

# Download necessary NLTK data
nltk.download('punkt', quiet=True)
nltk.download('wordnet', quiet=True)
nltk.download('stopwords', quiet=True)
nltk.download('averaged_perceptron_tagger', quiet=True)

# Load SpaCy models
try:
    nlp_en = spacy.load("en_core_web_md")
    print("Loaded English SpaCy model")
except:
    print("English SpaCy model not found. Installing...")
    os.system("python -m spacy download en_core_web_md")
    nlp_en = spacy.load("en_core_web_md")

# Initialize multilingual NER pipeline
try:
    ner_pipeline = pipeline("ner", model="xlm-roberta-large-finetuned-conll03-english")
    print("Loaded multilingual NER model")
except:
    print("Using SpaCy for NER instead")

# Initialize text classification pipeline for intent detection
try:
    intent_classifier = pipeline("text-classification", model="facebook/bart-large-mnli")
    print("Loaded intent classification model")
except:
    print("Intent classification model not available")

# Initialize the lemmatizer
lemmatizer = WordNetLemmatizer()

# Common languages stopwords (expanding as needed)
stopwords_dict = {
    'en': set(stopwords.words('english')),
    'es': set(['el', 'la', 'los', 'las', 'un', 'una', 'y', 'en', 'de', 'que', 'a', 'por', 'con']),
    'fr': set(['le', 'la', 'les', 'un', 'une', 'et', 'en', 'de', 'que', 'à', 'pour', 'avec']),
    'hi': set(['का', 'के', 'एक', 'में', 'की', 'है', 'यह', 'और', 'से', 'हैं', 'को', 'पर', 'इस']),
    'zh': set(['的', '了', '和', '是', '在', '我', '有', '不', '这', '为', '也', '你'])
}

# Romanized Hindi common words and their translations
romanized_hindi_dict = {
    # Question words
    'kya': 'what',
    'kaun': 'who',
    'kab': 'when',
    'kahan': 'where',
    'kyun': 'why',
    'kaise': 'how',
    'kitna': 'how much',
    'kitne': 'how many',
    
    # Common verbs
    'hai': 'is',
    'hain': 'are',
    'tha': 'was',
    'the': 'were',
    'hoga': 'will be',
    'karna': 'to do',
    'kare': 'do',
    'karein': 'do',
    'kiya': 'did',
    'karo': 'do',
    'kar': 'do',
    'karte': 'doing',
    'ho': 'be',
    
    # Prepositions
    'ka': 'of',
    'ke': 'of',
    'ki': 'of',
    'ko': 'to',
    'me': 'in',
    'mein': 'in',
    'par': 'on',
    'se': 'from',
    
    # Pronouns
    'main': 'I',
    'mai': 'I',
    'mujhe': 'me',
    'mera': 'my',
    'mere': 'my',
    'hum': 'we',
    'hamara': 'our',
    'aap': 'you',
    'tum': 'you',
    'tu': 'you',
    'aapka': 'your',
    'tumhara': 'your',
    'yeh': 'this',
    'ye': 'this',
    'woh': 'that',
    'wo': 'that',
    
    # Conjunctions
    'aur': 'and',
    'ya': 'or',
    'lekin': 'but',
    'phir': 'then',
    'ki': 'that',
    
    # Others
    'bhi': 'also',
    'hi': 'only',
    'nahi': 'not',
    'nahin': 'not',
    'na': 'no',
    'haan': 'yes',
    'bahut': 'very',
    'thoda': 'little',
    'zyada': 'more',
    'kam': 'less',
    'kuch': 'some',
    'sab': 'all',
    'sirf': 'only',
    'bas': 'enough',
    'accha': 'good',
    'bura': 'bad',
    'bata': 'tell',
    'batao': 'tell',
    'samajh': 'understand',
    'samjha': 'explained',
    'samjho': 'understand',
    'jana': 'go',
    'jao': 'go',
    'dekho': 'see',
    'dekhna': 'see',
    'find': 'find',
    'kre': 'do',
    'krein': 'do',
    'sakte': 'can',
    'sakta': 'can',
    'sakti': 'can',
    'padhai': 'study',
    'padhna': 'read'
}

# Technical terms dictionary - comprehensive list of DSA and programming concepts
technical_terms = {
    # Data Structures - Basic
    'array': {'definition': 'A data structure consisting of a collection of elements', 'category': 'data structure'},
    'arrays': {'definition': 'A data structure consisting of a collection of elements', 'category': 'data structure'},
    'string': {'definition': 'A sequence of characters', 'category': 'data type'},
    'strings': {'definition': 'A sequence of characters', 'category': 'data type'},
    'list': {'definition': 'An ordered collection of elements', 'category': 'data structure'},
    'lists': {'definition': 'An ordered collection of elements', 'category': 'data structure'},
    'linked list': {'definition': 'A linear data structure where elements are stored in nodes', 'category': 'data structure'},
    'linked lists': {'definition': 'A linear data structure where elements are stored in nodes', 'category': 'data structure'},
    'singly linked list': {'definition': 'A linked list with nodes pointing only to the next node', 'category': 'data structure'},
    'doubly linked list': {'definition': 'A linked list with nodes pointing to both next and previous nodes', 'category': 'data structure'},
    'circular linked list': {'definition': 'A linked list where the last node points back to the first node', 'category': 'data structure'},
    'stack': {'definition': 'A LIFO (Last In First Out) data structure', 'category': 'data structure'},
    'stacks': {'definition': 'A LIFO (Last In First Out) data structure', 'category': 'data structure'},
    'queue': {'definition': 'A FIFO (First In First Out) data structure', 'category': 'data structure'},
    'queues': {'definition': 'A FIFO (First In First Out) data structure', 'category': 'data structure'},
    'deque': {'definition': 'Double-ended queue data structure', 'category': 'data structure'},
    'priority queue': {'definition': 'A queue where elements have priorities', 'category': 'data structure'},
    
    # Data Structures - Advanced
    'heap': {'definition': 'A specialized tree-based data structure', 'category': 'data structure'},
    'binary heap': {'definition': 'A complete binary tree where parent nodes compare to child nodes', 'category': 'data structure'},
    'min heap': {'definition': 'A heap where the parent node is less than or equal to its children', 'category': 'data structure'},
    'max heap': {'definition': 'A heap where the parent node is greater than or equal to its children', 'category': 'data structure'},
    'fibonacci heap': {'definition': 'A heap data structure with better amortized complexity', 'category': 'data structure'},
    'tree': {'definition': 'A hierarchical data structure with a root and child nodes', 'category': 'data structure'},
    'trees': {'definition': 'A hierarchical data structure with a root and child nodes', 'category': 'data structure'},
    'binary tree': {'definition': 'A tree where each node has at most two children', 'category': 'data structure'},
    'binary search tree': {'definition': 'A binary tree with ordered nodes', 'category': 'data structure'},
    'bst': {'definition': 'A binary tree with ordered nodes', 'category': 'data structure'},
    'avl tree': {'definition': 'Self-balancing binary search tree', 'category': 'data structure'},
    'red black tree': {'definition': 'Self-balancing binary search tree', 'category': 'data structure'},
    'b-tree': {'definition': 'A self-balancing tree data structure', 'category': 'data structure'},
    'b+ tree': {'definition': 'A b-tree variant optimized for storage systems', 'category': 'data structure'},
    'segment tree': {'definition': 'A tree for storing intervals with efficient query operations', 'category': 'data structure'},
    'fenwick tree': {'definition': 'A data structure for prefix sums with efficient updates', 'category': 'data structure'},
    'bit': {'definition': 'Binary Indexed Tree for efficient range queries', 'category': 'data structure'},
    'trie': {'definition': 'A tree-like data structure for storing strings', 'category': 'data structure'},
    'suffix tree': {'definition': 'A compressed trie containing all suffixes of a string', 'category': 'data structure'},
    'suffix array': {'definition': 'A sorted array of all suffixes of a string', 'category': 'data structure'},
    'sparse table': {'definition': 'A data structure for efficient range queries', 'category': 'data structure'},
    'disjoint set': {'definition': 'A data structure that tracks elements partitioned into non-overlapping subsets', 'category': 'data structure'},
    'union find': {'definition': 'A data structure for efficiently tracking disjoint sets', 'category': 'data structure'},
    
    # Graphs
    'graph': {'definition': 'A collection of nodes connected by edges', 'category': 'data structure'},
    'graphs': {'definition': 'A collection of nodes connected by edges', 'category': 'data structure'},
    'directed graph': {'definition': 'A graph where edges have direction', 'category': 'data structure'},
    'undirected graph': {'definition': 'A graph where edges have no direction', 'category': 'data structure'},
    'weighted graph': {'definition': 'A graph where edges have weights', 'category': 'data structure'},
    'dag': {'definition': 'Directed Acyclic Graph', 'category': 'data structure'},
    'bipartite graph': {'definition': 'A graph whose vertices can be divided into two disjoint sets', 'category': 'data structure'},
    'complete graph': {'definition': 'A graph where each vertex is connected to all other vertices', 'category': 'data structure'},
    'adjacency matrix': {'definition': 'A 2D array representation of a graph', 'category': 'data structure'},
    'adjacency list': {'definition': 'A collection of lists representing a graph', 'category': 'data structure'},
    'edge list': {'definition': 'A list of edges in a graph', 'category': 'data structure'},
    
    # Hash-based Structures
    'hash table': {'definition': 'A data structure that maps keys to values', 'category': 'data structure'},
    'hash map': {'definition': 'A data structure that maps keys to values', 'category': 'data structure'},
    'hash set': {'definition': 'A data structure that stores unique elements', 'category': 'data structure'},
    'hash function': {'definition': 'A function that converts keys to array indices', 'category': 'algorithm'},
    'collision': {'definition': 'When two keys hash to the same index', 'category': 'data structure'},
    'chaining': {'definition': 'A collision resolution technique using linked lists', 'category': 'data structure'},
    'open addressing': {'definition': 'A collision resolution technique using probing', 'category': 'data structure'},
    'linear probing': {'definition': 'A collision resolution technique that checks consecutive slots', 'category': 'data structure'},
    'quadratic probing': {'definition': 'A collision resolution technique using quadratic function', 'category': 'data structure'},
    'double hashing': {'definition': 'A collision resolution technique using two hash functions', 'category': 'data structure'},
    
    # Basic Data Types
    'dictionary': {'definition': 'A collection of key-value pairs', 'category': 'data structure'},
    'dict': {'definition': 'A collection of key-value pairs', 'category': 'data structure'},
    'set': {'definition': 'A collection of distinct elements', 'category': 'data structure'},
    'sets': {'definition': 'A collection of distinct elements', 'category': 'data structure'},
    'tuple': {'definition': 'An immutable ordered sequence of elements', 'category': 'data structure'},
    'tuples': {'definition': 'An immutable ordered sequence of elements', 'category': 'data structure'},
    'matrix': {'definition': 'A 2D array of numbers', 'category': 'data structure'},
    'matrices': {'definition': 'A 2D array of numbers', 'category': 'data structure'},
    
    # Advanced Data Structures
    'bloom filter': {'definition': 'A space-efficient probabilistic data structure', 'category': 'data structure'},
    'skip list': {'definition': 'A data structure with layers of linked lists', 'category': 'data structure'},
    'lru cache': {'definition': 'Least Recently Used cache for fast access to data', 'category': 'data structure'},
    'lfu cache': {'definition': 'Least Frequently Used cache for fast access to data', 'category': 'data structure'},
    'van emde boas tree': {'definition': 'A tree data structure with fast integer operations', 'category': 'data structure'},
    'treap': {'definition': 'A binary search tree with heap-ordered priorities', 'category': 'data structure'},
    'splay tree': {'definition': 'A self-adjusting binary search tree', 'category': 'data structure'},
    
    # Algorithms - General
    'algorithm': {'definition': 'A step-by-step procedure for calculations', 'category': 'algorithm'},
    'algorithms': {'definition': 'Step-by-step procedures for calculations', 'category': 'algorithm'},
    'sorting': {'definition': 'Arranging elements in a specific order', 'category': 'algorithm'},
    'searching': {'definition': 'Finding elements in a data structure', 'category': 'algorithm'},
    'recursion': {'definition': 'A method where the solution depends on solutions to smaller instances', 'category': 'algorithm'},
    'iteration': {'definition': 'Repeating a process multiple times', 'category': 'algorithm'},
    
    # Algorithm Paradigms
    'dynamic programming': {'definition': 'Breaking down problems into simpler subproblems', 'category': 'algorithm'},
    'dp': {'definition': 'Breaking down problems into simpler subproblems', 'category': 'algorithm'},
    'memoization': {'definition': 'Storing results of expensive function calls', 'category': 'algorithm'},
    'tabulation': {'definition': 'Building solution bottom-up by filling a table', 'category': 'algorithm'},
    'greedy': {'definition': 'Making locally optimal choices at each stage', 'category': 'algorithm'},
    'divide and conquer': {'definition': 'Breaking a problem into subproblems, solving them, and combining results', 'category': 'algorithm'},
    'backtracking': {'definition': 'A technique that tries all possibilities and backtracks when needed', 'category': 'algorithm'},
    'branch and bound': {'definition': 'An optimization algorithm that explores branches of a tree', 'category': 'algorithm'},
    'brute force': {'definition': 'Trying all possible solutions', 'category': 'algorithm'},
    'heuristic': {'definition': 'A problem-solving approach using practical methods', 'category': 'algorithm'},
    
    # Search Algorithms
    'linear search': {'definition': 'A simple search algorithm that checks each element', 'category': 'algorithm'},
    'binary search': {'definition': 'A search algorithm that divides the search interval in half', 'category': 'algorithm'},
    'jump search': {'definition': 'A search algorithm that jumps ahead by fixed steps', 'category': 'algorithm'},
    'interpolation search': {'definition': 'A search algorithm that estimates position based on values', 'category': 'algorithm'},
    'exponential search': {'definition': 'A search algorithm that doubles the search range each time', 'category': 'algorithm'},
    
    # Sorting Algorithms
    'bubble sort': {'definition': 'A simple sorting algorithm that repeatedly steps through the list', 'category': 'algorithm'},
    'insertion sort': {'definition': 'A sorting algorithm that builds a sorted array one item at a time', 'category': 'algorithm'},
    'selection sort': {'definition': 'A sorting algorithm that selects the smallest element', 'category': 'algorithm'},
    'merge sort': {'definition': 'A divide and conquer sorting algorithm', 'category': 'algorithm'},
    'quick sort': {'definition': 'A divide and conquer sorting algorithm', 'category': 'algorithm'},
    'heap sort': {'definition': 'A comparison-based sorting algorithm using a heap', 'category': 'algorithm'},
    'counting sort': {'definition': 'A sorting algorithm that works by counting objects', 'category': 'algorithm'},
    'radix sort': {'definition': 'A non-comparative sorting algorithm', 'category': 'algorithm'},
    'bucket sort': {'definition': 'A sorting algorithm that distributes elements into buckets', 'category': 'algorithm'},
    'shell sort': {'definition': 'An in-place comparison sort that generalizes insertion sort', 'category': 'algorithm'},
    'tim sort': {'definition': 'A hybrid sorting algorithm derived from merge sort and insertion sort', 'category': 'algorithm'},
    'topological sort': {'definition': 'A linear ordering of vertices in a directed graph', 'category': 'algorithm'},
    
    # Graph Algorithms
    'bfs': {'definition': 'Breadth-First Search algorithm for traversing graphs', 'category': 'algorithm'},
    'breadth first search': {'definition': 'An algorithm for traversing graphs level by level', 'category': 'algorithm'},
    'dfs': {'definition': 'Depth-First Search algorithm for traversing graphs', 'category': 'algorithm'},
    'depth first search': {'definition': 'An algorithm for traversing graphs by exploring as far as possible', 'category': 'algorithm'},
    'dijkstra': {'definition': 'An algorithm for finding shortest paths in a graph', 'category': 'algorithm'},
    'dijkstra\'s algorithm': {'definition': 'An algorithm for finding shortest paths in a graph', 'category': 'algorithm'},
    'bellman ford': {'definition': 'An algorithm for finding shortest paths in a graph', 'category': 'algorithm'},
    'bellman-ford algorithm': {'definition': 'An algorithm for finding shortest paths with negative weights', 'category': 'algorithm'},
    'floyd warshall': {'definition': 'An algorithm for finding shortest paths in a graph', 'category': 'algorithm'},
    'floyd-warshall algorithm': {'definition': 'An algorithm for finding all-pairs shortest paths', 'category': 'algorithm'},
    'kruskal': {'definition': 'An algorithm for finding minimum spanning tree', 'category': 'algorithm'},
    'kruskal\'s algorithm': {'definition': 'A greedy algorithm for minimum spanning tree', 'category': 'algorithm'},
    'prim': {'definition': 'An algorithm for finding minimum spanning tree', 'category': 'algorithm'},
    'prim\'s algorithm': {'definition': 'A greedy algorithm for minimum spanning tree', 'category': 'algorithm'},
    'a*': {'definition': 'A pathfinding algorithm', 'category': 'algorithm'},
    'a* algorithm': {'definition': 'A best-first search algorithm for pathfinding', 'category': 'algorithm'},
    
    # String Algorithms
    'kmp': {'definition': 'Knuth-Morris-Pratt string matching algorithm', 'category': 'algorithm'},
    'knuth morris pratt': {'definition': 'An efficient string matching algorithm', 'category': 'algorithm'},
    'rabin karp': {'definition': 'A string-searching algorithm using hashing', 'category': 'algorithm'},
    'boyer moore': {'definition': 'An efficient string searching algorithm', 'category': 'algorithm'},
    'z algorithm': {'definition': 'A linear time string matching algorithm', 'category': 'algorithm'},
    'aho corasick': {'definition': 'An algorithm for string matching with many patterns', 'category': 'algorithm'},
    'levenshtein distance': {'definition': 'A metric for measuring string difference', 'category': 'algorithm'},
    'edit distance': {'definition': 'A way of quantifying how dissimilar two strings are', 'category': 'algorithm'},
    'longest common subsequence': {'definition': 'The longest subsequence common to all sequences', 'category': 'algorithm'},
    'lcs': {'definition': 'Longest Common Subsequence algorithm', 'category': 'algorithm'},
    'manacher\'s algorithm': {'definition': 'An algorithm for finding all palindromic substrings', 'category': 'algorithm'},
    
    # Flow and Matching Algorithms
    'ford fulkerson': {'definition': 'An algorithm for computing maximum flow in a network', 'category': 'algorithm'},
    'edmonds karp': {'definition': 'An implementation of the Ford-Fulkerson method', 'category': 'algorithm'},
    'dinic\'s algorithm': {'definition': 'A strongly polynomial algorithm for maximum flow', 'category': 'algorithm'},
    'push relabel': {'definition': 'An algorithm for computing maximum flow', 'category': 'algorithm'},
    'bipartite matching': {'definition': 'A matching in a bipartite graph', 'category': 'algorithm'},
    'hopcroft karp': {'definition': 'An algorithm for finding maximum matching in bipartite graphs', 'category': 'algorithm'},
    'hungarian algorithm': {'definition': 'An algorithm for the assignment problem', 'category': 'algorithm'},
    
    # Computational Geometry
    'convex hull': {'definition': 'The smallest convex set containing a set of points', 'category': 'algorithm'},
    'graham scan': {'definition': 'An algorithm for computing the convex hull', 'category': 'algorithm'},
    'jarvis march': {'definition': 'An algorithm for computing the convex hull', 'category': 'algorithm'},
    'line intersection': {'definition': 'Determining if two lines intersect', 'category': 'algorithm'},
    'point in polygon': {'definition': 'Determining if a point is inside a polygon', 'category': 'algorithm'},
    'closest pair of points': {'definition': 'Finding the closest pair of points in a set', 'category': 'algorithm'},
    
    # Number Theory Algorithms
    'prime number': {'definition': 'A natural number greater than 1 with no positive divisors other than 1 and itself', 'category': 'algorithm'},
    'sieve of eratosthenes': {'definition': 'An algorithm for finding all primes up to a specified limit', 'category': 'algorithm'},
    'gcd': {'definition': 'Greatest Common Divisor algorithm', 'category': 'algorithm'},
    'lcm': {'definition': 'Least Common Multiple algorithm', 'category': 'algorithm'},
    'modular exponentiation': {'definition': 'Computing power in modular arithmetic', 'category': 'algorithm'},
    'extended euclidean algorithm': {'definition': 'An extension of Euclidean algorithm to compute Bézout coefficients', 'category': 'algorithm'},
    'primality test': {'definition': 'Testing if a number is prime', 'category': 'algorithm'},
    'miller rabin': {'definition': 'A probabilistic primality test', 'category': 'algorithm'},
    
    # Properties and operations
    'size': {'definition': 'The number of elements in a data structure', 'category': 'property'},
    'sizes': {'definition': 'The number of elements in a data structure', 'category': 'property'},
    'length': {'definition': 'The number of elements or characters', 'category': 'property'},
    'lengths': {'definition': 'The number of elements or characters', 'category': 'property'},
    'index': {'definition': 'A position within a data structure', 'category': 'property'},
    'indices': {'definition': 'Positions within a data structure', 'category': 'property'},
    'capacity': {'definition': 'Maximum number of elements a data structure can hold', 'category': 'property'},
    
    # Complexity Analysis
    'complexity': {'definition': 'Measure of the resources required by an algorithm', 'category': 'property'},
    'time complexity': {'definition': 'Measure of the execution time required by an algorithm', 'category': 'property'},
    'space complexity': {'definition': 'Measure of the memory required by an algorithm', 'category': 'property'},
    'big o': {'definition': 'Notation for describing algorithm complexity', 'category': 'property'},
    'big-o': {'definition': 'Notation for describing algorithm complexity', 'category': 'property'},
    'big omega': {'definition': 'Lower bound notation for algorithm complexity', 'category': 'property'},
    'big theta': {'definition': 'Tight bound notation for algorithm complexity', 'category': 'property'},
    'amortized analysis': {'definition': 'Analysis of algorithms with expensive operations spread over time', 'category': 'property'},
    'worst case': {'definition': 'Analysis of the maximum time/space an algorithm can take', 'category': 'property'},
    'average case': {'definition': 'Analysis of the expected time/space an algorithm takes', 'category': 'property'},
    'best case': {'definition': 'Analysis of the minimum time/space an algorithm can take', 'category': 'property'},
    'constant time': {'definition': 'O(1) time complexity', 'category': 'property'},
    'logarithmic': {'definition': 'O(log n) time or space complexity', 'category': 'property'},
    'linear': {'definition': 'O(n) time or space complexity', 'category': 'property'},
    'linearithmic': {'definition': 'O(n log n) time or space complexity', 'category': 'property'},
    'quadratic': {'definition': 'O(n²) time or space complexity', 'category': 'property'},
    'cubic': {'definition': 'O(n³) time or space complexity', 'category': 'property'},
    'exponential': {'definition': 'O(2^n) time or space complexity', 'category': 'property'},
    'factorial': {'definition': 'O(n!) time or space complexity', 'category': 'property'},
    
    # Common Operations
    'find': {'definition': 'To locate or retrieve', 'category': 'operation'},
    'finds': {'definition': 'To locate or retrieve', 'category': 'operation'},
    'finding': {'definition': 'To locate or retrieve', 'category': 'operation'},
    'found': {'definition': 'To locate or retrieve', 'category': 'operation'},
    'search': {'definition': 'To look for elements in a data structure', 'category': 'operation'},
    'searching': {'definition': 'Looking for elements in a data structure', 'category': 'operation'},
    'sort': {'definition': 'To arrange elements in order', 'category': 'operation'},
    'sorting': {'definition': 'Arranging elements in order', 'category': 'operation'},
    'insert': {'definition': 'To add an element to a data structure', 'category': 'operation'},
    'insertion': {'definition': 'Adding an element to a data structure', 'category': 'operation'},
    'delete': {'definition': 'To remove an element from a data structure', 'category': 'operation'},
    'deletion': {'definition': 'Removing an element from a data structure', 'category': 'operation'},
    'update': {'definition': 'To modify an element in a data structure', 'category': 'operation'},
    'traverse': {'definition': 'To visit all elements in a data structure', 'category': 'operation'},
    'traversal': {'definition': 'Visiting all elements in a data structure', 'category': 'operation'},
    'iterate': {'definition': 'To go through elements one by one', 'category': 'operation'},
    'iteration': {'definition': 'Going through elements one by one', 'category': 'operation'},
    'reverse': {'definition': 'To change the order of elements to the opposite', 'category': 'operation'},
    'rotation': {'definition': 'Shifting elements by a certain position', 'category': 'operation'},
    'swap': {'definition': 'To exchange the position of two elements', 'category': 'operation'},
    'merge': {'definition': 'To combine two or more data structures', 'category': 'operation'},
    'split': {'definition': 'To divide a data structure into parts', 'category': 'operation'},
    'push': {'definition': 'To add an element to a stack', 'category': 'operation'},
    'pop': {'definition': 'To remove the top element from a stack', 'category': 'operation'},
    'enqueue': {'definition': 'To add an element to a queue', 'category': 'operation'},
    'dequeue': {'definition': 'To remove an element from a queue', 'category': 'operation'},
    'balance': {'definition': 'To maintain equilibrium in a data structure', 'category': 'operation'},
    'rotate': {'definition': 'To move elements in a circular manner', 'category': 'operation'},
    
    # Data types
    'int': {'definition': 'Integer data type', 'category': 'data type'},
    'integer': {'definition': 'Integer data type', 'category': 'data type'},
    'float': {'definition': 'Floating-point number data type', 'category': 'data type'},
    'double': {'definition': 'Double-precision floating-point data type', 'category': 'data type'},
    'char': {'definition': 'Character data type', 'category': 'data type'},
    'character': {'definition': 'Character data type', 'category': 'data type'},
    'boolean': {'definition': 'A data type with two values: true and false', 'category': 'data type'},
    'bool': {'definition': 'A data type with two values: true and false', 'category': 'data type'},
    
    # Programming concepts
    'function': {'definition': 'A reusable block of code', 'category': 'programming concept'},
    'method': {'definition': 'A function associated with an object or class', 'category': 'programming concept'},
    'class': {'definition': 'A blueprint for creating objects', 'category': 'programming concept'},
    'object': {'definition': 'An instance of a class', 'category': 'programming concept'},
    'variable': {'definition': 'A named storage location', 'category': 'programming concept'},
    'loop': {'definition': 'A control structure for repetition', 'category': 'programming concept'},
    'conditional': {'definition': 'A control structure for decision making', 'category': 'programming concept'},
    'recursion': {'definition': 'A technique where a function calls itself', 'category': 'programming concept'},
    'pointer': {'definition': 'A variable that stores a memory address', 'category': 'programming concept'},
    'reference': {'definition': 'A way to indirectly access a variable', 'category': 'programming concept'},
    'inheritance': {'definition': 'A mechanism of basing a class on another class', 'category': 'programming concept'},
    'polymorphism': {'definition': 'Ability of different classes to be treated as instances of the same class', 'category': 'programming concept'},
    'encapsulation': {'definition': 'Bundling data and methods that operate on that data', 'category': 'programming concept'},
    'abstraction': {'definition': 'Hiding implementation details', 'category': 'programming concept'},
    'interface': {'definition': 'A contract defining a set of methods', 'category': 'programming concept'},
    
    # Design Patterns and Problem-Solving Techniques
    'sliding window': {'definition': 'Algorithm technique for problems involving sequences', 'category': 'algorithm'},
    'two pointers': {'definition': 'Algorithm technique using two pointers to traverse data', 'category': 'algorithm'},
    'binary search tree': {'definition': 'A tree with ordered nodes for fast lookup', 'category': 'data structure'},
    'prefix sum': {'definition': 'Technique to efficiently calculate cumulative sums', 'category': 'algorithm'},
    'inorder traversal': {'definition': 'Left-Root-Right tree traversal method', 'category': 'algorithm'},
    'preorder traversal': {'definition': 'Root-Left-Right tree traversal method', 'category': 'algorithm'},
    'postorder traversal': {'definition': 'Left-Right-Root tree traversal method', 'category': 'algorithm'},
    'level order traversal': {'definition': 'Breadth-first tree traversal method', 'category': 'algorithm'},    'monotonic stack': {'definition': 'A stack that maintains increasing or decreasing order', 'category': 'data structure'},
    'monotonic queue': {'definition': 'A queue that maintains increasing or decreasing order', 'category': 'data structure'},
    'trie': {'definition': 'A tree-like data structure for efficient string operations', 'category': 'data structure'},
    'topological sort': {'definition': 'An ordering of nodes in a directed graph', 'category': 'algorithm'},
    
    # Programming Concepts
    'class': {'definition': 'A blueprint for creating objects', 'category': 'programming concept'},
    'object': {'definition': 'An instance of a class', 'category': 'programming concept'},
    'variable': {'definition': 'A named storage location', 'category': 'programming concept'},
    'loop': {'definition': 'A control structure for repetition', 'category': 'programming concept'},
    'if': {'definition': 'A conditional statement', 'category': 'programming concept'},
    'else': {'definition': 'Alternative branch in conditional', 'category': 'programming concept'},
    'python': {'definition': 'A high-level programming language', 'category': 'programming language'},
    'java': {'definition': 'A class-based, object-oriented programming language', 'category': 'programming language'},
    'javascript': {'definition': 'A scripting language for web development', 'category': 'programming language'},
    'c++': {'definition': 'A general-purpose programming language', 'category': 'programming language'},
    'algorithm': {'definition': 'A step-by-step procedure for calculations', 'category': 'computing concept'},
    'database': {'definition': 'An organized collection of data', 'category': 'computing concept'},
    'api': {'definition': 'Application Programming Interface', 'category': 'computing concept'},
    'html': {'definition': 'Hypertext Markup Language', 'category': 'web technology'},
    'css': {'definition': 'Cascading Style Sheets', 'category': 'web technology'},
    'sql': {'definition': 'Structured Query Language', 'category': 'database language'},
    'json': {'definition': 'JavaScript Object Notation', 'category': 'data format'},
    'xml': {'definition': 'Extensible Markup Language', 'category': 'data format'},
    'url': {'definition': 'Uniform Resource Locator', 'category': 'web concept'},
    'http': {'definition': 'Hypertext Transfer Protocol', 'category': 'web protocol'},
    'git': {'definition': 'Version control system', 'category': 'development tool'},
    'code': {'definition': 'Instructions written in a programming language', 'category': 'computing concept'},
    'bug': {'definition': 'An error in a program', 'category': 'computing concept'},
    'debug': {'definition': 'Process of finding and fixing bugs', 'category': 'computing concept'},
    'compile': {'definition': 'Convert source code into executable form', 'category': 'computing concept'},
    'runtime': {'definition': 'Time during which a program is running', 'category': 'computing concept'},
    'server': {'definition': 'A computer that provides services', 'category': 'computing concept'},
    'client': {'definition': 'A computer that accesses services', 'category': 'computing concept'},
    'network': {'definition': 'A group of interconnected computers', 'category': 'computing concept'},
    'file': {'definition': 'A collection of data stored in a computer', 'category': 'computing concept'},
    'directory': {'definition': 'A file system cataloging structure', 'category': 'computing concept'},
    'library': {'definition': 'A collection of implementations of behavior', 'category': 'programming concept'},
    'framework': {'definition': 'An abstraction providing generic functionality', 'category': 'programming concept'},
    'method': {'definition': 'A function associated with a class', 'category': 'programming concept'},
    'attribute': {'definition': 'A property associated with an object', 'category': 'programming concept'},
    'inheritance': {'definition': 'A mechanism of basing a class on another class', 'category': 'programming concept'},
    'interface': {'definition': 'A contract specifying behavior that classes must implement', 'category': 'programming concept'},
    'package': {'definition': 'A namespace containing related classes', 'category': 'programming concept'},
    'module': {'definition': 'A separate file containing code', 'category': 'programming concept'},
    'parameter': {'definition': 'A value passed to a function', 'category': 'programming concept'},
    'return': {'definition': 'A value passed back from a function', 'category': 'programming concept'},
    'exception': {'definition': 'An event that disrupts normal program flow', 'category': 'programming concept'},
    'thread': {'definition': 'A sequence of instructions that can be executed independently', 'category': 'computing concept'},
    'process': {'definition': 'An instance of a program being executed', 'category': 'computing concept'},
    'memory': {'definition': 'Storage space in a computer', 'category': 'computing concept'},
    'cache': {'definition': 'A high-speed storage component', 'category': 'computing concept'},
    'pointer': {'definition': 'A variable that stores the address of another variable', 'category': 'programming concept'},
    'reference': {'definition': 'An alias for an object', 'category': 'programming concept'},
    'declaration': {'definition': 'Specifying the type and name of a variable', 'category': 'programming concept'},
    'definition': {'definition': 'Allocating memory for a variable', 'category': 'programming concept'},
    'initialization': {'definition': 'Setting an initial value for a variable', 'category': 'programming concept'},
    'assignment': {'definition': 'Setting a value for a variable', 'category': 'programming concept'},
    'operator': {'definition': 'A symbol that performs an operation', 'category': 'programming concept'},
    'expression': {'definition': 'A combination of values, variables, and operators', 'category': 'programming concept'},
    'statement': {'definition': 'A syntactic unit of code', 'category': 'programming concept'},
    'syntax': {'definition': 'The rules governing the structure of a language', 'category': 'programming concept'},
    'semantics': {'definition': 'The meaning of a program', 'category': 'programming concept'},
    'compiler': {'definition': 'A program that converts source code to machine code', 'category': 'development tool'},
    'interpreter': {'definition': 'A program that executes source code directly', 'category': 'development tool'},
    'ide': {'definition': 'Integrated Development Environment', 'category': 'development tool'},
    'sdk': {'definition': 'Software Development Kit', 'category': 'development tool'},
    'api': {'definition': 'Application Programming Interface', 'category': 'development concept'},
    'gui': {'definition': 'Graphical User Interface', 'category': 'user interface'},
    'cli': {'definition': 'Command Line Interface', 'category': 'user interface'},
    'ui': {'definition': 'User Interface', 'category': 'user interface'},
    'ux': {'definition': 'User Experience', 'category': 'user interface'},
    'frontend': {'definition': 'The client-side part of a web application', 'category': 'web development'},
    'backend': {'definition': 'The server-side part of a web application', 'category': 'web development'},
    'fullstack': {'definition': 'Both frontend and backend development', 'category': 'web development'},
    'devops': {'definition': 'Development and Operations', 'category': 'software development'},
    'agile': {'definition': 'An iterative approach to software development', 'category': 'software development'},
    'scrum': {'definition': 'An agile framework for managing work', 'category': 'software development'},
    'kanban': {'definition': 'A visualization tool for managing work', 'category': 'software development'},
    'waterfall': {'definition': 'A sequential approach to software development', 'category': 'software development'},
    'tdd': {'definition': 'Test-Driven Development', 'category': 'software development'},
    'ci': {'definition': 'Continuous Integration', 'category': 'software development'},
    'cd': {'definition': 'Continuous Deployment', 'category': 'software development'},
    'oop': {'definition': 'Object-Oriented Programming', 'category': 'programming paradigm'},
    'fp': {'definition': 'Functional Programming', 'category': 'programming paradigm'},
    'pp': {'definition': 'Procedural Programming', 'category': 'programming paradigm'}
}

# Function to detect if the text is likely Romanized Hindi
def is_romanized_hindi(text):
    words = re.findall(r'\b\w+\b', text.lower())
    if not words:
        return False
        
    hindi_word_count = 0
    
    # Check for distinctive Hindi words (less likely to appear in English)
    distinctive_hindi_words = ['kya', 'kyun', 'kaise', 'kitna', 'kitne', 'hain', 'hai', 'karna', 
                              'karein', 'karo', 'mujhe', 'tumhara', 'hamara', 'aapka', 'woh', 
                              'lekin', 'nahi', 'nahin', 'haan', 'accha', 'zyada', 'bahut', 'thoda']
    
    # If any distinctive Hindi words are present, it increases confidence
    distinctive_found = False
    for word in words:
        if word in distinctive_hindi_words:
            distinctive_found = True
            break
    
    # Count Hindi words, but ignore common short words that might be confused
    # with English (like "me", "hi", "ya", "he", "be", "do", "to", "in", "no")
    english_like_words = ['me', 'hi', 'ya', 'he', 'be', 'do', 'to', 'in', 'no', 'or', 'on', 'we', 'my', 'of', 'all']
    
    for word in words:
        if word in romanized_hindi_dict and word not in english_like_words:
            hindi_word_count += 1
    
    # Higher threshold (40%) and must either have distinctive words or high proportion
    return (hindi_word_count > 0 and 
            ((hindi_word_count / len(words) >= 0.4) or 
            (distinctive_found and hindi_word_count / len(words) >= 0.25)))

# Function to detect technical terms in the question with advanced fuzzy matching
def detect_technical_terms(text):
    """
    Identifies technical terms in text using multiple strategies:
    1. Exact matching for precise terms
    2. Multi-word term detection (2-3 word combinations)
    3. Advanced fuzzy matching for misspellings and variants
    4. Levenshtein distance for close-but-not-exact matches
    5. Context-based inference for technical terminology
    """
    words = re.findall(r'\b\w+\b', text.lower())
    tech_terms = []
    
    # Look for exact matches to technical terms
    for word in words:
        if word in technical_terms:
            tech_terms.append({
                'term': word,
                'definition': technical_terms[word]['definition'],
                'category': technical_terms[word]['category'],
                'match_type': 'exact'
            })
    
    # Check for common technical term combinations (2-word terms)
    for i in range(len(words) - 1):
        compound_term = words[i] + " " + words[i+1]
        if compound_term in technical_terms:
            tech_terms.append({
                'term': compound_term,
                'definition': technical_terms[compound_term]['definition'],
                'category': technical_terms[compound_term]['category'],
                'match_type': 'exact_compound'
            })
    
    # Check for three-word technical terms
    for i in range(len(words) - 2):
        compound_term = words[i] + " " + words[i+1] + " " + words[i+2]
        if compound_term in technical_terms:
            tech_terms.append({
                'term': compound_term,
                'definition': technical_terms[compound_term]['definition'],
                'category': technical_terms[compound_term]['category'],
                'match_type': 'exact_compound'
            })
    
    # Try fuzzy matching for common misspellings using both regex and simple Levenshtein
    # Data structures fuzzy matching
    for word in words:
        # Skip if the word is very short (likely not a technical term)
        if len(word) < 2:
            continue
            
        # Array-like terms with expanded pattern coverage
        if re.match(r'a[r]+[aeiouy]*[sy]?', word) and len(word) >= 2:
            tech_terms.append({
                'term': 'array',
                'definition': technical_terms['array']['definition'],
                'category': technical_terms['array']['category'],
                'original': word,
                'match_type': 'fuzzy'
            })
        # String-like terms with improved pattern
        elif re.match(r'st[r]+[iey]+n?g?[sz]?', word) and len(word) >= 3:
            tech_terms.append({
                'term': 'string',
                'definition': technical_terms['string']['definition'],
                'category': technical_terms['string']['category'],
                'original': word,
                'match_type': 'fuzzy'
            })
        # List-like terms with better pattern matching
        elif re.match(r'l[iy]?s[t]+[sz]?', word) and len(word) >= 2:
            tech_terms.append({
                'term': 'list',
                'definition': technical_terms['list']['definition'],
                'category': technical_terms['list']['category'],
                'original': word,
                'match_type': 'fuzzy'
            })        # Stack-like terms with better pattern matching
        elif re.match(r'st[a]?[ck]+[sz]?', word) and len(word) >= 2:
            tech_terms.append({
                'term': 'stack',
                'definition': technical_terms['stack']['definition'],
                'category': technical_terms['stack']['category'],
                'original': word,
                'match_type': 'fuzzy'
            })
        # Queue-like terms with expanded pattern
        elif re.match(r'q[ueay]*[sz]?', word) and len(word) >= 1:
            tech_terms.append({
                'term': 'queue',
                'definition': technical_terms['queue']['definition'],
                'category': technical_terms['queue']['category'],
                'original': word,
                'match_type': 'fuzzy'
            })
        # Tree-like terms with improved pattern
        elif re.match(r'tr[e]+[sz]?', word) and len(word) >= 2:
            tech_terms.append({
                'term': 'tree',
                'definition': technical_terms['tree']['definition'],
                'category': technical_terms['tree']['category'],
                'original': word,
                'match_type': 'fuzzy'
            })
        # Graph-like terms with expanded pattern
        elif re.match(r'gr[a]?ph[sz]?', word) and len(word) >= 3:
            tech_terms.append({
                'term': 'graph',
                'definition': technical_terms['graph']['definition'],
                'category': technical_terms['graph']['category'],
                'original': word,
                'match_type': 'fuzzy'
            })
        # Hash-like terms with more flexible pattern
        elif re.match(r'h[a]?sh[a-z]*', word) and len(word) >= 3 or word in ['hmap', 'hset', 'htable']:
            tech_terms.append({
                'term': 'hash table',
                'definition': technical_terms['hash table']['definition'],
                'category': technical_terms['hash table']['category'],
                'original': word,
                'match_type': 'fuzzy'
            })
        # Linked List specific matching
        elif re.match(r'l[i]?nk[e]?d[l]?[i]?st[sz]?', word) and len(word) >= 5 or word in ['ll', 'llist', 'lnklst']:
            tech_terms.append({
                'term': 'linked list',
                'definition': technical_terms['linked list']['definition'],
                'category': technical_terms['linked list']['category'],
                'original': word,
                'match_type': 'fuzzy'
            })
            
        # Properties fuzzy matching with enhanced patterns
        # Size-like terms
        elif re.match(r'si[sz][e]?[sz]?', word) and len(word) >= 2:
            tech_terms.append({
                'term': 'size',
                'definition': technical_terms['size']['definition'],
                'category': technical_terms['size']['category'],
                'original': word,
                'match_type': 'fuzzy'
            })
        # Length-like terms with improved pattern
        elif re.match(r'l[ea]n[gth]*[sz]?', word) and len(word) >= 2 or word in ['len', 'lngth']:
            tech_terms.append({
                'term': 'length',
                'definition': technical_terms['length']['definition'],
                'category': technical_terms['length']['category'],
                'original': word,
                'match_type': 'fuzzy'
            })
        # Index-like terms with better pattern
        elif re.match(r'ind[e]?[x]+[e]?[sz]?', word) and len(word) >= 3 or word in ['idx', 'indx']:
            tech_terms.append({
                'term': 'index',
                'definition': technical_terms['index']['definition'],
                'category': technical_terms['index']['category'],
                'original': word,
                'match_type': 'fuzzy'
            })
          # Algorithm concepts fuzzy matching with better patterns
        # Function-like terms
        elif re.match(r'f[iu]n[cktd][a-z]*', word) and len(word) >= 3 or word in ['func', 'fn', 'fnc']:
            tech_terms.append({
                'term': 'function',
                'definition': technical_terms['function']['definition'],
                'category': technical_terms['function']['category'],
                'original': word,
                'match_type': 'fuzzy'
            })
        # Variable-like terms with expanded pattern
        elif re.match(r'var[a-z]*', word) and len(word) >= 3 or word in ['var', 'vars']:
            tech_terms.append({
                'term': 'variable',
                'definition': technical_terms['variable']['definition'],
                'category': technical_terms['variable']['category'],
                'original': word,
                'match_type': 'fuzzy'
            })
        # Sort-like terms with better pattern
        elif re.match(r'so?rt[a-z]*', word) and len(word) >= 3 or word in ['srt', 'sort']:
            tech_terms.append({
                'term': 'sort',
                'definition': technical_terms['sort']['definition'],
                'category': technical_terms['sort']['category'],
                'original': word,
                'match_type': 'fuzzy'
            })
        # Search-like terms with improved pattern
        elif re.match(r'se?[a]?rch[a-z]*', word) and len(word) >= 3 or word in ['srch', 'serch']:
            tech_terms.append({
                'term': 'search',
                'definition': technical_terms['search']['definition'],
                'category': technical_terms['search']['category'],
                'original': word,
                'match_type': 'fuzzy'
            })
        # Algorithm-like terms with broader pattern
        elif re.match(r'alg[o]?[a-z]*', word) and len(word) >= 3 or word in ['algo', 'algrm', 'alg']:
            tech_terms.append({
                'term': 'algorithm',
                'definition': technical_terms['algorithm']['definition'],
                'category': technical_terms['algorithm']['category'],
                'original': word,
                'match_type': 'fuzzy'
            })
        # Recursion-like terms with more flexible pattern
        elif re.match(r'rec[u]?rs[a-z]*', word) and len(word) >= 3 or word in ['recur', 'recrsn']:
            tech_terms.append({
                'term': 'recursion',
                'definition': technical_terms['recursion']['definition'],
                'category': technical_terms['recursion']['category'],
                'original': word,
                'match_type': 'fuzzy'
            })
        # Complexity-like terms with better pattern
        elif re.match(r'compl[a-z]*', word) and len(word) >= 4 or word in ['cplx', 'cmplx']:
            tech_terms.append({
                'term': 'complexity',
                'definition': technical_terms['complexity']['definition'],
                'category': technical_terms['complexity']['category'],
                'original': word,
                'match_type': 'fuzzy'
            })
        # Dynamic programming like terms with expanded pattern
        elif re.match(r'dyn[a]?m[a-z]*', word) and len(word) >= 3 or word == 'dp':
            tech_terms.append({
                'term': 'dynamic programming',
                'definition': technical_terms['dynamic programming']['definition'],
                'category': technical_terms['dynamic programming']['category'],
                'original': word,
                'match_type': 'fuzzy'
            })
        # Greedy-like terms with broader pattern
        elif re.match(r'gre[e]?d[a-z]*', word) and len(word) >= 4 or word in ['grdy']:
            tech_terms.append({
                'term': 'greedy',
                'definition': technical_terms['greedy']['definition'],
                'category': technical_terms['greedy']['category'],
                'original': word,
                'match_type': 'fuzzy'
            })
    
    # If still not enough matches, try Levenshtein distance for close matches
    # This is a simpler version of Levenshtein - in production you'd use a library
    if len(tech_terms) < 2:
        # Simple Levenshtein distance function
        def levenshtein_distance(s1, s2):
            if len(s1) < len(s2):
                return levenshtein_distance(s2, s1)
            if len(s2) == 0:
                return len(s1)
            
            previous_row = range(len(s2) + 1)
            for i, c1 in enumerate(s1):
                current_row = [i + 1]
                for j, c2 in enumerate(s2):
                    insertions = previous_row[j + 1] + 1
                    deletions = current_row[j] + 1
                    substitutions = previous_row[j] + (c1 != c2)
                    current_row.append(min(insertions, deletions, substitutions))
                previous_row = current_row
            
            return previous_row[-1]
        
        # List of common technical terms to check against
        common_tech_terms = [
            'array', 'string', 'list', 'stack', 'queue', 'tree', 'graph', 'hash', 
            'sort', 'search', 'algorithm', 'function', 'variable', 'size', 'length',
            'index', 'recursion', 'complexity', 'loop', 'class', 'object'
        ]
        
        # Check each word against common terms
        for word in words:
            if len(word) > 2:  # Only consider words of reasonable length
                for tech_term in common_tech_terms:
                    # Calculate Levenshtein distance
                    distance = levenshtein_distance(word, tech_term)
                    
                    # Accept if distance is small relative to word length
                    # Stricter for shorter words to avoid false positives
                    max_distance = max(1, len(tech_term) // 3)
                    
                    if distance <= max_distance and tech_term in technical_terms:
                        # Check if we already have this term
                        if not any(t['term'] == tech_term for t in tech_terms):
                            tech_terms.append({
                                'term': tech_term,
                                'definition': technical_terms[tech_term]['definition'],
                                'category': technical_terms[tech_term]['category'],
                                'original': word,
                                'match_type': 'levenshtein',
                                'distance': distance
                            })
      # Use context clues to infer technical meaning - improved patterns
    context_patterns = [
        # Array-related patterns with expanded variants
        (r'\b(how|to|find|get|determine|calculate|compute|check|know).*(size|length|elements|capacity).*(array|list|string|vector|container|collection)\b', 
         ['array', 'size']),
        (r'\b(how|to|find|get|determine|calculate|compute|check|know).*(array|list|string|vector|container|collection).*(size|length|elements|capacity)\b', 
         ['array', 'size']),
        (r'\b(array|list|string|vector|container|collection).*(sort|search|reverse|rotate|traverse|iterate|empty|full)\b', 
         ['array', 'sort']),
        (r'\b(add|insert|delete|remove|update|access|search|retrieve|find).*(element|item|node|value|data).*(array|list|string|vector)\b', 
         ['array', 'operation']),
         
        # Stack and queue operation patterns
        (r'\b(stack|queue|deque).*(push|pop|enqueue|dequeue|front|rear|top|peek|empty|full)\b', 
         ['stack', 'push']),
        (r'\b(push|pop|peek|top).*(element|item|value).*(stack)\b', 
         ['stack', 'operation']),
        (r'\b(enqueue|dequeue|front|rear).*(element|item|value).*(queue)\b', 
         ['queue', 'operation']),
         
        # Tree and graph traversal patterns
        (r'\b(tree|graph|forest|bst|binary tree|binary search tree).*(traverse|search|visit|insert|delete|add|remove|find)\b', 
         ['tree', 'traverse']),
        (r'\b(inorder|preorder|postorder|level order|dfs|bfs).*(traversal|search|visit)\b', 
         ['tree', 'traverse']),
        (r'\b(root|leaf|node|child|parent|subtree|branch).*(tree|bst|binary)\b', 
         ['tree']),
         
        # Sorting algorithm patterns
        (r'\b(sort|sorting).*(array|list|elements|items|collection|data)\b', 
         ['sort']),
        (r'\b(bubble sort|merge sort|quick sort|heap sort|insertion sort|selection sort|counting sort|radix sort)\b', 
         ['sort']),
        (r'\b(compare|swap|partition|pivot).*(sorting|elements)\b', 
         ['sort']),
         
        # Searching algorithm patterns
        (r'\b(search|find|locate).*(element|item|value|key).*(array|list|collection|data structure)\b', 
         ['search']),
        (r'\b(linear search|binary search|interpolation search|hash search)\b', 
         ['search']),
         
        # Complexity analysis patterns
        (r'\b(time|space).*(complexity|efficient|performance|runtime)\b', 
         ['complexity']),
        (r'\bbig[ -]?o\b', 
         ['complexity']),
        (r'\bo\(([n\^]|log|1|n\*log|n\^2|n\^3|2\^n|n!)\)', 
         ['complexity']),
        (r'\b(worst|average|best)[ -]?case\b', 
         ['complexity']),
         
        # Algorithm paradigm patterns
        (r'\b(dynamic programming|dp|greedy|divide and conquer|backtracking|branch and bound|brute force|heuristic)\b', 
         ['algorithm']),
        (r'\b(memoization|tabulation|optimal substructure|overlapping subproblems)\b', 
         ['dynamic programming']),
         
        # Data structure specific patterns
        (r'\b(linked list|singly linked|doubly linked|circular linked)\b', 
         ['linked list']),
        (r'\b(next|previous|head|tail).*(node|pointer).*(linked list)\b', 
         ['linked list']),
        (r'\b(hash|dictionary|map|hashtable).*(key|value|pair|collision|chaining|probing)\b', 
         ['hash table']),
        (r'\b(binary|search|balanced|avl|red-black|b|b\+|splay).*(tree)\b', 
         ['binary search tree']),
        (r'\b(graph).*(directed|undirected|weighted|unweighted|cycle|path|adjacency|edge|vertex|node)\b', 
         ['graph']),
        (r'\b(adjacency matrix|adjacency list|edge list|incidence matrix)\b', 
         ['graph']),
         
        # Programming concepts patterns
        (r'\b(function|method|procedure|routine|subroutine|callback).*(parameter|argument|return|call)\b', 
         ['function']),
        (r'\b(class|object|instance|inheritance|polymorphism|encapsulation|abstraction)\b', 
         ['programming concept']),
        (r'\b(variable|constant|literal|identifier|declaration|definition|scope|lifetime)\b', 
         ['programming concept']),
        (r'\b(loop|iteration|for|while|do-while|iterate|repeat|continue|break)\b', 
         ['programming concept']),
        (r'\b(conditional|if|else|switch|case|ternary|branch)\b', 
         ['programming concept']),
         
        # New patterns for advanced algorithms and data structures
        (r'\b(trie|suffix tree|suffix array).*(insert|search|delete|build)\b', 
         ['trie']),
        (r'\b(union find|disjoint set).*(union|find|merge|connected components)\b', 
         ['union find']),
        (r'\b(segment tree|fenwick tree|bit).*(range|query|update|sum|minimum|maximum)\b', 
         ['segment tree']),
        (r'\b(sliding window|two pointers|binary search).*(technique|approach|method|algorithm)\b', 
         ['algorithm technique']),        (r'\b(bellman ford|dijkstra|floyd warshall|kruskal|prim).*(shortest path|spanning tree)\b', 
         ['graph algorithm'])
    ]
    
    for pattern, implied_terms in context_patterns:
        if re.search(pattern, text.lower()):
            for term in implied_terms:
                if term in technical_terms and not any(t['term'] == term for t in tech_terms):
                    tech_terms.append({
                        'term': term,
                        'definition': technical_terms[term]['definition'],
                        'category': technical_terms[term]['category'],
                        'inferred': True
                    })
      # Remove duplicate terms with improved handling
    unique_terms = []
    seen = set()
    
    # Sort by match quality first - exact matches are more reliable than fuzzy
    match_quality_order = {
        'exact': 3,
        'exact_compound': 3,
        'fuzzy': 2,
        'levenshtein': 1,
        'inferred': 0
    }
    
    # Sort by match quality and category importance
    sorted_terms = sorted(tech_terms, 
                         key=lambda x: (match_quality_order.get(x.get('match_type', 'inferred'), 0),
                                       x.get('term', '') in ['array', 'linked list', 'tree', 'graph', 'algorithm']), 
                         reverse=True)
    
    for term in sorted_terms:
        if term['term'] not in seen:
            seen.add(term['term'])
            
            # Add confidence level based on match type
            if 'match_type' in term:
                if term['match_type'] == 'exact' or term['match_type'] == 'exact_compound':
                    term['confidence'] = 1.0
                elif term['match_type'] == 'fuzzy':
                    term['confidence'] = 0.8
                elif term['match_type'] == 'levenshtein':
                    # Confidence based on Levenshtein distance
                    distance = term.get('distance', 1)
                    term_len = len(term['term'])
                    term['confidence'] = max(0.5, 1.0 - (distance / term_len))
                elif term['match_type'] == 'inferred':
                    term['confidence'] = 0.7
            else:
                term['confidence'] = 0.6  # Default confidence
                
            unique_terms.append(term)
    
    return unique_terms

# Function to translate Romanized Hindi to English
def translate_romanized_hindi(text):
    # Skip translation if text is too short
    if len(text) < 3:
        return text
        
    words = re.findall(r'\b\w+\b', text)
    translated_words = []
    
    # Keep track of how many words we actually translated
    translated_count = 0
    
    for word in words:
        lower_word = word.lower()
        if lower_word in romanized_hindi_dict:
            translated_words.append(romanized_hindi_dict[lower_word])
            translated_count += 1
        else:
            translated_words.append(word)
    
    # If we didn't translate anything meaningful, return the original text
    if translated_count == 0 or (translated_count / len(words) < 0.1):
        return text
    
    return ' '.join(translated_words)

# Function to detect multiple languages in text with better handling of Romanized Hindi
def detect_languages(text):
    # Skip language detection for very short text
    if len(text.strip()) < 5:
        return "en", [{"lang": "en", "text": text, "start": 0, "end": len(text)}]
    
    # Try detecting the dominant language first
    try:
        primary_lang = langdetect.detect(text)
    except:
        primary_lang = "en"  # Default to English if detection fails
    
    # Only check for Hinglish if it's not already confidently detected as another language
    # or if the detected language is English (since Hinglish can be mistaken for English)
    if primary_lang == "en":
        # Check if the text has significant Romanized Hindi content
        is_hinglish = is_romanized_hindi(text)
        
        # If we detected Romanized Hindi, mark it as a special case
        if is_hinglish:
            primary_lang = "hi-en"  # Hinglish (Hindi in Roman script mixed with English)
    
    # For Hinglish, create a single language block
    if primary_lang == "hi-en":
        return primary_lang, [{"lang": primary_lang, "text": text, "start": 0, "end": len(text)}]
    
    # Split into words and try to detect language patterns
    words = re.findall(r'\b\w+\b', text)
    lang_blocks = []
    current_block = {"lang": primary_lang, "text": "", "start": 0, "end": 0}
    
    # For simplicity, we'll just check for script characteristics
    for i, word in enumerate(words):
        # Check for scripts that clearly indicate specific languages
        if any('\u0900' <= c <= '\u097F' for c in word):  # Devanagari (Hindi, etc.)
            word_lang = "hi"
        elif any('\u4e00' <= c <= '\u9fff' for c in word):  # Chinese
            word_lang = "zh"
        elif any('\u0600' <= c <= '\u06FF' for c in word):  # Arabic
            word_lang = "ar"
        elif any('\u3040' <= c <= '\u30ff' for c in word):  # Japanese
            word_lang = "ja"
        elif any('\uac00' <= c <= '\ud7a3' for c in word):  # Korean
            word_lang = "ko"
        elif any('\u0400' <= c <= '\u04FF' for c in word):  # Cyrillic (Russian, etc.)
            word_lang = "ru"
        else:
            word_lang = primary_lang  # Default to primary language
        
        # If language changes, start a new block
        if word_lang != current_block["lang"] and word.strip():
            current_block["end"] = i
            if current_block["text"].strip():
                lang_blocks.append(current_block)
            current_block = {"lang": word_lang, "text": word, "start": i, "end": i}
        else:
            current_block["text"] += " " + word
            current_block["end"] = i
    
    # Add the last block
    if current_block["text"].strip():
        lang_blocks.append(current_block)
    
    return primary_lang, lang_blocks

# Function to preprocess text accounting for multiple languages
def preprocess_text(text, lang_info):
    primary_lang, lang_blocks = lang_info
    
    # For Hinglish, first translate to English for better processing
    if primary_lang == "hi-en":
        translated_text = translate_romanized_hindi(text)
        tokens = word_tokenize(translated_text.lower())
        
        # Remove stopwords
        stop_words = set(stopwords.words('english'))
        tokens = [token for token in tokens if token not in stop_words]
        
        # Lemmatize
        tokens = [lemmatizer.lemmatize(token) for token in tokens]
        
        return tokens
    
    all_tokens = []
    
    for block in lang_blocks:
        block_text = block["text"]
        block_lang = block["lang"]
        
        # Tokenize the text
        tokens = word_tokenize(block_text.lower())
        
        # Remove stopwords if available for this language
        if block_lang in stopwords_dict:
            tokens = [token for token in tokens if token not in stopwords_dict[block_lang]]
        
        # Lemmatize only for English
        if block_lang == "en":
            tokens = [lemmatizer.lemmatize(token) for token in tokens]
        
        all_tokens.extend(tokens)
    
    return all_tokens

# Function to normalize text with improper grammar and technical misspellings
def normalize_text(text):
    """
    Comprehensively cleans and normalizes text by:
    1. Fixing common typos, grammar issues, and technical term misspellings
    2. Handling domain-specific terminology variants
    3. Normalizing verb forms, plurals, and technical shortcuts
    4. Contextual correction of technical terminology based on surrounding words
    5. Aggressive correction of common data structure and algorithm misspellings
    """
    # Remove extra spaces
    text = re.sub(r'\s+', ' ', text).strip()
    
    # Fix common messaging typos and shortcuts
    text = re.sub(r'\bu\b', 'you', text)
    text = re.sub(r'\br\b', 'are', text)
    text = re.sub(r'\bur\b', 'your', text)
    text = re.sub(r'\bwhts\b', 'whats', text)
    text = re.sub(r'\bwht\b', 'what', text)
    text = re.sub(r'\bhw\b', 'how', text)
    text = re.sub(r'\bpls\b', 'please', text)
    text = re.sub(r'\bplz\b', 'please', text)
    text = re.sub(r'\bthnks\b', 'thanks', text)
    text = re.sub(r'\bthnx\b', 'thanks', text)
    text = re.sub(r'\bthx\b', 'thanks', text)
    text = re.sub(r'\bcnt\b', 'cannot', text)
    text = re.sub(r'\bcant\b', 'cannot', text)
    text = re.sub(r'\bdnt\b', 'dont', text)
    text = re.sub(r'\bwont\b', 'will not', text)
    text = re.sub(r'\bcouldnt\b', 'could not', text)
    text = re.sub(r'\bshouldnt\b', 'should not', text)
    text = re.sub(r'\bwouldnt\b', 'would not', text)
    text = re.sub(r'\bhavent\b', 'have not', text)
    text = re.sub(r'\bhasnt\b', 'has not', text)
    text = re.sub(r'\bisnt\b', 'is not', text)
    text = re.sub(r'\barent\b', 'are not', text)
    text = re.sub(r'\bwerent\b', 'were not', text)
    text = re.sub(r'\bwasnt\b', 'was not', text)
    
    # Fix common programming term typos and misspellings - expanded patterns
    # Common misspellings of technical operations
    text = re.sub(r'\bfend\b', 'find', text)
    text = re.sub(r'\bfnd\b', 'find', text)
    text = re.sub(r'\bfind out\b', 'find', text)
    text = re.sub(r'\bsrch\b', 'search', text)
    text = re.sub(r'\bsrching\b', 'searching', text)
    text = re.sub(r'\bsearh\b', 'search', text)
    text = re.sub(r'\bgit\b', 'get', text)
    text = re.sub(r'\bgit([^a-zA-Z])\b', r'get\1', text)  # avoid matching 'git' version control
    text = re.sub(r'\bpnt\b', 'print', text)
    text = re.sub(r'\bprnt\b', 'print', text)
    text = re.sub(r'\bprit\b', 'print', text)
    text = re.sub(r'\bcal+\b', 'call', text)
    text = re.sub(r'\bcalc+\b', 'calculate', text)
    text = re.sub(r'\bcreate+\b', 'create', text)
    text = re.sub(r'\bcrt+\b', 'create', text)
    text = re.sub(r'\bcompil+\b', 'compile', text)
    text = re.sub(r'\bcmpl+\b', 'compile', text)
    text = re.sub(r'\bcomp+\b', 'compare', text)
    text = re.sub(r'\bcmp+\b', 'compare', text)
    text = re.sub(r'\bchng+\b', 'change', text)
    text = re.sub(r'\bchg+\b', 'change', text)
    text = re.sub(r'\bdef+\b', 'define', text)
    text = re.sub(r'\bimp+\b', 'implement', text)
    text = re.sub(r'\bimplem+\b', 'implement', text)
    text = re.sub(r'\bupd+\b', 'update', text)
    text = re.sub(r'\brem+\b', 'remove', text)
    text = re.sub(r'\brmv+\b', 'remove', text)
    text = re.sub(r'\bdel+\b', 'delete', text)
    text = re.sub(r'\bexc+\b', 'execute', text)
    text = re.sub(r'\bexec+\b', 'execute', text)
    text = re.sub(r'\brun+\b', 'run', text)
    text = re.sub(r'\bini+\b', 'initialize', text)
    text = re.sub(r'\binit+\b', 'initialize', text)
    text = re.sub(r'\bopt+\b', 'optimize', text)
    text = re.sub(r'\boptm+\b', 'optimize', text)
    text = re.sub(r'\bincr+\b', 'increment', text)
    text = re.sub(r'\bdecr+\b', 'decrement', text)
    text = re.sub(r'\bincrmnt+\b', 'increment', text)
    text = re.sub(r'\bdecrmnt+\b', 'decrement', text)
    
    # Common misspellings of data structures - improved with more variants
    text = re.sub(r'\baray\b', 'array', text)
    text = re.sub(r'\barry\b', 'array', text)
    text = re.sub(r'\barrau?y?s?\b', 'array', text)
    text = re.sub(r'\barrs?\b', 'array', text)
    text = re.sub(r'\barray?u+s\b', 'array', text)  # Catch "arrayus" variants
    text = re.sub(r'\barraies\b', 'arrays', text)
    text = re.sub(r'\barr[a-z]*\b', 'array', text)  # Broader pattern to catch various array misspellings
    text = re.sub(r'\barrray\b', 'array', text)  # Extra 'r'
    text = re.sub(r'\bareay\b', 'array', text)  # 'e' instead of 'r'
    text = re.sub(r'\barays\b', 'arrays', text)  # Missing 'r'
    text = re.sub(r'\barrys\b', 'arrays', text)  # Missing 'a'
    
    text = re.sub(r'\blinkedlist\b', 'linked list', text)
    text = re.sub(r'\blnkdlst\b', 'linked list', text)
    text = re.sub(r'\blinklist\b', 'linked list', text)
    text = re.sub(r'\blinkdlist\b', 'linked list', text)
    text = re.sub(r'\blink list\b', 'linked list', text)
    text = re.sub(r'\blinked-list\b', 'linked list', text)
    text = re.sub(r'\blnklst\b', 'linked list', text)
    text = re.sub(r'\bllist\b', 'linked list', text)
    text = re.sub(r'\bll\b', 'linked list', text)
    
    text = re.sub(r'\bstk\b', 'stack', text)
    text = re.sub(r'\bstck\b', 'stack', text)
    text = re.sub(r'\bstak\b', 'stack', text)
    text = re.sub(r'\bstacc\b', 'stack', text)
    text = re.sub(r'\bstac\b', 'stack', text)
    text = re.sub(r'\bstaks\b', 'stacks', text)
    text = re.sub(r'\bstcks\b', 'stacks', text)
    
    text = re.sub(r'\bq\b', 'queue', text)
    text = re.sub(r'\bque\b', 'queue', text)
    text = re.sub(r'\bqueues?\b', 'queue', text)
    text = re.sub(r'\bqeue\b', 'queue', text)
    text = re.sub(r'\bqueu\b', 'queue', text)
    text = re.sub(r'\bqeue\b', 'queue', text)
    text = re.sub(r'\bqeus\b', 'queues', text)
    
    text = re.sub(r'\btre\b', 'tree', text)
    text = re.sub(r'\btrre\b', 'tree', text)
    text = re.sub(r'\btreee\b', 'tree', text)
    text = re.sub(r'\btrie\b', 'tree', text)  # Careful! This might conflict with the actual 'trie' data structure
    text = re.sub(r'\btres\b', 'trees', text)
    
    text = re.sub(r'\bbst\b', 'binary search tree', text)
    text = re.sub(r'\bbintree\b', 'binary tree', text)
    text = re.sub(r'\bbin tree\b', 'binary tree', text)
    text = re.sub(r'\bbin-tree\b', 'binary tree', text)
    text = re.sub(r'\bbinary-tree\b', 'binary tree', text)
    text = re.sub(r'\bbin search tree\b', 'binary search tree', text)
    text = re.sub(r'\bbin-search-tree\b', 'binary search tree', text)
    
    text = re.sub(r'\bheeps?\b', 'heap', text)
    text = re.sub(r'\bheps?\b', 'heap', text)
    text = re.sub(r'\bheaap\b', 'heap', text)
    text = re.sub(r'\bheep\b', 'heap', text)
    
    text = re.sub(r'\bgrph\b', 'graph', text)
    text = re.sub(r'\bgraph\b', 'graph', text)
    text = re.sub(r'\bgraf\b', 'graph', text)
    text = re.sub(r'\bgraff\b', 'graph', text)
    text = re.sub(r'\bgraphs\b', 'graphs', text)
    text = re.sub(r'\bgrps\b', 'graphs', text)
    
    text = re.sub(r'\bhashmp\b', 'hashmap', text)
    text = re.sub(r'\bhshmp\b', 'hashmap', text)
    text = re.sub(r'\bhash\-?map\b', 'hashmap', text)
    text = re.sub(r'\bhsh\-?map\b', 'hashmap', text)
    text = re.sub(r'\bhash\-?tbl\b', 'hashtable', text)
    text = re.sub(r'\bhshtbl\b', 'hashtable', text)
    text = re.sub(r'\bhash table\b', 'hashtable', text)
    
    # Common misspellings of string and text terms
    text = re.sub(r'\bstrng\b', 'string', text)
    text = re.sub(r'\bstr\b', 'string', text)
    text = re.sub(r'\bstrn\b', 'string', text)
    text = re.sub(r'\bstrings\b', 'strings', text)
    text = re.sub(r'\bstrngs\b', 'strings', text)
    text = re.sub(r'\bstrins\b', 'strings', text)
    text = re.sub(r'\bstrig\b', 'string', text)
    text = re.sub(r'\btxt\b', 'text', text)
    text = re.sub(r'\bchr\b', 'character', text)
    text = re.sub(r'\bcharc?\b', 'character', text)
    text = re.sub(r'\bchrctr\b', 'character', text)
    text = re.sub(r'\bcharcter\b', 'character', text)
    
    # Common misspellings of property and size terms
    text = re.sub(r'\bln?gth\b', 'length', text)
    text = re.sub(r'\blen\b', 'length', text)
    text = re.sub(r'\blnt\b', 'length', text)
    text = re.sub(r'\blength\b', 'length', text)
    text = re.sub(r'\blengts\b', 'lengths', text)
    text = re.sub(r'\blens\b', 'lengths', text)
    
    text = re.sub(r'\bsiz\b', 'size', text)
    text = re.sub(r'\bsz\b', 'size', text)
    text = re.sub(r'\bsize\b', 'size', text)
    text = re.sub(r'\bsizs\b', 'sizes', text)
    text = re.sub(r'\bsizes\b', 'sizes', text)
    
    text = re.sub(r'\bcpcty\b', 'capacity', text)
    text = re.sub(r'\bcap\b', 'capacity', text)
    text = re.sub(r'\bcapc\b', 'capacity', text)
    text = re.sub(r'\bcapacity\b', 'capacity', text)
    
    # Enhanced misspellings for indexes and positions
    text = re.sub(r'\bndx\b', 'index', text)
    text = re.sub(r'\bidx\b', 'index', text)
    text = re.sub(r'\bindx\b', 'index', text)
    text = re.sub(r'\bindices\b', 'indices', text)
    text = re.sub(r'\bindexes\b', 'indices', text)
    text = re.sub(r'\bindxs\b', 'indices', text)
    text = re.sub(r'\bpostn\b', 'position', text)
    text = re.sub(r'\bpos\b', 'position', text)
      # Common misspellings of data types - expanded
    text = re.sub(r'\bint?gr\b', 'integer', text)
    text = re.sub(r'\bintigr\b', 'integer', text)
    text = re.sub(r'\bintegr\b', 'integer', text)
    text = re.sub(r'\bints\b', 'integers', text)
    text = re.sub(r'\bintgrs\b', 'integers', text)
    
    text = re.sub(r'\bflt\b', 'float', text)
    text = re.sub(r'\bfl?ot\b', 'float', text)
    text = re.sub(r'\bfloats\b', 'floats', text)
    text = re.sub(r'\bflts\b', 'floats', text)
    
    text = re.sub(r'\bdbl\b', 'double', text)
    text = re.sub(r'\bdoubls\b', 'doubles', text)
    text = re.sub(r'\bdubble\b', 'double', text)
    
    text = re.sub(r'\bboln\b', 'boolean', text)
    text = re.sub(r'\bbool\b', 'boolean', text)
    text = re.sub(r'\bbolean\b', 'boolean', text)
    text = re.sub(r'\bbooleans\b', 'booleans', text)
    text = re.sub(r'\bbools\b', 'booleans', text)
    
    # Common misspellings of programming concepts - more comprehensive
    text = re.sub(r'\bfnc?tn?\b', 'function', text)
    text = re.sub(r'\bfunc\b', 'function', text)
    text = re.sub(r'\bfn\b', 'function', text)
    text = re.sub(r'\bfunction\b', 'function', text)
    text = re.sub(r'\bfunctions\b', 'functions', text)
    text = re.sub(r'\bfuncs\b', 'functions', text)
    text = re.sub(r'\bfns\b', 'functions', text)
    
    text = re.sub(r'\bmethod\b', 'method', text)
    text = re.sub(r'\bmthd\b', 'method', text)
    text = re.sub(r'\bmethods\b', 'methods', text)
    text = re.sub(r'\bmthds\b', 'methods', text)
    
    text = re.sub(r'\bclss?\b', 'class', text)
    text = re.sub(r'\bcls\b', 'class', text)
    text = re.sub(r'\bclasses\b', 'classes', text)
    text = re.sub(r'\bclsses\b', 'classes', text)
    
    text = re.sub(r'\bobj\b', 'object', text)
    text = re.sub(r'\bobject?s?\b', 'object', text)
    text = re.sub(r'\bobjects\b', 'objects', text)
    text = re.sub(r'\bobjs\b', 'objects', text)
    
    text = re.sub(r'\bva?ri?a?bl?e?s?\b', 'variable', text)
    text = re.sub(r'\bva?rs?\b', 'variable', text)
    text = re.sub(r'\bvariables\b', 'variables', text)
    text = re.sub(r'\bvars\b', 'variables', text)
    
    text = re.sub(r'\blop\b', 'loop', text)
    text = re.sub(r'\bloop?s?\b', 'loop', text)
    text = re.sub(r'\bloops\b', 'loops', text)
    
    text = re.sub(r'\bfr\b', 'for', text)
    text = re.sub(r'\bwhl\b', 'while', text)
    text = re.sub(r'\bif-?el?se?\b', 'if-else', text)
    text = re.sub(r'\bcndtn\b', 'condition', text)
    text = re.sub(r'\bcond\b', 'condition', text)
    text = re.sub(r'\bcondition\b', 'condition', text)
    text = re.sub(r'\bconditions\b', 'conditions', text)
    text = re.sub(r'\bconds\b', 'conditions', text)
    
    # Common misspellings of programming languages - expanded
    text = re.sub(r'\bpy?t?ho?n?\b', 'python', text)
    text = re.sub(r'\bpy\b', 'python', text)
    text = re.sub(r'\bpython\b', 'python', text)
    text = re.sub(r'\bpythonic\b', 'pythonic', text)
    
    text = re.sub(r'\bjva?\b', 'java', text)
    text = re.sub(r'\bjava\b', 'java', text)
    
    text = re.sub(r'\bjavscr?pt\b', 'javascript', text)
    text = re.sub(r'\bjs\b', 'javascript', text)
    text = re.sub(r'\bjavascript\b', 'javascript', text)
    
    text = re.sub(r'\bc\+\+\b', 'cpp', text)
    text = re.sub(r'\bcee\+\+\b', 'cpp', text)
    text = re.sub(r'\bcpp\b', 'cpp', text)
    
    text = re.sub(r'\bcsharp\b', 'c#', text)
    text = re.sub(r'\bc\#\b', 'c#', text)
    
    # Common misspellings of algorithm and computing terms - expanded list
    text = re.sub(r'\balgo\b', 'algorithm', text)
    text = re.sub(r'\balgo?r?i?t?h?m?s?\b', 'algorithm', text)
    text = re.sub(r'\balgrthm\b', 'algorithm', text)
    text = re.sub(r'\balgorithm\b', 'algorithm', text)
    text = re.sub(r'\balgorithms\b', 'algorithms', text)
    text = re.sub(r'\balgos\b', 'algorithms', text)
    
    text = re.sub(r'\bdb\b', 'database', text)
    text = re.sub(r'\bdata-?base?s?\b', 'database', text)
    text = re.sub(r'\bdatabase\b', 'database', text)
    text = re.sub(r'\bdatabases\b', 'databases', text)
    text = re.sub(r'\bdbs\b', 'databases', text)
    
    text = re.sub(r'\brecrsn\b', 'recursion', text)
    text = re.sub(r'\brecrsv\b', 'recursive', text)
    text = re.sub(r'\brecursion\b', 'recursion', text)
    text = re.sub(r'\brecursive\b', 'recursive', text)
    
    text = re.sub(r'\bitr?tv\b', 'iterative', text)
    text = re.sub(r'\biterative\b', 'iterative', text)
    text = re.sub(r'\biteration\b', 'iteration', text)
    text = re.sub(r'\biters\b', 'iterations', text)
    
    text = re.sub(r'\bdp\b', 'dynamic programming', text)
    text = re.sub(r'\bdynprog\b', 'dynamic programming', text)
    text = re.sub(r'\bdynamic-programming\b', 'dynamic programming', text)
    text = re.sub(r'\bdynamic programming\b', 'dynamic programming', text)
    
    text = re.sub(r'\bgreedy\b', 'greedy', text)
    text = re.sub(r'\bgrdy\b', 'greedy', text)
    
    text = re.sub(r'\bbigo\b', 'big o', text)
    text = re.sub(r'\bbig-o\b', 'big o', text)
    text = re.sub(r'\bbig o\b', 'big o', text)
    
    # Enhanced patterns for Big-O notation
    text = re.sub(r'\bo\(n\)\b', 'o(n)', text)
    text = re.sub(r'\bo\(1\)\b', 'o(1)', text)
    text = re.sub(r'\bo\(log ?n\)\b', 'o(log n)', text)
    text = re.sub(r'\bo\(n ?log ?n\)\b', 'o(n log n)', text)
    text = re.sub(r'\bo\(n\^2\)\b', 'o(n²)', text)
    text = re.sub(r'\bo\(n2\)\b', 'o(n²)', text)
    text = re.sub(r'\bo\(n\*\*2\)\b', 'o(n²)', text)
    text = re.sub(r'\bo\(n squared\)\b', 'o(n²)', text)
    text = re.sub(r'\bo\(n\^3\)\b', 'o(n³)', text)
    text = re.sub(r'\bo\(n3\)\b', 'o(n³)', text)
    text = re.sub(r'\bo\(n\*\*3\)\b', 'o(n³)', text)
    text = re.sub(r'\bo\(n cubed\)\b', 'o(n³)', text)
    text = re.sub(r'\bo\(2\^n\)\b', 'o(2^n)', text)
    text = re.sub(r'\bo\(2\*\*n\)\b', 'o(2^n)', text)
    text = re.sub(r'\bo\(n!\)\b', 'o(n!)', text)
    
    # Common misspellings of dictionary, set, and map terms - expanded
    text = re.sub(r'\bdict\b', 'dictionary', text)
    text = re.sub(r'\bdicto?n?a?r?y?\b', 'dictionary', text)
    text = re.sub(r'\bdct\b', 'dictionary', text)
    text = re.sub(r'\bdictionary\b', 'dictionary', text)
    text = re.sub(r'\bdictionaries\b', 'dictionaries', text)
    text = re.sub(r'\bdicts\b', 'dictionaries', text)
    
    text = re.sub(r'\bhshmp\b', 'hashmap', text)
    text = re.sub(r'\bhsht?bl\b', 'hashtable', text)
    text = re.sub(r'\bhash\s?table\b', 'hashtable', text)
    text = re.sub(r'\bhash-?set\b', 'hashset', text)
    text = re.sub(r'\bhshst\b', 'hashset', text)
    
    text = re.sub(r'\btpl\b', 'tuple', text)
    text = re.sub(r'\btup?l?e?s?\b', 'tuple', text)
    text = re.sub(r'\btuple\b', 'tuple', text)
    text = re.sub(r'\btuples\b', 'tuples', text)
    text = re.sub(r'\btpls\b', 'tuples', text)
    
    text = re.sub(r'\bst\b', 'stack', text)
    text = re.sub(r'\bstack?s?\b', 'stack', text)
    
    text = re.sub(r'\bset?s?\b', 'set', text)
    text = re.sub(r'\bset\b', 'set', text)
    text = re.sub(r'\bsets\b', 'sets', text)
    
    text = re.sub(r'\bmap?s?\b', 'map', text)
    text = re.sub(r'\bmap\b', 'map', text)
    text = re.sub(r'\bmaps\b', 'maps', text)
    
    # Common misspellings of graph and tree terms - expanded
    text = re.sub(r'\blinked?-?list?s?\b', 'linked list', text)
    text = re.sub(r'\bll\b', 'linked list', text)
    
    # Search and graph algorithm abbreviations
    text = re.sub(r'\bbfs\b', 'breadth first search', text)
    text = re.sub(r'\bdfs\b', 'depth first search', text)
    text = re.sub(r'\bbreadth-first\b', 'breadth first', text)
    text = re.sub(r'\bdepth-first\b', 'depth first', text)
    text = re.sub(r'\bbreadth first search\b', 'breadth first search', text)
    text = re.sub(r'\bdepth first search\b', 'depth first search', text)
    
    text = re.sub(r'\bdijks?tra\b', 'dijkstra', text)
    text = re.sub(r'\bdjkstra\b', 'dijkstra', text)
    text = re.sub(r'\bdijkstra\'?s?\b', 'dijkstra', text)
    text = re.sub(r'\bdijkstra algorithm\b', 'dijkstra algorithm', text)
    
    # Normalize verb forms - expanded
    # This is a simplified approach - in a production system you would use more comprehensive stemming/lemmatization
    text = re.sub(r'\bfinds\b', 'find', text)
    text = re.sub(r'\bfinding\b', 'find', text)
    text = re.sub(r'\bfound\b', 'find', text)
    
    text = re.sub(r'\bsearches\b', 'search', text)
    text = re.sub(r'\bsearching\b', 'search', text)
    text = re.sub(r'\bsearched\b', 'search', text)
    
    text = re.sub(r'\bgets\b', 'get', text)
    text = re.sub(r'\bgetting\b', 'get', text)
    text = re.sub(r'\bgot\b', 'get', text)
    
    text = re.sub(r'\bdetermines\b', 'determine', text)
    text = re.sub(r'\bdetermining\b', 'determine', text)
    text = re.sub(r'\bdetermined\b', 'determine', text)
    
    text = re.sub(r'\bcalculates\b', 'calculate', text)
    text = re.sub(r'\bcalculating\b', 'calculate', text)
    text = re.sub(r'\bcalculated\b', 'calculate', text)
    
    text = re.sub(r'\bimplements\b', 'implement', text)
    text = re.sub(r'\bimplementing\b', 'implement', text)
    text = re.sub(r'\bimplemented\b', 'implement', text)
    
    text = re.sub(r'\bexecutes\b', 'execute', text)
    text = re.sub(r'\bexecuting\b', 'execute', text)
    text = re.sub(r'\bexecuted\b', 'execute', text)
    
    text = re.sub(r'\boptimizes\b', 'optimize', text)
    text = re.sub(r'\boptimizing\b', 'optimize', text)
    text = re.sub(r'\boptimized\b', 'optimize', text)
    
    text = re.sub(r'\bsorts\b', 'sort', text)
    text = re.sub(r'\bsorting\b', 'sort', text)
    text = re.sub(r'\bsorted\b', 'sort', text)
    
    text = re.sub(r'\bcreates\b', 'create', text)
    text = re.sub(r'\bcreating\b', 'create', text)
    text = re.sub(r'\bcreated\b', 'create', text)
    
    text = re.sub(r'\binserts\b', 'insert', text)
    text = re.sub(r'\binserting\b', 'insert', text)
    text = re.sub(r'\binserted\b', 'insert', text)
    
    text = re.sub(r'\bdeletes\b', 'delete', text)
    text = re.sub(r'\bdeleting\b', 'delete', text)
    text = re.sub(r'\bdeleted\b', 'delete', text)
    
    text = re.sub(r'\bupdates\b', 'update', text)
    text = re.sub(r'\bupdating\b', 'update', text)
    text = re.sub(r'\bupdated\b', 'update', text)
    
    text = re.sub(r'\bremoves\b', 'remove', text)
    text = re.sub(r'\bremoving\b', 'remove', text)
    text = re.sub(r'\bremoved\b', 'remove', text)
    
    # Normalize plurals for technical terms to improve term matching - expanded
    text = re.sub(r'\barrays\b', 'array', text)
    text = re.sub(r'\bstrings\b', 'string', text)
    text = re.sub(r'\bsizes\b', 'size', text)
    text = re.sub(r'\blengths\b', 'length', text)
    text = re.sub(r'\bfunctions\b', 'function', text)
    text = re.sub(r'\bvariables\b', 'variable', text)
    text = re.sub(r'\bclasses\b', 'class', text)
    text = re.sub(r'\bmethods\b', 'method', text)
    text = re.sub(r'\bobjects\b', 'object', text)
    text = re.sub(r'\balgorithms\b', 'algorithm', text)
    text = re.sub(r'\bdatabases\b', 'database', text)
    text = re.sub(r'\bqueues\b', 'queue', text)
    text = re.sub(r'\bstacks\b', 'stack', text)
    text = re.sub(r'\btrees\b', 'tree', text)
    text = re.sub(r'\bgraphs\b', 'graph', text)
    text = re.sub(r'\bsets\b', 'set', text)
    text = re.sub(r'\bmaps\b', 'map', text)
    text = re.sub(r'\bheaps\b', 'heap', text)
    text = re.sub(r'\bdictionaries\b', 'dictionary', text)
    text = re.sub(r'\btuples\b', 'tuple', text)
    text = re.sub(r'\bindices\b', 'index', text)
    text = re.sub(r'\bindexes\b', 'index', text)
    text = re.sub(r'\bvertices\b', 'vertex', text)
    text = re.sub(r'\bnodes\b', 'node', text)
    text = re.sub(r'\bedges\b', 'edge', text)
    text = re.sub(r'\bvalues\b', 'value', text)
    text = re.sub(r'\bkeys\b', 'key', text)
    text = re.sub(r'\bpairs\b', 'pair', text)
    text = re.sub(r'\belements\b', 'element', text)
    text = re.sub(r'\bitems\b', 'item', text)
    text = re.sub(r'\boperations\b', 'operation', text)
    text = re.sub(r'\btechniques\b', 'technique', text)
    text = re.sub(r'\bpatterns\b', 'pattern', text)
    text = re.sub(r'\bstructures\b', 'structure', text)
    text = re.sub(r'\bproblems\b', 'problem', text)
    text = re.sub(r'\bsolutions\b', 'solution', text)    # Spell check for specific technical context - enhanced with more variants
    # If multiple technical words appear together with typos, try to identify the context
    if re.search(r'\b(how|to|find|get|calculate|determine|know|check|what|is|the|size|length|of|array|arrays|list|string)\b', text, re.IGNORECASE):
        # This seems to be about finding array/string size/length
        if any(word in text.lower() for word in ['arry', 'aray', 'arays', 'arrys', 'arraus', 'arrauys', 'arrayus', 'arayus', 'arryus']):
            text = re.sub(r'\b(arry|aray|arays|arrys|arraus|arrauys|arrayus|arayus|arryus)\b', 'array', text, flags=re.IGNORECASE)
        if any(word in text.lower() for word in ['siz', 'sze', 'sizes', 'syz', 'zize', 'sise']):
            text = re.sub(r'\b(siz|sze|sizes|syz|zize|sise)\b', 'size', text, flags=re.IGNORECASE)
        if any(word in text.lower() for word in ['fnd', 'fend', 'fint', 'fined', 'finnd']):
            text = re.sub(r'\b(fnd|fend|fint|fined|finnd)\b', 'find', text, flags=re.IGNORECASE)
        if any(word in text.lower() for word in ['leng', 'lnth', 'lenght', 'lengt', 'lenghs']):
            text = re.sub(r'\b(leng|lnth|lenght|lengt|lenghs)\b', 'length', text, flags=re.IGNORECASE)
    
    # Context for sorting and searching - expanded
    if re.search(r'\b(how|to|perform|implement|execute|code|write|sorting|algorithm|array|list)\b', text, re.IGNORECASE):
        if any(word in text.lower() for word in ['bubl', 'bobble', 'bouble', 'bubble-sort', 'bubsort']):
            text = re.sub(r'\b(bubl|bobble|bouble|bubble-sort|bubsort)(\s?sort)?\b', 'bubble sort', text, flags=re.IGNORECASE)
        if any(word in text.lower() for word in ['merj', 'merg', 'merge-sort', 'mrg', 'mrgsort']):
            text = re.sub(r'\b(merj|merg|merge-sort|mrg|mrgsort)(\s?sort)?\b', 'merge sort', text, flags=re.IGNORECASE)
        if any(word in text.lower() for word in ['qik', 'quik', 'quic', 'quick-sort', 'qsort', 'qcksort']):
            text = re.sub(r'\b(qik|quik|quic|quick-sort|qsort|qcksort)(\s?sort)?\b', 'quick sort', text, flags=re.IGNORECASE)
        if any(word in text.lower() for word in ['heap-sort', 'heapsort', 'heep', 'heapsrt']):
            text = re.sub(r'\b(heap-sort|heapsort|heep|heapsrt)(\s?sort)?\b', 'heap sort', text, flags=re.IGNORECASE)
        if any(word in text.lower() for word in ['insrtn', 'insertion-sort', 'insrt']):
            text = re.sub(r'\b(insrtn|insertion-sort|insrt)(\s?sort)?\b', 'insertion sort', text, flags=re.IGNORECASE)
        if any(word in text.lower() for word in ['srt', 'sourt', 'sorrt', 'srting']):
            text = re.sub(r'\b(srt|sourt|sorrt|srting)\b', 'sort', text, flags=re.IGNORECASE)
        if any(word in text.lower() for word in ['serch', 'srch', 'searsh', 'serching']):
            text = re.sub(r'\b(serch|srch|searsh|serching)\b', 'search', text, flags=re.IGNORECASE)
    
    # Context for data structures - expanded
    if re.search(r'\b(how|to|implement|use|create|initialize|define|declare)\b', text, re.IGNORECASE):
        if any(word in text.lower() for word in ['lnkd', 'linkd', 'linkd-list', 'lnk-lst', 'linked-list', 'lnkdlist']):
            text = re.sub(r'\b(lnkd|linkd|linkd-list|lnk-lst|linked-list|lnkdlist)\b', 'linked list', text, flags=re.IGNORECASE)
        if any(word in text.lower() for word in ['bin-tree', 'binary-tree', 'bin tree', 'bintree', 'binarytree']):
            text = re.sub(r'\b(bin-tree|binary-tree|bin tree|bintree|binarytree)\b', 'binary tree', text, flags=re.IGNORECASE)
        if any(word in text.lower() for word in ['grph', 'grf', 'graff', 'graphh']):
            text = re.sub(r'\b(grph|grf|graff|graphh)\b', 'graph', text, flags=re.IGNORECASE)
        if any(word in text.lower() for word in ['hasht', 'hashtbl', 'hash-table', 'hashmap', 'hash-map']):
            text = re.sub(r'\b(hasht|hashtbl|hash-table)\b', 'hashtable', text, flags=re.IGNORECASE)
            text = re.sub(r'\b(hashmap|hash-map)\b', 'hashmap', text, flags=re.IGNORECASE)
    
    # Context for algorithms and complexity - expanded
    if re.search(r'\b(time|space|complexity|performance|efficiency|runtime|big-o|big o)\b', text, re.IGNORECASE):
        if any(word in text.lower() for word in ['o(n)', 'o-n', 'linear', 'linear-time']):
            text = re.sub(r'\b(o-n|linear-time)\b', 'o(n)', text, flags=re.IGNORECASE)
        if any(word in text.lower() for word in ['o(1)', 'o-1', 'constant', 'constant-time']):
            text = re.sub(r'\b(o-1|constant-time)\b', 'o(1)', text, flags=re.IGNORECASE)
        if any(word in text.lower() for word in ['o(log n)', 'o(logn)', 'o-log-n', 'logarithmic']):
            text = re.sub(r'\b(o\(logn\)|o-log-n|logarithmic-time)\b', 'o(log n)', text, flags=re.IGNORECASE)
        if any(word in text.lower() for word in ['o(n log n)', 'o(nlogn)', 'o-n-log-n', 'linearithmic']):
            text = re.sub(r'\b(o\(nlogn\)|o-n-log-n|linearithmic-time)\b', 'o(n log n)', text, flags=re.IGNORECASE)
        if any(word in text.lower() for word in ['o(n^2)', 'o(n2)', 'o-n-squared', 'quadratic']):
            text = re.sub(r'\b(o\(n2\)|o-n-squared|quadratic-time)\b', 'o(n^2)', text, flags=re.IGNORECASE)
        if any(word in text.lower() for word in ['complexty', 'complxity', 'cplxty', 'time-cmplx']):
            text = re.sub(r'\b(complexty|complxity|cplxty|time-cmplx)\b', 'complexity', text, flags=re.IGNORECASE)
    
    # Remove repeated characters (e.g., "hellooo" -> "hello") - improved with better pattern
    text = re.sub(r'([a-zA-Z])\1{2,}', r'\1\1', text)
    
    return text

# Function to extract entities using the multilingual model when available
def extract_entities(text, lang_info):
    primary_lang, lang_blocks = lang_info
    
    # For Hinglish, translate first for better entity recognition
    if primary_lang == "hi-en":
        translated_text = translate_romanized_hindi(text)
        
        # Try using the multilingual model
        try:
            if 'ner_pipeline' in globals():
                ner_results = ner_pipeline(translated_text)
                entities = []
                for entity in ner_results:
                    entities.append({
                        "text": entity["word"],
                        "label": entity["entity"],
                        "score": entity.get("score", 1.0)
                    })
                return entities
        except:
            pass  # Fall back to SpaCy
        
        # Use SpaCy
        doc = nlp_en(translated_text)
        entities = []
        for ent in doc.ents:
            entities.append({
                "text": ent.text,
                "label": ent.label_,
                "lang": "en"
            })
        
        # Also detect technical terms
        tech_terms = detect_technical_terms(text)
        for term in tech_terms:
            entities.append({
                "text": term['term'],
                "label": "TECH_TERM",
                "category": term['category'],
                "lang": "en"
            })
        
        return entities
    
    # Process with standard approach for other languages
    all_entities = []
    
    # Try using the multilingual model first
    try:
        if 'ner_pipeline' in globals():
            ner_results = ner_pipeline(text)
            for entity in ner_results:
                all_entities.append({
                    "text": entity["word"],
                    "label": entity["entity"],
                    "score": entity.get("score", 1.0)
                })
            return all_entities
    except:
        pass  # Fall back to SpaCy if the pipeline fails
    
    # Process each language block with appropriate models
    for block in lang_blocks:
        block_text = block["text"]
        
        # For now, we'll use the English model for all languages
        # In a production system, you would load language-specific models
        doc = nlp_en(block_text)
        
        for ent in doc.ents:
            all_entities.append({
                "text": ent.text,
                "label": ent.label_,
                "lang": block["lang"]
            })
    
    # Also detect technical terms
    tech_terms = detect_technical_terms(text)
    for term in tech_terms:
        all_entities.append({
            "text": term['term'],
            "label": "TECH_TERM",
            "category": term['category'],
            "lang": "en"
        })
    
    return all_entities

# Function to extract keywords from mixed language text
def extract_keywords(text, lang_info):
    primary_lang, lang_blocks = lang_info
    
    # First check for technical terms - these are high priority keywords
    tech_terms = detect_technical_terms(text.lower())
    tech_keywords = []
    
    for term in tech_terms:
        tech_keywords.append({
            "text": term['term'],
            "pos": "TECH_TERM",
            "lang": "en",
            "is_technical": True,
            "category": term['category']
        })
    
    # Extract verbs from how-to patterns
    how_to_pattern = re.search(r'how\s+to\s+(\w+)', text.lower())
    if how_to_pattern:
        action_verb = how_to_pattern.group(1)
        if action_verb not in [term['term'] for term in tech_terms]:
            tech_keywords.append({
                "text": action_verb,
                "pos": "VERB",
                "lang": "en",
                "is_action": True
            })
    
    # For Hinglish, translate first for better keyword extraction
    if primary_lang == "hi-en":
        translated_text = translate_romanized_hindi(text)
        
        # Use SpaCy on the translated text
        doc = nlp_en(translated_text)
        
        keywords = []
        for token in doc:
            # Extract important words (nouns, verbs, adjectives)
            if token.pos_ in ["NOUN", "VERB", "ADJ", "PROPN"] and not token.is_stop:
                keywords.append({
                    "text": token.text.lower(),
                    "pos": token.pos_,
                    "lang": "en"
                })
        
        # Also detect technical terms
        tech_terms = detect_technical_terms(text)
        for term in tech_terms:
            keywords.append({
                "text": term['term'],
                "pos": "NOUN",  # Assume tech terms are nouns
                "lang": "en",
                "is_technical": True,
                "category": term['category']
            })
        
        # Return unique keywords
        unique_keywords = []
        seen = set()
        
        for kw in keywords:
            if kw["text"] not in seen:
                seen.add(kw["text"])
                unique_keywords.append(kw)
        
        return unique_keywords
    
    # Standard approach for other languages
    all_keywords = []
    
    for block in lang_blocks:
        block_text = block["text"]
        
        # Use SpaCy for all languages (not ideal but practical)
        doc = nlp_en(block_text)
        
        for token in doc:
            # Extract important words (nouns, verbs, adjectives)
            if token.pos_ in ["NOUN", "VERB", "ADJ", "PROPN"] and not token.is_stop:
                all_keywords.append({
                    "text": token.text.lower(),
                    "pos": token.pos_,
                    "lang": block["lang"]
                })
    
    # Also detect technical terms
    tech_terms = detect_technical_terms(text)
    for term in tech_terms:
        all_keywords.append({
            "text": term['term'],
            "pos": "NOUN",  # Assume tech terms are nouns
            "lang": "en",
            "is_technical": True,
            "category": term['category']
        })
    
    # Return unique keywords
    unique_keywords = []
    seen = set()
    
    for kw in all_keywords:
        if kw["text"] not in seen:
            seen.add(kw["text"])
            unique_keywords.append(kw)
    
    return unique_keywords

# Function to identify question type across languages including Romanized Hindi
def identify_question_type(text, lang_info):
    primary_lang, _ = lang_info
    text_lower = text.lower()
    
    # Check for technical how-to pattern first (high priority)
    how_to_pattern = re.search(r'how\s+to\s+(\w+)', text_lower)
    if how_to_pattern:
        action_verb = how_to_pattern.group(1)
        
        # Check if the verb is related to finding or determining
        if action_verb in ['find', 'get', 'determine', 'calculate', 'compute', 'check', 'know']:
            # Look for technical terms that might be the target
            tech_terms = detect_technical_terms(text_lower)
            if tech_terms:
                if any(term["term"] in ["size", "length", "array", "string"] for term in tech_terms):
                    return "size_query"
                elif any(term["term"] in ["error", "bug", "fix"] for term in tech_terms):
                    return "error_query"
            return "method_query"
    
    # For Hinglish, check both Hindi and English question markers
    if primary_lang == "hi-en":
        # Translate and check the English version
        translated_text = translate_romanized_hindi(text_lower)
        
        # Hindi question markers (romanized)
        if any(word in text_lower.split() for word in ["kya", "kaise", "kaun", "kab", "kahan", "kyun", "kitna", "kitne"]):
            # Check specific question types
            if "kaise" in text_lower:
                return "process"
            elif "kyun" in text_lower:
                return "reason"
            elif "kab" in text_lower:
                return "time"
            elif "kahan" in text_lower:
                return "location"
            elif "kaun" in text_lower:
                return "person"
            elif "kitna" in text_lower or "kitne" in text_lower:
                return "quantity"
            else:
                return "definition"
        
        # Check the translated English text for question markers
        if any(word in translated_text.split() for word in ["what", "what's", "whats"]):
            return "definition"
        elif any(word in translated_text.split() for word in ["how", "how's", "hows"]):
            return "process"
        elif any(word in translated_text.split() for word in ["why", "why's", "whys"]):
            return "reason"
        elif any(word in translated_text.split() for word in ["when", "when's", "whens"]):
            return "time"
        elif any(word in translated_text.split() for word in ["where", "where's", "wheres"]):
            return "location"
        elif any(word in translated_text.split() for word in ["who", "who's", "whos"]):
            return "person"
        
        # Technical question indicators
        tech_terms = detect_technical_terms(text_lower)
        if tech_terms:
            if any(term["term"] in ["size", "length"] for term in tech_terms):
                return "size_query"
            elif any(term["term"] in ["how", "method", "function"] for term in tech_terms):
                return "method_query"
            elif any(term["term"] in ["error", "bug", "fix"] for term in tech_terms):
                return "error_query"
            elif any(term["term"] in ["difference", "vs", "versus", "compare"] for term in tech_terms):
                return "comparison"
            elif any(term["term"] in ["example", "sample", "instance"] for term in tech_terms):
                return "example"
            else:
                return "technical_query"
        
        # Default for Hinglish
        return "definition"
    
    # English question words
    if primary_lang == "en" or any(word in text_lower.split() for word in ["what", "what's", "whats"]):
        return "definition"
    elif any(word in text_lower.split() for word in ["how", "how's", "hows"]):
        return "process"
    elif any(word in text_lower.split() for word in ["why", "why's", "whys"]):
        return "reason"
    elif any(word in text_lower.split() for word in ["when", "when's", "whens"]):
        return "time"
    elif any(word in text_lower.split() for word in ["where", "where's", "wheres"]):
        return "location"
    elif any(word in text_lower.split() for word in ["who", "who's", "whos"]):
        return "person"
    
    # Spanish question words
    elif primary_lang == "es" or any(word in text_lower.split() for word in ["qué", "que", "cuál", "cual"]):
        return "definition"
    elif any(word in text_lower.split() for word in ["cómo", "como"]):
        return "process"
    elif any(word in text_lower.split() for word in ["por qué", "por que", "porqué", "porque"]):
        return "reason"
    elif any(word in text_lower.split() for word in ["cuándo", "cuando"]):
        return "time"
    elif any(word in text_lower.split() for word in ["dónde", "donde"]):
        return "location"
    elif any(word in text_lower.split() for word in ["quién", "quien"]):
        return "person"
    
    # Hindi question words (in Devanagari)
    elif primary_lang == "hi" or any(word in text_lower.split() for word in ["क्या", "कौन", "क्यों"]):
        if "कैसे" in text_lower:
            return "process"
        elif "क्यों" in text_lower:
            return "reason"
        elif "कब" in text_lower:
            return "time"
        elif "कहां" in text_lower:
            return "location"
        elif "कौन" in text_lower:
            return "person"
        else:
            return "definition"
    
    # Check for keywords in any language
    elif "example" in text_lower or "instance" in text_lower or "ejemplo" in text_lower or "उदाहरण" in text_lower:
        return "example"
    elif "difference" in text_lower or "compare" in text_lower or "diferencia" in text_lower or "अंतर" in text_lower:
        return "comparison"
    else:
        return "other"

# Extract the main intent from the question with support for technical queries
def extract_intent(text, keywords, lang_info):
    primary_lang, _ = lang_info
    
    # Check for "how to" pattern which is almost always a question even without question mark
    if re.search(r'how\s+to', text.lower()):
        return "question"
    
    # For Hinglish, translate to English for better intent detection
    if primary_lang == "hi-en":
        translated_text = translate_romanized_hindi(text)
        
        # Check if there's a specific intent classifier
        try:
            if 'intent_classifier' in globals():
                intents = ["question", "request", "command", "statement"]
                result = intent_classifier(translated_text, intents)
                return result["labels"][0]
        except:
            pass
        
        # Check for technical intents
        tech_terms = detect_technical_terms(text)
        if tech_terms:
            # Extract tech categories
            categories = [term["category"] for term in tech_terms]
            
            if "?" in text:
                if any(cat in ["data structure", "data type"] for cat in categories):
                    return "technical_question"
                else:
                    return "question"
            elif any(cat in ["programming concept", "computing concept"] for cat in categories):
                return "concept_question"
            else:
                return "technical_query"
        
        # Simple rule-based fallback
        if "?" in text:
            return "question"
        elif any(word in translated_text.lower() for word in ["please", "can you", "could you", "pls", "plz"]):
            return "request"
        elif translated_text.strip().endswith("!") or any(word == translated_text.lower().split()[0] for word in ["do", "go", "find", "tell", "show"]):
            return "command"
        else:
            return "statement"
    
    # Standard approach for other languages
    # Extract main keywords (first 3)
    main_keywords = [k["text"] for k in keywords[:3] if "text" in k]
    
    # Check if there's a specific intent classifier
    try:
        if 'intent_classifier' in globals():
            intents = ["question", "request", "command", "statement"]
            result = intent_classifier(text, intents)
            return result["labels"][0]
    except:
        pass    
    # Check for technical intents
    tech_terms = detect_technical_terms(text)
    if tech_terms:
        # Extract tech categories
        categories = [term["category"] for term in tech_terms]
        
        if "?" in text:
            if any(cat in ["data structure", "data type"] for cat in categories):
                return "technical_question"
            else:
                return "question"
        elif any(cat in ["programming concept", "computing concept"] for cat in categories):
            return "concept_question"
        else:
            return "technical_query"
    
    # Simple rule-based fallback
    if "?" in text:
        return "question"
    elif any(word in text.lower() for word in ["please", "can you", "could you", "pls", "plz"]):
        return "request"
    elif text.strip().endswith("!") or any(word == text.lower().split()[0] for word in ["do", "go", "find", "tell", "show"]):
        return "command"
    else:
        return "statement"

# Rank keywords by importance based on their role in the question with advanced scoring
def rank_keywords(keywords, question_type, entities, text):
    """
    Ranks keywords by importance for understanding the question's intent with advanced scoring logic.
    Uses multiple weighted factors:
    1. Technical relevance and category
    2. Grammatical role in the question
    3. Match quality (exact vs fuzzy)
    4. Position in the question
    5. Relationship to other keywords
    6. Question context and type relevance
    
    Returns keywords with detailed scoring and ranking information.
    """
    ranked_keywords = []
    
    # First pass - assign base scores with more detailed weights
    for kw in keywords:
        score = 50  # Base score
        
        # Technical terms are most important - with finer category distinctions
        if kw.get('is_technical', False):
            score += 30
            
            # Detailed category weighting
            category = kw.get('category', '')
            if category == 'data structure':
                score += 25  # Data structures are usually the main subject
            elif category == 'algorithm':
                score += 22  # Algorithms are very important
            elif category == 'property':
                score += 20  # Properties like size/length are usually what we're asking about
            elif category == 'operation':
                score += 18  # Operations tell us what action to perform
            elif category == 'programming concept':
                score += 15  # Programming concepts provide important context
            elif category == 'data type':
                score += 12  # Data types provide context
            elif category == 'computing concept':
                score += 10  # General computing concepts
            
            # Consider match quality (exact vs fuzzy)
            match_type = kw.get('match_type', '')
            if match_type == 'exact' or match_type == 'exact_compound':
                score += 10  # Exact matches are most reliable
            elif match_type == 'fuzzy':
                score += 5   # Fuzzy matches are good
            elif match_type == 'levenshtein':
                score += 3   # Levenshtein matches are less reliable but still valuable
                # Adjust based on distance
                if 'distance' in kw:
                    score -= min(kw['distance'] * 2, 6)  # Penalty based on distance
        
        # Part of speech affects importance - with more nuanced weights
        if kw.get('pos') == 'NOUN' or kw.get('pos') == 'PROPN':
            score += 15  # Nouns are usually the subject
            # Check if it appears to be the main subject of the question
            if re.search(r'\b(what|how|when|where|why|which).+\b' + re.escape(kw['text']), text.lower()):
                score += 10  # Direct subject of question gets higher score
        elif kw.get('pos') == 'VERB':
            score += 12  # Verbs define the action
            if kw.get('is_action', False):
                score += 18  # Main action verbs are very important
            # Check if it's a key operation
            if kw['text'] in ['find', 'search', 'sort', 'implement', 'create', 'insert', 'delete', 'update']:
                score += 8  # Important operations get extra weight
        elif kw.get('pos') == 'ADJ':
            score += 6  # Adjectives provide context
            # Check if it's a qualifying adjective for a technical term
            if kw['text'] in ['binary', 'sorted', 'balanced', 'efficient', 'recursive', 'iterative']:
                score += 8  # Technical adjectives are more important
        
        # If the term was inferred rather than explicit, reduce its score slightly
        if kw.get('inferred', False):
            score -= 8
        
        # Consider confidence if available
        if 'confidence' in kw:
            score *= kw['confidence']  # Scale by confidence level
        
        kw['importance_score'] = score
        ranked_keywords.append(kw)
    
    # Second pass - adjust based on question type with more detailed adjustments
    for kw in ranked_keywords:
        # For size queries, size/length keywords are more important
        if question_type == 'size_query':
            if kw.get('category') == 'property' and kw['text'] in ['size', 'length', 'count', 'capacity']:
                kw['importance_score'] += 25
                kw['relevance_boost'] = 'size_property'
            if kw.get('category') == 'data structure':
                kw['importance_score'] += 20  # The data structure is important in size queries
                kw['relevance_boost'] = 'size_structure'
            if kw['text'] in ['find', 'get', 'determine', 'calculate', 'compute']:
                kw['importance_score'] += 15  # Action verbs for size queries
                kw['relevance_boost'] = 'size_verb'
        
        # For method queries, the action verb is most important
        elif question_type == 'method_query':
            if kw.get('is_action', False) or kw.get('pos') == 'VERB':
                kw['importance_score'] += 25
                kw['relevance_boost'] = 'method_verb'
            if kw.get('category') == 'algorithm':
                kw['importance_score'] += 22  # Algorithms are important in method queries
                kw['relevance_boost'] = 'method_algorithm'
            if kw.get('category') == 'data structure':
                kw['importance_score'] += 18  # Data structures to operate on
                kw['relevance_boost'] = 'method_structure'
            if kw['text'] in ['implement', 'create', 'write', 'code', 'develop', 'build']:
                kw['importance_score'] += 20  # Implementation verbs
                kw['relevance_boost'] = 'implementation_verb'
        
        # For definition queries, the noun is most important
        elif question_type == 'definition':
            if kw.get('pos') == 'NOUN' or kw.get('pos') == 'PROPN':
                kw['importance_score'] += 25
                kw['relevance_boost'] = 'definition_noun'
            if kw.get('category') in ['data structure', 'algorithm', 'programming concept']:
                kw['importance_score'] += 22  # Technical terms being defined
                kw['relevance_boost'] = 'definition_term'
            if kw['text'] in ['what', 'is', 'define', 'explain', 'mean']:
                kw['importance_score'] += 15  # Definition verbs/markers
                kw['relevance_boost'] = 'definition_marker'
        
        # For comparison queries, the terms being compared are most important
        elif question_type == 'comparison':
            if kw.get('pos') == 'NOUN' or kw.get('pos') == 'PROPN':
                kw['importance_score'] += 22
                kw['relevance_boost'] = 'comparison_noun'
            if kw.get('category') in ['data structure', 'algorithm']:
                kw['importance_score'] += 25  # Technical terms being compared
                kw['relevance_boost'] = 'comparison_term'
            if kw['text'] in ['difference', 'compare', 'versus', 'vs', 'better', 'faster', 'efficient']:
                kw['importance_score'] += 20  # Comparison markers
                kw['relevance_boost'] = 'comparison_marker'
        
        # For error queries, error-related terms are most important
        elif question_type == 'error_query':
            if kw['text'] in ['error', 'bug', 'fix', 'issue', 'problem', 'crash', 'exception', 'fail']:
                kw['importance_score'] += 25
                kw['relevance_boost'] = 'error_term'
            if kw.get('category') in ['data structure', 'algorithm', 'programming concept']:
                kw['importance_score'] += 20  # Technical context of error
                kw['relevance_boost'] = 'error_context'
            if kw['text'] in ['solve', 'resolve', 'fix', 'debug', 'correct']:
                kw['importance_score'] += 18  # Error resolution verbs
                kw['relevance_boost'] = 'error_action'
        
        # For example queries, the term we want examples of is most important
        elif question_type == 'example':
            if kw.get('pos') == 'NOUN' or kw.get('pos') == 'PROPN':
                kw['importance_score'] += 20
                kw['relevance_boost'] = 'example_noun'
            if kw.get('category') in ['data structure', 'algorithm', 'programming concept']:
                kw['importance_score'] += 25  # Technical terms to exemplify
                kw['relevance_boost'] = 'example_term'
            if kw['text'] in ['example', 'sample', 'instance', 'show', 'illustrate', 'demonstrate']:
                kw['importance_score'] += 18  # Example request markers
                kw['relevance_boost'] = 'example_marker'
        
        # For technical queries not fitting above categories
        elif question_type == 'technical_query':
            if kw.get('category') in ['data structure', 'algorithm']:
                kw['importance_score'] += 25  # Core technical elements
                kw['relevance_boost'] = 'technical_core'
            if kw.get('category') in ['programming concept', 'computing concept']:
                kw['importance_score'] += 20  # Technical concepts
                kw['relevance_boost'] = 'technical_concept'
            if kw.get('pos') == 'VERB':
                kw['importance_score'] += 15  # Actions in technical context
                kw['relevance_boost'] = 'technical_action'
    
    # Third pass - adjust based on position in text with more precise positioning logic
    words = text.lower().split()
    for kw in ranked_keywords:
        # Find position of keyword in text
        try:
            position = words.index(kw['text'].lower())
            
            # Words near the beginning are often more important in questions (more weight)
            position_score = 18 * (1 - (position / len(words)))
            kw['importance_score'] += position_score
            kw['position_score'] = position_score
            
            # Words in the middle are often the subject in "how to X the Y" questions
            middle_position = len(words) / 2
            distance_from_middle = abs(position - middle_position)
            middle_score = 12 * (1 - (distance_from_middle / middle_position))
            kw['importance_score'] += middle_score
            kw['middle_score'] = middle_score
            
            # Special bonus for words right after question markers
            for i, word in enumerate(words):
                if word in ['how', 'what', 'when', 'where', 'why', 'which'] and i < len(words) - 2:
                    # If our keyword is right after a question word, big boost
                    if position == i + 1 or position == i + 2:
                        kw['importance_score'] += 20
                        kw['question_marker_bonus'] = True
                        break
        except ValueError:
            # If the word isn't found directly (might be part of a phrase)
            for i, word in enumerate(words):
                if kw['text'].lower() in word:
                    position = i
                    position_score = 12 * (1 - (position / len(words)))
                    kw['importance_score'] += position_score
                    kw['position_score'] = position_score
                    break
    
    # Fourth pass - adjust based on relationship to entities with more nuanced entity relationships
    for kw in ranked_keywords:
        # If the keyword is also an entity, it's likely important
        for entity in entities:
            if kw['text'].lower() == entity.get('text', '').lower():
                kw['importance_score'] += 15
                kw['entity_match'] = True
                
                # If it's a technical term entity, even more important
                if entity.get('label') == 'TECH_TERM':
                    kw['importance_score'] += 20
                    kw['tech_entity_match'] = True
                
                # Consider entity category if available
                entity_category = entity.get('category', '')
                if entity_category:
                    if entity_category == 'data structure':
                        kw['importance_score'] += 10  # Data structure entities
                    elif entity_category == 'algorithm':
                        kw['importance_score'] += 8   # Algorithm entities
    
    # Fifth pass - analyze keyword relationships to each other
    # Group related keywords and boost their scores
    keyword_groups = {}
    for kw in ranked_keywords:
        # Group by category
        category = kw.get('category', 'unknown')
        if category not in keyword_groups:
            keyword_groups[category] = []
        keyword_groups[category].append(kw)
    
    # Boost scores for keywords in well-represented categories
    for category, group in keyword_groups.items():
        if len(group) >= 2:  # If multiple keywords of same category
            for kw in group:
                kw['importance_score'] += 8  # Boost for being part of a coherent group
                kw['group_boost'] = True
    
    # Sort by importance score
    ranked_keywords.sort(key=lambda x: x['importance_score'], reverse=True)
    
    # Assign ranks
    for i, kw in enumerate(ranked_keywords):
        kw['rank'] = i + 1
    
    return ranked_keywords

# Main function to analyze a question with mixed languages and improper grammar
def analyze_question(question):
    """
    Analyzes a question to understand its intent, context, and important keywords.
    Handles mixed languages, improper grammar, and technical terminology.
    Returns a comprehensive analysis of the question.
    """
    print(f"Analyzing question: {question}")
    
    # Step 1: Clean up text and fix grammar/spelling
    normalized_text = normalize_text(question)
    print(f"Normalized text: {normalized_text}")
    
    # Step 2: Identify languages used in the question
    lang_info = detect_languages(normalized_text)
    primary_lang, lang_blocks = lang_info
    
    print(f"Primary language: {primary_lang}")
    print(f"Language blocks: {len(lang_blocks)}")
    for block in lang_blocks:
        print(f"  - {block['lang']}: {block['text']}")
    
    # Step 3: For Hinglish (Hindi written in English), translate to proper English
    if primary_lang == "hi-en":
        translated_text = translate_romanized_hindi(normalized_text)
        print(f"Translated text: {translated_text}")
    
    # Step 4: Tokenize the text for processing
    tokens = preprocess_text(normalized_text, lang_info)
    print(f"Preprocessed tokens: {tokens}")
    
    # Step 5: Extract entities (people, places, organizations, technical terms)
    entities = extract_entities(normalized_text, lang_info)
    print(f"Extracted entities: {entities}")
    
    # Step 6: Extract important keywords from the question
    keywords = extract_keywords(normalized_text, lang_info)
    print(f"Extracted keywords: {keywords}")
    
    # Step 7: Identify technical terminology
    tech_terms = detect_technical_terms(normalized_text)
    print(f"Technical terms: {tech_terms}")
    
    # Step 8: Determine question type (definition, how-to, comparison, etc.)
    question_type = identify_question_type(normalized_text, lang_info)
    print(f"Question type: {question_type}")
    
    # Step 9: Determine user intent (question, command, request)
    intent = extract_intent(normalized_text, keywords, lang_info)
    print(f"Intent: {intent}")
    
    # Step 10: Rank keywords by importance to understand question focus
    ranked_keywords = rank_keywords(keywords, question_type, entities, normalized_text)
    print(f"Ranked keywords: {ranked_keywords}")
    
    # Step 11: Compile all analysis into a structured result
    return {
        "original_question": question,
        "normalized_question": normalized_text,
        "primary_language": primary_lang,
        "language_blocks": lang_blocks,
        "translated_text": translate_romanized_hindi(normalized_text) if primary_lang == "hi-en" else None,
        "tokens": tokens,
        "entities": entities,
        "keywords": keywords,
        "ranked_keywords": ranked_keywords,
        "technical_terms": tech_terms,
        "question_type": question_type,
        "intent": intent
    }

# Function to interpret the analysis and provide a deep understanding
def interpret_analysis(analysis):
    # Extract key information
    original = analysis["original_question"]
    normalized = analysis["normalized_question"]
    primary_lang = analysis["primary_language"]
    lang_blocks = analysis["language_blocks"]
    keywords = analysis["keywords"]
    ranked_keywords = analysis.get("ranked_keywords", [])
    entities = analysis["entities"]
    question_type = analysis["question_type"]
    intent = analysis["intent"]
    technical_terms = analysis["technical_terms"]
    translated_text = analysis.get("translated_text")
    
    # Build understanding
    understanding = {
        "language_understanding": {
            "primary_language": primary_lang,
            "is_multilingual": len(lang_blocks) > 1 or primary_lang == "hi-en",
            "languages_detected": list(set(block["lang"] for block in lang_blocks)),
            "translated_text": translated_text
        },
        "intent_understanding": {
            "type": question_type,
            "intent": intent,
            "main_topics": [k["text"] for k in keywords[:5] if "text" in k],
            "ranked_keywords": [(kw.get("rank", 0), kw.get("text", "")) for kw in ranked_keywords[:5] if "text" in kw],
            "entities": [e["text"] for e in entities[:5] if "text" in e],
            "technical_terms": [t["term"] for t in technical_terms]
        },
        "grammar_assessment": {
            "had_grammar_issues": original != normalized,
            "normalized_text": normalized
        }
    }
    
    # Special handling for technical queries
    if technical_terms:
        understanding["technical_understanding"] = {
            "terms": technical_terms,
            "categories": list(set(term["category"] for term in technical_terms)),
            "is_size_query": question_type == "size_query",
            "is_method_query": question_type == "method_query",
            "is_comparison": question_type == "comparison"
        }
    
    return understanding

# Interactive loop for testing
if __name__ == "__main__":
    print("Question Analyzer - Type 'exit' to quit")
    print("--------------------------------------")
    
    while True:
        question = input("\nEnter your question: ")
        if question.lower() == 'exit':
            break
        
        # Analyze the question
        analysis = analyze_question(question)
        
        # Interpret the analysis
        understanding = interpret_analysis(analysis)
        
        # Display the understanding
        print("\nQuestion Understanding:")
        print("----------------------")
        
        # Language understanding
        lang_info = understanding["language_understanding"]
        print(f"- Language: {lang_info['primary_language']}" + 
              (f" (mixed with {', '.join(lang_info['languages_detected'])})" if lang_info["is_multilingual"] else ""))
        
        # Show translation for Hinglish
        if lang_info.get("translated_text"):
            print(f"- Translated: {lang_info['translated_text']}")
          # Intent understanding
        intent_info = understanding["intent_understanding"]
        
        type_meanings = {
            "definition": "seeking definition or explanation",
            "process": "asking about a process or how to do something",
            "reason": "asking for reasons or explanations",
            "time": "asking about timing",
            "location": "asking about a location",
            "person": "asking about a person",
            "example": "asking for examples",
            "comparison": "asking for a comparison",
            "size_query": "asking about the size or length",
            "method_query": "asking about a method or how to implement",
            "error_query": "asking about an error or bug",
            "technical_query": "asking a technical question",
            "other": "complex question"
        }
        
        print(f"- Question type: {type_meanings.get(intent_info['type'], intent_info['type'])}")
        print(f"- Intent: {intent_info['intent']}")
        
        # Ranked keywords
        if intent_info.get('ranked_keywords'):
            print(f"- Ranked keywords (by importance):")
            for rank, text in intent_info['ranked_keywords']:
                print(f"  {rank}. {text}")
        
        # Technical understanding
        if "technical_understanding" in understanding:
            tech_info = understanding["technical_understanding"]
            tech_terms = [term["term"] for term in tech_info["terms"]]
            print(f"- Technical terms: {', '.join(tech_terms)}")
            print(f"- Technical categories: {', '.join(tech_info['categories'])}")
            
            # For size queries, provide specific understanding
            if tech_info["is_size_query"]:
                data_structure = next((term["term"] for term in tech_info["terms"] 
                                      if term["category"] in ["data structure", "data type"]), None)
                if data_structure:
                    print(f"- Question is about finding the size/length of a {data_structure}")
            
            # For method queries, provide specific understanding
            elif tech_info["is_method_query"]:
                methods = [term["term"] for term in tech_info["terms"] 
                         if term["category"] in ["programming concept", "computing concept"]]
                if methods:
                    print(f"- Question is about implementing or using {', '.join(methods)}")
        
        # Main topics and entities
        if intent_info['main_topics']:
            print(f"- Main topics: {', '.join(intent_info['main_topics'])}")
        if intent_info['entities']:
            print(f"- Key entities: {', '.join(intent_info['entities'])}")
        
        # Grammar assessment
        grammar = understanding["grammar_assessment"]
        if grammar["had_grammar_issues"]:
            print(f"- Interpreted as: {grammar['normalized_text']}")
