import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Binary Search Trees - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Evaluate your advanced understanding of Binary Search Trees (BSTs) in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Binary Search Trees",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the average time complexity for searching in a balanced BST?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which traversal gives nodes of BST in sorted order?",
      options: [
        { optionText: "Inorder", optionTag: "A" },
        { optionText: "Preorder", optionTag: "B" },
        { optionText: "Postorder", optionTag: "C" },
        { optionText: "Level-order", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What happens when you insert a duplicate key in a BST?",
      options: [
        { optionText: "Inserted on the left", optionTag: "A" },
        { optionText: "Inserted on the right", optionTag: "B" },
        { optionText: "Not allowed", optionTag: "C" },
        { optionText: "Replaces existing key", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which condition ensures BST validity?",
      options: [
        { optionText: "All left nodes < root < right nodes", optionTag: "A" },
        { optionText: "All left nodes > root", optionTag: "B" },
        { optionText: "Only root is maximum", optionTag: "C" },
        { optionText: "All values are unique", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of the following BST operations has worst-case time O(n)?",
      options: [
        { optionText: "Insert", optionTag: "A" },
        { optionText: "Search", optionTag: "B" },
        { optionText: "Delete", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which node replaces a deleted node with two children?",
      options: [
        { optionText: "Leaf node", optionTag: "A" },
        { optionText: "Root", optionTag: "B" },
        { optionText: "Inorder successor or predecessor", optionTag: "C" },
        { optionText: "Any child", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the best way to balance a BST?",
      options: [
        { optionText: "Insert sequential values", optionTag: "A" },
        { optionText: "Use AVL or Red-Black Tree", optionTag: "B" },
        { optionText: "Avoid recursion", optionTag: "C" },
        { optionText: "None of the above", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the depth of a perfectly balanced BST with 15 nodes?",
      options: [
        { optionText: "4", optionTag: "A" },
        { optionText: "5", optionTag: "B" },
        { optionText: "3", optionTag: "C" },
        { optionText: "2", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which traversal helps construct BST from a sorted array?",
      options: [
        { optionText: "Inorder", optionTag: "A" },
        { optionText: "Preorder", optionTag: "B" },
        { optionText: "Recursive binary partitioning", optionTag: "C" },
        { optionText: "Postorder", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "In a BST, which node has the smallest value?",
      options: [
        { optionText: "Root", optionTag: "A" },
        { optionText: "Leftmost node", optionTag: "B" },
        { optionText: "Rightmost node", optionTag: "C" },
        { optionText: "Any leaf", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What data structure is used in Morris Inorder Traversal?",
      options: [
        { optionText: "Queue", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Threaded pointers", optionTag: "C" },
        { optionText: "Heap", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "How many unique BSTs can be formed with 3 nodes?",
      options: [
        { optionText: "3", optionTag: "A" },
        { optionText: "5", optionTag: "B" },
        { optionText: "15", optionTag: "C" },
        { optionText: "8", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What property distinguishes AVL from plain BST?",
      options: [
        { optionText: "Every node has unique values", optionTag: "A" },
        { optionText: "Strict balance factor", optionTag: "B" },
        { optionText: "Only height-balanced", optionTag: "C" },
        { optionText: "Uses hashing", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following is not a rotation type in self-balancing BSTs?",
      options: [
        { optionText: "Left", optionTag: "A" },
        { optionText: "Right", optionTag: "B" },
        { optionText: "Diagonal", optionTag: "C" },
        { optionText: "Left-Right", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which function is used to find the height of BST recursively in Python?",
      options: [
        { optionText: "`max(height(left), height(right)) + 1`", optionTag: "A" },
        { optionText: "`min(left, right)`", optionTag: "B" },
        { optionText: "`sum(left, right)`", optionTag: "C" },
        { optionText: "`count(left + right)`", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What’s the space complexity of recursive BST insertion?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which node is deleted last in postorder deletion?",
      options: [
        { optionText: "Root", optionTag: "A" },
        { optionText: "Leftmost leaf", optionTag: "B" },
        { optionText: "Rightmost leaf", optionTag: "C" },
        { optionText: "Middle node", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "How is the maximum value node found in a BST?",
      options: [
        { optionText: "Leftmost leaf", optionTag: "A" },
        { optionText: "Rightmost leaf", optionTag: "B" },
        { optionText: "Middle node", optionTag: "C" },
        { optionText: "Root", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which BST operation does not require recursion?",
      options: [
        { optionText: "Traversal", optionTag: "A" },
        { optionText: "Insertion", optionTag: "B" },
        { optionText: "Search", optionTag: "C" },
        { optionText: "All can be done iteratively", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which of the following is used for fast access in BSTs?",
      options: [
        { optionText: "Binary search", optionTag: "A" },
        { optionText: "DFS", optionTag: "B" },
        { optionText: "Hashing", optionTag: "C" },
        { optionText: "AVL rotation", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    }
  ]
};

export default quizData;