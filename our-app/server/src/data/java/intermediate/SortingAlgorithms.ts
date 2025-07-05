import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Sorting Algorithms - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "Test your understanding of sorting techniques, complexities, and implementations in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Sorting Algorithms"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the average time complexity of Quick Sort?",
      options: [
        { optionText: "O(n log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which sorting algorithm is best suited for nearly sorted data?",
      options: [
        { optionText: "Selection Sort", optionTag: "A" },
        { optionText: "Insertion Sort", optionTag: "B" },
        { optionText: "Merge Sort", optionTag: "C" },
        { optionText: "Bubble Sort", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following is a non-comparison based sorting algorithm?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Counting Sort", optionTag: "C" },
        { optionText: "Bubble Sort", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the worst-case time complexity of Merge Sort?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(n^2)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which sorting algorithm is not stable by default?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Bubble Sort", optionTag: "C" },
        { optionText: "Insertion Sort", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which sort has the best case time complexity of O(n)?",
      options: [
        { optionText: "Selection Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Insertion Sort", optionTag: "C" },
        { optionText: "Heap Sort", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which sort always performs O(n^2) comparisons?",
      options: [
        { optionText: "Bubble Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Selection Sort", optionTag: "C" },
        { optionText: "Quick Sort", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which sort uses the divide and conquer strategy?",
      options: [
        { optionText: "Insertion Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Bubble Sort", optionTag: "C" },
        { optionText: "Counting Sort", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the space complexity of Merge Sort?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which sort is considered adaptive?",
      options: [
        { optionText: "Selection Sort", optionTag: "A" },
        { optionText: "Insertion Sort", optionTag: "B" },
        { optionText: "Heap Sort", optionTag: "C" },
        { optionText: "Merge Sort", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of these algorithms is typically the fastest for large datasets?",
      options: [
        { optionText: "Bubble Sort", optionTag: "A" },
        { optionText: "Selection Sort", optionTag: "B" },
        { optionText: "Merge Sort", optionTag: "C" },
        { optionText: "Quick Sort", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which algorithm is not a comparison sort?",
      options: [
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Radix Sort", optionTag: "C" },
        { optionText: "Heap Sort", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which sort requires additional memory proportional to the input size?",
      options: [
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Selection Sort", optionTag: "B" },
        { optionText: "Merge Sort", optionTag: "C" },
        { optionText: "Heap Sort", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of these sorting algorithms is not in-place?",
      options: [
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Heap Sort", optionTag: "C" },
        { optionText: "Bubble Sort", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which algorithm is efficient for sorting linked lists?",
      options: [
        { optionText: "Bubble Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Insertion Sort", optionTag: "C" },
        { optionText: "Selection Sort", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which algorithm sorts by selecting the smallest element?",
      options: [
        { optionText: "Bubble Sort", optionTag: "A" },
        { optionText: "Insertion Sort", optionTag: "B" },
        { optionText: "Selection Sort", optionTag: "C" },
        { optionText: "Merge Sort", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which sort is guaranteed to run in O(n log n) time?",
      options: [
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Bubble Sort", optionTag: "C" },
        { optionText: "Selection Sort", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which sort is used in Java’s Arrays.sort() for primitive types?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "TimSort", optionTag: "C" },
        { optionText: "Bubble Sort", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which algorithm is preferred when memory usage is a concern?",
      options: [
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Heap Sort", optionTag: "C" },
        { optionText: "Counting Sort", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which sorting algorithm is not stable?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Counting Sort", optionTag: "B" },
        { optionText: "Heap Sort", optionTag: "C" },
        { optionText: "Bubble Sort", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    }
  ]
};

export default quizData;