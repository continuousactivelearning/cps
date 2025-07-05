import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Binary Search Trees - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "This quiz assesses your advanced knowledge of Binary Search Trees (BSTs) including insertion, deletion, traversal, balancing, and applications.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "BinarySearchTrees"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the time complexity of searching in a balanced BST?",
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
      questionText: "What makes a tree a BST?",
      options: [
        { optionText: "Left < Root < Right", optionTag: "A" },
        { optionText: "All nodes have two children", optionTag: "B" },
        { optionText: "It is always balanced", optionTag: "C" },
        { optionText: "Only right children are allowed", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal yields sorted output from a BST?",
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
      questionText: "What is the worst-case height of a BST?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which node replaces a deleted node with two children?",
      options: [
        { optionText: "Its leftmost descendant", optionTag: "A" },
        { optionText: "Its inorder successor or predecessor", optionTag: "B" },
        { optionText: "Its parent", optionTag: "C" },
        { optionText: "Its sibling", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following can cause an unbalanced BST?",
      options: [
        { optionText: "Sorted input", optionTag: "A" },
        { optionText: "Balanced insertions", optionTag: "B" },
        { optionText: "Random input", optionTag: "C" },
        { optionText: "Heap property", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How many unique BSTs can be made with n nodes?",
      options: [
        { optionText: "n!", optionTag: "A" },
        { optionText: "2^n", optionTag: "B" },
        { optionText: "Catalan number Cn", optionTag: "C" },
        { optionText: "n^2", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which operation takes O(h) in a BST where h is height?",
      options: [
        { optionText: "Traversal", optionTag: "A" },
        { optionText: "Insertion", optionTag: "B" },
        { optionText: "Printing", optionTag: "C" },
        { optionText: "Balancing", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following BST operations require recursive implementation commonly?",
      options: [
        { optionText: "Search", optionTag: "A" },
        { optionText: "Delete", optionTag: "B" },
        { optionText: "Insert", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is true about AVL trees in relation to BSTs?",
      options: [
        { optionText: "They are more balanced than regular BSTs", optionTag: "A" },
        { optionText: "They are not BSTs", optionTag: "B" },
        { optionText: "They don't allow duplicates", optionTag: "C" },
        { optionText: "They are slower", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which Java class best represents a binary search tree?",
      options: [
        { optionText: "TreeSet", optionTag: "A" },
        { optionText: "HashMap", optionTag: "B" },
        { optionText: "LinkedList", optionTag: "C" },
        { optionText: "ArrayList", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does the root of a BST contain?",
      options: [
        { optionText: "Minimum element", optionTag: "A" },
        { optionText: "Maximum element", optionTag: "B" },
        { optionText: "Middle element", optionTag: "C" },
        { optionText: "Any element", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which of these BST methods is least affected by tree balance?",
      options: [
        { optionText: "Traversal", optionTag: "A" },
        { optionText: "Search", optionTag: "B" },
        { optionText: "Insert", optionTag: "C" },
        { optionText: "Delete", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What ensures optimal search in a BST?",
      options: [
        { optionText: "Complete balance", optionTag: "A" },
        { optionText: "Unique values", optionTag: "B" },
        { optionText: "Full binary form", optionTag: "C" },
        { optionText: "Random values", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the in-order predecessor of a node?",
      options: [
        { optionText: "Rightmost node in left subtree", optionTag: "A" },
        { optionText: "Leftmost node in right subtree", optionTag: "B" },
        { optionText: "Parent node", optionTag: "C" },
        { optionText: "Leaf node", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the first step in deleting a node with two children in a BST?",
      options: [
        { optionText: "Find the node", optionTag: "A" },
        { optionText: "Find inorder successor", optionTag: "B" },
        { optionText: "Replace it with left child", optionTag: "C" },
        { optionText: "Remove parent", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which BST operation can be used to check duplicates?",
      options: [
        { optionText: "Insert", optionTag: "A" },
        { optionText: "Search", optionTag: "B" },
        { optionText: "Delete", optionTag: "C" },
        { optionText: "Traverse", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which traversal is best for copying a BST?",
      options: [
        { optionText: "Preorder", optionTag: "A" },
        { optionText: "Inorder", optionTag: "B" },
        { optionText: "Postorder", optionTag: "C" },
        { optionText: "Level order", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which Java package contains tree-related interfaces like NavigableSet?",
      options: [
        { optionText: "java.util", optionTag: "A" },
        { optionText: "java.lang", optionTag: "B" },
        { optionText: "java.tree", optionTag: "C" },
        { optionText: "java.structures", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens in a BST if duplicate values are inserted?",
      options: [
        { optionText: "Duplicates are ignored", optionTag: "A" },
        { optionText: "They go to left subtree", optionTag: "B" },
        { optionText: "They go to right subtree", optionTag: "C" },
        { optionText: "Depends on implementation", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    }
  ]
};

export default quizData;