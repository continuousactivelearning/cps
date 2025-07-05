import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Segment Trees - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "Evaluate your knowledge on Segment Trees, used in range queries and updates.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "SegmentTrees"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the time complexity to build a Segment Tree of n elements?",
      options: [
        { optionText: "O(n log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Segment Trees are primarily used for:",
      options: [
        { optionText: "Searching elements", optionTag: "D" },
        { optionText: "Hashing data", optionTag: "B" },
        { optionText: "Range queries and updates", optionTag: "A" },
        { optionText: "Heap sort", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity for point update in a Segment Tree?",
      options: [
        { optionText: "O(log n)", optionTag: "D" },
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "In a Segment Tree, what does each internal node represent?",
      options: [
        { optionText: "Root of the tree", optionTag: "C" },
        { optionText: "Subrange summary", optionTag: "B" },
        { optionText: "Leaf node", optionTag: "A" },
        { optionText: "Parent index", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Segment Trees are better than Binary Indexed Trees because they support:",
      options: [
        { optionText: "Point queries", optionTag: "A" },
        { optionText: "Multiple operation types", optionTag: "C" },
        { optionText: "Logarithmic deletion", optionTag: "D" },
        { optionText: "Sorting operations", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the space complexity of a Segment Tree for n elements?",
      options: [
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of these operations is fastest with a Segment Tree?",
      options: [
        { optionText: "Prefix sum", optionTag: "A" },
        { optionText: "Range minimum query", optionTag: "B" },
        { optionText: "Suffix sum", optionTag: "D" },
        { optionText: "Binary search", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What data structure is often used to implement a Segment Tree?",
      options: [
        { optionText: "Binary Heap", optionTag: "A" },
        { optionText: "Array", optionTag: "D" },
        { optionText: "Linked List", optionTag: "B" },
        { optionText: "Queue", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the leaf level of a Segment Tree with 8 elements?",
      options: [
        { optionText: "1", optionTag: "B" },
        { optionText: "4", optionTag: "C" },
        { optionText: "8", optionTag: "A" },
        { optionText: "3", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is not a valid operation supported by Segment Trees?",
      options: [
        { optionText: "Range update", optionTag: "D" },
        { optionText: "Point query", optionTag: "C" },
        { optionText: "Node rotation", optionTag: "B" },
        { optionText: "Range minimum query", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Lazy propagation is used in Segment Trees for:",
      options: [
        { optionText: "Faster insertion", optionTag: "C" },
        { optionText: "Efficient range updates", optionTag: "B" },
        { optionText: "Deletion support", optionTag: "D" },
        { optionText: "Sorting elements", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which type of queries are best suited for Segment Trees?",
      options: [
        { optionText: "Single point insert", optionTag: "D" },
        { optionText: "Range sum queries", optionTag: "A" },
        { optionText: "Random access", optionTag: "C" },
        { optionText: "Frequency count", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How many nodes are there in a Segment Tree for n elements (approx)?",
      options: [
        { optionText: "2n - 1", optionTag: "C" },
        { optionText: "n", optionTag: "D" },
        { optionText: "log n", optionTag: "A" },
        { optionText: "n^2", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "In Segment Trees, what does the parent of nodes [2*i] and [2*i+1] store?",
      options: [
        { optionText: "Sum or min/max of children", optionTag: "A" },
        { optionText: "Hash of nodes", optionTag: "B" },
        { optionText: "Random node value", optionTag: "D" },
        { optionText: "Max frequency", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Segment Trees are generally built using which traversal?",
      options: [
        { optionText: "Inorder", optionTag: "D" },
        { optionText: "Postorder", optionTag: "B" },
        { optionText: "Preorder", optionTag: "A" },
        { optionText: "None. It's not tree traversal dependent", optionTag: "C" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which algorithm benefits from Segment Trees in competitive programming?",
      options: [
        { optionText: "Greedy", optionTag: "C" },
        { optionText: "Divide & Conquer", optionTag: "D" },
        { optionText: "Dynamic Programming with memory", optionTag: "A" },
        { optionText: "Range Query Optimization", optionTag: "B" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following is a disadvantage of Segment Trees?",
      options: [
        { optionText: "Does not support prefix queries", optionTag: "B" },
        { optionText: "Complex to code", optionTag: "D" },
        { optionText: "No support for update", optionTag: "C" },
        { optionText: "Slow access", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the minimum number of levels in a Segment Tree for 16 elements?",
      options: [
        { optionText: "4", optionTag: "C" },
        { optionText: "5", optionTag: "A" },
        { optionText: "3", optionTag: "D" },
        { optionText: "2", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which type of segment tree operation benefits most from lazy propagation?",
      options: [
        { optionText: "Point insertion", optionTag: "B" },
        { optionText: "Range assignment", optionTag: "D" },
        { optionText: "Prefix max", optionTag: "C" },
        { optionText: "Randomized queries", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the initialization value for range minimum segment tree?",
      options: [
        { optionText: "0", optionTag: "B" },
        { optionText: "Infinity", optionTag: "C" },
        { optionText: "1", optionTag: "D" },
        { optionText: "Negative Infinity", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    }
  ]
};

export default quizData;