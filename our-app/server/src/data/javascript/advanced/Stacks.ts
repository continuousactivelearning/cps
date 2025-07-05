import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "JavaScript Stacks - Advanced Quiz",
  quizLevel: "advanced",
  lang: "javascript",
  description: "This quiz tests your advanced understanding of stack data structures, operations, and applications in JavaScript.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Stacks"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which JavaScript array method is commonly used to implement a stack's push operation?",
      options: [
        { optionText: "push()", optionTag: "A" },
        { optionText: "unshift()", optionTag: "B" },
        { optionText: "concat()", optionTag: "C" },
        { optionText: "slice()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does the pop() method do in a JavaScript stack?",
      options: [
        { optionText: "Removes and returns the top element", optionTag: "A" },
        { optionText: "Adds an element to the stack", optionTag: "B" },
        { optionText: "Returns the first element", optionTag: "C" },
        { optionText: "Sorts the stack", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure is ideal for undo/redo operations?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Linked List", optionTag: "C" },
        { optionText: "Graph", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will happen if you call pop() on an empty array?",
      options: [
        { optionText: "Returns undefined", optionTag: "A" },
        { optionText: "Throws error", optionTag: "B" },
        { optionText: "Returns 0", optionTag: "C" },
        { optionText: "Crashes program", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which principle does a stack follow?",
      options: [
        { optionText: "LIFO", optionTag: "A" },
        { optionText: "FIFO", optionTag: "B" },
        { optionText: "LILO", optionTag: "C" },
        { optionText: "FILO", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does peek() typically do in a custom stack?",
      options: [
        { optionText: "Returns the top element without removing it", optionTag: "A" },
        { optionText: "Returns the bottom element", optionTag: "B" },
        { optionText: "Removes all elements", optionTag: "C" },
        { optionText: "Sorts the stack", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is a use-case of stacks in programming?",
      options: [
        { optionText: "Expression evaluation", optionTag: "A" },
        { optionText: "Database indexing", optionTag: "B" },
        { optionText: "Breadth-first search", optionTag: "C" },
        { optionText: "Priority scheduling", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which browser feature internally uses stacks?",
      options: [
        { optionText: "Back/Forward navigation", optionTag: "A" },
        { optionText: "Page refresh", optionTag: "B" },
        { optionText: "URL bar", optionTag: "C" },
        { optionText: "Search suggestions", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which condition checks if a stack is empty?",
      options: [
        { optionText: "stack.length === 0", optionTag: "A" },
        { optionText: "stack === []", optionTag: "B" },
        { optionText: "stack == null", optionTag: "C" },
        { optionText: "stack.length < 0", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which stack-based algorithm checks balanced parentheses?",
      options: [
        { optionText: "Matching opening and closing using a stack", optionTag: "A" },
        { optionText: "Sorting characters", optionTag: "B" },
        { optionText: "Loop over brackets", optionTag: "C" },
        { optionText: "Count brackets", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },

    // Remaining 10 questions
    {
      questionText: "How is a stack implemented using class in JavaScript?",
      options: [
        { optionText: "Using push/pop methods in class", optionTag: "A" },
        { optionText: "Using setTimeout", optionTag: "B" },
        { optionText: "Using document.write", optionTag: "C" },
        { optionText: "Using Math.random", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data type is most suitable for implementing stack in JavaScript?",
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
      questionText: "Which operation is not possible directly on stack?",
      options: [
        { optionText: "Random access", optionTag: "A" },
        { optionText: "Push", optionTag: "B" },
        { optionText: "Pop", optionTag: "C" },
        { optionText: "Peek", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of pop() in a stack implemented using array?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which problem can be solved efficiently with two stacks?",
      options: [
        { optionText: "Queue using two stacks", optionTag: "A" },
        { optionText: "Binary search", optionTag: "B" },
        { optionText: "Graph traversal", optionTag: "C" },
        { optionText: "Sorting array", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How is call stack managed in JavaScript?",
      options: [
        { optionText: "Last function called is popped out first", optionTag: "A" },
        { optionText: "Functions are queued in FIFO", optionTag: "B" },
        { optionText: "Functions are randomly executed", optionTag: "C" },
        { optionText: "Stack does not apply", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In which case should you prefer a linked list over array for stack?",
      options: [
        { optionText: "When memory reallocation is costly", optionTag: "A" },
        { optionText: "When random access is needed", optionTag: "B" },
        { optionText: "When data is static", optionTag: "C" },
        { optionText: "When sorting is needed", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is NOT a valid stack operation?",
      options: [
        { optionText: "insertMiddle()", optionTag: "A" },
        { optionText: "push()", optionTag: "B" },
        { optionText: "pop()", optionTag: "C" },
        { optionText: "peek()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm uses stack in depth-first search (DFS)?",
      options: [
        { optionText: "Explicit or recursive stack", optionTag: "A" },
        { optionText: "Heap allocation", optionTag: "B" },
        { optionText: "Memoization table", optionTag: "C" },
        { optionText: "Queue of visited nodes", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How can you reverse a string using a stack?",
      options: [
        { optionText: "Push characters and pop into new string", optionTag: "A" },
        { optionText: "Use split and join", optionTag: "B" },
        { optionText: "Use charAt() only", optionTag: "C" },
        { optionText: "Iterate without stack", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;