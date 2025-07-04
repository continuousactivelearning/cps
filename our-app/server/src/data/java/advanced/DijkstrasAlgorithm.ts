import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Dijkstra’s Algorithm - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "Test your knowledge of Dijkstra’s Algorithm for shortest path computation in weighted graphs.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Dijkstra’s Algorithm"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is Dijkstra’s Algorithm primarily used for?",
      options: [
        { optionText: "Topological sorting", optionTag: "C" },
        { optionText: "Detecting cycles", optionTag: "D" },
        { optionText: "Finding shortest path in a weighted graph", optionTag: "A" },
        { optionText: "Minimum spanning tree", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of Dijkstra’s Algorithm using a min-heap (priority queue)?",
      options: [
        { optionText: "O(V^2)", optionTag: "C" },
        { optionText: "O(V + E)", optionTag: "B" },
        { optionText: "O((V+E) log V)", optionTag: "A" },
        { optionText: "O(E log E)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data structure is commonly used to implement Dijkstra’s priority queue?",
      options: [
        { optionText: "Stack", optionTag: "C" },
        { optionText: "Queue", optionTag: "D" },
        { optionText: "Min-Heap", optionTag: "B" },
        { optionText: "Deque", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Dijkstra’s Algorithm fails in graphs containing:",
      options: [
        { optionText: "Positive edge weights", optionTag: "B" },
        { optionText: "Disconnected components", optionTag: "D" },
        { optionText: "Negative edge weights", optionTag: "A" },
        { optionText: "Directed edges", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What value is initially assigned to all vertices except the source?",
      options: [
        { optionText: "1", optionTag: "B" },
        { optionText: "∞ (infinity)", optionTag: "C" },
        { optionText: "0", optionTag: "A" },
        { optionText: "-1", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "In Java, which collection is ideal for Dijkstra’s priority queue?",
      options: [
        { optionText: "ArrayList", optionTag: "C" },
        { optionText: "HashMap", optionTag: "D" },
        { optionText: "PriorityQueue", optionTag: "A" },
        { optionText: "LinkedList", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does the relaxation step in Dijkstra’s Algorithm do?",
      options: [
        { optionText: "Removes the edge", optionTag: "D" },
        { optionText: "Updates the edge weight", optionTag: "B" },
        { optionText: "Updates shortest path estimate", optionTag: "A" },
        { optionText: "Deletes the vertex", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which vertex is picked at each step of Dijkstra’s Algorithm?",
      options: [
        { optionText: "Vertex with maximum distance", optionTag: "D" },
        { optionText: "Vertex not yet visited", optionTag: "C" },
        { optionText: "Vertex with minimum distance", optionTag: "B" },
        { optionText: "Random vertex", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What happens if Dijkstra’s is run on a graph with a negative weight edge?",
      options: [
        { optionText: "Incorrect results", optionTag: "D" },
        { optionText: "It halts", optionTag: "C" },
        { optionText: "Correct result is returned", optionTag: "B" },
        { optionText: "Only MST is computed", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which algorithm is preferred over Dijkstra’s for graphs with negative weights?",
      options: [
        { optionText: "Bellman-Ford", optionTag: "C" },
        { optionText: "Prim’s", optionTag: "B" },
        { optionText: "DFS", optionTag: "A" },
        { optionText: "BFS", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the output of Dijkstra’s Algorithm?",
      options: [
        { optionText: "Minimum spanning tree", optionTag: "A" },
        { optionText: "Shortest path lengths from source", optionTag: "C" },
        { optionText: "Cycle detection result", optionTag: "D" },
        { optionText: "DFS tree", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which type of graph is suitable for Dijkstra’s Algorithm?",
      options: [
        { optionText: "Graphs with negative cycles", optionTag: "C" },
        { optionText: "Graphs with zero or positive weights", optionTag: "B" },
        { optionText: "Unweighted graphs only", optionTag: "D" },
        { optionText: "Multigraphs only", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of these is NOT used in Dijkstra’s implementation?",
      options: [
        { optionText: "PriorityQueue", optionTag: "C" },
        { optionText: "Distance array", optionTag: "A" },
        { optionText: "Visited set", optionTag: "D" },
        { optionText: "Recursion stack", optionTag: "B" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Dijkstra’s algorithm works well with:",
      options: [
        { optionText: "Graphs with all negative weights", optionTag: "D" },
        { optionText: "Graphs with cycles", optionTag: "A" },
        { optionText: "Graphs with positive weights only", optionTag: "B" },
        { optionText: "Disconnected graphs", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In Dijkstra’s algorithm, which vertex is never updated again?",
      options: [
        { optionText: "The source", optionTag: "C" },
        { optionText: "The vertex already in the queue", optionTag: "D" },
        { optionText: "The visited vertex", optionTag: "A" },
        { optionText: "The vertex not reachable", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following Java classes is not suitable for Dijkstra’s PQ?",
      options: [
        { optionText: "TreeSet", optionTag: "C" },
        { optionText: "PriorityQueue", optionTag: "B" },
        { optionText: "LinkedList", optionTag: "D" },
        { optionText: "MinHeap implementation", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What happens if all edge weights are equal in Dijkstra?",
      options: [
        { optionText: "Behaves like BFS", optionTag: "B" },
        { optionText: "Behaves like DFS", optionTag: "A" },
        { optionText: "Fails", optionTag: "C" },
        { optionText: "Increases time complexity", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which property of graph matters most for Dijkstra’s performance?",
      options: [
        { optionText: "Number of edges", optionTag: "D" },
        { optionText: "Weight of edges", optionTag: "B" },
        { optionText: "Graph connectivity", optionTag: "A" },
        { optionText: "Degree of vertices", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "In Java, how is the shortest path stored during Dijkstra’s run?",
      options: [
        { optionText: "Visited array", optionTag: "C" },
        { optionText: "Queue size", optionTag: "D" },
        { optionText: "Parent map or array", optionTag: "B" },
        { optionText: "Boolean flags", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What makes Dijkstra’s greedy in nature?",
      options: [
        { optionText: "It explores all paths", optionTag: "D" },
        { optionText: "Chooses path with largest edge", optionTag: "B" },
        { optionText: "Chooses shortest edge at each step", optionTag: "A" },
        { optionText: "Chooses random node", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;