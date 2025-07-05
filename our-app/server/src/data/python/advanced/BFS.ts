import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Breadth-First Search (BFS) - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Assess your deep understanding of BFS traversal in graphs using Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "BFS",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What data structure is primarily used in BFS traversal?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Heap", optionTag: "C" },
        { optionText: "Set", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which graph problem can be efficiently solved using BFS?",
      options: [
        { optionText: "Topological Sorting", optionTag: "A" },
        { optionText: "Cycle Detection in Undirected Graph", optionTag: "B" },
        { optionText: "Finding shortest path in unweighted graph", optionTag: "C" },
        { optionText: "Minimum Spanning Tree", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the time complexity of BFS for a graph with V vertices and E edges?",
      options: [
        { optionText: "O(V + E)", optionTag: "A" },
        { optionText: "O(V^2)", optionTag: "B" },
        { optionText: "O(E log V)", optionTag: "C" },
        { optionText: "O(V log E)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "BFS traversal starts from:",
      options: [
        { optionText: "The vertex with minimum degree", optionTag: "A" },
        { optionText: "A randomly chosen node", optionTag: "B" },
        { optionText: "The root node or specified starting node", optionTag: "C" },
        { optionText: "The last inserted node", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "How does BFS explore nodes?",
      options: [
        { optionText: "Depth-wise first", optionTag: "A" },
        { optionText: "All neighbors level-wise before going deeper", optionTag: "B" },
        { optionText: "Only adjacent vertices", optionTag: "C" },
        { optionText: "In reverse order", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is stored in the queue during BFS traversal?",
      options: [
        { optionText: "Visited vertices", optionTag: "A" },
        { optionText: "Unvisited neighbors", optionTag: "B" },
        { optionText: "Current node and path", optionTag: "C" },
        { optionText: "All previously traversed nodes", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following can detect a cycle in an undirected graph using BFS?",
      options: [
        { optionText: "Checking the degree of each node", optionTag: "A" },
        { optionText: "Using visited array and parent tracking", optionTag: "B" },
        { optionText: "Counting number of edges", optionTag: "C" },
        { optionText: "Using topological sort", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "In BFS, when should a node be marked as visited?",
      options: [
        { optionText: "When it's dequeued", optionTag: "A" },
        { optionText: "When it's enqueued", optionTag: "B" },
        { optionText: "When it's fully explored", optionTag: "C" },
        { optionText: "After its neighbors are enqueued", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "BFS guarantees the shortest path in:",
      options: [
        { optionText: "Weighted graphs", optionTag: "A" },
        { optionText: "Unweighted graphs", optionTag: "B" },
        { optionText: "DAGs only", optionTag: "C" },
        { optionText: "Graphs with negative edges", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "How do you avoid visiting the same node multiple times in BFS?",
      options: [
        { optionText: "Track visited nodes using a set or list", optionTag: "A" },
        { optionText: "Restart BFS after each level", optionTag: "B" },
        { optionText: "Track depth level", optionTag: "C" },
        { optionText: "Limit to one direction", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of the following problems can be solved using multi-source BFS?",
      options: [
        { optionText: "Single-source shortest path", optionTag: "A" },
        { optionText: "Grid distance from multiple sources", optionTag: "B" },
        { optionText: "Tree height", optionTag: "C" },
        { optionText: "Bipartiteness check", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which case causes maximum memory usage in BFS?",
      options: [
        { optionText: "Sparse graphs", optionTag: "A" },
        { optionText: "Highly connected graphs", optionTag: "B" },
        { optionText: "Graphs with cycles", optionTag: "C" },
        { optionText: "Graphs with trees", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which graph representation is efficient for BFS?",
      options: [
        { optionText: "Adjacency list", optionTag: "A" },
        { optionText: "Adjacency matrix", optionTag: "B" },
        { optionText: "Edge list", optionTag: "C" },
        { optionText: "Tree list", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "How can you find all nodes within 'k' distance using BFS?",
      options: [
        { optionText: "Use recursion", optionTag: "A" },
        { optionText: "Track level number during traversal", optionTag: "B" },
        { optionText: "Sort nodes by edge weight", optionTag: "C" },
        { optionText: "Mark visited with depth count", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following is not a typical use case of BFS?",
      options: [
        { optionText: "Shortest path", optionTag: "A" },
        { optionText: "Cycle detection", optionTag: "B" },
        { optionText: "Topological sorting", optionTag: "C" },
        { optionText: "Connected components", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the space complexity of BFS in terms of vertices (V)?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(log V)", optionTag: "B" },
        { optionText: "O(V)", optionTag: "C" },
        { optionText: "O(V^2)", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which traversal is used for level-order traversal in binary trees?",
      options: [
        { optionText: "Inorder", optionTag: "A" },
        { optionText: "Preorder", optionTag: "B" },
        { optionText: "BFS", optionTag: "C" },
        { optionText: "DFS", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which traversal strategy uses a FIFO mechanism?",
      options: [
        { optionText: "DFS", optionTag: "A" },
        { optionText: "BFS", optionTag: "B" },
        { optionText: "Inorder", optionTag: "C" },
        { optionText: "Postorder", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What happens if we do not track visited nodes in BFS?",
      options: [
        { optionText: "Program will crash", optionTag: "A" },
        { optionText: "Nodes will be missed", optionTag: "B" },
        { optionText: "Infinite loop on cycles", optionTag: "C" },
        { optionText: "All nodes will still be visited", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
  ],
};

export default quizData;