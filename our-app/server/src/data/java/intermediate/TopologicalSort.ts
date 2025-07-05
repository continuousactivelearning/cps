import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Topological Sort - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "Test your knowledge on Topological Sorting in directed acyclic graphs (DAGs).",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Topological Sort"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What type of graph is required for Topological Sorting?",
      options: [
        { optionText: "Directed Acyclic Graph", optionTag: "C" },
        { optionText: "Undirected Graph", optionTag: "A" },
        { optionText: "Weighted Graph", optionTag: "B" },
        { optionText: "Complete Graph", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which data structure is often used in Topological Sort implementation?",
      options: [
        { optionText: "Stack", optionTag: "D" },
        { optionText: "Queue", optionTag: "A" },
        { optionText: "Linked List", optionTag: "B" },
        { optionText: "Heap", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which algorithm can be used for Topological Sorting?",
      options: [
        { optionText: "DFS", optionTag: "B" },
        { optionText: "Dijkstra", optionTag: "C" },
        { optionText: "BFS", optionTag: "A" },
        { optionText: "Prim", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which vertex is processed first in DFS-based Topological Sort?",
      options: [
        { optionText: "The last vertex finished", optionTag: "A" },
        { optionText: "The first vertex", optionTag: "C" },
        { optionText: "The vertex with minimum out-degree", optionTag: "B" },
        { optionText: "The vertex with no edges", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of Topological Sort using DFS?",
      options: [
        { optionText: "O(V + E)", optionTag: "C" },
        { optionText: "O(V^2)", optionTag: "A" },
        { optionText: "O(E log V)", optionTag: "D" },
        { optionText: "O(V log E)", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which scenario requires Topological Sort?",
      options: [
        { optionText: "Course prerequisite scheduling", optionTag: "D" },
        { optionText: "Finding MST", optionTag: "A" },
        { optionText: "Shortest path", optionTag: "B" },
        { optionText: "Cycle detection", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Topological Sort is not possible if the graph has:",
      options: [
        { optionText: "A cycle", optionTag: "B" },
        { optionText: "A leaf node", optionTag: "A" },
        { optionText: "A self-loop", optionTag: "D" },
        { optionText: "No edges", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the output of a Topological Sort?",
      options: [
        { optionText: "A linear ordering of vertices", optionTag: "C" },
        { optionText: "Adjacency list", optionTag: "A" },
        { optionText: "Path from source", optionTag: "B" },
        { optionText: "Tree structure", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How many topological sorts can a DAG have?",
      options: [
        { optionText: "Can be more than one", optionTag: "A" },
        { optionText: "Always one", optionTag: "B" },
        { optionText: "Exactly two", optionTag: "D" },
        { optionText: "None", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does in-degree of a vertex represent?",
      options: [
        { optionText: "Number of incoming edges", optionTag: "D" },
        { optionText: "Number of outgoing edges", optionTag: "A" },
        { optionText: "Number of connected nodes", optionTag: "B" },
        { optionText: "Vertex weight", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which of the following is a valid Topological Sort method?",
      options: [
        { optionText: "Kahn’s Algorithm", optionTag: "C" },
        { optionText: "Bellman-Ford", optionTag: "A" },
        { optionText: "Union-Find", optionTag: "D" },
        { optionText: "Prim’s Algorithm", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Topological sort can be used in which type of job scheduling?",
      options: [
        { optionText: "Jobs with dependency constraints", optionTag: "B" },
        { optionText: "Independent jobs", optionTag: "A" },
        { optionText: "Parallel execution jobs", optionTag: "C" },
        { optionText: "Random order", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What happens if you apply topological sort to a cyclic graph?",
      options: [
        { optionText: "It fails or detects a cycle", optionTag: "D" },
        { optionText: "Returns incomplete order", optionTag: "C" },
        { optionText: "Returns all vertices", optionTag: "A" },
        { optionText: "Ignores the cycle", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Kahn’s algorithm uses which technique to process nodes?",
      options: [
        { optionText: "Queue and in-degree zero vertices", optionTag: "C" },
        { optionText: "DFS and recursion", optionTag: "A" },
        { optionText: "Min Heap", optionTag: "D" },
        { optionText: "Max Heap", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which vertex is eligible to be processed in Kahn’s algorithm?",
      options: [
        { optionText: "Vertex with 0 in-degree", optionTag: "B" },
        { optionText: "Vertex with 0 out-degree", optionTag: "C" },
        { optionText: "Vertex with max weight", optionTag: "D" },
        { optionText: "Vertex with max edges", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which data structure helps track in-degree of nodes?",
      options: [
        { optionText: "HashMap", optionTag: "D" },
        { optionText: "Stack", optionTag: "C" },
        { optionText: "Set", optionTag: "A" },
        { optionText: "List", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What causes topological sort to return an error?",
      options: [
        { optionText: "Cycle in the graph", optionTag: "A" },
        { optionText: "Disconnected graph", optionTag: "C" },
        { optionText: "Multiple edges", optionTag: "B" },
        { optionText: "Negative weights", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "DFS-based topological sort pushes node to stack when?",
      options: [
        { optionText: "After visiting all its neighbors", optionTag: "C" },
        { optionText: "Before visiting neighbors", optionTag: "A" },
        { optionText: "Randomly", optionTag: "B" },
        { optionText: "Immediately on entry", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the output of a topological sort if two nodes have same in-degree?",
      options: [
        { optionText: "Any valid order", optionTag: "B" },
        { optionText: "Same order always", optionTag: "C" },
        { optionText: "Error", optionTag: "A" },
        { optionText: "All combinations", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which is not true about topological sorting?",
      options: [
        { optionText: "It applies only to DAG", optionTag: "D" },
        { optionText: "It returns minimum spanning tree", optionTag: "A" },
        { optionText: "It helps in job scheduling", optionTag: "B" },
        { optionText: "Uses DFS or BFS", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;