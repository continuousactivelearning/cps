import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Dynamic Programming - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz evaluates your intermediate understanding of Dynamic Programming concepts in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DynamicProgramming"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which of the following is a key characteristic of Dynamic Programming?",
            options: [
                { optionText: "Overlapping subproblems", optionTag: "A" },
                { optionText: "Greedy decisions", optionTag: "B" },
                { optionText: "Backtracking", optionTag: "C" },
                { optionText: "Divide and Conquer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is memoization?",
            options: [
                { optionText: "Storing results of expensive function calls", optionTag: "A" },
                { optionText: "Breaking the problem into subproblems", optionTag: "B" },
                { optionText: "Sorting values in a table", optionTag: "C" },
                { optionText: "Forcing recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following problems is best solved using Dynamic Programming?",
            options: [
                { optionText: "0/1 Knapsack Problem", optionTag: "A" },
                { optionText: "Breadth-First Search", optionTag: "B" },
                { optionText: "Topological Sort", optionTag: "C" },
                { optionText: "Minimum Spanning Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In bottom-up DP, what is the typical approach?",
            options: [
                { optionText: "Filling a table iteratively", optionTag: "A" },
                { optionText: "Using recursion directly", optionTag: "B" },
                { optionText: "Using DFS traversal", optionTag: "C" },
                { optionText: "Storing results in a stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is typically used for tabulation in DP?",
            options: [
                { optionText: "Array or matrix", optionTag: "A" },
                { optionText: "Tree", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of the bottom-up approach for Fibonacci?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(2^n)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In which of the following is space optimization possible?",
            options: [
                { optionText: "Fibonacci sequence", optionTag: "A" },
                { optionText: "Matrix Chain Multiplication", optionTag: "B" },
                { optionText: "Longest Increasing Subsequence", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about overlapping subproblems?",
            options: [
                { optionText: "Same subproblem is solved multiple times", optionTag: "A" },
                { optionText: "Subproblems are independent", optionTag: "B" },
                { optionText: "It occurs only in Greedy algorithms", optionTag: "C" },
                { optionText: "It is not applicable in real problems", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem does NOT use DP?",
            options: [
                { optionText: "Binary Search", optionTag: "A" },
                { optionText: "Longest Common Subsequence", optionTag: "B" },
                { optionText: "Matrix Chain Multiplication", optionTag: "C" },
                { optionText: "Subset Sum", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many subproblems are there in the 0/1 Knapsack DP solution?",
            options: [
                { optionText: "W * N", optionTag: "A" },
                { optionText: "W + N", optionTag: "B" },
                { optionText: "W^N", optionTag: "C" },
                { optionText: "N/W", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a common issue when using recursion in DP without memoization?",
            options: [
                { optionText: "Exponential time complexity", optionTag: "A" },
                { optionText: "Compilation error", optionTag: "B" },
                { optionText: "Stack overflow", optionTag: "C" },
                { optionText: "Memory leaks", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which technique is used to reduce space complexity in 1D DP problems?",
            options: [
                { optionText: "Using two variables instead of an array", optionTag: "A" },
                { optionText: "Using stacks", optionTag: "B" },
                { optionText: "Using hash maps", optionTag: "C" },
                { optionText: "Using recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In which situation is top-down approach better than bottom-up?",
            options: [
                { optionText: "When only a few subproblems are required", optionTag: "A" },
                { optionText: "When input is small", optionTag: "B" },
                { optionText: "When using graphs", optionTag: "C" },
                { optionText: "When recursion is not allowed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is an example of a DP optimization technique?",
            options: [
                { optionText: "Bitmasking", optionTag: "A" },
                { optionText: "DFS", optionTag: "B" },
                { optionText: "Prefix Sum", optionTag: "C" },
                { optionText: "BFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is memoization used in recursive DP?",
            options: [
                { optionText: "To avoid recalculating subproblems", optionTag: "A" },
                { optionText: "To increase space usage", optionTag: "B" },
                { optionText: "To sort the subproblems", optionTag: "C" },
                { optionText: "To generate new subproblems", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of the bottom-up DP solution to Fibonacci?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is the best way to implement LCS?",
            options: [
                { optionText: "2D DP Table", optionTag: "A" },
                { optionText: "Greedy algorithm", optionTag: "B" },
                { optionText: "DFS traversal", optionTag: "C" },
                { optionText: "Graph traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ container is best suited for storing memoized DP results?",
            options: [
                { optionText: "unordered_map", optionTag: "A" },
                { optionText: "queue", optionTag: "B" },
                { optionText: "stack", optionTag: "C" },
                { optionText: "deque", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a limitation of recursive DP?",
            options: [
                { optionText: "Stack overflow due to deep recursion", optionTag: "A" },
                { optionText: "Cannot handle strings", optionTag: "B" },
                { optionText: "Slower than brute force", optionTag: "C" },
                { optionText: "Cannot be memoized", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is more efficient for dense DP problems?",
            options: [
                { optionText: "Tabulation", optionTag: "A" },
                { optionText: "Top-down with memoization", optionTag: "B" },
                { optionText: "Brute force recursion", optionTag: "C" },
                { optionText: "Backtracking", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
