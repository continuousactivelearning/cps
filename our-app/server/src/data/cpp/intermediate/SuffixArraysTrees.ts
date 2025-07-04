import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Suffix Arrays and Trees - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz tests your intermediate knowledge of Suffix Arrays and Suffix Trees in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SuffixArraysTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the primary application of suffix arrays?",
            options: [
                { optionText: "String pattern matching", optionTag: "A" },
                { optionText: "Matrix multiplication", optionTag: "B" },
                { optionText: "Sorting integers", optionTag: "C" },
                { optionText: "Graph traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a suffix array?",
            options: [
                { optionText: "An array of indices of all suffixes of a string in lexicographical order", optionTag: "A" },
                { optionText: "An array storing all prefixes", optionTag: "B" },
                { optionText: "An array that holds substrings", optionTag: "C" },
                { optionText: "A dynamic array for trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of constructing a suffix array using the naïve approach?",
            options: [
                { optionText: "O(n^2 log n)", optionTag: "A" },
                { optionText: "O(n log n)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm constructs the suffix array in O(n log n) time?",
            options: [
                { optionText: "Prefix Doubling", optionTag: "A" },
                { optionText: "Brute Force", optionTag: "B" },
                { optionText: "KMP", optionTag: "C" },
                { optionText: "DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is used to find LCP (Longest Common Prefix) efficiently with suffix arrays?",
            options: [
                { optionText: "Kasai Algorithm", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "Union-Find", optionTag: "C" },
                { optionText: "Min-Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of a suffix tree?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following algorithms builds a suffix tree in linear time?",
            options: [
                { optionText: "Ukkonen’s Algorithm", optionTag: "A" },
                { optionText: "Knuth-Morris-Pratt", optionTag: "B" },
                { optionText: "Prefix Doubling", optionTag: "C" },
                { optionText: "Merge Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In suffix trees, what do internal nodes represent?",
            options: [
                { optionText: "Common prefixes of multiple suffixes", optionTag: "A" },
                { optionText: "Single characters", optionTag: "B" },
                { optionText: "Single suffix", optionTag: "C" },
                { optionText: "Root only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following operations is fastest using suffix trees?",
            options: [
                { optionText: "Finding all occurrences of a pattern", optionTag: "A" },
                { optionText: "Sorting strings", optionTag: "B" },
                { optionText: "String reversal", optionTag: "C" },
                { optionText: "Appending strings", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the key difference between suffix arrays and suffix trees?",
            options: [
                { optionText: "Suffix trees use more memory", optionTag: "A" },
                { optionText: "Suffix arrays support append operation", optionTag: "B" },
                { optionText: "Suffix trees are arrays", optionTag: "C" },
                { optionText: "Suffix arrays are faster for insertions", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following can be used to compute the LCP array in O(n)?",
            options: [
                { optionText: "Kasai’s Algorithm", optionTag: "A" },
                { optionText: "Dijkstra’s Algorithm", optionTag: "B" },
                { optionText: "Floyd-Warshall", optionTag: "C" },
                { optionText: "Naive Method", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is more space efficient for large texts?",
            options: [
                { optionText: "Suffix Arrays", optionTag: "A" },
                { optionText: "Suffix Trees", optionTag: "B" },
                { optionText: "Tries", optionTag: "C" },
                { optionText: "Hash Maps", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does a suffix tree node typically store?",
            options: [
                { optionText: "Start and end index of a substring", optionTag: "A" },
                { optionText: "Character value", optionTag: "B" },
                { optionText: "Complete string", optionTag: "C" },
                { optionText: "Prefix information", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the height of a suffix tree for a string of length n?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does the suffix array help in pattern matching?",
            options: [
                { optionText: "By performing binary search on the sorted suffixes", optionTag: "A" },
                { optionText: "By direct index access", optionTag: "B" },
                { optionText: "Through hashing", optionTag: "C" },
                { optionText: "Using adjacency list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is better for exact pattern search in terms of time?",
            options: [
                { optionText: "Suffix Trees", optionTag: "A" },
                { optionText: "Suffix Arrays", optionTag: "B" },
                { optionText: "Tries", optionTag: "C" },
                { optionText: "Binary Search Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which suffix structure is easier to implement?",
            options: [
                { optionText: "Suffix Array", optionTag: "A" },
                { optionText: "Suffix Tree", optionTag: "B" },
                { optionText: "Trie", optionTag: "C" },
                { optionText: "Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the preprocessing time of suffix array using Prefix Doubling?",
            options: [
                { optionText: "O(n log n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What do the leaves of a suffix tree represent?",
            options: [
                { optionText: "Suffixes of the input string", optionTag: "A" },
                { optionText: "Prefixes", optionTag: "B" },
                { optionText: "Characters", optionTag: "C" },
                { optionText: "Root nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which structure is better for frequent substring queries?",
            options: [
                { optionText: "Suffix Tree", optionTag: "A" },
                { optionText: "Hash Table", optionTag: "B" },
                { optionText: "Array", optionTag: "C" },
                { optionText: "Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
