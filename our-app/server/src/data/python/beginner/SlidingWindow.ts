import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Sliding Window - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Evaluate your foundational knowledge of the Sliding Window technique in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Sliding Window"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the main purpose of the Sliding Window technique?",
      options: [
        { optionText: "Searching in a tree", optionTag: "A" },
        { optionText: "Finding subsequences in an array or string", optionTag: "B" },
        { optionText: "Binary search on array", optionTag: "C" },
        { optionText: "Sorting a list", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the time complexity of the basic sliding window approach?",
      options: [
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n!)", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which type of problems benefit most from sliding window?",
      options: [
        { optionText: "Problems involving substrings or subarrays", optionTag: "A" },
        { optionText: "Problems involving matrix multiplication", optionTag: "D" },
        { optionText: "Graph algorithms", optionTag: "B" },
        { optionText: "Tree traversal", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In sliding window, what happens to the window size?",
      options: [
        { optionText: "It never changes", optionTag: "C" },
        { optionText: "Always increases", optionTag: "B" },
        { optionText: "It can be fixed or variable", optionTag: "D" },
        { optionText: "Always decreases", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which data structure is often used with sliding window?",
      options: [
        { optionText: "Deque", optionTag: "B" },
        { optionText: "Tree", optionTag: "C" },
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Graph", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which function is helpful for slicing a list in Python?",
      options: [
        { optionText: "slice()", optionTag: "A" },
        { optionText: "zip()", optionTag: "C" },
        { optionText: "map()", optionTag: "D" },
        { optionText: "range()", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Sliding window is commonly used for:",
      options: [
        { optionText: "Finding maximum sum subarray of fixed size", optionTag: "C" },
        { optionText: "Binary tree traversals", optionTag: "A" },
        { optionText: "Sorting a matrix", optionTag: "D" },
        { optionText: "Prime number check", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following uses a fixed-size window?",
      options: [
        { optionText: "Kadane’s algorithm", optionTag: "D" },
        { optionText: "Find longest substring", optionTag: "C" },
        { optionText: "Max sum subarray of size k", optionTag: "B" },
        { optionText: "Fibonacci", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is usually tracked while sliding the window?",
      options: [
        { optionText: "Sum, max, or frequency", optionTag: "A" },
        { optionText: "Sort order", optionTag: "C" },
        { optionText: "Parent nodes", optionTag: "B" },
        { optionText: "Depth of tree", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What Python method removes the first element of a deque?",
      options: [
        { optionText: "popleft()", optionTag: "C" },
        { optionText: "pop(0)", optionTag: "A" },
        { optionText: "remove(0)", optionTag: "B" },
        { optionText: "shift()", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Can sliding window be used with strings?",
      options: [
        { optionText: "Yes", optionTag: "D" },
        { optionText: "Only in Java", optionTag: "A" },
        { optionText: "No", optionTag: "B" },
        { optionText: "Only in arrays", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "In a fixed window of size 3, what happens after 3 elements?",
      options: [
        { optionText: "Start over", optionTag: "C" },
        { optionText: "End loop", optionTag: "B" },
        { optionText: "Slide the window forward", optionTag: "A" },
        { optionText: "Double window size", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What data type does Python’s deque come from?",
      options: [
        { optionText: "collections", optionTag: "B" },
        { optionText: "itertools", optionTag: "A" },
        { optionText: "queue", optionTag: "D" },
        { optionText: "os", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What should you do when window size exceeds the limit?",
      options: [
        { optionText: "Shrink from left", optionTag: "D" },
        { optionText: "Push new element to end", optionTag: "C" },
        { optionText: "Do nothing", optionTag: "A" },
        { optionText: "Delete from end", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which helps implement variable-size windows?",
      options: [
        { optionText: "Condition-based shrinkage", optionTag: "C" },
        { optionText: "Fixed pointer", optionTag: "A" },
        { optionText: "Recursion", optionTag: "B" },
        { optionText: "Stack trace", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "When using sliding window, which error is common?",
      options: [
        { optionText: "Index out of range", optionTag: "B" },
        { optionText: "Syntax error", optionTag: "A" },
        { optionText: "Memory leak", optionTag: "D" },
        { optionText: "Stack overflow", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is a real-life use case of sliding window?",
      options: [
        { optionText: "Monitoring user activity", optionTag: "D" },
        { optionText: "Building SQL databases", optionTag: "B" },
        { optionText: "Rendering 3D graphics", optionTag: "C" },
        { optionText: "File compression", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Sliding window helps in optimizing:",
      options: [
        { optionText: "Time complexity", optionTag: "A" },
        { optionText: "HTML styling", optionTag: "C" },
        { optionText: "Database storage", optionTag: "D" },
        { optionText: "Memory leaks", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which Python loop is often used in sliding window?",
      options: [
        { optionText: "while", optionTag: "C" },
        { optionText: "do-while", optionTag: "A" },
        { optionText: "for", optionTag: "B" },
        { optionText: "recursive loop", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "When does sliding window become inefficient?",
      options: [
        { optionText: "For unsorted large data without optimization", optionTag: "B" },
        { optionText: "When using deque", optionTag: "A" },
        { optionText: "With binary data", optionTag: "D" },
        { optionText: "On short strings", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;