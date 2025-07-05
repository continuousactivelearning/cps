import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Dijkstra's Algorithm - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "Test your knowledge of Dijkstra's shortest path algorithm in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "DijkstrasAlgorithm"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What does Dijkstra's algorithm find?",
      options: [
        { optionText: "Shortest path from source to all vertices", optionTag: "A" },
        { optionText: "Longest path in a graph", optionTag: "B" },
        { optionText: "Minimum spanning tree", optionTag: "C" },
        { optionText: "Cycle in a graph", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What data structure is commonly used in Dijkstra's algorithm?",
      options: [
        { optionText: "Priority Queue", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Linked List", optionTag: "C" },
        { optionText: "Deque", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of Dijkstra's algorithm using a min-heap?",
      options: [
        { optionText: "O((V + E) log V)", optionTag: "C" },
        { optionText: "O(VE)", optionTag: "B" },
        { optionText: "O(V^2)", optionTag: "D" },
        { optionText: "O(E log V)", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Can Dijkstra's algorithm handle negative weights?",
      options: [
        { optionText: "No", optionTag: "A" },
        { optionText: "Yes, always", optionTag: "B" },
        { optionText: "Only on trees", optionTag: "C" },
        { optionText: "Only with BFS", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Dijkstra's algorithm initializes the source distance as:",
      options: [
        { optionText: "0", optionTag: "B" },
        { optionText: "Infinity", optionTag: "A" },
        { optionText: "-1", optionTag: "C" },
        { optionText: "1", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which graph type is best for Dijkstra's algorithm?",
      options: [
        { optionText: "Weighted graph with non-negative edges", optionTag: "D" },
        { optionText: "Unweighted graph", optionTag: "B" },
        { optionText: "Negative weighted graph", optionTag: "A" },
        { optionText: "Directed acyclic graph", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is used to track visited vertices?",
      options: [
        { optionText: "Boolean array", optionTag: "A" },
        { optionText: "Priority queue", optionTag: "C" },
        { optionText: "HashMap", optionTag: "B" },
        { optionText: "Queue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is updated in every iteration of Dijkstra's algorithm?",
      options: [
        { optionText: "Shortest distance of neighbor vertices", optionTag: "C" },
        { optionText: "Edge weight", optionTag: "B" },
        { optionText: "Total number of edges", optionTag: "D" },
        { optionText: "Node colors", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which Java class is commonly used for min-heap?",
      options: [
        { optionText: "PriorityQueue", optionTag: "D" },
        { optionText: "HashSet", optionTag: "A" },
        { optionText: "TreeMap", optionTag: "C" },
        { optionText: "Deque", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Dijkstra's algorithm assumes:",
      options: [
        { optionText: "No negative weights", optionTag: "C" },
        { optionText: "Graph is cyclic", optionTag: "B" },
        { optionText: "No cycles", optionTag: "A" },
        { optionText: "Disconnected graph", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "If a node is unreachable, its distance is:",
      options: [
        { optionText: "Infinity", optionTag: "B" },
        { optionText: "-1", optionTag: "A" },
        { optionText: "0", optionTag: "C" },
        { optionText: "Maximum weight", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which traversal technique is used in Dijkstra's algorithm?",
      options: [
        { optionText: "Greedy approach", optionTag: "C" },
        { optionText: "BFS", optionTag: "A" },
        { optionText: "DFS", optionTag: "B" },
        { optionText: "Backtracking", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which component holds distance values in Dijkstra?",
      options: [
        { optionText: "Distance array", optionTag: "A" },
        { optionText: "Graph object", optionTag: "B" },
        { optionText: "Stack", optionTag: "C" },
        { optionText: "Queue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which real-life application uses Dijkstra?",
      options: [
        { optionText: "Google Maps", optionTag: "D" },
        { optionText: "Email systems", optionTag: "A" },
        { optionText: "Compiler", optionTag: "B" },
        { optionText: "Text editor", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "In Java, how do you compare two distances in a PriorityQueue?",
      options: [
        { optionText: "Using Comparator", optionTag: "C" },
        { optionText: "Using equals()", optionTag: "A" },
        { optionText: "Using hashCode()", optionTag: "B" },
        { optionText: "Using length()", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which loop controls vertex selection in Dijkstra?",
      options: [
        { optionText: "While loop over queue", optionTag: "A" },
        { optionText: "Do-while", optionTag: "B" },
        { optionText: "Recursion", optionTag: "C" },
        { optionText: "For loop on list", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Dijkstra algorithm fails in:",
      options: [
        { optionText: "Negative weight graphs", optionTag: "C" },
        { optionText: "Undirected graphs", optionTag: "B" },
        { optionText: "Cyclic graphs", optionTag: "D" },
        { optionText: "Sparse graphs", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Dijkstra's algorithm guarantees:",
      options: [
        { optionText: "Shortest path from source", optionTag: "A" },
        { optionText: "Longest path", optionTag: "B" },
        { optionText: "Maximum flow", optionTag: "C" },
        { optionText: "Cycle detection", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if you re-visit a node?",
      options: [
        { optionText: "It is skipped if already visited", optionTag: "B" },
        { optionText: "It throws exception", optionTag: "A" },
        { optionText: "It restarts algorithm", optionTag: "C" },
        { optionText: "Nothing changes", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the base condition in Dijkstra's?",
      options: [
        { optionText: "Source node distance = 0", optionTag: "C" },
        { optionText: "All nodes visited", optionTag: "A" },
        { optionText: "Queue is empty", optionTag: "B" },
        { optionText: "Edge count = vertex count", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    }
  ]
};

export default quizData;