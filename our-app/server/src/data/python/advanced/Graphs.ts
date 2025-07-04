import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Graphs - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Test your understanding of graph algorithms, representations, and traversal techniques in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Graphs",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which Python library is most commonly used for graph algorithms?",
      options: [
        { optionText: "NumPy", optionTag: "A" },
        { optionText: "networkx", optionTag: "B" },
        { optionText: "SciPy", optionTag: "C" },
        { optionText: "TensorFlow", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "In adjacency matrix representation, what is the time complexity to check the existence of an edge?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n^2)", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which traversal method is best for finding the shortest path in an unweighted graph?",
      options: [
        { optionText: "DFS", optionTag: "A" },
        { optionText: "BFS", optionTag: "B" },
        { optionText: "Dijkstra", optionTag: "C" },
        { optionText: "Bellman-Ford", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following algorithms is used to detect cycles in a directed graph?",
      options: [
        { optionText: "Dijkstra", optionTag: "A" },
        { optionText: "Topological Sort", optionTag: "B" },
        { optionText: "Kruskal", optionTag: "C" },
        { optionText: "Prim", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which data structure is used in DFS traversal of a graph?",
      options: [
        { optionText: "Queue", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Heap", optionTag: "C" },
        { optionText: "Deque", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What is the time complexity of BFS for a graph with V vertices and E edges?",
      options: [
        { optionText: "O(V^2)", optionTag: "A" },
        { optionText: "O(V+E)", optionTag: "B" },
        { optionText: "O(log V)", optionTag: "C" },
        { optionText: "O(E^2)", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which algorithm is used for Minimum Spanning Tree?",
      options: [
        { optionText: "Floyd-Warshall", optionTag: "A" },
        { optionText: "Dijkstra", optionTag: "B" },
        { optionText: "Kruskal", optionTag: "C" },
        { optionText: "Bellman-Ford", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What is the output of a topological sort?",
      options: [
        { optionText: "A tree", optionTag: "A" },
        { optionText: "A cycle", optionTag: "B" },
        { optionText: "A linear ordering", optionTag: "C" },
        { optionText: "A matrix", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following is true for undirected graphs?",
      options: [
        { optionText: "Every edge has direction", optionTag: "A" },
        { optionText: "Degree = In-degree + Out-degree", optionTag: "B" },
        { optionText: "No direction is associated with edges", optionTag: "C" },
        { optionText: "Edges can’t be bidirectional", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "How are edges stored in an adjacency list?",
      options: [
        { optionText: "In a matrix", optionTag: "A" },
        { optionText: "As keys", optionTag: "B" },
        { optionText: "As lists of neighbors", optionTag: "C" },
        { optionText: "In a stack", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which function in networkx is used to add a node to a graph?",
      options: [
        { optionText: "add_vertex()", optionTag: "A" },
        { optionText: "insert_node()", optionTag: "B" },
        { optionText: "add_node()", optionTag: "C" },
        { optionText: "new_node()", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which representation of graphs is more space-efficient for sparse graphs?",
      options: [
        { optionText: "Adjacency matrix", optionTag: "A" },
        { optionText: "Adjacency list", optionTag: "B" },
        { optionText: "Edge list", optionTag: "C" },
        { optionText: "Incidence matrix", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which traversal method can be used to detect connected components?",
      options: [
        { optionText: "DFS", optionTag: "A" },
        { optionText: "Topological Sort", optionTag: "B" },
        { optionText: "Dijkstra", optionTag: "C" },
        { optionText: "Bellman-Ford", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which condition indicates a graph is bipartite?",
      options: [
        { optionText: "Contains odd cycle", optionTag: "A" },
        { optionText: "Can be colored with 2 colors", optionTag: "B" },
        { optionText: "Complete graph", optionTag: "C" },
        { optionText: "Self-loop", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which of the following graphs has all nodes connected directly or indirectly?",
      options: [
        { optionText: "Connected graph", optionTag: "A" },
        { optionText: "Tree", optionTag: "B" },
        { optionText: "DAG", optionTag: "C" },
        { optionText: "Bipartite", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which graph traversal can get stuck in infinite loop without visited set?",
      options: [
        { optionText: "DFS", optionTag: "A" },
        { optionText: "BFS", optionTag: "B" },
        { optionText: "Topological Sort", optionTag: "C" },
        { optionText: "Dijkstra", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What does the `G.edges()` method in networkx return?",
      options: [
        { optionText: "A list of nodes", optionTag: "A" },
        { optionText: "A list of edge tuples", optionTag: "B" },
        { optionText: "A set of attributes", optionTag: "C" },
        { optionText: "Edge weights", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What type of graph has no cycles and is directed?",
      options: [
        { optionText: "Cyclic Graph", optionTag: "A" },
        { optionText: "DAG", optionTag: "B" },
        { optionText: "Undirected Graph", optionTag: "C" },
        { optionText: "Planar Graph", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which edge representation is best for Kruskal’s algorithm?",
      options: [
        { optionText: "Adjacency matrix", optionTag: "A" },
        { optionText: "Adjacency list", optionTag: "B" },
        { optionText: "Edge list", optionTag: "C" },
        { optionText: "Heap", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following is false about graphs?",
      options: [
        { optionText: "Graph can have loops", optionTag: "A" },
        { optionText: "Graph edges can have weights", optionTag: "B" },
        { optionText: "All graphs are trees", optionTag: "C" },
        { optionText: "Graphs may be directed", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    }
  ],
};

export default quizData;