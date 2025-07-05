import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python - Backtracking - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Quiz to test foundational understanding of backtracking in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Backtracking",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the main principle behind backtracking?",
      options: [
        { optionText: "Trying all possible solutions", optionTag: "C" },
        { optionText: "Finding shortest path", optionTag: "A" },
        { optionText: "Using greedy steps", optionTag: "D" },
        { optionText: "Dividing and conquering", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which type of problems is backtracking mostly used for?",
      options: [
        { optionText: "Search problems with constraints", optionTag: "D" },
        { optionText: "Sorting large arrays", optionTag: "B" },
        { optionText: "Memory optimization", optionTag: "C" },
        { optionText: "Graph traversals", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Backtracking is an improvement of which algorithm design method?",
      options: [
        { optionText: "Divide and Conquer", optionTag: "A" },
        { optionText: "Greedy", optionTag: "C" },
        { optionText: "Brute Force", optionTag: "B" },
        { optionText: "Dynamic Programming", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which data structure is commonly used in backtracking?",
      options: [
        { optionText: "Queue", optionTag: "C" },
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Linked List", optionTag: "D" },
        { optionText: "Heap", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "In backtracking, what happens when a solution fails?",
      options: [
        { optionText: "We restart from the beginning", optionTag: "B" },
        { optionText: "We discard the last choice and try another", optionTag: "D" },
        { optionText: "We terminate the program", optionTag: "A" },
        { optionText: "We sort the input again", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which of the following problems uses backtracking?",
      options: [
        { optionText: "N-Queens Problem", optionTag: "B" },
        { optionText: "Fibonacci Series", optionTag: "C" },
        { optionText: "Dijkstra's Algorithm", optionTag: "D" },
        { optionText: "Binary Search", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the output of a backtracking algorithm?",
      options: [
        { optionText: "All valid solutions", optionTag: "C" },
        { optionText: "Only the longest solution", optionTag: "D" },
        { optionText: "Random result", optionTag: "A" },
        { optionText: "None of the above", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What does pruning mean in backtracking?",
      options: [
        { optionText: "Skipping unpromising paths", optionTag: "A" },
        { optionText: "Resetting entire algorithm", optionTag: "D" },
        { optionText: "Increasing recursion depth", optionTag: "C" },
        { optionText: "Merging solutions", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which Python keyword helps in implementing recursion in backtracking?",
      options: [
        { optionText: "for", optionTag: "B" },
        { optionText: "def", optionTag: "C" },
        { optionText: "return", optionTag: "A" },
        { optionText: "if", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of the following is NOT a valid use of backtracking?",
      options: [
        { optionText: "Sudoku Solver", optionTag: "A" },
        { optionText: "Traveling Salesman Problem", optionTag: "B" },
        { optionText: "Merge Sort", optionTag: "D" },
        { optionText: "Word Search Puzzle", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    // 10 more
    {
      questionText: "How do we identify if backtracking is the right approach?",
      options: [
        { optionText: "Problem must have overlapping subproblems", optionTag: "C" },
        { optionText: "Problem has exponential number of combinations", optionTag: "A" },
        { optionText: "Problem is greedy in nature", optionTag: "D" },
        { optionText: "Problem must involve sorting", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the time complexity of backtracking in general?",
      options: [
        { optionText: "Polynomial", optionTag: "C" },
        { optionText: "Logarithmic", optionTag: "D" },
        { optionText: "Exponential", optionTag: "B" },
        { optionText: "Linear", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which is a better alternative to brute-force in some problems?",
      options: [
        { optionText: "Backtracking", optionTag: "C" },
        { optionText: "Heap Sort", optionTag: "D" },
        { optionText: "DFS", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which constraint is essential in backtracking problems?",
      options: [
        { optionText: "Ordering constraint", optionTag: "D" },
        { optionText: "Constraint satisfaction", optionTag: "B" },
        { optionText: "Memory constraint", optionTag: "C" },
        { optionText: "Time constraint", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the purpose of recursion in backtracking?",
      options: [
        { optionText: "To try all paths", optionTag: "A" },
        { optionText: "To repeat the solution", optionTag: "D" },
        { optionText: "To find maximum value", optionTag: "C" },
        { optionText: "To reduce memory", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What technique is often used to undo a decision in backtracking?",
      options: [
        { optionText: "Unmarking visited states", optionTag: "C" },
        { optionText: "Sorting", optionTag: "D" },
        { optionText: "Memoization", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following applications can use backtracking?",
      options: [
        { optionText: "Maze solving", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Prim’s Algorithm", optionTag: "D" },
        { optionText: "Heap Sort", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "In N-Queens problem, what is the objective?",
      options: [
        { optionText: "Place queens so that no two attack each other", optionTag: "B" },
        { optionText: "Maximize number of queens", optionTag: "D" },
        { optionText: "Find longest path", optionTag: "A" },
        { optionText: "Sort the board", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which Python structure best supports undo operation in backtracking?",
      options: [
        { optionText: "Stack", optionTag: "C" },
        { optionText: "List", optionTag: "A" },
        { optionText: "Dictionary", optionTag: "B" },
        { optionText: "Tuple", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following is typically true for backtracking algorithms?",
      options: [
        { optionText: "High memory usage", optionTag: "D" },
        { optionText: "Avoids recursion", optionTag: "B" },
        { optionText: "Constant space complexity", optionTag: "C" },
        { optionText: "Does not explore all paths", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
  ],
};

export default quizData;