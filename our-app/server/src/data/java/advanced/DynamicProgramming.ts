import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Dynamic Programming - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "Test your understanding of solving problems with overlapping subproblems and optimal substructure using dynamic programming.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "DynamicProgramming"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the main idea behind dynamic programming?",
      options: [
        { optionText: "Breaking problems into independent subproblems", optionTag: "D" },
        { optionText: "Backtracking", optionTag: "A" },
        { optionText: "Using recursion only", optionTag: "C" },
        { optionText: "Solving overlapping subproblems", optionTag: "B" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following is NOT a type of dynamic programming approach?",
      options: [
        { optionText: "Top-down with memoization", optionTag: "A" },
        { optionText: "Bottom-up", optionTag: "B" },
        { optionText: "Binary search", optionTag: "C" },
        { optionText: "Tabulation", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "In dynamic programming, what does memoization do?",
      options: [
        { optionText: "Stores results of subproblems", optionTag: "A" },
        { optionText: "Skips recursive calls", optionTag: "C" },
        { optionText: "Creates infinite loops", optionTag: "D" },
        { optionText: "Reduces input size", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of a naive recursive Fibonacci solution?",
      options: [
        { optionText: "O(n)", optionTag: "D" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "C" },
        { optionText: "O(2^n)", optionTag: "A" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which Java data structure is typically used for memoization?",
      options: [
        { optionText: "HashMap", optionTag: "B" },
        { optionText: "ArrayList", optionTag: "C" },
        { optionText: "Queue", optionTag: "A" },
        { optionText: "Set", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What property must a problem have to use dynamic programming?",
      options: [
        { optionText: "Greedy choice property", optionTag: "C" },
        { optionText: "Optimal substructure", optionTag: "D" },
        { optionText: "Non-determinism", optionTag: "B" },
        { optionText: "Randomness", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which problem is best solved using dynamic programming?",
      options: [
        { optionText: "Tower of Hanoi", optionTag: "C" },
        { optionText: "N-Queens", optionTag: "B" },
        { optionText: "Fibonacci number", optionTag: "D" },
        { optionText: "Graph coloring", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What does tabulation do in dynamic programming?",
      options: [
        { optionText: "Uses recursion", optionTag: "A" },
        { optionText: "Uses a table to solve subproblems iteratively", optionTag: "B" },
        { optionText: "Ignores overlapping subproblems", optionTag: "D" },
        { optionText: "Avoids storing subresults", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following is solved using DP?",
      options: [
        { optionText: "Shortest path in DAG", optionTag: "C" },
        { optionText: "Longest Increasing Subsequence", optionTag: "D" },
        { optionText: "Matrix Multiplication", optionTag: "A" },
        { optionText: "DFS traversal", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which technique is more memory efficient in DP?",
      options: [
        { optionText: "Top-down", optionTag: "B" },
        { optionText: "Divide and conquer", optionTag: "C" },
        { optionText: "Greedy", optionTag: "D" },
        { optionText: "Bottom-up with constant space", optionTag: "A" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Knapsack problem has what kind of solution approach in DP?",
      options: [
        { optionText: "Greedy", optionTag: "C" },
        { optionText: "Backtracking", optionTag: "D" },
        { optionText: "Tabulated matrix", optionTag: "B" },
        { optionText: "Binary search", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following is true for overlapping subproblems?",
      options: [
        { optionText: "Problems share subparts", optionTag: "A" },
        { optionText: "Each subproblem is unique", optionTag: "B" },
        { optionText: "Used only in greedy", optionTag: "C" },
        { optionText: "Unsolvable", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In tabulation, which direction is the solution built?",
      options: [
        { optionText: "Bottom to top", optionTag: "C" },
        { optionText: "Top to bottom", optionTag: "A" },
        { optionText: "Random access", optionTag: "D" },
        { optionText: "Circular loop", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the base case in Fibonacci DP solution?",
      options: [
        { optionText: "f(1)=1, f(2)=1", optionTag: "B" },
        { optionText: "f(0)=1", optionTag: "C" },
        { optionText: "f(n)=0", optionTag: "D" },
        { optionText: "f(1)=0", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which Java feature helps organize DP states better?",
      options: [
        { optionText: "Classes and methods", optionTag: "D" },
        { optionText: "Streams", optionTag: "A" },
        { optionText: "Exceptions", optionTag: "B" },
        { optionText: "Interfaces", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Why is memoization better for some recursive problems?",
      options: [
        { optionText: "Avoids re-computation", optionTag: "A" },
        { optionText: "Increases stack size", optionTag: "B" },
        { optionText: "Slower speed", optionTag: "C" },
        { optionText: "Better for BFS", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which condition is checked before storing in memoization table?",
      options: [
        { optionText: "Whether result already exists", optionTag: "C" },
        { optionText: "Whether recursion is over", optionTag: "B" },
        { optionText: "Whether input is even", optionTag: "A" },
        { optionText: "Whether base case hit", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How can DP help optimize exponential time algorithms?",
      options: [
        { optionText: "Avoids solving the same subproblem again", optionTag: "D" },
        { optionText: "Increases recursion", optionTag: "B" },
        { optionText: "Introduces randomness", optionTag: "C" },
        { optionText: "Ignores base cases", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is true about space complexity in dynamic programming?",
      options: [
        { optionText: "Can be optimized to O(1) in some cases", optionTag: "B" },
        { optionText: "Always O(n^2)", optionTag: "D" },
        { optionText: "Can't be reduced", optionTag: "A" },
        { optionText: "Only bottom-up uses memory", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which type of problems **cannot** be solved using DP?",
      options: [
        { optionText: "Problems without optimal substructure", optionTag: "C" },
        { optionText: "Problems with overlapping subproblems", optionTag: "A" },
        { optionText: "Problems like LIS", optionTag: "D" },
        { optionText: "Knapsack", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    }
  ]
};

export default quizData;