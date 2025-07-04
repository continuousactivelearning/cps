import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Two Pointers - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Test your understanding of Two Pointers technique in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Two Pointers",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the main use of the two-pointer technique?",
      options: [
        { optionText: "Sorting arrays", optionTag: "A" },
        { optionText: "Reducing space complexity", optionTag: "B" },
        { optionText: "Solving problems efficiently on arrays", optionTag: "C" },
        { optionText: "Building trees", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is a common prerequisite for applying the two-pointer technique?",
      options: [
        { optionText: "Unsorted arrays", optionTag: "A" },
        { optionText: "Graphs", optionTag: "B" },
        { optionText: "Sorted arrays", optionTag: "C" },
        { optionText: "Strings only", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the typical time complexity for a two-pointer solution?",
      options: [
        { optionText: "O(n^2)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which of the following problems is best solved using two pointers?",
      options: [
        { optionText: "Finding the middle element", optionTag: "A" },
        { optionText: "Finding a pair with a given sum", optionTag: "B" },
        { optionText: "Counting leaf nodes in a tree", optionTag: "C" },
        { optionText: "Graph coloring", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of these is NOT suitable for two pointers?",
      options: [
        { optionText: "Removing duplicates in sorted array", optionTag: "A" },
        { optionText: "Cycle detection in linked list", optionTag: "B" },
        { optionText: "Finding max in unsorted array", optionTag: "C" },
        { optionText: "Palindrome check", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which approach is similar to two pointers?",
      options: [
        { optionText: "DFS", optionTag: "A" },
        { optionText: "Sliding window", optionTag: "B" },
        { optionText: "DP", optionTag: "C" },
        { optionText: "BFS", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "When using two pointers from both ends of an array, when do we stop?",
      options: [
        { optionText: "When left == right", optionTag: "A" },
        { optionText: "When left < right", optionTag: "B" },
        { optionText: "When left > right", optionTag: "C" },
        { optionText: "Always", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What data structure is best suited for two pointers?",
      options: [
        { optionText: "Dictionary", optionTag: "A" },
        { optionText: "Graph", optionTag: "B" },
        { optionText: "Array", optionTag: "C" },
        { optionText: "Stack", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which operation benefits most from two pointers?",
      options: [
        { optionText: "Binary search", optionTag: "A" },
        { optionText: "Finding pairs with specific conditions", optionTag: "B" },
        { optionText: "Heap insertion", optionTag: "C" },
        { optionText: "Graph traversal", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following uses two pointers on linked lists?",
      options: [
        { optionText: "Find intersection", optionTag: "A" },
        { optionText: "Find parent node", optionTag: "B" },
        { optionText: "Insert node", optionTag: "C" },
        { optionText: "Sort the list", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these uses slow and fast pointers?",
      options: [
        { optionText: "Finding peak element", optionTag: "A" },
        { optionText: "Finding cycle in linked list", optionTag: "B" },
        { optionText: "Reversing array", optionTag: "C" },
        { optionText: "Heapify array", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following uses converging pointers?",
      options: [
        { optionText: "Finding triplets", optionTag: "A" },
        { optionText: "MST construction", optionTag: "B" },
        { optionText: "Topological sort", optionTag: "C" },
        { optionText: "DFS recursion", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which variable updates in each iteration in two-pointer technique?",
      options: [
        { optionText: "start only", optionTag: "A" },
        { optionText: "end only", optionTag: "B" },
        { optionText: "either or both", optionTag: "C" },
        { optionText: "none", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What must you ensure before using two pointers?",
      options: [
        { optionText: "Array is empty", optionTag: "A" },
        { optionText: "Array is sorted if required", optionTag: "B" },
        { optionText: "Array contains strings", optionTag: "C" },
        { optionText: "Array is reversed", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Two-pointer is most often used in problems involving:",
      options: [
        { optionText: "Recursive trees", optionTag: "A" },
        { optionText: "Graphs", optionTag: "B" },
        { optionText: "Contiguous subarrays", optionTag: "C" },
        { optionText: "Sets", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of these can two pointers NOT solve efficiently?",
      options: [
        { optionText: "Sum of two numbers", optionTag: "A" },
        { optionText: "Maximum subarray sum", optionTag: "B" },
        { optionText: "Tree traversal", optionTag: "C" },
        { optionText: "Checking for palindrome", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Two-pointer technique works best on:",
      options: [
        { optionText: "Linked lists", optionTag: "A" },
        { optionText: "Hash maps", optionTag: "B" },
        { optionText: "Sorted arrays", optionTag: "C" },
        { optionText: "Binary trees", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following is true for two pointers?",
      options: [
        { optionText: "Can be used for prefix sum", optionTag: "A" },
        { optionText: "Can simulate nested loops in O(n)", optionTag: "B" },
        { optionText: "Only valid for strings", optionTag: "C" },
        { optionText: "Only works in recursion", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of these scenarios best suits two pointers?",
      options: [
        { optionText: "Merging two sorted arrays", optionTag: "A" },
        { optionText: "Constructing a heap", optionTag: "B" },
        { optionText: "Parsing XML", optionTag: "C" },
        { optionText: "Counting graph edges", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is a drawback of two-pointer approach?",
      options: [
        { optionText: "Only works for unsorted data", optionTag: "A" },
        { optionText: "Needs extra space", optionTag: "B" },
        { optionText: "Requires sorted data in many cases", optionTag: "C" },
        { optionText: "Doesn’t work for arrays", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    }
  ]
};

export default quizData;