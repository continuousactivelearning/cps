import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Sorting Algorithms - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "This quiz assesses in-depth knowledge of sorting algorithms, time complexities, and Java implementations.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Sorting Algorithms"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which sorting algorithm is considered stable and has O(n log n) worst-case complexity?",
      options: [
        { optionText: "Heap Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Quick Sort", optionTag: "C" },
        { optionText: "Selection Sort", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which sorting algorithm is most suitable for sorting linked lists?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Bubble Sort", optionTag: "B" },
        { optionText: "Quick Sort", optionTag: "C" },
        { optionText: "Insertion Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which sorting algorithm performs best for nearly sorted data?",
      options: [
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Insertion Sort", optionTag: "B" },
        { optionText: "Merge Sort", optionTag: "C" },
        { optionText: "Heap Sort", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the best-case time complexity of Quick Sort?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which sorting algorithm uses a binary heap data structure?",
      options: [
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Heap Sort", optionTag: "C" },
        { optionText: "Bubble Sort", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which algorithm divides the array into smaller subarrays, sorts them and merges back?",
      options: [
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Selection Sort", optionTag: "C" },
        { optionText: "Insertion Sort", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which sorting algorithm performs poorly for large data sets with O(n^2) worst-case complexity?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Bubble Sort", optionTag: "C" },
        { optionText: "Heap Sort", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which sorting algorithm is generally fastest in practice for average-case scenarios?",
      options: [
        { optionText: "Bubble Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Selection Sort", optionTag: "C" },
        { optionText: "Insertion Sort", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which sorting algorithm is used in Java's Arrays.sort() for primitive types?",
      options: [
        { optionText: "Heap Sort", optionTag: "A" },
        { optionText: "Dual-Pivot Quick Sort", optionTag: "B" },
        { optionText: "Merge Sort", optionTag: "C" },
        { optionText: "Shell Sort", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which algorithm sorts by repeatedly selecting the smallest element?",
      options: [
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Selection Sort", optionTag: "B" },
        { optionText: "Heap Sort", optionTag: "C" },
        { optionText: "Insertion Sort", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following is not a comparison-based sorting algorithm?",
      options: [
        { optionText: "Radix Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Merge Sort", optionTag: "C" },
        { optionText: "Bubble Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the space complexity of Merge Sort?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which sort has the worst-case performance same as average-case?",
      options: [
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Heap Sort", optionTag: "B" },
        { optionText: "Bubble Sort", optionTag: "C" },
        { optionText: "Merge Sort", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which of the following is true about Heap Sort?",
      options: [
        { optionText: "It is not in-place", optionTag: "A" },
        { optionText: "It is not stable", optionTag: "B" },
        { optionText: "It has O(n) time complexity", optionTag: "C" },
        { optionText: "It uses recursion always", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which sort has the smallest number of comparisons in best-case?",
      options: [
        { optionText: "Insertion Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Bubble Sort", optionTag: "C" },
        { optionText: "Heap Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which sort is ideal when the input data has many duplicate values?",
      options: [
        { optionText: "Counting Sort", optionTag: "A" },
        { optionText: "Heap Sort", optionTag: "B" },
        { optionText: "Quick Sort", optionTag: "C" },
        { optionText: "Merge Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which sorting method is based on 'divide and conquer' approach?",
      options: [
        { optionText: "Insertion Sort", optionTag: "A" },
        { optionText: "Selection Sort", optionTag: "B" },
        { optionText: "Merge Sort", optionTag: "C" },
        { optionText: "Bubble Sort", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which sorting algorithm is known for poor performance with large data sets?",
      options: [
        { optionText: "Bubble Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Heap Sort", optionTag: "C" },
        { optionText: "Merge Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm uses a pivot to partition the array?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Heap Sort", optionTag: "C" },
        { optionText: "Bubble Sort", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which sorting algorithm guarantees O(n log n) in all cases?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Insertion Sort", optionTag: "C" },
        { optionText: "Bubble Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;