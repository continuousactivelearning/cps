import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Searching Algorithms - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Test your mastery of advanced searching techniques and optimizations in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Searching Algorithms",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which searching algorithm is optimal for searching in a sorted array?",
      options: [
        { optionText: "Linear Search", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Jump Search", optionTag: "C" },
        { optionText: "Exponential Search", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the average-case time complexity of linear search?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following search algorithms is used for unbounded or infinite lists?",
      options: [
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Linear Search", optionTag: "B" },
        { optionText: "Exponential Search", optionTag: "C" },
        { optionText: "Ternary Search", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following searching algorithms divides the array into three parts?",
      options: [
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Jump Search", optionTag: "B" },
        { optionText: "Ternary Search", optionTag: "C" },
        { optionText: "Interpolation Search", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the time complexity of Binary Search in a sorted array?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which searching algorithm performs better when elements are uniformly distributed?",
      options: [
        { optionText: "Linear Search", optionTag: "A" },
        { optionText: "Jump Search", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "C" },
        { optionText: "Interpolation Search", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which data structure is best suited for implementing searching algorithms with log(n) time?",
      options: [
        { optionText: "Array", optionTag: "A" },
        { optionText: "Linked List", optionTag: "B" },
        { optionText: "Binary Search Tree", optionTag: "C" },
        { optionText: "Queue", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which condition must be true to apply binary search?",
      options: [
        { optionText: "All elements must be unique", optionTag: "A" },
        { optionText: "Array must be sorted", optionTag: "B" },
        { optionText: "Array must have even length", optionTag: "C" },
        { optionText: "Elements must be integers", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the auxiliary space complexity of binary search using recursion?",
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
      questionText: "What is the best-case complexity of linear search?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following searching techniques works by checking elements at fixed intervals?",
      options: [
        { optionText: "Jump Search", optionTag: "A" },
        { optionText: "Linear Search", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "C" },
        { optionText: "Exponential Search", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which algorithm is best suited when the size of the array is unknown?",
      options: [
        { optionText: "Ternary Search", optionTag: "A" },
        { optionText: "Jump Search", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "C" },
        { optionText: "Exponential Search", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which algorithm splits the array until one element remains?",
      options: [
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Jump Search", optionTag: "B" },
        { optionText: "Ternary Search", optionTag: "C" },
        { optionText: "Linear Search", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the key drawback of linear search?",
      options: [
        { optionText: "Requires sorted array", optionTag: "A" },
        { optionText: "Time complexity is O(log n)", optionTag: "B" },
        { optionText: "Slow for large datasets", optionTag: "C" },
        { optionText: "Needs recursion", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which is a recursive form of binary search?",
      options: [
        { optionText: "Jump Search", optionTag: "A" },
        { optionText: "Linear Search", optionTag: "B" },
        { optionText: "Recursive Binary Search", optionTag: "C" },
        { optionText: "Iterative Binary Search", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "How many comparisons are needed in worst-case binary search for 32 elements?",
      options: [
        { optionText: "5", optionTag: "A" },
        { optionText: "6", optionTag: "B" },
        { optionText: "7", optionTag: "C" },
        { optionText: "8", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which algorithm may perform worse than binary search when data is not uniformly distributed?",
      options: [
        { optionText: "Jump Search", optionTag: "A" },
        { optionText: "Linear Search", optionTag: "B" },
        { optionText: "Exponential Search", optionTag: "C" },
        { optionText: "Interpolation Search", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "In what condition does Interpolation Search work best?",
      options: [
        { optionText: "Data sorted and uniformly distributed", optionTag: "A" },
        { optionText: "Data is random", optionTag: "B" },
        { optionText: "Data has duplicates", optionTag: "C" },
        { optionText: "All elements are equal", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which search algorithm is best for real-time systems with low latency needs?",
      options: [
        { optionText: "Linear Search", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Jump Search", optionTag: "C" },
        { optionText: "Hash-based Search", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which search does NOT require preprocessing of data?",
      options: [
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Jump Search", optionTag: "B" },
        { optionText: "Linear Search", optionTag: "C" },
        { optionText: "Ternary Search", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
  ],
};

export default quizData;