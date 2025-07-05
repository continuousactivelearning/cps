import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Trees - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "This quiz challenges your expertise in tree data structures, covering traversal algorithms, tree transformations, and advanced concepts in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Trees"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which traversal technique is used for expression tree evaluation?",
      options: [
        { optionText: "Inorder", optionTag: "A" },
        { optionText: "Preorder", optionTag: "B" },
        { optionText: "Postorder", optionTag: "C" },
        { optionText: "Level order", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the height of a binary tree with only one node?",
      options: [
        { optionText: "0", optionTag: "A" },
        { optionText: "1", optionTag: "B" },
        { optionText: "-1", optionTag: "C" },
        { optionText: "2", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which tree traversal prints nodes in non-decreasing order for a BST?",
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
      questionText: "Which of the following is true for a full binary tree?",
      options: [
        { optionText: "Each node has 0 or 2 children", optionTag: "A" },
        { optionText: "Each node has at most 1 child", optionTag: "B" },
        { optionText: "All leaf nodes are at the same level", optionTag: "C" },
        { optionText: "The tree is complete", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal algorithm uses a queue data structure?",
      options: [
        { optionText: "Preorder", optionTag: "A" },
        { optionText: "Postorder", optionTag: "B" },
        { optionText: "Inorder", optionTag: "C" },
        { optionText: "Level order", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the time complexity of searching in a balanced binary search tree?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which algorithm can convert a binary tree into its mirror?",
      options: [
        { optionText: "Inorder traversal", optionTag: "A" },
        { optionText: "DFS with node swapping", optionTag: "B" },
        { optionText: "Level-order traversal", optionTag: "C" },
        { optionText: "Heapify", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which method is used to serialize a binary tree?",
      options: [
        { optionText: "DFS with marker for nulls", optionTag: "A" },
        { optionText: "Level-order only", optionTag: "B" },
        { optionText: "Postorder without nulls", optionTag: "C" },
        { optionText: "Random traversal", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In a binary tree, the number of null links is always:",
      options: [
        { optionText: "Equal to number of nodes", optionTag: "A" },
        { optionText: "One less than number of nodes", optionTag: "B" },
        { optionText: "One more than number of nodes", optionTag: "C" },
        { optionText: "Equal to twice the number of nodes", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which structure is best suited to implement recursive tree traversal?",
      options: [
        { optionText: "Queue", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Deque", optionTag: "C" },
        { optionText: "Linked List", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the maximum number of nodes in a binary tree of height h?",
      options: [
        { optionText: "2^(h + 1) - 1", optionTag: "A" },
        { optionText: "2h - 1", optionTag: "B" },
        { optionText: "h^2", optionTag: "C" },
        { optionText: "h * 2", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which node in a tree has no parent?",
      options: [
        { optionText: "Leaf node", optionTag: "A" },
        { optionText: "Internal node", optionTag: "B" },
        { optionText: "Root node", optionTag: "C" },
        { optionText: "Sibling node", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "In a complete binary tree, all levels are filled except possibly:",
      options: [
        { optionText: "Top level", optionTag: "A" },
        { optionText: "Last level", optionTag: "B" },
        { optionText: "First two levels", optionTag: "C" },
        { optionText: "Second last level", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which is the correct condition for identifying a leaf node?",
      options: [
        { optionText: "Has one child", optionTag: "A" },
        { optionText: "Has two children", optionTag: "B" },
        { optionText: "Has no children", optionTag: "C" },
        { optionText: "Is the root node", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which tree traversal uses recursion naturally?",
      options: [
        { optionText: "Inorder", optionTag: "A" },
        { optionText: "Level order", optionTag: "B" },
        { optionText: "Breadth-first", optionTag: "C" },
        { optionText: "Dijkstra's", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal visits root before subtrees?",
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
      questionText: "Which of these is a balanced tree?",
      options: [
        { optionText: "Skewed tree", optionTag: "A" },
        { optionText: "AVL tree", optionTag: "B" },
        { optionText: "Sparse tree", optionTag: "C" },
        { optionText: "Redundant tree", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the best case time complexity to insert a node in BST?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What’s the max number of edges in a tree with n nodes?",
      options: [
        { optionText: "n", optionTag: "A" },
        { optionText: "n + 1", optionTag: "B" },
        { optionText: "n - 1", optionTag: "C" },
        { optionText: "n / 2", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which application commonly uses trees?",
      options: [
        { optionText: "File systems", optionTag: "A" },
        { optionText: "Text formatting", optionTag: "B" },
        { optionText: "Linear search", optionTag: "C" },
        { optionText: "Stacks", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;