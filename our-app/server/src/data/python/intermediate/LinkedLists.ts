import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Linked Lists - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "This quiz assesses your understanding of linked list operations in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Linked Lists"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which of the following is true about singly linked lists?",
      options: [
        { optionText: "Each node has only a next pointer", optionTag: "A" },
        { optionText: "Each node has next and previous pointers", optionTag: "B" },
        { optionText: "Nodes are stored in arrays", optionTag: "C" },
        { optionText: "They allow random access", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you find the length of a linked list?",
      options: [
        { optionText: "Traverse the list and count nodes", optionTag: "A" },
        { optionText: "Use len(list)", optionTag: "B" },
        { optionText: "Call list.size()", optionTag: "C" },
        { optionText: "Use list.count()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of inserting a node at the end of a singly linked list (without tail pointer)?",
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
      questionText: "Which operation is most efficient in a singly linked list?",
      options: [
        { optionText: "Inserting at the beginning", optionTag: "A" },
        { optionText: "Inserting at the end", optionTag: "B" },
        { optionText: "Accessing the middle element", optionTag: "C" },
        { optionText: "Sorting the list", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In a linked list node, which attribute usually holds the next node?",
      options: [
        { optionText: "next", optionTag: "A" },
        { optionText: "right", optionTag: "B" },
        { optionText: "child", optionTag: "C" },
        { optionText: "link", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you reverse a singly linked list?",
      options: [
        { optionText: "Iteratively reassign pointers", optionTag: "A" },
        { optionText: "Use list.reverse()", optionTag: "B" },
        { optionText: "Swap node values only", optionTag: "C" },
        { optionText: "You cannot reverse it", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal method is commonly used in linked lists?",
      options: [
        { optionText: "while loop from head to null", optionTag: "A" },
        { optionText: "for loop using index", optionTag: "B" },
        { optionText: "recursion from tail", optionTag: "C" },
        { optionText: "binary search traversal", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the output of traversing an empty linked list?",
      options: [
        { optionText: "Nothing", optionTag: "A" },
        { optionText: "None", optionTag: "B" },
        { optionText: "Zero", optionTag: "C" },
        { optionText: "Exception", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you detect a loop in a linked list?",
      options: [
        { optionText: "Use Floyd’s cycle detection algorithm", optionTag: "A" },
        { optionText: "Traverse twice", optionTag: "B" },
        { optionText: "Use a hash table", optionTag: "C" },
        { optionText: "Both A and C", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which data structure is used to implement adjacency lists in graphs?",
      options: [
        { optionText: "Linked Lists", optionTag: "A" },
        { optionText: "Arrays", optionTag: "B" },
        { optionText: "Stacks", optionTag: "C" },
        { optionText: "Queues", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result of deleting the head node in a linked list?",
      options: [
        { optionText: "The next node becomes the new head", optionTag: "A" },
        { optionText: "The list becomes empty", optionTag: "B" },
        { optionText: "The last node is removed", optionTag: "C" },
        { optionText: "Nothing happens", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following helps in improving time complexity for searching?",
      options: [
        { optionText: "Hashing the values", optionTag: "A" },
        { optionText: "Sorting the list", optionTag: "B" },
        { optionText: "Using index", optionTag: "C" },
        { optionText: "Reversing the list", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the main drawback of linked lists compared to arrays?",
      options: [
        { optionText: "No random access", optionTag: "A" },
        { optionText: "Static memory", optionTag: "B" },
        { optionText: "Slower insertion", optionTag: "C" },
        { optionText: "Uses less memory", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will the tail node’s next point to in a singly linked list?",
      options: [
        { optionText: "null", optionTag: "A" },
        { optionText: "head", optionTag: "B" },
        { optionText: "itself", optionTag: "C" },
        { optionText: "random node", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the worst-case time for searching an element in a singly linked list?",
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
      questionText: "In a doubly linked list, what does each node contain?",
      options: [
        { optionText: "Data, next, and prev", optionTag: "A" },
        { optionText: "Only data", optionTag: "B" },
        { optionText: "Only next", optionTag: "C" },
        { optionText: "Next and index", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if you access a node’s next when it’s null?",
      options: [
        { optionText: "Throws an exception", optionTag: "A" },
        { optionText: "Returns zero", optionTag: "B" },
        { optionText: "Returns empty node", optionTag: "C" },
        { optionText: "Returns last node", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Can linked lists be circular in Python?",
      options: [
        { optionText: "Yes", optionTag: "A" },
        { optionText: "No", optionTag: "B" },
        { optionText: "Only doubly", optionTag: "C" },
        { optionText: "Only singly", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal can be used to print elements in reverse in doubly linked list?",
      options: [
        { optionText: "Start from tail and use prev", optionTag: "A" },
        { optionText: "Start from head", optionTag: "B" },
        { optionText: "Sort first, then print", optionTag: "C" },
        { optionText: "Use stack", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;