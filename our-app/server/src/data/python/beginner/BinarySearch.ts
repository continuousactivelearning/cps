import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Binary Search - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Assess your foundational knowledge of Binary Search in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "BinarySearch"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the main condition for using Binary Search?",
      options: [
        { optionText: "Sorted Array", optionTag: "A" },
        { optionText: "Unsorted Array", optionTag: "B" },
        { optionText: "Linked List", optionTag: "C" },
        { optionText: "Graph", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the worst-case time complexity of Binary Search?",
      options: [
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "D" },
        { optionText: "O(1)", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Binary Search can be applied to which data type in Python?",
      options: [
        { optionText: "List", optionTag: "A" },
        { optionText: "Dictionary", optionTag: "B" },
        { optionText: "Set", optionTag: "C" },
        { optionText: "Tuple", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is returned if the element is not found in Binary Search?",
      options: [
        { optionText: "None", optionTag: "D" },
        { optionText: "0", optionTag: "B" },
        { optionText: "-1", optionTag: "C" },
        { optionText: "IndexError", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which module in Python offers binary search functions?",
      options: [
        { optionText: "math", optionTag: "C" },
        { optionText: "bisect", optionTag: "A" },
        { optionText: "collections", optionTag: "D" },
        { optionText: "search", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In Binary Search, how do you compute the middle index?",
      options: [
        { optionText: "(low + high) // 2", optionTag: "B" },
        { optionText: "low + high", optionTag: "C" },
        { optionText: "(low - high) // 2", optionTag: "D" },
        { optionText: "low * high", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What happens to the search space after each binary search step?",
      options: [
        { optionText: "Doubles", optionTag: "C" },
        { optionText: "Increases by 1", optionTag: "B" },
        { optionText: "Halves", optionTag: "A" },
        { optionText: "Stays the same", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is a use-case of Binary Search?",
      options: [
        { optionText: "Searching in a sorted list", optionTag: "D" },
        { optionText: "Sorting an array", optionTag: "B" },
        { optionText: "Searching in hash tables", optionTag: "C" },
        { optionText: "Traversing a graph", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the base case in recursive binary search?",
      options: [
        { optionText: "low > high", optionTag: "C" },
        { optionText: "mid == len(array)", optionTag: "B" },
        { optionText: "array[mid] != target", optionTag: "A" },
        { optionText: "target < array[mid]", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How many comparisons are needed in worst-case binary search for 32 elements?",
      options: [
        { optionText: "5", optionTag: "A" },
        { optionText: "10", optionTag: "D" },
        { optionText: "32", optionTag: "B" },
        { optionText: "16", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What condition narrows the search to the right half?",
      options: [
        { optionText: "target > array[mid]", optionTag: "D" },
        { optionText: "target < array[mid]", optionTag: "C" },
        { optionText: "target == array[mid]", optionTag: "A" },
        { optionText: "target != array[mid]", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which of these is NOT a benefit of binary search?",
      options: [
        { optionText: "Works on sorted data", optionTag: "A" },
        { optionText: "Efficient for large datasets", optionTag: "B" },
        { optionText: "Can be used on unsorted data", optionTag: "C" },
        { optionText: "Logarithmic time complexity", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the best-case time complexity of Binary Search?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In iterative binary search, which variable moves when target < array[mid]?",
      options: [
        { optionText: "low = mid + 1", optionTag: "A" },
        { optionText: "high = mid - 1", optionTag: "D" },
        { optionText: "mid = mid + 1", optionTag: "B" },
        { optionText: "mid = low + 1", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the index of the first element in a Python list?",
      options: [
        { optionText: "1", optionTag: "B" },
        { optionText: "0", optionTag: "A" },
        { optionText: "-1", optionTag: "C" },
        { optionText: "Depends on the size", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is a binary search base condition in recursion?",
      options: [
        { optionText: "target == array[mid]", optionTag: "A" },
        { optionText: "low == high", optionTag: "B" },
        { optionText: "low > high", optionTag: "D" },
        { optionText: "array empty", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which condition narrows the search to the left half?",
      options: [
        { optionText: "target > array[mid]", optionTag: "B" },
        { optionText: "target == array[mid]", optionTag: "C" },
        { optionText: "target < array[mid]", optionTag: "A" },
        { optionText: "target != array[mid]", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure does not support binary search?",
      options: [
        { optionText: "Sorted List", optionTag: "A" },
        { optionText: "Hash Set", optionTag: "C" },
        { optionText: "Tuple", optionTag: "B" },
        { optionText: "Array", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How many elements are checked in each iteration of binary search?",
      options: [
        { optionText: "Half of remaining", optionTag: "A" },
        { optionText: "All elements", optionTag: "B" },
        { optionText: "Next two", optionTag: "D" },
        { optionText: "Three random ones", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these types supports binary search directly in Python?",
      options: [
        { optionText: "List", optionTag: "B" },
        { optionText: "Dict", optionTag: "D" },
        { optionText: "Set", optionTag: "A" },
        { optionText: "Queue", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;