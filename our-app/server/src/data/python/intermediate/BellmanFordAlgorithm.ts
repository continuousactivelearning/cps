import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Bellman-Ford Algorithm - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Evaluate your understanding of the Bellman-Ford shortest path algorithm in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "BellmanFordAlgorithm"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which type of graphs can Bellman-Ford handle that Dijkstra’s cannot?",
      options: [
        { optionText: "Graphs with negative edge weights", optionTag: "A" },
        { optionText: "Graphs with cycles", optionTag: "B" },
        { optionText: "Directed acyclic graphs", optionTag: "C" },
        { optionText: "Unweighted graphs", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of the Bellman-Ford algorithm?",
      options: [
        { optionText: "O(VE)", optionTag: "A" },
        { optionText: "O(V^2)", optionTag: "B" },
        { optionText: "O(E log V)", optionTag: "C" },
        { optionText: "O(V+E)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How many times are edges relaxed in the Bellman-Ford algorithm?",
      options: [
        { optionText: "V - 1 times", optionTag: "A" },
        { optionText: "V times", optionTag: "B" },
        { optionText: "E times", optionTag: "C" },
        { optionText: "E - 1 times", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does Bellman-Ford detect that Dijkstra’s does not?",
      options: [
        { optionText: "Negative weight cycles", optionTag: "A" },
        { optionText: "Shortest distance", optionTag: "B" },
        { optionText: "Minimum spanning tree", optionTag: "C" },
        { optionText: "Strongly connected components", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is returned if a negative cycle is detected?",
      options: [
        { optionText: "An error or indication of the cycle", optionTag: "A" },
        { optionText: "Longest path", optionTag: "B" },
        { optionText: "0", optionTag: "C" },
        { optionText: "Infinite distance array", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which step is unique to the Bellman-Ford algorithm?",
      options: [
        { optionText: "Cycle detection after edge relaxations", optionTag: "A" },
        { optionText: "Using a priority queue", optionTag: "B" },
        { optionText: "Building a heap", optionTag: "C" },
        { optionText: "Using recursion", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which type of graph representation is best for Bellman-Ford?",
      options: [
        { optionText: "Edge list", optionTag: "A" },
        { optionText: "Adjacency matrix", optionTag: "B" },
        { optionText: "Adjacency list", optionTag: "C" },
        { optionText: "Tree", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which Python data structure is typically used to represent the graph for Bellman-Ford?",
      options: [
        { optionText: "List of tuples for edges", optionTag: "A" },
        { optionText: "Set", optionTag: "B" },
        { optionText: "Queue", optionTag: "C" },
        { optionText: "Dictionary of strings", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the initial value of distances in Bellman-Ford?",
      options: [
        { optionText: "Infinity except the source (0)", optionTag: "A" },
        { optionText: "Zero for all nodes", optionTag: "B" },
        { optionText: "All set to -1", optionTag: "C" },
        { optionText: "Equal to number of vertices", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is true about Bellman-Ford?",
      options: [
        { optionText: "It can be slower than Dijkstra’s for dense graphs", optionTag: "A" },
        { optionText: "It’s faster than DFS", optionTag: "B" },
        { optionText: "It uses a stack", optionTag: "C" },
        { optionText: "It always returns shortest path regardless of weights", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the stopping condition for Bellman-Ford?",
      options: [
        { optionText: "After V - 1 iterations or no change", optionTag: "A" },
        { optionText: "When all nodes are visited once", optionTag: "B" },
        { optionText: "When distance is less than threshold", optionTag: "C" },
        { optionText: "When cycle is found", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these real-world problems use Bellman-Ford?",
      options: [
        { optionText: "Routing protocols like RIP", optionTag: "A" },
        { optionText: "Sorting emails", optionTag: "B" },
        { optionText: "Compiling source code", optionTag: "C" },
        { optionText: "UI animations", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will happen if Bellman-Ford is applied on a graph with negative weight cycle?",
      options: [
        { optionText: "It will detect and report the cycle", optionTag: "A" },
        { optionText: "It will crash", optionTag: "B" },
        { optionText: "It will loop infinitely", optionTag: "C" },
        { optionText: "It will remove the cycle", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which loop structure is used in Bellman-Ford’s core implementation?",
      options: [
        { optionText: "Nested for-loops", optionTag: "A" },
        { optionText: "While loops", optionTag: "B" },
        { optionText: "Recursion", optionTag: "C" },
        { optionText: "Do-while loop", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does the edge relaxation step do?",
      options: [
        { optionText: "Updates distance if shorter path is found", optionTag: "A" },
        { optionText: "Removes the edge", optionTag: "B" },
        { optionText: "Adds a node to the queue", optionTag: "C" },
        { optionText: "Changes edge direction", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What data structure is used to hold shortest distances in Python?",
      options: [
        { optionText: "List or dictionary", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Set", optionTag: "C" },
        { optionText: "Heap", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What should be checked after the (V-1) iterations?",
      options: [
        { optionText: "If any edge can still be relaxed", optionTag: "A" },
        { optionText: "If all edges were removed", optionTag: "B" },
        { optionText: "If graph is bipartite", optionTag: "C" },
        { optionText: "If graph is weighted", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which component tracks the current shortest distance to a node?",
      options: [
        { optionText: "Distance array", optionTag: "A" },
        { optionText: "Graph matrix", optionTag: "B" },
        { optionText: "Stack", optionTag: "C" },
        { optionText: "Visited list", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does V represent in the complexity formula?",
      options: [
        { optionText: "Number of vertices", optionTag: "A" },
        { optionText: "Number of edges", optionTag: "B" },
        { optionText: "Weight of node", optionTag: "C" },
        { optionText: "Traversal speed", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Bellman-Ford guarantees the shortest path in which scenario?",
      options: [
        { optionText: "All edge weights are non-positive or negative cycle is absent", optionTag: "A" },
        { optionText: "All edge weights are positive", optionTag: "B" },
        { optionText: "Graph is undirected", optionTag: "C" },
        { optionText: "Graph is cyclic", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;