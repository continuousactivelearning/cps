import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "JavaScript Recursion - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "javascript",
  description: "This quiz tests your understanding of recursive techniques and applications in JavaScript.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Recursion"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the base case in a recursive function?",
      options: [
        { optionText: "The condition to stop recursion", optionTag: "A" },
        { optionText: "The last function call", optionTag: "B" },
        { optionText: "The first recursive call", optionTag: "C" },
        { optionText: "The maximum depth allowed", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will happen if there is no base case in a recursive function?",
      options: [
        { optionText: "Stack overflow", optionTag: "A" },
        { optionText: "Program halts", optionTag: "B" },
        { optionText: "Recursion ends automatically", optionTag: "C" },
        { optionText: "Syntax error", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following problems is best solved using recursion?",
      options: [
        { optionText: "Factorial calculation", optionTag: "A" },
        { optionText: "Sorting using for loop", optionTag: "B" },
        { optionText: "Linear search", optionTag: "C" },
        { optionText: "Switch case operations", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the output of the following code?\n\nfunction count(n) {\n if(n == 0) return;\n console.log(n);\n count(n-1);\n}",
      options: [
        { optionText: "Prints n to 1", optionTag: "A" },
        { optionText: "Prints 1 to n", optionTag: "B" },
        { optionText: "Prints n only", optionTag: "C" },
        { optionText: "Nothing", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is true about recursion and iteration?",
      options: [
        { optionText: "Recursion uses stack, iteration uses loop", optionTag: "A" },
        { optionText: "Recursion is faster", optionTag: "B" },
        { optionText: "Iteration uses more memory", optionTag: "C" },
        { optionText: "They are the same", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is a tail-recursive function?",
      options: [
        { optionText: "One where recursive call is the last action", optionTag: "A" },
        { optionText: "One without a base case", optionTag: "B" },
        { optionText: "One that uses a loop", optionTag: "C" },
        { optionText: "Any function that calls itself", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is a valid recursive function for sum of n numbers?",
      options: [
        { optionText: "function sum(n){ if(n==0) return 0; return n + sum(n-1); }", optionTag: "A" },
        { optionText: "function sum(n){ return n + sum(n+1); }", optionTag: "B" },
        { optionText: "function sum(n){ return n; }", optionTag: "C" },
        { optionText: "function sum(n){ return sum(n); }", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will be the depth of recursion in factorial(4)?",
      options: [
        { optionText: "5", optionTag: "A" },
        { optionText: "4", optionTag: "B" },
        { optionText: "3", optionTag: "C" },
        { optionText: "1", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which keyword is used to stop further recursion?",
      options: [
        { optionText: "return", optionTag: "A" },
        { optionText: "break", optionTag: "B" },
        { optionText: "continue", optionTag: "C" },
        { optionText: "stop", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which scenario suits recursive binary search?",
      options: [
        { optionText: "Sorted arrays", optionTag: "A" },
        { optionText: "Unsorted arrays", optionTag: "B" },
        { optionText: "Linked lists", optionTag: "C" },
        { optionText: "Hash maps", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },

    // Extra questions
    {
      questionText: "What is the space complexity of recursion?",
      options: [
        { optionText: "O(n) due to call stack", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result of count(2) if count prints and calls count(n-1)?",
      options: [
        { optionText: "2,1", optionTag: "A" },
        { optionText: "1,2", optionTag: "B" },
        { optionText: "0,1", optionTag: "C" },
        { optionText: "2,1,0", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is NOT a recursive case?",
      options: [
        { optionText: "When recursion continues", optionTag: "A" },
        { optionText: "When base condition is met", optionTag: "B" },
        { optionText: "When function calls itself", optionTag: "C" },
        { optionText: "When input decreases", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What will this code return?\nfunction f(n) {\n if(n<=1) return n;\n return f(n-1) + f(n-2);\n}",
      options: [
        { optionText: "Fibonacci", optionTag: "A" },
        { optionText: "Factorial", optionTag: "B" },
        { optionText: "Sum", optionTag: "C" },
        { optionText: "Invalid", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Recursion is ideal when problem can be broken into:",
      options: [
        { optionText: "Smaller subproblems", optionTag: "A" },
        { optionText: "Larger loops", optionTag: "B" },
        { optionText: "Hard problems", optionTag: "C" },
        { optionText: "Database queries", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is better for tail-call optimization?",
      options: [
        { optionText: "Tail-recursive functions", optionTag: "A" },
        { optionText: "Looping constructs", optionTag: "B" },
        { optionText: "Stack frames", optionTag: "C" },
        { optionText: "Nested recursion", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the stack frame?",
      options: [
        { optionText: "Stores variables of function call", optionTag: "A" },
        { optionText: "Stores class data", optionTag: "B" },
        { optionText: "Stores only global data", optionTag: "C" },
        { optionText: "Stores heap memory", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure helps recursion internally?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Array", optionTag: "C" },
        { optionText: "Map", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is recursion tree?",
      options: [
        { optionText: "Visualization of recursive calls", optionTag: "A" },
        { optionText: "Data structure", optionTag: "B" },
        { optionText: "A call stack", optionTag: "C" },
        { optionText: "Tree data structure", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;