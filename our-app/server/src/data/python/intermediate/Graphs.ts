import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Graphs - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Test your knowledge of graph representations, traversal algorithms, and applications using Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Graphs"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which data structure is commonly used to represent a graph?",
      options: [
        { optionText: "Adjacency List", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Queue", optionTag: "C" },
        { optionText: "Linked List", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which Python module provides support for graphs?",
      options: [
        { optionText: "graphlib", optionTag: "A" },
        { optionText: "heapq", optionTag: "B" },
        { optionText: "collections", optionTag: "C" },
        { optionText: "networkx", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which traversal uses a queue for graph exploration?",
      options: [
        { optionText: "BFS", optionTag: "A" },
        { optionText: "DFS", optionTag: "B" },
        { optionText: "Inorder", optionTag: "C" },
        { optionText: "Postorder", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is true about undirected graphs?",
      options: [
        { optionText: "Each edge has a direction", optionTag: "A" },
        { optionText: "Edges have no direction", optionTag: "B" },
        { optionText: "Cannot form cycles", optionTag: "C" },
        { optionText: "Only used for trees", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the space complexity of an adjacency matrix for n nodes?",
      options: [
        { optionText: "O(n²)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(1)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which graph traversal is used to detect cycles in a graph?",
      options: [
        { optionText: "DFS", optionTag: "A" },
        { optionText: "BFS", optionTag: "B" },
        { optionText: "Level Order", optionTag: "C" },
        { optionText: "Inorder", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure is typically used in DFS traversal?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" },
        { optionText: "Heap", optionTag: "C" },
        { optionText: "Tree", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is a graph with all nodes connected directly called?",
      options: [
        { optionText: "Complete Graph", optionTag: "A" },
        { optionText: "Bipartite Graph", optionTag: "B" },
        { optionText: "Tree", optionTag: "C" },
        { optionText: "Disconnected Graph", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these can be used to detect connected components?",
      options: [
        { optionText: "DFS", optionTag: "A" },
        { optionText: "Heap", optionTag: "B" },
        { optionText: "Sorting", optionTag: "C" },
        { optionText: "Binary Search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm finds shortest paths in unweighted graphs?",
      options: [
        { optionText: "BFS", optionTag: "A" },
        { optionText: "DFS", optionTag: "B" },
        { optionText: "Prim's", optionTag: "C" },
        { optionText: "Dijkstra's", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is true about DAGs?",
      options: [
        { optionText: "They have no cycles", optionTag: "A" },
        { optionText: "They are undirected", optionTag: "B" },
        { optionText: "All nodes are leaf nodes", optionTag: "C" },
        { optionText: "They form trees", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method removes a node from a graph in NetworkX?",
      options: [
        { optionText: "del_node()", optionTag: "A" },
        { optionText: "remove_node()", optionTag: "B" },
        { optionText: "pop_node()", optionTag: "C" },
        { optionText: "discard()", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the degree of a node?",
      options: [
        { optionText: "Number of self loops", optionTag: "A" },
        { optionText: "Number of edges connected to it", optionTag: "B" },
        { optionText: "Value stored at the node", optionTag: "C" },
        { optionText: "Number of ancestors", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which Python package is ideal for visualizing graphs?",
      options: [
        { optionText: "matplotlib", optionTag: "A" },
        { optionText: "seaborn", optionTag: "B" },
        { optionText: "networkx", optionTag: "C" },
        { optionText: "pandas", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is an adjacency list?",
      options: [
        { optionText: "Matrix representation of graph", optionTag: "A" },
        { optionText: "List of neighbors for each vertex", optionTag: "B" },
        { optionText: "List of edge weights", optionTag: "C" },
        { optionText: "List of degrees", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following graphs can be represented using dictionaries in Python?",
      options: [
        { optionText: "Undirected only", optionTag: "A" },
        { optionText: "Directed only", optionTag: "B" },
        { optionText: "Both directed and undirected", optionTag: "C" },
        { optionText: "None", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of these statements is true?",
      options: [
        { optionText: "DFS is faster than BFS for shortest path", optionTag: "A" },
        { optionText: "BFS guarantees shortest path in unweighted graphs", optionTag: "B" },
        { optionText: "DFS always finds optimal path", optionTag: "C" },
        { optionText: "DFS uses queue", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the out-degree of a node in a directed graph?",
      options: [
        { optionText: "Number of edges coming in", optionTag: "A" },
        { optionText: "Number of edges going out", optionTag: "B" },
        { optionText: "Sum of all edges", optionTag: "C" },
        { optionText: "Difference between in and out", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which traversal guarantees visiting all nodes?",
      options: [
        { optionText: "DFS", optionTag: "A" },
        { optionText: "BFS", optionTag: "B" },
        { optionText: "Both A and B", optionTag: "C" },
        { optionText: "None of the above", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which function in NetworkX adds a node?",
      options: [
        { optionText: "add_vertex()", optionTag: "A" },
        { optionText: "insert_node()", optionTag: "B" },
        { optionText: "add_node()", optionTag: "C" },
        { optionText: "append()", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    }
  ]
};

export default quizData;