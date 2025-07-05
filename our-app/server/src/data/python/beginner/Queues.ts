// beginner/python/queues.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Queues - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "This quiz tests your basic understanding of Queues in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Queues"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the order followed by a queue?",
      options: [
        { optionText: "First In First Out (FIFO)", optionTag: "A" },
        { optionText: "Last In First Out (LIFO)", optionTag: "B" },
        { optionText: "First In Last Out (FILO)", optionTag: "C" },
        { optionText: "Random", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which Python module provides a built-in Queue class?",
      options: [
        { optionText: "queue", optionTag: "A" },
        { optionText: "collections", optionTag: "B" },
        { optionText: "heapq", optionTag: "C" },
        { optionText: "threading", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method adds an item to a queue?",
      options: [
        { optionText: "put()", optionTag: "A" },
        { optionText: "append()", optionTag: "B" },
        { optionText: "push()", optionTag: "C" },
        { optionText: "insert()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method removes an item from a queue?",
      options: [
        { optionText: "get()", optionTag: "A" },
        { optionText: "pop()", optionTag: "B" },
        { optionText: "remove()", optionTag: "C" },
        { optionText: "del()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function is used to create a deque in Python?",
      options: [
        { optionText: "collections.deque()", optionTag: "A" },
        { optionText: "queue.create()", optionTag: "B" },
        { optionText: "deque()", optionTag: "C" },
        { optionText: "collections.Queue()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does deque stand for?",
      options: [
        { optionText: "Double Ended Queue", optionTag: "A" },
        { optionText: "Doubly Enclosed Queue", optionTag: "B" },
        { optionText: "Dynamic Empty Queue", optionTag: "C" },
        { optionText: "Default Queue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method adds an element to the left side of a deque?",
      options: [
        { optionText: "appendleft()", optionTag: "A" },
        { optionText: "putleft()", optionTag: "B" },
        { optionText: "insertleft()", optionTag: "C" },
        { optionText: "enqueueleft()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if you get() from an empty queue?",
      options: [
        { optionText: "It blocks the thread (waits)", optionTag: "A" },
        { optionText: "Returns None", optionTag: "B" },
        { optionText: "Raises an exception", optionTag: "C" },
        { optionText: "Returns 0", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the default maximum size of a queue?",
      options: [
        { optionText: "Infinite", optionTag: "A" },
        { optionText: "10", optionTag: "B" },
        { optionText: "100", optionTag: "C" },
        { optionText: "0", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is a valid way to create a queue?",
      options: [
        { optionText: "queue.Queue()", optionTag: "A" },
        { optionText: "Queue.queue()", optionTag: "B" },
        { optionText: "queue()", optionTag: "C" },
        { optionText: "Queue()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },

    // More beginner questions
    {
      questionText: "How do you check if a queue is empty?",
      options: [
        { optionText: "empty()", optionTag: "A" },
        { optionText: "isEmpty()", optionTag: "B" },
        { optionText: "size() == 0", optionTag: "C" },
        { optionText: "None of the above", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method removes an item from the left end of a deque?",
      options: [
        { optionText: "popleft()", optionTag: "A" },
        { optionText: "pop()", optionTag: "B" },
        { optionText: "removeleft()", optionTag: "C" },
        { optionText: "getleft()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method gets the number of elements in a queue?",
      options: [
        { optionText: "qsize()", optionTag: "A" },
        { optionText: "len()", optionTag: "B" },
        { optionText: "size()", optionTag: "C" },
        { optionText: "length()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of enqueue operation in a queue?",
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
      questionText: "What is the time complexity of dequeue operation?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is not a real-world example of queue?",
      options: [
        { optionText: "Call center queue", optionTag: "A" },
        { optionText: "Printer job queue", optionTag: "B" },
        { optionText: "Undo stack", optionTag: "C" },
        { optionText: "Waiting line", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which exception occurs if a full queue is pushed?",
      options: [
        { optionText: "queue.Full", optionTag: "A" },
        { optionText: "IndexError", optionTag: "B" },
        { optionText: "queue.Overflow", optionTag: "C" },
        { optionText: "MemoryError", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to set a max size for a queue?",
      options: [
        { optionText: "queue.Queue(maxsize=10)", optionTag: "A" },
        { optionText: "Queue(10)", optionTag: "B" },
        { optionText: "Queue.setsize(10)", optionTag: "C" },
        { optionText: "Queue.size(10)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which queue type allows elements to be inserted and removed from both ends?",
      options: [
        { optionText: "Deque", optionTag: "A" },
        { optionText: "Simple Queue", optionTag: "B" },
        { optionText: "LIFO Queue", optionTag: "C" },
        { optionText: "Priority Queue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which class in Python provides a thread-safe FIFO queue?",
      options: [
        { optionText: "queue.Queue", optionTag: "A" },
        { optionText: "collections.deque", optionTag: "B" },
        { optionText: "queue.LifoQueue", optionTag: "C" },
        { optionText: "queue.PriorityQueue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;