import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Backtracking - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "Test your skills in solving complex recursive problems using backtracking in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Backtracking"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which of the following is a classic problem solved using backtracking?",
      options: [
        { optionText: "N-Queens Problem", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Bubble Sort", optionTag: "C" },
        { optionText: "Floyd-Warshall", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which data structure is most commonly used in backtracking algorithms?",
      options: [
        { optionText: "Queue", optionTag: "C" },
        { optionText: "Stack (via recursion)", optionTag: "D" },
        { optionText: "Heap", optionTag: "B" },
        { optionText: "Graph", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Backtracking is most similar to which of the following paradigms?",
      options: [
        { optionText: "Dynamic Programming", optionTag: "C" },
        { optionText: "Greedy", optionTag: "D" },
        { optionText: "Divide and Conquer", optionTag: "B" },
        { optionText: "Brute Force", optionTag: "A" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which condition is checked in the base case of a backtracking algorithm?",
      options: [
        { optionText: "All constraints are satisfied", optionTag: "A" },
        { optionText: "At least one condition is met", optionTag: "C" },
        { optionText: "Only partial solution is formed", optionTag: "D" },
        { optionText: "Stack is empty", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In Sudoku Solver using backtracking, what is the backtrack condition?",
      options: [
        { optionText: "A number violates Sudoku rule", optionTag: "D" },
        { optionText: "No number is filled", optionTag: "C" },
        { optionText: "Grid is empty", optionTag: "A" },
        { optionText: "Number is greater than 9", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which one is **not** a step in backtracking?",
      options: [
        { optionText: "Try a candidate", optionTag: "A" },
        { optionText: "Check constraints", optionTag: "B" },
        { optionText: "Commit permanently", optionTag: "C" },
        { optionText: "Backtrack on failure", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What makes backtracking inefficient in worst cases?",
      options: [
        { optionText: "Recursion depth", optionTag: "D" },
        { optionText: "Exponential time complexity", optionTag: "B" },
        { optionText: "Sorting overhead", optionTag: "A" },
        { optionText: "Memory leaks", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of these is often combined with backtracking for optimization?",
      options: [
        { optionText: "Bitmasking", optionTag: "C" },
        { optionText: "Memoization", optionTag: "A" },
        { optionText: "Pruning", optionTag: "D" },
        { optionText: "Binary Search", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What does 'pruning' mean in backtracking?",
      options: [
        { optionText: "Avoiding paths that won’t lead to a solution", optionTag: "C" },
        { optionText: "Cutting recursion depth", optionTag: "A" },
        { optionText: "Limiting memory usage", optionTag: "B" },
        { optionText: "Removing tree nodes", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "In the N-Queens problem, how many queens must be placed for an 8x8 board?",
      options: [
        { optionText: "6", optionTag: "B" },
        { optionText: "8", optionTag: "A" },
        { optionText: "4", optionTag: "D" },
        { optionText: "16", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Backtracking ensures all paths are explored using:",
      options: [
        { optionText: "Breadth-first traversal", optionTag: "B" },
        { optionText: "Heuristic tree search", optionTag: "C" },
        { optionText: "Depth-first traversal", optionTag: "D" },
        { optionText: "Level-order traversal", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which problem does backtracking solve **more efficiently** than brute-force?",
      options: [
        { optionText: "Maze Solver", optionTag: "A" },
        { optionText: "Sorting Numbers", optionTag: "B" },
        { optionText: "Calculating Pi", optionTag: "C" },
        { optionText: "Linear Search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In backtracking, what do we do after a failed attempt?",
      options: [
        { optionText: "Try another possibility", optionTag: "B" },
        { optionText: "End program", optionTag: "C" },
        { optionText: "Throw an error", optionTag: "A" },
        { optionText: "Return null", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which condition helps in reducing time complexity in backtracking?",
      options: [
        { optionText: "Checking constraints early", optionTag: "C" },
        { optionText: "Using try-catch", optionTag: "A" },
        { optionText: "Sorting input", optionTag: "B" },
        { optionText: "Using multiple threads", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "In permutation problems, what condition should be used to avoid repetition?",
      options: [
        { optionText: "Visited array", optionTag: "D" },
        { optionText: "Global counter", optionTag: "B" },
        { optionText: "None", optionTag: "A" },
        { optionText: "Priority queue", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Backtracking is often implemented using which programming structure?",
      options: [
        { optionText: "Recursion", optionTag: "A" },
        { optionText: "GOTO", optionTag: "B" },
        { optionText: "Loop nesting", optionTag: "D" },
        { optionText: "Inheritance", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In Java, what is the result of not returning on base case in recursion?",
      options: [
        { optionText: "Infinite recursion and stack overflow", optionTag: "B" },
        { optionText: "Correct output", optionTag: "C" },
        { optionText: "Compilation error", optionTag: "D" },
        { optionText: "Optimized execution", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What data type is used for representing visited elements in backtracking?",
      options: [
        { optionText: "boolean[]", optionTag: "C" },
        { optionText: "String[]", optionTag: "B" },
        { optionText: "int[]", optionTag: "A" },
        { optionText: "Map<Integer, List>", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the output of a backtracking method if no valid solution exists?",
      options: [
        { optionText: "Empty result or failure state", optionTag: "A" },
        { optionText: "NullPointerException", optionTag: "B" },
        { optionText: "Program crash", optionTag: "C" },
        { optionText: "Infinite loop", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is **not** a real-life application of backtracking?",
      options: [
        { optionText: "Solving mazes", optionTag: "A" },
        { optionText: "Sudoku", optionTag: "C" },
        { optionText: "Stock prediction", optionTag: "D" },
        { optionText: "Word search", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    }
  ]
};

export default quizData;