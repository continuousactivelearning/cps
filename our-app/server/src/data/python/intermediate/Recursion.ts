import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Recursion - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "This quiz tests your understanding of recursion principles, stack behavior, and recursive problem-solving in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Recursion"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the base case in a recursive function?",
      options: [
        { optionText: "The condition that ends recursion", optionTag: "A" },
        { optionText: "The function call", optionTag: "B" },
        { optionText: "The stack overflow error", optionTag: "C" },
        { optionText: "The recursive return", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the output of `def f(n): return 1 if n==0 else n*f(n-1)` when `f(4)` is called?",
      options: [
        { optionText: "24", optionTag: "A" },
        { optionText: "4", optionTag: "B" },
        { optionText: "16", optionTag: "C" },
        { optionText: "None", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does each recursive call create in memory?",
      options: [
        { optionText: "A new stack frame", optionTag: "A" },
        { optionText: "A new thread", optionTag: "B" },
        { optionText: "A new loop", optionTag: "C" },
        { optionText: "A lambda function", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which Python error is raised on too deep recursion?",
      options: [
        { optionText: "RecursionError", optionTag: "A" },
        { optionText: "MemoryError", optionTag: "B" },
        { optionText: "StackError", optionTag: "C" },
        { optionText: "ValueError", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following functions is recursive?",
      options: [
        { optionText: "def f(): return f()", optionTag: "A" },
        { optionText: "def f(): return 1", optionTag: "B" },
        { optionText: "def f(): print('Hello')", optionTag: "C" },
        { optionText: "def f(): pass", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Tail recursion is a form of recursion where:",
      options: [
        { optionText: "The recursive call is the last thing executed", optionTag: "A" },
        { optionText: "The recursive call is skipped", optionTag: "B" },
        { optionText: "Multiple base cases are used", optionTag: "C" },
        { optionText: "All values are stored in a queue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will happen if a recursive function has no base case?",
      options: [
        { optionText: "It will cause a RecursionError", optionTag: "A" },
        { optionText: "It will return None", optionTag: "B" },
        { optionText: "It will skip the recursion", optionTag: "C" },
        { optionText: "It will optimize itself", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you calculate Fibonacci using recursion?",
      options: [
        { optionText: "Using two recursive calls for n-1 and n-2", optionTag: "A" },
        { optionText: "Using loops", optionTag: "B" },
        { optionText: "Using numpy", optionTag: "C" },
        { optionText: "Using eval()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of naive recursive Fibonacci?",
      options: [
        { optionText: "O(2^n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is true about recursion?",
      options: [
        { optionText: "It uses stack to manage function calls", optionTag: "A" },
        { optionText: "It is slower than iteration always", optionTag: "B" },
        { optionText: "It can only solve Fibonacci", optionTag: "C" },
        { optionText: "Python doesn't support recursion", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which problem is best solved with recursion?",
      options: [
        { optionText: "Tower of Hanoi", optionTag: "A" },
        { optionText: "Printing Hello", optionTag: "B" },
        { optionText: "Finding max in list", optionTag: "C" },
        { optionText: "Multiplication", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the return value of this function: `def f(n): if n==0: return 1 else: return n*f(n-1)` for f(3)?",
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
      questionText: "Can recursion be used with strings?",
      options: [
        { optionText: "Yes", optionTag: "A" },
        { optionText: "No", optionTag: "B" },
        { optionText: "Only with integers", optionTag: "C" },
        { optionText: "Only in Java", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function finds the sum of digits using recursion?",
      options: [
        { optionText: "def sum(n): return 0 if n==0 else n%10 + sum(n//10)", optionTag: "A" },
        { optionText: "def sum(n): return n+n", optionTag: "B" },
        { optionText: "def sum(n): return str(n)", optionTag: "C" },
        { optionText: "def sum(n): return sum(n*2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is a common use case for recursion?",
      options: [
        { optionText: "Tree traversal", optionTag: "A" },
        { optionText: "Database connection", optionTag: "B" },
        { optionText: "Web scraping", optionTag: "C" },
        { optionText: "Logging", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure helps manage recursion internally?",
      options: [
        { optionText: "Call Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Array", optionTag: "C" },
        { optionText: "Heap", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which Python limit affects recursion?",
      options: [
        { optionText: "sys.setrecursionlimit()", optionTag: "A" },
        { optionText: "threading.stacksize()", optionTag: "B" },
        { optionText: "memoryview.limit()", optionTag: "C" },
        { optionText: "maxdepth()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Can recursion be infinite?",
      options: [
        { optionText: "Yes, if no base case", optionTag: "A" },
        { optionText: "No, Python prevents it", optionTag: "B" },
        { optionText: "Only in C", optionTag: "C" },
        { optionText: "Only with loops", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the role of return in recursion?",
      options: [
        { optionText: "To pass results back through the call stack", optionTag: "A" },
        { optionText: "To start recursion", optionTag: "B" },
        { optionText: "To stop iteration", optionTag: "C" },
        { optionText: "To close files", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;