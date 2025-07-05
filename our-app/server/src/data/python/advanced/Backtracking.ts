import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Backtracking - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Assess your skills in backtracking algorithms using Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Backtracking",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which of the following is a real-life example of a backtracking problem?",
      options: [
        { optionText: "Sudoku Solver", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Dijkstra’s Algorithm", optionTag: "C" },
        { optionText: "Bubble Sort", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the basic idea of backtracking?",
      options: [
        { optionText: "Try all possibilities and pick the best", optionTag: "A" },
        { optionText: "Explore all possibilities and undo last step if it fails", optionTag: "B" },
        { optionText: "Iterate through all elements", optionTag: "C" },
        { optionText: "Divide and merge", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which data structure is often used for implementing backtracking?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Heap", optionTag: "C" },
        { optionText: "Array", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Backtracking is most similar to which technique?",
      options: [
        { optionText: "Greedy", optionTag: "A" },
        { optionText: "Dynamic Programming", optionTag: "B" },
        { optionText: "Brute Force", optionTag: "C" },
        { optionText: "Memoization", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the base case for backtracking recursion?",
      options: [
        { optionText: "When partial solution is correct", optionTag: "A" },
        { optionText: "When an invalid state is reached", optionTag: "B" },
        { optionText: "When solution is found or no more options", optionTag: "C" },
        { optionText: "When the input is empty", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following problems is NOT typically solved using backtracking?",
      options: [
        { optionText: "N-Queens", optionTag: "A" },
        { optionText: "Subset Sum", optionTag: "B" },
        { optionText: "Quick Sort", optionTag: "C" },
        { optionText: "Maze Solving", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which Python statement is commonly used in backtracking to remove the last choice?",
      options: [
        { optionText: "continue", optionTag: "A" },
        { optionText: "return", optionTag: "B" },
        { optionText: "pop", optionTag: "C" },
        { optionText: "break", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "How is pruning used in backtracking?",
      options: [
        { optionText: "To remove repeated results", optionTag: "A" },
        { optionText: "To avoid invalid paths early", optionTag: "B" },
        { optionText: "To remove trailing zeros", optionTag: "C" },
        { optionText: "To optimize memory", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the worst-case time complexity of backtracking?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(2^n)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which technique can be combined with backtracking for optimization?",
      options: [
        { optionText: "Greedy", optionTag: "A" },
        { optionText: "Memoization", optionTag: "B" },
        { optionText: "Sorting", optionTag: "C" },
        { optionText: "Binary Search", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which step is essential to explore next state in backtracking?",
      options: [
        { optionText: "Change direction", optionTag: "A" },
        { optionText: "Recursively call for next decision", optionTag: "B" },
        { optionText: "Sort the array", optionTag: "C" },
        { optionText: "Break the loop", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following is a characteristic of backtracking solutions?",
      options: [
        { optionText: "Optimal substructure", optionTag: "A" },
        { optionText: "Greedy decisions", optionTag: "B" },
        { optionText: "Undo operations", optionTag: "C" },
        { optionText: "Tabulation", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "In the N-Queens problem, how is a conflict checked?",
      options: [
        { optionText: "By comparing row and column", optionTag: "A" },
        { optionText: "By checking diagonal and column", optionTag: "B" },
        { optionText: "By checking only rows", optionTag: "C" },
        { optionText: "By checking parity", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which scenario best suits backtracking?",
      options: [
        { optionText: "When there's only one possible path", optionTag: "A" },
        { optionText: "When multiple combinations need to be explored", optionTag: "B" },
        { optionText: "When input is pre-sorted", optionTag: "C" },
        { optionText: "When we have a graph", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of these can reduce the number of recursive calls in backtracking?",
      options: [
        { optionText: "Greedy choice", optionTag: "A" },
        { optionText: "Memoization", optionTag: "B" },
        { optionText: "Pruning", optionTag: "C" },
        { optionText: "Tabulation", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the output of a failed backtracking path?",
      options: [
        { optionText: "None", optionTag: "A" },
        { optionText: "False", optionTag: "B" },
        { optionText: "Return to previous call", optionTag: "C" },
        { optionText: "Throw error", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which algorithm is used for subset generation?",
      options: [
        { optionText: "Backtracking", optionTag: "A" },
        { optionText: "Greedy", optionTag: "B" },
        { optionText: "DFS", optionTag: "C" },
        { optionText: "Dijkstra’s", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which Python module helps with permutations used in backtracking?",
      options: [
        { optionText: "itertools", optionTag: "A" },
        { optionText: "math", optionTag: "B" },
        { optionText: "random", optionTag: "C" },
        { optionText: "os", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What do you do after an invalid state in backtracking?",
      options: [
        { optionText: "Try next possibility", optionTag: "A" },
        { optionText: "Terminate", optionTag: "B" },
        { optionText: "Repeat loop", optionTag: "C" },
        { optionText: "Call next function", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Backtracking can be visualized using which structure?",
      options: [
        { optionText: "Tree", optionTag: "A" },
        { optionText: "Graph", optionTag: "B" },
        { optionText: "Linked List", optionTag: "C" },
        { optionText: "Hash Map", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
  ],
};

export default quizData;