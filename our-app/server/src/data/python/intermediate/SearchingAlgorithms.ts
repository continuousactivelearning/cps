import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Searching Algorithms - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Evaluate your understanding of various searching techniques in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "SearchingAlgorithms"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the time complexity of Binary Search?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which search works efficiently only on sorted data?",
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
      questionText: "Which search has worst-case complexity O(n)?",
      options: [
        { optionText: "Linear Search", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Jump Search", optionTag: "C" },
        { optionText: "Ternary Search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Jump search is faster than linear search when:",
      options: [
        { optionText: "The dataset is large and sorted", optionTag: "A" },
        { optionText: "The dataset is small", optionTag: "B" },
        { optionText: "The dataset is unsorted", optionTag: "C" },
        { optionText: "Binary search is used", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm splits the array into three parts?",
      options: [
        { optionText: "Ternary Search", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Jump Search", optionTag: "C" },
        { optionText: "Linear Search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the worst-case time complexity of Binary Search?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm starts checking from the middle?",
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
      questionText: "Which search is best suited for linked lists?",
      options: [
        { optionText: "Linear Search", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Ternary Search", optionTag: "C" },
        { optionText: "Jump Search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these searches uses recursive technique commonly?",
      options: [
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Linear Search", optionTag: "B" },
        { optionText: "Jump Search", optionTag: "C" },
        { optionText: "None", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the best case for Linear Search?",
      options: [
        { optionText: "Element is the first in array", optionTag: "A" },
        { optionText: "Element not present", optionTag: "B" },
        { optionText: "Array is sorted", optionTag: "C" },
        { optionText: "Element is last", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is divide-and-conquer?",
      options: [
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Linear Search", optionTag: "B" },
        { optionText: "Jump Search", optionTag: "C" },
        { optionText: "Hash Search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which search method doesn't require a sorted array?",
      options: [
        { optionText: "Linear Search", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Jump Search", optionTag: "C" },
        { optionText: "Ternary Search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm uses the square root of the array length as a jump?",
      options: [
        { optionText: "Jump Search", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Linear Search", optionTag: "C" },
        { optionText: "Exponential Search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these searching methods is not based on comparison?",
      options: [
        { optionText: "Hashing", optionTag: "A" },
        { optionText: "Linear Search", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "C" },
        { optionText: "Ternary Search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Exponential Search is preferred when:",
      options: [
        { optionText: "Array size is unknown", optionTag: "A" },
        { optionText: "Array is very small", optionTag: "B" },
        { optionText: "Array is unsorted", optionTag: "C" },
        { optionText: "Linear search fails", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Binary search works on which kind of arrays?",
      options: [
        { optionText: "Sorted arrays", optionTag: "A" },
        { optionText: "Unsorted arrays", optionTag: "B" },
        { optionText: "Any arrays", optionTag: "C" },
        { optionText: "Arrays with duplicates only", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which search has the worst-case time O(log n)?",
      options: [
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Linear Search", optionTag: "B" },
        { optionText: "Ternary Search", optionTag: "C" },
        { optionText: "Jump Search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which search method halves the search space at each step?",
      options: [
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Linear Search", optionTag: "B" },
        { optionText: "Jump Search", optionTag: "C" },
        { optionText: "Hashing", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Best case time complexity of binary search is:",
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
      questionText: "Which method is most suitable for small unsorted arrays?",
      options: [
        { optionText: "Linear Search", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Jump Search", optionTag: "C" },
        { optionText: "Ternary Search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;