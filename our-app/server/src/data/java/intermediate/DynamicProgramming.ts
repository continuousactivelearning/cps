import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Dynamic Programming - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "Test your understanding of dynamic programming concepts in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "DynamicProgramming"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is dynamic programming primarily used for?",
      options: [
        { optionText: "Solving optimization problems", optionTag: "A" },
        { optionText: "Compiling code", optionTag: "B" },
        { optionText: "Sorting elements", optionTag: "C" },
        { optionText: "Memory management", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is a classic dynamic programming problem?",
      options: [
        { optionText: "Traveling Salesman", optionTag: "A" },
        { optionText: "Depth-First Search", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "C" },
        { optionText: "Tower of Hanoi", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which technique is typically used in dynamic programming?",
      options: [
        { optionText: "Divide and Conquer", optionTag: "A" },
        { optionText: "Memoization", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "C" },
        { optionText: "Heapsort", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the main benefit of memoization?",
      options: [
        { optionText: "It saves time by caching results", optionTag: "A" },
        { optionText: "It reduces space complexity", optionTag: "B" },
        { optionText: "It simplifies code readability", optionTag: "C" },
        { optionText: "It increases stack size", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of Fibonacci using dynamic programming?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(n^2)", optionTag: "B" },
        { optionText: "O(2^n)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following problems can be solved using DP?",
      options: [
        { optionText: "0/1 Knapsack", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Prim's Algorithm", optionTag: "C" },
        { optionText: "Linear Search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does overlapping subproblems mean?",
      options: [
        { optionText: "Solving same subproblems multiple times", optionTag: "A" },
        { optionText: "Dividing input into equal halves", optionTag: "B" },
        { optionText: "Avoiding redundant calls", optionTag: "C" },
        { optionText: "Allocating arrays", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Tabulation is a _____ approach.",
      options: [
        { optionText: "Top-down", optionTag: "A" },
        { optionText: "Bottom-up", optionTag: "B" },
        { optionText: "Recursive", optionTag: "C" },
        { optionText: "Randomized", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which storage is used for tabulation?",
      options: [
        { optionText: "Array or matrix", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Queue", optionTag: "C" },
        { optionText: "Hashmap only", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which problem is NOT solved by dynamic programming?",
      options: [
        { optionText: "Longest Common Subsequence", optionTag: "A" },
        { optionText: "Dijkstra's Algorithm", optionTag: "B" },
        { optionText: "Edit Distance", optionTag: "C" },
        { optionText: "Rod Cutting", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the main idea behind DP?",
      options: [
        { optionText: "Break down problems into overlapping subproblems", optionTag: "A" },
        { optionText: "Greedily take best option", optionTag: "B" },
        { optionText: "Loop through input", optionTag: "C" },
        { optionText: "Randomize solutions", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method improves recursive DP performance?",
      options: [
        { optionText: "Memoization", optionTag: "A" },
        { optionText: "Recursion depth", optionTag: "B" },
        { optionText: "Loop unrolling", optionTag: "C" },
        { optionText: "Garbage collection", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In Java, which structure is best for storing DP states?",
      options: [
        { optionText: "Array or HashMap", optionTag: "A" },
        { optionText: "TreeSet", optionTag: "B" },
        { optionText: "PriorityQueue", optionTag: "C" },
        { optionText: "Vector", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What's the complexity of the longest common subsequence using DP?",
      options: [
        { optionText: "O(m*n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is an example of bottom-up DP?",
      options: [
        { optionText: "Tabulation", optionTag: "A" },
        { optionText: "Recursion", optionTag: "B" },
        { optionText: "Memoization", optionTag: "C" },
        { optionText: "Backtracking", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is the base case in DP?",
      options: [
        { optionText: "The smallest subproblem with known answer", optionTag: "A" },
        { optionText: "Last index", optionTag: "B" },
        { optionText: "First index", optionTag: "C" },
        { optionText: "Null value", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How does DP improve recursion?",
      options: [
        { optionText: "Avoids recalculating subproblems", optionTag: "A" },
        { optionText: "Reduces loops", optionTag: "B" },
        { optionText: "Skips function calls", optionTag: "C" },
        { optionText: "Allocates memory fast", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which problem applies DP and has multiple ways to climb stairs?",
      options: [
        { optionText: "Staircase Problem", optionTag: "A" },
        { optionText: "Maze Path", optionTag: "B" },
        { optionText: "Heap Sort", optionTag: "C" },
        { optionText: "AVL Tree", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "DP works best when:",
      options: [
        { optionText: "Subproblems are repeated", optionTag: "A" },
        { optionText: "Each problem is unique", optionTag: "B" },
        { optionText: "Only one solution exists", optionTag: "C" },
        { optionText: "Greedy solution exists", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Can we solve all problems using dynamic programming?",
      options: [
        { optionText: "No, only problems with optimal substructure", optionTag: "A" },
        { optionText: "Yes, all problems", optionTag: "B" },
        { optionText: "Only recursive ones", optionTag: "C" },
        { optionText: "Only sorted inputs", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;