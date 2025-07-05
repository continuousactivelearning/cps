import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "JavaScript Linked Lists - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "javascript",
  description: "This quiz tests your understanding of linked list operations and concepts in JavaScript.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Linked Lists"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the time complexity for inserting an element at the beginning of a singly linked list?",
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
      questionText: "Which pointer in a doubly linked list points to the next node?",
      options: [
        { optionText: "next", optionTag: "A" },
        { optionText: "prev", optionTag: "B" },
        { optionText: "forward", optionTag: "C" },
        { optionText: "right", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which condition signifies the end of a singly linked list?",
      options: [
        { optionText: "node.next === null", optionTag: "A" },
        { optionText: "node === null", optionTag: "B" },
        { optionText: "node.data === null", optionTag: "C" },
        { optionText: "node === undefined", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does a circular linked list’s last node point to?",
      options: [
        { optionText: "null", optionTag: "A" },
        { optionText: "itself", optionTag: "B" },
        { optionText: "head", optionTag: "C" },
        { optionText: "tail", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which method is best for searching a value in a singly linked list?",
      options: [
        { optionText: "Traverse each node", optionTag: "A" },
        { optionText: "Binary search", optionTag: "B" },
        { optionText: "Hash lookup", optionTag: "C" },
        { optionText: "Jump search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What’s the time complexity for deleting the last node in a singly linked list?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How do you detect a cycle in a linked list?",
      options: [
        { optionText: "Floyd’s Cycle Detection", optionTag: "A" },
        { optionText: "DFS", optionTag: "B" },
        { optionText: "BFS", optionTag: "C" },
        { optionText: "Linear Search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the head of a linked list?",
      options: [
        { optionText: "Last node", optionTag: "A" },
        { optionText: "First node", optionTag: "B" },
        { optionText: "Middle node", optionTag: "C" },
        { optionText: "Null node", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What happens when we reverse a linked list?",
      options: [
        { optionText: "The head becomes the last node", optionTag: "A" },
        { optionText: "The tail becomes the head", optionTag: "B" },
        { optionText: "All pointers reverse", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which of the following is true about singly and doubly linked lists?",
      options: [
        { optionText: "Doubly linked lists use more memory", optionTag: "A" },
        { optionText: "Singly linked lists are bidirectional", optionTag: "B" },
        { optionText: "Both have same memory usage", optionTag: "C" },
        { optionText: "Singly lists are faster to traverse backward", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    
    // 10 more
    {
      questionText: "In JavaScript, how would you define a Node for a linked list?",
      options: [
        { optionText: "class Node { constructor(data) { this.data = data; this.next = null; } }", optionTag: "A" },
        { optionText: "let Node = () => {}", optionTag: "B" },
        { optionText: "class Node { constructor() { this.value = data } }", optionTag: "C" },
        { optionText: "class Node { constructor(data) { this.node = data } }", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal is not possible in singly linked list?",
      options: [
        { optionText: "Forward", optionTag: "A" },
        { optionText: "Backward", optionTag: "B" },
        { optionText: "All", optionTag: "C" },
        { optionText: "None", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How many pointers does each node in a doubly linked list have?",
      options: [
        { optionText: "1", optionTag: "A" },
        { optionText: "2", optionTag: "B" },
        { optionText: "3", optionTag: "C" },
        { optionText: "None", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the best case for finding an element in a linked list?",
      options: [
        { optionText: "Element is at the end", optionTag: "A" },
        { optionText: "Element is at the middle", optionTag: "B" },
        { optionText: "Element is at the start", optionTag: "C" },
        { optionText: "Element is not found", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What’s the major advantage of linked lists over arrays?",
      options: [
        { optionText: "Efficient memory usage", optionTag: "A" },
        { optionText: "Fast random access", optionTag: "B" },
        { optionText: "No need of pointer", optionTag: "C" },
        { optionText: "Easy sorting", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you append a node at the end of a singly linked list?",
      options: [
        { optionText: "Traverse to end and set lastNode.next = newNode", optionTag: "A" },
        { optionText: "Insert at index 0", optionTag: "B" },
        { optionText: "lastNode = newNode", optionTag: "C" },
        { optionText: "head = newNode", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you delete a node in a singly linked list given access to that node only?",
      options: [
        { optionText: "Overwrite current data and next pointer with next node", optionTag: "A" },
        { optionText: "Set current to null", optionTag: "B" },
        { optionText: "Throw error", optionTag: "C" },
        { optionText: "Traverse to previous", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm is best for detecting loop in a linked list?",
      options: [
        { optionText: "Floyd’s Cycle Detection", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Two-pointer with same speed", optionTag: "C" },
        { optionText: "Recursion", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What’s the time complexity of reversing a singly linked list?",
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
      questionText: "Which of these uses linked lists internally in JavaScript?",
      options: [
        { optionText: "None", optionTag: "A" },
        { optionText: "Queue implementation", optionTag: "B" },
        { optionText: "Stack implementation", optionTag: "C" },
        { optionText: "Custom data structures by developers", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    }
  ]
};

export default quizData;