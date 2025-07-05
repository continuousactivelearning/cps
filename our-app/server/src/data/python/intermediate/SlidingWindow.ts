import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Sliding Window - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Assess your knowledge of the Sliding Window technique in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "SlidingWindow",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the Sliding Window technique primarily used for?",
      options: [
        { optionText: "Traversing trees", optionTag: "A" },
        { optionText: "Solving problems involving fixed or variable range of elements", optionTag: "B" },
        { optionText: "Building heaps", optionTag: "C" },
        { optionText: "Recursively breaking problems", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the time complexity of most sliding window solutions?",
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
      questionText: "Which data structure is often used with sliding window for max/min problems?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue/Deque", optionTag: "B" },
        { optionText: "Heap", optionTag: "C" },
        { optionText: "Linked List", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is a requirement for applying the sliding window technique?",
      options: [
        { optionText: "Unordered data", optionTag: "A" },
        { optionText: "Continuous data structure like array", optionTag: "B" },
        { optionText: "Recursive structure", optionTag: "C" },
        { optionText: "Hash map", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What happens in the window when new elements are added?",
      options: [
        { optionText: "The window shrinks", optionTag: "A" },
        { optionText: "Old elements are removed", optionTag: "B" },
        { optionText: "The array is reversed", optionTag: "C" },
        { optionText: "Recursion is triggered", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following can be solved using sliding window?",
      options: [
        { optionText: "Find all primes", optionTag: "A" },
        { optionText: "Longest substring without repeating characters", optionTag: "B" },
        { optionText: "Cycle detection", optionTag: "C" },
        { optionText: "Binary search", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the purpose of shrinking the window?",
      options: [
        { optionText: "To increase space complexity", optionTag: "A" },
        { optionText: "To explore smaller subsets of the data", optionTag: "B" },
        { optionText: "To sort the data", optionTag: "C" },
        { optionText: "To find the minimum in a binary tree", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which problem is NOT suitable for sliding window?",
      options: [
        { optionText: "Maximum subarray of size k", optionTag: "A" },
        { optionText: "Minimum window substring", optionTag: "B" },
        { optionText: "Tree traversal", optionTag: "C" },
        { optionText: "Longest repeating character replacement", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Sliding window technique usually optimizes which aspect?",
      options: [
        { optionText: "Recursion depth", optionTag: "A" },
        { optionText: "Space complexity", optionTag: "B" },
        { optionText: "Time complexity", optionTag: "C" },
        { optionText: "Input size", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is an initial step in sliding window algorithms?",
      options: [
        { optionText: "Sort the array", optionTag: "A" },
        { optionText: "Set up two pointers", optionTag: "B" },
        { optionText: "Use recursion", optionTag: "C" },
        { optionText: "Create a graph", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the typical window size for maximum sum subarray of size k?",
      options: [
        { optionText: "1", optionTag: "A" },
        { optionText: "n", optionTag: "B" },
        { optionText: "k", optionTag: "C" },
        { optionText: "log k", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What data structure is least likely used with sliding window?",
      options: [
        { optionText: "Deque", optionTag: "A" },
        { optionText: "Heap", optionTag: "B" },
        { optionText: "Graph", optionTag: "C" },
        { optionText: "Array", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "In variable sliding window, what determines the window expansion or shrinkage?",
      options: [
        { optionText: "Recursion depth", optionTag: "A" },
        { optionText: "Problem constraints or logic", optionTag: "B" },
        { optionText: "Data type", optionTag: "C" },
        { optionText: "Graph connections", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which sliding window problem involves string manipulation?",
      options: [
        { optionText: "Check palindrome", optionTag: "A" },
        { optionText: "Minimum window containing all characters", optionTag: "B" },
        { optionText: "Prefix sum", optionTag: "C" },
        { optionText: "Cycle detection", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is used to store elements inside window for advanced cases?",
      options: [
        { optionText: "Set", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Deque or dictionary", optionTag: "C" },
        { optionText: "Heap", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Sliding window is ideal when we need to process:",
      options: [
        { optionText: "Entire array repeatedly", optionTag: "A" },
        { optionText: "All elements at once", optionTag: "B" },
        { optionText: "Subsets or segments of data", optionTag: "C" },
        { optionText: "Random access", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following is NOT a step in sliding window approach?",
      options: [
        { optionText: "Initialize window boundaries", optionTag: "A" },
        { optionText: "Expand/shrink the window", optionTag: "B" },
        { optionText: "Recursively divide array", optionTag: "C" },
        { optionText: "Track optimal value", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which problem requires adjusting window when character counts match?",
      options: [
        { optionText: "Top K frequent elements", optionTag: "A" },
        { optionText: "Minimum window substring", optionTag: "B" },
        { optionText: "Maximum depth of tree", optionTag: "C" },
        { optionText: "Union of intervals", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "How do you handle character frequency in sliding window for strings?",
      options: [
        { optionText: "Use a queue", optionTag: "A" },
        { optionText: "Use a set", optionTag: "B" },
        { optionText: "Use a hash map", optionTag: "C" },
        { optionText: "Use a list", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is an example of a problem where window size is dynamic?",
      options: [
        { optionText: "Maximum subarray sum of size k", optionTag: "A" },
        { optionText: "Find longest substring without repeating characters", optionTag: "B" },
        { optionText: "Sort array", optionTag: "C" },
        { optionText: "Binary search", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    }
  ]
};

export default quizData;