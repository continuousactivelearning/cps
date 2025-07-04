import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Suffix Arrays and Trees - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz assesses your knowledge of Suffix Arrays and Suffix Trees in JavaScript at the intermediate level.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SuffixArraysTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the main purpose of a suffix array?",
            options: [
                { optionText: "Efficient string pattern matching", optionTag: "A" },
                { optionText: "Sorting numerical data", optionTag: "B" },
                { optionText: "Storing compressed images", optionTag: "C" },
                { optionText: "Implementing stacks", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of building a suffix array using the naive method?",
            options: [
                { optionText: "O(n^2 log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a suffix array, what is stored at each index?",
            options: [
                { optionText: "The starting index of a suffix in sorted order", optionTag: "A" },
                { optionText: "The entire suffix string", optionTag: "B" },
                { optionText: "The prefix of a string", optionTag: "C" },
                { optionText: "The hash value of a suffix", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is often used alongside suffix arrays for efficient pattern matching?",
            options: [
                { optionText: "LCP array", optionTag: "A" },
                { optionText: "Hash table", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the role of the LCP array?",
            options: [
                { optionText: "Stores lengths of common prefixes between adjacent suffixes", optionTag: "A" },
                { optionText: "Stores lexicographic ranks", optionTag: "B" },
                { optionText: "Stores positions of characters", optionTag: "C" },
                { optionText: "Stores tree heights", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a suffix tree?",
            options: [
                { optionText: "A compressed trie of all suffixes of a string", optionTag: "A" },
                { optionText: "A binary tree of suffixes", optionTag: "B" },
                { optionText: "A graph of substrings", optionTag: "C" },
                { optionText: "A heap of string indices", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the typical space complexity of a suffix tree?",
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
            questionText: "Which algorithm constructs a suffix tree in linear time?",
            options: [
                { optionText: "Ukkonen’s algorithm", optionTag: "A" },
                { optionText: "Bubble sort", optionTag: "B" },
                { optionText: "Knuth-Morris-Pratt", optionTag: "C" },
                { optionText: "Dijkstra’s algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the use of suffix trees in bioinformatics?",
            options: [
                { optionText: "Pattern matching in DNA sequences", optionTag: "A" },
                { optionText: "Storing proteins", optionTag: "B" },
                { optionText: "Compiling genomes", optionTag: "C" },
                { optionText: "Translating RNA", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation is fastest using suffix trees?",
            options: [
                { optionText: "Finding repeated substrings", optionTag: "A" },
                { optionText: "Sorting numbers", optionTag: "B" },
                { optionText: "Inserting values", optionTag: "C" },
                { optionText: "Pushing into a stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Suffix trees can be used for which of the following tasks?",
            options: [
                { optionText: "Finding longest repeated substring", optionTag: "A" },
                { optionText: "Finding max heap", optionTag: "B" },
                { optionText: "Finding graph cycle", optionTag: "C" },
                { optionText: "Sorting suffix array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which node type does not exist in a suffix tree?",
            options: [
                { optionText: "Parent pointer node", optionTag: "A" },
                { optionText: "Leaf node", optionTag: "B" },
                { optionText: "Internal node", optionTag: "C" },
                { optionText: "Root node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What do all suffixes of a string terminate with in suffix tree implementation?",
            options: [
                { optionText: "A unique character (e.g. $)", optionTag: "A" },
                { optionText: "An empty string", optionTag: "B" },
                { optionText: "A newline", optionTag: "C" },
                { optionText: "The first character", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the relation between suffix array and suffix tree?",
            options: [
                { optionText: "Suffix array is a space-efficient version of suffix tree", optionTag: "A" },
                { optionText: "They are unrelated", optionTag: "B" },
                { optionText: "Suffix tree is a type of suffix array", optionTag: "C" },
                { optionText: "They both use heaps", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem can be solved using suffix trees in linear time?",
            options: [
                { optionText: "Longest common substring between two strings", optionTag: "A" },
                { optionText: "Matrix multiplication", optionTag: "B" },
                { optionText: "Binary search", optionTag: "C" },
                { optionText: "Graph coloring", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is NOT used for suffix array construction?",
            options: [
                { optionText: "Ukkonen’s algorithm", optionTag: "A" },
                { optionText: "Manber-Myers algorithm", optionTag: "B" },
                { optionText: "SA-IS algorithm", optionTag: "C" },
                { optionText: "DC3 algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which suffix array application is used in data compression?",
            options: [
                { optionText: "Burrows-Wheeler Transform", optionTag: "A" },
                { optionText: "LZW", optionTag: "B" },
                { optionText: "Huffman Encoding", optionTag: "C" },
                { optionText: "AES Encryption", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What’s the benefit of using suffix arrays over suffix trees?",
            options: [
                { optionText: "Less memory usage", optionTag: "A" },
                { optionText: "Faster insertions", optionTag: "B" },
                { optionText: "Better recursion support", optionTag: "C" },
                { optionText: "Built-in JavaScript API", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is best for printing all suffixes from a suffix tree?",
            options: [
                { optionText: "Depth First Search", optionTag: "A" },
                { optionText: "Breadth First Search", optionTag: "B" },
                { optionText: "Level Order", optionTag: "C" },
                { optionText: "Binary traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How are suffix trees used for detecting plagiarism?",
            options: [
                { optionText: "By finding longest common substrings between documents", optionTag: "A" },
                { optionText: "By hashing strings", optionTag: "B" },
                { optionText: "By sorting strings", optionTag: "C" },
                { optionText: "By using BFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
