import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python - Fenwick Trees - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Quiz to assess understanding of Fenwick Trees (Binary Indexed Trees) in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "FenwickTrees",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the primary purpose of a Fenwick Tree?",
      options: [
        { optionText: "To sort data", optionTag: "D" },
        { optionText: "To store graphs", optionTag: "A" },
        { optionText: "To perform efficient range queries and updates", optionTag: "B" },
        { optionText: "To search for an element", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is another name for a Fenwick Tree?",
      options: [
        { optionText: "AVL Tree", optionTag: "D" },
        { optionText: "Prefix Sum Tree", optionTag: "A" },
        { optionText: "Binary Indexed Tree", optionTag: "C" },
        { optionText: "Suffix Tree", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the time complexity of point update in a Fenwick Tree?",
      options: [
        { optionText: "O(log n)", optionTag: "D" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which operation is efficiently supported by a Fenwick Tree?",
      options: [
        { optionText: "Range minimum query", optionTag: "A" },
        { optionText: "Range sum query", optionTag: "C" },
        { optionText: "String matching", optionTag: "D" },
        { optionText: "Graph traversal", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the key technique used in Fenwick Tree?",
      options: [
        { optionText: "Hashing", optionTag: "D" },
        { optionText: "Divide and Conquer", optionTag: "C" },
        { optionText: "Binary Manipulation", optionTag: "B" },
        { optionText: "Recursion", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which function helps navigate Fenwick Tree efficiently?",
      options: [
        { optionText: "log2()", optionTag: "B" },
        { optionText: "i & -i", optionTag: "A" },
        { optionText: "pow(i, 2)", optionTag: "D" },
        { optionText: "bit shift right", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Fenwick Trees are most suitable for which of the following?",
      options: [
        { optionText: "Static arrays with no updates", optionTag: "C" },
        { optionText: "Sparse matrices", optionTag: "D" },
        { optionText: "Dynamic arrays with frequent range sum queries", optionTag: "B" },
        { optionText: "Depth-first search", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following operations is NOT supported efficiently by Fenwick Trees?",
      options: [
        { optionText: "Point updates", optionTag: "C" },
        { optionText: "Range maximum query", optionTag: "B" },
        { optionText: "Prefix sum query", optionTag: "A" },
        { optionText: "Range sum query", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the typical space complexity of a Fenwick Tree?",
      options: [
        { optionText: "O(n)", optionTag: "D" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n^2)", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which index is used as the starting index in Fenwick Tree?",
      options: [
        { optionText: "0", optionTag: "C" },
        { optionText: "1", optionTag: "A" },
        { optionText: "-1", optionTag: "D" },
        { optionText: "2", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },

    // Next 10
    {
      questionText: "In Python, what data structure is commonly used to implement Fenwick Tree?",
      options: [
        { optionText: "List", optionTag: "C" },
        { optionText: "Set", optionTag: "A" },
        { optionText: "Dictionary", optionTag: "D" },
        { optionText: "Tuple", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the base case for a prefix sum in Fenwick Tree?",
      options: [
        { optionText: "prefix[0] = 1", optionTag: "D" },
        { optionText: "prefix[n] = 0", optionTag: "B" },
        { optionText: "prefix[0] = 0", optionTag: "A" },
        { optionText: "prefix[i] = 1", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which is the correct range sum logic using Fenwick Tree?",
      options: [
        { optionText: "sum(right) - sum(left)", optionTag: "D" },
        { optionText: "sum(left) + sum(right)", optionTag: "C" },
        { optionText: "sum(right) - sum(left - 1)", optionTag: "A" },
        { optionText: "sum(left - 1) - sum(right)", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What does the i & -i operation return?",
      options: [
        { optionText: "Rightmost set bit", optionTag: "C" },
        { optionText: "Leftmost set bit", optionTag: "A" },
        { optionText: "All bits flipped", optionTag: "D" },
        { optionText: "None of the above", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which update strategy is used in Fenwick Tree?",
      options: [
        { optionText: "Loop backward", optionTag: "B" },
        { optionText: "Recursive DFS", optionTag: "C" },
        { optionText: "Update ancestors using i += i & -i", optionTag: "A" },
        { optionText: "Dynamic expansion", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is a limitation of Fenwick Tree?",
      options: [
        { optionText: "It does not support point queries", optionTag: "C" },
        { optionText: "It requires balanced trees", optionTag: "A" },
        { optionText: "It cannot handle maximum queries", optionTag: "B" },
        { optionText: "It has high time complexity", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which application is ideal for Fenwick Tree?",
      options: [
        { optionText: "Sorting large arrays", optionTag: "D" },
        { optionText: "Counting inversions", optionTag: "C" },
        { optionText: "Graph coloring", optionTag: "A" },
        { optionText: "Pathfinding", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which bitwise operation is central to Fenwick Tree?",
      options: [
        { optionText: "XOR", optionTag: "D" },
        { optionText: "AND", optionTag: "A" },
        { optionText: "OR", optionTag: "C" },
        { optionText: "SHIFT", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "In BIT, what does adding i & -i to i help with?",
      options: [
        { optionText: "Finding next ancestor", optionTag: "D" },
        { optionText: "Finding max", optionTag: "A" },
        { optionText: "Finding min", optionTag: "C" },
        { optionText: "Jump to leftmost node", optionTag: "B" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which problem type is not well suited for Fenwick Tree?",
      options: [
        { optionText: "Point updates", optionTag: "B" },
        { optionText: "Range max queries", optionTag: "C" },
        { optionText: "Prefix sums", optionTag: "A" },
        { optionText: "Range sum", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
  ],
};

export default quizData;