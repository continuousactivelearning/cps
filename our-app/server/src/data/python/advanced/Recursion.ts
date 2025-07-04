import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Recursion - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "This quiz challenges your deep understanding of recursive programming in Python, including tail recursion, backtracking, memoization, and call stack analysis.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Recursion"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is tail recursion?",
      options: [
        { optionText: "A recursive call is the last operation in the function", optionTag: "A" },
        { optionText: "A recursive call calls itself multiple times", optionTag: "B" },
        { optionText: "A recursive function returns a list", optionTag: "C" },
        { optionText: "Recursion with no base case", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the maximum recursion depth in Python by default?",
      options: [
        { optionText: "1000", optionTag: "A" },
        { optionText: "256", optionTag: "B" },
        { optionText: "Unlimited", optionTag: "C" },
        { optionText: "512", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which module in Python is used to increase recursion limit?",
      options: [
        { optionText: "sys", optionTag: "A" },
        { optionText: "os", optionTag: "B" },
        { optionText: "math", optionTag: "C" },
        { optionText: "re", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which decorator is used in Python to memoize recursive functions?",
      options: [
        { optionText: "@lru_cache", optionTag: "A" },
        { optionText: "@memo", optionTag: "B" },
        { optionText: "@cache_it", optionTag: "C" },
        { optionText: "@save", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In backtracking algorithms, recursion is used to:",
      options: [
        { optionText: "Explore all possible solutions", optionTag: "A" },
        { optionText: "Optimize runtime", optionTag: "B" },
        { optionText: "Convert loops", optionTag: "C" },
        { optionText: "Save memory", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if a base case is missing in recursion?",
      options: [
        { optionText: "It causes infinite recursion", optionTag: "A" },
        { optionText: "It throws syntax error", optionTag: "B" },
        { optionText: "It executes only once", optionTag: "C" },
        { optionText: "Function returns None", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following problems is commonly solved using recursion?",
      options: [
        { optionText: "Tower of Hanoi", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Merge Sort", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What data structure is used by Python internally for function calls?",
      options: [
        { optionText: "Call Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "List", optionTag: "C" },
        { optionText: "Heap", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm uses recursion and backtracking to solve puzzles?",
      options: [
        { optionText: "N-Queens", optionTag: "A" },
        { optionText: "Binary Tree Traversal", optionTag: "B" },
        { optionText: "DFS", optionTag: "C" },
        { optionText: "Bubble Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function changes the recursion limit in Python?",
      options: [
        { optionText: "sys.setrecursionlimit()", optionTag: "A" },
        { optionText: "set.limit()", optionTag: "B" },
        { optionText: "os.recursion()", optionTag: "C" },
        { optionText: "limit.set()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is a major drawback of recursion in Python?",
      options: [
        { optionText: "Stack overflow risk", optionTag: "A" },
        { optionText: "Longer syntax", optionTag: "B" },
        { optionText: "Lack of loops", optionTag: "C" },
        { optionText: "Low accuracy", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How can you visualize recursive calls?",
      options: [
        { optionText: "Using recursion trees", optionTag: "A" },
        { optionText: "Using arrays", optionTag: "B" },
        { optionText: "Using graphs", optionTag: "C" },
        { optionText: "Using stack traces", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following algorithms uses recursion extensively?",
      options: [
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Linear Search", optionTag: "B" },
        { optionText: "Insertion Sort", optionTag: "C" },
        { optionText: "Selection Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of Fibonacci using naive recursion?",
      options: [
        { optionText: "O(2^n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which recursive function is optimized by memoization?",
      options: [
        { optionText: "Fibonacci", optionTag: "A" },
        { optionText: "Factorial", optionTag: "B" },
        { optionText: "Sum of digits", optionTag: "C" },
        { optionText: "Binary Search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How many base cases should a recursive function have?",
      options: [
        { optionText: "At least one", optionTag: "A" },
        { optionText: "Exactly two", optionTag: "B" },
        { optionText: "None", optionTag: "C" },
        { optionText: "Unlimited", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these problems can be solved with divide and conquer recursion?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Quick Sort", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which function traces back all recursive calls?",
      options: [
        { optionText: "Debugger or Stack Trace", optionTag: "A" },
        { optionText: "Memory dump", optionTag: "B" },
        { optionText: "sys.trace()", optionTag: "C" },
        { optionText: "traceback.info()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is an example of a non-tail recursive function?",
      options: [
        { optionText: "Factorial", optionTag: "A" },
        { optionText: "Fibonacci", optionTag: "B" },
        { optionText: "Tower of Hanoi", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    }
  ]
};

export default quizData;