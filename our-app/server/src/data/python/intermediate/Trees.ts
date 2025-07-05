import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Trees - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Test your understanding of trees, traversal methods, and tree operations in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Trees"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the maximum number of nodes at level ‘l’ in a binary tree?",
      options: [
        { optionText: "l", optionTag: "A" },
        { optionText: "2^l", optionTag: "B" },
        { optionText: "l^2", optionTag: "C" },
        { optionText: "2^(l-1)", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which traversal is used to get the contents of a binary search tree in ascending order?",
      options: [
        { optionText: "Preorder", optionTag: "A" },
        { optionText: "Inorder", optionTag: "B" },
        { optionText: "Postorder", optionTag: "C" },
        { optionText: "Level order", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the time complexity to search for a node in a balanced binary tree?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which data structure is used for level-order traversal of a binary tree?",
      options: [
        { optionText: "Stack", optionTag: "C" },
        { optionText: "Queue", optionTag: "A" },
        { optionText: "Linked List", optionTag: "B" },
        { optionText: "Hash Table", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "A full binary tree with n internal nodes has how many leaves?",
      options: [
        { optionText: "n", optionTag: "D" },
        { optionText: "n + 1", optionTag: "B" },
        { optionText: "2n", optionTag: "C" },
        { optionText: "n - 1", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which traversal is defined as visiting the root, then the left subtree, and finally the right subtree?",
      options: [
        { optionText: "Postorder", optionTag: "A" },
        { optionText: "Inorder", optionTag: "B" },
        { optionText: "Preorder", optionTag: "C" },
        { optionText: "Reverse inorder", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the height of a tree with a single node?",
      options: [
        { optionText: "0", optionTag: "A" },
        { optionText: "1", optionTag: "B" },
        { optionText: "-1", optionTag: "C" },
        { optionText: "Depends on implementation", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which node is at the topmost level of a tree?",
      options: [
        { optionText: "Leaf", optionTag: "A" },
        { optionText: "Child", optionTag: "B" },
        { optionText: "Parent", optionTag: "C" },
        { optionText: "Root", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "How many children does a binary tree node have at most?",
      options: [
        { optionText: "3", optionTag: "A" },
        { optionText: "1", optionTag: "B" },
        { optionText: "2", optionTag: "C" },
        { optionText: "4", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which is NOT a characteristic of a binary tree?",
      options: [
        { optionText: "Each node has at most 2 children", optionTag: "C" },
        { optionText: "All leaves are at the same level", optionTag: "A" },
        { optionText: "Tree has a single root", optionTag: "B" },
        { optionText: "Tree has no cycles", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you calculate the total number of nodes in a full binary tree?",
      options: [
        { optionText: "2n", optionTag: "B" },
        { optionText: "2n + 1", optionTag: "A" },
        { optionText: "2n - 1", optionTag: "C" },
        { optionText: "n^2", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which node is called a leaf node?",
      options: [
        { optionText: "Node with exactly one child", optionTag: "A" },
        { optionText: "Node with two children", optionTag: "B" },
        { optionText: "Node with no children", optionTag: "C" },
        { optionText: "Root node", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which algorithm is used for tree traversals in DFS?",
      options: [
        { optionText: "Queue-based", optionTag: "B" },
        { optionText: "Stack-based", optionTag: "C" },
        { optionText: "Heap-based", optionTag: "A" },
        { optionText: "Linear scan", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What kind of tree is used to represent expressions?",
      options: [
        { optionText: "Binary Expression Tree", optionTag: "D" },
        { optionText: "Search Tree", optionTag: "A" },
        { optionText: "Heap", optionTag: "C" },
        { optionText: "AVL Tree", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the degree of a leaf node?",
      options: [
        { optionText: "1", optionTag: "B" },
        { optionText: "2", optionTag: "C" },
        { optionText: "0", optionTag: "A" },
        { optionText: "Depends on height", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is true about preorder traversal?",
      options: [
        { optionText: "Left -> Right -> Root", optionTag: "A" },
        { optionText: "Root -> Left -> Right", optionTag: "B" },
        { optionText: "Right -> Root -> Left", optionTag: "C" },
        { optionText: "Root -> Right -> Left", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which tree does NOT follow a specific structure?",
      options: [
        { optionText: "Binary Search Tree", optionTag: "C" },
        { optionText: "AVL Tree", optionTag: "B" },
        { optionText: "Binary Tree", optionTag: "D" },
        { optionText: "Heap", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which traversal uses a queue data structure?",
      options: [
        { optionText: "Postorder", optionTag: "A" },
        { optionText: "Preorder", optionTag: "C" },
        { optionText: "Level-order", optionTag: "B" },
        { optionText: "Inorder", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of these trees guarantees balance?",
      options: [
        { optionText: "BST", optionTag: "C" },
        { optionText: "AVL Tree", optionTag: "D" },
        { optionText: "Heap", optionTag: "A" },
        { optionText: "Ternary Tree", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "How many edges are there in a tree with n nodes?",
      options: [
        { optionText: "n", optionTag: "C" },
        { optionText: "n + 1", optionTag: "B" },
        { optionText: "n - 1", optionTag: "A" },
        { optionText: "2n", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;