import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Complexity Analysis - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Evaluate your understanding of time and space complexity analysis in Python programming.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Complexity Analysis"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the worst-case time complexity of quicksort?",
      options: [
        { optionText: "O(n^2)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following has the best average-case time complexity?",
      options: [
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Bubble Sort", optionTag: "C" },
        { optionText: "Insertion Sort", optionTag: "D" },
        { optionText: "Selection Sort", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the time complexity of accessing an element in a list by index?",
      options: [
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "D" },
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which function dominates in Big-O notation: O(n^2) or O(n log n)?",
      options: [
        { optionText: "O(n^2)", optionTag: "D" },
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "Both are same", optionTag: "A" },
        { optionText: "Cannot compare", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which has better time complexity: binary search or linear search?",
      options: [
        { optionText: "Binary search", optionTag: "A" },
        { optionText: "Linear search", optionTag: "D" },
        { optionText: "Both are equal", optionTag: "B" },
        { optionText: "Depends on data", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of checking for a key in a Python dictionary?",
      options: [
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" },
        { optionText: "O(n log n)", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which complexity class grows the fastest?",
      options: [
        { optionText: "O(2^n)", optionTag: "D" },
        { optionText: "O(n^2)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which sorting algorithm has the best worst-case complexity?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "C" },
        { optionText: "Bubble Sort", optionTag: "B" },
        { optionText: "Selection Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the space complexity of a recursive Fibonacci algorithm?",
      options: [
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(2^n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the average case time complexity for binary search?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "D" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does Big-O measure?",
      options: [
        { optionText: "Scalability", optionTag: "B" },
        { optionText: "Exact time", optionTag: "A" },
        { optionText: "Memory in GB", optionTag: "D" },
        { optionText: "Lines of code", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which is NOT a valid time complexity?",
      options: [
        { optionText: "O(n!)", optionTag: "C" },
        { optionText: "O(n^3)", optionTag: "A" },
        { optionText: "O(n/n)", optionTag: "D" },
        { optionText: "O(√n)", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which algorithm has exponential complexity?",
      options: [
        { optionText: "Backtracking", optionTag: "A" },
        { optionText: "Linear Search", optionTag: "D" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Bubble Sort", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity for inserting an item at the end of a Python list?",
      options: [
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "D" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which has the best worst-case time complexity?",
      options: [
        { optionText: "Merge Sort", optionTag: "D" },
        { optionText: "Heap Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Bubble Sort", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which notation represents average case?",
      options: [
        { optionText: "Θ (Theta)", optionTag: "B" },
        { optionText: "Ω (Omega)", optionTag: "C" },
        { optionText: "O (Big O)", optionTag: "A" },
        { optionText: "ξ (Xi)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the time complexity for checking if a list contains a value?",
      options: [
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "D" },
        { optionText: "O(n^2)", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which operation has constant space complexity?",
      options: [
        { optionText: "Swapping two variables", optionTag: "A" },
        { optionText: "Appending in a list", optionTag: "C" },
        { optionText: "Creating a copy", optionTag: "B" },
        { optionText: "Sorting", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is O(log n) complexity typically associated with?",
      options: [
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Linear Search", optionTag: "D" },
        { optionText: "Bubble Sort", optionTag: "A" },
        { optionText: "Fibonacci", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What does O(1) signify?",
      options: [
        { optionText: "Constant time", optionTag: "C" },
        { optionText: "Linear time", optionTag: "B" },
        { optionText: "Quadratic time", optionTag: "A" },
        { optionText: "Logarithmic time", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    }
  ]
};

export default quizData;