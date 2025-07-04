import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "JavaScript Linked Lists - Beginner Quiz",
  quizLevel: "beginner",
  lang: "javascript",
  description: "This quiz tests your understanding of the basics of Linked Lists in JavaScript.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Linked Lists"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is a linked list?",
      options: [
        { optionText: "A sequence of elements connected via pointers", optionTag: "A" },
        { optionText: "A built-in JavaScript array", optionTag: "B" },
        { optionText: "An HTML list", optionTag: "C" },
        { optionText: "A JSON object", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which type of linked list allows traversal in both directions?",
      options: [
        { optionText: "Doubly linked list", optionTag: "A" },
        { optionText: "Singly linked list", optionTag: "B" },
        { optionText: "Circular list", optionTag: "C" },
        { optionText: "Tree", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which property is used to link one node to the next in a singly linked list?",
      options: [
        { optionText: "next", optionTag: "A" },
        { optionText: "link", optionTag: "B" },
        { optionText: "pointer", optionTag: "C" },
        { optionText: "node", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these operations is easiest in a linked list?",
      options: [
        { optionText: "Insertion at beginning", optionTag: "A" },
        { optionText: "Random access", optionTag: "B" },
        { optionText: "Sorting", optionTag: "C" },
        { optionText: "Indexing", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In JavaScript, what is typically used to represent a node?",
      options: [
        { optionText: "An object", optionTag: "A" },
        { optionText: "An array", optionTag: "B" },
        { optionText: "A string", optionTag: "C" },
        { optionText: "A function", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will the last node's `next` property be in a singly linked list?",
      options: [
        { optionText: "null", optionTag: "A" },
        { optionText: "undefined", optionTag: "B" },
        { optionText: "false", optionTag: "C" },
        { optionText: "0", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity for accessing an element in a singly linked list?",
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
      questionText: "Which of these is NOT a common type of linked list?",
      options: [
        { optionText: "Triply linked list", optionTag: "A" },
        { optionText: "Singly linked list", optionTag: "B" },
        { optionText: "Doubly linked list", optionTag: "C" },
        { optionText: "Circular linked list", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the role of the head in a linked list?",
      options: [
        { optionText: "It stores the reference to the first node", optionTag: "A" },
        { optionText: "It stores the last node", optionTag: "B" },
        { optionText: "It counts the nodes", optionTag: "C" },
        { optionText: "It sorts the list", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is a major advantage of linked lists over arrays?",
      options: [
        { optionText: "Dynamic size", optionTag: "A" },
        { optionText: "Random access", optionTag: "B" },
        { optionText: "Faster search", optionTag: "C" },
        { optionText: "Less memory usage", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure is better for frequent insertions/deletions?",
      options: [
        { optionText: "Linked list", optionTag: "A" },
        { optionText: "Array", optionTag: "B" },
        { optionText: "Object", optionTag: "C" },
        { optionText: "Set", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does a circular linked list mean?",
      options: [
        { optionText: "The last node points to the first", optionTag: "A" },
        { optionText: "It forms a circle in memory", optionTag: "B" },
        { optionText: "It sorts itself", optionTag: "C" },
        { optionText: "It has no null nodes", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function is used to add a node at the end of the list?",
      options: [
        { optionText: "append", optionTag: "A" },
        { optionText: "insertHead", optionTag: "B" },
        { optionText: "pop", optionTag: "C" },
        { optionText: "pushStack", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you check if a linked list is empty?",
      options: [
        { optionText: "Check if head is null", optionTag: "A" },
        { optionText: "Check if tail is null", optionTag: "B" },
        { optionText: "Check if size is negative", optionTag: "C" },
        { optionText: "Check if list is undefined", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Can we reverse a singly linked list?",
      options: [
        { optionText: "Yes", optionTag: "A" },
        { optionText: "No", optionTag: "B" },
        { optionText: "Only in circular lists", optionTag: "C" },
        { optionText: "Only in doubly lists", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which pointer is updated during node deletion?",
      options: [
        { optionText: "Previous node's next", optionTag: "A" },
        { optionText: "Deleted node's next", optionTag: "B" },
        { optionText: "Next node's previous", optionTag: "C" },
        { optionText: "Head only", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How can we prevent memory leaks in JS linked lists?",
      options: [
        { optionText: "Set node.next = null on deletion", optionTag: "A" },
        { optionText: "Avoid circular references", optionTag: "B" },
        { optionText: "Use proper destructors", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which is better for linked list implementation in JS?",
      options: [
        { optionText: "Class-based", optionTag: "A" },
        { optionText: "String-based", optionTag: "B" },
        { optionText: "Array-based", optionTag: "C" },
        { optionText: "HTML DOM", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is true for linked list?",
      options: [
        { optionText: "Node stores data and a reference", optionTag: "A" },
        { optionText: "Nodes store only data", optionTag: "B" },
        { optionText: "Nodes store only references", optionTag: "C" },
        { optionText: "Linked lists are stored as strings", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which node starts the linked list traversal?",
      options: [
        { optionText: "Head", optionTag: "A" },
        { optionText: "Tail", optionTag: "B" },
        { optionText: "Middle node", optionTag: "C" },
        { optionText: "Last inserted node", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;