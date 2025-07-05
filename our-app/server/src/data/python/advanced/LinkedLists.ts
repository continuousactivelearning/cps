import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Linked Lists - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "This quiz evaluates your advanced understanding of Linked Lists in Python, including circular, doubly linked lists, and algorithmic manipulations.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Linked Lists"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the main advantage of a doubly linked list over a singly linked list?",
      options: [
        { optionText: "Ability to traverse in both directions", optionTag: "A" },
        { optionText: "Less memory usage", optionTag: "B" },
        { optionText: "Faster insertions", optionTag: "C" },
        { optionText: "None", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In a circular linked list, the last node points to:",
      options: [
        { optionText: "Head node", optionTag: "A" },
        { optionText: "Previous node", optionTag: "B" },
        { optionText: "Null", optionTag: "C" },
        { optionText: "Middle node", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Time complexity to delete the middle node of a singly linked list is:",
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
      questionText: "Which of the following algorithms is best to detect a loop in a linked list?",
      options: [
        { optionText: "Floyd’s Cycle Detection", optionTag: "A" },
        { optionText: "DFS", optionTag: "B" },
        { optionText: "BFS", optionTag: "C" },
        { optionText: "Kadane’s", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation is easiest in linked list compared to arrays?",
      options: [
        { optionText: "Insertion and Deletion", optionTag: "A" },
        { optionText: "Access by index", optionTag: "B" },
        { optionText: "Searching", optionTag: "C" },
        { optionText: "Sorting", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which pointer is not used in a singly linked list?",
      options: [
        { optionText: "Previous", optionTag: "A" },
        { optionText: "Next", optionTag: "B" },
        { optionText: "Head", optionTag: "C" },
        { optionText: "Current", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens when you reverse a linked list twice?",
      options: [
        { optionText: "You get the original list", optionTag: "A" },
        { optionText: "List is deleted", optionTag: "B" },
        { optionText: "List becomes circular", optionTag: "C" },
        { optionText: "An error occurs", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is used to implement undo functionality?",
      options: [
        { optionText: "Doubly Linked List", optionTag: "A" },
        { optionText: "Array", optionTag: "B" },
        { optionText: "Queue", optionTag: "C" },
        { optionText: "Stack", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How many null pointers exist in a non-circular doubly linked list with 10 nodes?",
      options: [
        { optionText: "2", optionTag: "A" },
        { optionText: "1", optionTag: "B" },
        { optionText: "0", optionTag: "C" },
        { optionText: "10", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is NOT true for linked lists?",
      options: [
        { optionText: "They allow dynamic memory usage", optionTag: "A" },
        { optionText: "They require contiguous memory", optionTag: "B" },
        { optionText: "They are good for frequent insertions", optionTag: "C" },
        { optionText: "Accessing elements is O(n)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the time complexity to search an element in a circular linked list?",
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
      questionText: "Which of these is needed to delete a node from a singly linked list?",
      options: [
        { optionText: "Pointer to previous node", optionTag: "A" },
        { optionText: "Pointer to next node", optionTag: "B" },
        { optionText: "Head only", optionTag: "C" },
        { optionText: "Null", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the key difference between singly and circular singly linked list?",
      options: [
        { optionText: "Last node points to first in circular list", optionTag: "A" },
        { optionText: "No head in circular list", optionTag: "B" },
        { optionText: "More memory in singly list", optionTag: "C" },
        { optionText: "Circular list uses array", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In a linked list, the node structure typically contains:",
      options: [
        { optionText: "Data and pointer", optionTag: "A" },
        { optionText: "Only pointer", optionTag: "B" },
        { optionText: "Only data", optionTag: "C" },
        { optionText: "Data and array", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "To find the nth node from the end in one pass, which algorithm is best?",
      options: [
        { optionText: "Two-pointer method", optionTag: "A" },
        { optionText: "DFS", optionTag: "B" },
        { optionText: "Stack", optionTag: "C" },
        { optionText: "BFS", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation is fastest in a doubly linked list?",
      options: [
        { optionText: "Backward traversal", optionTag: "A" },
        { optionText: "Random access", optionTag: "B" },
        { optionText: "Binary search", optionTag: "C" },
        { optionText: "Recursion", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In which scenario is a circular linked list preferred?",
      options: [
        { optionText: "Continuous traversal", optionTag: "A" },
        { optionText: "Random search", optionTag: "B" },
        { optionText: "Binary trees", optionTag: "C" },
        { optionText: "Hash tables", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Can a singly linked list be reversed iteratively?",
      options: [
        { optionText: "Yes", optionTag: "A" },
        { optionText: "No", optionTag: "B" },
        { optionText: "Only if sorted", optionTag: "C" },
        { optionText: "Only with recursion", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to detect a cycle in a linked list efficiently?",
      options: [
        { optionText: "Floyd’s Tortoise and Hare", optionTag: "A" },
        { optionText: "Use a stack", optionTag: "B" },
        { optionText: "Bubble sort", optionTag: "C" },
        { optionText: "DFS", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;