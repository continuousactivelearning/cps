import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java B-Trees - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "Assess your understanding of B-Trees, their structure, and operations used in file systems and databases.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "BTrees"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the minimum degree (t) of a B-Tree?",
      options: [
        { optionText: "The maximum number of keys per node", optionTag: "A" },
        { optionText: "The minimum number of children for the root", optionTag: "B" },
        { optionText: "The minimum number of children each internal node must have", optionTag: "C" },
        { optionText: "The maximum height of the tree", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "A B-Tree of order t can have how many keys in a node at most?",
      options: [
        { optionText: "t - 1", optionTag: "B" },
        { optionText: "2t - 1", optionTag: "C" },
        { optionText: "2t", optionTag: "A" },
        { optionText: "t", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which data structures are B-Trees best suited for?",
      options: [
        { optionText: "In-memory hash tables", optionTag: "A" },
        { optionText: "Binary trees", optionTag: "C" },
        { optionText: "Databases and file systems", optionTag: "B" },
        { optionText: "Graphs", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What happens during node splitting in B-Trees?",
      options: [
        { optionText: "The largest key moves to the root", optionTag: "C" },
        { optionText: "The node is discarded", optionTag: "B" },
        { optionText: "The median key moves to the parent", optionTag: "A" },
        { optionText: "All keys are deleted", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the worst-case time complexity for searching a key in a B-Tree?",
      options: [
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(t)", optionTag: "A" },
        { optionText: "O(log_t n)", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "In B-Tree, leaf nodes appear:",
      options: [
        { optionText: "At different levels", optionTag: "D" },
        { optionText: "Only at the top", optionTag: "C" },
        { optionText: "At the same level", optionTag: "A" },
        { optionText: "Anywhere", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is TRUE about B-Trees?",
      options: [
        { optionText: "They are binary trees", optionTag: "A" },
        { optionText: "They cannot store duplicate values", optionTag: "C" },
        { optionText: "All paths from root to leaves are of same length", optionTag: "B" },
        { optionText: "They are always balanced using AVL rotations", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which property is violated in a B-Tree that causes node split?",
      options: [
        { optionText: "Node having more than 2t - 1 keys", optionTag: "C" },
        { optionText: "Node having fewer than t - 1 keys", optionTag: "A" },
        { optionText: "Height inconsistency", optionTag: "D" },
        { optionText: "Child node duplication", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which is true about insertion in B-Trees?",
      options: [
        { optionText: "Always happens at the root", optionTag: "A" },
        { optionText: "It may propagate splitting to the root", optionTag: "D" },
        { optionText: "Occurs only at the leaf level", optionTag: "C" },
        { optionText: "It requires deletion first", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "How many children can an internal node in B-Tree of order t have at most?",
      options: [
        { optionText: "t - 1", optionTag: "C" },
        { optionText: "2t - 1", optionTag: "D" },
        { optionText: "t", optionTag: "A" },
        { optionText: "2t", optionTag: "B" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which operation is expensive in B-Trees?",
      options: [
        { optionText: "Insertion", optionTag: "D" },
        { optionText: "Traversal", optionTag: "A" },
        { optionText: "Deletion", optionTag: "C" },
        { optionText: "Searching", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "The root node in a B-Tree must have at least:",
      options: [
        { optionText: "1 key", optionTag: "C" },
        { optionText: "t keys", optionTag: "D" },
        { optionText: "2 keys", optionTag: "A" },
        { optionText: "No minimum keys", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Why are B-Trees suitable for disk access?",
      options: [
        { optionText: "They store values in sorted manner", optionTag: "A" },
        { optionText: "They have high branching factor", optionTag: "B" },
        { optionText: "They are binary", optionTag: "C" },
        { optionText: "They avoid recursion", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "B-Trees minimize the number of:",
      options: [
        { optionText: "Rotations", optionTag: "D" },
        { optionText: "Rebalancing", optionTag: "C" },
        { optionText: "Disk accesses", optionTag: "A" },
        { optionText: "Comparisons", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is a special case of B-Trees?",
      options: [
        { optionText: "Heap", optionTag: "B" },
        { optionText: "Red-Black Tree", optionTag: "A" },
        { optionText: "Binary Search Tree", optionTag: "C" },
        { optionText: "B+ Tree", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "During deletion, which key replaces the deleted key?",
      options: [
        { optionText: "Root key", optionTag: "A" },
        { optionText: "Successor key", optionTag: "B" },
        { optionText: "Predecessor key", optionTag: "D" },
        { optionText: "Any random child", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "How do B-Trees remain balanced?",
      options: [
        { optionText: "Height balancing using rotation", optionTag: "C" },
        { optionText: "Using sibling pointers", optionTag: "A" },
        { optionText: "Using rules for minimum and maximum keys", optionTag: "B" },
        { optionText: "They don't balance", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Maximum number of children for a node in B-Tree of order 3 is:",
      options: [
        { optionText: "4", optionTag: "D" },
        { optionText: "5", optionTag: "B" },
        { optionText: "6", optionTag: "A" },
        { optionText: "3", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "If a B-Tree has height h, what's the range of keys it can store?",
      options: [
        { optionText: "O(h)", optionTag: "C" },
        { optionText: "O(t^h)", optionTag: "A" },
        { optionText: "O(h log t)", optionTag: "D" },
        { optionText: "O(t + h)", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "B-Trees provide efficient access because:",
      options: [
        { optionText: "They use hashing", optionTag: "C" },
        { optionText: "They are recursive", optionTag: "A" },
        { optionText: "They reduce I/O operations", optionTag: "B" },
        { optionText: "They support graphs", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;