import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Sorting Algorithms - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Assess your knowledge on advanced sorting techniques and their implementations in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Sorting Algorithms",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which of the following sorting algorithms is NOT comparison-based?",
      options: [
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Counting Sort", optionTag: "C" },
        { optionText: "Heap Sort", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the worst-case time complexity of Quick Sort?",
      options: [
        { optionText: "O(n^2)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which sorting algorithm is the most efficient for small data sets?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Bubble Sort", optionTag: "B" },
        { optionText: "Insertion Sort", optionTag: "C" },
        { optionText: "Quick Sort", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which sorting algorithm maintains relative order of records with equal keys (stable)?",
      options: [
        { optionText: "Heap Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Merge Sort", optionTag: "C" },
        { optionText: "Selection Sort", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following sorting algorithms is recursive?",
      options: [
        { optionText: "Insertion Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Bubble Sort", optionTag: "C" },
        { optionText: "Selection Sort", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the best-case time complexity of Bubble Sort?",
      options: [
        { optionText: "O(n^2)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which sorting algorithm is most suitable for nearly sorted data?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Insertion Sort", optionTag: "B" },
        { optionText: "Selection Sort", optionTag: "C" },
        { optionText: "Counting Sort", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the average case complexity of Heap Sort?",
      options: [
        { optionText: "O(n^2)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which sorting algorithm requires additional memory space?",
      options: [
        { optionText: "Heap Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Merge Sort", optionTag: "C" },
        { optionText: "Selection Sort", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following is not an in-place sorting algorithm?",
      options: [
        { optionText: "Bubble Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Merge Sort", optionTag: "C" },
        { optionText: "Selection Sort", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which sorting algorithm divides the input array in halves?",
      options: [
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Heap Sort", optionTag: "B" },
        { optionText: "Merge Sort", optionTag: "C" },
        { optionText: "Insertion Sort", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which algorithm picks the smallest element and places it at the beginning?",
      options: [
        { optionText: "Bubble Sort", optionTag: "A" },
        { optionText: "Selection Sort", optionTag: "B" },
        { optionText: "Merge Sort", optionTag: "C" },
        { optionText: "Heap Sort", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which algorithm has best-case time complexity of O(n log n)?",
      options: [
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Bubble Sort", optionTag: "C" },
        { optionText: "Insertion Sort", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which sorting algorithm is preferred when memory is constrained?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Counting Sort", optionTag: "C" },
        { optionText: "Radix Sort", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the auxiliary space complexity of Merge Sort?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following is a non-comparison-based sorting algorithm?",
      options: [
        { optionText: "Heap Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Counting Sort", optionTag: "C" },
        { optionText: "Quick Sort", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which sorting technique is not suitable for linked lists?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Bubble Sort", optionTag: "B" },
        { optionText: "Quick Sort", optionTag: "C" },
        { optionText: "Selection Sort", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following has the worst worst-case performance?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Bubble Sort", optionTag: "C" },
        { optionText: "Heap Sort", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which sorting algorithm uses divide-and-conquer?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Insertion Sort", optionTag: "B" },
        { optionText: "Bubble Sort", optionTag: "C" },
        { optionText: "Counting Sort", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which sort is best when the range of input elements is limited?",
      options: [
        { optionText: "Counting Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Quick Sort", optionTag: "C" },
        { optionText: "Heap Sort", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    }
  ],
};

export default quizData;