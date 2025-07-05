import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Bellman-Ford Algorithm - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "Evaluate your understanding of the Bellman-Ford algorithm for graphs with negative weights.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "BellmanFordAlgorithm"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What problem does the Bellman-Ford algorithm solve?",
      options: [
        { optionText: "Single-source shortest paths with negative weights", optionTag: "B" },
        { optionText: "Longest path", optionTag: "A" },
        { optionText: "Cycle detection", optionTag: "C" },
        { optionText: "Minimum spanning tree", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which condition is checked in each iteration of Bellman-Ford?",
      options: [
        { optionText: "Relaxation of edges", optionTag: "A" },
        { optionText: "Max edge weight", optionTag: "C" },
        { optionText: "Total number of nodes", optionTag: "D" },
        { optionText: "Path length", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How many times does the Bellman-Ford algorithm relax all edges?",
      options: [
        { optionText: "V - 1 times", optionTag: "C" },
        { optionText: "V times", optionTag: "A" },
        { optionText: "E times", optionTag: "B" },
        { optionText: "V + 1 times", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Bellman-Ford can detect which of the following?",
      options: [
        { optionText: "Negative weight cycles", optionTag: "D" },
        { optionText: "Disconnected graphs", optionTag: "B" },
        { optionText: "Shortest cycle", optionTag: "A" },
        { optionText: "Minimum cut", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the time complexity of Bellman-Ford?",
      options: [
        { optionText: "O(VE)", optionTag: "A" },
        { optionText: "O(E log V)", optionTag: "C" },
        { optionText: "O(V log V)", optionTag: "B" },
        { optionText: "O(V^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In which case is Bellman-Ford preferred over Dijkstra?",
      options: [
        { optionText: "When graph has negative edge weights", optionTag: "C" },
        { optionText: "For unweighted graphs", optionTag: "B" },
        { optionText: "When there are only positive weights", optionTag: "A" },
        { optionText: "When graph is undirected", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What does the final iteration in Bellman-Ford help identify?",
      options: [
        { optionText: "Negative cycles", optionTag: "B" },
        { optionText: "Longest paths", optionTag: "A" },
        { optionText: "Zero weight paths", optionTag: "C" },
        { optionText: "Self loops", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which Java data structure is ideal to store edges?",
      options: [
        { optionText: "List of arrays", optionTag: "D" },
        { optionText: "HashMap", optionTag: "A" },
        { optionText: "Set", optionTag: "C" },
        { optionText: "Queue", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which exception is thrown if graph is null in Bellman-Ford?",
      options: [
        { optionText: "NullPointerException", optionTag: "A" },
        { optionText: "IndexOutOfBoundsException", optionTag: "B" },
        { optionText: "IllegalArgumentException", optionTag: "C" },
        { optionText: "GraphException", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if a distance can still be reduced after V-1 iterations?",
      options: [
        { optionText: "Graph contains negative weight cycle", optionTag: "C" },
        { optionText: "Shortest path found", optionTag: "A" },
        { optionText: "Path is undefined", optionTag: "B" },
        { optionText: "Throw an exception", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which type of graph does Bellman-Ford handle best?",
      options: [
        { optionText: "Directed weighted graphs", optionTag: "D" },
        { optionText: "Undirected graphs", optionTag: "A" },
        { optionText: "Trees", optionTag: "B" },
        { optionText: "MST", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Bellman-Ford fails to work when:",
      options: [
        { optionText: "There is a negative weight cycle", optionTag: "C" },
        { optionText: "All weights are positive", optionTag: "A" },
        { optionText: "Graph has disconnected components", optionTag: "B" },
        { optionText: "Number of edges equals number of vertices", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which array holds minimum distances?",
      options: [
        { optionText: "Distance array", optionTag: "B" },
        { optionText: "Edge array", optionTag: "C" },
        { optionText: "Weight array", optionTag: "D" },
        { optionText: "Graph array", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is relaxed during the process?",
      options: [
        { optionText: "Edges", optionTag: "A" },
        { optionText: "Vertices", optionTag: "B" },
        { optionText: "Paths", optionTag: "C" },
        { optionText: "Components", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result if the graph has no negative cycle?",
      options: [
        { optionText: "Shortest distances are computed", optionTag: "C" },
        { optionText: "Loop is infinite", optionTag: "A" },
        { optionText: "Cycle is returned", optionTag: "D" },
        { optionText: "False result", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following is a correct use case for Bellman-Ford?",
      options: [
        { optionText: "Routing in telecommunication", optionTag: "B" },
        { optionText: "Rendering HTML", optionTag: "A" },
        { optionText: "Web scraping", optionTag: "C" },
        { optionText: "Data serialization", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "If the number of vertices is V, how many edge checks are done?",
      options: [
        { optionText: "(V - 1) * E", optionTag: "D" },
        { optionText: "V * V", optionTag: "A" },
        { optionText: "E * E", optionTag: "B" },
        { optionText: "V + E", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is an edge list in Bellman-Ford?",
      options: [
        { optionText: "List of tuples (u, v, w)", optionTag: "A" },
        { optionText: "Map of nodes", optionTag: "B" },
        { optionText: "Array of graphs", optionTag: "C" },
        { optionText: "Matrix", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which error is reported in a negative cycle?",
      options: [
        { optionText: "Unreachable node", optionTag: "B" },
        { optionText: "Negative weight cycle detected", optionTag: "C" },
        { optionText: "Overflow error", optionTag: "A" },
        { optionText: "Zero division", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    }
  ]
};

export default quizData;