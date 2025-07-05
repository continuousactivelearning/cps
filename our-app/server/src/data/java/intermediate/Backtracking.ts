import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Backtracking - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "Test your understanding of Backtracking techniques in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Backtracking"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the basic idea of backtracking?",
      options: [
        { optionText: "Trying all possibilities recursively", optionTag: "A" },
        { optionText: "Divide and conquer", optionTag: "B" },
        { optionText: "Greedy decisions", optionTag: "C" },
        { optionText: "Iterative optimization", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which classic problem can be solved using backtracking?",
      options: [
        { optionText: "N-Queens Problem", optionTag: "A" },
        { optionText: "Fibonacci Series", optionTag: "B" },
        { optionText: "Sorting Numbers", optionTag: "C" },
        { optionText: "Matrix Multiplication", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure is typically used in backtracking?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Priority Queue", optionTag: "C" },
        { optionText: "Hash Table", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens when a condition fails during backtracking?",
      options: [
        { optionText: "Move forward", optionTag: "A" },
        { optionText: "Reset and try new path", optionTag: "B" },
        { optionText: "Restart program", optionTag: "C" },
        { optionText: "Throw error", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Backtracking is most similar to which algorithmic technique?",
      options: [
        { optionText: "Dynamic Programming", optionTag: "A" },
        { optionText: "Greedy Algorithm", optionTag: "B" },
        { optionText: "Brute Force", optionTag: "C" },
        { optionText: "Memoization", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following is NOT a backtracking problem?",
      options: [
        { optionText: "Tower of Hanoi", optionTag: "A" },
        { optionText: "Sudoku Solver", optionTag: "B" },
        { optionText: "N-Queens", optionTag: "C" },
        { optionText: "Rat in a Maze", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is a base case in backtracking?",
      options: [
        { optionText: "The final solution", optionTag: "A" },
        { optionText: "The first input", optionTag: "B" },
        { optionText: "The failure condition", optionTag: "C" },
        { optionText: "The recursive limit", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method is commonly used to undo a choice in backtracking?",
      options: [
        { optionText: "Push", optionTag: "A" },
        { optionText: "Pop", optionTag: "B" },
        { optionText: "Return", optionTag: "C" },
        { optionText: "Break", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the typical time complexity of a backtracking algorithm?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "Exponential", optionTag: "C" },
        { optionText: "Constant", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which Java keyword helps in returning from a recursive function?",
      options: [
        { optionText: "continue", optionTag: "A" },
        { optionText: "exit", optionTag: "B" },
        { optionText: "break", optionTag: "C" },
        { optionText: "return", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Backtracking can be optimized using:",
      options: [
        { optionText: "Memoization", optionTag: "A" },
        { optionText: "Branch and Bound", optionTag: "B" },
        { optionText: "Loops", optionTag: "C" },
        { optionText: "Sorting", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which problem uses permutations in backtracking?",
      options: [
        { optionText: "Subset Sum", optionTag: "A" },
        { optionText: "Graph Coloring", optionTag: "B" },
        { optionText: "Word Search", optionTag: "C" },
        { optionText: "String Permutations", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Backtracking is more efficient than brute-force when:",
      options: [
        { optionText: "Pruning is applied", optionTag: "A" },
        { optionText: "Memory is limited", optionTag: "B" },
        { optionText: "Input size is large", optionTag: "C" },
        { optionText: "Solutions are few", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you represent choices in backtracking?",
      options: [
        { optionText: "Array", optionTag: "A" },
        { optionText: "Graph", optionTag: "B" },
        { optionText: "Tree", optionTag: "C" },
        { optionText: "Stack", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is meant by 'pruning' in backtracking?",
      options: [
        { optionText: "Trying all options", optionTag: "A" },
        { optionText: "Skipping impossible paths", optionTag: "B" },
        { optionText: "Reversing steps", optionTag: "C" },
        { optionText: "Restarting algorithm", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which algorithm is NOT based on backtracking?",
      options: [
        { optionText: "Knight’s Tour", optionTag: "A" },
        { optionText: "Bubble Sort", optionTag: "B" },
        { optionText: "Sudoku Solver", optionTag: "C" },
        { optionText: "Word Search", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which is true for backtracking algorithms?",
      options: [
        { optionText: "Use only iteration", optionTag: "A" },
        { optionText: "Are linear in complexity", optionTag: "B" },
        { optionText: "Solve constraint satisfaction problems", optionTag: "C" },
        { optionText: "Always return optimal solution", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What does the backtracking function usually return?",
      options: [
        { optionText: "Boolean or void", optionTag: "A" },
        { optionText: "Integer only", optionTag: "B" },
        { optionText: "Float result", optionTag: "C" },
        { optionText: "String", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which problem requires backtracking with constraints?",
      options: [
        { optionText: "Graph traversal", optionTag: "A" },
        { optionText: "Sudoku", optionTag: "B" },
        { optionText: "String comparison", optionTag: "C" },
        { optionText: "Binary search", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Backtracking is most powerful when used with:",
      options: [
        { optionText: "Limited possibilities", optionTag: "A" },
        { optionText: "Small inputs", optionTag: "B" },
        { optionText: "Constraint satisfaction", optionTag: "C" },
        { optionText: "Iterative loops", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    }
  ]
};

export default quizData;