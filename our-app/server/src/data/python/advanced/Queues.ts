import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Queues - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "This quiz evaluates advanced concepts in queue data structures including circular queues, priority queues, deque, and multithreaded scenarios in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Queues"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which module in Python provides a thread-safe queue implementation?",
      options: [
        { optionText: "queue", optionTag: "A" },
        { optionText: "collections", optionTag: "B" },
        { optionText: "threading", optionTag: "C" },
        { optionText: "concurrent", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following queue types is supported by Python's queue module?",
      options: [
        { optionText: "FIFO", optionTag: "A" },
        { optionText: "LIFO", optionTag: "B" },
        { optionText: "PriorityQueue", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What happens when you call get() on an empty queue without blocking?",
      options: [
        { optionText: "queue.Empty is raised", optionTag: "A" },
        { optionText: "None is returned", optionTag: "B" },
        { optionText: "get() blocks indefinitely", optionTag: "C" },
        { optionText: "queue.Full is raised", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which collection type is best for implementing a circular queue in Python?",
      options: [
        { optionText: "collections.deque", optionTag: "A" },
        { optionText: "list", optionTag: "B" },
        { optionText: "tuple", optionTag: "C" },
        { optionText: "set", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation adds an item to the left end of a deque?",
      options: [
        { optionText: "appendleft()", optionTag: "A" },
        { optionText: "insertleft()", optionTag: "B" },
        { optionText: "pushleft()", optionTag: "C" },
        { optionText: "addleft()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method is used to remove and return an item from the right end of a deque?",
      options: [
        { optionText: "pop()", optionTag: "A" },
        { optionText: "popright()", optionTag: "B" },
        { optionText: "remove()", optionTag: "C" },
        { optionText: "shift()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the default max size of a Python queue.Queue?",
      options: [
        { optionText: "Infinite", optionTag: "A" },
        { optionText: "100", optionTag: "B" },
        { optionText: "None", optionTag: "C" },
        { optionText: "0", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function can be used to peek at the front item of a queue?",
      options: [
        { optionText: "Access element at index 0", optionTag: "A" },
        { optionText: "get()", optionTag: "B" },
        { optionText: "peek()", optionTag: "C" },
        { optionText: "front()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method is used to add an element to a queue in Python's queue module?",
      options: [
        { optionText: "put()", optionTag: "A" },
        { optionText: "push()", optionTag: "B" },
        { optionText: "add()", optionTag: "C" },
        { optionText: "append()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to implement a priority queue in Python using heapq?",
      options: [
        { optionText: "Push tuples with (priority, data)", optionTag: "A" },
        { optionText: "Use a set", optionTag: "B" },
        { optionText: "Sort the list manually", optionTag: "C" },
        { optionText: "Use sorted()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is a correct way to check if a queue is empty?",
      options: [
        { optionText: "q.empty()", optionTag: "A" },
        { optionText: "q.size() == 0", optionTag: "B" },
        { optionText: "len(q) == 0", optionTag: "C" },
        { optionText: "q.isEmpty()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does get_nowait() do in a queue?",
      options: [
        { optionText: "Returns an item without blocking", optionTag: "A" },
        { optionText: "Blocks until item is returned", optionTag: "B" },
        { optionText: "Adds item to queue", optionTag: "C" },
        { optionText: "Raises queue.Full", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method in PriorityQueue ensures custom object sorting?",
      options: [
        { optionText: "__lt__", optionTag: "A" },
        { optionText: "__gt__", optionTag: "B" },
        { optionText: "__eq__", optionTag: "C" },
        { optionText: "__compare__", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you set a max size of 10 for a queue?",
      options: [
        { optionText: "queue.Queue(maxsize=10)", optionTag: "A" },
        { optionText: "queue(max=10)", optionTag: "B" },
        { optionText: "Queue.create(10)", optionTag: "C" },
        { optionText: "Queue.setsize(10)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What exception is raised when put() is called on a full queue without blocking?",
      options: [
        { optionText: "queue.Full", optionTag: "A" },
        { optionText: "queue.Empty", optionTag: "B" },
        { optionText: "OverflowError", optionTag: "C" },
        { optionText: "None", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method in deque removes from the left end?",
      options: [
        { optionText: "popleft()", optionTag: "A" },
        { optionText: "popLeft()", optionTag: "B" },
        { optionText: "shift()", optionTag: "C" },
        { optionText: "removeFirst()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is true for deque?",
      options: [
        { optionText: "Supports O(1) append and pop from both ends", optionTag: "A" },
        { optionText: "Supports O(n) from left", optionTag: "B" },
        { optionText: "Only supports one end operations", optionTag: "C" },
        { optionText: "Does not support multithreading", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if maxlen is reached in deque?",
      options: [
        { optionText: "Oldest element is removed on append", optionTag: "A" },
        { optionText: "Error is raised", optionTag: "B" },
        { optionText: "New items are ignored", optionTag: "C" },
        { optionText: "Deque is reset", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure can replace deque for a bounded queue?",
      options: [
        { optionText: "queue.Queue with maxsize", optionTag: "A" },
        { optionText: "list", optionTag: "B" },
        { optionText: "tuple", optionTag: "C" },
        { optionText: "set", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;