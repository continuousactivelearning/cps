import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Prim's Algorithm - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "Test your knowledge of Prim's Algorithm, a greedy method to find the Minimum Spanning Tree (MST) in a weighted undirected graph.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Prim's Algorithm"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Prim's algorithm is used to find:",
      options: [
        { optionText: "All pairs shortest path", optionTag: "A" },
        { optionText: "Minimum spanning tree", optionTag: "B" },
        { optionText: "Single source shortest path", optionTag: "C" },
        { optionText: "Maximum spanning tree", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which data structure is typically used in efficient implementations of Prim's algorithm?",
      options: [
        { optionText: "Stack", optionTag: "C" },
        { optionText: "Hash Table", optionTag: "A" },
        { optionText: "Binary Heap / Priority Queue", optionTag: "D" },
        { optionText: "Deque", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the time complexity of Prim’s algorithm using an adjacency matrix and simple array?",
      options: [
        { optionText: "O(V log V)", optionTag: "B" },
        { optionText: "O(V^2)", optionTag: "C" },
        { optionText: "O(E log V)", optionTag: "A" },
        { optionText: "O(E^2)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Prim's algorithm starts with:",
      options: [
        { optionText: "An arbitrary vertex", optionTag: "A" },
        { optionText: "The smallest edge", optionTag: "C" },
        { optionText: "A leaf node", optionTag: "D" },
        { optionText: "The center node", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Prim’s algorithm is a _____ algorithm.",
      options: [
        { optionText: "Greedy", optionTag: "D" },
        { optionText: "Divide and Conquer", optionTag: "C" },
        { optionText: "Dynamic Programming", optionTag: "A" },
        { optionText: "Backtracking", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What type of graph is required for Prim's algorithm?",
      options: [
        { optionText: "Undirected weighted graph", optionTag: "C" },
        { optionText: "Directed graph only", optionTag: "A" },
        { optionText: "Unweighted graph", optionTag: "B" },
        { optionText: "Complete graph", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What happens if the graph is not connected?",
      options: [
        { optionText: "The algorithm gives incorrect output", optionTag: "A" },
        { optionText: "MST is not possible", optionTag: "B" },
        { optionText: "The output will be a forest", optionTag: "C" },
        { optionText: "The program crashes", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "In Java, which interface is commonly used to implement a priority queue?",
      options: [
        { optionText: "Map", optionTag: "B" },
        { optionText: "List", optionTag: "C" },
        { optionText: "Queue", optionTag: "D" },
        { optionText: "PriorityQueue", optionTag: "A" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which edge is selected next in Prim's algorithm?",
      options: [
        { optionText: "The one that connects to an already included vertex", optionTag: "C" },
        { optionText: "The maximum weighted edge", optionTag: "D" },
        { optionText: "Any adjacent edge", optionTag: "B" },
        { optionText: "The one with minimum weight from a visited vertex", optionTag: "A" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following graph representations is best for dense graphs in Prim's algorithm?",
      options: [
        { optionText: "Adjacency matrix", optionTag: "B" },
        { optionText: "Adjacency list", optionTag: "A" },
        { optionText: "Edge list", optionTag: "D" },
        { optionText: "Compressed list", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Prim's algorithm guarantees an MST only when the graph is:",
      options: [
        { optionText: "Directed", optionTag: "D" },
        { optionText: "Unweighted", optionTag: "B" },
        { optionText: "Weighted and connected", optionTag: "A" },
        { optionText: "Has loops", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Prim's algorithm can be terminated early when:",
      options: [
        { optionText: "MST has V–1 edges", optionTag: "C" },
        { optionText: "All edges are processed", optionTag: "D" },
        { optionText: "All nodes are unvisited", optionTag: "A" },
        { optionText: "Heap is full", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which vertex does Prim’s algorithm visit next?",
      options: [
        { optionText: "One with least weight edge to visited set", optionTag: "C" },
        { optionText: "Random node", optionTag: "D" },
        { optionText: "One farthest from root", optionTag: "A" },
        { optionText: "Already visited node", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Prim's algorithm is most similar to:",
      options: [
        { optionText: "Bellman-Ford", optionTag: "A" },
        { optionText: "Dijkstra’s algorithm", optionTag: "B" },
        { optionText: "DFS", optionTag: "D" },
        { optionText: "Binary search", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What does Prim’s algorithm minimize?",
      options: [
        { optionText: "Number of vertices", optionTag: "A" },
        { optionText: "Total edge weights", optionTag: "B" },
        { optionText: "Graph diameter", optionTag: "C" },
        { optionText: "Degree of vertices", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What happens if all edge weights are equal?",
      options: [
        { optionText: "Any MST can be returned", optionTag: "C" },
        { optionText: "Prim’s fails", optionTag: "D" },
        { optionText: "Result is undefined", optionTag: "B" },
        { optionText: "It takes longer to compute", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "In Prim’s algorithm, how is a cycle avoided?",
      options: [
        { optionText: "Cycle detection", optionTag: "D" },
        { optionText: "Backtracking", optionTag: "A" },
        { optionText: "Visited set is maintained", optionTag: "C" },
        { optionText: "DFS check", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of these is not an MST algorithm?",
      options: [
        { optionText: "Prim's", optionTag: "A" },
        { optionText: "Kruskal's", optionTag: "B" },
        { optionText: "Dijkstra’s", optionTag: "C" },
        { optionText: "Borůvka's", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "The priority queue in Java uses which internal structure?",
      options: [
        { optionText: "Min heap", optionTag: "B" },
        { optionText: "AVL Tree", optionTag: "A" },
        { optionText: "Max heap", optionTag: "D" },
        { optionText: "Queue", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Prim's algorithm works best when:",
      options: [
        { optionText: "Graph is sparse", optionTag: "C" },
        { optionText: "Graph is dense", optionTag: "D" },
        { optionText: "Graph is a DAG", optionTag: "A" },
        { optionText: "Graph is unconnected", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    }
  ]
};

export default quizData;