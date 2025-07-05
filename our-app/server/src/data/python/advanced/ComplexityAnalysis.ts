import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Complexity Analysis - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Evaluate your expertise in analyzing time and space complexities in advanced scenarios.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Complexity Analysis",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the time complexity of matrix multiplication using Strassen’s algorithm?",
      options: [
        { optionText: "O(n^2.81)", optionTag: "A" },
        { optionText: "O(n^3)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of the following has the best asymptotic time complexity?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the average-case time complexity of QuickSort?",
      options: [
        { optionText: "O(n log n)", optionTag: "A" },
        { optionText: "O(n^2)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which function grows fastest as n increases?",
      options: [
        { optionText: "O(n!)", optionTag: "A" },
        { optionText: "O(2^n)", optionTag: "B" },
        { optionText: "O(n^3)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the space complexity of MergeSort?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of the following indicates exponential complexity?",
      options: [
        { optionText: "O(2^n)", optionTag: "A" },
        { optionText: "O(n^2)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which notation is used to describe the lower bound of an algorithm?",
      options: [
        { optionText: "Ω (Omega)", optionTag: "A" },
        { optionText: "Θ (Theta)", optionTag: "B" },
        { optionText: "O (Big O)", optionTag: "C" },
        { optionText: "γ (Gamma)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "If an algorithm has complexity O(n^2), what happens when input doubles?",
      options: [
        { optionText: "Time becomes 4 times", optionTag: "A" },
        { optionText: "Time becomes 2 times", optionTag: "B" },
        { optionText: "Time becomes 8 times", optionTag: "C" },
        { optionText: "Time remains same", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of the following is not a valid complexity class?",
      options: [
        { optionText: "O(n!)", optionTag: "A" },
        { optionText: "O(√n)", optionTag: "B" },
        { optionText: "O(n^0.5)", optionTag: "C" },
        { optionText: "O(n/n!)", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What is the time complexity of traversing a binary tree using DFS?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which algorithm has best-case time complexity O(n)?",
      options: [
        { optionText: "Bubble Sort", optionTag: "A" },
        { optionText: "Selection Sort", optionTag: "B" },
        { optionText: "Merge Sort", optionTag: "C" },
        { optionText: "Insertion Sort", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What does amortized analysis calculate?",
      options: [
        { optionText: "Average cost per operation over a sequence", optionTag: "A" },
        { optionText: "Worst-case scenario", optionTag: "B" },
        { optionText: "Best-case scenario", optionTag: "C" },
        { optionText: "Expected runtime", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which data structure has O(1) average access time?",
      options: [
        { optionText: "Hash Table", optionTag: "A" },
        { optionText: "Array", optionTag: "B" },
        { optionText: "Linked List", optionTag: "C" },
        { optionText: "Stack", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which complexity class is better than O(n^2) but worse than O(n log n)?",
      options: [
        { optionText: "O(n^1.5)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n!)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which term is used to describe complexity of dynamic programming?",
      options: [
        { optionText: "Overlapping subproblems", optionTag: "A" },
        { optionText: "Greedy steps", optionTag: "B" },
        { optionText: "Logarithmic growth", optionTag: "C" },
        { optionText: "Divide and conquer", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the complexity of binary search in an unsorted array?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the maximum complexity of Dijkstra’s algorithm using a min heap?",
      options: [
        { optionText: "O(E + V log V)", optionTag: "A" },
        { optionText: "O(V^2)", optionTag: "B" },
        { optionText: "O(log E)", optionTag: "C" },
        { optionText: "O(E log V)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which function is tightest upper bound among O(n), O(n log n), O(n^2)?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "C" },
        { optionText: "All are equal", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which is faster for large data: O(n log n) or O(n^1.2)?",
      options: [
        { optionText: "O(n log n)", optionTag: "A" },
        { optionText: "O(n^1.2)", optionTag: "B" },
        { optionText: "Depends on constant", optionTag: "C" },
        { optionText: "Both are same", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which is NOT a common type of complexity analysis?",
      options: [
        { optionText: "Amortized", optionTag: "A" },
        { optionText: "Worst-case", optionTag: "B" },
        { optionText: "Expected", optionTag: "C" },
        { optionText: "Maximum-case", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    }
  ]
};

export default quizData;