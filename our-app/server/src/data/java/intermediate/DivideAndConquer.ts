import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Divide and Conquer - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "Test your knowledge on the Divide and Conquer paradigm in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Divide and Conquer"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the main idea behind Divide and Conquer?",
      options: [
        { optionText: "Solve small parts and combine results", optionTag: "A" },
        { optionText: "Divide and multiply", optionTag: "B" },
        { optionText: "Iterate all elements", optionTag: "C" },
        { optionText: "Optimize using dynamic storage", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following sorting algorithms uses Divide and Conquer?",
      options: [
        { optionText: "Bubble Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Insertion Sort", optionTag: "C" },
        { optionText: "Selection Sort", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the recurrence relation for Merge Sort?",
      options: [
        { optionText: "T(n) = T(n/2) + n", optionTag: "A" },
        { optionText: "T(n) = 2T(n/2) + n", optionTag: "B" },
        { optionText: "T(n) = T(n) + 1", optionTag: "C" },
        { optionText: "T(n) = T(n-1) + n", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following problems can be solved using Divide and Conquer?",
      options: [
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Tower of Hanoi", optionTag: "B" },
        { optionText: "Merge Sort", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the time complexity of Binary Search using Divide and Conquer?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which algorithm divides the input into two equal halves?",
      options: [
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Heap Sort", optionTag: "B" },
        { optionText: "Merge Sort", optionTag: "C" },
        { optionText: "Counting Sort", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What does the 'Conquer' step involve in Divide and Conquer?",
      options: [
        { optionText: "Sorting the array", optionTag: "A" },
        { optionText: "Combining solutions of subproblems", optionTag: "B" },
        { optionText: "Splitting the input", optionTag: "C" },
        { optionText: "Ignoring base cases", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which algorithm does not follow Divide and Conquer?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Linear Search", optionTag: "C" },
        { optionText: "Strassen’s Matrix Multiplication", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the base case in recursive Divide and Conquer algorithms?",
      options: [
        { optionText: "When the input size is constant", optionTag: "A" },
        { optionText: "When stack overflows", optionTag: "B" },
        { optionText: "When time exceeds", optionTag: "C" },
        { optionText: "When memory exceeds", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation is dominant in the conquer phase of Merge Sort?",
      options: [
        { optionText: "Comparison", optionTag: "A" },
        { optionText: "Division", optionTag: "B" },
        { optionText: "Merging", optionTag: "C" },
        { optionText: "Swapping", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which approach is followed by Divide and Conquer?",
      options: [
        { optionText: "Top-Down", optionTag: "A" },
        { optionText: "Bottom-Up", optionTag: "B" },
        { optionText: "Linear", optionTag: "C" },
        { optionText: "Cyclic", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm divides data using a pivot element?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "C" },
        { optionText: "Heap Sort", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the average case time complexity of Quick Sort?",
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
      questionText: "What happens if the pivot in Quick Sort is poorly chosen?",
      options: [
        { optionText: "Increases average case complexity", optionTag: "A" },
        { optionText: "Decreases time complexity", optionTag: "B" },
        { optionText: "Improves space efficiency", optionTag: "C" },
        { optionText: "Makes algorithm non-recursive", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Divide and Conquer works best when subproblems are:",
      options: [
        { optionText: "Dependent on each other", optionTag: "A" },
        { optionText: "Independent of each other", optionTag: "B" },
        { optionText: "Not solvable", optionTag: "C" },
        { optionText: "Already sorted", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which type of recursion does Divide and Conquer generally use?",
      options: [
        { optionText: "Tail Recursion", optionTag: "A" },
        { optionText: "Linear Recursion", optionTag: "B" },
        { optionText: "Binary Recursion", optionTag: "C" },
        { optionText: "Multiple Recursion", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What does recurrence T(n) = 2T(n/2) + n resolve to?",
      options: [
        { optionText: "O(n^2)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of these is NOT an example of Divide and Conquer?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Heap Sort", optionTag: "C" },
        { optionText: "Binary Search", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Divide and Conquer requires:",
      options: [
        { optionText: "Repetitive iteration", optionTag: "A" },
        { optionText: "Recursion or loop", optionTag: "B" },
        { optionText: "Recursion", optionTag: "C" },
        { optionText: "No recursion", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which is the best case pivot choice in Quick Sort?",
      options: [
        { optionText: "Last element", optionTag: "A" },
        { optionText: "Middle element", optionTag: "B" },
        { optionText: "First element", optionTag: "C" },
        { optionText: "Random element", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;