import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Graphs - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Evaluate your basic understanding of graphs and their operations in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Graphs"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is a graph in data structures?",
      options: [
        { optionText: "A collection of elements stored in sequence", optionTag: "D" },
        { optionText: "A tree with cycles", optionTag: "A" },
        { optionText: "A collection of nodes connected by edges", optionTag: "B" },
        { optionText: "A directed acyclic tree", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which data structure is commonly used to represent a graph in Python?",
      options: [
        { optionText: "List of tuples", optionTag: "C" },
        { optionText: "Adjacency list", optionTag: "D" },
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which module in Python can be used for graph operations?",
      options: [
        { optionText: "math", optionTag: "C" },
        { optionText: "networkx", optionTag: "B" },
        { optionText: "heapq", optionTag: "A" },
        { optionText: "collections", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is an edge in a graph?",
      options: [
        { optionText: "The height of the graph", optionTag: "C" },
        { optionText: "The element connecting two nodes", optionTag: "A" },
        { optionText: "The label of a node", optionTag: "B" },
        { optionText: "The memory used", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which graph is bidirectional?",
      options: [
        { optionText: "Directed graph", optionTag: "C" },
        { optionText: "Tree", optionTag: "D" },
        { optionText: "Undirected graph", optionTag: "B" },
        { optionText: "Cyclic graph", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What does BFS stand for?",
      options: [
        { optionText: "Breadth Function Search", optionTag: "C" },
        { optionText: "Basic Flow Sort", optionTag: "B" },
        { optionText: "Breadth-First Search", optionTag: "A" },
        { optionText: "Binary First Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm uses a queue for graph traversal?",
      options: [
        { optionText: "BFS", optionTag: "C" },
        { optionText: "DFS", optionTag: "A" },
        { optionText: "Dijkstra", optionTag: "B" },
        { optionText: "Kruskal", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How can cycles be detected in a graph?",
      options: [
        { optionText: "By using two queues", optionTag: "C" },
        { optionText: "Using DFS with visited and recursion stack", optionTag: "B" },
        { optionText: "Using in-order traversal", optionTag: "D" },
        { optionText: "Using a max heap", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which type of graph has weighted edges?",
      options: [
        { optionText: "Simple graph", optionTag: "C" },
        { optionText: "Directed graph", optionTag: "A" },
        { optionText: "Weighted graph", optionTag: "B" },
        { optionText: "Acyclic graph", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of the following is not a valid graph representation?",
      options: [
        { optionText: "Adjacency matrix", optionTag: "C" },
        { optionText: "Adjacency list", optionTag: "A" },
        { optionText: "Array of linked lists", optionTag: "B" },
        { optionText: "Stack of queues", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which traversal is more memory efficient for sparse graphs?",
      options: [
        { optionText: "Inorder traversal", optionTag: "D" },
        { optionText: "Postorder traversal", optionTag: "C" },
        { optionText: "DFS", optionTag: "A" },
        { optionText: "Level-order traversal", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure is used in DFS?",
      options: [
        { optionText: "Heap", optionTag: "D" },
        { optionText: "Stack", optionTag: "C" },
        { optionText: "Queue", optionTag: "A" },
        { optionText: "Linked List", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "A graph without any cycles is called a?",
      options: [
        { optionText: "Directed Graph", optionTag: "B" },
        { optionText: "Complete Graph", optionTag: "C" },
        { optionText: "Acyclic Graph", optionTag: "A" },
        { optionText: "Connected Graph", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How many edges are in a complete undirected graph with n nodes?",
      options: [
        { optionText: "n(n+1)/2", optionTag: "B" },
        { optionText: "n^2", optionTag: "D" },
        { optionText: "n(n-1)/2", optionTag: "C" },
        { optionText: "n", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "In Python, how is a node typically represented in a graph?",
      options: [
        { optionText: "As a string or number key in a dictionary", optionTag: "D" },
        { optionText: "As a tuple", optionTag: "C" },
        { optionText: "As a heap element", optionTag: "B" },
        { optionText: "As a stack entry", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which graph type does not have direction on edges?",
      options: [
        { optionText: "Directed Graph", optionTag: "B" },
        { optionText: "Undirected Graph", optionTag: "A" },
        { optionText: "Weighted Graph", optionTag: "D" },
        { optionText: "Tree", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which structure can be used to implement an adjacency list in Python?",
      options: [
        { optionText: "Set", optionTag: "A" },
        { optionText: "Dictionary with list values", optionTag: "C" },
        { optionText: "List of stacks", optionTag: "B" },
        { optionText: "Heap", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which traversal is not applicable for graphs?",
      options: [
        { optionText: "Preorder", optionTag: "A" },
        { optionText: "BFS", optionTag: "C" },
        { optionText: "DFS", optionTag: "D" },
        { optionText: "Level order", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the main advantage of using adjacency list?",
      options: [
        { optionText: "Easy to sort edges", optionTag: "B" },
        { optionText: "Efficient for dense graphs", optionTag: "C" },
        { optionText: "Efficient space usage for sparse graphs", optionTag: "A" },
        { optionText: "Supports binary search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the degree of a node?",
      options: [
        { optionText: "Number of cycles it is part of", optionTag: "D" },
        { optionText: "Distance from the root", optionTag: "B" },
        { optionText: "Number of edges connected to it", optionTag: "C" },
        { optionText: "Index of the node", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    }
  ]
};

export default quizData;