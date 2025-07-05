import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Sorting Algorithms - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Test your foundational understanding of sorting algorithms in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Sorting Algorithms"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which of the following is a stable sorting algorithm?",
      options: [
        { optionText: "Heap Sort", optionTag: "A" },
        { optionText: "Selection Sort", optionTag: "C" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Quick Sort", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which Python function is used for sorting a list?",
      options: [
        { optionText: "sorted()", optionTag: "D" },
        { optionText: "arrange()", optionTag: "C" },
        { optionText: "organize()", optionTag: "A" },
        { optionText: "order()", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which sorting algorithm has the worst-case time complexity of O(n²)?",
      options: [
        { optionText: "Merge Sort", optionTag: "C" },
        { optionText: "Heap Sort", optionTag: "A" },
        { optionText: "Bubble Sort", optionTag: "B" },
        { optionText: "Quick Sort", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the best-case time complexity of Insertion Sort?",
      options: [
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "D" },
        { optionText: "O(n²)", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which sorting method divides the list into halves?",
      options: [
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Bubble Sort", optionTag: "C" },
        { optionText: "Selection Sort", optionTag: "D" },
        { optionText: "Insertion Sort", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following sorts in place without using additional memory?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Heap Sort", optionTag: "C" },
        { optionText: "Counting Sort", optionTag: "D" },
        { optionText: "Radix Sort", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following is NOT a comparison-based sort?",
      options: [
        { optionText: "Counting Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "D" },
        { optionText: "Merge Sort", optionTag: "C" },
        { optionText: "Selection Sort", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which sort algorithm selects the minimum element and places it at the beginning?",
      options: [
        { optionText: "Selection Sort", optionTag: "C" },
        { optionText: "Insertion Sort", optionTag: "B" },
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Bubble Sort", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which sorting algorithm uses partitioning?",
      options: [
        { optionText: "Bubble Sort", optionTag: "B" },
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Heap Sort", optionTag: "D" },
        { optionText: "Merge Sort", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the average case time complexity of Quick Sort?",
      options: [
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n²)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which sorting algorithm performs the most swaps?",
      options: [
        { optionText: "Bubble Sort", optionTag: "D" },
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Heap Sort", optionTag: "C" },
        { optionText: "Insertion Sort", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which algorithm is generally fastest for large unsorted arrays?",
      options: [
        { optionText: "Bubble Sort", optionTag: "B" },
        { optionText: "Insertion Sort", optionTag: "D" },
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Selection Sort", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the auxiliary space required by Merge Sort?",
      options: [
        { optionText: "O(n²)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which sorting technique is good for small datasets?",
      options: [
        { optionText: "Counting Sort", optionTag: "D" },
        { optionText: "Quick Sort", optionTag: "C" },
        { optionText: "Insertion Sort", optionTag: "A" },
        { optionText: "Radix Sort", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which sort algorithm performs best on nearly sorted data?",
      options: [
        { optionText: "Heap Sort", optionTag: "D" },
        { optionText: "Insertion Sort", optionTag: "C" },
        { optionText: "Selection Sort", optionTag: "B" },
        { optionText: "Quick Sort", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the worst-case complexity of Merge Sort?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n²)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which sorting algorithm uses a binary heap structure?",
      options: [
        { optionText: "Heap Sort", optionTag: "B" },
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Counting Sort", optionTag: "C" },
        { optionText: "Insertion Sort", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of these is not an in-place sorting algorithm?",
      options: [
        { optionText: "Heap Sort", optionTag: "C" },
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "D" },
        { optionText: "Bubble Sort", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which algorithm is easiest to implement for beginners?",
      options: [
        { optionText: "Quick Sort", optionTag: "C" },
        { optionText: "Bubble Sort", optionTag: "A" },
        { optionText: "Heap Sort", optionTag: "D" },
        { optionText: "Merge Sort", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which sorting method is non-comparison based?",
      options: [
        { optionText: "Counting Sort", optionTag: "B" },
        { optionText: "Quick Sort", optionTag: "C" },
        { optionText: "Selection Sort", optionTag: "A" },
        { optionText: "Bubble Sort", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;