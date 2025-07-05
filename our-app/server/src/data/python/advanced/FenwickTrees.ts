import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Fenwick Trees - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Test your advanced understanding of Binary Indexed Trees (Fenwick Trees).",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Fenwick Trees",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the main purpose of a Fenwick Tree?",
      options: [
        { optionText: "Efficient prefix sum queries", optionTag: "A" },
        { optionText: "Graph traversal", optionTag: "C" },
        { optionText: "String pattern matching", optionTag: "B" },
        { optionText: "Dynamic memory allocation", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the time complexity of a Fenwick Tree update?",
      options: [
        { optionText: "O(log N)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(N)", optionTag: "D" },
        { optionText: "O(log log N)", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following operations is efficient in a Fenwick Tree?",
      options: [
        { optionText: "Prefix sum", optionTag: "C" },
        { optionText: "Random access", optionTag: "D" },
        { optionText: "Matrix multiplication", optionTag: "A" },
        { optionText: "Binary search", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which bitwise operator is essential in Fenwick Tree implementation?",
      options: [
        { optionText: "&", optionTag: "B" },
        { optionText: "|", optionTag: "A" },
        { optionText: "^", optionTag: "C" },
        { optionText: "~", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following can be efficiently handled using Fenwick Trees?",
      options: [
        { optionText: "Prefix sum and point updates", optionTag: "A" },
        { optionText: "Range minimum queries", optionTag: "D" },
        { optionText: "Binary tree balancing", optionTag: "B" },
        { optionText: "Graph coloring", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is another name for Fenwick Tree?",
      options: [
        { optionText: "Binary Indexed Tree", optionTag: "D" },
        { optionText: "AVL Tree", optionTag: "B" },
        { optionText: "Red-Black Tree", optionTag: "A" },
        { optionText: "Trie", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which of the following is false about Fenwick Trees?",
      options: [
        { optionText: "Supports range sum in O(log N)", optionTag: "C" },
        { optionText: "Can handle range updates efficiently", optionTag: "B" },
        { optionText: "Uses bit manipulation", optionTag: "A" },
        { optionText: "Is space efficient", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is required to initialize a Fenwick Tree for N elements?",
      options: [
        { optionText: "An array of size N+1", optionTag: "A" },
        { optionText: "A dictionary", optionTag: "C" },
        { optionText: "A list of trees", optionTag: "B" },
        { optionText: "A graph structure", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "In Python, what data structure is used to implement Fenwick Tree?",
      options: [
        { optionText: "List", optionTag: "B" },
        { optionText: "Queue", optionTag: "C" },
        { optionText: "Set", optionTag: "A" },
        { optionText: "Deque", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which operation increases index by the lowest set bit in Fenwick Tree?",
      options: [
        { optionText: "index += index & -index", optionTag: "D" },
        { optionText: "index += 1", optionTag: "B" },
        { optionText: "index |= index", optionTag: "A" },
        { optionText: "index ^= index", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which of the following statements is true?",
      options: [
        { optionText: "Fenwick Tree requires O(N) memory", optionTag: "C" },
        { optionText: "Fenwick Tree supports dynamic memory", optionTag: "A" },
        { optionText: "Fenwick Tree can't do prefix sum", optionTag: "D" },
        { optionText: "Fenwick Tree is slower than naive methods", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following applications use Fenwick Trees?",
      options: [
        { optionText: "Counting inversions", optionTag: "C" },
        { optionText: "DFS", optionTag: "A" },
        { optionText: "Prim’s Algorithm", optionTag: "B" },
        { optionText: "Union Find", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following can Fenwick Trees NOT do efficiently?",
      options: [
        { optionText: "Range minimum query", optionTag: "A" },
        { optionText: "Prefix sum query", optionTag: "B" },
        { optionText: "Point updates", optionTag: "C" },
        { optionText: "Inversion counting", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What does the 'index & -index' expression return?",
      options: [
        { optionText: "Lowest set bit", optionTag: "B" },
        { optionText: "All 1s", optionTag: "D" },
        { optionText: "Highest set bit", optionTag: "A" },
        { optionText: "Reset bit", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the value at index 0 in Fenwick Tree?",
      options: [
        { optionText: "Unused or 0", optionTag: "A" },
        { optionText: "Sum of all values", optionTag: "B" },
        { optionText: "Maximum element", optionTag: "C" },
        { optionText: "Root node", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "How do you find prefix sum using Fenwick Tree?",
      options: [
        { optionText: "Keep subtracting LSB from index", optionTag: "D" },
        { optionText: "Move to left subtree", optionTag: "B" },
        { optionText: "Use XOR operation", optionTag: "A" },
        { optionText: "Traverse whole array", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Which kind of query is efficient with Fenwick Tree?",
      options: [
        { optionText: "Prefix queries", optionTag: "C" },
        { optionText: "Graph traversal", optionTag: "D" },
        { optionText: "DFS", optionTag: "B" },
        { optionText: "Level order traversal", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Can Fenwick Tree be used for range sum queries?",
      options: [
        { optionText: "Yes, with two prefix sums", optionTag: "A" },
        { optionText: "No", optionTag: "B" },
        { optionText: "Only with BST", optionTag: "C" },
        { optionText: "Only for sorted arrays", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of the following is a limitation of Fenwick Trees?",
      options: [
        { optionText: "Range updates are not efficient", optionTag: "D" },
        { optionText: "Cannot perform XOR", optionTag: "A" },
        { optionText: "Cannot be used in Python", optionTag: "B" },
        { optionText: "Too complex to implement", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
  ],
};

export default quizData;