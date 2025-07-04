import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Binary Search - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Test your understanding of Binary Search and its applications in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Binary Search",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the time complexity of binary search in the best case?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is a prerequisite for applying binary search?",
      options: [
        { optionText: "Data must be unsorted", optionTag: "A" },
        { optionText: "Data must be sorted", optionTag: "B" },
        { optionText: "Data must be strings", optionTag: "C" },
        { optionText: "Data must be prime numbers", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following can binary search not be applied to?",
      options: [
        { optionText: "Sorted arrays", optionTag: "A" },
        { optionText: "Sorted linked lists", optionTag: "B" },
        { optionText: "Sorted strings", optionTag: "C" },
        { optionText: "Unsorted arrays", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which of these correctly represents the mid-point in binary search?",
      options: [
        { optionText: "(low + high) // 2", optionTag: "A" },
        { optionText: "(low - high) / 2", optionTag: "B" },
        { optionText: "low + high", optionTag: "C" },
        { optionText: "high - low", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Binary search is generally faster than linear search when:",
      options: [
        { optionText: "The list is unsorted", optionTag: "A" },
        { optionText: "The list is sorted", optionTag: "B" },
        { optionText: "The list contains strings", optionTag: "C" },
        { optionText: "The list contains large numbers", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What happens if the element is not present in binary search?",
      options: [
        { optionText: "It returns the last index", optionTag: "A" },
        { optionText: "It returns -1", optionTag: "B" },
        { optionText: "It throws an error", optionTag: "C" },
        { optionText: "It always returns 0", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the worst-case time complexity of binary search?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In Python, which module provides built-in functions for binary search?",
      options: [
        { optionText: "math", optionTag: "A" },
        { optionText: "collections", optionTag: "B" },
        { optionText: "bisect", optionTag: "C" },
        { optionText: "random", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which bisect function inserts an element to maintain sorted order?",
      options: [
        { optionText: "bisect.insort()", optionTag: "A" },
        { optionText: "bisect.find()", optionTag: "B" },
        { optionText: "bisect.sort()", optionTag: "C" },
        { optionText: "bisect.push()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which condition moves the binary search to the right half?",
      options: [
        { optionText: "target < mid", optionTag: "A" },
        { optionText: "target > mid", optionTag: "B" },
        { optionText: "target == mid", optionTag: "C" },
        { optionText: "target <= mid", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What kind of problems can binary search solve efficiently?",
      options: [
        { optionText: "Graph traversal", optionTag: "A" },
        { optionText: "Finding min/max in sorted conditions", optionTag: "B" },
        { optionText: "String reversal", optionTag: "C" },
        { optionText: "Recursion tracking", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following is a variation of binary search?",
      options: [
        { optionText: "Ternary search", optionTag: "A" },
        { optionText: "Exponential search", optionTag: "B" },
        { optionText: "Jump search", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Can binary search be used on a rotated sorted array?",
      options: [
        { optionText: "No", optionTag: "A" },
        { optionText: "Yes, with modifications", optionTag: "B" },
        { optionText: "Only for descending arrays", optionTag: "C" },
        { optionText: "Only for strings", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following causes incorrect results in binary search?",
      options: [
        { optionText: "Using floating-point numbers", optionTag: "A" },
        { optionText: "Using unsorted arrays", optionTag: "B" },
        { optionText: "Using negative numbers", optionTag: "C" },
        { optionText: "Using large arrays", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which scenario is suitable for applying binary search?",
      options: [
        { optionText: "Finding a missing number in a sorted array", optionTag: "A" },
        { optionText: "Detecting cycles in a graph", optionTag: "B" },
        { optionText: "Counting nodes in a tree", optionTag: "C" },
        { optionText: "Parsing strings", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following supports binary search naturally?",
      options: [
        { optionText: "List", optionTag: "A" },
        { optionText: "Set", optionTag: "B" },
        { optionText: "Sorted List", optionTag: "C" },
        { optionText: "Dictionary", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Binary search can be implemented using:",
      options: [
        { optionText: "Iteration", optionTag: "A" },
        { optionText: "Recursion", optionTag: "B" },
        { optionText: "Both", optionTag: "C" },
        { optionText: "None", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of these errors may occur in binary search code?",
      options: [
        { optionText: "Overflow in mid calculation", optionTag: "A" },
        { optionText: "Accessing invalid index", optionTag: "B" },
        { optionText: "Infinite loop", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Binary search is not suitable for:",
      options: [
        { optionText: "Finding frequency of a number", optionTag: "A" },
        { optionText: "Searching unsorted data", optionTag: "B" },
        { optionText: "Finding first occurrence", optionTag: "C" },
        { optionText: "Finding last occurrence", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How to avoid overflow in calculating mid?",
      options: [
        { optionText: "mid = (low + high) // 2", optionTag: "A" },
        { optionText: "mid = low + (high - low) // 2", optionTag: "B" },
        { optionText: "mid = high // 2", optionTag: "C" },
        { optionText: "mid = low * high", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;