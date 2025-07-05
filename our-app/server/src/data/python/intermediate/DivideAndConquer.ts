import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Divide and Conquer - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Assess your understanding of the Divide and Conquer algorithm design paradigm in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "DivideAndConquer"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which of the following is a Divide and Conquer algorithm?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Linear Search", optionTag: "B" },
        { optionText: "BFS", optionTag: "C" },
        { optionText: "Dijkstra's Algorithm", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the first step in a Divide and Conquer strategy?",
      options: [
        { optionText: "Divide the problem", optionTag: "A" },
        { optionText: "Combine the solutions", optionTag: "B" },
        { optionText: "Sort the data", optionTag: "C" },
        { optionText: "Iterate through list", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which sorting algorithm is based on Divide and Conquer?",
      options: [
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Bubble Sort", optionTag: "B" },
        { optionText: "Insertion Sort", optionTag: "C" },
        { optionText: "Selection Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of Merge Sort?",
      options: [
        { optionText: "O(n log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Divide and Conquer works best for problems that can be:",
      options: [
        { optionText: "Broken down into smaller sub-problems", optionTag: "A" },
        { optionText: "Solved linearly", optionTag: "B" },
        { optionText: "Sorted only", optionTag: "C" },
        { optionText: "Greedy in nature", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In Quick Sort, the pivot element is used to:",
      options: [
        { optionText: "Partition the array", optionTag: "A" },
        { optionText: "Sort the array directly", optionTag: "B" },
        { optionText: "Merge the array", optionTag: "C" },
        { optionText: "Reverse the array", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does 'conquer' mean in Divide and Conquer?",
      options: [
        { optionText: "Solve subproblems recursively", optionTag: "A" },
        { optionText: "Iterate through sublists", optionTag: "B" },
        { optionText: "Sort the array", optionTag: "C" },
        { optionText: "Reverse the list", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation is used at the end of a Divide and Conquer algorithm?",
      options: [
        { optionText: "Combine the solutions", optionTag: "A" },
        { optionText: "Sort the subarrays", optionTag: "B" },
        { optionText: "Merge the original list", optionTag: "C" },
        { optionText: "Divide further", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm has best-case performance of O(n log n)?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Bubble Sort", optionTag: "B" },
        { optionText: "Selection Sort", optionTag: "C" },
        { optionText: "Linear Search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Divide and Conquer algorithms are often implemented using:",
      options: [
        { optionText: "Recursion", optionTag: "A" },
        { optionText: "Loops", optionTag: "B" },
        { optionText: "Stacks", optionTag: "C" },
        { optionText: "Heaps", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is NOT a Divide and Conquer algorithm?",
      options: [
        { optionText: "Dijkstra’s Algorithm", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Quick Sort", optionTag: "C" },
        { optionText: "Binary Search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "The recurrence relation for Merge Sort is:",
      options: [
        { optionText: "T(n) = 2T(n/2) + O(n)", optionTag: "A" },
        { optionText: "T(n) = T(n-1) + O(1)", optionTag: "B" },
        { optionText: "T(n) = T(n/2) + O(n)", optionTag: "C" },
        { optionText: "T(n) = n log n", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following follows Divide and Conquer principle?",
      options: [
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Heap Sort", optionTag: "B" },
        { optionText: "Bubble Sort", optionTag: "C" },
        { optionText: "Counting Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is a characteristic of Divide and Conquer?",
      options: [
        { optionText: "Solving subproblems independently", optionTag: "A" },
        { optionText: "Mutual dependency of subproblems", optionTag: "B" },
        { optionText: "Greedy choice", optionTag: "C" },
        { optionText: "Dynamic partitioning", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In Merge Sort, what happens after dividing the array?",
      options: [
        { optionText: "Conquer and then combine", optionTag: "A" },
        { optionText: "Sort directly", optionTag: "B" },
        { optionText: "Reverse the parts", optionTag: "C" },
        { optionText: "Push into queue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which technique is similar to Divide and Conquer?",
      options: [
        { optionText: "Backtracking", optionTag: "A" },
        { optionText: "Greedy", optionTag: "B" },
        { optionText: "Recursion", optionTag: "C" },
        { optionText: "Dynamic Programming", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Divide and Conquer is best suited for which type of problems?",
      options: [
        { optionText: "Divide into independent subproblems", optionTag: "A" },
        { optionText: "Greedy selection", optionTag: "B" },
        { optionText: "Overlapping subproblems", optionTag: "C" },
        { optionText: "Sequential processing", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which Python function is typically used to implement recursion in Divide and Conquer?",
      options: [
        { optionText: "Defining the function recursively", optionTag: "A" },
        { optionText: "Using lambda", optionTag: "B" },
        { optionText: "map()", optionTag: "C" },
        { optionText: "filter()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What type of recursion is most common in Divide and Conquer?",
      options: [
        { optionText: "Binary recursion", optionTag: "A" },
        { optionText: "Tail recursion", optionTag: "B" },
        { optionText: "Linear recursion", optionTag: "C" },
        { optionText: "Tree recursion", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data type is not required in Divide and Conquer?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Array", optionTag: "C" },
        { optionText: "List", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;