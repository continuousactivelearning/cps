
import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Binary Search Trees - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Test your understanding of Binary Search Tree (BST) operations, properties, and traversals in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "BinarySearchTrees"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which property defines a Binary Search Tree?",
      options: [
        { optionText: "Left child > root", optionTag: "A" },
        { optionText: "Right child < root", optionTag: "B" },
        { optionText: "Left subtree has keys < root and right subtree has keys > root", optionTag: "C" },
        { optionText: "Only root can have children", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the time complexity of searching in a balanced BST?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "In which traversal is the BST printed in sorted order?",
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
      questionText: "What is the worst-case time complexity for deletion in BST?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What replaces a node with two children during deletion in BST?",
      options: [
        { optionText: "Its root node", optionTag: "A" },
        { optionText: "Its leftmost right subtree node or rightmost left subtree node", optionTag: "B" },
        { optionText: "None", optionTag: "C" },
        { optionText: "Any child", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What does an inorder successor in BST refer to?",
      options: [
        { optionText: "Next node in preorder", optionTag: "A" },
        { optionText: "Smallest node in right subtree", optionTag: "B" },
        { optionText: "Largest node in left subtree", optionTag: "C" },
        { optionText: "Root node", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following traversals is not used for BST validation?",
      options: [
        { optionText: "Inorder", optionTag: "A" },
        { optionText: "Postorder", optionTag: "B" },
        { optionText: "Preorder", optionTag: "C" },
        { optionText: "Random traversal", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What happens when inserting a duplicate key in a BST?",
      options: [
        { optionText: "It throws an error", optionTag: "A" },
        { optionText: "It replaces the old value", optionTag: "B" },
        { optionText: "It’s ignored or placed in a consistent location (based on implementation)", optionTag: "C" },
        { optionText: "Always added to left", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the height of a perfectly balanced BST with 7 nodes?",
      options: [
        { optionText: "3", optionTag: "A" },
        { optionText: "4", optionTag: "B" },
        { optionText: "2", optionTag: "C" },
        { optionText: "1", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is returned when searching for a non-existent key in BST?",
      options: [
        { optionText: "Root", optionTag: "A" },
        { optionText: "None/null", optionTag: "B" },
        { optionText: "0", optionTag: "C" },
        { optionText: "Parent node", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which node is the leftmost in BST?",
      options: [
        { optionText: "Maximum value", optionTag: "A" },
        { optionText: "Minimum value", optionTag: "B" },
        { optionText: "Root", optionTag: "C" },
        { optionText: "Middle node", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which operation is not supported efficiently in BST?",
      options: [
        { optionText: "Insert", optionTag: "A" },
        { optionText: "Delete", optionTag: "B" },
        { optionText: "Find Max", optionTag: "C" },
        { optionText: "Sort all elements", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which BST operation changes the tree’s structure the most?",
      options: [
        { optionText: "Search", optionTag: "A" },
        { optionText: "Insert", optionTag: "B" },
        { optionText: "Delete", optionTag: "C" },
        { optionText: "Traversal", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which traversal is ideal to print values in descending order in BST?",
      options: [
        { optionText: "Preorder", optionTag: "A" },
        { optionText: "Inorder (Right, Root, Left)", optionTag: "B" },
        { optionText: "Postorder", optionTag: "C" },
        { optionText: "Level Order", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What does the root of BST contain?",
      options: [
        { optionText: "The max key", optionTag: "A" },
        { optionText: "The min key", optionTag: "B" },
        { optionText: "Any key based on insert order", optionTag: "C" },
        { optionText: "Always null", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "When does BST become a skewed tree?",
      options: [
        { optionText: "Balanced insertions", optionTag: "A" },
        { optionText: "All insertions in ascending or descending order", optionTag: "B" },
        { optionText: "Equal left and right subtree height", optionTag: "C" },
        { optionText: "Every node has two children", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which statement is true about height-balanced BSTs?",
      options: [
        { optionText: "They always have equal children count", optionTag: "A" },
        { optionText: "Left and right subtrees' height differ by at most 1", optionTag: "B" },
        { optionText: "Leaf nodes at same level", optionTag: "C" },
        { optionText: "Only root node matters", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which tree type ensures O(log n) operations on average?",
      options: [
        { optionText: "Balanced BST", optionTag: "A" },
        { optionText: "Unbalanced BST", optionTag: "B" },
        { optionText: "Degenerate tree", optionTag: "C" },
        { optionText: "Heap", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the purpose of recursion in BST insert operation?",
      options: [
        { optionText: "To maintain tree structure", optionTag: "A" },
        { optionText: "To count height", optionTag: "B" },
        { optionText: "To flatten the tree", optionTag: "C" },
        { optionText: "To always go left", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which scenario will cause the height of BST to increase the most?",
      options: [
        { optionText: "Random insertions", optionTag: "A" },
        { optionText: "Balanced insertions", optionTag: "B" },
        { optionText: "Sequential ascending insertions", optionTag: "C" },
        { optionText: "Alternating inserts", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    }
  ]
};

export default quizData;