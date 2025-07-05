import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "C++ Linked Lists - Advanced Quiz",
  quizLevel: "advanced",
  lang: "cpp",
  description: "This quiz assesses advanced knowledge of linked list manipulation, memory management, and algorithmic operations in C++.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "LinkedLists"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the time complexity to reverse a singly linked list?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(n^2)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In a doubly linked list, how many pointers are needed per node?",
      options: [
        { optionText: "2", optionTag: "A" },
        { optionText: "1", optionTag: "B" },
        { optionText: "3", optionTag: "C" },
        { optionText: "4", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the output of the below operation?\nInsert at tail repeatedly and print head->next->next->data.",
      options: [
        { optionText: "Third element", optionTag: "A" },
        { optionText: "Head", optionTag: "B" },
        { optionText: "Second element", optionTag: "C" },
        { optionText: "Null", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to detect a loop in a singly linked list?",
      options: [
        { optionText: "Floyd's Cycle Detection", optionTag: "A" },
        { optionText: "Binary Search", optionTag: "B" },
        { optionText: "Two stacks", optionTag: "C" },
        { optionText: "Reverse and check", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation is expensive in singly linked lists?",
      options: [
        { optionText: "Deleting the last node", optionTag: "A" },
        { optionText: "Deleting the first node", optionTag: "B" },
        { optionText: "Inserting at head", optionTag: "C" },
        { optionText: "Searching head", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following sorts a linked list efficiently?",
      options: [
        { optionText: "Merge Sort", optionTag: "A" },
        { optionText: "Quick Sort", optionTag: "B" },
        { optionText: "Bubble Sort", optionTag: "C" },
        { optionText: "Insertion Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does NULL signify in a linked list?",
      options: [
        { optionText: "End of the list", optionTag: "A" },
        { optionText: "Empty node", optionTag: "B" },
        { optionText: "Next pointer reset", optionTag: "C" },
        { optionText: "Garbage node", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is a valid structure for a doubly linked list node?",
      options: [
        { optionText: "prev, data, next", optionTag: "A" },
        { optionText: "data, next", optionTag: "B" },
        { optionText: "left, data, right", optionTag: "C" },
        { optionText: "head, tail", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Why are dummy nodes used in linked lists?",
      options: [
        { optionText: "Simplify edge case handling", optionTag: "A" },
        { optionText: "Improve time complexity", optionTag: "B" },
        { optionText: "Avoid nulls", optionTag: "C" },
        { optionText: "Act as sentinels", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation is easiest on a circular linked list?",
      options: [
        { optionText: "Insertion at end", optionTag: "A" },
        { optionText: "Deletion from middle", optionTag: "B" },
        { optionText: "Reversal", optionTag: "C" },
        { optionText: "Merging two lists", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to remove duplicates from a sorted linked list?",
      options: [
        { optionText: "Traverse and skip equal nexts", optionTag: "A" },
        { optionText: "Sort first", optionTag: "B" },
        { optionText: "Use hash table", optionTag: "C" },
        { optionText: "Reverse and filter", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What's the space complexity to reverse a singly linked list?",
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
      questionText: "Which is true about tail pointer in singly linked list?",
      options: [
        { optionText: "Points to last node", optionTag: "A" },
        { optionText: "Points to null always", optionTag: "B" },
        { optionText: "Unused", optionTag: "C" },
        { optionText: "Points to head", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In C++, which keyword is used to dynamically allocate a new node?",
      options: [
        { optionText: "new", optionTag: "A" },
        { optionText: "malloc", optionTag: "B" },
        { optionText: "alloc", optionTag: "C" },
        { optionText: "create", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if you forget to free memory in a linked list?",
      options: [
        { optionText: "Memory leak", optionTag: "A" },
        { optionText: "Segmentation fault", optionTag: "B" },
        { optionText: "Data loss", optionTag: "C" },
        { optionText: "No issue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal is not possible with singly linked lists?",
      options: [
        { optionText: "Backward", optionTag: "A" },
        { optionText: "Forward", optionTag: "B" },
        { optionText: "Both directions", optionTag: "C" },
        { optionText: "Circular", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you insert a node after a given position?",
      options: [
        { optionText: "Traverse and update next pointers", optionTag: "A" },
        { optionText: "Directly assign pointers", optionTag: "B" },
        { optionText: "Use array index", optionTag: "C" },
        { optionText: "Use recursion only", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to merge two sorted linked lists?",
      options: [
        { optionText: "Compare heads and merge", optionTag: "A" },
        { optionText: "Sort then merge", optionTag: "B" },
        { optionText: "Reverse then merge", optionTag: "C" },
        { optionText: "Copy both then combine", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "When should you prefer a linked list over an array?",
      options: [
        { optionText: "When frequent insertions and deletions are needed", optionTag: "A" },
        { optionText: "When random access is required", optionTag: "B" },
        { optionText: "When memory is not dynamic", optionTag: "C" },
        { optionText: "Never", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;