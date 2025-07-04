// beginner/python/recursion.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Recursion - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "This quiz tests your basic understanding of recursion in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Recursion"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is recursion?",
      options: [
        { optionText: "A function calling itself", optionTag: "A" },
        { optionText: "A loop inside a function", optionTag: "B" },
        { optionText: "A function calling another function", optionTag: "C" },
        { optionText: "Repeating a process manually", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which part of a recursive function stops it from calling itself forever?",
      options: [
        { optionText: "Base case", optionTag: "A" },
        { optionText: "Loop", optionTag: "B" },
        { optionText: "Header", optionTag: "C" },
        { optionText: "Return", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which keyword is used to exit a function in Python?",
      options: [
        { optionText: "return", optionTag: "A" },
        { optionText: "break", optionTag: "B" },
        { optionText: "exit", optionTag: "C" },
        { optionText: "stop", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is a real use case of recursion?",
      options: [
        { optionText: "Calculating factorial", optionTag: "A" },
        { optionText: "Finding Fibonacci numbers", optionTag: "B" },
        { optionText: "Tree traversal", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What happens if a recursive function doesn't have a base case?",
      options: [
        { optionText: "It causes infinite recursion", optionTag: "A" },
        { optionText: "It returns 0", optionTag: "B" },
        { optionText: "It executes once", optionTag: "C" },
        { optionText: "It throws a syntax error", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which error is thrown when recursion exceeds the maximum depth?",
      options: [
        { optionText: "RecursionError", optionTag: "A" },
        { optionText: "StackOverflowError", optionTag: "B" },
        { optionText: "InfiniteLoopError", optionTag: "C" },
        { optionText: "MemoryError", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you increase recursion depth in Python?",
      options: [
        { optionText: "sys.setrecursionlimit()", optionTag: "A" },
        { optionText: "recursion.limit()", optionTag: "B" },
        { optionText: "setLimit()", optionTag: "C" },
        { optionText: "import recursion.max()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the base case for factorial recursion?",
      options: [
        { optionText: "n == 1 or n == 0", optionTag: "A" },
        { optionText: "n == 2", optionTag: "B" },
        { optionText: "n < 0", optionTag: "C" },
        { optionText: "n > 0", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will factorial(0) return?",
      options: [
        { optionText: "1", optionTag: "A" },
        { optionText: "0", optionTag: "B" },
        { optionText: "Undefined", optionTag: "C" },
        { optionText: "Error", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Recursion is most similar to which programming concept?",
      options: [
        { optionText: "Loops", optionTag: "A" },
        { optionText: "Classes", optionTag: "B" },
        { optionText: "Modules", optionTag: "C" },
        { optionText: "Imports", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },

    // 10 more beginner-friendly questions
    {
      questionText: "Which is more memory intensive: recursion or iteration?",
      options: [
        { optionText: "Recursion", optionTag: "A" },
        { optionText: "Iteration", optionTag: "B" },
        { optionText: "Both are same", optionTag: "C" },
        { optionText: "None", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of recursive Fibonacci without memoization?",
      options: [
        { optionText: "O(2^n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure is used by recursion internally?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Array", optionTag: "C" },
        { optionText: "List", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is a tail-recursive function?",
      options: [
        { optionText: "Return is the final step in recursion", optionTag: "A" },
        { optionText: "It has no base case", optionTag: "B" },
        { optionText: "It uses iteration", optionTag: "C" },
        { optionText: "None of the above", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Can every problem be solved using recursion?",
      options: [
        { optionText: "No, but many can", optionTag: "A" },
        { optionText: "Yes, all problems", optionTag: "B" },
        { optionText: "Only mathematical problems", optionTag: "C" },
        { optionText: "No, only sorting", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does the following return?\n\n```python\ndef f(n):\n  if n == 0: return 0\n  return n + f(n-1)\nprint(f(3))\n```",
      options: [
        { optionText: "6", optionTag: "A" },
        { optionText: "3", optionTag: "B" },
        { optionText: "0", optionTag: "C" },
        { optionText: "None", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Is Python optimized for tail recursion?",
      options: [
        { optionText: "No", optionTag: "A" },
        { optionText: "Yes", optionTag: "B" },
        { optionText: "Only on Linux", optionTag: "C" },
        { optionText: "Only with decorators", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm is commonly implemented using recursion?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "DFS in Trees", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the result of calling a recursive function with no base case?",
      options: [
        { optionText: "RecursionError", optionTag: "A" },
        { optionText: "0", optionTag: "B" },
        { optionText: "Stack Reset", optionTag: "C" },
        { optionText: "None", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Recursion is often used when:",
      options: [
        { optionText: "Problem has smaller sub-problems", optionTag: "A" },
        { optionText: "Loops are too complex", optionTag: "B" },
        { optionText: "Stack needs to be used", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    }
  ]
};

export default quizData;