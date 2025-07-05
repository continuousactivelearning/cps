import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Prim's Algorithm - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Test your proficiency in Prim's Algorithm for Minimum Spanning Tree.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "PrimsAlgorithm",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Prim's algorithm is used to find:",
      options: [
        { optionText: "Shortest path", optionTag: "A" },
        { optionText: "Minimum Spanning Tree", optionTag: "B" },
        { optionText: "Maximum flow", optionTag: "C" },
        { optionText: "Topological order", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which data structure helps to efficiently pick the minimum edge in Prim's algorithm?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Heap (Priority Queue)", optionTag: "C" },
        { optionText: "Set", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the time complexity of Prim's algorithm using a binary heap?",
      options: [
        { optionText: "O(E log V)", optionTag: "A" },
        { optionText: "O(V^2)", optionTag: "B" },
        { optionText: "O(E)", optionTag: "C" },
        { optionText: "O(V)", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Prim's algorithm starts with:",
      options: [
        { optionText: "Minimum edge", optionTag: "A" },
        { optionText: "Random edge", optionTag: "B" },
        { optionText: "An arbitrary node", optionTag: "C" },
        { optionText: "All edges", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Can Prim's algorithm handle disconnected graphs?",
      options: [
        { optionText: "Yes, always", optionTag: "A" },
        { optionText: "Only if modified", optionTag: "B" },
        { optionText: "No", optionTag: "C" },
        { optionText: "Only with DFS", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Prim's algorithm always produces:",
      options: [
        { optionText: "Shortest path tree", optionTag: "A" },
        { optionText: "Breadth-first tree", optionTag: "B" },
        { optionText: "Minimum spanning tree", optionTag: "C" },
        { optionText: "Topological tree", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the stopping condition for Prim's algorithm?",
      options: [
        { optionText: "When all edges are visited", optionTag: "A" },
        { optionText: "When all vertices are included", optionTag: "B" },
        { optionText: "When max weight is reached", optionTag: "C" },
        { optionText: "When all leaf nodes are included", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which graph representation works best for Prim's using heaps?",
      options: [
        { optionText: "Adjacency list", optionTag: "A" },
        { optionText: "Adjacency matrix", optionTag: "B" },
        { optionText: "Incidence matrix", optionTag: "C" },
        { optionText: "Edge list", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which operation is most frequent in Prim's algorithm?",
      options: [
        { optionText: "Push to stack", optionTag: "A" },
        { optionText: "Edge comparison", optionTag: "B" },
        { optionText: "Decrease key", optionTag: "C" },
        { optionText: "Find neighbors", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Prim's algorithm works on which type of graph?",
      options: [
        { optionText: "Directed", optionTag: "A" },
        { optionText: "Undirected", optionTag: "B" },
        { optionText: "Multigraph", optionTag: "C" },
        { optionText: "Both directed and undirected", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What ensures correctness of Prim's algorithm?",
      options: [
        { optionText: "Greedy strategy and cut property", optionTag: "A" },
        { optionText: "Backtracking", optionTag: "B" },
        { optionText: "Dynamic programming", optionTag: "C" },
        { optionText: "Divide and conquer", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Prim's algorithm belongs to which algorithmic paradigm?",
      options: [
        { optionText: "Greedy", optionTag: "A" },
        { optionText: "Backtracking", optionTag: "B" },
        { optionText: "Dynamic programming", optionTag: "C" },
        { optionText: "Brute force", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the weight of the MST after Prim's execution?",
      options: [
        { optionText: "Sum of all edge weights", optionTag: "A" },
        { optionText: "Sum of weights in MST", optionTag: "B" },
        { optionText: "Max edge weight", optionTag: "C" },
        { optionText: "Sum of vertex values", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which Python module helps implement a min-heap?",
      options: [
        { optionText: "heapq", optionTag: "A" },
        { optionText: "bisect", optionTag: "B" },
        { optionText: "queue", optionTag: "C" },
        { optionText: "math", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What does the heap store in Prim's algorithm?",
      options: [
        { optionText: "Vertices only", optionTag: "A" },
        { optionText: "Edges with weights", optionTag: "B" },
        { optionText: "Visited status", optionTag: "C" },
        { optionText: "Adjacency matrix", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "In Python, how are visited nodes tracked?",
      options: [
        { optionText: "Set or list", optionTag: "A" },
        { optionText: "Dictionary", optionTag: "B" },
        { optionText: "Queue", optionTag: "C" },
        { optionText: "Stack", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which step ensures Prim's greedy nature?",
      options: [
        { optionText: "Selecting lightest edge to unvisited vertex", optionTag: "A" },
        { optionText: "DFS", optionTag: "B" },
        { optionText: "Selecting max edge", optionTag: "C" },
        { optionText: "Backtracking when no edge found", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the condition for adding a node to MST?",
      options: [
        { optionText: "Edge is unvisited", optionTag: "A" },
        { optionText: "Node is not in MST", optionTag: "B" },
        { optionText: "Node is in MST", optionTag: "C" },
        { optionText: "Minimum degree", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Prim's algorithm can result in different MSTs depending on:",
      options: [
        { optionText: "Start node and equal edge weights", optionTag: "A" },
        { optionText: "Graph type", optionTag: "B" },
        { optionText: "Graph direction", optionTag: "C" },
        { optionText: "Vertex labels", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is true about the MST obtained using Prim's?",
      options: [
        { optionText: "It is always unique", optionTag: "A" },
        { optionText: "It is same as Dijkstra's tree", optionTag: "B" },
        { optionText: "It contains V-1 edges", optionTag: "C" },
        { optionText: "It is a DAG", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
  ],
};

export default quizData;
