import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Two Pointers - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Test your skills in solving problems using the Two Pointers technique in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "TwoPointers",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the primary advantage of using the two pointers technique?",
      options: [
        { optionText: "It reduces space complexity", optionTag: "C" },
        { optionText: "It works only for unsorted arrays", optionTag: "B" },
        { optionText: "It ensures data integrity", optionTag: "A" },
        { optionText: "It guarantees recursion", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which problem is commonly solved using two pointers?",
      options: [
        { optionText: "Removing duplicates from sorted array", optionTag: "B" },
        { optionText: "Heap sort", optionTag: "C" },
        { optionText: "Matrix rotation", optionTag: "A" },
        { optionText: "Binary search", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Two pointers are typically used to:",
      options: [
        { optionText: "Traverse arrays from both ends", optionTag: "D" },
        { optionText: "Search through graphs", optionTag: "B" },
        { optionText: "Index hash tables", optionTag: "A" },
        { optionText: "Balance binary trees", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which data structure best supports two pointers?",
      options: [
        { optionText: "Array", optionTag: "A" },
        { optionText: "Set", optionTag: "B" },
        { optionText: "Dictionary", optionTag: "C" },
        { optionText: "Tree", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the best time complexity achievable using two pointers in a sorted array problem?",
      options: [
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following is solved efficiently using two pointers?",
      options: [
        { optionText: "Check if array has a pair with sum k", optionTag: "B" },
        { optionText: "Find MST in graph", optionTag: "C" },
        { optionText: "Evaluate postfix expression", optionTag: "D" },
        { optionText: "Traverse tree in preorder", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "In merging two sorted arrays, two pointers are used to:",
      options: [
        { optionText: "Avoid extra space", optionTag: "D" },
        { optionText: "Track max element", optionTag: "A" },
        { optionText: "Access mid element quickly", optionTag: "B" },
        { optionText: "Traverse both arrays efficiently", optionTag: "C" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "In the two pointers approach, what typically happens when the current sum is less than target?",
      options: [
        { optionText: "Move the left pointer right", optionTag: "A" },
        { optionText: "Move the right pointer left", optionTag: "D" },
        { optionText: "Reset both pointers", optionTag: "C" },
        { optionText: "Terminate the loop", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which condition helps terminate the loop in two pointers technique?",
      options: [
        { optionText: "left < right", optionTag: "B" },
        { optionText: "left > right", optionTag: "C" },
        { optionText: "left == mid", optionTag: "D" },
        { optionText: "right == end", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is a key benefit of using two pointers for palindrome checking?",
      options: [
        { optionText: "Reduces comparison count", optionTag: "C" },
        { optionText: "Avoids recursion", optionTag: "B" },
        { optionText: "Uses more space", optionTag: "D" },
        { optionText: "Speeds up sorting", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the limitation of the two pointers technique?",
      options: [
        { optionText: "Requires sorted input in most cases", optionTag: "D" },
        { optionText: "Uses excessive memory", optionTag: "A" },
        { optionText: "Only works on graphs", optionTag: "B" },
        { optionText: "Doesn't handle strings", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which sorting algorithm can internally use two pointers?",
      options: [
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Selection Sort", optionTag: "D" },
        { optionText: "Bubble Sort", optionTag: "C" },
        { optionText: "Insertion Sort", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "How do two pointers move in typical sorted array sum problems?",
      options: [
        { optionText: "One forward, one backward", optionTag: "A" },
        { optionText: "Both backward", optionTag: "B" },
        { optionText: "Both forward", optionTag: "D" },
        { optionText: "Static", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is an ideal use case of two pointers?",
      options: [
        { optionText: "Reverse string in-place", optionTag: "C" },
        { optionText: "Add two matrices", optionTag: "A" },
        { optionText: "Build heap", optionTag: "B" },
        { optionText: "Binary search", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which problem uses two pointers and a sliding window?",
      options: [
        { optionText: "Longest substring without repeating characters", optionTag: "D" },
        { optionText: "Heap insertion", optionTag: "C" },
        { optionText: "Sort linked list", optionTag: "A" },
        { optionText: "Find pivot", optionTag: "B" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which condition can fail two pointer logic?",
      options: [
        { optionText: "Unsorted data", optionTag: "B" },
        { optionText: "Even-length array", optionTag: "A" },
        { optionText: "Small array size", optionTag: "D" },
        { optionText: "Empty string", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What improves when using two pointers over nested loops?",
      options: [
        { optionText: "Time complexity", optionTag: "C" },
        { optionText: "Space complexity", optionTag: "B" },
        { optionText: "Stack depth", optionTag: "A" },
        { optionText: "Function calls", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What helps track elements within two pointers range?",
      options: [
        { optionText: "Window length", optionTag: "D" },
        { optionText: "Array size", optionTag: "A" },
        { optionText: "Pointer difference", optionTag: "C" },
        { optionText: "Element index", optionTag: "B" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Two pointers can simulate which behavior?",
      options: [
        { optionText: "Sliding window", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Queue", optionTag: "C" },
        { optionText: "Binary heap", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which one of these is least related to two pointers?",
      options: [
        { optionText: "Find kth largest element", optionTag: "B" },
        { optionText: "Palindrome check", optionTag: "A" },
        { optionText: "Substring search", optionTag: "C" },
        { optionText: "Two sum in sorted array", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
  ],
};

export default quizData;