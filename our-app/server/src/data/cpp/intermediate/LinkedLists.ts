import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "C++ Linked Lists - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "cpp",
  description: "This quiz evaluates your understanding of singly and doubly linked lists operations in C++.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Linked Lists"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which of the following is true about singly linked lists?",
      options: [
        { optionText: "Each node contains data and a pointer to the next node", optionTag: "A" },
        { optionText: "Each node contains data only", optionTag: "B" },
        { optionText: "Each node contains two pointers", optionTag: "C" },
        { optionText: "It stores elements in a random access format", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of inserting an element at the end of a singly linked list (without tail)?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation is more efficient in a singly linked list than an array?",
      options: [
        { optionText: "Insertion at the beginning", optionTag: "A" },
        { optionText: "Random access", optionTag: "B" },
        { optionText: "Accessing last element", optionTag: "C" },
        { optionText: "Binary search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which pointer is used in a doubly linked list that is not present in singly linked list?",
      options: [
        { optionText: "Prev", optionTag: "A" },
        { optionText: "Head", optionTag: "B" },
        { optionText: "Tail", optionTag: "C" },
        { optionText: "Mid", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the best-case time complexity to delete the head node in a singly linked list?",
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
      questionText: "Which of the following is NOT an advantage of a linked list over an array?",
      options: [
        { optionText: "Constant-time insertion at head", optionTag: "A" },
        { optionText: "Dynamic memory allocation", optionTag: "B" },
        { optionText: "Efficient indexed access", optionTag: "C" },
        { optionText: "Efficient memory usage for variable-sized data", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which traversal technique is required to print a singly linked list in reverse order?",
      options: [
        { optionText: "Recursion", optionTag: "A" },
        { optionText: "For loop", optionTag: "B" },
        { optionText: "Queue", optionTag: "C" },
        { optionText: "While loop", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you detect a cycle in a linked list efficiently?",
      options: [
        { optionText: "Floyd’s Cycle Detection Algorithm", optionTag: "A" },
        { optionText: "DFS", optionTag: "B" },
        { optionText: "Linear Scan", optionTag: "C" },
        { optionText: "Binary Search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does the tail pointer in a linked list help with?",
      options: [
        { optionText: "Fast insertions at the end", optionTag: "A" },
        { optionText: "Fast deletions at the beginning", optionTag: "B" },
        { optionText: "Fast access to any element", optionTag: "C" },
        { optionText: "Slow searching", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What value does a `next` pointer of the last node in a singly linked list hold?",
      options: [
        { optionText: "NULL", optionTag: "A" },
        { optionText: "Head", optionTag: "B" },
        { optionText: "Tail", optionTag: "C" },
        { optionText: "0", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },

    {
      questionText: "Which sorting algorithm is best suited for linked lists?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Heap Sort", optionTag: "C" },
        { optionText: "Bubble Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is required to insert after a given node in a singly linked list?",
      options: [
        { optionText: "Pointer to the given node", optionTag: "A" },
        { optionText: "Pointer to head", optionTag: "B" },
        { optionText: "Pointer to tail", optionTag: "C" },
        { optionText: "No pointer required", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if you delete a node without updating the previous node’s pointer?",
      options: [
        { optionText: "List gets disconnected", optionTag: "A" },
        { optionText: "List remains the same", optionTag: "B" },
        { optionText: "Previous node deleted", optionTag: "C" },
        { optionText: "Next node becomes NULL", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which pointer is essential to delete the tail node in singly linked list?",
      options: [
        { optionText: "Pointer to the second last node", optionTag: "A" },
        { optionText: "Tail pointer", optionTag: "B" },
        { optionText: "Head pointer", optionTag: "C" },
        { optionText: "Middle pointer", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the space complexity of a singly linked list with n nodes?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is NOT true for a circular linked list?",
      options: [
        { optionText: "Last node points to the head", optionTag: "A" },
        { optionText: "Traversal starts and ends at the same node", optionTag: "B" },
        { optionText: "It cannot be used for queues", optionTag: "C" },
        { optionText: "All nodes are connected in a circle", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which data structure is efficiently implemented using linked lists?",
      options: [
        { optionText: "Stacks", optionTag: "A" },
        { optionText: "Heaps", optionTag: "B" },
        { optionText: "Graphs", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will be the output if head is NULL and you try to access head->next?",
      options: [
        { optionText: "Segmentation fault", optionTag: "A" },
        { optionText: "0", optionTag: "B" },
        { optionText: "NULL", optionTag: "C" },
        { optionText: "Compiler Error", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the advantage of using a dummy head node in linked list?",
      options: [
        { optionText: "Simplifies insertion and deletion logic", optionTag: "A" },
        { optionText: "Reduces memory", optionTag: "B" },
        { optionText: "Acts as array index", optionTag: "C" },
        { optionText: "Stores all values", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;