import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Binary Search - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "This quiz tests your understanding of binary search algorithms in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Binary Search"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the time complexity of binary search in the best case?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What condition must a list satisfy to apply binary search?",
      options: [
        { optionText: "Sorted in any order", optionTag: "C" },
        { optionText: "Unsorted", optionTag: "A" },
        { optionText: "All values must be unique", optionTag: "B" },
        { optionText: "Contains only integers", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following is NOT a valid use case for binary search?",
      options: [
        { optionText: "Finding the square root", optionTag: "B" },
        { optionText: "Searching in unsorted data", optionTag: "C" },
        { optionText: "Finding minimum in rotated array", optionTag: "A" },
        { optionText: "Lower/upper bounds", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is returned if the target is not found in binary search?",
      options: [
        { optionText: "-1", optionTag: "D" },
        { optionText: "0", optionTag: "A" },
        { optionText: "null", optionTag: "B" },
        { optionText: "false", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which variant of binary search is used to find the first occurrence of a value?",
      options: [
        { optionText: "Modified binary search", optionTag: "A" },
        { optionText: "Linear search", optionTag: "B" },
        { optionText: "Jump search", optionTag: "C" },
        { optionText: "Exponential search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What data structure is used in binary search?",
      options: [
        { optionText: "Array or List", optionTag: "D" },
        { optionText: "Graph", optionTag: "A" },
        { optionText: "Tree", optionTag: "B" },
        { optionText: "Hash Table", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the main drawback of binary search?",
      options: [
        { optionText: "Requires sorted input", optionTag: "C" },
        { optionText: "High space complexity", optionTag: "A" },
        { optionText: "Too slow", optionTag: "B" },
        { optionText: "Doesn't return index", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What happens if mid = (low + high)/2 is used and both low and high are large?",
      options: [
        { optionText: "Integer overflow", optionTag: "A" },
        { optionText: "Syntax error", optionTag: "B" },
        { optionText: "Wrong answer always", optionTag: "C" },
        { optionText: "Does not compile", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the correct formula to avoid overflow while calculating mid?",
      options: [
        { optionText: "low + (high - low) / 2", optionTag: "B" },
        { optionText: "(low + high) / 2", optionTag: "A" },
        { optionText: "(high - low) / 2", optionTag: "C" },
        { optionText: "low / 2 + high / 2", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What type of problem can binary search be used to solve efficiently?",
      options: [
        { optionText: "Finding square roots", optionTag: "C" },
        { optionText: "MST", optionTag: "A" },
        { optionText: "Graph traversal", optionTag: "B" },
        { optionText: "Topological sort", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of these problems uses binary search on answer?",
      options: [
        { optionText: "Aggressive cows", optionTag: "D" },
        { optionText: "DFS", optionTag: "A" },
        { optionText: "Cycle detection", optionTag: "B" },
        { optionText: "Prim’s Algorithm", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Binary search can be used to:",
      options: [
        { optionText: "Find lower and upper bounds", optionTag: "A" },
        { optionText: "Sort a list", optionTag: "B" },
        { optionText: "Generate permutations", optionTag: "C" },
        { optionText: "Traverse graphs", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Binary search is not suitable for which of the following?",
      options: [
        { optionText: "Dynamic data structures", optionTag: "C" },
        { optionText: "Static sorted arrays", optionTag: "A" },
        { optionText: "Searching min in rotated sorted array", optionTag: "B" },
        { optionText: "Finding first/last occurrences", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the main advantage of binary search over linear search?",
      options: [
        { optionText: "Faster for large datasets", optionTag: "D" },
        { optionText: "No need for sorting", optionTag: "A" },
        { optionText: "Works for unsorted data", optionTag: "B" },
        { optionText: "Uses hash maps internally", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the key characteristic of binary search recursion?",
      options: [
        { optionText: "Reduces the search space by half", optionTag: "A" },
        { optionText: "Increases the space complexity", optionTag: "B" },
        { optionText: "Needs auxiliary arrays", optionTag: "C" },
        { optionText: "Can work only with odd-sized arrays", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In binary search, when do we move to the left half?",
      options: [
        { optionText: "When target < mid", optionTag: "B" },
        { optionText: "When target > mid", optionTag: "A" },
        { optionText: "When target == mid", optionTag: "C" },
        { optionText: "Always move to left", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Why is binary search preferred over linear search in sorted arrays?",
      options: [
        { optionText: "Lower time complexity", optionTag: "D" },
        { optionText: "Less memory", optionTag: "A" },
        { optionText: "Works for all data types", optionTag: "B" },
        { optionText: "Faster recursion", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What should be the next step if mid is less than the target?",
      options: [
        { optionText: "Move to right half", optionTag: "C" },
        { optionText: "Move to left half", optionTag: "A" },
        { optionText: "Return mid", optionTag: "B" },
        { optionText: "Reset mid to 0", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Binary search can find:",
      options: [
        { optionText: "Only exact matches", optionTag: "B" },
        { optionText: "First and last occurrences", optionTag: "A" },
        { optionText: "Only middle element", optionTag: "C" },
        { optionText: "Smallest element always", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;