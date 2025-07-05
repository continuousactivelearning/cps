import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "C++ Queues - Advanced Quiz",
  quizLevel: "advanced",
  lang: "cpp",
  description: "This quiz challenges your advanced understanding of queues in C++, including STL, circular queues, priority queues, and algorithms.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Queues"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which STL container is used to implement a priority queue in C++?",
      options: [
        { optionText: "std::priority_queue", optionTag: "A" },
        { optionText: "std::deque", optionTag: "B" },
        { optionText: "std::list", optionTag: "C" },
        { optionText: "std::queue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of inserting an element into a priority_queue?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure is most efficient to implement a circular queue?",
      options: [
        { optionText: "Array", optionTag: "A" },
        { optionText: "Linked list", optionTag: "B" },
        { optionText: "Stack", optionTag: "C" },
        { optionText: "Binary Tree", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will happen if the queue is full and you try to enqueue an element?",
      options: [
        { optionText: "Overflow condition", optionTag: "A" },
        { optionText: "Underflow condition", optionTag: "B" },
        { optionText: "Segmentation fault", optionTag: "C" },
        { optionText: "New element is automatically dequeued", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which C++ STL adapter provides FIFO queue operations?",
      options: [
        { optionText: "std::queue", optionTag: "A" },
        { optionText: "std::stack", optionTag: "B" },
        { optionText: "std::vector", optionTag: "C" },
        { optionText: "std::set", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which member function of std::queue returns the next element to be removed?",
      options: [
        { optionText: "front()", optionTag: "A" },
        { optionText: "back()", optionTag: "B" },
        { optionText: "pop()", optionTag: "C" },
        { optionText: "top()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How can you reverse a queue using stack in C++?",
      options: [
        { optionText: "Push all elements to stack and pop back to queue", optionTag: "A" },
        { optionText: "Sort the queue", optionTag: "B" },
        { optionText: "Use recursion", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is true about dequeue operation in circular queues?",
      options: [
        { optionText: "Rear is unchanged", optionTag: "A" },
        { optionText: "Both front and rear are incremented", optionTag: "B" },
        { optionText: "Front is incremented circularly", optionTag: "C" },
        { optionText: "Queue is reset", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which data structure can be used to implement a deque?",
      options: [
        { optionText: "Doubly Linked List", optionTag: "A" },
        { optionText: "Singly Linked List", optionTag: "B" },
        { optionText: "Circular Queue", optionTag: "C" },
        { optionText: "Hash Table", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is not a valid queue type?",
      options: [
        { optionText: "Priority Stack", optionTag: "A" },
        { optionText: "Priority Queue", optionTag: "B" },
        { optionText: "Circular Queue", optionTag: "C" },
        { optionText: "Double-Ended Queue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does the function empty() in queue return?",
      options: [
        { optionText: "True if queue is empty", optionTag: "A" },
        { optionText: "Size of queue", optionTag: "B" },
        { optionText: "Number of NULL elements", optionTag: "C" },
        { optionText: "Throws exception if empty", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the underlying container for std::queue by default?",
      options: [
        { optionText: "std::deque", optionTag: "A" },
        { optionText: "std::list", optionTag: "B" },
        { optionText: "std::vector", optionTag: "C" },
        { optionText: "std::set", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following algorithms requires queue in its implementation?",
      options: [
        { optionText: "Breadth-First Search", optionTag: "A" },
        { optionText: "Depth-First Search", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "C" },
        { optionText: "Heap Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is a limitation of arrays in implementing queues?",
      options: [
        { optionText: "Fixed size", optionTag: "A" },
        { optionText: "No efficient deletion", optionTag: "B" },
        { optionText: "No efficient insertion", optionTag: "C" },
        { optionText: "Both A and B", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which queue type allows insertion and deletion at both ends?",
      options: [
        { optionText: "Deque", optionTag: "A" },
        { optionText: "Circular Queue", optionTag: "B" },
        { optionText: "Priority Queue", optionTag: "C" },
        { optionText: "Simple Queue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following operations are not supported by std::queue?",
      options: [
        { optionText: "Random Access", optionTag: "A" },
        { optionText: "Push", optionTag: "B" },
        { optionText: "Pop", optionTag: "C" },
        { optionText: "Front", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if you try to pop an element from an empty std::queue?",
      options: [
        { optionText: "Undefined behavior", optionTag: "A" },
        { optionText: "Returns false", optionTag: "B" },
        { optionText: "Returns NULL", optionTag: "C" },
        { optionText: "No effect", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function in std::queue returns reference to the last element?",
      options: [
        { optionText: "back()", optionTag: "A" },
        { optionText: "rear()", optionTag: "B" },
        { optionText: "tail()", optionTag: "C" },
        { optionText: "last()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation is not valid for a max-heap based priority queue?",
      options: [
        { optionText: "Extract minimum", optionTag: "A" },
        { optionText: "Push", optionTag: "B" },
        { optionText: "Top", optionTag: "C" },
        { optionText: "Pop", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;