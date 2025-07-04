import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python - Depth-First Search (DFS) - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Basic concepts and behavior of DFS traversal using Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Depth-First Search (DFS)",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which data structure is commonly used in DFS traversal?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Heap", optionTag: "C" },
        { optionText: "Deque", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "DFS explores as far as possible along:",
      options: [
        { optionText: "Each branch before backtracking", optionTag: "C" },
        { optionText: "Level by level", optionTag: "D" },
        { optionText: "Shortest edge first", optionTag: "B" },
        { optionText: "Random edges", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the time complexity of DFS on a graph with V vertices and E edges?",
      options: [
        { optionText: "O(V + E)", optionTag: "B" },
        { optionText: "O(V^2)", optionTag: "C" },
        { optionText: "O(E^2)", optionTag: "D" },
        { optionText: "O(V * E)", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which Python technique is often used for DFS implementation?",
      options: [
        { optionText: "Recursion", optionTag: "A" },
        { optionText: "Loop only", optionTag: "B" },
        { optionText: "Pandas DataFrame", optionTag: "C" },
        { optionText: "List comprehension", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "In DFS, what is marked to avoid revisiting nodes?",
      options: [
        { optionText: "Visited set", optionTag: "D" },
        { optionText: "None", optionTag: "C" },
        { optionText: "Edge weight", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "DFS is best for which type of search problem?",
      options: [
        { optionText: "Path existence", optionTag: "B" },
        { optionText: "Shortest path in unweighted graph", optionTag: "C" },
        { optionText: "Heapify", optionTag: "D" },
        { optionText: "Maximum flow", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "In Python, how is DFS traversal commonly initiated?",
      options: [
        { optionText: "Using recursive function with visited set", optionTag: "C" },
        { optionText: "Using class inheritance", optionTag: "D" },
        { optionText: "With multithreading", optionTag: "A" },
        { optionText: "Using built-in BFS method", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which traversal may go deeper first and later explore siblings?",
      options: [
        { optionText: "DFS", optionTag: "A" },
        { optionText: "BFS", optionTag: "B" },
        { optionText: "Level-order", optionTag: "C" },
        { optionText: "In-order", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "DFS is typically used in which of the following applications?",
      options: [
        { optionText: "Cycle detection in graphs", optionTag: "B" },
        { optionText: "Sorting a list", optionTag: "C" },
        { optionText: "Tree balancing", optionTag: "D" },
        { optionText: "Linked list operations", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which traversal technique works well with recursion?",
      options: [
        { optionText: "DFS", optionTag: "C" },
        { optionText: "BFS", optionTag: "A" },
        { optionText: "Level-order", optionTag: "D" },
        { optionText: "Post-order", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following Python structures can simulate a stack?",
      options: [
        { optionText: "List with append/pop", optionTag: "B" },
        { optionText: "Set with add/remove", optionTag: "C" },
        { optionText: "Dict with keys", optionTag: "A" },
        { optionText: "Deque with popleft", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which is NOT true about DFS?",
      options: [
        { optionText: "DFS can detect cycles", optionTag: "A" },
        { optionText: "DFS always finds shortest path", optionTag: "C" },
        { optionText: "DFS can be implemented using stack", optionTag: "B" },
        { optionText: "DFS is used in topological sorting", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the base condition in a recursive DFS?",
      options: [
        { optionText: "If the node is already visited", optionTag: "C" },
        { optionText: "If the node is equal to root", optionTag: "D" },
        { optionText: "If the node has no edges", optionTag: "B" },
        { optionText: "If the node is a leaf", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What ensures DFS does not go in infinite loops in cyclic graphs?",
      options: [
        { optionText: "Visited tracking", optionTag: "A" },
        { optionText: "Increasing depth only", optionTag: "B" },
        { optionText: "Ignoring leaf nodes", optionTag: "D" },
        { optionText: "Using sorted edges", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which Python keyword is used for recursion?",
      options: [
        { optionText: "def", optionTag: "C" },
        { optionText: "recurse", optionTag: "B" },
        { optionText: "return", optionTag: "A" },
        { optionText: "lambda", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is typically passed to a DFS function?",
      options: [
        { optionText: "Graph, current node, visited set", optionTag: "D" },
        { optionText: "Only graph", optionTag: "A" },
        { optionText: "Only visited list", optionTag: "B" },
        { optionText: "Queue and weight", optionTag: "C" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "How do you avoid revisiting nodes in DFS?",
      options: [
        { optionText: "Maintain a visited set", optionTag: "B" },
        { optionText: "Use a priority queue", optionTag: "A" },
        { optionText: "Ignore all cycles", optionTag: "D" },
        { optionText: "Visit only neighbors with higher value", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "DFS can be used to solve which of the following problems?",
      options: [
        { optionText: "Connected components in graph", optionTag: "A" },
        { optionText: "Hash collision", optionTag: "B" },
        { optionText: "Binary search", optionTag: "D" },
        { optionText: "Balancing BST", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What happens if DFS does not check for visited?",
      options: [
        { optionText: "Infinite recursion in cyclic graphs", optionTag: "C" },
        { optionText: "Faster traversal", optionTag: "B" },
        { optionText: "Stack overflow never occurs", optionTag: "D" },
        { optionText: "It becomes BFS", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the worst-case space complexity of recursive DFS?",
      options: [
        { optionText: "O(V)", optionTag: "A" },
        { optionText: "O(E)", optionTag: "D" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(log V)", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
  ],
};

export default quizData;