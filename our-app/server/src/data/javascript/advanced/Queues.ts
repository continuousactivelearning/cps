import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "JavaScript Recursion - Advanced Quiz",
  quizLevel: "advanced",
  lang: "javascript",
  description: "This quiz challenges your advanced understanding of recursion, tail calls, call stack behavior, and recursive problem-solving in JavaScript.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Recursion"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is a base case in recursion?",
      options: [
        { optionText: "Condition to stop recursion", optionTag: "A" },
        { optionText: "The initial call of function", optionTag: "B" },
        { optionText: "The return statement", optionTag: "C" },
        { optionText: "A recursive call to itself", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following causes infinite recursion?",
      options: [
        { optionText: "Missing base case", optionTag: "A" },
        { optionText: "Having a loop inside recursion", optionTag: "B" },
        { optionText: "Using Math.random()", optionTag: "C" },
        { optionText: "Returning a constant value", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is tail recursion?",
      options: [
        { optionText: "Recursive call is the last statement", optionTag: "A" },
        { optionText: "Recursive function calls another function", optionTag: "B" },
        { optionText: "Multiple recursive calls", optionTag: "C" },
        { optionText: "No return value", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which structure is mainly used for function call tracking in recursion?",
      options: [
        { optionText: "Call Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Heap", optionTag: "C" },
        { optionText: "Linked List", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you prevent a stack overflow in recursive functions?",
      options: [
        { optionText: "Use proper base case", optionTag: "A" },
        { optionText: "Avoid using return", optionTag: "B" },
        { optionText: "Call the same function repeatedly", optionTag: "C" },
        { optionText: "Use global variables", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which built-in method in JavaScript often uses recursion internally?",
      options: [
        { optionText: "JSON.stringify()", optionTag: "A" },
        { optionText: "parseInt()", optionTag: "B" },
        { optionText: "toString()", optionTag: "C" },
        { optionText: "console.log()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens when a recursive function doesn't return a value?",
      options: [
        { optionText: "undefined is returned", optionTag: "A" },
        { optionText: "function crashes", optionTag: "B" },
        { optionText: "0 is returned", optionTag: "C" },
        { optionText: "null is returned", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the maximum depth of recursion in JavaScript approximately?",
      options: [
        { optionText: "10,000 - 50,000 calls", optionTag: "A" },
        { optionText: "100", optionTag: "B" },
        { optionText: "100 million", optionTag: "C" },
        { optionText: "10", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is NOT a valid use case of recursion?",
      options: [
        { optionText: "Reading file line by line", optionTag: "A" },
        { optionText: "Tree traversal", optionTag: "B" },
        { optionText: "Factorial calculation", optionTag: "C" },
        { optionText: "Backtracking problems", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which keyword is essential in returning the recursive result?",
      options: [
        { optionText: "return", optionTag: "A" },
        { optionText: "break", optionTag: "B" },
        { optionText: "continue", optionTag: "C" },
        { optionText: "yield", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },

    // Remaining 10 questions
    {
      questionText: "Which scenario is ideal for memoization in recursion?",
      options: [
        { optionText: "Overlapping subproblems", optionTag: "A" },
        { optionText: "Independent subproblems", optionTag: "B" },
        { optionText: "One-time calculation", optionTag: "C" },
        { optionText: "Infinite recursion", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which problem is NOT solved efficiently using recursion?",
      options: [
        { optionText: "Linear search in array", optionTag: "A" },
        { optionText: "Binary search", optionTag: "B" },
        { optionText: "Tower of Hanoi", optionTag: "C" },
        { optionText: "Fibonacci calculation", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In which condition should recursion be avoided?",
      options: [
        { optionText: "When iterative solution is simpler", optionTag: "A" },
        { optionText: "When problem is tree-based", optionTag: "B" },
        { optionText: "When backtracking is needed", optionTag: "C" },
        { optionText: "When dividing problem", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is true about tail recursion optimization in JavaScript?",
      options: [
        { optionText: "Not guaranteed in most JS engines", optionTag: "A" },
        { optionText: "Always happens", optionTag: "B" },
        { optionText: "Removes base case", optionTag: "C" },
        { optionText: "Uses stack memory aggressively", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How can you manually simulate recursion using stack?",
      options: [
        { optionText: "Push function calls and loop over stack", optionTag: "A" },
        { optionText: "Use queue for ordering", optionTag: "B" },
        { optionText: "Use setTimeout repeatedly", optionTag: "C" },
        { optionText: "Recursively copy array", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do recursive functions behave in JavaScript event loop?",
      options: [
        { optionText: "Execute in call stack before event loop", optionTag: "A" },
        { optionText: "Run asynchronously", optionTag: "B" },
        { optionText: "Added to callback queue", optionTag: "C" },
        { optionText: "Paused after each call", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is an example of a recursive data structure?",
      options: [
        { optionText: "Tree", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Set", optionTag: "C" },
        { optionText: "Map", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function uses recursion for deep copying nested objects?",
      options: [
        { optionText: "customDeepClone()", optionTag: "A" },
        { optionText: "Object.assign()", optionTag: "B" },
        { optionText: "JSON.parse()", optionTag: "C" },
        { optionText: "Array.slice()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What causes maximum call stack size exceeded error?",
      options: [
        { optionText: "Too many recursive calls without exit", optionTag: "A" },
        { optionText: "Too many function parameters", optionTag: "B" },
        { optionText: "Too much memory allocation", optionTag: "C" },
        { optionText: "Infinite loop", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm uses recursion as core strategy?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Bubble Sort", optionTag: "B" },
        { optionText: "Linear Search", optionTag: "C" },
        { optionText: "Hashing", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;