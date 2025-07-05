import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "C++ Stacks - Beginner Quiz",
  quizLevel: "beginner",
  lang: "cpp",
  description: "This quiz assesses your understanding of stack fundamentals using C++.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Stacks"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What type of data structure is a stack?",
      options: [
        { optionText: "LIFO", optionTag: "A" },
        { optionText: "FIFO", optionTag: "B" },
        { optionText: "Heap", optionTag: "C" },
        { optionText: "Queue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which C++ STL container is used to implement stack?",
      options: [
        { optionText: "stack", optionTag: "A" },
        { optionText: "queue", optionTag: "B" },
        { optionText: "list", optionTag: "C" },
        { optionText: "map", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation adds an element to the stack?",
      options: [
        { optionText: "push()", optionTag: "A" },
        { optionText: "insert()", optionTag: "B" },
        { optionText: "add()", optionTag: "C" },
        { optionText: "append()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation removes the top element of the stack?",
      options: [
        { optionText: "pop()", optionTag: "A" },
        { optionText: "delete()", optionTag: "B" },
        { optionText: "remove()", optionTag: "C" },
        { optionText: "shift()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does top() do in a stack?",
      options: [
        { optionText: "Returns the top element without removing it", optionTag: "A" },
        { optionText: "Deletes the top element", optionTag: "B" },
        { optionText: "Inserts a new element", optionTag: "C" },
        { optionText: "Sorts the stack", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which header file is needed for stack in STL?",
      options: [
        { optionText: "<stack>", optionTag: "A" },
        { optionText: "<queue>", optionTag: "B" },
        { optionText: "<vector>", optionTag: "C" },
        { optionText: "<list>", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method checks if the stack is empty?",
      options: [
        { optionText: "empty()", optionTag: "A" },
        { optionText: "isEmpty()", optionTag: "B" },
        { optionText: "clear()", optionTag: "C" },
        { optionText: "isempty()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if you call pop() on an empty stack?",
      options: [
        { optionText: "Undefined behavior", optionTag: "A" },
        { optionText: "Returns -1", optionTag: "B" },
        { optionText: "Throws a warning", optionTag: "C" },
        { optionText: "Program terminates", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of push() in a stack?",
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
      questionText: "Which of the following is NOT an application of stack?",
      options: [
        { optionText: "Level-order traversal", optionTag: "A" },
        { optionText: "Undo feature", optionTag: "B" },
        { optionText: "Expression evaluation", optionTag: "C" },
        { optionText: "Backtracking", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Stacks can be used to reverse a string.",
      options: [
        { optionText: "True", optionTag: "A" },
        { optionText: "False", optionTag: "B" },
        { optionText: "Only with queues", optionTag: "C" },
        { optionText: "Not possible in C++", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does stack.size() return?",
      options: [
        { optionText: "Number of elements in the stack", optionTag: "A" },
        { optionText: "Top element", optionTag: "B" },
        { optionText: "Bottom element", optionTag: "C" },
        { optionText: "Maximum size", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following will NOT compile?",
      options: [
        { optionText: "stack<int> s;", optionTag: "A" },
        { optionText: "s.push(5);", optionTag: "B" },
        { optionText: "s.top() = 3;", optionTag: "C" },
        { optionText: "push(s, 4);", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What happens when stack overflows?",
      options: [
        { optionText: "Stack exceeds its memory limit", optionTag: "A" },
        { optionText: "Stack becomes empty", optionTag: "B" },
        { optionText: "Stack reverses", optionTag: "C" },
        { optionText: "Stack deletes top", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm uses stack for function calls?",
      options: [
        { optionText: "Recursion", optionTag: "A" },
        { optionText: "Iteration", optionTag: "B" },
        { optionText: "Sorting", optionTag: "C" },
        { optionText: "Searching", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Stack follows which principle?",
      options: [
        { optionText: "Last In First Out", optionTag: "A" },
        { optionText: "First In First Out", optionTag: "B" },
        { optionText: "Random Access", optionTag: "C" },
        { optionText: "None of these", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is a valid stack declaration in C++?",
      options: [
        { optionText: "stack<int> s;", optionTag: "A" },
        { optionText: "int stack s;", optionTag: "B" },
        { optionText: "Stack s;", optionTag: "C" },
        { optionText: "stack s<int>;", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is the correct syntax to access the top of a stack?",
      options: [
        { optionText: "s.top()", optionTag: "A" },
        { optionText: "top(s)", optionTag: "B" },
        { optionText: "s[0]", optionTag: "C" },
        { optionText: "s.peek()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation should be used to clear all elements of stack?",
      options: [
        { optionText: "While !empty() { pop(); }", optionTag: "A" },
        { optionText: "s.clear()", optionTag: "B" },
        { optionText: "s.empty()", optionTag: "C" },
        { optionText: "s.reset()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;