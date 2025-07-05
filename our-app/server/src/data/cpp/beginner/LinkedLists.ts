import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "C++ Linked Lists - Beginner Quiz",
  quizLevel: "beginner",
  lang: "cpp",
  description: "This quiz tests your fundamental understanding of linked lists in C++.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "LinkedLists"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is a Linked List?",
      options: [
        { optionText: "A linear collection of elements stored in memory locations", optionTag: "A" },
        { optionText: "A structure where each element points to the next", optionTag: "B" },
        { optionText: "A type of array", optionTag: "C" },
        { optionText: "A sorting technique", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What does a node in a singly linked list contain?",
      options: [
        { optionText: "Data and a pointer to the next node", optionTag: "A" },
        { optionText: "Only data", optionTag: "B" },
        { optionText: "Data and two pointers", optionTag: "C" },
        { optionText: "A pointer to the previous node", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is true for singly linked list?",
      options: [
        { optionText: "Each node points to the next node", optionTag: "A" },
        { optionText: "Each node points to the previous node", optionTag: "B" },
        { optionText: "It's a circular structure", optionTag: "C" },
        { optionText: "It can't be used dynamically", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which keyword is used to allocate memory dynamically for a node?",
      options: [
        { optionText: "new", optionTag: "A" },
        { optionText: "malloc", optionTag: "B" },
        { optionText: "create", optionTag: "C" },
        { optionText: "make", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you traverse a linked list?",
      options: [
        { optionText: "By using a loop and a pointer", optionTag: "A" },
        { optionText: "Using array index", optionTag: "B" },
        { optionText: "Random access", optionTag: "C" },
        { optionText: "By sorting the list", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is the correct way to define a node?",
      options: [
        { optionText: "struct Node { int data; Node* next; };", optionTag: "A" },
        { optionText: "struct Node { data int; pointer next; };", optionTag: "B" },
        { optionText: "Node struct { int value; Node next; };", optionTag: "C" },
        { optionText: "struct { int data; };", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the head of a linked list?",
      options: [
        { optionText: "Pointer to the first node", optionTag: "A" },
        { optionText: "Pointer to the last node", optionTag: "B" },
        { optionText: "A dummy node", optionTag: "C" },
        { optionText: "An unused memory block", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity to insert at the beginning of a singly linked list?",
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
      questionText: "Which operation is most difficult in a singly linked list?",
      options: [
        { optionText: "Deleting the last node", optionTag: "A" },
        { optionText: "Inserting at head", optionTag: "B" },
        { optionText: "Traversing", optionTag: "C" },
        { optionText: "Allocating memory", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will the next pointer of the last node contain?",
      options: [
        { optionText: "NULL", optionTag: "A" },
        { optionText: "Head", optionTag: "B" },
        { optionText: "Address of second node", optionTag: "C" },
        { optionText: "Address of previous node", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In a circular linked list, the last node points to?",
      options: [
        { optionText: "First node", optionTag: "A" },
        { optionText: "NULL", optionTag: "B" },
        { optionText: "Middle node", optionTag: "C" },
        { optionText: "None of the above", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which type of linked list has both previous and next pointers?",
      options: [
        { optionText: "Doubly linked list", optionTag: "A" },
        { optionText: "Singly linked list", optionTag: "B" },
        { optionText: "Circular list", optionTag: "C" },
        { optionText: "Queue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the key advantage of linked list over arrays?",
      options: [
        { optionText: "Dynamic size", optionTag: "A" },
        { optionText: "Indexed access", optionTag: "B" },
        { optionText: "Less memory usage", optionTag: "C" },
        { optionText: "Built-in sorting", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is NOT a type of linked list?",
      options: [
        { optionText: "Single", optionTag: "A" },
        { optionText: "Double", optionTag: "B" },
        { optionText: "Quad", optionTag: "C" },
        { optionText: "Circular", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which pointer type is used in linked list?",
      options: [
        { optionText: "Structure pointer", optionTag: "A" },
        { optionText: "Void pointer", optionTag: "B" },
        { optionText: "Int pointer", optionTag: "C" },
        { optionText: "Float pointer", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation is not possible in singly linked list without head?",
      options: [
        { optionText: "Traversal", optionTag: "A" },
        { optionText: "Insertion at end", optionTag: "B" },
        { optionText: "Search", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the data type of next in a node?",
      options: [
        { optionText: "Node*", optionTag: "A" },
        { optionText: "int", optionTag: "B" },
        { optionText: "void*", optionTag: "C" },
        { optionText: "pointer", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will happen if a node is deleted but not freed?",
      options: [
        { optionText: "Memory leak", optionTag: "A" },
        { optionText: "Segmentation fault", optionTag: "B" },
        { optionText: "Nothing", optionTag: "C" },
        { optionText: "Array out of bounds", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is NOT true for a linked list?",
      options: [
        { optionText: "Uses dynamic memory", optionTag: "A" },
        { optionText: "Fixed size", optionTag: "B" },
        { optionText: "Can grow and shrink", optionTag: "C" },
        { optionText: "Needs pointers", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;