import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Binary Trees - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "This quiz covers deep concepts related to Binary Trees in Java, including advanced traversal, construction, and manipulation techniques.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "BinaryTrees"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which traversal is used to create a copy of a binary tree?",
      options: [
        { optionText: "Inorder", optionTag: "A" },
        { optionText: "Preorder", optionTag: "B" },
        { optionText: "Postorder", optionTag: "C" },
        { optionText: "Level order", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which node is visited first in postorder traversal?",
      options: [
        { optionText: "Root", optionTag: "A" },
        { optionText: "Right Child", optionTag: "B" },
        { optionText: "Left Child", optionTag: "C" },
        { optionText: "Leaf", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which traversal uses recursion and a stack in its implementation?",
      options: [
        { optionText: "Inorder", optionTag: "A" },
        { optionText: "Level order", optionTag: "B" },
        { optionText: "Breadth-First Search", optionTag: "C" },
        { optionText: "Zigzag", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "A complete binary tree with n nodes has how many leaf nodes?",
      options: [
        { optionText: "n/2", optionTag: "A" },
        { optionText: "n", optionTag: "B" },
        { optionText: "log n", optionTag: "C" },
        { optionText: "n-1", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In a binary tree, what is the max number of nodes at level 'l'?",
      options: [
        { optionText: "l", optionTag: "A" },
        { optionText: "2^l", optionTag: "B" },
        { optionText: "2^(l-1)", optionTag: "C" },
        { optionText: "2l", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which algorithm finds the lowest common ancestor in a binary tree?",
      options: [
        { optionText: "DFS traversal", optionTag: "A" },
        { optionText: "BFS traversal", optionTag: "B" },
        { optionText: "Divide and Conquer", optionTag: "C" },
        { optionText: "Heapify", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which data structure is used in iterative tree traversal?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "HashMap", optionTag: "C" },
        { optionText: "Heap", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function is needed to construct a binary tree from inorder and preorder traversal?",
      options: [
        { optionText: "Divide and Conquer", optionTag: "A" },
        { optionText: "Backtracking", optionTag: "B" },
        { optionText: "Dynamic Programming", optionTag: "C" },
        { optionText: "Greedy", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal is used to print a binary tree level by level?",
      options: [
        { optionText: "Inorder", optionTag: "A" },
        { optionText: "Preorder", optionTag: "B" },
        { optionText: "Level Order", optionTag: "C" },
        { optionText: "Postorder", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the height of a skewed binary tree with n nodes?",
      options: [
        { optionText: "log n", optionTag: "A" },
        { optionText: "n/2", optionTag: "B" },
        { optionText: "n", optionTag: "C" },
        { optionText: "n - 1", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What happens when left and right children are null in a binary tree?",
      options: [
        { optionText: "Node is root", optionTag: "A" },
        { optionText: "Node is internal", optionTag: "B" },
        { optionText: "Node is leaf", optionTag: "C" },
        { optionText: "Node is sibling", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the total number of nodes in a complete binary tree of height h?",
      options: [
        { optionText: "2^h", optionTag: "A" },
        { optionText: "2^(h+1) - 1", optionTag: "B" },
        { optionText: "h^2", optionTag: "C" },
        { optionText: "2h", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which traversal sequence gives a unique binary tree when combined with inorder?",
      options: [
        { optionText: "Preorder", optionTag: "A" },
        { optionText: "Postorder", optionTag: "B" },
        { optionText: "Level order", optionTag: "C" },
        { optionText: "Zigzag", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of constructing a binary tree from traversals?",
      options: [
        { optionText: "O(n log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the relationship between height and number of nodes in binary tree?",
      options: [
        { optionText: "Height ≤ log(n)", optionTag: "A" },
        { optionText: "Height ≥ log(n)", optionTag: "B" },
        { optionText: "Height = n", optionTag: "C" },
        { optionText: "Height = n^2", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which traversal is used in DFS?",
      options: [
        { optionText: "Level order", optionTag: "A" },
        { optionText: "Zigzag", optionTag: "B" },
        { optionText: "Inorder", optionTag: "C" },
        { optionText: "None of these", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which property defines a full binary tree?",
      options: [
        { optionText: "All nodes have two or no children", optionTag: "A" },
        { optionText: "Every node has one child", optionTag: "B" },
        { optionText: "All nodes are leaves", optionTag: "C" },
        { optionText: "Only root exists", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What data structure does Morris Traversal eliminate the use of?",
      options: [
        { optionText: "Queue", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Array", optionTag: "C" },
        { optionText: "Set", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which traversal is not suitable for calculating tree height?",
      options: [
        { optionText: "Inorder", optionTag: "A" },
        { optionText: "Preorder", optionTag: "B" },
        { optionText: "Postorder", optionTag: "C" },
        { optionText: "Level order", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In binary trees, what is a complete tree?",
      options: [
        { optionText: "All internal nodes have two children", optionTag: "A" },
        { optionText: "All levels except last are full", optionTag: "B" },
        { optionText: "All leaves are at same level", optionTag: "C" },
        { optionText: "Root has one child", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;