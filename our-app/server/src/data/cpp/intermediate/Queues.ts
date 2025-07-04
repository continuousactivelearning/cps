import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "C++ Queues - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "cpp",
  description: "This quiz assesses your understanding of queue operations and implementations in C++.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Queues"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which header file is used for STL queue in C++?",
      options: [
        { optionText: "<queue>", optionTag: "A" },
        { optionText: "<list>", optionTag: "B" },
        { optionText: "<stack>", optionTag: "C" },
        { optionText: "<vector>", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of enqueue operation in STL queue?",
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
      questionText: "Which operation removes an element from the front of the queue?",
      options: [
        { optionText: "dequeue", optionTag: "A" },
        { optionText: "pop", optionTag: "B" },
        { optionText: "remove", optionTag: "C" },
        { optionText: "delete", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What will happen if you try to access the front of an empty queue?",
      options: [
        { optionText: "Undefined behavior", optionTag: "A" },
        { optionText: "0 is returned", optionTag: "B" },
        { optionText: "Exception is thrown", optionTag: "C" },
        { optionText: "-1 is returned", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure is used to implement a circular queue?",
      options: [
        { optionText: "Array", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Hash Table", optionTag: "C" },
        { optionText: "Tree", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How can you check if a queue is empty in STL?",
      options: [
        { optionText: "q.empty()", optionTag: "A" },
        { optionText: "q.isEmpty()", optionTag: "B" },
        { optionText: "q.size() == NULL", optionTag: "C" },
        { optionText: "!q.front()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does the size() method of queue return?",
      options: [
        { optionText: "Number of elements in queue", optionTag: "A" },
        { optionText: "Maximum capacity", optionTag: "B" },
        { optionText: "0 always", optionTag: "C" },
        { optionText: "1 if full", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What type of queue is used for CPU task scheduling?",
      options: [
        { optionText: "Priority Queue", optionTag: "A" },
        { optionText: "Simple Queue", optionTag: "B" },
        { optionText: "Circular Queue", optionTag: "C" },
        { optionText: "Double-ended Queue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the main difference between queue and stack?",
      options: [
        { optionText: "Queue uses FIFO, stack uses LIFO", optionTag: "A" },
        { optionText: "Queue uses LIFO, stack uses FIFO", optionTag: "B" },
        { optionText: "Queue has faster access", optionTag: "C" },
        { optionText: "Stack is dynamic, queue is static", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function is used to get the first element in a queue?",
      options: [
        { optionText: "front()", optionTag: "A" },
        { optionText: "top()", optionTag: "B" },
        { optionText: "peek()", optionTag: "C" },
        { optionText: "first()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },

    {
      questionText: "In circular queue, how is rear pointer updated?",
      options: [
        { optionText: "(rear + 1) % size", optionTag: "A" },
        { optionText: "rear + 1", optionTag: "B" },
        { optionText: "rear - 1", optionTag: "C" },
        { optionText: "rear * 2", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is a limitation of linear queue using arrays?",
      options: [
        { optionText: "Space not reused after dequeue", optionTag: "A" },
        { optionText: "Slow access time", optionTag: "B" },
        { optionText: "Elements are sorted", optionTag: "C" },
        { optionText: "Overflow never occurs", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which queue supports insertion and deletion from both ends?",
      options: [
        { optionText: "Deque", optionTag: "A" },
        { optionText: "Simple Queue", optionTag: "B" },
        { optionText: "Priority Queue", optionTag: "C" },
        { optionText: "Circular Queue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which C++ STL class is used for double-ended queue?",
      options: [
        { optionText: "deque", optionTag: "A" },
        { optionText: "dqueue", optionTag: "B" },
        { optionText: "doublequeue", optionTag: "C" },
        { optionText: "biqueue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation is not supported directly by STL queue?",
      options: [
        { optionText: "Random access", optionTag: "A" },
        { optionText: "Push", optionTag: "B" },
        { optionText: "Pop", optionTag: "C" },
        { optionText: "Front", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which queue is used for Breadth First Search in graph?",
      options: [
        { optionText: "Simple queue", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Deque", optionTag: "C" },
        { optionText: "Priority queue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to insert an element at back in C++ queue?",
      options: [
        { optionText: "q.push(x)", optionTag: "A" },
        { optionText: "q.insert(x)", optionTag: "B" },
        { optionText: "q.enqueue(x)", optionTag: "C" },
        { optionText: "q.add(x)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which condition signifies a full circular queue?",
      options: [
        { optionText: "(rear + 1) % size == front", optionTag: "A" },
        { optionText: "rear == front", optionTag: "B" },
        { optionText: "rear == -1", optionTag: "C" },
        { optionText: "front == -1", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which condition signifies an empty circular queue?",
      options: [
        { optionText: "front == -1", optionTag: "A" },
        { optionText: "rear == front + 1", optionTag: "B" },
        { optionText: "rear == size - 1", optionTag: "C" },
        { optionText: "rear == 0", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;
