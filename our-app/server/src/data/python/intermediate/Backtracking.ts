import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Backtracking - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Test your knowledge of Backtracking techniques in Python with these intermediate-level questions.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Backtracking"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is backtracking?",
      options: [
        { optionText: "A method for building all solutions and abandoning invalid paths", optionTag: "A" },
        { optionText: "An algorithm that uses brute force to find all solutions", optionTag: "B" },
        { optionText: "A divide and conquer technique", optionTag: "C" },
        { optionText: "A greedy technique", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which problem is best suited for backtracking?",
      options: [
        { optionText: "N-Queens Problem", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Dijkstra’s Algorithm", optionTag: "C" },
        { optionText: "Sorting Arrays", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens when a condition fails in backtracking?",
      options: [
        { optionText: "The algorithm goes back and tries a different path", optionTag: "A" },
        { optionText: "The algorithm terminates immediately", optionTag: "B" },
        { optionText: "The program crashes", optionTag: "C" },
        { optionText: "An exception is thrown", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure is commonly used in backtracking?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Hash Table", optionTag: "C" },
        { optionText: "Heap", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Backtracking is typically implemented using which programming construct?",
      options: [
        { optionText: "Recursion", optionTag: "A" },
        { optionText: "Loops", optionTag: "B" },
        { optionText: "Conditional statements only", optionTag: "C" },
        { optionText: "Switch case", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which problem is NOT solved using backtracking?",
      options: [
        { optionText: "Finding shortest path in a graph", optionTag: "A" },
        { optionText: "N-Queens Problem", optionTag: "B" },
        { optionText: "Sudoku Solver", optionTag: "C" },
        { optionText: "Subset Sum Problem", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the base case in backtracking?",
      options: [
        { optionText: "When a valid solution is found", optionTag: "A" },
        { optionText: "When recursion depth exceeds limit", optionTag: "B" },
        { optionText: "When all possibilities are exhausted", optionTag: "C" },
        { optionText: "When loop ends", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which technique does backtracking rely on?",
      options: [
        { optionText: "Trial and error", optionTag: "A" },
        { optionText: "Memoization", optionTag: "B" },
        { optionText: "Greedy approach", optionTag: "C" },
        { optionText: "Tabulation", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In backtracking, a solution is built:",
      options: [
        { optionText: "Incrementally", optionTag: "A" },
        { optionText: "All at once", optionTag: "B" },
        { optionText: "From bottom up", optionTag: "C" },
        { optionText: "Randomly", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if no valid solution is found in backtracking?",
      options: [
        { optionText: "Return empty result or signal failure", optionTag: "A" },
        { optionText: "Raise exception", optionTag: "B" },
        { optionText: "Keep looping infinitely", optionTag: "C" },
        { optionText: "Crash the program", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which Python function is useful in backtracking for copying lists?",
      options: [
        { optionText: "copy()", optionTag: "A" },
        { optionText: "clone()", optionTag: "B" },
        { optionText: "split()", optionTag: "C" },
        { optionText: "extend()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is a major drawback of backtracking?",
      options: [
        { optionText: "It may take exponential time", optionTag: "A" },
        { optionText: "It always fails", optionTag: "B" },
        { optionText: "It needs greedy strategy", optionTag: "C" },
        { optionText: "It only works with integers", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Backtracking is NOT used in which of the following?",
      options: [
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Graph Coloring", optionTag: "B" },
        { optionText: "Sudoku Solver", optionTag: "C" },
        { optionText: "Word Search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What allows early pruning in backtracking?",
      options: [
        { optionText: "Constraint checks", optionTag: "A" },
        { optionText: "Infinite loops", optionTag: "B" },
        { optionText: "Memoization", optionTag: "C" },
        { optionText: "Global state", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which type of problems benefit from backtracking?",
      options: [
        { optionText: "Combinatorial", optionTag: "A" },
        { optionText: "Linear search", optionTag: "B" },
        { optionText: "Greedy", optionTag: "C" },
        { optionText: "Graph traversal", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What Python feature aids in backtracking?",
      options: [
        { optionText: "Recursion", optionTag: "A" },
        { optionText: "Classes", optionTag: "B" },
        { optionText: "Decorators", optionTag: "C" },
        { optionText: "Generators", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In backtracking, recursion is used to:",
      options: [
        { optionText: "Explore solution space", optionTag: "A" },
        { optionText: "Store all paths", optionTag: "B" },
        { optionText: "Improve speed", optionTag: "C" },
        { optionText: "Handle I/O", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Backtracking returns results when:",
      options: [
        { optionText: "Base case is reached", optionTag: "A" },
        { optionText: "Stack is full", optionTag: "B" },
        { optionText: "Loop ends", optionTag: "C" },
        { optionText: "None of the above", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In Python, which operator is used to create a copy of a list?",
      options: [
        { optionText: "[:]", optionTag: "A" },
        { optionText: "==", optionTag: "B" },
        { optionText: "*", optionTag: "C" },
        { optionText: "is", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What helps avoid unnecessary exploration in backtracking?",
      options: [
        { optionText: "Pruning", optionTag: "A" },
        { optionText: "Memoization", optionTag: "B" },
        { optionText: "Sorting", optionTag: "C" },
        { optionText: "Stack", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;
