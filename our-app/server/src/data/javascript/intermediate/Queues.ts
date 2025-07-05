import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "JavaScript Queues - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "javascript",
  description: "This quiz assesses your understanding of queue operations and implementations in JavaScript.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Queues"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which data structure operates on a FIFO (First-In-First-Out) principle?",
      options: [
        { optionText: "Queue", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Array", optionTag: "C" },
        { optionText: "Tree", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method adds an element to the rear of a queue in JavaScript?",
      options: [
        { optionText: "push()", optionTag: "A" },
        { optionText: "unshift()", optionTag: "B" },
        { optionText: "shift()", optionTag: "C" },
        { optionText: "pop()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method removes an element from the front of a queue?",
      options: [
        { optionText: "shift()", optionTag: "A" },
        { optionText: "pop()", optionTag: "B" },
        { optionText: "push()", optionTag: "C" },
        { optionText: "unshift()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which class feature is ideal for implementing private members in a queue class?",
      options: [
        { optionText: "# keyword", optionTag: "A" },
        { optionText: "this keyword", optionTag: "B" },
        { optionText: "let declaration", optionTag: "C" },
        { optionText: "static keyword", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does queue.length return after 3 enqueue and 1 dequeue operations?",
      options: [
        { optionText: "2", optionTag: "A" },
        { optionText: "3", optionTag: "B" },
        { optionText: "1", optionTag: "C" },
        { optionText: "0", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is true for queues?",
      options: [
        { optionText: "Insert at rear, delete at front", optionTag: "A" },
        { optionText: "Insert at front, delete at rear", optionTag: "B" },
        { optionText: "Insert and delete at front", optionTag: "C" },
        { optionText: "Insert and delete at rear", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which built-in object in JavaScript is commonly used to implement a queue?",
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
      questionText: "Which of the following queue operations removes the first item?",
      options: [
        { optionText: "shift()", optionTag: "A" },
        { optionText: "unshift()", optionTag: "B" },
        { optionText: "pop()", optionTag: "C" },
        { optionText: "splice(0, 1)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which queue type allows adding and removing from both ends?",
      options: [
        { optionText: "Deque", optionTag: "A" },
        { optionText: "Priority Queue", optionTag: "B" },
        { optionText: "Linear Queue", optionTag: "C" },
        { optionText: "Circular Queue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which queue type uses priority levels?",
      options: [
        { optionText: "Priority Queue", optionTag: "A" },
        { optionText: "Deque", optionTag: "B" },
        { optionText: "Circular Queue", optionTag: "C" },
        { optionText: "Linear Queue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },

    // More questions
    {
      questionText: "Which method can simulate dequeue behavior from an array?",
      options: [
        { optionText: "shift()", optionTag: "A" },
        { optionText: "pop()", optionTag: "B" },
        { optionText: "slice()", optionTag: "C" },
        { optionText: "map()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will be the result of [1,2,3].shift()?",
      options: [
        { optionText: "1", optionTag: "A" },
        { optionText: "[2,3]", optionTag: "B" },
        { optionText: "3", optionTag: "C" },
        { optionText: "undefined", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does push() return in JavaScript?",
      options: [
        { optionText: "New length of the array", optionTag: "A" },
        { optionText: "The pushed item", optionTag: "B" },
        { optionText: "undefined", optionTag: "C" },
        { optionText: "Boolean", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which queue type can wrap around when it reaches the end?",
      options: [
        { optionText: "Circular Queue", optionTag: "A" },
        { optionText: "Deque", optionTag: "B" },
        { optionText: "Priority Queue", optionTag: "C" },
        { optionText: "Double-ended Queue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In a queue, where is the next item added?",
      options: [
        { optionText: "Rear", optionTag: "A" },
        { optionText: "Front", optionTag: "B" },
        { optionText: "Middle", optionTag: "C" },
        { optionText: "Top", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In a queue, where is the next item removed?",
      options: [
        { optionText: "Front", optionTag: "A" },
        { optionText: "Rear", optionTag: "B" },
        { optionText: "Top", optionTag: "C" },
        { optionText: "End", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which built-in method returns the number of elements in a queue?",
      options: [
        { optionText: "length", optionTag: "A" },
        { optionText: "size()", optionTag: "B" },
        { optionText: "count()", optionTag: "C" },
        { optionText: "getLength()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you implement a queue using an object in JS?",
      options: [
        { optionText: "Use keys for index and manage front & rear manually", optionTag: "A" },
        { optionText: "Use values directly", optionTag: "B" },
        { optionText: "Push into object", optionTag: "C" },
        { optionText: "Use object.push()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is time complexity of enqueue operation in array-based queue?",
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
      questionText: "What is time complexity of dequeue using shift()?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;