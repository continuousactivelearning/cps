import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Suffix Arrays & Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of Suffix Arrays and Suffix Trees in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SuffixArraysTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a suffix of a string?",
            options: [
                { optionText: "A substring that starts from any position", optionTag: "A" },
                { optionText: "A substring that ends at the last character", optionTag: "B" },
                { optionText: "A prefix of the string", optionTag: "C" },
                { optionText: "None of the above", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which data structure stores all the suffixes of a string in lexicographical order?",
            options: [
                { optionText: "Suffix Array", optionTag: "A" },
                { optionText: "Trie", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a use case of suffix arrays?",
            options: [
                { optionText: "Pattern matching", optionTag: "A" },
                { optionText: "Sorting numbers", optionTag: "B" },
                { optionText: "Balancing trees", optionTag: "C" },
                { optionText: "Calculating sums", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity to build a suffix array using doubling algorithm?",
            options: [
                { optionText: "O(n log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(n^2)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of a suffix array for a string of length n?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(n^2)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which structure can answer longest common prefix (LCP) queries efficiently?",
            options: [
                { optionText: "Suffix Array + LCP Array", optionTag: "A" },
                { optionText: "Segment Tree", optionTag: "B" },
                { optionText: "Hash Table", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the root node of a suffix tree?",
            options: [
                { optionText: "An empty string", optionTag: "A" },
                { optionText: "First character", optionTag: "B" },
                { optionText: "Longest suffix", optionTag: "C" },
                { optionText: "NULL", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is true about a suffix tree?",
            options: [
                { optionText: "Each path from root to leaf represents a suffix", optionTag: "A" },
                { optionText: "Every character appears only once", optionTag: "B" },
                { optionText: "It stores only prefixes", optionTag: "C" },
                { optionText: "It’s same as binary tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm builds a suffix tree in linear time?",
            options: [
                { optionText: "Ukkonen’s Algorithm", optionTag: "A" },
                { optionText: "Dijkstra’s Algorithm", optionTag: "B" },
                { optionText: "Kruskal’s Algorithm", optionTag: "C" },
                { optionText: "Bellman-Ford Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity to search a pattern in a suffix tree?",
            options: [
                { optionText: "O(m)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(m log n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does LCP array store?",
            options: [
                { optionText: "Lengths of longest common prefixes of adjacent suffixes", optionTag: "A" },
                { optionText: "Longest palindromic substring", optionTag: "B" },
                { optionText: "Longest increasing subsequence", optionTag: "C" },
                { optionText: "Shortest common superstring", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How are suffix arrays and suffix trees related?",
            options: [
                { optionText: "Both represent all suffixes of a string", optionTag: "A" },
                { optionText: "Both store characters in sorted order", optionTag: "B" },
                { optionText: "They are unrelated", optionTag: "C" },
                { optionText: "They use the same construction algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which one uses more space: suffix tree or suffix array?",
            options: [
                { optionText: "Suffix tree", optionTag: "A" },
                { optionText: "Suffix array", optionTag: "B" },
                { optionText: "Both use same", optionTag: "C" },
                { optionText: "Depends on string length", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the total number of suffixes in a string of length n?",
            options: [
                { optionText: "n", optionTag: "A" },
                { optionText: "n-1", optionTag: "B" },
                { optionText: "n+1", optionTag: "C" },
                { optionText: "n^2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is helpful in printing all suffixes from a suffix tree?",
            options: [
                { optionText: "DFS", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "Inorder", optionTag: "C" },
                { optionText: "Level order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Suffix arrays are often combined with which other array for efficient searching?",
            options: [
                { optionText: "LCP array", optionTag: "A" },
                { optionText: "RMQ array", optionTag: "B" },
                { optionText: "Trie array", optionTag: "C" },
                { optionText: "KMP array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is better for fast substring search?",
            options: [
                { optionText: "Suffix Tree", optionTag: "A" },
                { optionText: "Array", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Suffix trees help in solving which of the following problems?",
            options: [
                { optionText: "Longest repeated substring", optionTag: "A" },
                { optionText: "Graph traversal", optionTag: "B" },
                { optionText: "Sorting numbers", optionTag: "C" },
                { optionText: "Finding primes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a suffix link in suffix tree construction?",
            options: [
                { optionText: "A shortcut between internal nodes with same suffix", optionTag: "A" },
                { optionText: "A link from root to leaves", optionTag: "B" },
                { optionText: "A backup pointer", optionTag: "C" },
                { optionText: "A pointer to the parent", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
