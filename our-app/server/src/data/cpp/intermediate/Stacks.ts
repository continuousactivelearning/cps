import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "C++ Stacks - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "cpp",
  description: "This quiz assesses your understanding of stack operations and implementations in C++.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Stacks"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the principle of a stack?",
      options: [
        { optionText: "Last In First Out", optionTag: "A" },
        { optionText: "First In First Out", optionTag: "B" },
        { optionText: "Random Access", optionTag: "C" },
        { optionText: "Last In Last Out", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which STL container in C++ implements a stack?",
      options: [
        { optionText: "std::stack", optionTag: "A" },
        { optionText: "std::queue", optionTag: "B" },
        { optionText: "std::list", optionTag: "C" },
        { optionText: "std::map", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these operations is not valid on a stack?",
      options: [
        { optionText: "Random insert", optionTag: "A" },
        { optionText: "Push", optionTag: "B" },
        { optionText: "Pop", optionTag: "C" },
        { optionText: "Top", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function checks if a stack is empty in C++?",
      options: [
        { optionText: "empty()", optionTag: "A" },
        { optionText: "isEmpty()", optionTag: "B" },
        { optionText: "null()", optionTag: "C" },
        { optionText: "check()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens when you pop from an empty stack?",
      options: [
        { optionText: "Undefined behavior", optionTag: "A" },
        { optionText: "Returns null", optionTag: "B" },
        { optionText: "Returns 0", optionTag: "C" },
        { optionText: "Throws exception automatically", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation returns the top element of the stack?",
      options: [
        { optionText: "top()", optionTag: "A" },
        { optionText: "peek()", optionTag: "B" },
        { optionText: "front()", optionTag: "C" },
        { optionText: "back()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure is used for expression evaluation?",
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
      questionText: "Which algorithm uses a stack?",
      options: [
        { optionText: "Depth First Search", optionTag: "A" },
        { optionText: "Breadth First Search", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "C" },
        { optionText: "Bubble Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which header file is needed for stack in C++ STL?",
      options: [
        { optionText: "<stack>", optionTag: "A" },
        { optionText: "<vector>", optionTag: "B" },
        { optionText: "<array>", optionTag: "C" },
        { optionText: "<list>", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to push an element to a stack?",
      options: [
        { optionText: "s.push(x);", optionTag: "A" },
        { optionText: "s.insert(x);", optionTag: "B" },
        { optionText: "s.add(x);", optionTag: "C" },
        { optionText: "s.put(x);", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following uses a stack internally?",
      options: [
        { optionText: "Function call", optionTag: "A" },
        { optionText: "Switch-case", optionTag: "B" },
        { optionText: "Loops", optionTag: "C" },
        { optionText: "Macros", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of push operation in stack?",
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
      questionText: "Stacks can be implemented using:",
      options: [
        { optionText: "Arrays and Linked Lists", optionTag: "A" },
        { optionText: "Only Arrays", optionTag: "B" },
        { optionText: "Only Linked Lists", optionTag: "C" },
        { optionText: "Queues", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is not an application of stacks?",
      options: [
        { optionText: "Binary Search", optionTag: "A" },
        { optionText: "Function call stack", optionTag: "B" },
        { optionText: "Undo feature", optionTag: "C" },
        { optionText: "Balanced parenthesis checker", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How can you implement multiple stacks in a single array?",
      options: [
        { optionText: "Divide the array logically", optionTag: "A" },
        { optionText: "Use vector of vectors", optionTag: "B" },
        { optionText: "Use map data structure", optionTag: "C" },
        { optionText: "Not possible", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these will reverse an array?",
      options: [
        { optionText: "Use stack to push and pop", optionTag: "A" },
        { optionText: "Use queue", optionTag: "B" },
        { optionText: "Use binary tree", optionTag: "C" },
        { optionText: "Use hashtable", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which real-life structure is similar to a stack?",
      options: [
        { optionText: "Pile of plates", optionTag: "A" },
        { optionText: "Queue at a ticket counter", optionTag: "B" },
        { optionText: "Library book shelf", optionTag: "C" },
        { optionText: "CPU scheduling queue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the best way to check for overflow in a static stack?",
      options: [
        { optionText: "Check if top == maxSize - 1", optionTag: "A" },
        { optionText: "Check if top == -1", optionTag: "B" },
        { optionText: "Check if stack is empty", optionTag: "C" },
        { optionText: "Check size of array", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is NOT a valid stack operation?",
      options: [
        { optionText: "enqueue()", optionTag: "A" },
        { optionText: "push()", optionTag: "B" },
        { optionText: "top()", optionTag: "C" },
        { optionText: "pop()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;