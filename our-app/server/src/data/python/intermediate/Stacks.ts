import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Stacks - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "This quiz assesses your understanding of stack data structure, its operations, applications, and implementation in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Stacks"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which operation removes an element from the stack?",
      options: [
        { optionText: "pop()", optionTag: "A" },
        { optionText: "push()", optionTag: "B" },
        { optionText: "peek()", optionTag: "C" },
        { optionText: "insert()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following best describes a stack?",
      options: [
        { optionText: "LIFO - Last In First Out", optionTag: "A" },
        { optionText: "FIFO - First In First Out", optionTag: "B" },
        { optionText: "LILO - Last In Last Out", optionTag: "C" },
        { optionText: "FILO - First In Last Out", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method adds an element to the top of a stack in Python list?",
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
      questionText: "Which module in Python offers a stack implementation?",
      options: [
        { optionText: "collections.deque", optionTag: "A" },
        { optionText: "math.stack", optionTag: "B" },
        { optionText: "array.stack", optionTag: "C" },
        { optionText: "heapq", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is an application of stacks?",
      options: [
        { optionText: "Expression Evaluation", optionTag: "A" },
        { optionText: "Database Queries", optionTag: "B" },
        { optionText: "Sorting Files", optionTag: "C" },
        { optionText: "Searching", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result of pop() on an empty stack?",
      options: [
        { optionText: "IndexError", optionTag: "A" },
        { optionText: "None", optionTag: "B" },
        { optionText: "0", optionTag: "C" },
        { optionText: "StackError", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you check the top element of a stack in Python (using list)?",
      options: [
        { optionText: "stack[-1]", optionTag: "A" },
        { optionText: "stack[0]", optionTag: "B" },
        { optionText: "stack.peek()", optionTag: "C" },
        { optionText: "stack.top()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of push and pop operations on stack?",
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
      questionText: "Which function reverses a string using stack logic?",
      options: [
        { optionText: "Push each char and pop in reverse", optionTag: "A" },
        { optionText: "Use recursion", optionTag: "B" },
        { optionText: "Sort characters", optionTag: "C" },
        { optionText: "Use slicing", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the purpose of stack in recursive functions?",
      options: [
        { optionText: "Stores function call frames", optionTag: "A" },
        { optionText: "Executes loop logic", optionTag: "B" },
        { optionText: "Stores global variables", optionTag: "C" },
        { optionText: "Holds imports", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which symbol is used to represent the stack top?",
      options: [
        { optionText: "Top pointer", optionTag: "A" },
        { optionText: "Base pointer", optionTag: "B" },
        { optionText: "Null", optionTag: "C" },
        { optionText: "EOF", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the stack used for in backtracking algorithms?",
      options: [
        { optionText: "To track visited paths", optionTag: "A" },
        { optionText: "To sort paths", optionTag: "B" },
        { optionText: "To optimize", optionTag: "C" },
        { optionText: "To store data permanently", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation is not possible directly on a stack?",
      options: [
        { optionText: "Insert at bottom", optionTag: "A" },
        { optionText: "Push", optionTag: "B" },
        { optionText: "Pop", optionTag: "C" },
        { optionText: "Peek", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will `stack.pop()` return for stack = [1, 2, 3]?",
      options: [
        { optionText: "3", optionTag: "A" },
        { optionText: "1", optionTag: "B" },
        { optionText: "2", optionTag: "C" },
        { optionText: "None", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is true about stack memory allocation?",
      options: [
        { optionText: "Stack memory is used for local variables", optionTag: "A" },
        { optionText: "It is unlimited", optionTag: "B" },
        { optionText: "Used for file storage", optionTag: "C" },
        { optionText: "Shared between all programs", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What structure is used in undo-redo operations?",
      options: [
        { optionText: "Two stacks", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Linked List", optionTag: "C" },
        { optionText: "Set", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method checks if stack is empty?",
      options: [
        { optionText: "len(stack) == 0", optionTag: "A" },
        { optionText: "stack.empty()", optionTag: "B" },
        { optionText: "stack.size() == 0", optionTag: "C" },
        { optionText: "stack.isEmpty()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the use of peek() operation?",
      options: [
        { optionText: "View top element without removing", optionTag: "A" },
        { optionText: "Remove element", optionTag: "B" },
        { optionText: "Add element", optionTag: "C" },
        { optionText: "Delete stack", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is true for balanced parentheses check?",
      options: [
        { optionText: "Stack is used", optionTag: "A" },
        { optionText: "Queue is used", optionTag: "B" },
        { optionText: "Heap is used", optionTag: "C" },
        { optionText: "List is used", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;