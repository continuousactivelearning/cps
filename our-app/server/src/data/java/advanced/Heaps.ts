import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Heaps - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "This quiz evaluates your advanced understanding of Heaps, including heap operations, types, applications, and Java implementation.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Heaps"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the time complexity of inserting an element into a binary heap?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which Java class provides a heap implementation?",
      options: [
        { optionText: "PriorityQueue", optionTag: "A" },
        { optionText: "TreeSet", optionTag: "B" },
        { optionText: "Stack", optionTag: "C" },
        { optionText: "ArrayDeque", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the shape property of a binary heap?",
      options: [
        { optionText: "It is a complete binary tree", optionTag: "A" },
        { optionText: "All leaves are at the same level", optionTag: "B" },
        { optionText: "It is always balanced", optionTag: "C" },
        { optionText: "It has no duplicate elements", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In a max-heap, which node contains the largest value?",
      options: [
        { optionText: "Any leaf node", optionTag: "A" },
        { optionText: "Root", optionTag: "B" },
        { optionText: "Leftmost node", optionTag: "C" },
        { optionText: "Rightmost node", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which operation is used to maintain heap order after insertion?",
      options: [
        { optionText: "Percolate down", optionTag: "A" },
        { optionText: "Balance", optionTag: "B" },
        { optionText: "Heapify up", optionTag: "C" },
        { optionText: "Rotate", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the time complexity of extracting the minimum from a min-heap?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the purpose of heapify?",
      options: [
        { optionText: "To sort an array", optionTag: "A" },
        { optionText: "To convert a binary tree to a heap", optionTag: "B" },
        { optionText: "To delete an element", optionTag: "C" },
        { optionText: "To search an element", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which heap type is used for Dijkstra’s algorithm?",
      options: [
        { optionText: "Max-heap", optionTag: "A" },
        { optionText: "Min-heap", optionTag: "B" },
        { optionText: "Binary search heap", optionTag: "C" },
        { optionText: "Ternary heap", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following is not a valid type of heap?",
      options: [
        { optionText: "Binary heap", optionTag: "A" },
        { optionText: "Min-heap", optionTag: "B" },
        { optionText: "Max-heap", optionTag: "C" },
        { optionText: "Postorder heap", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "In a heap stored in an array, the left child of index i is at:",
      options: [
        { optionText: "2 * i", optionTag: "A" },
        { optionText: "2 * i + 1", optionTag: "B" },
        { optionText: "(i - 1) / 2", optionTag: "C" },
        { optionText: "2 + i", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "The root node of a min-heap has which property?",
      options: [
        { optionText: "Largest element", optionTag: "A" },
        { optionText: "Duplicate values", optionTag: "B" },
        { optionText: "Smallest element", optionTag: "C" },
        { optionText: "Negative value", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which traversal is used to represent heap in array form?",
      options: [
        { optionText: "Preorder", optionTag: "A" },
        { optionText: "Level order", optionTag: "B" },
        { optionText: "Inorder", optionTag: "C" },
        { optionText: "Postorder", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How many children does a node have in a binary heap?",
      options: [
        { optionText: "1", optionTag: "A" },
        { optionText: "3", optionTag: "B" },
        { optionText: "2", optionTag: "C" },
        { optionText: "Depends on level", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which heap supports efficient merging?",
      options: [
        { optionText: "Binary heap", optionTag: "A" },
        { optionText: "Fibonacci heap", optionTag: "B" },
        { optionText: "Min-heap", optionTag: "C" },
        { optionText: "Ternary heap", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which method in PriorityQueue class retrieves but does not remove the head?",
      options: [
        { optionText: "poll()", optionTag: "A" },
        { optionText: "element()", optionTag: "B" },
        { optionText: "peek()", optionTag: "C" },
        { optionText: "remove()", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which data structure is best for implementing a heap?",
      options: [
        { optionText: "Linked list", optionTag: "A" },
        { optionText: "Array", optionTag: "B" },
        { optionText: "Hash map", optionTag: "C" },
        { optionText: "Tree map", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which function maintains the heap property?",
      options: [
        { optionText: "heapify()", optionTag: "A" },
        { optionText: "balance()", optionTag: "B" },
        { optionText: "sort()", optionTag: "C" },
        { optionText: "search()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which scenario requires max-heap?",
      options: [
        { optionText: "Scheduling shortest job", optionTag: "A" },
        { optionText: "Priority queue with highest value", optionTag: "B" },
        { optionText: "Sorting increasing order", optionTag: "C" },
        { optionText: "Finding minimum value", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How to get the parent of node at index i in heap array?",
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
      questionText: "Which is a valid application of heap?",
      options: [
        { optionText: "Implementing LRU cache", optionTag: "A" },
        { optionText: "Graph traversal", optionTag: "B" },
        { optionText: "Pathfinding algorithms", optionTag: "C" },
        { optionText: "Both A and C", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    }
  ]
};

export default quizData;