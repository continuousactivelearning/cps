import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Breadth-First Search (BFS) - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "Test your advanced understanding of BFS traversal and its applications in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "BFS"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which data structure is essential for implementing BFS?",
      options: [
        { optionText: "Queue", optionTag: "A" },
        { optionText: "Stack", optionTag: "B" },
        { optionText: "Heap", optionTag: "C" },
        { optionText: "Set", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In a BFS traversal, when is a node considered fully explored?",
      options: [
        { optionText: "After it's pushed to queue", optionTag: "A" },
        { optionText: "After all neighbors are visited", optionTag: "B" },
        { optionText: "When it's encountered first", optionTag: "C" },
        { optionText: "After depth exceeds 2", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the time complexity of BFS in terms of vertices V and edges E?",
      options: [
        { optionText: "O(V)", optionTag: "A" },
        { optionText: "O(E)", optionTag: "B" },
        { optionText: "O(V + E)", optionTag: "C" },
        { optionText: "O(log V)", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What kind of problems is BFS not suited for?",
      options: [
        { optionText: "Shortest path in unweighted graphs", optionTag: "A" },
        { optionText: "Level-order traversal", optionTag: "B" },
        { optionText: "Finding cycles", optionTag: "C" },
        { optionText: "Finding minimum spanning tree", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which traversal guarantees the shortest path in unweighted graphs?",
      options: [
        { optionText: "BFS", optionTag: "A" },
        { optionText: "DFS", optionTag: "B" },
        { optionText: "Dijkstra", optionTag: "C" },
        { optionText: "A*", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is used to avoid re-visiting nodes in BFS?",
      options: [
        { optionText: "Visited array or set", optionTag: "A" },
        { optionText: "Recursion", optionTag: "B" },
        { optionText: "Stack", optionTag: "C" },
        { optionText: "PriorityQueue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How does BFS handle disconnected graphs?",
      options: [
        { optionText: "Throws exception", optionTag: "A" },
        { optionText: "Only visits one component", optionTag: "B" },
        { optionText: "Requires loop over all nodes", optionTag: "C" },
        { optionText: "Skips unvisited neighbors", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "BFS is best suited for finding ________ in maze-like problems.",
      options: [
        { optionText: "Longest path", optionTag: "A" },
        { optionText: "Shortest path", optionTag: "B" },
        { optionText: "Heaviest edge", optionTag: "C" },
        { optionText: "All cycles", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which Java interface can model a BFS queue?",
      options: [
        { optionText: "Deque", optionTag: "A" },
        { optionText: "List", optionTag: "B" },
        { optionText: "Queue", optionTag: "C" },
        { optionText: "Map", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "In Java, how would you declare a queue for BFS?",
      options: [
        { optionText: "Queue<Integer> q = new LinkedList<>()", optionTag: "A" },
        { optionText: "Queue q = new Stack()", optionTag: "B" },
        { optionText: "Queue<Integer> q = new ArrayList<>()", optionTag: "C" },
        { optionText: "Queue<Integer> q = new PriorityQueue<>()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is a correct BFS output for a binary tree?",
      options: [
        { optionText: "Pre-order traversal", optionTag: "A" },
        { optionText: "Post-order traversal", optionTag: "B" },
        { optionText: "Level-order traversal", optionTag: "C" },
        { optionText: "In-order traversal", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "BFS works well on which type of graph representation?",
      options: [
        { optionText: "Adjacency list", optionTag: "A" },
        { optionText: "Adjacency matrix", optionTag: "B" },
        { optionText: "Both A and B", optionTag: "C" },
        { optionText: "None of the above", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which queue operation enqueues a node?",
      options: [
        { optionText: "offer()", optionTag: "A" },
        { optionText: "peek()", optionTag: "B" },
        { optionText: "poll()", optionTag: "C" },
        { optionText: "pop()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which BFS modification is used for Topological Sorting?",
      options: [
        { optionText: "BFS with in-degree array", optionTag: "A" },
        { optionText: "DFS recursion", optionTag: "B" },
        { optionText: "Dijkstra's heap", optionTag: "C" },
        { optionText: "Prim's priority queue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How does BFS handle a graph with multiple paths?",
      options: [
        { optionText: "Explores shortest first", optionTag: "A" },
        { optionText: "Explores longest first", optionTag: "B" },
        { optionText: "Explores based on edge weights", optionTag: "C" },
        { optionText: "Explores alphabetically", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the typical space complexity of BFS?",
      options: [
        { optionText: "O(1)", optionTag: "A" },
        { optionText: "O(V + E)", optionTag: "B" },
        { optionText: "O(log V)", optionTag: "C" },
        { optionText: "O(V)", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which real-world application uses BFS?",
      options: [
        { optionText: "Search suggestions", optionTag: "A" },
        { optionText: "Backtracking puzzles", optionTag: "B" },
        { optionText: "AI decision trees", optionTag: "C" },
        { optionText: "File compression", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "When can BFS terminate early?",
      options: [
        { optionText: "When all nodes are colored", optionTag: "A" },
        { optionText: "When destination node is found", optionTag: "B" },
        { optionText: "After all leaf nodes", optionTag: "C" },
        { optionText: "It never terminates early", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which traversal is NOT breadth-first?",
      options: [
        { optionText: "Level-order", optionTag: "A" },
        { optionText: "Shortest path in unweighted", optionTag: "B" },
        { optionText: "In-order tree traversal", optionTag: "C" },
        { optionText: "Friend suggestion algorithm", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "BFS guarantees finding the shortest path in what type of graph?",
      options: [
        { optionText: "Weighted", optionTag: "A" },
        { optionText: "Unweighted", optionTag: "B" },
        { optionText: "Directed Acyclic Graphs", optionTag: "C" },
        { optionText: "Weighted DAG", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;