import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Trees - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "This quiz evaluates your understanding of Tree data structures and operations in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Trees"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the maximum number of nodes in a binary tree of height h?",
      options: [
        { optionText: "2^h", optionTag: "A" },
        { optionText: "2^(h+1) - 1", optionTag: "B" },
        { optionText: "h^2", optionTag: "C" },
        { optionText: "h!", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the time complexity of searching an element in a balanced binary search tree?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal method processes the root node between its subtrees?",
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
      questionText: "Which of these is not a tree traversal method?",
      options: [
        { optionText: "Inorder", optionTag: "A" },
        { optionText: "Postorder", optionTag: "B" },
        { optionText: "Overorder", optionTag: "C" },
        { optionText: "Preorder", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is a leaf node?",
      options: [
        { optionText: "Node with one child", optionTag: "A" },
        { optionText: "Node with two children", optionTag: "B" },
        { optionText: "Node with no children", optionTag: "C" },
        { optionText: "Node at root", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which tree has maximum height for n nodes?",
      options: [
        { optionText: "Complete binary tree", optionTag: "A" },
        { optionText: "Skewed tree", optionTag: "B" },
        { optionText: "Full binary tree", optionTag: "C" },
        { optionText: "Balanced tree", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which data structure is used in level order traversal?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Array", optionTag: "C" },
        { optionText: "LinkedList", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which node is always visited first in preorder traversal?",
      options: [
        { optionText: "Root", optionTag: "A" },
        { optionText: "Left child", optionTag: "B" },
        { optionText: "Right child", optionTag: "C" },
        { optionText: "Leaf node", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which binary tree property is true?",
      options: [
        { optionText: "Each node has at most two children", optionTag: "A" },
        { optionText: "All nodes must have exactly two children", optionTag: "B" },
        { optionText: "Each node has at least one child", optionTag: "C" },
        { optionText: "Only leaves have children", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the height of a single-node tree?",
      options: [
        { optionText: "0", optionTag: "A" },
        { optionText: "1", optionTag: "B" },
        { optionText: "2", optionTag: "C" },
        { optionText: "-1", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the main advantage of a binary search tree over a binary tree?",
      options: [
        { optionText: "Faster search time", optionTag: "A" },
        { optionText: "More memory", optionTag: "B" },
        { optionText: "More balanced structure", optionTag: "C" },
        { optionText: "More leaves", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What condition must a binary tree satisfy to be a BST?",
      options: [
        { optionText: "Left child < Parent < Right child", optionTag: "A" },
        { optionText: "Left child > Parent < Right child", optionTag: "B" },
        { optionText: "Root must be smallest", optionTag: "C" },
        { optionText: "All values equal", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal can be used to get sorted data from a BST?",
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
      questionText: "In a complete binary tree, which level is always completely filled?",
      options: [
        { optionText: "Last level", optionTag: "A" },
        { optionText: "Second last level", optionTag: "B" },
        { optionText: "First level", optionTag: "C" },
        { optionText: "All levels", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following is not a type of tree?",
      options: [
        { optionText: "Binary tree", optionTag: "A" },
        { optionText: "Ternary tree", optionTag: "B" },
        { optionText: "Linear tree", optionTag: "C" },
        { optionText: "Circular tree", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which data structure is commonly used for expression parsing?",
      options: [
        { optionText: "Binary Tree", optionTag: "A" },
        { optionText: "Expression Tree", optionTag: "B" },
        { optionText: "BST", optionTag: "C" },
        { optionText: "AVL Tree", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is a full binary tree?",
      options: [
        { optionText: "All nodes have 2 children or none", optionTag: "A" },
        { optionText: "All nodes have 1 child", optionTag: "B" },
        { optionText: "All levels are completely filled", optionTag: "C" },
        { optionText: "Only root node is filled", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method is used to find the maximum value in a BST?",
      options: [
        { optionText: "Go leftmost", optionTag: "A" },
        { optionText: "Go rightmost", optionTag: "B" },
        { optionText: "Use level order", optionTag: "C" },
        { optionText: "Use height", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the time complexity to find the height of a binary tree?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What kind of tree has every node with either 0 or 2 children?",
      options: [
        { optionText: "Ternary Tree", optionTag: "A" },
        { optionText: "Full Binary Tree", optionTag: "B" },
        { optionText: "Skewed Tree", optionTag: "C" },
        { optionText: "Sparse Tree", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;