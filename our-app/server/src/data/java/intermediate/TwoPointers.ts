import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Two Pointers - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "Test your understanding of the two pointers technique in Java programming.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "TwoPointers"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the primary goal of the two pointers technique?",
      options: [
        { optionText: "To use recursion efficiently", optionTag: "A" },
        { optionText: "To optimize space usage", optionTag: "B" },
        { optionText: "To solve problems in linear time", optionTag: "C" },
        { optionText: "To increase loop count", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What are typical initial values for the two pointers in array problems?",
      options: [
        { optionText: "Start and end of the array", optionTag: "D" },
        { optionText: "Middle and end", optionTag: "A" },
        { optionText: "Both at index 0", optionTag: "B" },
        { optionText: "Random indices", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which type of problems is best solved using the two pointers technique?",
      options: [
        { optionText: "Graph traversal", optionTag: "A" },
        { optionText: "Prefix sum", optionTag: "B" },
        { optionText: "Array-based searching and pairing", optionTag: "C" },
        { optionText: "Tree construction", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "In which problem do we often apply the two pointers technique?",
      options: [
        { optionText: "Reversing a linked list", optionTag: "A" },
        { optionText: "Finding a pair with a target sum", optionTag: "B" },
        { optionText: "Dijkstra's algorithm", optionTag: "C" },
        { optionText: "Fibonacci calculation", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What condition often leads to moving the left pointer forward?",
      options: [
        { optionText: "Sum is less than target", optionTag: "A" },
        { optionText: "Sum is greater than target", optionTag: "B" },
        { optionText: "Sum equals target", optionTag: "C" },
        { optionText: "Array length is odd", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following must be true for applying two pointers efficiently?",
      options: [
        { optionText: "The array must be sorted", optionTag: "C" },
        { optionText: "Array should be a palindrome", optionTag: "A" },
        { optionText: "All elements must be positive", optionTag: "B" },
        { optionText: "Array length must be even", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the time complexity of a typical two pointer solution?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In a palindrome check using two pointers, when do you stop?",
      options: [
        { optionText: "When left > right", optionTag: "D" },
        { optionText: "After middle is reached", optionTag: "A" },
        { optionText: "After n iterations", optionTag: "B" },
        { optionText: "When array ends", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What's a typical use-case for a fast and slow pointer?",
      options: [
        { optionText: "Linked list cycle detection", optionTag: "B" },
        { optionText: "Sorting arrays", optionTag: "A" },
        { optionText: "Stack simulation", optionTag: "C" },
        { optionText: "String reverse", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following is true for two pointer problems?",
      options: [
        { optionText: "They are only used in dynamic programming", optionTag: "A" },
        { optionText: "They often reduce time complexity", optionTag: "C" },
        { optionText: "They require recursion", optionTag: "B" },
        { optionText: "They always need sorting", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which Java collection is best for implementing two pointer problems?",
      options: [
        { optionText: "LinkedList", optionTag: "D" },
        { optionText: "ArrayList", optionTag: "B" },
        { optionText: "HashMap", optionTag: "C" },
        { optionText: "TreeMap", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "When solving for subarrays with a fixed sum, what aids performance?",
      options: [
        { optionText: "Two pointers with sliding window", optionTag: "A" },
        { optionText: "Recursive backtracking", optionTag: "C" },
        { optionText: "Stack simulation", optionTag: "B" },
        { optionText: "Matrix storage", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if the left pointer never moves?",
      options: [
        { optionText: "Infinite loop", optionTag: "C" },
        { optionText: "Syntax error", optionTag: "B" },
        { optionText: "NullPointerException", optionTag: "A" },
        { optionText: "Wrong output", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which is not a two-pointer problem?",
      options: [
        { optionText: "Merging sorted arrays", optionTag: "B" },
        { optionText: "Longest substring without repeating", optionTag: "D" },
        { optionText: "Graph coloring", optionTag: "A" },
        { optionText: "Container with most water", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is the best condition to break a two pointer loop?",
      options: [
        { optionText: "left > right", optionTag: "D" },
        { optionText: "left == array.length", optionTag: "A" },
        { optionText: "right == 0", optionTag: "B" },
        { optionText: "left == 0", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What technique is often used with two pointers?",
      options: [
        { optionText: "Greedy", optionTag: "B" },
        { optionText: "Brute Force", optionTag: "C" },
        { optionText: "Recursion", optionTag: "A" },
        { optionText: "Divide and Conquer", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the output of comparing elements at left and right in two pointer?",
      options: [
        { optionText: "Check if sorted", optionTag: "A" },
        { optionText: "Check for pairing", optionTag: "C" },
        { optionText: "Check for BST", optionTag: "B" },
        { optionText: "Find max", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Two pointer is often preferred over nested loops because:",
      options: [
        { optionText: "Reduces time from O(n^2) to O(n)", optionTag: "D" },
        { optionText: "Increases readability", optionTag: "A" },
        { optionText: "Decreases memory", optionTag: "B" },
        { optionText: "Removes all bugs", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "In Java, how can we represent two pointers?",
      options: [
        { optionText: "Two index variables", optionTag: "B" },
        { optionText: "Pointers like in C", optionTag: "A" },
        { optionText: "Two arrays", optionTag: "C" },
        { optionText: "Two stacks", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;