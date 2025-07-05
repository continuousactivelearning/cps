import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Trees - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Test your in-depth understanding of tree data structures in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Trees",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the maximum number of nodes in a binary tree of height h?",
      options: [
        { optionText: "2^h", optionTag: "A" },
        { optionText: "2^(h+1) - 1", optionTag: "B" },
        { optionText: "2h", optionTag: "C" },
        { optionText: "h^2", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What traversal should be used to get a sorted list from a BST?",
      options: [
        { optionText: "Preorder", optionTag: "A" },
        { optionText: "Inorder", optionTag: "B" },
        { optionText: "Postorder", optionTag: "C" },
        { optionText: "Level-order", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of these is NOT a tree traversal method?",
      options: [
        { optionText: "Inorder", optionTag: "A" },
        { optionText: "Preorder", optionTag: "B" },
        { optionText: "Outorder", optionTag: "C" },
        { optionText: "Postorder", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the height of a tree with only one node?",
      options: [
        { optionText: "0", optionTag: "A" },
        { optionText: "1", optionTag: "B" },
        { optionText: "-1", optionTag: "C" },
        { optionText: "Undefined", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which traversal uses a queue?",
      options: [
        { optionText: "Preorder", optionTag: "A" },
        { optionText: "Postorder", optionTag: "B" },
        { optionText: "Inorder", optionTag: "C" },
        { optionText: "Level-order", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "In a full binary tree, every node has either:",
      options: [
        { optionText: "Zero or one child", optionTag: "A" },
        { optionText: "Zero or two children", optionTag: "B" },
        { optionText: "One or two children", optionTag: "C" },
        { optionText: "Exactly one child", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which data structure is used for level order traversal?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Array", optionTag: "C" },
        { optionText: "Heap", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is a complete binary tree?",
      options: [
        { optionText: "Every level completely filled", optionTag: "A" },
        { optionText: "All levels filled except possibly the last, and nodes are left aligned", optionTag: "B" },
        { optionText: "All nodes have 2 children", optionTag: "C" },
        { optionText: "Each level has the same number of nodes", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "How many edges are there in a tree with n nodes?",
      options: [
        { optionText: "n", optionTag: "A" },
        { optionText: "n - 1", optionTag: "B" },
        { optionText: "n + 1", optionTag: "C" },
        { optionText: "2n", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which traversal method is best suited for evaluating expression trees?",
      options: [
        { optionText: "Preorder", optionTag: "A" },
        { optionText: "Postorder", optionTag: "B" },
        { optionText: "Inorder", optionTag: "C" },
        { optionText: "Level-order", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which Python module is commonly used to implement tree data structures?",
      options: [
        { optionText: "collections", optionTag: "A" },
        { optionText: "heapq", optionTag: "B" },
        { optionText: "binarytree", optionTag: "C" },
        { optionText: "array", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the maximum height of a binary tree with 15 nodes?",
      options: [
        { optionText: "15", optionTag: "A" },
        { optionText: "4", optionTag: "B" },
        { optionText: "3", optionTag: "C" },
        { optionText: "7", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which function returns the number of children for a node in a general tree?",
      options: [
        { optionText: "len(node.children)", optionTag: "A" },
        { optionText: "node.count()", optionTag: "B" },
        { optionText: "node.size()", optionTag: "C" },
        { optionText: "len(node)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "A tree node with no children is called:",
      options: [
        { optionText: "Root", optionTag: "A" },
        { optionText: "Leaf", optionTag: "B" },
        { optionText: "Branch", optionTag: "C" },
        { optionText: "Internal", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which traversal is used for copying a binary tree?",
      options: [
        { optionText: "Postorder", optionTag: "A" },
        { optionText: "Inorder", optionTag: "B" },
        { optionText: "Preorder", optionTag: "C" },
        { optionText: "Level-order", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which tree property ensures minimal height for balanced BST?",
      options: [
        { optionText: "Left subtree ≤ right", optionTag: "A" },
        { optionText: "Height difference ≤ 1", optionTag: "B" },
        { optionText: "Nodes ≥ leaves", optionTag: "C" },
        { optionText: "Root has no parent", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which traversal uses recursion and stack interchangeably?",
      options: [
        { optionText: "Inorder", optionTag: "A" },
        { optionText: "Level-order", optionTag: "B" },
        { optionText: "Preorder", optionTag: "C" },
        { optionText: "All except level-order", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which algorithm finds the height of a binary tree?",
      options: [
        { optionText: "DFS", optionTag: "A" },
        { optionText: "BFS", optionTag: "B" },
        { optionText: "Postorder recursion", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which data structure is ideal for tree construction?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Linked List", optionTag: "C" },
        { optionText: "Recursive class-based object", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What is the time complexity of inserting into a binary tree (average case)?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    }
  ]
};

export default quizData;