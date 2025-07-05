import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Heaps - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "This quiz assesses your understanding of heap data structures, including min-heap and max-heap operations in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Heaps"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What property does a max-heap satisfy?",
      options: [
        { optionText: "Every node is smaller than its children", optionTag: "A" },
        { optionText: "Every node is greater than its children", optionTag: "B" },
        { optionText: "Every node has two children", optionTag: "C" },
        { optionText: "Heap is sorted", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which data structure is typically used to implement a heap?",
      options: [
        { optionText: "Linked List", optionTag: "A" },
        { optionText: "Array", optionTag: "B" },
        { optionText: "Binary Search Tree", optionTag: "C" },
        { optionText: "Stack", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the time complexity of inserting an element into a heap?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the parent index of a node at index i in a heap stored in an array?",
      options: [
        { optionText: "(i - 1) / 2", optionTag: "A" },
        { optionText: "i / 2", optionTag: "B" },
        { optionText: "2 * i", optionTag: "C" },
        { optionText: "2 * i + 1", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the index of the left child of node at index i?",
      options: [
        { optionText: "2 * i", optionTag: "A" },
        { optionText: "i + 1", optionTag: "B" },
        { optionText: "2 * i + 1", optionTag: "C" },
        { optionText: "(i - 1) / 2", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which Java class can be used to implement a priority queue backed by a heap?",
      options: [
        { optionText: "LinkedList", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "PriorityQueue", optionTag: "C" },
        { optionText: "ArrayDeque", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the root element in a min-heap?",
      options: [
        { optionText: "Largest element", optionTag: "A" },
        { optionText: "Smallest element", optionTag: "B" },
        { optionText: "Middle element", optionTag: "C" },
        { optionText: "Any random element", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which operation is used to maintain heap property after deletion?",
      options: [
        { optionText: "Push", optionTag: "A" },
        { optionText: "Heapify", optionTag: "B" },
        { optionText: "Enqueue", optionTag: "C" },
        { optionText: "Pop", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the time complexity of heap sort?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What happens when you insert into a full max-heap?",
      options: [
        { optionText: "It crashes", optionTag: "A" },
        { optionText: "It replaces the root", optionTag: "B" },
        { optionText: "It resizes (if dynamic)", optionTag: "C" },
        { optionText: "It ignores input", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which algorithm uses heap to improve sorting?",
      options: [
        { optionText: "Quick Sort", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Heap Sort", optionTag: "C" },
        { optionText: "Bubble Sort", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which heap is used in Dijkstra’s algorithm?",
      options: [
        { optionText: "Max-Heap", optionTag: "A" },
        { optionText: "Min-Heap", optionTag: "B" },
        { optionText: "Fibonacci Heap", optionTag: "C" },
        { optionText: "Binary Search Tree", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the height of a complete binary heap with n nodes?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is NOT a type of heap?",
      options: [
        { optionText: "Max-Heap", optionTag: "A" },
        { optionText: "Min-Heap", optionTag: "B" },
        { optionText: "Middle-Heap", optionTag: "C" },
        { optionText: "Fibonacci Heap", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which node is always at the root of a max-heap?",
      options: [
        { optionText: "Smallest", optionTag: "A" },
        { optionText: "Random", optionTag: "B" },
        { optionText: "Largest", optionTag: "C" },
        { optionText: "Leaf", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which Java interface does PriorityQueue implement?",
      options: [
        { optionText: "Deque", optionTag: "A" },
        { optionText: "Map", optionTag: "B" },
        { optionText: "Queue", optionTag: "C" },
        { optionText: "List", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which traversal helps verify heap structure?",
      options: [
        { optionText: "Inorder", optionTag: "A" },
        { optionText: "Level order", optionTag: "B" },
        { optionText: "Preorder", optionTag: "C" },
        { optionText: "Postorder", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which heap is better for fast decrease-key operation?",
      options: [
        { optionText: "Binary Heap", optionTag: "A" },
        { optionText: "Binomial Heap", optionTag: "B" },
        { optionText: "Fibonacci Heap", optionTag: "C" },
        { optionText: "Skew Heap", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which is true for heap insert?",
      options: [
        { optionText: "Insert at end and percolate up", optionTag: "A" },
        { optionText: "Insert at root", optionTag: "B" },
        { optionText: "Insert in middle", optionTag: "C" },
        { optionText: "Insert as leftmost child", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will be the root after inserting 15 in max-heap [20, 10, 5]?",
      options: [
        { optionText: "15", optionTag: "A" },
        { optionText: "20", optionTag: "B" },
        { optionText: "10", optionTag: "C" },
        { optionText: "5", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;