import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Dynamic Programming - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Evaluate your understanding of dynamic programming techniques in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Dynamic Programming",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which principle does Dynamic Programming primarily follow?",
      options: [
        { optionText: "Divide and Conquer", optionTag: "A" },
        { optionText: "Greedy Approach", optionTag: "B" },
        { optionText: "Overlapping Subproblems and Optimal Substructure", optionTag: "C" },
        { optionText: "Backtracking", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which technique stores intermediate results to avoid recalculating?",
      options: [
        { optionText: "Recursion", optionTag: "A" },
        { optionText: "Memoization", optionTag: "B" },
        { optionText: "Tabulation", optionTag: "C" },
        { optionText: "Greedy", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following is a bottom-up approach?",
      options: [
        { optionText: "Memoization", optionTag: "A" },
        { optionText: "Backtracking", optionTag: "B" },
        { optionText: "Tabulation", optionTag: "C" },
        { optionText: "Brute Force", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the time complexity of Fibonacci using naive recursion?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "O(2^n)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which data structure is usually used in bottom-up DP?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Array", optionTag: "B" },
        { optionText: "Set", optionTag: "C" },
        { optionText: "Tree", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What does memoization avoid?",
      options: [
        { optionText: "Loops", optionTag: "A" },
        { optionText: "Recomputing overlapping subproblems", optionTag: "B" },
        { optionText: "Recursion", optionTag: "C" },
        { optionText: "Space complexity", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which problem is ideal for DP?",
      options: [
        { optionText: "Palindrome checking", optionTag: "A" },
        { optionText: "N-Queens", optionTag: "B" },
        { optionText: "0/1 Knapsack", optionTag: "C" },
        { optionText: "Sorting", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which Python data structure is ideal for memoization?",
      options: [
        { optionText: "List", optionTag: "A" },
        { optionText: "Dictionary", optionTag: "B" },
        { optionText: "Set", optionTag: "C" },
        { optionText: "Tuple", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the advantage of tabulation over memoization?",
      options: [
        { optionText: "Less memory usage", optionTag: "A" },
        { optionText: "Iterative nature avoids recursion depth", optionTag: "B" },
        { optionText: "Faster initialization", optionTag: "C" },
        { optionText: "Parallel processing", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which decorator can simplify memoization in Python?",
      options: [
        { optionText: "@lru_cache", optionTag: "A" },
        { optionText: "@staticmethod", optionTag: "B" },
        { optionText: "@dataclass", optionTag: "C" },
        { optionText: "@property", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What’s the base condition for the Fibonacci DP solution?",
      options: [
        { optionText: "fib(0) = 1, fib(1) = 1", optionTag: "A" },
        { optionText: "fib(0) = 0, fib(1) = 1", optionTag: "B" },
        { optionText: "fib(0) = 2, fib(1) = 3", optionTag: "C" },
        { optionText: "fib(0) = -1, fib(1) = 0", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the space complexity of a basic DP solution with a 1D array?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "How can you reduce space complexity in some DP problems?",
      options: [
        { optionText: "Use linked lists", optionTag: "A" },
        { optionText: "Only store previous results", optionTag: "B" },
        { optionText: "Use nested loops", optionTag: "C" },
        { optionText: "Use stacks", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which problem does NOT need DP?",
      options: [
        { optionText: "Longest Common Subsequence", optionTag: "A" },
        { optionText: "Coin Change", optionTag: "B" },
        { optionText: "Quick Sort", optionTag: "C" },
        { optionText: "Matrix Chain Multiplication", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What kind of problems can be solved by DP?",
      options: [
        { optionText: "Only graph problems", optionTag: "A" },
        { optionText: "Optimization problems with overlapping subproblems", optionTag: "B" },
        { optionText: "Problems without recursion", optionTag: "C" },
        { optionText: "Only string-based problems", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following is NOT a property of problems solvable by DP?",
      options: [
        { optionText: "Overlapping Subproblems", optionTag: "A" },
        { optionText: "Greedy Choice Property", optionTag: "B" },
        { optionText: "Optimal Substructure", optionTag: "C" },
        { optionText: "Recursive definition", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which Python module provides caching for memoization?",
      options: [
        { optionText: "functools", optionTag: "A" },
        { optionText: "collections", optionTag: "B" },
        { optionText: "heapq", optionTag: "C" },
        { optionText: "math", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the key difference between Greedy and DP?",
      options: [
        { optionText: "DP tries all combinations", optionTag: "A" },
        { optionText: "Greedy backtracks", optionTag: "B" },
        { optionText: "Greedy solves subproblems optimally", optionTag: "C" },
        { optionText: "DP skips combinations", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What should be the first step in solving a DP problem?",
      options: [
        { optionText: "Start coding directly", optionTag: "A" },
        { optionText: "Draw recursion tree", optionTag: "B" },
        { optionText: "Identify state and transition", optionTag: "C" },
        { optionText: "Sort the array", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which DP algorithm is used in text comparison?",
      options: [
        { optionText: "Dijkstra’s", optionTag: "A" },
        { optionText: "Edit Distance", optionTag: "B" },
        { optionText: "Prim’s", optionTag: "C" },
        { optionText: "Binary Search", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
  ],
};

export default quizData;