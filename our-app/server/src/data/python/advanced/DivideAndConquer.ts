import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Divide and Conquer - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Assess your understanding of Divide and Conquer algorithms using Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "DivideAndConquer",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What are the three basic steps in a divide and conquer algorithm?",
      options: [
        { optionText: "Divide, Loop, Return", optionTag: "A" },
        { optionText: "Divide, Conquer, Combine", optionTag: "B" },
        { optionText: "Split, Solve, Recurse", optionTag: "C" },
        { optionText: "Divide, Iterate, Merge", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the time complexity of Merge Sort?",
      options: [
        { optionText: "O(n log n)", optionTag: "A" },
        { optionText: "O(n^2)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of these is NOT a divide and conquer algorithm?",
      options: [
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Bubble Sort", optionTag: "C" },
        { optionText: "Merge Sort", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "In Quick Sort, the pivot is used to:",
      options: [
        { optionText: "Sort the elements in ascending order", optionTag: "A" },
        { optionText: "Divide the array into two subarrays", optionTag: "B" },
        { optionText: "Combine the sorted arrays", optionTag: "C" },
        { optionText: "Count elements", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following divide and conquer algorithms has worst-case O(n^2)?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "C" },
        { optionText: "Heap Sort", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the main difference between Quick Sort and Merge Sort?",
      options: [
        { optionText: "Quick Sort uses extra space", optionTag: "A" },
        { optionText: "Merge Sort is not divide and conquer", optionTag: "B" },
        { optionText: "Merge Sort divides first, then conquers", optionTag: "C" },
        { optionText: "Quick Sort merges first", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which algorithm solves the closest pair of points problem?",
      options: [
        { optionText: "Greedy", optionTag: "A" },
        { optionText: "Brute Force", optionTag: "B" },
        { optionText: "Divide and Conquer", optionTag: "C" },
        { optionText: "Dynamic Programming", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What's the best case time complexity of Quick Sort?",
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
      questionText: "Which step is most critical in Quick Sort?",
      options: [
        { optionText: "Choosing pivot", optionTag: "A" },
        { optionText: "Combining arrays", optionTag: "B" },
        { optionText: "Recursion", optionTag: "C" },
        { optionText: "Merging", optionTag: "D" },
      ],
      correctOption: "A",
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
      questionText: "Which technique is used to solve matrix multiplication using divide and conquer?",
      options: [
        { optionText: "Matrix chain multiplication", optionTag: "A" },
        { optionText: "Strassen's algorithm", optionTag: "B" },
        { optionText: "Greedy", optionTag: "C" },
        { optionText: "Kruskal's algorithm", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which divide and conquer algorithm solves recurrence T(n)=2T(n/2)+n?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "DFS", optionTag: "C" },
        { optionText: "BFS", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the height of recursion tree in binary search?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "How is divide and conquer related to recursion?",
      options: [
        { optionText: "They are completely different", optionTag: "A" },
        { optionText: "Recursion is used to implement divide and conquer", optionTag: "B" },
        { optionText: "Recursion avoids divide and conquer", optionTag: "C" },
        { optionText: "Recursion slows down divide and conquer", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "In what case does Quick Sort perform worst?",
      options: [
        { optionText: "Already sorted array", optionTag: "A" },
        { optionText: "Random array", optionTag: "B" },
        { optionText: "Reverse sorted array", optionTag: "C" },
        { optionText: "All elements are same", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is recurrence relation of Binary Search?",
      options: [
        { optionText: "T(n) = T(n-1) + 1", optionTag: "A" },
        { optionText: "T(n) = 2T(n/2) + 1", optionTag: "B" },
        { optionText: "T(n) = T(n/2) + 1", optionTag: "C" },
        { optionText: "T(n) = T(n) + 1", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which property makes divide and conquer effective?",
      options: [
        { optionText: "Sequential computation", optionTag: "A" },
        { optionText: "Large space complexity", optionTag: "B" },
        { optionText: "Problem can be broken into sub-problems", optionTag: "C" },
        { optionText: "Uses queue", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which problem is NOT typically solved using divide and conquer?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Linear Search", optionTag: "C" },
        { optionText: "Matrix Multiplication", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following is solved using Divide and Conquer?",
      options: [
        { optionText: "Tower of Hanoi", optionTag: "A" },
        { optionText: "Kruskal's MST", optionTag: "B" },
        { optionText: "Shortest path", optionTag: "C" },
        { optionText: "BFS traversal", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "In merge sort, what happens in combine step?",
      options: [
        { optionText: "Splitting the array", optionTag: "A" },
        { optionText: "Sorting and merging subarrays", optionTag: "B" },
        { optionText: "Dividing elements", optionTag: "C" },
        { optionText: "Selecting pivot", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
  ],
};

export default quizData;