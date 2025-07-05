import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Searching Algorithms - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "This quiz evaluates deep understanding of searching algorithms, edge cases, and Java-based optimizations.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "SearchingAlgorithms"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which search algorithm is optimal for uniformly distributed sorted arrays?",
      options: [
        { optionText: "Jump Search", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Exponential Search", optionTag: "C" },
        { optionText: "Interpolation Search", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which search algorithm repeatedly divides the search space in half?",
      options: [
        { optionText: "Exponential Search", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Linear Search", optionTag: "C" },
        { optionText: "Jump Search", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which search algorithm is suitable for infinite size arrays?",
      options: [
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Linear Search", optionTag: "B" },
        { optionText: "Exponential Search", optionTag: "C" },
        { optionText: "Ternary Search", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following is true about Linear Search?",
      options: [
        { optionText: "Always O(log n)", optionTag: "A" },
        { optionText: "Best-case O(1)", optionTag: "B" },
        { optionText: "Requires sorted array", optionTag: "C" },
        { optionText: "Requires binary tree", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the time complexity of Binary Search in the worst case?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which search algorithm is typically used in Jump Search?",
      options: [
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Ternary Search", optionTag: "B" },
        { optionText: "Linear Search", optionTag: "C" },
        { optionText: "Exponential Search", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "In Ternary Search, how is the array divided?",
      options: [
        { optionText: "Into 2 parts", optionTag: "A" },
        { optionText: "Into 4 parts", optionTag: "B" },
        { optionText: "Into 3 parts", optionTag: "C" },
        { optionText: "Into 5 parts", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which search is preferred when the array is unsorted and small?",
      options: [
        { optionText: "Ternary Search", optionTag: "A" },
        { optionText: "Linear Search", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "C" },
        { optionText: "Jump Search", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Exponential Search combines which two searching methods?",
      options: [
        { optionText: "Jump and Linear", optionTag: "A" },
        { optionText: "Binary and Interpolation", optionTag: "B" },
        { optionText: "Exponential and Binary", optionTag: "C" },
        { optionText: "Exponential and Linear", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What data structure can optimize search to O(1)?",
      options: [
        { optionText: "Binary Tree", optionTag: "A" },
        { optionText: "Array", optionTag: "B" },
        { optionText: "Hash Table", optionTag: "C" },
        { optionText: "Queue", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which algorithm uses three pointers to divide search space?",
      options: [
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Ternary Search", optionTag: "B" },
        { optionText: "Jump Search", optionTag: "C" },
        { optionText: "Exponential Search", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which Java collection provides binary search capabilities?",
      options: [
        { optionText: "HashMap", optionTag: "A" },
        { optionText: "LinkedList", optionTag: "B" },
        { optionText: "ArrayList with Collections.binarySearch()", optionTag: "C" },
        { optionText: "Stack", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which search algorithm expands its search range exponentially?",
      options: [
        { optionText: "Exponential Search", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Linear Search", optionTag: "C" },
        { optionText: "Jump Search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is a drawback of Interpolation Search?",
      options: [
        { optionText: "Only works for strings", optionTag: "A" },
        { optionText: "Requires uniform distribution", optionTag: "B" },
        { optionText: "Time complexity is always O(log n)", optionTag: "C" },
        { optionText: "Used for non-sorted arrays", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In Binary Search, which condition ends the loop?",
      options: [
        { optionText: "low < high", optionTag: "A" },
        { optionText: "low == high", optionTag: "B" },
        { optionText: "low <= high", optionTag: "C" },
        { optionText: "mid != high", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What happens if Binary Search is applied to an unsorted array?",
      options: [
        { optionText: "Always works", optionTag: "A" },
        { optionText: "Returns null", optionTag: "B" },
        { optionText: "Fails or gives incorrect result", optionTag: "C" },
        { optionText: "Time complexity improves", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which algorithm minimizes memory overhead?",
      options: [
        { optionText: "Exponential Search", optionTag: "A" },
        { optionText: "Ternary Search", optionTag: "B" },
        { optionText: "Linear Search", optionTag: "C" },
        { optionText: "Binary Search", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which search is effective in sorted data but wastes time in unsorted data?",
      options: [
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Linear Search", optionTag: "B" },
        { optionText: "Jump Search", optionTag: "C" },
        { optionText: "Exponential Search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is used in Divide and Conquer searching?",
      options: [
        { optionText: "Linear Search", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Interpolation Search", optionTag: "C" },
        { optionText: "Fibonacci Search", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the return value of Java's binarySearch() when the element is not found?",
      options: [
        { optionText: "null", optionTag: "A" },
        { optionText: "-1", optionTag: "B" },
        { optionText: "insertion point as negative value", optionTag: "C" },
        { optionText: "exception", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    }
  ]
};

export default quizData;