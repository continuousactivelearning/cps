import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Queues - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "This quiz tests your intermediate-level understanding of Queues in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Queues"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which module provides a Queue class in Python?",
      options: [
        { optionText: "queue", optionTag: "A" },
        { optionText: "collections", optionTag: "B" },
        { optionText: "threading", optionTag: "C" },
        { optionText: "heapq", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of enqueuing an item in Python's `queue.Queue`?",
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
      questionText: "Which method adds an element to a `queue.Queue`?",
      options: [
        { optionText: "put()", optionTag: "A" },
        { optionText: "append()", optionTag: "B" },
        { optionText: "enqueue()", optionTag: "C" },
        { optionText: "push()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method removes an element from a `queue.Queue`?",
      options: [
        { optionText: "get()", optionTag: "A" },
        { optionText: "pop()", optionTag: "B" },
        { optionText: "dequeue()", optionTag: "C" },
        { optionText: "delete()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens when `get()` is called on an empty `queue.Queue`?",
      options: [
        { optionText: "It blocks until an item is available", optionTag: "A" },
        { optionText: "It raises an IndexError", optionTag: "B" },
        { optionText: "It returns None", optionTag: "C" },
        { optionText: "It removes nothing", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which collection type is most efficient for implementing queues?",
      options: [
        { optionText: "deque", optionTag: "A" },
        { optionText: "list", optionTag: "B" },
        { optionText: "set", optionTag: "C" },
        { optionText: "dict", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What method is used to add items to the right of a `deque`?",
      options: [
        { optionText: "append()", optionTag: "A" },
        { optionText: "enqueue()", optionTag: "B" },
        { optionText: "addLast()", optionTag: "C" },
        { optionText: "put()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you remove an item from the left of a `deque`?",
      options: [
        { optionText: "popleft()", optionTag: "A" },
        { optionText: "pop()", optionTag: "B" },
        { optionText: "dequeue()", optionTag: "C" },
        { optionText: "removeFirst()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the default maximum size of `queue.Queue()`?",
      options: [
        { optionText: "Infinite", optionTag: "A" },
        { optionText: "100", optionTag: "B" },
        { optionText: "10", optionTag: "C" },
        { optionText: "256", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following queue types is FIFO?",
      options: [
        { optionText: "queue.Queue", optionTag: "A" },
        { optionText: "queue.LifoQueue", optionTag: "B" },
        { optionText: "queue.PriorityQueue", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which queue is used for priority-based scheduling?",
      options: [
        { optionText: "PriorityQueue", optionTag: "A" },
        { optionText: "LifoQueue", optionTag: "B" },
        { optionText: "Queue", optionTag: "C" },
        { optionText: "SimpleQueue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is returned by `q.qsize()`?",
      options: [
        { optionText: "Number of elements in the queue", optionTag: "A" },
        { optionText: "Memory size of the queue", optionTag: "B" },
        { optionText: "Queue capacity", optionTag: "C" },
        { optionText: "Time left for execution", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method blocks if the queue is full?",
      options: [
        { optionText: "put()", optionTag: "A" },
        { optionText: "append()", optionTag: "B" },
        { optionText: "enqueue()", optionTag: "C" },
        { optionText: "push()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How can you avoid blocking while getting from a queue?",
      options: [
        { optionText: "Use get_nowait()", optionTag: "A" },
        { optionText: "Use pop()", optionTag: "B" },
        { optionText: "Use safe_get()", optionTag: "C" },
        { optionText: "Use peek()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which queue allows access to the last inserted item first?",
      options: [
        { optionText: "LifoQueue", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "PriorityQueue", optionTag: "C" },
        { optionText: "deque", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the complexity of inserting at the end of a deque?",
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
      questionText: "Which of the following is not a queue operation?",
      options: [
        { optionText: "peek()", optionTag: "A" },
        { optionText: "put()", optionTag: "B" },
        { optionText: "get()", optionTag: "C" },
        { optionText: "enqueue()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which module is used for multiprocessing-safe queues?",
      options: [
        { optionText: "multiprocessing", optionTag: "A" },
        { optionText: "concurrent", optionTag: "B" },
        { optionText: "asyncio", optionTag: "C" },
        { optionText: "threading", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure works best for implementing a queue?",
      options: [
        { optionText: "deque", optionTag: "A" },
        { optionText: "list", optionTag: "B" },
        { optionText: "set", optionTag: "C" },
        { optionText: "tuple", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if `q.put()` is called on a full queue?",
      options: [
        { optionText: "It blocks until space is available", optionTag: "A" },
        { optionText: "Raises an error", optionTag: "B" },
        { optionText: "Returns None", optionTag: "C" },
        { optionText: "Ignores the item", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;
