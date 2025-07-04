import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Stacks - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "This quiz tests your advanced understanding of Stacks in Python, including implementation techniques, expression parsing, and algorithmic use-cases.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Stacks"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which data structure is commonly used for Depth First Search?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Array", optionTag: "C" },
        { optionText: "Linked List", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which Python module provides a ready-to-use stack structure?",
      options: [
        { optionText: "collections.deque", optionTag: "A" },
        { optionText: "heapq", optionTag: "B" },
        { optionText: "queue.PriorityQueue", optionTag: "C" },
        { optionText: "functools", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method is used to push an element onto a stack in Python list?",
      options: [
        { optionText: "append()", optionTag: "A" },
        { optionText: "push()", optionTag: "B" },
        { optionText: "insert()", optionTag: "C" },
        { optionText: "add()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is NOT a valid stack operation?",
      options: [
        { optionText: "insertFront()", optionTag: "A" },
        { optionText: "push()", optionTag: "B" },
        { optionText: "pop()", optionTag: "C" },
        { optionText: "peek()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will pop() do if the stack is empty?",
      options: [
        { optionText: "Raise IndexError", optionTag: "A" },
        { optionText: "Return None", optionTag: "B" },
        { optionText: "Do nothing", optionTag: "C" },
        { optionText: "Add an element", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of push and pop operations in a Python list stack?",
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
      questionText: "Which algorithm uses stack to evaluate expressions?",
      options: [
        { optionText: "Postfix evaluation", optionTag: "A" },
        { optionText: "Binary search", optionTag: "B" },
        { optionText: "Merge sort", optionTag: "C" },
        { optionText: "Bubble sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which stack operation retrieves the top element without removing it?",
      options: [
        { optionText: "peek()", optionTag: "A" },
        { optionText: "pop()", optionTag: "B" },
        { optionText: "push()", optionTag: "C" },
        { optionText: "top()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is a valid use case of stack?",
      options: [
        { optionText: "Undo feature in editors", optionTag: "A" },
        { optionText: "Job scheduling", optionTag: "B" },
        { optionText: "Priority queue", optionTag: "C" },
        { optionText: "Round robin scheduling", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the postfix of the expression A + B * C?",
      options: [
        { optionText: "A B C * +", optionTag: "A" },
        { optionText: "A + B * C", optionTag: "B" },
        { optionText: "A B + C *", optionTag: "C" },
        { optionText: "A * B + C", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm uses two stacks to sort elements?",
      options: [
        { optionText: "Stack sort", optionTag: "A" },
        { optionText: "Merge sort", optionTag: "B" },
        { optionText: "Quick sort", optionTag: "C" },
        { optionText: "Radix sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to check for balanced parentheses using a stack?",
      options: [
        { optionText: "Push opening and pop closing", optionTag: "A" },
        { optionText: "Match pairs and remove", optionTag: "B" },
        { optionText: "Use two queues", optionTag: "C" },
        { optionText: "Use dictionaries", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following stack-based problems can be solved in O(n)?",
      options: [
        { optionText: "Next Greater Element", optionTag: "A" },
        { optionText: "Infix to Postfix", optionTag: "B" },
        { optionText: "Balanced Parentheses", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the default Python list method used as a stack pop operation?",
      options: [
        { optionText: "pop()", optionTag: "A" },
        { optionText: "del()", optionTag: "B" },
        { optionText: "remove()", optionTag: "C" },
        { optionText: "clear()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which approach is better for stack in multithreaded environment?",
      options: [
        { optionText: "queue.LifoQueue", optionTag: "A" },
        { optionText: "list", optionTag: "B" },
        { optionText: "deque", optionTag: "C" },
        { optionText: "set", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which stack implementation allows O(1) push and pop?",
      options: [
        { optionText: "deque", optionTag: "A" },
        { optionText: "list with slicing", optionTag: "B" },
        { optionText: "dictionary", optionTag: "C" },
        { optionText: "set", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result of multiple nested function calls in stack?",
      options: [
        { optionText: "Stack grows with each call", optionTag: "A" },
        { optionText: "Stack becomes empty", optionTag: "B" },
        { optionText: "Stack is constant", optionTag: "C" },
        { optionText: "Stack shrinks", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is a stack overflow?",
      options: [
        { optionText: "Exceeding call stack memory", optionTag: "A" },
        { optionText: "Running out of RAM", optionTag: "B" },
        { optionText: "Pushing too fast", optionTag: "C" },
        { optionText: "Queue overload", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which built-in function returns number of elements in a stack?",
      options: [
        { optionText: "len()", optionTag: "A" },
        { optionText: "size()", optionTag: "B" },
        { optionText: "count()", optionTag: "C" },
        { optionText: "length()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;