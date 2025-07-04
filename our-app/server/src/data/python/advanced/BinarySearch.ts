import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Binary Search - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Test your in-depth understanding of binary search algorithms and their variations.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Binary Search",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the time complexity of binary search on a sorted array?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of the following is a necessary condition for binary search?",
      options: [
        { optionText: "Sorted array", optionTag: "C" },
        { optionText: "Duplicate values", optionTag: "A" },
        { optionText: "Unsorted array", optionTag: "B" },
        { optionText: "Linked list", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What happens if we apply binary search on an unsorted array?",
      options: [
        { optionText: "Incorrect result", optionTag: "D" },
        { optionText: "It still works", optionTag: "A" },
        { optionText: "Throws an error", optionTag: "B" },
        { optionText: "O(n) time", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which of these problems uses binary search in its solution?",
      options: [
        { optionText: "Peak element finding", optionTag: "B" },
        { optionText: "Kruskal’s algorithm", optionTag: "A" },
        { optionText: "Heap sort", optionTag: "C" },
        { optionText: "Inorder traversal", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Binary search can be applied in which of the following data structures?",
      options: [
        { optionText: "Array", optionTag: "C" },
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Graph", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the main reason for using binary search?",
      options: [
        { optionText: "Faster search in sorted collections", optionTag: "B" },
        { optionText: "Ease of implementation", optionTag: "C" },
        { optionText: "Random access", optionTag: "D" },
        { optionText: "Memory efficiency", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What does binary search return if element is not found?",
      options: [
        { optionText: "Typically -1 or None", optionTag: "A" },
        { optionText: "First index", optionTag: "C" },
        { optionText: "Last index", optionTag: "B" },
        { optionText: "Middle index", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "How many times is the search space reduced in each step of binary search?",
      options: [
        { optionText: "Half", optionTag: "D" },
        { optionText: "One-third", optionTag: "B" },
        { optionText: "Constant", optionTag: "C" },
        { optionText: "Double", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which variant of binary search finds the first occurrence of a value?",
      options: [
        { optionText: "Lower bound search", optionTag: "B" },
        { optionText: "Upper bound search", optionTag: "C" },
        { optionText: "Interpolation search", optionTag: "D" },
        { optionText: "Fibonacci search", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Binary search tree allows which type of binary search?",
      options: [
        { optionText: "Recursive and iterative", optionTag: "A" },
        { optionText: "Graph traversal", optionTag: "B" },
        { optionText: "Heapify", optionTag: "C" },
        { optionText: "Hashing", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of the following errors may occur in binary search implementation?",
      options: [
        { optionText: "Integer overflow in mid calculation", optionTag: "C" },
        { optionText: "Out of memory", optionTag: "B" },
        { optionText: "Division by zero", optionTag: "A" },
        { optionText: "Index skipping", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which formula is safer for calculating middle index?",
      options: [
        { optionText: "mid = low + (high - low) // 2", optionTag: "D" },
        { optionText: "mid = (low + high)", optionTag: "A" },
        { optionText: "mid = low * high", optionTag: "B" },
        { optionText: "mid = (high - low) // 2", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What is a common modification of binary search?",
      options: [
        { optionText: "Finding nearest element", optionTag: "C" },
        { optionText: "Printing all elements", optionTag: "B" },
        { optionText: "Appending to array", optionTag: "A" },
        { optionText: "Hash indexing", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What kind of problems can binary search be extended to?",
      options: [
        { optionText: "Monotonic predicate-based problems", optionTag: "A" },
        { optionText: "Only linear arrays", optionTag: "B" },
        { optionText: "Circular queues", optionTag: "C" },
        { optionText: "Matrix exponentiation", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which search is more optimal when elements are uniformly distributed?",
      options: [
        { optionText: "Interpolation Search", optionTag: "B" },
        { optionText: "DFS", optionTag: "C" },
        { optionText: "BFS", optionTag: "D" },
        { optionText: "Binary Search", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Binary search over answer space is called:",
      options: [
        { optionText: "Parametric Search", optionTag: "C" },
        { optionText: "Flood fill", optionTag: "A" },
        { optionText: "Memoization", optionTag: "B" },
        { optionText: "Hash probing", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "When searching in rotated sorted arrays, binary search is:",
      options: [
        { optionText: "Modified to check sorted half", optionTag: "D" },
        { optionText: "Unusable", optionTag: "A" },
        { optionText: "Replaced by linear search", optionTag: "B" },
        { optionText: "Only iterative", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Binary search can also be applied on:",
      options: [
        { optionText: "Function outputs (monotonic functions)", optionTag: "B" },
        { optionText: "Trees", optionTag: "A" },
        { optionText: "Hash maps", optionTag: "C" },
        { optionText: "Stacks", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which binary search condition helps to avoid infinite loops?",
      options: [
        { optionText: "low <= high", optionTag: "A" },
        { optionText: "low < high", optionTag: "B" },
        { optionText: "high != mid", optionTag: "C" },
        { optionText: "low == high", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "If we search 16 elements with binary search, max comparisons are:",
      options: [
        { optionText: "4", optionTag: "C" },
        { optionText: "8", optionTag: "D" },
        { optionText: "2", optionTag: "A" },
        { optionText: "5", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
  ],
};

export default quizData;