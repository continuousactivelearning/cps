import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Binary Search - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "Test your understanding of advanced binary search concepts and applications.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Binary Search"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the best case time complexity of binary search?",
      options: [
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of these conditions must be met to apply binary search?",
      options: [
        { optionText: "Array must be sorted", optionTag: "D" },
        { optionText: "Array must contain only unique elements", optionTag: "C" },
        { optionText: "Array must have even number of elements", optionTag: "A" },
        { optionText: "Array must be dynamic", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What happens if the array is not sorted before binary search?",
      options: [
        { optionText: "May give incorrect results", optionTag: "B" },
        { optionText: "Works faster", optionTag: "C" },
        { optionText: "Results are guaranteed", optionTag: "A" },
        { optionText: "Finds the last element", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the main advantage of binary search over linear search?",
      options: [
        { optionText: "Less memory usage", optionTag: "A" },
        { optionText: "Faster for sorted data", optionTag: "C" },
        { optionText: "Simpler logic", optionTag: "D" },
        { optionText: "No recursion needed", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What type of problems benefit from binary search over answer?",
      options: [
        { optionText: "Search optimization", optionTag: "C" },
        { optionText: "Hashing", optionTag: "A" },
        { optionText: "Sorting large datasets", optionTag: "B" },
        { optionText: "Backtracking", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the space complexity of binary search?",
      options: [
        { optionText: "O(1)", optionTag: "D" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "In which case does binary search perform worst?",
      options: [
        { optionText: "When element is at the start", optionTag: "B" },
        { optionText: "When element is in the middle", optionTag: "A" },
        { optionText: "When element is not present", optionTag: "C" },
        { optionText: "When array is empty", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Binary search divides the problem into how many parts?",
      options: [
        { optionText: "Three", optionTag: "A" },
        { optionText: "One", optionTag: "D" },
        { optionText: "Four", optionTag: "C" },
        { optionText: "Two", optionTag: "B" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What does binary search return if the element is not found?",
      options: [
        { optionText: "0", optionTag: "B" },
        { optionText: "-1 or undefined index", optionTag: "A" },
        { optionText: "Last index", optionTag: "C" },
        { optionText: "Middle index", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How many iterations at most are needed in binary search for 32 elements?",
      options: [
        { optionText: "4", optionTag: "A" },
        { optionText: "6", optionTag: "C" },
        { optionText: "5", optionTag: "B" },
        { optionText: "10", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which recursion base case is typically used in binary search?",
      options: [
        { optionText: "low > high", optionTag: "B" },
        { optionText: "high == 0", optionTag: "A" },
        { optionText: "mid == -1", optionTag: "D" },
        { optionText: "low == 0", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which data structure is most commonly used with binary search?",
      options: [
        { optionText: "HashMap", optionTag: "D" },
        { optionText: "Graph", optionTag: "C" },
        { optionText: "Sorted array", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the expected index for element 10 in array [1, 3, 5, 7, 9, 11] using binary search?",
      options: [
        { optionText: "Not found", optionTag: "C" },
        { optionText: "2", optionTag: "D" },
        { optionText: "4", optionTag: "A" },
        { optionText: "5", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What condition moves the search to the left half?",
      options: [
        { optionText: "target < arr[mid]", optionTag: "C" },
        { optionText: "target > arr[mid]", optionTag: "D" },
        { optionText: "target == arr[mid]", optionTag: "A" },
        { optionText: "arr[mid] == 0", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Binary search is not suitable when:",
      options: [
        { optionText: "Array is sorted", optionTag: "D" },
        { optionText: "Array contains duplicates", optionTag: "B" },
        { optionText: "Array is unsorted", optionTag: "A" },
        { optionText: "Array is short", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which variant of binary search is used to find the first occurrence?",
      options: [
        { optionText: "Modified binary search", optionTag: "D" },
        { optionText: "Linear Binary", optionTag: "A" },
        { optionText: "Reverse Search", optionTag: "B" },
        { optionText: "Recursive Linear", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which Java method can be used for binary search?",
      options: [
        { optionText: "Arrays.binarySearch()", optionTag: "C" },
        { optionText: "Collections.binaryFind()", optionTag: "B" },
        { optionText: "Arrays.search()", optionTag: "D" },
        { optionText: "Lists.binarySearch()", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Can binary search be applied to a rotated sorted array?",
      options: [
        { optionText: "Yes, with modifications", optionTag: "B" },
        { optionText: "No, never", optionTag: "D" },
        { optionText: "Only in reverse order", optionTag: "A" },
        { optionText: "Only in forward order", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How is the middle index calculated in binary search to avoid overflow?",
      options: [
        { optionText: "mid = low + (high - low) / 2", optionTag: "A" },
        { optionText: "mid = (low + high) / 2", optionTag: "C" },
        { optionText: "mid = high / 2", optionTag: "D" },
        { optionText: "mid = low / 2", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What would binary search return if the array is empty?",
      options: [
        { optionText: "-1 or not found", optionTag: "C" },
        { optionText: "0", optionTag: "B" },
        { optionText: "Infinity", optionTag: "D" },
        { optionText: "Middle index", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    }
  ]
};

export default quizData;