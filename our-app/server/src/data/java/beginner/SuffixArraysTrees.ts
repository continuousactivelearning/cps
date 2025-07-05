// src/data/java/beginner/suffix_arrays_trees.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Suffix Arrays/Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz tests your fundamental understanding of suffix arrays and suffix trees in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Suffix Arrays/Trees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a suffix array?",
            options: [
                { optionText: "An array of all suffixes of a string in lexicographic order", optionTag: "A" },
                { optionText: "An array that stores only prefixes", optionTag: "B" },
                { optionText: "A stack used for sorting", optionTag: "C" },
                { optionText: "A type of search tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity to build a suffix array using the naïve method?",
            options: [
                { optionText: "O(n^2 log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n^3)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a suffix tree?",
            options: [
                { optionText: "A compressed trie for all suffixes of a string", optionTag: "A" },
                { optionText: "A heap tree", optionTag: "B" },
                { optionText: "A binary search tree", optionTag: "C" },
                { optionText: "A priority queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is an application of suffix arrays?",
            options: [
                { optionText: "Pattern matching", optionTag: "A" },
                { optionText: "Queue implementation", optionTag: "B" },
                { optionText: "Stack traversal", optionTag: "C" },
                { optionText: "Heap sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is a suffix array different from a suffix tree?",
            options: [
                { optionText: "Suffix array is an array; suffix tree is a tree", optionTag: "A" },
                { optionText: "Suffix array uses recursion", optionTag: "B" },
                { optionText: "Suffix tree is a type of heap", optionTag: "C" },
                { optionText: "Suffix array stores only strings", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is used to build suffix arrays efficiently?",
            options: [
                { optionText: "Kasai algorithm", optionTag: "A" },
                { optionText: "Prim’s algorithm", optionTag: "B" },
                { optionText: "Dijkstra’s algorithm", optionTag: "C" },
                { optionText: "DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In suffix arrays, what does each entry represent?",
            options: [
                { optionText: "The starting index of a suffix", optionTag: "A" },
                { optionText: "The ending index of a prefix", optionTag: "B" },
                { optionText: "Character count", optionTag: "C" },
                { optionText: "Null terminator", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Suffix arrays and trees are mainly used for which type of operations?",
            options: [
                { optionText: "String pattern matching", optionTag: "A" },
                { optionText: "Arithmetic operations", optionTag: "B" },
                { optionText: "Sorting integers", optionTag: "C" },
                { optionText: "Graph traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of a suffix array?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about suffix trees?",
            options: [
                { optionText: "They allow linear-time pattern matching", optionTag: "A" },
                { optionText: "They are binary trees", optionTag: "B" },
                { optionText: "They store arrays", optionTag: "C" },
                { optionText: "They are priority queues", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is more space-efficient?",
            options: [
                { optionText: "Suffix Array", optionTag: "A" },
                { optionText: "Suffix Tree", optionTag: "B" },
                { optionText: "Trie", optionTag: "C" },
                { optionText: "Graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What kind of problems are solved using suffix trees?",
            options: [
                { optionText: "Longest repeated substring", optionTag: "A" },
                { optionText: "Array rotation", optionTag: "B" },
                { optionText: "Graph coloring", optionTag: "C" },
                { optionText: "Sorting", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which suffix array-based algorithm is used to find longest common prefix (LCP)?",
            options: [
                { optionText: "Kasai’s algorithm", optionTag: "A" },
                { optionText: "KMP algorithm", optionTag: "B" },
                { optionText: "DFS algorithm", optionTag: "C" },
                { optionText: "Dijkstra’s algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is required to build a suffix tree?",
            options: [
                { optionText: "A string", optionTag: "A" },
                { optionText: "An array of integers", optionTag: "B" },
                { optionText: "A graph", optionTag: "C" },
                { optionText: "A hash map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property is NOT true about suffix trees?",
            options: [
                { optionText: "They support O(m) search time for pattern of length m", optionTag: "A" },
                { optionText: "They are uncompressed tries", optionTag: "B" },
                { optionText: "They store suffixes as paths", optionTag: "C" },
                { optionText: "They are built using Ukkonen’s algorithm", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which one is faster for pattern search: suffix array or suffix tree?",
            options: [
                { optionText: "Suffix Tree", optionTag: "A" },
                { optionText: "Suffix Array", optionTag: "B" },
                { optionText: "Linked List", optionTag: "C" },
                { optionText: "Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the typical use case for suffix trees in bioinformatics?",
            options: [
                { optionText: "Genome sequence analysis", optionTag: "A" },
                { optionText: "Sorting gene names", optionTag: "B" },
                { optionText: "Graph plotting", optionTag: "C" },
                { optionText: "Searching for integers", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why are suffix arrays preferred over suffix trees sometimes?",
            options: [
                { optionText: "Lower memory usage", optionTag: "A" },
                { optionText: "Faster construction", optionTag: "B" },
                { optionText: "They are graphs", optionTag: "C" },
                { optionText: "They allow multi-threading", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is Ukkonen's algorithm used for?",
            options: [
                { optionText: "Building suffix trees in linear time", optionTag: "A" },
                { optionText: "Sorting suffix arrays", optionTag: "B" },
                { optionText: "Hashing suffixes", optionTag: "C" },
                { optionText: "Building tries", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the goal of LCP array in suffix arrays?",
            options: [
                { optionText: "To store lengths of longest common prefixes between suffixes", optionTag: "A" },
                { optionText: "To count suffixes", optionTag: "B" },
                { optionText: "To identify leaf nodes", optionTag: "C" },
                { optionText: "To perform search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;