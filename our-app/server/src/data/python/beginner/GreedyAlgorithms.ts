import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python - Greedy Algorithms - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Quiz to assess understanding of Greedy Algorithms in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "GreedyAlgorithms",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the core idea behind greedy algorithms?",
      options: [
        { optionText: "Make the best choice at each step", optionTag: "A" },
        { optionText: "Try all possible solutions", optionTag: "B" },
        { optionText: "Use recursion for all cases", optionTag: "C" },
        { optionText: "Divide and merge subproblems", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of the following problems can be solved using greedy algorithms?",
      options: [
        { optionText: "Activity Selection Problem", optionTag: "C" },
        { optionText: "Tower of Hanoi", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Matrix Chain Multiplication", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which property must hold true for a greedy algorithm to work optimally?",
      options: [
        { optionText: "Greedy-choice property", optionTag: "B" },
        { optionText: "Recursive property", optionTag: "C" },
        { optionText: "Divide-and-conquer", optionTag: "A" },
        { optionText: "Memoization", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the output of a greedy algorithm?",
      options: [
        { optionText: "Locally optimal solution", optionTag: "A" },
        { optionText: "Always globally optimal solution", optionTag: "B" },
        { optionText: "Worst-case solution", optionTag: "C" },
        { optionText: "Approximation only", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which algorithm uses a greedy strategy?",
      options: [
        { optionText: "Dijkstra’s Algorithm", optionTag: "D" },
        { optionText: "Bubble Sort", optionTag: "A" },
        { optionText: "Depth First Search", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What is one key limitation of greedy algorithms?",
      options: [
        { optionText: "They may not provide global optimum", optionTag: "C" },
        { optionText: "They always require memoization", optionTag: "D" },
        { optionText: "They use recursion only", optionTag: "B" },
        { optionText: "They never terminate", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which problem is best suited for greedy strategy?",
      options: [
        { optionText: "Huffman Coding", optionTag: "B" },
        { optionText: "Fibonacci Calculation", optionTag: "A" },
        { optionText: "Tower of Hanoi", optionTag: "D" },
        { optionText: "N-Queens", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Greedy algorithms make decisions based on:",
      options: [
        { optionText: "Current available information", optionTag: "A" },
        { optionText: "Future consequences", optionTag: "B" },
        { optionText: "All previous states", optionTag: "D" },
        { optionText: "Backtracking solutions", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which is NOT a greedy algorithm?",
      options: [
        { optionText: "Kruskal's Algorithm", optionTag: "C" },
        { optionText: "Prim’s Algorithm", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Dijkstra’s Algorithm", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the goal of greedy strategy in optimization problems?",
      options: [
        { optionText: "Find locally optimal choices hoping for global optimum", optionTag: "C" },
        { optionText: "Generate all possible solutions", optionTag: "A" },
        { optionText: "Use dynamic programming table", optionTag: "B" },
        { optionText: "Store intermediate results", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Greedy algorithms generally use which type of traversal?",
      options: [
        { optionText: "Sequential", optionTag: "A" },
        { optionText: "Backtracking", optionTag: "D" },
        { optionText: "Recursive", optionTag: "C" },
        { optionText: "Memoization-based", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "In greedy algorithms, local decisions lead to:",
      options: [
        { optionText: "A feasible solution", optionTag: "B" },
        { optionText: "Always incorrect solution", optionTag: "D" },
        { optionText: "A recursive path", optionTag: "C" },
        { optionText: "Looping indefinitely", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What does the greedy strategy ignore?",
      options: [
        { optionText: "Global problem structure", optionTag: "A" },
        { optionText: "Optimality criterion", optionTag: "C" },
        { optionText: "Time complexity", optionTag: "B" },
        { optionText: "Memory allocation", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which data structure helps greedy algorithms in sorting based selections?",
      options: [
        { optionText: "Priority Queue", optionTag: "D" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Array", optionTag: "C" },
        { optionText: "Set", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Greedy algorithms are suitable for problems having:",
      options: [
        { optionText: "Greedy-choice property and optimal substructure", optionTag: "A" },
        { optionText: "Only memoization", optionTag: "D" },
        { optionText: "Infinite loops", optionTag: "C" },
        { optionText: "Fixed input only", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Greedy approach may not work well with:",
      options: [
        { optionText: "NP-complete problems", optionTag: "C" },
        { optionText: "Sorting problems", optionTag: "A" },
        { optionText: "Shortest path problems", optionTag: "D" },
        { optionText: "Spanning Tree problems", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the best-case time complexity of a greedy algorithm?",
      options: [
        { optionText: "O(n log n)", optionTag: "A" },
        { optionText: "Depends on the problem", optionTag: "C" },
        { optionText: "Always O(1)", optionTag: "D" },
        { optionText: "O(n^2)", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of these is true about greedy algorithms?",
      options: [
        { optionText: "They may not always give optimal result", optionTag: "B" },
        { optionText: "They are always faster than DP", optionTag: "C" },
        { optionText: "They store all subproblems", optionTag: "D" },
        { optionText: "They work only with integers", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "A greedy strategy makes a decision based on:",
      options: [
        { optionText: "What seems best at the moment", optionTag: "D" },
        { optionText: "Past experiences", optionTag: "A" },
        { optionText: "Recursive logic", optionTag: "B" },
        { optionText: "Backtracking methods", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which algorithm does NOT follow greedy strategy?",
      options: [
        { optionText: "Bellman-Ford", optionTag: "C" },
        { optionText: "Prim’s Algorithm", optionTag: "D" },
        { optionText: "Kruskal’s Algorithm", optionTag: "A" },
        { optionText: "Dijkstra’s Algorithm", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
  ],
};

export default quizData;