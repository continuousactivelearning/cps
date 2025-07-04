// File: sliding_window.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Sliding Window - Beginner Quiz",
  quizLevel: "beginner",
  lang: "java",
  description: "This quiz evaluates your basic understanding of the Sliding Window technique in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Sliding Window"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the sliding window technique used for?",
      options: [
        { optionText: "Efficiently process subarrays", optionTag: "C" },
        { optionText: "Sort arrays", optionTag: "A" },
        { optionText: "Reverse arrays", optionTag: "B" },
        { optionText: "Binary search in arrays", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the typical time complexity of sliding window for sum of subarrays of size k?",
      options: [
        { optionText: "O(n*k)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "D" },
        { optionText: "O(k)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which data structure is most commonly used with sliding window?",
      options: [
        { optionText: "HashMap only", optionTag: "A" },
        { optionText: "Array or Queue", optionTag: "B" },
        { optionText: "Stack", optionTag: "C" },
        { optionText: "Set", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In Java, which loop is typically used to implement sliding window?",
      options: [
        { optionText: "Do-while loop", optionTag: "B" },
        { optionText: "For loop", optionTag: "C" },
        { optionText: "Switch", optionTag: "D" },
        { optionText: "While loop", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How many pointers are usually used in sliding window problems?",
      options: [
        { optionText: "Two", optionTag: "A" },
        { optionText: "One", optionTag: "B" },
        { optionText: "Three", optionTag: "C" },
        { optionText: "Zero", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the main benefit of the sliding window technique?",
      options: [
        { optionText: "Uses more memory", optionTag: "A" },
        { optionText: "Reduces time complexity", optionTag: "B" },
        { optionText: "Slower than brute force", optionTag: "C" },
        { optionText: "Is only useful for sorting", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which Java collection helps in maintaining max elements in a sliding window?",
      options: [
        { optionText: "Deque", optionTag: "C" },
        { optionText: "HashSet", optionTag: "A" },
        { optionText: "ArrayList", optionTag: "B" },
        { optionText: "LinkedList", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How do you slide the window to the right?",
      options: [
        { optionText: "Use reverse", optionTag: "D" },
        { optionText: "Decrement both pointers", optionTag: "B" },
        { optionText: "Multiply window size", optionTag: "C" },
        { optionText: "Increment the start and end pointers", optionTag: "A" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "For fixed-size windows, how is the window size maintained?",
      options: [
        { optionText: "Use Math.random()", optionTag: "A" },
        { optionText: "Only use one pointer", optionTag: "B" },
        { optionText: "Check memory size", optionTag: "D" },
        { optionText: "Subtract start from end and compare with size", optionTag: "C" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "When should you shrink the window in sliding window problems?",
      options: [
        { optionText: "Never", optionTag: "D" },
        { optionText: "When condition exceeds the required limits", optionTag: "A" },
        { optionText: "When elements are in order", optionTag: "B" },
        { optionText: "At every iteration", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which problem is ideal for sliding window?",
      options: [
        { optionText: "Sorting an array", optionTag: "B" },
        { optionText: "Maximum sum subarray of size k", optionTag: "D" },
        { optionText: "Merging arrays", optionTag: "C" },
        { optionText: "Printing patterns", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "How is the sum of a new window computed efficiently?",
      options: [
        { optionText: "Use nested loops", optionTag: "C" },
        { optionText: "Use recursion", optionTag: "D" },
        { optionText: "Subtract outgoing and add incoming value", optionTag: "B" },
        { optionText: "Recalculate entire window", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which package is required to use Deque in Java?",
      options: [
        { optionText: "java.math", optionTag: "B" },
        { optionText: "java.lang", optionTag: "D" },
        { optionText: "java.util", optionTag: "A" },
        { optionText: "java.io", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if you forget to shrink the window?",
      options: [
        { optionText: "Window size grows indefinitely", optionTag: "A" },
        { optionText: "Time complexity improves", optionTag: "C" },
        { optionText: "StackOverflow error", optionTag: "D" },
        { optionText: "Program sorts array", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is true about sliding window?",
      options: [
        { optionText: "Only works on sorted arrays", optionTag: "C" },
        { optionText: "It improves brute-force approach", optionTag: "B" },
        { optionText: "It uses extra loops always", optionTag: "D" },
        { optionText: "It reduces space", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the initial value of both pointers usually?",
      options: [
        { optionText: "Not required", optionTag: "D" },
        { optionText: "Zero", optionTag: "A" },
        { optionText: "Window size", optionTag: "B" },
        { optionText: "Length of array", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Can sliding window be used on strings?",
      options: [
        { optionText: "Only on arrays", optionTag: "D" },
        { optionText: "Only if string is numeric", optionTag: "C" },
        { optionText: "Yes", optionTag: "A" },
        { optionText: "No", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Sliding window works best with?",
      options: [
        { optionText: "Contiguous elements", optionTag: "B" },
        { optionText: "Sorted arrays only", optionTag: "C" },
        { optionText: "Reversed arrays", optionTag: "D" },
        { optionText: "Non-contiguous elements", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which window type is harder to implement?",
      options: [
        { optionText: "Dynamic-size window", optionTag: "D" },
        { optionText: "Zero-size window", optionTag: "C" },
        { optionText: "Fixed-size window", optionTag: "A" },
        { optionText: "No window", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which algorithm uses sliding window?",
      options: [
        { optionText: "Dijkstra’s Algorithm", optionTag: "B" },
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Longest substring without repeating characters", optionTag: "C" },
        { optionText: "Binary Search", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    }
  ]
};

export default quizData;