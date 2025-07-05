import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Binary Search Trees - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Test your fundamental understanding of Binary Search Trees (BSTs) in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "BinarySearchTrees"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is a Binary Search Tree (BST)?",
      options: [
        { optionText: "A tree with at most three children per node", optionTag: "D" },
        { optionText: "A binary tree where each node has at most one child", optionTag: "C" },
        { optionText: "A binary tree where left children are smaller and right are greater", optionTag: "B" },
        { optionText: "A tree where nodes are stored in a heap", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which traversal method gives sorted elements in a BST?",
      options: [
        { optionText: "Postorder", optionTag: "C" },
        { optionText: "Preorder", optionTag: "D" },
        { optionText: "Inorder", optionTag: "A" },
        { optionText: "Level Order", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity for searching in a balanced BST?",
      options: [
        { optionText: "O(n)", optionTag: "D" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following violates the BST property?",
      options: [
        { optionText: "Left child < node < right child", optionTag: "C" },
        { optionText: "Root > left subtree and < right subtree", optionTag: "D" },
        { optionText: "Root < all elements in right subtree", optionTag: "A" },
        { optionText: "Right child < node", optionTag: "B" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which node is visited first in an inorder traversal?",
      options: [
        { optionText: "Leftmost", optionTag: "C" },
        { optionText: "Rightmost", optionTag: "B" },
        { optionText: "Root", optionTag: "A" },
        { optionText: "Random", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the worst-case time complexity for insert in BST?",
      options: [
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "D" },
        { optionText: "O(n^2)", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In Python, how is a new node inserted in a BST?",
      options: [
        { optionText: "Compare and go left or right recursively", optionTag: "D" },
        { optionText: "Insert randomly", optionTag: "B" },
        { optionText: "Use stack and insert at bottom", optionTag: "A" },
        { optionText: "Insert at root", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the result of inserting elements in sorted order into BST?",
      options: [
        { optionText: "A full binary tree", optionTag: "C" },
        { optionText: "A balanced tree", optionTag: "B" },
        { optionText: "A skewed tree", optionTag: "A" },
        { optionText: "An AVL tree", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation requires finding the inorder successor?",
      options: [
        { optionText: "Insertion", optionTag: "C" },
        { optionText: "Search", optionTag: "D" },
        { optionText: "Traversal", optionTag: "B" },
        { optionText: "Deletion", optionTag: "A" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the height of a BST with only one node?",
      options: [
        { optionText: "0", optionTag: "B" },
        { optionText: "1", optionTag: "C" },
        { optionText: "2", optionTag: "D" },
        { optionText: "-1", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which structure is best for implementing recursive search in BST?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Linked List", optionTag: "D" },
        { optionText: "Queue", optionTag: "C" },
        { optionText: "Array", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which Python function is used to compare two values while inserting?",
      options: [
        { optionText: "cmp()", optionTag: "A" },
        { optionText: "compare()", optionTag: "B" },
        { optionText: "if-else condition", optionTag: "D" },
        { optionText: "sort()", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What defines the uniqueness of BST structure?",
      options: [
        { optionText: "Traversal order", optionTag: "C" },
        { optionText: "Insertion order", optionTag: "B" },
        { optionText: "Height", optionTag: "D" },
        { optionText: "Balanced property", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What does the left child of a node contain?",
      options: [
        { optionText: "A value less than parent", optionTag: "C" },
        { optionText: "A value greater than parent", optionTag: "B" },
        { optionText: "Any random value", optionTag: "A" },
        { optionText: "Always None", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How to ensure BST stays balanced?",
      options: [
        { optionText: "Rotate nodes on insert/delete", optionTag: "A" },
        { optionText: "Insert at root", optionTag: "C" },
        { optionText: "Use stack instead of recursion", optionTag: "D" },
        { optionText: "Keep root fixed", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is returned by a search operation if value not found?",
      options: [
        { optionText: "None", optionTag: "A" },
        { optionText: "-1", optionTag: "D" },
        { optionText: "False", optionTag: "B" },
        { optionText: "0", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to visit every node of a BST only once?",
      options: [
        { optionText: "Use recursion with visited flag", optionTag: "B" },
        { optionText: "Use level order", optionTag: "D" },
        { optionText: "Traverse using DFS", optionTag: "C" },
        { optionText: "Use stack", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "A node with two children is deleted by:",
      options: [
        { optionText: "Replacing with inorder predecessor or successor", optionTag: "C" },
        { optionText: "Replacing with root", optionTag: "D" },
        { optionText: "Deleting directly", optionTag: "B" },
        { optionText: "Replacing with right child always", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which case results in worst BST height?",
      options: [
        { optionText: "Sorted ascending insertion", optionTag: "C" },
        { optionText: "Balanced insertion", optionTag: "A" },
        { optionText: "Random order", optionTag: "D" },
        { optionText: "Preorder input", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What does 'self.right = Node(val)' mean in Python BST?",
      options: [
        { optionText: "Creates a new right child node", optionTag: "A" },
        { optionText: "Assigns val to root", optionTag: "D" },
        { optionText: "Deletes right child", optionTag: "C" },
        { optionText: "Searches right node", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;