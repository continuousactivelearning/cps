import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Sliding Window - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "Assess your understanding of the sliding window technique in Java programming.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "SlidingWindow"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the main advantage of the sliding window technique?",
      options: [
        { optionText: "Increases memory usage", optionTag: "A" },
        { optionText: "Decreases time complexity for subarray problems", optionTag: "B" },
        { optionText: "Reduces recursion depth", optionTag: "C" },
        { optionText: "Enhances data structure traversal", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is typically required to implement a sliding window?",
      options: [
        { optionText: "Fixed window size or condition", optionTag: "D" },
        { optionText: "Two stacks", optionTag: "A" },
        { optionText: "A hashmap", optionTag: "B" },
        { optionText: "A recursive function", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which problem can be solved using sliding window?",
      options: [
        { optionText: "Find maximum sum subarray of size k", optionTag: "C" },
        { optionText: "Depth-first search in graph", optionTag: "A" },
        { optionText: "Cycle detection in a graph", optionTag: "B" },
        { optionText: "Finding shortest path in matrix", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the time complexity of the optimized sliding window approach?",
      options: [
        { optionText: "O(n^2)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In Java, how do you define a window size of 3 while iterating?",
      options: [
        { optionText: "Using a for loop and 3 variables", optionTag: "A" },
        { optionText: "Using two pointers and a while loop", optionTag: "D" },
        { optionText: "Using recursion", optionTag: "B" },
        { optionText: "Using nested loops", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Sliding window is often combined with what data structure?",
      options: [
        { optionText: "Queue or deque", optionTag: "A" },
        { optionText: "TreeSet", optionTag: "B" },
        { optionText: "Graph", optionTag: "C" },
        { optionText: "Stack", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is true for sliding window?",
      options: [
        { optionText: "Increases time complexity", optionTag: "A" },
        { optionText: "Requires graph structure", optionTag: "B" },
        { optionText: "Reduces the number of iterations", optionTag: "C" },
        { optionText: "Only used for sorted arrays", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What type of problems is sliding window NOT ideal for?",
      options: [
        { optionText: "Subarray sum", optionTag: "A" },
        { optionText: "Longest substring", optionTag: "B" },
        { optionText: "Tree traversal", optionTag: "C" },
        { optionText: "Array max element tracking", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following uses dynamic window size?",
      options: [
        { optionText: "Maximum sum subarray of fixed size", optionTag: "A" },
        { optionText: "Longest substring without repeating characters", optionTag: "B" },
        { optionText: "Sliding max window", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In which case would you shrink the window from the left?",
      options: [
        { optionText: "To maintain the condition of no duplicates", optionTag: "A" },
        { optionText: "To increase the window size", optionTag: "B" },
        { optionText: "To reduce memory", optionTag: "C" },
        { optionText: "To reach the midpoint", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which sliding window variant maintains maximum value in a window?",
      options: [
        { optionText: "Max sliding window", optionTag: "D" },
        { optionText: "Fixed sum window", optionTag: "A" },
        { optionText: "Window average", optionTag: "B" },
        { optionText: "Two pointer sum", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "How is sliding window implemented efficiently for finding minimum?",
      options: [
        { optionText: "Using deque", optionTag: "B" },
        { optionText: "Using array list", optionTag: "A" },
        { optionText: "Using recursion", optionTag: "C" },
        { optionText: "Using binary search", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which condition is usually met to move the right pointer?",
      options: [
        { optionText: "While the window is valid", optionTag: "A" },
        { optionText: "Always move", optionTag: "B" },
        { optionText: "While left < right", optionTag: "C" },
        { optionText: "If array is sorted", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which case is a typical application of variable-size sliding window?",
      options: [
        { optionText: "Longest substring with k distinct characters", optionTag: "C" },
        { optionText: "Subarray with exact size k", optionTag: "A" },
        { optionText: "Cycle detection", optionTag: "B" },
        { optionText: "Heap sort", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the space complexity of sliding window problems?",
      options: [
        { optionText: "O(1) if no extra structures are used", optionTag: "D" },
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(k)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "How does sliding window improve brute force methods?",
      options: [
        { optionText: "Avoids repeated computation", optionTag: "C" },
        { optionText: "Uses divide and conquer", optionTag: "A" },
        { optionText: "Reduces memory usage", optionTag: "B" },
        { optionText: "Improves recursion stack", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Sliding window is best suited for which input?",
      options: [
        { optionText: "Linear data like arrays and strings", optionTag: "A" },
        { optionText: "Tree structures", optionTag: "C" },
        { optionText: "Graphs", optionTag: "B" },
        { optionText: "Hash maps", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What helps track elements in dynamic sliding window problems?",
      options: [
        { optionText: "HashMap or HashSet", optionTag: "C" },
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Heap", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which is a real-world use of sliding window?",
      options: [
        { optionText: "Network congestion control", optionTag: "D" },
        { optionText: "Syntax parsing", optionTag: "A" },
        { optionText: "Operating system boot", optionTag: "B" },
        { optionText: "Garbage collection", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which error might occur if left pointer is not updated?",
      options: [
        { optionText: "Infinite loop", optionTag: "B" },
        { optionText: "NullPointerException", optionTag: "A" },
        { optionText: "StackOverflow", optionTag: "C" },
        { optionText: "ArrayIndexOutOfBounds", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;