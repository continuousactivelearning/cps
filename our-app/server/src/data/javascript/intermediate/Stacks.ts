import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "JavaScript Stacks - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "javascript",
  description: "This quiz tests your understanding of stack operations and concepts in JavaScript.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Stacks"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the main principle behind stack data structure?",
      options: [
        { optionText: "Last In, First Out (LIFO)", optionTag: "A" },
        { optionText: "First In, First Out (FIFO)", optionTag: "B" },
        { optionText: "Last In, Last Out (LILO)", optionTag: "C" },
        { optionText: "Random Access", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which JavaScript array method is commonly used to remove the top of the stack?",
      options: [
        { optionText: "pop()", optionTag: "A" },
        { optionText: "shift()", optionTag: "B" },
        { optionText: "unshift()", optionTag: "C" },
        { optionText: "push()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method is used to add an element to the stack in JavaScript?",
      options: [
        { optionText: "push()", optionTag: "A" },
        { optionText: "pop()", optionTag: "B" },
        { optionText: "enqueue()", optionTag: "C" },
        { optionText: "add()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does stack.pop() return?",
      options: [
        { optionText: "The last item in the stack", optionTag: "A" },
        { optionText: "The first item in the stack", optionTag: "B" },
        { optionText: "Undefined", optionTag: "C" },
        { optionText: "Length of stack", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How can you implement a stack using an array in JavaScript?",
      options: [
        { optionText: "Using push() and pop()", optionTag: "A" },
        { optionText: "Using shift() and unshift()", optionTag: "B" },
        { optionText: "Using slice()", optionTag: "C" },
        { optionText: "Using splice()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will be the output of the following code?\n\nlet stack = [1,2,3];\nstack.pop();\nconsole.log(stack);",
      options: [
        { optionText: "[1, 2]", optionTag: "A" },
        { optionText: "[1, 2, 3]", optionTag: "B" },
        { optionText: "[2, 3]", optionTag: "C" },
        { optionText: "[1]", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of push() and pop() in JavaScript arrays (used as stack)?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if you call pop() on an empty array?",
      options: [
        { optionText: "Returns undefined", optionTag: "A" },
        { optionText: "Throws error", optionTag: "B" },
        { optionText: "Returns null", optionTag: "C" },
        { optionText: "Returns 0", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is a typical application of stack?",
      options: [
        { optionText: "Undo operation", optionTag: "A" },
        { optionText: "Queue processing", optionTag: "B" },
        { optionText: "Sorting data", optionTag: "C" },
        { optionText: "Hash table lookup", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the value of top after pushing 5 elements and popping 2 in a stack?",
      options: [
        { optionText: "3", optionTag: "A" },
        { optionText: "5", optionTag: "B" },
        { optionText: "2", optionTag: "C" },
        { optionText: "7", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },

    // Additional 10 Questions
    {
      questionText: "Which built-in JavaScript structure behaves like a stack?",
      options: [
        { optionText: "Array", optionTag: "A" },
        { optionText: "Object", optionTag: "B" },
        { optionText: "Set", optionTag: "C" },
        { optionText: "Map", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which action is performed first when popping multiple elements?",
      options: [
        { optionText: "Last pushed element", optionTag: "A" },
        { optionText: "First pushed element", optionTag: "B" },
        { optionText: "Middle element", optionTag: "C" },
        { optionText: "All at once", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation is NOT valid for stack in JavaScript?",
      options: [
        { optionText: "insertAt(0)", optionTag: "A" },
        { optionText: "push()", optionTag: "B" },
        { optionText: "pop()", optionTag: "C" },
        { optionText: "peek()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which property returns the number of elements in a stack implemented as array?",
      options: [
        { optionText: "length", optionTag: "A" },
        { optionText: "size()", optionTag: "B" },
        { optionText: "count()", optionTag: "C" },
        { optionText: "total()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which problem is solved using stack?",
      options: [
        { optionText: "Balanced parentheses", optionTag: "A" },
        { optionText: "Binary search", optionTag: "B" },
        { optionText: "Graph traversal", optionTag: "C" },
        { optionText: "Array merging", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "To view the top element without removing it, you should:",
      options: [
        { optionText: "Use peek()", optionTag: "A" },
        { optionText: "Use pop()", optionTag: "B" },
        { optionText: "Use shift()", optionTag: "C" },
        { optionText: "Use splice()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which stack operation modifies the array?",
      options: [
        { optionText: "push()", optionTag: "A" },
        { optionText: "length", optionTag: "B" },
        { optionText: "slice()", optionTag: "C" },
        { optionText: "includes()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Stacks are useful in which function call mechanism?",
      options: [
        { optionText: "Recursion", optionTag: "A" },
        { optionText: "Iteration", optionTag: "B" },
        { optionText: "Conditionals", optionTag: "C" },
        { optionText: "Exception handling", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is the default behavior of JavaScript function calls?",
      options: [
        { optionText: "Uses call stack", optionTag: "A" },
        { optionText: "Uses queue", optionTag: "B" },
        { optionText: "Random execution", optionTag: "C" },
        { optionText: "No order", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is NOT a real stack operation?",
      options: [
        { optionText: "deleteLast()", optionTag: "A" },
        { optionText: "push()", optionTag: "B" },
        { optionText: "pop()", optionTag: "C" },
        { optionText: "peek()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;