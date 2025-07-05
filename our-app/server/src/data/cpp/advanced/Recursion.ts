import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "C++ Recursion - Advanced Quiz",
  quizLevel: "advanced",
  lang: "cpp",
  description: "This quiz evaluates advanced understanding of recursion in C++, covering backtracking, memoization, tail recursion, and recursion tree analysis.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Recursion"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which of the following problems can be efficiently solved using recursion with memoization?",
      options: [
        { optionText: "Fibonacci Series", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Bubble Sort", optionTag: "C" },
        { optionText: "Selection Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In backtracking problems, what condition usually triggers backtracking?",
      options: [
        { optionText: "Invalid path or partial solution", optionTag: "A" },
        { optionText: "Successful base case", optionTag: "B" },
        { optionText: "Recursive limit", optionTag: "C" },
        { optionText: "Global variable conflict", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm is best solved using recursion with backtracking?",
      options: [
        { optionText: "N-Queens Problem", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Binary Search Tree Insertion", optionTag: "C" },
        { optionText: "Counting Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is tail recursion?",
      options: [
        { optionText: "Recursive call is the last operation in function", optionTag: "A" },
        { optionText: "Function calls itself twice", optionTag: "B" },
        { optionText: "Recursion without base case", optionTag: "C" },
        { optionText: "Recursion with memory allocation", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What data structure is used internally in recursion?",
      options: [
        { optionText: "Call stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Heap", optionTag: "C" },
        { optionText: "Graph", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if a recursive function doesn’t reach a base case?",
      options: [
        { optionText: "Stack overflow", optionTag: "A" },
        { optionText: "Function terminates normally", optionTag: "B" },
        { optionText: "Error: segmentation fault", optionTag: "C" },
        { optionText: "Infinite loop in main", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which optimization does compiler apply for tail-recursive functions?",
      options: [
        { optionText: "Tail call elimination", optionTag: "A" },
        { optionText: "Loop unrolling", optionTag: "B" },
        { optionText: "Inlining", optionTag: "C" },
        { optionText: "Lazy evaluation", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following uses recursion for traversal?",
      options: [
        { optionText: "Inorder traversal of BST", optionTag: "A" },
        { optionText: "BFS traversal of graph", optionTag: "B" },
        { optionText: "Selection sort", optionTag: "C" },
        { optionText: "Heapify", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the depth of recursion tree for Merge Sort?",
      options: [
        { optionText: "log n", optionTag: "A" },
        { optionText: "n", optionTag: "B" },
        { optionText: "n log n", optionTag: "C" },
        { optionText: "sqrt(n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is a disadvantage of recursion?",
      options: [
        { optionText: "Overhead due to function calls", optionTag: "A" },
        { optionText: "Readable code", optionTag: "B" },
        { optionText: "Compact solution", optionTag: "C" },
        { optionText: "Logical structure", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How many recursive calls are made in computing factorial(n)?",
      options: [
        { optionText: "n", optionTag: "A" },
        { optionText: "n-1", optionTag: "B" },
        { optionText: "n+1", optionTag: "C" },
        { optionText: "2n", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which problem is solved using recursive divide-and-conquer approach?",
      options: [
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Insertion Sort", optionTag: "B" },
        { optionText: "Counting Sort", optionTag: "C" },
        { optionText: "Radix Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following problems cannot be solved recursively?",
      options: [
        { optionText: "Evaluating Postfix", optionTag: "A" },
        { optionText: "Finding LCM", optionTag: "B" },
        { optionText: "Palindrome check", optionTag: "C" },
        { optionText: "None of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "In dynamic programming, how do we avoid redundant recursive calls?",
      options: [
        { optionText: "Memoization", optionTag: "A" },
        { optionText: "Recursion limit", optionTag: "B" },
        { optionText: "Looping", optionTag: "C" },
        { optionText: "Calling main again", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which space complexity issue can arise with deep recursive calls?",
      options: [
        { optionText: "Stack overflow", optionTag: "A" },
        { optionText: "Heap overflow", optionTag: "B" },
        { optionText: "Garbage collection delay", optionTag: "C" },
        { optionText: "Virtual memory fault", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the base case for binary search recursion?",
      options: [
        { optionText: "left > right", optionTag: "A" },
        { optionText: "left == right", optionTag: "B" },
        { optionText: "mid == 0", optionTag: "C" },
        { optionText: "mid == array[mid]", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following uses recursion to solve maze traversal?",
      options: [
        { optionText: "Backtracking", optionTag: "A" },
        { optionText: "Greedy Algorithm", optionTag: "B" },
        { optionText: "Topological Sort", optionTag: "C" },
        { optionText: "Minimum Spanning Tree", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure avoids stack overflow in simulating recursion?",
      options: [
        { optionText: "Explicit Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Array", optionTag: "C" },
        { optionText: "Heap", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does tail call optimization do?",
      options: [
        { optionText: "Reuses stack frame", optionTag: "A" },
        { optionText: "Increases recursion depth", optionTag: "B" },
        { optionText: "Allocates new stack frame", optionTag: "C" },
        { optionText: "Calls next recursion earlier", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;