import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Two Pointers - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "Master advanced problems using the Two Pointers technique in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Two Pointers"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the Two Pointers technique mainly used for?",
      options: [
        { optionText: "Divide and Conquer", optionTag: "D" },
        { optionText: "Dynamic Programming", optionTag: "A" },
        { optionText: "Solving problems on sorted arrays", optionTag: "B" },
        { optionText: "Hashing large inputs", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following problems can be solved using Two Pointers?",
      options: [
        { optionText: "Find pair with sum in sorted array", optionTag: "A" },
        { optionText: "Find min element in array", optionTag: "D" },
        { optionText: "Reverse a string", optionTag: "B" },
        { optionText: "Find frequency of element", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What’s the advantage of Two Pointers over brute-force?",
      options: [
        { optionText: "Less code complexity", optionTag: "C" },
        { optionText: "Improved time complexity", optionTag: "B" },
        { optionText: "Better space efficiency", optionTag: "D" },
        { optionText: "Avoids loops", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which direction do pointers move in the Two Pointers technique for sorted arrays?",
      options: [
        { optionText: "Both from start to end", optionTag: "C" },
        { optionText: "One from start, one from end", optionTag: "A" },
        { optionText: "Both from middle to ends", optionTag: "B" },
        { optionText: "Only one pointer used", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Two pointers help reduce time complexity from:",
      options: [
        { optionText: "O(n^2) to O(n)", optionTag: "C" },
        { optionText: "O(n) to O(log n)", optionTag: "D" },
        { optionText: "O(n) to O(1)", optionTag: "B" },
        { optionText: "O(n log n) to O(n^2)", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following Java code snippets correctly implements Two Pointers?",
      options: [
        { optionText: "while (i < j) { i++; j--; }", optionTag: "A" },
        { optionText: "for (int i = 0; i < n; i++) {}", optionTag: "C" },
        { optionText: "while (i < n) {}", optionTag: "D" },
        { optionText: "if (i == j) {}", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is NOT a use case for Two Pointers?",
      options: [
        { optionText: "Palindrome check", optionTag: "C" },
        { optionText: "Longest subarray sum", optionTag: "B" },
        { optionText: "Find middle of list", optionTag: "A" },
        { optionText: "Sort an array", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is required for applying Two Pointers technique?",
      options: [
        { optionText: "Array must be sorted", optionTag: "B" },
        { optionText: "Array should be even-length", optionTag: "C" },
        { optionText: "Array must contain only positives", optionTag: "A" },
        { optionText: "Array must be circular", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which Java class can support Two Pointer problems efficiently?",
      options: [
        { optionText: "LinkedList", optionTag: "A" },
        { optionText: "ArrayList", optionTag: "C" },
        { optionText: "Deque", optionTag: "D" },
        { optionText: "All of the above", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is a common mistake in Two Pointers problems?",
      options: [
        { optionText: "Not incrementing pointers", optionTag: "A" },
        { optionText: "Using recursion", optionTag: "B" },
        { optionText: "Sorting already sorted array", optionTag: "D" },
        { optionText: "Looping from wrong index", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which problem is best solved using Two Pointers?",
      options: [
        { optionText: "Pair sum equals target", optionTag: "C" },
        { optionText: "Find duplicates", optionTag: "D" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Find kth smallest", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the initial condition for Two Pointers?",
      options: [
        { optionText: "i = 0, j = array.length - 1", optionTag: "A" },
        { optionText: "i = j = array.length / 2", optionTag: "D" },
        { optionText: "j = 0, i = array.length - 1", optionTag: "C" },
        { optionText: "i = 1, j = 1", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Two Pointers cannot be used in which scenario?",
      options: [
        { optionText: "Finding triplets", optionTag: "D" },
        { optionText: "Rotating an array", optionTag: "B" },
        { optionText: "Palindrome check", optionTag: "C" },
        { optionText: "Finding pairs", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How many pointers are typically used in this technique?",
      options: [
        { optionText: "1", optionTag: "D" },
        { optionText: "2", optionTag: "B" },
        { optionText: "3", optionTag: "A" },
        { optionText: "Unlimited", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What’s the time complexity of most Two Pointers solutions?",
      options: [
        { optionText: "O(log n)", optionTag: "D" },
        { optionText: "O(n^2)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which pointer moves when the sum is less than target?",
      options: [
        { optionText: "Both", optionTag: "C" },
        { optionText: "Left pointer", optionTag: "A" },
        { optionText: "Right pointer", optionTag: "B" },
        { optionText: "None", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What should you check when using Two Pointers?",
      options: [
        { optionText: "Array is in descending order", optionTag: "B" },
        { optionText: "Target sum is present", optionTag: "A" },
        { optionText: "Proper index boundaries", optionTag: "C" },
        { optionText: "Memory allocation", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which sorting algorithm complements Two Pointer problems?",
      options: [
        { optionText: "Heap Sort", optionTag: "D" },
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Any stable sort", optionTag: "C" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the minimum array length for Two Pointers?",
      options: [
        { optionText: "2", optionTag: "A" },
        { optionText: "0", optionTag: "C" },
        { optionText: "1", optionTag: "B" },
        { optionText: "3", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;