import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Suffix Arrays and Trees - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz tests your advanced knowledge of suffix arrays and suffix trees, including construction, applications, and optimization techniques in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SuffixArraysTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a suffix array?",
            options: [
                { optionText: "An array of all suffixes of a string sorted lexicographically", optionTag: "A" },
                { optionText: "An array storing prefix sums", optionTag: "B" },
                { optionText: "A tree representing all substrings", optionTag: "C" },
                { optionText: "A data structure for balancing trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of naive suffix array construction for a string of length n?",
            options: [
                { optionText: "O(n² log n)", optionTag: "A" },
                { optionText: "O(n log n)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm constructs suffix arrays in O(n) time?",
            options: [
                { optionText: "SA-IS algorithm", optionTag: "A" },
                { optionText: "KMP algorithm", optionTag: "B" },
                { optionText: "Manacher's algorithm", optionTag: "C" },
                { optionText: "Rabin-Karp algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a suffix tree?",
            options: [
                { optionText: "A compressed trie of all suffixes of a string", optionTag: "A" },
                { optionText: "A binary search tree", optionTag: "B" },
                { optionText: "A heap storing suffixes", optionTag: "C" },
                { optionText: "A balanced AVL tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these problems can suffix trees solve efficiently?",
            options: [
                { optionText: "Longest common substring", optionTag: "A" },
                { optionText: "Minimum spanning tree", optionTag: "B" },
                { optionText: "Shortest path in graph", optionTag: "C" },
                { optionText: "Sorting arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of a suffix tree for a string of length n?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(n log n)", optionTag: "B" },
                { optionText: "O(n²)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which suffix array property allows binary search for substring queries?",
            options: [
                { optionText: "Suffixes sorted lexicographically", optionTag: "A" },
                { optionText: "Suffix lengths stored", optionTag: "B" },
                { optionText: "Suffixes linked sequentially", optionTag: "C" },
                { optionText: "Suffixes hashed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the LCP array represent in suffix array algorithms?",
            options: [
                { optionText: "Longest common prefix lengths between adjacent suffixes", optionTag: "A" },
                { optionText: "Lexicographically smallest prefix", optionTag: "B" },
                { optionText: "Lengths of suffixes", optionTag: "C" },
                { optionText: "List of common substrings", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm can build the LCP array in O(n) time given suffix array?",
            options: [
                { optionText: "Kasai's algorithm", optionTag: "A" },
                { optionText: "Manacher's algorithm", optionTag: "B" },
                { optionText: "Prim's algorithm", optionTag: "C" },
                { optionText: "Kruskal's algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a suffix tree feature?",
            options: [
                { optionText: "Edges labeled with substrings", optionTag: "A" },
                { optionText: "Leaves represent suffix indices", optionTag: "B" },
                { optionText: "Balanced binary search", optionTag: "C" },
                { optionText: "Internal nodes represent repeated substrings", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which problem can be solved using suffix arrays combined with LCP arrays?",
            options: [
                { optionText: "Number of distinct substrings", optionTag: "A" },
                { optionText: "Graph shortest path", optionTag: "B" },
                { optionText: "Maximum flow", optionTag: "C" },
                { optionText: "Sorting strings by length", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does the suffix tree improve over suffix trie?",
            options: [
                { optionText: "Compresses edges by merging chains of single-child nodes", optionTag: "A" },
                { optionText: "Stores suffixes as array indices", optionTag: "B" },
                { optionText: "Uses hashing for edges", optionTag: "C" },
                { optionText: "Implements balanced binary search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main challenge when implementing suffix trees?",
            options: [
                { optionText: "Complexity of edge compression and node representation", optionTag: "A" },
                { optionText: "Memory overflow", optionTag: "B" },
                { optionText: "Sorting suffixes", optionTag: "C" },
                { optionText: "Handling cyclic strings", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What technique is used in Ukkonen’s algorithm for suffix tree construction?",
            options: [
                { optionText: "Online construction with suffix links", optionTag: "A" },
                { optionText: "Divide and conquer", optionTag: "B" },
                { optionText: "Dynamic programming", optionTag: "C" },
                { optionText: "Binary search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following can be used to solve pattern matching using suffix arrays?",
            options: [
                { optionText: "Binary search on suffix array", optionTag: "A" },
                { optionText: "Linear scan of suffix tree", optionTag: "B" },
                { optionText: "Depth-first traversal", optionTag: "C" },
                { optionText: "Heap-based priority queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What advantage do suffix arrays have over suffix trees?",
            options: [
                { optionText: "More space-efficient and simpler to implement", optionTag: "A" },
                { optionText: "Faster substring queries", optionTag: "B" },
                { optionText: "Better for very large alphabets", optionTag: "C" },
                { optionText: "Supports dynamic updates", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is typically used to speed up suffix array queries?",
            options: [
                { optionText: "Segment tree or sparse table for LCP queries", optionTag: "A" },
                { optionText: "Hash map", optionTag: "B" },
                { optionText: "Binary heap", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the suffix link in a suffix tree represent?",
            options: [
                { optionText: "Link from one internal node to another representing a suffix", optionTag: "A" },
                { optionText: "Pointer to parent node", optionTag: "B" },
                { optionText: "Pointer to leaf node", optionTag: "C" },
                { optionText: "Edge compression pointer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can suffix trees be used to find the longest repeated substring?",
            options: [
                { optionText: "By finding the deepest internal node with at least two children", optionTag: "A" },
                { optionText: "By traversing leaves only", optionTag: "B" },
                { optionText: "By sorting suffixes", optionTag: "C" },
                { optionText: "By binary searching on suffix array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main difference between suffix arrays and suffix trees?",
            options: [
                { optionText: "Suffix arrays are arrays; suffix trees are tree data structures", optionTag: "A" },
                { optionText: "Suffix arrays can store dynamic updates", optionTag: "B" },
                { optionText: "Suffix trees are slower to build", optionTag: "C" },
                { optionText: "Suffix arrays use more memory", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
