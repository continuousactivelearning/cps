import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Sliding Window - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "Master advanced problems using the Sliding Window technique in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "SlidingWindow"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the Sliding Window technique used for?",
      options: [
        { optionText: "Problems with contiguous subarrays", optionTag: "A" },
        { optionText: "Tree traversals", optionTag: "B" },
        { optionText: "Binary Search problems", optionTag: "C" },
        { optionText: "Sorting arrays", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which problem can be solved efficiently using Sliding Window?",
      options: [
        { optionText: "Maximum sum subarray of size k", optionTag: "D" },
        { optionText: "Merge K sorted arrays", optionTag: "B" },
        { optionText: "Cycle detection in graphs", optionTag: "C" },
        { optionText: "Check balanced parentheses", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "In a fixed-size sliding window, what is the time complexity?",
      options: [
        { optionText: "O(k*n)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "D" },
        { optionText: "O(1)", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which data structure is commonly used in variable window problems?",
      options: [
        { optionText: "ArrayList", optionTag: "C" },
        { optionText: "Queue", optionTag: "A" },
        { optionText: "Deque", optionTag: "D" },
        { optionText: "Stack", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Sliding Window helps reduce which type of complexity?",
      options: [
        { optionText: "Time complexity from O(n^2) to O(n)", optionTag: "A" },
        { optionText: "Space complexity", optionTag: "C" },
        { optionText: "Code readability", optionTag: "D" },
        { optionText: "Memory leaks", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is a typical use-case of sliding window?",
      options: [
        { optionText: "Shortest substring with all characters", optionTag: "B" },
        { optionText: "DFS traversal", optionTag: "D" },
        { optionText: "Build BST", optionTag: "C" },
        { optionText: "Implement stack", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In Java, which method can be used to remove the first element of a Deque?",
      options: [
        { optionText: "pollFirst()", optionTag: "A" },
        { optionText: "remove()", optionTag: "C" },
        { optionText: "delete()", optionTag: "D" },
        { optionText: "pop()", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which class in Java is best suited for sliding window max problem?",
      options: [
        { optionText: "LinkedList", optionTag: "B" },
        { optionText: "Stack", optionTag: "D" },
        { optionText: "PriorityQueue", optionTag: "C" },
        { optionText: "Deque", optionTag: "A" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What causes the window to shrink in variable-size window problems?",
      options: [
        { optionText: "Unwanted elements in the window", optionTag: "D" },
        { optionText: "Lack of memory", optionTag: "B" },
        { optionText: "Pointer out of bounds", optionTag: "C" },
        { optionText: "Size exceeding array length", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the maximum number of windows in an array of size n and window size k?",
      options: [
        { optionText: "n - k + 1", optionTag: "C" },
        { optionText: "n / k", optionTag: "B" },
        { optionText: "k - 1", optionTag: "A" },
        { optionText: "n * k", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which scenario fits a dynamic sliding window?",
      options: [
        { optionText: "Sum of fixed k elements", optionTag: "B" },
        { optionText: "Longest substring with at most k distinct characters", optionTag: "C" },
        { optionText: "Array reversal", optionTag: "D" },
        { optionText: "Element search", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which Java function gets the last element in a Deque?",
      options: [
        { optionText: "getLast()", optionTag: "B" },
        { optionText: "peekLast()", optionTag: "A" },
        { optionText: "pollLast()", optionTag: "C" },
        { optionText: "removeLast()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which issue arises if window pointers are not moved properly?",
      options: [
        { optionText: "Infinite loop", optionTag: "C" },
        { optionText: "Null pointer exception", optionTag: "D" },
        { optionText: "Incorrect result", optionTag: "A" },
        { optionText: "Stack overflow", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "In sliding window maximum, what is maintained in the deque?",
      options: [
        { optionText: "Actual elements", optionTag: "D" },
        { optionText: "Indices of useful elements", optionTag: "A" },
        { optionText: "Sum of all windows", optionTag: "C" },
        { optionText: "Boolean flags", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "For finding max subarray sum, which algorithm uses sliding window?",
      options: [
        { optionText: "Kadane's algorithm", optionTag: "B" },
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Dijkstra", optionTag: "D" },
        { optionText: "Bellman-Ford", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which condition resets the window in some problems?",
      options: [
        { optionText: "Sum becomes negative", optionTag: "C" },
        { optionText: "Array ends", optionTag: "A" },
        { optionText: "Element not found", optionTag: "D" },
        { optionText: "Window full", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How many pointers are typically used in sliding window?",
      options: [
        { optionText: "Two", optionTag: "B" },
        { optionText: "Three", optionTag: "D" },
        { optionText: "One", optionTag: "C" },
        { optionText: "Four", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What happens if window size is larger than array?",
      options: [
        { optionText: "No window is processed", optionTag: "C" },
        { optionText: "All windows overlap", optionTag: "B" },
        { optionText: "All elements are one window", optionTag: "A" },
        { optionText: "Multiple windows formed", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which problem is NOT suitable for sliding window?",
      options: [
        { optionText: "Median of sorted array", optionTag: "D" },
        { optionText: "First repeating character", optionTag: "C" },
        { optionText: "Longest subarray with sum <= K", optionTag: "A" },
        { optionText: "Find max sum subarray", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Sliding window is most useful for:",
      options: [
        { optionText: "Contiguous subarray problems", optionTag: "A" },
        { optionText: "Sorting", optionTag: "C" },
        { optionText: "Recursion", optionTag: "D" },
        { optionText: "Tree traversal", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;