import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Segment Trees - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "Test your knowledge of Segment Trees, a powerful data structure for range queries and updates.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Segment Trees"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the primary use of a Segment Tree?",
      options: [
        { optionText: "Efficient range queries and updates", optionTag: "A" },
        { optionText: "Sorting elements", optionTag: "C" },
        { optionText: "Binary search operations", optionTag: "B" },
        { optionText: "Memory compression", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of building a Segment Tree?",
      options: [
        { optionText: "O(n)", optionTag: "D" },
        { optionText: "O(n log n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n^2)", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following operations is efficiently supported by a Segment Tree?",
      options: [
        { optionText: "Range minimum queries", optionTag: "C" },
        { optionText: "Matrix multiplication", optionTag: "D" },
        { optionText: "Linked list insertion", optionTag: "A" },
        { optionText: "String concatenation", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the size of a Segment Tree for an array of size n?",
      options: [
        { optionText: "4n", optionTag: "C" },
        { optionText: "n", optionTag: "D" },
        { optionText: "2n", optionTag: "B" },
        { optionText: "log n", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "In a Segment Tree, which traversal is commonly used for query/update?",
      options: [
        { optionText: "DFS", optionTag: "D" },
        { optionText: "Postorder", optionTag: "B" },
        { optionText: "Level-order", optionTag: "C" },
        { optionText: "Preorder", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which data structure can be considered a special case of a Segment Tree?",
      options: [
        { optionText: "Fenwick Tree", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Hash Table", optionTag: "D" },
        { optionText: "Heap", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of a range update in Segment Tree?",
      options: [
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Segment Tree is most suitable when:",
      options: [
        { optionText: "There are frequent range queries and updates", optionTag: "B" },
        { optionText: "Only point queries are required", optionTag: "A" },
        { optionText: "You need to sort an array", optionTag: "D" },
        { optionText: "Memory is highly limited", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Lazy propagation is used to:",
      options: [
        { optionText: "Postpone updates for efficiency", optionTag: "D" },
        { optionText: "Delete nodes", optionTag: "B" },
        { optionText: "Traverse segments faster", optionTag: "C" },
        { optionText: "Reduce tree height", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "How many levels are there in a complete Segment Tree for n elements?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "D" },
        { optionText: "O(n^2)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Segment Tree is NOT suitable for:",
      options: [
        { optionText: "Storing character frequency", optionTag: "C" },
        { optionText: "Handling huge strings", optionTag: "A" },
        { optionText: "Range sum queries", optionTag: "B" },
        { optionText: "RMQ problems", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens when n is not a power of 2 in Segment Trees?",
      options: [
        { optionText: "Tree is padded to next power of 2", optionTag: "D" },
        { optionText: "Tree cannot be built", optionTag: "B" },
        { optionText: "Querying is not allowed", optionTag: "C" },
        { optionText: "Results become inaccurate", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which of these operations is performed during tree construction?",
      options: [
        { optionText: "Combining children results", optionTag: "C" },
        { optionText: "Rotating subtrees", optionTag: "B" },
        { optionText: "Sorting elements", optionTag: "A" },
        { optionText: "Balancing the tree", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which Java class would best suit Segment Tree representation?",
      options: [
        { optionText: "Array", optionTag: "A" },
        { optionText: "LinkedList", optionTag: "D" },
        { optionText: "TreeMap", optionTag: "B" },
        { optionText: "HashMap", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Segment Tree node stores:",
      options: [
        { optionText: "Aggregated values of a segment", optionTag: "C" },
        { optionText: "Just a leaf", optionTag: "B" },
        { optionText: "Only root value", optionTag: "D" },
        { optionText: "Pointers to arrays", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is a common aggregation operation in Segment Trees?",
      options: [
        { optionText: "Sum or Min or Max", optionTag: "B" },
        { optionText: "Sorting", optionTag: "D" },
        { optionText: "String concatenation", optionTag: "C" },
        { optionText: "Graph coloring", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which approach is used in recursive Segment Tree implementation?",
      options: [
        { optionText: "Divide and conquer", optionTag: "D" },
        { optionText: "Greedy", optionTag: "A" },
        { optionText: "Dynamic programming", optionTag: "C" },
        { optionText: "Memoization", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the base case for recursive build of Segment Tree?",
      options: [
        { optionText: "When left == right", optionTag: "A" },
        { optionText: "When segment is zero", optionTag: "B" },
        { optionText: "When value is odd", optionTag: "C" },
        { optionText: "When query is made", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Lazy propagation in Segment Trees helps to:",
      options: [
        { optionText: "Avoid redundant updates", optionTag: "B" },
        { optionText: "Insert fast", optionTag: "C" },
        { optionText: "Improve sorting", optionTag: "A" },
        { optionText: "Detect collisions", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which problem is commonly solved using Segment Trees?",
      options: [
        { optionText: "Range Sum Query", optionTag: "D" },
        { optionText: "In-order traversal", optionTag: "C" },
        { optionText: "Hash collisions", optionTag: "B" },
        { optionText: "Depth calculation", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    }
  ]
};

export default quizData;