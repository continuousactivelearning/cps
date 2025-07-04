import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Graphs - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "This quiz covers the core concepts of graph theory, including representations, traversals, and applications.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Graphs"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the space complexity of an adjacency matrix for a graph with n vertices?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(n^2)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following is true about undirected graphs?",
      options: [
        { optionText: "Each edge is unidirectional", optionTag: "A" },
        { optionText: "Each edge is bidirectional", optionTag: "B" },
        { optionText: "Edges are weighted", optionTag: "C" },
        { optionText: "They do not contain vertices", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which traversal algorithm uses a queue?",
      options: [
        { optionText: "Depth First Search", optionTag: "A" },
        { optionText: "Breadth First Search", optionTag: "B" },
        { optionText: "Inorder Traversal", optionTag: "C" },
        { optionText: "Postorder Traversal", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What data structure is best for implementing adjacency lists?",
      options: [
        { optionText: "Array", optionTag: "A" },
        { optionText: "Linked List", optionTag: "B" },
        { optionText: "Stack", optionTag: "C" },
        { optionText: "Queue", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How many edges are there in a complete graph with n vertices?",
      options: [
        { optionText: "n", optionTag: "A" },
        { optionText: "n(n-1)/2", optionTag: "B" },
        { optionText: "n^2", optionTag: "C" },
        { optionText: "2n", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which algorithm detects cycles in a directed graph?",
      options: [
        { optionText: "Kruskal's Algorithm", optionTag: "A" },
        { optionText: "DFS with visited & recursion stack", optionTag: "B" },
        { optionText: "BFS", optionTag: "C" },
        { optionText: "Prim's Algorithm", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which traversal is used in Topological Sorting?",
      options: [
        { optionText: "BFS", optionTag: "A" },
        { optionText: "DFS", optionTag: "B" },
        { optionText: "Inorder", optionTag: "C" },
        { optionText: "Postorder", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of these is not a valid graph representation?",
      options: [
        { optionText: "Adjacency Matrix", optionTag: "A" },
        { optionText: "Adjacency List", optionTag: "B" },
        { optionText: "Edge List", optionTag: "C" },
        { optionText: "Pointer List", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is a disconnected graph?",
      options: [
        { optionText: "Graph with no vertices", optionTag: "A" },
        { optionText: "Graph with isolated vertices", optionTag: "B" },
        { optionText: "Graph where every vertex is connected", optionTag: "C" },
        { optionText: "A complete graph", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which traversal is useful in shortest path algorithms like BFS?",
      options: [
        { optionText: "DFS", optionTag: "A" },
        { optionText: "BFS", optionTag: "B" },
        { optionText: "Preorder", optionTag: "C" },
        { optionText: "Postorder", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What does a graph with a cycle mean?",
      options: [
        { optionText: "Vertices form a loop", optionTag: "A" },
        { optionText: "All edges are bidirectional", optionTag: "B" },
        { optionText: "There are isolated vertices", optionTag: "C" },
        { optionText: "Graph is weighted", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these algorithms finds MST?",
      options: [
        { optionText: "Kruskal", optionTag: "A" },
        { optionText: "Dijkstra", optionTag: "B" },
        { optionText: "Floyd-Warshall", optionTag: "C" },
        { optionText: "DFS", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which traversal would be faster in sparse graphs?",
      options: [
        { optionText: "DFS", optionTag: "A" },
        { optionText: "BFS", optionTag: "B" },
        { optionText: "Inorder", optionTag: "C" },
        { optionText: "Postorder", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which class in Java can be used to represent a graph easily?",
      options: [
        { optionText: "ArrayList with HashMap", optionTag: "A" },
        { optionText: "LinkedList only", optionTag: "B" },
        { optionText: "Stack", optionTag: "C" },
        { optionText: "Queue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How many edges in a tree with n vertices?",
      options: [
        { optionText: "n", optionTag: "A" },
        { optionText: "n-1", optionTag: "B" },
        { optionText: "n+1", optionTag: "C" },
        { optionText: "2n", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which graph traversal uses recursion typically?",
      options: [
        { optionText: "BFS", optionTag: "A" },
        { optionText: "DFS", optionTag: "B" },
        { optionText: "Level Order", optionTag: "C" },
        { optionText: "Inorder", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is a DAG?",
      options: [
        { optionText: "Directed Acyclic Graph", optionTag: "A" },
        { optionText: "Data Arrangement Graph", optionTag: "B" },
        { optionText: "Data Access Graph", optionTag: "C" },
        { optionText: "Dual Adjacency Graph", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure is commonly used in BFS?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Array", optionTag: "C" },
        { optionText: "Linked List", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which algorithm works with negative weights?",
      options: [
        { optionText: "Dijkstra", optionTag: "A" },
        { optionText: "Bellman-Ford", optionTag: "B" },
        { optionText: "Prim", optionTag: "C" },
        { optionText: "Kruskal", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the time complexity of BFS in adjacency list?",
      options: [
        { optionText: "O(V^2)", optionTag: "A" },
        { optionText: "O(V + E)", optionTag: "B" },
        { optionText: "O(E log V)", optionTag: "C" },
        { optionText: "O(V)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;