import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Prim's Algorithm - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "Assess your understanding of Prim's algorithm for Minimum Spanning Tree (MST) construction.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "PrimsAlgorithm"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the main purpose of Prim's algorithm?",
      options: [
        { optionText: "To find the Minimum Spanning Tree", optionTag: "C" },
        { optionText: "To sort edges", optionTag: "A" },
        { optionText: "To find the shortest path", optionTag: "B" },
        { optionText: "To detect cycles", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which data structure is commonly used in Prim's algorithm for efficient edge selection?",
      options: [
        { optionText: "Min Heap", optionTag: "D" },
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "C" },
        { optionText: "Linked List", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the time complexity of Prim's algorithm using Min Heap and Adjacency List?",
      options: [
        { optionText: "O(E log V)", optionTag: "B" },
        { optionText: "O(V^2)", optionTag: "C" },
        { optionText: "O(V log E)", optionTag: "A" },
        { optionText: "O(E^2)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Prim's algorithm is a type of which algorithmic approach?",
      options: [
        { optionText: "Greedy", optionTag: "A" },
        { optionText: "Divide and Conquer", optionTag: "C" },
        { optionText: "Dynamic Programming", optionTag: "D" },
        { optionText: "Backtracking", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which condition must be met for Prim's algorithm to work correctly?",
      options: [
        { optionText: "The graph must be connected", optionTag: "B" },
        { optionText: "The graph must be directed", optionTag: "A" },
        { optionText: "The graph must be weighted negatively", optionTag: "C" },
        { optionText: "The graph must be a DAG", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which node does Prim's algorithm start with?",
      options: [
        { optionText: "Any arbitrary node", optionTag: "C" },
        { optionText: "The node with the smallest degree", optionTag: "D" },
        { optionText: "The leaf node", optionTag: "A" },
        { optionText: "The central node", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following Java classes is useful for implementing a priority queue in Prim's algorithm?",
      options: [
        { optionText: "PriorityQueue", optionTag: "A" },
        { optionText: "LinkedList", optionTag: "C" },
        { optionText: "HashMap", optionTag: "D" },
        { optionText: "Stack", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Prim's algorithm selects edges based on what?",
      options: [
        { optionText: "Minimum edge weight connecting to MST", optionTag: "B" },
        { optionText: "Maximum edge weight", optionTag: "C" },
        { optionText: "Shortest path from source", optionTag: "A" },
        { optionText: "All incident edges", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In an n-node connected graph, the MST produced by Prim's algorithm has how many edges?",
      options: [
        { optionText: "n - 1", optionTag: "C" },
        { optionText: "n", optionTag: "A" },
        { optionText: "2n", optionTag: "D" },
        { optionText: "n^2", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How are cycles avoided in Prim's algorithm?",
      options: [
        { optionText: "By keeping track of visited nodes", optionTag: "D" },
        { optionText: "By checking adjacency list repeatedly", optionTag: "B" },
        { optionText: "By discarding higher weighted edges", optionTag: "A" },
        { optionText: "By using backtracking", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which graph representation is best suited for Prim's algorithm with Min Heap?",
      options: [
        { optionText: "Adjacency List", optionTag: "B" },
        { optionText: "Adjacency Matrix", optionTag: "A" },
        { optionText: "Incidence Matrix", optionTag: "D" },
        { optionText: "Edge List", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Prim's algorithm stops when:",
      options: [
        { optionText: "All vertices are included in MST", optionTag: "C" },
        { optionText: "All edges are visited", optionTag: "A" },
        { optionText: "Heap becomes empty", optionTag: "D" },
        { optionText: "Graph is disconnected", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Can Prim's algorithm be applied to disconnected graphs?",
      options: [
        { optionText: "No", optionTag: "D" },
        { optionText: "Yes", optionTag: "B" },
        { optionText: "Only if all weights are positive", optionTag: "C" },
        { optionText: "Only on DAGs", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "If all edge weights are equal, what is the nature of the MST returned by Prim's algorithm?",
      options: [
        { optionText: "Any spanning tree", optionTag: "A" },
        { optionText: "The one with maximum leaves", optionTag: "B" },
        { optionText: "A cycle", optionTag: "C" },
        { optionText: "Unique MST", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is a prerequisite for applying Prim's algorithm?",
      options: [
        { optionText: "Graph must be connected and weighted", optionTag: "C" },
        { optionText: "Graph must be directed", optionTag: "D" },
        { optionText: "Graph must be cyclic", optionTag: "A" },
        { optionText: "Graph must contain negative weights", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How is the next vertex chosen in Prim's algorithm?",
      options: [
        { optionText: "The one with minimum edge cost from visited set", optionTag: "C" },
        { optionText: "Randomly", optionTag: "B" },
        { optionText: "Alphabetically", optionTag: "A" },
        { optionText: "With maximum degree", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the difference between Prim's and Kruskal's algorithms?",
      options: [
        { optionText: "Prim's builds tree by expanding vertex set; Kruskal's by adding edges", optionTag: "D" },
        { optionText: "Kruskal's uses adjacency list only", optionTag: "B" },
        { optionText: "Prim's works on directed graphs", optionTag: "C" },
        { optionText: "Both are same", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "In Prim's algorithm, how do you prevent revisiting the same vertex?",
      options: [
        { optionText: "Mark vertex as visited", optionTag: "A" },
        { optionText: "Use a visited array", optionTag: "B" },
        { optionText: "Both A and B", optionTag: "C" },
        { optionText: "It is not possible", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following best describes Prim's Algorithm?",
      options: [
        { optionText: "Incrementally adds least-cost edges from explored to unexplored", optionTag: "B" },
        { optionText: "Always starts with the smallest edge", optionTag: "C" },
        { optionText: "Finds the longest path", optionTag: "A" },
        { optionText: "Works only with directed graphs", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;