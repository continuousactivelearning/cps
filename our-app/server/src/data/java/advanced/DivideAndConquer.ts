import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Divide and Conquer - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "Test your understanding of the Divide and Conquer algorithmic paradigm in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Divide and Conquer"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which of the following algorithms uses Divide and Conquer?",
      options: [
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Bubble Sort", optionTag: "B" },
        { optionText: "Insertion Sort", optionTag: "C" },
        { optionText: "Counting Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What are the three steps of Divide and Conquer?",
      options: [
        { optionText: "Divide, Solve, Combine", optionTag: "A" },
        { optionText: "Sort, Merge, Scan", optionTag: "B" },
        { optionText: "Divide, Conquer, Combine", optionTag: "C" },
        { optionText: "Scan, Merge, Conquer", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the time complexity of Merge Sort?",
      options: [
        { optionText: "O(n log n)", optionTag: "A" },
        { optionText: "O(n²)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the best-case time complexity of Quick Sort?",
      options: [
        { optionText: "O(n²)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In Merge Sort, merging two sorted arrays takes how much time?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which sorting algorithm is not based on Divide and Conquer?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Heap Sort", optionTag: "C" },
        { optionText: "Bubble Sort", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the recurrence relation for Merge Sort?",
      options: [
        { optionText: "T(n) = 2T(n/2) + O(n)", optionTag: "A" },
        { optionText: "T(n) = T(n-1) + O(1)", optionTag: "B" },
        { optionText: "T(n) = T(n/2) + O(n)", optionTag: "C" },
        { optionText: "T(n) = T(n-1) + T(n-2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following uses Divide and Conquer to find the closest pair of points?",
      options: [
        { optionText: "Brute Force", optionTag: "A" },
        { optionText: "Convex Hull", optionTag: "B" },
        { optionText: "Closest Pair Algorithm", optionTag: "C" },
        { optionText: "Dijkstra's Algorithm", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the space complexity of Merge Sort?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which algorithm is used in binary search?",
      options: [
        { optionText: "Greedy", optionTag: "A" },
        { optionText: "Divide and Conquer", optionTag: "B" },
        { optionText: "Dynamic Programming", optionTag: "C" },
        { optionText: "Backtracking", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the pivot element in Quick Sort?",
      options: [
        { optionText: "Maximum element", optionTag: "A" },
        { optionText: "Middle element", optionTag: "B" },
        { optionText: "Element around which partition is done", optionTag: "C" },
        { optionText: "First element always", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Divide and Conquer is best suited for which type of problems?",
      options: [
        { optionText: "Problems that can be split and solved recursively", optionTag: "A" },
        { optionText: "Only linear problems", optionTag: "B" },
        { optionText: "Problems with unique solutions", optionTag: "C" },
        { optionText: "Sorting problems only", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is NOT a Divide and Conquer algorithm?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "C" },
        { optionText: "Linear Search", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which application is best solved using Divide and Conquer?",
      options: [
        { optionText: "Finding majority element", optionTag: "A" },
        { optionText: "Shortest path", optionTag: "B" },
        { optionText: "String matching", optionTag: "C" },
        { optionText: "Stack reversal", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm is better in the average case: Merge Sort or Quick Sort?",
      options: [
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Both same", optionTag: "C" },
        { optionText: "Depends on data", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the main drawback of Quick Sort?",
      options: [
        { optionText: "Extra space usage", optionTag: "A" },
        { optionText: "Poor best case", optionTag: "B" },
        { optionText: "Poor worst case O(n²)", optionTag: "C" },
        { optionText: "Slow average time", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which Divide and Conquer algorithm avoids extra space usage?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Heap Sort", optionTag: "B" },
        { optionText: "Quick Sort", optionTag: "C" },
        { optionText: "Bubble Sort", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What does the combine step in Merge Sort do?",
      options: [
        { optionText: "Sorts the array", optionTag: "A" },
        { optionText: "Merges sorted halves", optionTag: "B" },
        { optionText: "Splits the array", optionTag: "C" },
        { optionText: "Finds pivot", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the base case of recursive Divide and Conquer?",
      options: [
        { optionText: "Array is sorted", optionTag: "A" },
        { optionText: "Array size = 0", optionTag: "B" },
        { optionText: "Array size ≤ 1", optionTag: "C" },
        { optionText: "Array size ≥ 2", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which step of Divide and Conquer is most time-consuming?",
      options: [
        { optionText: "Divide", optionTag: "A" },
        { optionText: "Conquer", optionTag: "B" },
        { optionText: "Combine", optionTag: "C" },
        { optionText: "Initialization", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;