import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python - B-Trees - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Quiz to assess understanding of B-Trees in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "BTrees",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is a B-Tree primarily used for?",
      options: [
        { optionText: "Graph traversal", optionTag: "C" },
        { optionText: "Efficient disk-based search", optionTag: "A" },
        { optionText: "Image processing", optionTag: "D" },
        { optionText: "Sorting linked lists", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of the following is true for B-Trees?",
      options: [
        { optionText: "They store only integers", optionTag: "D" },
        { optionText: "They are self-balancing", optionTag: "B" },
        { optionText: "They don’t support deletion", optionTag: "C" },
        { optionText: "They use a heap structure", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the minimum number of children a non-root internal node can have in a B-Tree of order m?",
      options: [
        { optionText: "1", optionTag: "D" },
        { optionText: "2", optionTag: "A" },
        { optionText: "⌈m/2⌉", optionTag: "C" },
        { optionText: "m", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which operation is efficient in B-Trees?",
      options: [
        { optionText: "Binary search only", optionTag: "B" },
        { optionText: "Heap insert", optionTag: "D" },
        { optionText: "Disk read/write operations", optionTag: "A" },
        { optionText: "String sorting", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What happens when a B-Tree node is full?",
      options: [
        { optionText: "It is deleted", optionTag: "C" },
        { optionText: "It is split", optionTag: "D" },
        { optionText: "It is merged with root", optionTag: "A" },
        { optionText: "Overflow is ignored", optionTag: "B" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which of the following does a B-Tree guarantee?",
      options: [
        { optionText: "All keys are at the same level", optionTag: "B" },
        { optionText: "Leaves may vary in depth", optionTag: "C" },
        { optionText: "Unbalanced tree", optionTag: "A" },
        { optionText: "All values are duplicated", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Why are B-Trees preferred in databases?",
      options: [
        { optionText: "They store data in trees only", optionTag: "C" },
        { optionText: "They minimize disk access", optionTag: "A" },
        { optionText: "They do not support updates", optionTag: "D" },
        { optionText: "They use recursion", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "A B-Tree of order 5 can have at most how many keys in a node?",
      options: [
        { optionText: "4", optionTag: "C" },
        { optionText: "5", optionTag: "B" },
        { optionText: "6", optionTag: "D" },
        { optionText: "3", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What does order of a B-Tree define?",
      options: [
        { optionText: "Tree height", optionTag: "D" },
        { optionText: "Maximum number of children", optionTag: "A" },
        { optionText: "Total number of nodes", optionTag: "B" },
        { optionText: "Depth of leftmost path", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which level in a B-Tree may have fewer children?",
      options: [
        { optionText: "Leaf nodes", optionTag: "A" },
        { optionText: "Internal nodes", optionTag: "D" },
        { optionText: "Root node", optionTag: "B" },
        { optionText: "All levels have same children", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },

    // Next 10 questions
    {
      questionText: "Which of the following best describes a leaf node in B-Trees?",
      options: [
        { optionText: "Has no keys", optionTag: "C" },
        { optionText: "Contains pointers only", optionTag: "A" },
        { optionText: "Has no children", optionTag: "B" },
        { optionText: "Always has maximum keys", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "B-Trees are an extension of which data structure?",
      options: [
        { optionText: "AVL Tree", optionTag: "D" },
        { optionText: "Binary Search Tree", optionTag: "A" },
        { optionText: "Stack", optionTag: "C" },
        { optionText: "Trie", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What triggers a node merge in a B-Tree?",
      options: [
        { optionText: "Node has max children", optionTag: "C" },
        { optionText: "Underflow after deletion", optionTag: "B" },
        { optionText: "Overflow on insertion", optionTag: "D" },
        { optionText: "All keys are null", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "B-Trees are optimized for which of the following?",
      options: [
        { optionText: "RAM access", optionTag: "B" },
        { optionText: "Disk storage", optionTag: "C" },
        { optionText: "Pointer traversal", optionTag: "A" },
        { optionText: "Bitwise operations", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "When is a B-Tree of order m full?",
      options: [
        { optionText: "When each node has m children", optionTag: "A" },
        { optionText: "When all keys are zero", optionTag: "D" },
        { optionText: "When root has m keys", optionTag: "C" },
        { optionText: "When each node has m-1 keys", optionTag: "B" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What happens after splitting a root node in a B-Tree?",
      options: [
        { optionText: "Height decreases", optionTag: "C" },
        { optionText: "New root is created", optionTag: "A" },
        { optionText: "Leaf node is updated", optionTag: "B" },
        { optionText: "All children are deleted", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which type of tree is best for indexing on disk?",
      options: [
        { optionText: "Binary Search Tree", optionTag: "D" },
        { optionText: "B-Tree", optionTag: "B" },
        { optionText: "Trie", optionTag: "A" },
        { optionText: "AVL Tree", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which operation is complex in a B-Tree?",
      options: [
        { optionText: "Deletion", optionTag: "A" },
        { optionText: "Insertion", optionTag: "C" },
        { optionText: "Traversal", optionTag: "D" },
        { optionText: "Sorting", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which traversal of B-Tree gives sorted output?",
      options: [
        { optionText: "In-order", optionTag: "B" },
        { optionText: "Post-order", optionTag: "D" },
        { optionText: "Pre-order", optionTag: "C" },
        { optionText: "Level-order", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the time complexity for search in B-Tree?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" },
        { optionText: "O(n log n)", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
  ],
};

export default quizData;