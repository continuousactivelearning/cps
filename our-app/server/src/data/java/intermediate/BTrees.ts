import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java B-Trees - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "Test your understanding of B-Trees, used in databases and file systems.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "B-Trees"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the primary application of B-Trees?",
      options: [
        { optionText: "File systems and databases", optionTag: "B" },
        { optionText: "Graphics rendering", optionTag: "A" },
        { optionText: "Networking", optionTag: "C" },
        { optionText: "Machine learning", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In a B-Tree of order m, each internal node can have at most how many children?",
      options: [
        { optionText: "m", optionTag: "A" },
        { optionText: "m + 1", optionTag: "D" },
        { optionText: "2m", optionTag: "C" },
        { optionText: "m - 1", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the minimum number of keys in a non-root internal node of a B-Tree of order m?",
      options: [
        { optionText: "⌈m/2⌉ - 1", optionTag: "C" },
        { optionText: "m", optionTag: "A" },
        { optionText: "⌊m/2⌋", optionTag: "B" },
        { optionText: "1", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is true about B-Tree leaf nodes?",
      options: [
        { optionText: "They all appear at the same level", optionTag: "D" },
        { optionText: "They have varying levels", optionTag: "A" },
        { optionText: "They are always empty", optionTag: "B" },
        { optionText: "They store only pointers", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which of the following is false about B-Trees?",
      options: [
        { optionText: "They are binary trees", optionTag: "C" },
        { optionText: "They are balanced", optionTag: "A" },
        { optionText: "They support logarithmic time search", optionTag: "B" },
        { optionText: "They store sorted data", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which operation may cause node split in B-Trees?",
      options: [
        { optionText: "Insertion", optionTag: "B" },
        { optionText: "Traversal", optionTag: "A" },
        { optionText: "Search", optionTag: "C" },
        { optionText: "Deletion", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Why are B-Trees used in databases?",
      options: [
        { optionText: "To minimize disk reads", optionTag: "C" },
        { optionText: "To compress data", optionTag: "A" },
        { optionText: "For hashing", optionTag: "B" },
        { optionText: "To visualize memory", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "B-Trees are a generalization of which data structure?",
      options: [
        { optionText: "Binary Search Trees", optionTag: "A" },
        { optionText: "Heaps", optionTag: "D" },
        { optionText: "AVL Trees", optionTag: "C" },
        { optionText: "Hash Tables", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of search in a B-Tree with n keys and degree d?",
      options: [
        { optionText: "O(logd n)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(d)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which traversal is typically used to retrieve data from a B-Tree?",
      options: [
        { optionText: "In-order", optionTag: "A" },
        { optionText: "Post-order", optionTag: "D" },
        { optionText: "Level-order", optionTag: "B" },
        { optionText: "Pre-order", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How are B-Trees balanced?",
      options: [
        { optionText: "All leaf nodes are at the same depth", optionTag: "C" },
        { optionText: "Rotations", optionTag: "B" },
        { optionText: "Coloring", optionTag: "D" },
        { optionText: "No balancing is required", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which condition leads to node merge in B-Trees?",
      options: [
        { optionText: "Underflow", optionTag: "B" },
        { optionText: "Overflow", optionTag: "A" },
        { optionText: "Balancing", optionTag: "C" },
        { optionText: "Insertions", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the minimum degree (t) of a B-Tree?",
      options: [
        { optionText: "Minimum number of children a non-root node must have", optionTag: "A" },
        { optionText: "Maximum height of the tree", optionTag: "C" },
        { optionText: "Number of keys in a leaf", optionTag: "D" },
        { optionText: "Size of root", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "B-Trees avoid frequent disk access by:",
      options: [
        { optionText: "Storing more keys in a single node", optionTag: "D" },
        { optionText: "Using AVL balancing", optionTag: "A" },
        { optionText: "Using hash maps", optionTag: "B" },
        { optionText: "Storing indexes in RAM", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What happens when the root of a B-Tree is split?",
      options: [
        { optionText: "A new root is created", optionTag: "C" },
        { optionText: "The tree becomes invalid", optionTag: "A" },
        { optionText: "Height decreases", optionTag: "B" },
        { optionText: "No change", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What ensures that the tree is always balanced?",
      options: [
        { optionText: "Consistent key distribution and node splitting", optionTag: "A" },
        { optionText: "Color balancing", optionTag: "B" },
        { optionText: "Path compression", optionTag: "C" },
        { optionText: "DFS traversal", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which one is TRUE for B-Tree deletion?",
      options: [
        { optionText: "May involve borrowing from siblings", optionTag: "B" },
        { optionText: "Always increases height", optionTag: "A" },
        { optionText: "Deletes entire tree", optionTag: "D" },
        { optionText: "Does not affect structure", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Why are B-Trees better than BSTs for disk access?",
      options: [
        { optionText: "B-Trees reduce the number of disk accesses", optionTag: "D" },
        { optionText: "B-Trees require more memory", optionTag: "A" },
        { optionText: "They sort data faster", optionTag: "B" },
        { optionText: "They use recursion", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is stored in each node of a B-Tree?",
      options: [
        { optionText: "Multiple keys and child pointers", optionTag: "C" },
        { optionText: "One key and one child", optionTag: "A" },
        { optionText: "Only keys", optionTag: "B" },
        { optionText: "Only pointers", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following is TRUE for B-Trees?",
      options: [
        { optionText: "Efficient for read-heavy workloads", optionTag: "A" },
        { optionText: "Ideal for write-only memory", optionTag: "B" },
        { optionText: "Only works on sorted arrays", optionTag: "D" },
        { optionText: "Requires balancing every second insert", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;