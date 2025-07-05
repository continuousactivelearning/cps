import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Prim's Algorithm - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Test your knowledge on Prim's Algorithm for Minimum Spanning Trees.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "PrimsAlgorithm"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the primary purpose of Prim's Algorithm?",
      options: [
        { optionText: "To find the Minimum Spanning Tree", optionTag: "A" },
        { optionText: "To sort vertices", optionTag: "B" },
        { optionText: "To traverse the graph in BFS", optionTag: "C" },
        { optionText: "To compute shortest paths", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure optimizes Prim's Algorithm?",
      options: [
        { optionText: "Min Heap", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Queue", optionTag: "C" },
        { optionText: "Deque", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of Prim's Algorithm using a priority queue?",
      options: [
        { optionText: "O(E log V)", optionTag: "A" },
        { optionText: "O(VE)", optionTag: "B" },
        { optionText: "O(V^2)", optionTag: "C" },
        { optionText: "O(E^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Prim's Algorithm always starts from:",
      options: [
        { optionText: "An arbitrary node", optionTag: "A" },
        { optionText: "Node with smallest value", optionTag: "B" },
        { optionText: "Central node", optionTag: "C" },
        { optionText: "Leaf node", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In Prim's Algorithm, what is updated during each iteration?",
      options: [
        { optionText: "Minimum edge weight to connect a new vertex", optionTag: "A" },
        { optionText: "Total number of cycles", optionTag: "B" },
        { optionText: "In-degree of each vertex", optionTag: "C" },
        { optionText: "Topological order", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What kind of graph is required for Prim's Algorithm?",
      options: [
        { optionText: "Connected, weighted, undirected graph", optionTag: "A" },
        { optionText: "Directed graph", optionTag: "B" },
        { optionText: "Unweighted graph", optionTag: "C" },
        { optionText: "Cyclic graph", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if the graph is disconnected?",
      options: [
        { optionText: "Prim's algorithm cannot generate MST", optionTag: "A" },
        { optionText: "It creates multiple MSTs", optionTag: "B" },
        { optionText: "It restarts from zero", optionTag: "C" },
        { optionText: "It removes all edges", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How does Prim's Algorithm select the next edge?",
      options: [
        { optionText: "Based on minimum edge weight", optionTag: "A" },
        { optionText: "Randomly", optionTag: "B" },
        { optionText: "Alphabetical order", optionTag: "C" },
        { optionText: "Based on DFS", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm is Prim's Algorithm similar to?",
      options: [
        { optionText: "Dijkstra's Algorithm", optionTag: "A" },
        { optionText: "BFS", optionTag: "B" },
        { optionText: "DFS", optionTag: "C" },
        { optionText: "Floyd-Warshall", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the base case for Prim's Algorithm?",
      options: [
        { optionText: "MST starts with one node and grows", optionTag: "A" },
        { optionText: "All vertices are visited first", optionTag: "B" },
        { optionText: "All nodes have equal weight", optionTag: "C" },
        { optionText: "Graph is a tree", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if two edges have the same weight?",
      options: [
        { optionText: "Either edge can be chosen", optionTag: "A" },
        { optionText: "Algorithm fails", optionTag: "B" },
        { optionText: "Larger edge is always chosen", optionTag: "C" },
        { optionText: "Smaller edge is removed", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is true for Prim's Algorithm?",
      options: [
        { optionText: "It never forms a cycle", optionTag: "A" },
        { optionText: "It forms at least one cycle", optionTag: "B" },
        { optionText: "It works only on trees", optionTag: "C" },
        { optionText: "It sorts the graph", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Prim's algorithm can be implemented using which strategy?",
      options: [
        { optionText: "Greedy", optionTag: "A" },
        { optionText: "Divide and Conquer", optionTag: "B" },
        { optionText: "Backtracking", optionTag: "C" },
        { optionText: "Dynamic Programming", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is stored in the priority queue during Prim's Algorithm?",
      options: [
        { optionText: "Vertices and their edge weights", optionTag: "A" },
        { optionText: "DFS sequence", optionTag: "B" },
        { optionText: "All visited nodes", optionTag: "C" },
        { optionText: "Edge count", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which one is **not** required in Prim's implementation?",
      options: [
        { optionText: "Visited array", optionTag: "A" },
        { optionText: "Graph matrix/list", optionTag: "B" },
        { optionText: "Path reconstruction list", optionTag: "C" },
        { optionText: "Priority queue or heap", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the space complexity of Prim's Algorithm?",
      options: [
        { optionText: "O(V + E)", optionTag: "A" },
        { optionText: "O(E^2)", optionTag: "B" },
        { optionText: "O(V^3)", optionTag: "C" },
        { optionText: "O(log V)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is MST?",
      options: [
        { optionText: "Minimum Spanning Tree", optionTag: "A" },
        { optionText: "Maximum Spanning Tree", optionTag: "B" },
        { optionText: "Multi-Spanning Tree", optionTag: "C" },
        { optionText: "Minimum Search Tree", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following Python libraries can be used to simulate Prim's Algorithm?",
      options: [
        { optionText: "heapq", optionTag: "A" },
        { optionText: "collections", optionTag: "B" },
        { optionText: "math", optionTag: "C" },
        { optionText: "itertools", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "When does Prim's algorithm terminate?",
      options: [
        { optionText: "When all vertices are included in MST", optionTag: "A" },
        { optionText: "After first edge is added", optionTag: "B" },
        { optionText: "When weight is maximized", optionTag: "C" },
        { optionText: "When cycles are formed", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Prim's algorithm assumes which property of graphs?",
      options: [
        { optionText: "Connected and weighted", optionTag: "A" },
        { optionText: "Unweighted and directed", optionTag: "B" },
        { optionText: "Acyclic", optionTag: "C" },
        { optionText: "Disconnected", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;
