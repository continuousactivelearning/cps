import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Binary Trees - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "This quiz assesses your understanding of basic binary tree concepts and implementations in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "BinaryTrees"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is a binary tree?",
      options: [
        { optionText: "A tree with at most 3 children per node", optionTag: "B" },
        { optionText: "A tree with nodes connected in a circle", optionTag: "D" },
        { optionText: "A tree where each node has at most 2 children", optionTag: "C" },
        { optionText: "A tree with all nodes having 2 children", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which traversal method processes nodes as left-root-right?",
      options: [
        { optionText: "Inorder", optionTag: "D" },
        { optionText: "Preorder", optionTag: "B" },
        { optionText: "Postorder", optionTag: "C" },
        { optionText: "Level Order", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which traversal visits the root node first?",
      options: [
        { optionText: "Preorder", optionTag: "A" },
        { optionText: "Inorder", optionTag: "C" },
        { optionText: "Postorder", optionTag: "B" },
        { optionText: "Reverse Level Order", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity to search in a balanced binary tree?",
      options: [
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(n^2)", optionTag: "D" },
        { optionText: "O(n)", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is a full binary tree?",
      options: [
        { optionText: "Each node has exactly two or no children", optionTag: "D" },
        { optionText: "Each node has one child", optionTag: "B" },
        { optionText: "All leaves are at the same level", optionTag: "A" },
        { optionText: "Every node has two children", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which Python data structure is commonly used for level order traversal?",
      options: [
        { optionText: "List", optionTag: "B" },
        { optionText: "Queue", optionTag: "C" },
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Tuple", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How many nodes are there in a complete binary tree of height 3?",
      options: [
        { optionText: "7", optionTag: "B" },
        { optionText: "6", optionTag: "C" },
        { optionText: "5", optionTag: "D" },
        { optionText: "3", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the root in a binary tree?",
      options: [
        { optionText: "A node with one child", optionTag: "C" },
        { optionText: "A node with two children", optionTag: "B" },
        { optionText: "The topmost node with no parent", optionTag: "A" },
        { optionText: "A node with no children", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In binary trees, which node has no children?",
      options: [
        { optionText: "Root", optionTag: "B" },
        { optionText: "Parent", optionTag: "C" },
        { optionText: "Leaf", optionTag: "D" },
        { optionText: "Intermediate", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which method is used to traverse binary trees without recursion?",
      options: [
        { optionText: "Recursion", optionTag: "A" },
        { optionText: "Iteration with Stack", optionTag: "B" },
        { optionText: "Heap", optionTag: "D" },
        { optionText: "Recursion with cache", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which traversal outputs leaf nodes last?",
      options: [
        { optionText: "Preorder", optionTag: "A" },
        { optionText: "Inorder", optionTag: "C" },
        { optionText: "Postorder", optionTag: "D" },
        { optionText: "Level Order", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which of the following can uniquely identify a binary tree?",
      options: [
        { optionText: "Inorder and Preorder traversals", optionTag: "C" },
        { optionText: "Only Preorder", optionTag: "D" },
        { optionText: "Only Postorder", optionTag: "A" },
        { optionText: "Only Level Order", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the maximum number of nodes at level 'l' of a binary tree?",
      options: [
        { optionText: "2^l", optionTag: "A" },
        { optionText: "l", optionTag: "D" },
        { optionText: "l^2", optionTag: "C" },
        { optionText: "l!", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is not a traversal method?",
      options: [
        { optionText: "Circular", optionTag: "B" },
        { optionText: "Inorder", optionTag: "C" },
        { optionText: "Preorder", optionTag: "D" },
        { optionText: "Postorder", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "The height of a binary tree with only root is:",
      options: [
        { optionText: "1", optionTag: "B" },
        { optionText: "0", optionTag: "C" },
        { optionText: "-1", optionTag: "D" },
        { optionText: "2", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "A complete binary tree is defined as:",
      options: [
        { optionText: "All nodes have one child", optionTag: "D" },
        { optionText: "Every level is filled except possibly the last", optionTag: "A" },
        { optionText: "All leaves at same level", optionTag: "C" },
        { optionText: "Exactly 2 children per node", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal is used to evaluate postfix expressions?",
      options: [
        { optionText: "Preorder", optionTag: "C" },
        { optionText: "Postorder", optionTag: "B" },
        { optionText: "Inorder", optionTag: "A" },
        { optionText: "Level Order", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which data structure is ideal to implement binary tree in memory?",
      options: [
        { optionText: "Array", optionTag: "A" },
        { optionText: "Graph", optionTag: "D" },
        { optionText: "Linked Nodes", optionTag: "C" },
        { optionText: "Queue", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which method is best for checking balanced binary tree?",
      options: [
        { optionText: "Recursively checking left and right subtree heights", optionTag: "D" },
        { optionText: "Preorder traversal", optionTag: "C" },
        { optionText: "Checking if root is balanced", optionTag: "B" },
        { optionText: "Using stack for traversal", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "In Python, what symbol is used to define a left child in a binary tree node class?",
      options: [
        { optionText: "self->left", optionTag: "A" },
        { optionText: "self.left", optionTag: "B" },
        { optionText: "left", optionTag: "D" },
        { optionText: "this.left", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;