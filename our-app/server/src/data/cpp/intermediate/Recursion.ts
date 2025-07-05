import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "C++ Recursion - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "cpp",
  description: "This quiz tests your understanding of recursive function design and behavior in C++.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Recursion"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the base case in recursion?",
      options: [
        { optionText: "The condition to stop recursion", optionTag: "A" },
        { optionText: "The condition to call recursion", optionTag: "B" },
        { optionText: "The recursive function itself", optionTag: "C" },
        { optionText: "The deepest level reached", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which keyword is essential in a recursive function?",
      options: [
        { optionText: "Function calls itself", optionTag: "A" },
        { optionText: "return", optionTag: "B" },
        { optionText: "static", optionTag: "C" },
        { optionText: "loop", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if the base case is missing in a recursive function?",
      options: [
        { optionText: "Stack overflow", optionTag: "A" },
        { optionText: "Program ends normally", optionTag: "B" },
        { optionText: "Infinite loop", optionTag: "C" },
        { optionText: "Compilation error", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these problems is best solved using recursion?",
      options: [
        { optionText: "Tree Traversal", optionTag: "A" },
        { optionText: "Linear Search", optionTag: "B" },
        { optionText: "Sorting Arrays", optionTag: "C" },
        { optionText: "Multiplication", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does tail recursion mean?",
      options: [
        { optionText: "Recursive call is last in the function", optionTag: "A" },
        { optionText: "Recursive call is inside a loop", optionTag: "B" },
        { optionText: "No base case", optionTag: "C" },
        { optionText: "Two recursive calls", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the space complexity of recursive Fibonacci implementation?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is not a recursive problem?",
      options: [
        { optionText: "Finding maximum in array", optionTag: "A" },
        { optionText: "Binary Tree Traversal", optionTag: "B" },
        { optionText: "Tower of Hanoi", optionTag: "C" },
        { optionText: "Factorial", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function is not called repeatedly in recursion?",
      options: [
        { optionText: "Main function", optionTag: "A" },
        { optionText: "Recursive function", optionTag: "B" },
        { optionText: "Helper function", optionTag: "C" },
        { optionText: "Base case function", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does a recursive tree represent?",
      options: [
        { optionText: "All function calls", optionTag: "A" },
        { optionText: "Call stack", optionTag: "B" },
        { optionText: "Loop count", optionTag: "C" },
        { optionText: "Error logs", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In which scenario should recursion be avoided?",
      options: [
        { optionText: "Large input size", optionTag: "A" },
        { optionText: "When using trees", optionTag: "B" },
        { optionText: "Backtracking", optionTag: "C" },
        { optionText: "Divide and conquer", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following uses divide and conquer with recursion?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Bubble Sort", optionTag: "B" },
        { optionText: "Insertion Sort", optionTag: "C" },
        { optionText: "Selection Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these algorithms is recursive by nature?",
      options: [
        { optionText: "DFS in graphs", optionTag: "A" },
        { optionText: "Breadth-first search", optionTag: "B" },
        { optionText: "Linear search", optionTag: "C" },
        { optionText: "Bubble sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following avoids repeated recursive calls?",
      options: [
        { optionText: "Memoization", optionTag: "A" },
        { optionText: "Tabulation", optionTag: "B" },
        { optionText: "Caching", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "How many base cases are typically in a recursive function?",
      options: [
        { optionText: "At least one", optionTag: "A" },
        { optionText: "None", optionTag: "B" },
        { optionText: "Two or more always", optionTag: "C" },
        { optionText: "Equal to number of parameters", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is mutual recursion?",
      options: [
        { optionText: "Functions calling each other", optionTag: "A" },
        { optionText: "Same function calling itself", optionTag: "B" },
        { optionText: "Tail recursion", optionTag: "C" },
        { optionText: "Iterative recursion", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How is recursion implemented internally?",
      options: [
        { optionText: "Using function call stack", optionTag: "A" },
        { optionText: "Using queues", optionTag: "B" },
        { optionText: "Using heap", optionTag: "C" },
        { optionText: "Using loops", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is more efficient for Fibonacci: recursion or iteration?",
      options: [
        { optionText: "Iteration", optionTag: "A" },
        { optionText: "Recursion", optionTag: "B" },
        { optionText: "Both are same", optionTag: "C" },
        { optionText: "Depends on compiler", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the main drawback of recursion?",
      options: [
        { optionText: "Stack overflow risk", optionTag: "A" },
        { optionText: "Slower than loops", optionTag: "B" },
        { optionText: "Harder to debug", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the main benefit of recursion?",
      options: [
        { optionText: "Simplifies code for complex problems", optionTag: "A" },
        { optionText: "Improves performance", optionTag: "B" },
        { optionText: "Uses less memory", optionTag: "C" },
        { optionText: "Makes code error-free", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;