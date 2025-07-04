import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Sorting Algorithms - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Assess your understanding of common sorting algorithms in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Sorting Algorithms"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which sorting algorithm is best suited for small datasets?",
      options: [
        { optionText: "Bubble Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Quick Sort", optionTag: "C" },
        { optionText: "Heap Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which sorting algorithm has the best average-case time complexity?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Bubble Sort", optionTag: "B" },
        { optionText: "Selection Sort", optionTag: "C" },
        { optionText: "Insertion Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which sorting algorithm divides the list and then merges?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Heap Sort", optionTag: "C" },
        { optionText: "Selection Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the average-case complexity of Quick Sort?",
      options: [
        { optionText: "O(n log n)", optionTag: "A" },
        { optionText: "O(n^2)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which sorting method uses a binary heap data structure?",
      options: [
        { optionText: "Heap Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Bubble Sort", optionTag: "C" },
        { optionText: "Quick Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm is not a comparison-based sort?",
      options: [
        { optionText: "Counting Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Quick Sort", optionTag: "C" },
        { optionText: "Heap Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which sort maintains stability?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Heap Sort", optionTag: "B" },
        { optionText: "Quick Sort", optionTag: "C" },
        { optionText: "Selection Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is an in-place sorting algorithm?",
      options: [
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Counting Sort", optionTag: "C" },
        { optionText: "Radix Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which sorting algorithm repeatedly selects the smallest element?",
      options: [
        { optionText: "Selection Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Heap Sort", optionTag: "C" },
        { optionText: "Bubble Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which sort performs better on nearly sorted data?",
      options: [
        { optionText: "Insertion Sort", optionTag: "A" },
        { optionText: "Bubble Sort", optionTag: "B" },
        { optionText: "Selection Sort", optionTag: "C" },
        { optionText: "Counting Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the worst-case time of Bubble Sort?",
      options: [
        { optionText: "O(n^2)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which sort is not adaptive?",
      options: [
        { optionText: "Selection Sort", optionTag: "A" },
        { optionText: "Insertion Sort", optionTag: "B" },
        { optionText: "Bubble Sort", optionTag: "C" },
        { optionText: "Shell Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which sorting technique uses divide-and-conquer?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Bubble Sort", optionTag: "B" },
        { optionText: "Selection Sort", optionTag: "C" },
        { optionText: "Counting Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which sort has the lowest space complexity?",
      options: [
        { optionText: "Selection Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Counting Sort", optionTag: "C" },
        { optionText: "Radix Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Python’s built-in sort is based on which algorithm?",
      options: [
        { optionText: "Timsort", optionTag: "A" },
        { optionText: "Heap Sort", optionTag: "B" },
        { optionText: "Merge Sort", optionTag: "C" },
        { optionText: "Quick Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which sort is not stable by default?",
      options: [
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Bubble Sort", optionTag: "C" },
        { optionText: "Counting Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm is best for large datasets?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Bubble Sort", optionTag: "B" },
        { optionText: "Insertion Sort", optionTag: "C" },
        { optionText: "Selection Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following algorithms is non-comparison based?",
      options: [
        { optionText: "Counting Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Heap Sort", optionTag: "C" },
        { optionText: "Merge Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which sort is better for linked lists?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Counting Sort", optionTag: "C" },
        { optionText: "Radix Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm requires additional space?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Selection Sort", optionTag: "C" },
        { optionText: "Bubble Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;