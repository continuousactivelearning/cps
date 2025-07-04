import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Binary Search Trees - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "This quiz evaluates your understanding of Binary Search Trees (BST) and operations related to them in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Binary Search Trees"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the time complexity of searching in a balanced BST?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal method prints the keys of BST in sorted order?",
      options: [
        { optionText: "Preorder", optionTag: "A" },
        { optionText: "Postorder", optionTag: "B" },
        { optionText: "Inorder", optionTag: "C" },
        { optionText: "Level order", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "In BST, what happens if all elements are inserted in sorted order?",
      options: [
        { optionText: "It stays random", optionTag: "A" },
        { optionText: "It becomes balanced", optionTag: "B" },
        { optionText: "It becomes a skewed tree", optionTag: "C" },
        { optionText: "It forms a heap", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which operation in BST is most time-consuming in worst-case?",
      options: [
        { optionText: "Insertion", optionTag: "A" },
        { optionText: "Traversal", optionTag: "B" },
        { optionText: "Deletion", optionTag: "C" },
        { optionText: "Search", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which node replaces a deleted node with two children?",
      options: [
        { optionText: "Root node", optionTag: "A" },
        { optionText: "Inorder successor or predecessor", optionTag: "B" },
        { optionText: "Any child", optionTag: "C" },
        { optionText: "Leaf node", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following is NOT a property of BST?",
      options: [
        { optionText: "Left subtree has lesser keys", optionTag: "A" },
        { optionText: "All levels must be completely filled", optionTag: "B" },
        { optionText: "Right subtree has greater keys", optionTag: "C" },
        { optionText: "No duplicate keys", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which node is visited last in a postorder traversal?",
      options: [
        { optionText: "Leftmost", optionTag: "A" },
        { optionText: "Rightmost", optionTag: "B" },
        { optionText: "Root", optionTag: "C" },
        { optionText: "Inorder successor", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the height of a skewed BST with n nodes?",
      options: [
        { optionText: "log n", optionTag: "A" },
        { optionText: "n", optionTag: "B" },
        { optionText: "n/2", optionTag: "C" },
        { optionText: "√n", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which condition causes BST to degenerate into linked list?",
      options: [
        { optionText: "Sorted input", optionTag: "A" },
        { optionText: "Balanced input", optionTag: "B" },
        { optionText: "Random input", optionTag: "C" },
        { optionText: "Repeated values", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "To delete a node with one child in BST, we:",
      options: [
        { optionText: "Replace with its child", optionTag: "A" },
        { optionText: "Remove entire subtree", optionTag: "B" },
        { optionText: "Do nothing", optionTag: "C" },
        { optionText: "Remove root", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal is used to copy a BST?",
      options: [
        { optionText: "Inorder", optionTag: "A" },
        { optionText: "Preorder", optionTag: "B" },
        { optionText: "Postorder", optionTag: "C" },
        { optionText: "Level Order", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Time complexity of insertion in a balanced BST is:",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method gives the smallest node in BST?",
      options: [
        { optionText: "Traverse leftmost", optionTag: "A" },
        { optionText: "Use stack", optionTag: "B" },
        { optionText: "Traverse rightmost", optionTag: "C" },
        { optionText: "Traverse root", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is true about BST?",
      options: [
        { optionText: "All keys must be equal", optionTag: "A" },
        { optionText: "No children allowed", optionTag: "B" },
        { optionText: "Duplicates are not allowed", optionTag: "C" },
        { optionText: "All nodes have two children", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is a full binary tree?",
      options: [
        { optionText: "Every node has 0 or 2 children", optionTag: "A" },
        { optionText: "Each node has one child", optionTag: "B" },
        { optionText: "All levels full", optionTag: "C" },
        { optionText: "Only leaves allowed", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to check if a binary tree is a BST?",
      options: [
        { optionText: "Use inorder traversal and check order", optionTag: "A" },
        { optionText: "Check height", optionTag: "B" },
        { optionText: "Count children", optionTag: "C" },
        { optionText: "Measure balance factor", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In BST, what is the parent of minimum value node?",
      options: [
        { optionText: "Node with only right child", optionTag: "A" },
        { optionText: "Root node", optionTag: "B" },
        { optionText: "Node with only left child", optionTag: "C" },
        { optionText: "Leaf node", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How many comparisons needed to search in BST of height h?",
      options: [
        { optionText: "2h", optionTag: "A" },
        { optionText: "h^2", optionTag: "B" },
        { optionText: "h", optionTag: "C" },
        { optionText: "log h", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which traversal is used in deletion to find replacement?",
      options: [
        { optionText: "Preorder", optionTag: "A" },
        { optionText: "Zigzag", optionTag: "B" },
        { optionText: "Inorder", optionTag: "C" },
        { optionText: "Postorder", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What will be the inorder of a BST with elements 4, 2, 5, 1, 3?",
      options: [
        { optionText: "2, 1, 3, 4, 5", optionTag: "A" },
        { optionText: "4, 2, 1, 3, 5", optionTag: "B" },
        { optionText: "5, 4, 3, 2, 1", optionTag: "C" },
        { optionText: "1, 2, 3, 4, 5", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    }
  ]
};

export default quizData;