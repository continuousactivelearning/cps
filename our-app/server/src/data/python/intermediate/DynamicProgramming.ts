import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Dynamic Programming - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Test your understanding of Dynamic Programming concepts and techniques in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Dynamic Programming"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the main idea behind Dynamic Programming?",
      options: [
        { optionText: "Breaking a problem into overlapping subproblems", optionTag: "A" },
        { optionText: "Dividing a problem into non-overlapping subproblems", optionTag: "B" },
        { optionText: "Solving recursively without storing results", optionTag: "C" },
        { optionText: "Using brute force", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is a classic example of DP?",
      options: [
        { optionText: "Fibonacci sequence", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Selection Sort", optionTag: "C" },
        { optionText: "Depth-First Search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What are the two main approaches in DP?",
      options: [
        { optionText: "Top-down and bottom-up", optionTag: "A" },
        { optionText: "Forward and backward", optionTag: "B" },
        { optionText: "Greedy and brute force", optionTag: "C" },
        { optionText: "DFS and BFS", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is memoization?",
      options: [
        { optionText: "Storing intermediate results to avoid recomputation", optionTag: "A" },
        { optionText: "Repeating the function call", optionTag: "B" },
        { optionText: "Sorting the data before processing", optionTag: "C" },
        { optionText: "Guessing the result", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is tabulation in DP?",
      options: [
        { optionText: "Bottom-up approach using tables", optionTag: "A" },
        { optionText: "Top-down recursion with memoization", optionTag: "B" },
        { optionText: "Storing final result only", optionTag: "C" },
        { optionText: "Using stacks to track results", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of a DP Fibonacci solution with memoization?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(2^n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is NOT typically solved with DP?",
      options: [
        { optionText: "Minimum Spanning Tree", optionTag: "A" },
        { optionText: "Longest Common Subsequence", optionTag: "B" },
        { optionText: "Knapsack Problem", optionTag: "C" },
        { optionText: "Matrix Chain Multiplication", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is a bottom-up DP problem?",
      options: [
        { optionText: "Tabulation approach to Coin Change", optionTag: "A" },
        { optionText: "Recursive Fibonacci", optionTag: "B" },
        { optionText: "DFS Tree Traversal", optionTag: "C" },
        { optionText: "Greedy Scheduling", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the space complexity of a standard DP Fibonacci solution?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which technique avoids recomputation in DP?",
      options: [
        { optionText: "Memoization", optionTag: "A" },
        { optionText: "Brute Force", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "C" },
        { optionText: "Recursion", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "DP is useful when problems have:",
      options: [
        { optionText: "Overlapping subproblems and optimal substructure", optionTag: "A" },
        { optionText: "No subproblems", optionTag: "B" },
        { optionText: "Independent subproblems", optionTag: "C" },
        { optionText: "Circular dependencies", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result of LCS(“abcde”, “ace”)?",
      options: [
        { optionText: "3", optionTag: "A" },
        { optionText: "5", optionTag: "B" },
        { optionText: "2", optionTag: "C" },
        { optionText: "4", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is a 0/1 knapsack variant?",
      options: [
        { optionText: "DP with one item per weight", optionTag: "A" },
        { optionText: "Greedy selection", optionTag: "B" },
        { optionText: "DFS with pruning", optionTag: "C" },
        { optionText: "Binary Search optimization", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does a DP table store?",
      options: [
        { optionText: "Partial results of subproblems", optionTag: "A" },
        { optionText: "Only final result", optionTag: "B" },
        { optionText: "Sorted array", optionTag: "C" },
        { optionText: "Graph adjacency matrix", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What’s a drawback of tabulation?",
      options: [
        { optionText: "Higher space consumption", optionTag: "A" },
        { optionText: "Stack overflow", optionTag: "B" },
        { optionText: "Slow performance", optionTag: "C" },
        { optionText: "Unclear recursion", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does the DP solution of coin change compute?",
      options: [
        { optionText: "Minimum number of coins to make an amount", optionTag: "A" },
        { optionText: "Total coins", optionTag: "B" },
        { optionText: "Change in order", optionTag: "C" },
        { optionText: "Permutations", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "DP technique reduces time complexity by:",
      options: [
        { optionText: "Avoiding recomputation", optionTag: "A" },
        { optionText: "Brute forcing the result", optionTag: "B" },
        { optionText: "Using multithreading", optionTag: "C" },
        { optionText: "Using a hash map only", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Can recursion and DP be combined?",
      options: [
        { optionText: "Yes, using memoization", optionTag: "A" },
        { optionText: "No, they conflict", optionTag: "B" },
        { optionText: "Only in greedy problems", optionTag: "C" },
        { optionText: "Only in binary search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the complexity of Matrix Chain Multiplication using DP?",
      options: [
        { optionText: "O(n^3)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In Python, which module is often used with DP to improve speed?",
      options: [
        { optionText: "functools", optionTag: "A" },
        { optionText: "math", optionTag: "B" },
        { optionText: "numpy", optionTag: "C" },
        { optionText: "datetime", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;
