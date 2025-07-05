import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Segment Trees - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "This quiz tests your understanding of Segment Trees and their operations in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "SegmentTrees",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the time complexity for building a Segment Tree?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the time complexity of a range sum query in a Segment Tree?",
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
      questionText: "What is the space complexity of a Segment Tree for an array of size n?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "B" },
        { optionText: "O(2n)", optionTag: "C" },
        { optionText: "O(4n)", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which of the following is NOT a valid application of Segment Trees?",
      options: [
        { optionText: "Range minimum queries", optionTag: "A" },
        { optionText: "Finding prime numbers", optionTag: "B" },
        { optionText: "Range sum queries", optionTag: "C" },
        { optionText: "Range maximum queries", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is stored in the leaf nodes of a Segment Tree?",
      options: [
        { optionText: "Prefix sums", optionTag: "A" },
        { optionText: "Original array elements", optionTag: "B" },
        { optionText: "Index values", optionTag: "C" },
        { optionText: "All zeros", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which method is used to update a value in Segment Tree?",
      options: [
        { optionText: "build()", optionTag: "A" },
        { optionText: "query()", optionTag: "B" },
        { optionText: "update()", optionTag: "C" },
        { optionText: "insert()", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which traversal is typically used to build a Segment Tree recursively?",
      options: [
        { optionText: "Inorder", optionTag: "A" },
        { optionText: "Postorder", optionTag: "B" },
        { optionText: "Preorder", optionTag: "C" },
        { optionText: "Any DFS", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What operation do internal nodes of a Segment Tree perform?",
      options: [
        { optionText: "Sum or minimum/maximum", optionTag: "A" },
        { optionText: "Multiplication", optionTag: "B" },
        { optionText: "Division", optionTag: "C" },
        { optionText: "None", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Can Segment Trees be used for dynamic arrays (variable size)?",
      options: [
        { optionText: "Yes", optionTag: "A" },
        { optionText: "Only if size is a power of 2", optionTag: "B" },
        { optionText: "No", optionTag: "C" },
        { optionText: "Only in linear time", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What does each node in a Segment Tree represent?",
      options: [
        { optionText: "A single element", optionTag: "A" },
        { optionText: "A range or segment", optionTag: "B" },
        { optionText: "A row of a matrix", optionTag: "C" },
        { optionText: "A stack frame", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the total number of nodes in a Segment Tree (approximately)?",
      options: [
        { optionText: "2n", optionTag: "A" },
        { optionText: "n", optionTag: "B" },
        { optionText: "4n", optionTag: "C" },
        { optionText: "n log n", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is a Segment Tree best suited for?",
      options: [
        { optionText: "Static array with frequent updates and queries", optionTag: "A" },
        { optionText: "Real-time operating systems", optionTag: "B" },
        { optionText: "Randomized algorithms", optionTag: "C" },
        { optionText: "Disk scheduling", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the base condition in the build function of a Segment Tree?",
      options: [
        { optionText: "When left == right", optionTag: "A" },
        { optionText: "When index == 0", optionTag: "B" },
        { optionText: "When height > depth", optionTag: "C" },
        { optionText: "None of the above", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is true about Segment Tree implementation?",
      options: [
        { optionText: "It is implemented using linked list", optionTag: "A" },
        { optionText: "It is implemented using arrays", optionTag: "B" },
        { optionText: "It uses queues for internal nodes", optionTag: "C" },
        { optionText: "None of the above", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which algorithmic technique underlies Segment Trees?",
      options: [
        { optionText: "Greedy", optionTag: "A" },
        { optionText: "Divide and Conquer", optionTag: "B" },
        { optionText: "Dynamic Programming", optionTag: "C" },
        { optionText: "Backtracking", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which operation does NOT have O(log n) complexity in Segment Trees?",
      options: [
        { optionText: "Update", optionTag: "A" },
        { optionText: "Build", optionTag: "B" },
        { optionText: "Query", optionTag: "C" },
        { optionText: "None of the above", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What happens when querying an out-of-bound segment?",
      options: [
        { optionText: "Returns 0 or INF depending on operation", optionTag: "A" },
        { optionText: "Throws an error", optionTag: "B" },
        { optionText: "Returns None", optionTag: "C" },
        { optionText: "Crashes the program", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In segment tree, what does the parent node typically represent?",
      options: [
        { optionText: "Sum or min/max of its children", optionTag: "A" },
        { optionText: "Only left child's value", optionTag: "B" },
        { optionText: "Only right child's value", optionTag: "C" },
        { optionText: "Nothing; it's just a placeholder", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which language construct is commonly used in recursive segment tree implementations?",
      options: [
        { optionText: "Loops", optionTag: "A" },
        { optionText: "Classes", optionTag: "B" },
        { optionText: "Recursion", optionTag: "C" },
        { optionText: "Generators", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which feature allows Segment Tree to be better than naive array methods?",
      options: [
        { optionText: "O(1) update", optionTag: "A" },
        { optionText: "Efficient queries with updates", optionTag: "B" },
        { optionText: "Uses less space", optionTag: "C" },
        { optionText: "No recursion needed", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;