import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python - Dynamic Programming - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Quiz to assess understanding of dynamic programming concepts in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "DynamicProgramming",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the main idea of Dynamic Programming?",
      options: [
        { optionText: "Divide the problem and solve each part independently", optionTag: "B" },
        { optionText: "Store solutions of subproblems to avoid recomputation", optionTag: "D" },
        { optionText: "Randomly select a subproblem and try solving", optionTag: "A" },
        { optionText: "Use greedy approach to select optimal solution", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which of the following is NOT a property of dynamic programming problems?",
      options: [
        { optionText: "Optimal Substructure", optionTag: "B" },
        { optionText: "Greedy Choice Property", optionTag: "C" },
        { optionText: "Overlapping Subproblems", optionTag: "A" },
        { optionText: "Memoization", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which method is commonly used in top-down dynamic programming?",
      options: [
        { optionText: "Memoization", optionTag: "B" },
        { optionText: "Tabulation", optionTag: "C" },
        { optionText: "Iteration", optionTag: "D" },
        { optionText: "Random Walk", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the time complexity of solving the Fibonacci series using DP (bottom-up)?",
      options: [
        { optionText: "O(log n)", optionTag: "D" },
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(n^2)", optionTag: "B" },
        { optionText: "O(2^n)", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of the following uses tabulation method?",
      options: [
        { optionText: "Bottom-up DP", optionTag: "C" },
        { optionText: "Top-down DP", optionTag: "A" },
        { optionText: "Recursion", optionTag: "D" },
        { optionText: "Greedy Algorithm", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which technique helps improve recursive solutions in DP?",
      options: [
        { optionText: "Greedy Method", optionTag: "C" },
        { optionText: "Memoization", optionTag: "A" },
        { optionText: "Divide and Conquer", optionTag: "D" },
        { optionText: "Binary Search", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which problem is a classic example of dynamic programming?",
      options: [
        { optionText: "Tower of Hanoi", optionTag: "D" },
        { optionText: "Dijkstra's Algorithm", optionTag: "C" },
        { optionText: "Longest Common Subsequence", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the space complexity of Fibonacci with memoization?",
      options: [
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(n^2)", optionTag: "D" },
        { optionText: "O(log n)", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "In which of the following scenarios would DP not be useful?",
      options: [
        { optionText: "When subproblems do not overlap", optionTag: "B" },
        { optionText: "When subproblems are repeated", optionTag: "A" },
        { optionText: "When optimal substructure exists", optionTag: "C" },
        { optionText: "When tabulation is applicable", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following can reduce space in DP?",
      options: [
        { optionText: "Rolling arrays", optionTag: "D" },
        { optionText: "Using graph traversal", optionTag: "C" },
        { optionText: "Greedy approach", optionTag: "A" },
        { optionText: "Divide and Conquer", optionTag: "B" },
      ],
      correctOption: "D",
      score: 1,
    },
    // 10 more
    {
      questionText: "Which data structure is generally used in tabulation?",
      options: [
        { optionText: "Array or Matrix", optionTag: "B" },
        { optionText: "Stack", optionTag: "C" },
        { optionText: "Queue", optionTag: "D" },
        { optionText: "Tree", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which approach solves subproblems only once and saves the result?",
      options: [
        { optionText: "Memoization", optionTag: "A" },
        { optionText: "Tabulation", optionTag: "C" },
        { optionText: "Greedy", optionTag: "D" },
        { optionText: "Recursion", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Dynamic programming is an extension of which technique?",
      options: [
        { optionText: "Divide and Conquer", optionTag: "C" },
        { optionText: "Backtracking", optionTag: "B" },
        { optionText: "Greedy", optionTag: "D" },
        { optionText: "Binary Search", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which property is necessary to apply dynamic programming?",
      options: [
        { optionText: "Overlapping Subproblems", optionTag: "C" },
        { optionText: "Mutual Exclusion", optionTag: "B" },
        { optionText: "Memorylessness", optionTag: "D" },
        { optionText: "None of these", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which problem can be solved using DP?",
      options: [
        { optionText: "Longest Increasing Subsequence", optionTag: "B" },
        { optionText: "Depth First Search", optionTag: "C" },
        { optionText: "Breadth First Search", optionTag: "D" },
        { optionText: "Tower of Hanoi", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What does memoization avoid?",
      options: [
        { optionText: "Repeated subproblem computation", optionTag: "D" },
        { optionText: "Excessive memory use", optionTag: "C" },
        { optionText: "Loops", optionTag: "A" },
        { optionText: "Recursion", optionTag: "B" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "DP is useful when problems have:",
      options: [
        { optionText: "Overlapping Subproblems", optionTag: "A" },
        { optionText: "Unique Solutions", optionTag: "C" },
        { optionText: "Non-recursive structure", optionTag: "D" },
        { optionText: "Greedy Choice Property", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which technique works bottom-up?",
      options: [
        { optionText: "Tabulation", optionTag: "C" },
        { optionText: "Memoization", optionTag: "D" },
        { optionText: "Backtracking", optionTag: "A" },
        { optionText: "Recursion", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of these is an example of 1D DP?",
      options: [
        { optionText: "Climbing Stairs", optionTag: "D" },
        { optionText: "Matrix Chain Multiplication", optionTag: "A" },
        { optionText: "Longest Common Subsequence", optionTag: "B" },
        { optionText: "Edit Distance", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What does DP help in reducing?",
      options: [
        { optionText: "Time complexity by avoiding recomputation", optionTag: "B" },
        { optionText: "Memory usage", optionTag: "C" },
        { optionText: "Code readability", optionTag: "D" },
        { optionText: "Data redundancy", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
  ],
};

export default quizData;