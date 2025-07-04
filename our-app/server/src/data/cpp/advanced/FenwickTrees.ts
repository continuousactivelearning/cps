import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Fenwick Trees - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz evaluates your advanced understanding of Fenwick Trees (Binary Indexed Trees) in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "FenwickTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "How do you efficiently perform range updates and point queries with a Fenwick Tree?",
            options: [
                { optionText: "By maintaining a difference array in the BIT", optionTag: "A" },
                { optionText: "By maintaining two BITs", optionTag: "B" },
                { optionText: "By using segment trees", optionTag: "C" },
                { optionText: "Not possible with Fenwick Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "To support range sum queries and range updates in BIT, how many trees are required?",
            options: [
                { optionText: "2", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "3", optionTag: "C" },
                { optionText: "Depends on query type", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the purpose of using lowbit (x & -x) in BIT?",
            options: [
                { optionText: "To move to the next affected node", optionTag: "A" },
                { optionText: "To clear all bits", optionTag: "B" },
                { optionText: "To find the number of bits", optionTag: "C" },
                { optionText: "To jump to root", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation is used to move to the parent in BIT?",
            options: [
                { optionText: "i - (i & -i)", optionTag: "A" },
                { optionText: "i + (i & -i)", optionTag: "B" },
                { optionText: "i / 2", optionTag: "C" },
                { optionText: "i + 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which one is not a valid use-case of Fenwick Tree?",
            options: [
                { optionText: "Range minimum query", optionTag: "A" },
                { optionText: "Prefix sum query", optionTag: "B" },
                { optionText: "Frequency table", optionTag: "C" },
                { optionText: "Inversion count", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is more memory efficient for range sum queries?",
            options: [
                { optionText: "Fenwick Tree", optionTag: "A" },
                { optionText: "Segment Tree", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Trie", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can BIT handle negative values?",
            options: [
                { optionText: "Yes, without issues", optionTag: "A" },
                { optionText: "Only after shifting all values", optionTag: "B" },
                { optionText: "No, must be non-negative", optionTag: "C" },
                { optionText: "Only if sorted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the best case time complexity for a query in BIT?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following problems can BIT solve efficiently?",
            options: [
                { optionText: "Counting inversions", optionTag: "A" },
                { optionText: "Longest path in graph", optionTag: "B" },
                { optionText: "Cycle detection", optionTag: "C" },
                { optionText: "DFS traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "To store BIT for array of size N, what is required?",
            options: [
                { optionText: "An array of size N+1", optionTag: "A" },
                { optionText: "An array of size N", optionTag: "B" },
                { optionText: "A linked list", optionTag: "C" },
                { optionText: "Two-dimensional array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does BIT stand for?",
            options: [
                { optionText: "Binary Indexed Tree", optionTag: "A" },
                { optionText: "Binary Integer Tree", optionTag: "B" },
                { optionText: "Binary Info Table", optionTag: "C" },
                { optionText: "Bitwise Indexed Table", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is BIT more suitable for online queries?",
            options: [
                { optionText: "Low update/query time", optionTag: "A" },
                { optionText: "Handles graphs", optionTag: "B" },
                { optionText: "No need for array", optionTag: "C" },
                { optionText: "Works with strings", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In BIT, what is tree[0] used for?",
            options: [
                { optionText: "Usually unused", optionTag: "A" },
                { optionText: "Stores total sum", optionTag: "B" },
                { optionText: "Stores min", optionTag: "C" },
                { optionText: "Used in queries", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How to find prefix sum up to index i in BIT?",
            options: [
                { optionText: "While i > 0, sum += tree[i]; i -= i & -i", optionTag: "A" },
                { optionText: "While i < n, sum += tree[i]; i += i & -i", optionTag: "B" },
                { optionText: "for i from 0 to n", optionTag: "C" },
                { optionText: "Use recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which index is used to access parent in BIT?",
            options: [
                { optionText: "i - (i & -i)", optionTag: "A" },
                { optionText: "i + (i & -i)", optionTag: "B" },
                { optionText: "i * 2", optionTag: "C" },
                { optionText: "i / 2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which application needs prefix sums and fast updates?",
            options: [
                { optionText: "Leaderboard systems", optionTag: "A" },
                { optionText: "Shortest path", optionTag: "B" },
                { optionText: "Union-Find", optionTag: "C" },
                { optionText: "DFS order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How to update index i in BIT by +val?",
            options: [
                { optionText: "While i <= n, tree[i] += val; i += i & -i", optionTag: "A" },
                { optionText: "tree[i] = val", optionTag: "B" },
                { optionText: "Use recursion", optionTag: "C" },
                { optionText: "tree[i] = tree[i] + val + 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "BIT is not suitable for which operation?",
            options: [
                { optionText: "Range minimum", optionTag: "A" },
                { optionText: "Prefix sum", optionTag: "B" },
                { optionText: "Point update", optionTag: "C" },
                { optionText: "Range add with point query", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many bits are toggled by i & -i?",
            options: [
                { optionText: "One", optionTag: "A" },
                { optionText: "All bits", optionTag: "B" },
                { optionText: "No bits", optionTag: "C" },
                { optionText: "Multiple bits", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can BIT answer k-th order statistic queries efficiently?",
            options: [
                { optionText: "Yes, with a frequency table", optionTag: "A" },
                { optionText: "No, use heaps", optionTag: "B" },
                { optionText: "Only segment trees", optionTag: "C" },
                { optionText: "Yes, with tries", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
