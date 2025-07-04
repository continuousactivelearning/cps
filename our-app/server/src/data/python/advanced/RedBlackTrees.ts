import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Red-Black Trees - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Assess your deep understanding of Red-Black Tree properties, insertion, and balancing operations.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Red-Black Trees",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which of the following is NOT a property of Red-Black Tree?",
      options: [
        { optionText: "Each node is either red or black", optionTag: "A" },
        { optionText: "The root is always red", optionTag: "B" },
        { optionText: "Every leaf (NIL) is black", optionTag: "C" },
        { optionText: "Red nodes cannot have red children", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the maximum height of a Red-Black Tree with n nodes?",
      options: [
        { optionText: "2 * log₂(n+1)", optionTag: "A" },
        { optionText: "log₂(n)", optionTag: "B" },
        { optionText: "n", optionTag: "C" },
        { optionText: "√n", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the color of the root in a Red-Black Tree?",
      options: [
        { optionText: "Black", optionTag: "A" },
        { optionText: "Red", optionTag: "B" },
        { optionText: "Any", optionTag: "C" },
        { optionText: "Depends on balance", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of these operations can cause violations in Red-Black Tree?",
      options: [
        { optionText: "Insertions", optionTag: "A" },
        { optionText: "Deletions", optionTag: "B" },
        { optionText: "Both insertions and deletions", optionTag: "C" },
        { optionText: "Traversal", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What rotation is used when both the parent and uncle of the node are red?",
      options: [
        { optionText: "No rotation, recoloring is done", optionTag: "A" },
        { optionText: "Left Rotation", optionTag: "B" },
        { optionText: "Right Rotation", optionTag: "C" },
        { optionText: "Double Rotation", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the time complexity of search in Red-Black Tree?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which node is black in a Red-Black Tree?",
      options: [
        { optionText: "All leaves (NIL)", optionTag: "A" },
        { optionText: "All internal nodes", optionTag: "B" },
        { optionText: "All root and children", optionTag: "C" },
        { optionText: "Only left child", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "How many children can a node in Red-Black Tree have?",
      options: [
        { optionText: "2", optionTag: "A" },
        { optionText: "1", optionTag: "B" },
        { optionText: "3", optionTag: "C" },
        { optionText: "Unlimited", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What happens during insertion if parent is red and uncle is black?",
      options: [
        { optionText: "Rotation is performed", optionTag: "A" },
        { optionText: "Uncle is recolored", optionTag: "B" },
        { optionText: "Grandparent is deleted", optionTag: "C" },
        { optionText: "Tree is left unchanged", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Red-Black Tree is a type of:",
      options: [
        { optionText: "Self-balancing BST", optionTag: "A" },
        { optionText: "Heap", optionTag: "B" },
        { optionText: "Hash Table", optionTag: "C" },
        { optionText: "Queue", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which case requires Left Rotation in Red-Black Tree insertion?",
      options: [
        { optionText: "Right child of right child", optionTag: "A" },
        { optionText: "Left child of right child", optionTag: "B" },
        { optionText: "Right child of left child", optionTag: "C" },
        { optionText: "Left child of left child", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "How many red nodes can exist consecutively in a Red-Black Tree?",
      options: [
        { optionText: "0", optionTag: "A" },
        { optionText: "1", optionTag: "B" },
        { optionText: "2", optionTag: "C" },
        { optionText: "Unlimited", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Red-Black Tree provides better performance than AVL Tree in which operation?",
      options: [
        { optionText: "Insertions and Deletions", optionTag: "A" },
        { optionText: "Search", optionTag: "B" },
        { optionText: "Traversal", optionTag: "C" },
        { optionText: "None", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which rule maintains uniform black-height across Red-Black Tree?",
      options: [
        { optionText: "Every path from root to leaves has same number of black nodes", optionTag: "A" },
        { optionText: "Root must be black", optionTag: "B" },
        { optionText: "No red node has red children", optionTag: "C" },
        { optionText: "Leaves are red", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "How are Red-Black Trees used in Java?",
      options: [
        { optionText: "TreeMap and TreeSet", optionTag: "A" },
        { optionText: "HashMap", optionTag: "B" },
        { optionText: "HashSet", optionTag: "C" },
        { optionText: "ArrayList", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "A Red-Black Tree is always:",
      options: [
        { optionText: "Balanced", optionTag: "A" },
        { optionText: "Unbalanced", optionTag: "B" },
        { optionText: "Degenerate", optionTag: "C" },
        { optionText: "B-Tree", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which operation may require re-coloring in Red-Black Tree?",
      options: [
        { optionText: "Insertion", optionTag: "A" },
        { optionText: "Deletion", optionTag: "B" },
        { optionText: "Both A and B", optionTag: "C" },
        { optionText: "Search", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "How many types of rotations are there in Red-Black Tree?",
      options: [
        { optionText: "2", optionTag: "A" },
        { optionText: "3", optionTag: "B" },
        { optionText: "4", optionTag: "C" },
        { optionText: "1", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Red-Black Tree is a variation of which tree?",
      options: [
        { optionText: "Binary Search Tree", optionTag: "A" },
        { optionText: "B-Tree", optionTag: "B" },
        { optionText: "Segment Tree", optionTag: "C" },
        { optionText: "Trie", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
  ],
};

export default quizData;