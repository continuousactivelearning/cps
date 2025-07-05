import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "JavaScript Linked Lists - Advanced Quiz",
  quizLevel: "advanced",
  lang: "javascript",
  description: "This quiz tests your in-depth understanding of Linked Lists, including custom implementations, traversal, and algorithmic applications in JavaScript.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Linked Lists"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which of the following is true about singly linked lists?",
      options: [
        { optionText: "Each node has a data field and a next pointer", optionTag: "A" },
        { optionText: "Each node has a previous pointer", optionTag: "B" },
        { optionText: "It allows backward traversal", optionTag: "C" },
        { optionText: "All nodes are stored in contiguous memory", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you reverse a singly linked list in JavaScript?",
      options: [
        { optionText: "Using iterative loop with 3 pointers", optionTag: "A" },
        { optionText: "Using array reverse", optionTag: "B" },
        { optionText: "Using bubble sort", optionTag: "C" },
        { optionText: "Using splice()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity to search a value in a singly linked list?",
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
      questionText: "In a doubly linked list, each node contains:",
      options: [
        { optionText: "data, next, and prev", optionTag: "A" },
        { optionText: "only data", optionTag: "B" },
        { optionText: "data and next", optionTag: "C" },
        { optionText: "data, previous, next, and tail", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the best case time complexity of inserting a node at the beginning of a linked list?",
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
      questionText: "Which method is used to detect a cycle in a linked list?",
      options: [
        { optionText: "Floyd's Tortoise and Hare", optionTag: "A" },
        { optionText: "Binary search", optionTag: "B" },
        { optionText: "DFS", optionTag: "C" },
        { optionText: "Merge sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if you delete a node without head reference?",
      options: [
        { optionText: "You can’t delete it directly", optionTag: "A" },
        { optionText: "It’s removed from memory", optionTag: "B" },
        { optionText: "It becomes undefined", optionTag: "C" },
        { optionText: "Throws reference error", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How many pointers are changed when inserting into a doubly linked list?",
      options: [
        { optionText: "Four", optionTag: "A" },
        { optionText: "One", optionTag: "B" },
        { optionText: "Two", optionTag: "C" },
        { optionText: "Three", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is a sentinel node?",
      options: [
        { optionText: "A dummy node at the start or end", optionTag: "A" },
        { optionText: "A deleted node", optionTag: "B" },
        { optionText: "Last real node", optionTag: "C" },
        { optionText: "Temporary node for insertion", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the space complexity of a linked list with n nodes?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },

    // Additional 10 Questions
    {
      questionText: "What will head be after inserting a node at the beginning?",
      options: [
        { optionText: "The new node", optionTag: "A" },
        { optionText: "The old first node", optionTag: "B" },
        { optionText: "Undefined", optionTag: "C" },
        { optionText: "Tail node", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How can you traverse a linked list?",
      options: [
        { optionText: "Using a loop and next pointer", optionTag: "A" },
        { optionText: "Using array indexing", optionTag: "B" },
        { optionText: "Using JSON.parse", optionTag: "C" },
        { optionText: "Using recursion only", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which linked list allows O(1) deletion if reference to the node is given?",
      options: [
        { optionText: "Singly linked list", optionTag: "A" },
        { optionText: "Array", optionTag: "B" },
        { optionText: "Circular list", optionTag: "C" },
        { optionText: "Doubly linked list", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How many null pointers are there in a circular linked list with 5 elements?",
      options: [
        { optionText: "0", optionTag: "A" },
        { optionText: "1", optionTag: "B" },
        { optionText: "2", optionTag: "C" },
        { optionText: "5", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In which situation are linked lists preferred over arrays?",
      options: [
        { optionText: "Frequent insertions/deletions", optionTag: "A" },
        { optionText: "Random access", optionTag: "B" },
        { optionText: "Static memory usage", optionTag: "C" },
        { optionText: "Sorting large arrays", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which type of list has the tail node point to the head?",
      options: [
        { optionText: "Circular linked list", optionTag: "A" },
        { optionText: "Singly linked list", optionTag: "B" },
        { optionText: "Doubly linked list", optionTag: "C" },
        { optionText: "Array list", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How many links does a node in a doubly linked list have?",
      options: [
        { optionText: "Two", optionTag: "A" },
        { optionText: "Three", optionTag: "B" },
        { optionText: "One", optionTag: "C" },
        { optionText: "None", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal is not possible in singly linked list?",
      options: [
        { optionText: "Backward", optionTag: "A" },
        { optionText: "Forward", optionTag: "B" },
        { optionText: "None", optionTag: "C" },
        { optionText: "Circular", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Can we represent a linked list using objects in JavaScript?",
      options: [
        { optionText: "Yes, with next and data fields", optionTag: "A" },
        { optionText: "No, JS has no pointers", optionTag: "B" },
        { optionText: "Only with classes", optionTag: "C" },
        { optionText: "Only using arrays", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is NOT an advantage of linked lists?",
      options: [
        { optionText: "Fast random access", optionTag: "A" },
        { optionText: "Efficient insert/delete", optionTag: "B" },
        { optionText: "Dynamic size", optionTag: "C" },
        { optionText: "No memory reallocation", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;