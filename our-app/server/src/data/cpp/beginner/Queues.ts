import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "C++ Queues - Beginner Quiz",
  quizLevel: "beginner",
  lang: "cpp",
  description: "This quiz checks your basic understanding of Queues in C++.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Queues"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is a queue in data structures?",
      options: [
        { optionText: "First-In-First-Out (FIFO)", optionTag: "A" },
        { optionText: "Last-In-First-Out (LIFO)", optionTag: "B" },
        { optionText: "Random access", optionTag: "C" },
        { optionText: "First-In-Last-Out", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which header is required to use queues in C++ STL?",
      options: [
        { optionText: "<queue>", optionTag: "A" },
        { optionText: "<stack>", optionTag: "B" },
        { optionText: "<list>", optionTag: "C" },
        { optionText: "<vector>", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation adds an element to a queue?",
      options: [
        { optionText: "push()", optionTag: "A" },
        { optionText: "pop()", optionTag: "B" },
        { optionText: "insert()", optionTag: "C" },
        { optionText: "append()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation removes the front element from a queue?",
      options: [
        { optionText: "pop()", optionTag: "A" },
        { optionText: "delete()", optionTag: "B" },
        { optionText: "remove()", optionTag: "C" },
        { optionText: "erase()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to access the front element of a queue in C++?",
      options: [
        { optionText: "front()", optionTag: "A" },
        { optionText: "peek()", optionTag: "B" },
        { optionText: "top()", optionTag: "C" },
        { optionText: "begin()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to check if a queue is empty?",
      options: [
        { optionText: "empty()", optionTag: "A" },
        { optionText: "isEmpty()", optionTag: "B" },
        { optionText: "size() == 0", optionTag: "C" },
        { optionText: "null()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of queue insertion?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is NOT a valid queue type?",
      options: [
        { optionText: "Circular Queue", optionTag: "A" },
        { optionText: "Priority Queue", optionTag: "B" },
        { optionText: "Double Queue", optionTag: "C" },
        { optionText: "Simple Queue", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which operation returns the number of elements in a queue?",
      options: [
        { optionText: "size()", optionTag: "A" },
        { optionText: "length()", optionTag: "B" },
        { optionText: "count()", optionTag: "C" },
        { optionText: "total()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure is used to implement queues in STL?",
      options: [
        { optionText: "deque", optionTag: "A" },
        { optionText: "list", optionTag: "B" },
        { optionText: "array", optionTag: "C" },
        { optionText: "stack", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How can you remove all elements from a queue?",
      options: [
        { optionText: "Using a loop and pop()", optionTag: "A" },
        { optionText: "clear()", optionTag: "B" },
        { optionText: "empty()", optionTag: "C" },
        { optionText: "flush()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which STL container supports FIFO order?",
      options: [
        { optionText: "queue", optionTag: "A" },
        { optionText: "stack", optionTag: "B" },
        { optionText: "vector", optionTag: "C" },
        { optionText: "map", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the default underlying container for queue in C++?",
      options: [
        { optionText: "deque", optionTag: "A" },
        { optionText: "list", optionTag: "B" },
        { optionText: "vector", optionTag: "C" },
        { optionText: "set", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if you call front() on an empty queue?",
      options: [
        { optionText: "Undefined behavior", optionTag: "A" },
        { optionText: "Returns 0", optionTag: "B" },
        { optionText: "Throws exception", optionTag: "C" },
        { optionText: "Returns -1", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How is a circular queue different from a simple queue?",
      options: [
        { optionText: "It wraps around when end is reached", optionTag: "A" },
        { optionText: "It is smaller", optionTag: "B" },
        { optionText: "It uses arrays", optionTag: "C" },
        { optionText: "It uses stacks", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function gets the last element in a queue?",
      options: [
        { optionText: "back()", optionTag: "A" },
        { optionText: "rear()", optionTag: "B" },
        { optionText: "last()", optionTag: "C" },
        { optionText: "end()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Can a queue be implemented using arrays?",
      options: [
        { optionText: "Yes", optionTag: "A" },
        { optionText: "No", optionTag: "B" },
        { optionText: "Only in Java", optionTag: "C" },
        { optionText: "Only using classes", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result of pushing 1, 2, 3 to a queue and popping once?",
      options: [
        { optionText: "2 is at the front", optionTag: "A" },
        { optionText: "1 is at the front", optionTag: "B" },
        { optionText: "3 is at the front", optionTag: "C" },
        { optionText: "Queue is empty", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to declare a queue of integers in C++?",
      options: [
        { optionText: "queue<int> q;", optionTag: "A" },
        { optionText: "int queue q;", optionTag: "B" },
        { optionText: "queue q<int>;", optionTag: "C" },
        { optionText: "q<queue> int;", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;