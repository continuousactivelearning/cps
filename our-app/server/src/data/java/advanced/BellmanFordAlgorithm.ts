import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Bellman-Ford Algorithm - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "Assess your understanding of Bellman-Ford Algorithm used to find shortest paths in graphs with negative weights.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Bellman-Ford Algorithm"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the time complexity of Bellman-Ford Algorithm?",
      options: [
        { optionText: "O(VE)", optionTag: "A" },
        { optionText: "O(V log E)", optionTag: "C" },
        { optionText: "O(E log V)", optionTag: "B" },
        { optionText: "O(V + E)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Bellman-Ford Algorithm is capable of handling:",
      options: [
        { optionText: "Only undirected graphs", optionTag: "C" },
        { optionText: "Negative edge weights", optionTag: "B" },
        { optionText: "Positive weights only", optionTag: "D" },
        { optionText: "Acyclic graphs only", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How many times does Bellman-Ford relax all edges?",
      options: [
        { optionText: "V", optionTag: "C" },
        { optionText: "E", optionTag: "D" },
        { optionText: "V - 1", optionTag: "A" },
        { optionText: "2V", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following can Bellman-Ford detect that Dijkstra’s cannot?",
      options: [
        { optionText: "Longest path", optionTag: "C" },
        { optionText: "Negative weight cycle", optionTag: "D" },
        { optionText: "All-pairs shortest path", optionTag: "B" },
        { optionText: "Minimum spanning tree", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "If a graph has a negative weight cycle reachable from the source, Bellman-Ford:",
      options: [
        { optionText: "Returns shortest path", optionTag: "A" },
        { optionText: "Halts", optionTag: "B" },
        { optionText: "Reports the cycle", optionTag: "C" },
        { optionText: "Ignores the cycle", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Bellman-Ford updates distances using:",
      options: [
        { optionText: "Greedy method", optionTag: "A" },
        { optionText: "DFS traversal", optionTag: "C" },
        { optionText: "Edge relaxation", optionTag: "B" },
        { optionText: "Backtracking", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which graph representation is most space-efficient for Bellman-Ford?",
      options: [
        { optionText: "Adjacency matrix", optionTag: "A" },
        { optionText: "Edge list", optionTag: "C" },
        { optionText: "Adjacency list", optionTag: "B" },
        { optionText: "Complete graph", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is initialized as the distance to the source vertex?",
      options: [
        { optionText: "∞", optionTag: "B" },
        { optionText: "1", optionTag: "D" },
        { optionText: "0", optionTag: "A" },
        { optionText: "-∞", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Bellman-Ford is suitable for graphs where:",
      options: [
        { optionText: "All weights are positive", optionTag: "C" },
        { optionText: "Graph is cyclic", optionTag: "D" },
        { optionText: "Negative edge weights are present", optionTag: "B" },
        { optionText: "Undirected graphs only", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What happens if we perform one more relaxation after V-1 iterations?",
      options: [
        { optionText: "Shortest paths are improved", optionTag: "A" },
        { optionText: "Cycle detection is possible", optionTag: "D" },
        { optionText: "Distances remain unchanged", optionTag: "B" },
        { optionText: "Graph is rebuilt", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which case makes Bellman-Ford better than Dijkstra?",
      options: [
        { optionText: "All edges are equal", optionTag: "D" },
        { optionText: "Presence of negative weights", optionTag: "A" },
        { optionText: "Tree structure", optionTag: "C" },
        { optionText: "Single edge graph", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In Java, which data structure is ideal to store edges?",
      options: [
        { optionText: "Map", optionTag: "C" },
        { optionText: "List of arrays", optionTag: "B" },
        { optionText: "Stack", optionTag: "D" },
        { optionText: "Set", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Bellman-Ford performs relaxation:",
      options: [
        { optionText: "In topological order", optionTag: "B" },
        { optionText: "Greedy manner", optionTag: "D" },
        { optionText: "For all edges in each iteration", optionTag: "A" },
        { optionText: "Using DFS", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Bellman-Ford requires how many iterations to guarantee correctness?",
      options: [
        { optionText: "V-2", optionTag: "C" },
        { optionText: "V", optionTag: "D" },
        { optionText: "E", optionTag: "B" },
        { optionText: "V-1", optionTag: "A" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What type of algorithm is Bellman-Ford?",
      options: [
        { optionText: "Backtracking", optionTag: "C" },
        { optionText: "Greedy", optionTag: "A" },
        { optionText: "Dynamic Programming", optionTag: "B" },
        { optionText: "Divide and Conquer", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which structure stores shortest path distances?",
      options: [
        { optionText: "HashSet", optionTag: "A" },
        { optionText: "Array", optionTag: "C" },
        { optionText: "Map of sets", optionTag: "D" },
        { optionText: "Queue", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Bellman-Ford uses which technique to propagate updates?",
      options: [
        { optionText: "Path compression", optionTag: "D" },
        { optionText: "Breadth-first search", optionTag: "C" },
        { optionText: "Edge-by-edge update", optionTag: "A" },
        { optionText: "Binary search", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the key advantage of Bellman-Ford?",
      options: [
        { optionText: "Detects shortest path only in unweighted graphs", optionTag: "D" },
        { optionText: "Detects cycles", optionTag: "A" },
        { optionText: "Handles negative weights", optionTag: "C" },
        { optionText: "Builds MST", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "The graph for Bellman-Ford must:",
      options: [
        { optionText: "Have positive weights only", optionTag: "D" },
        { optionText: "Be complete", optionTag: "B" },
        { optionText: "Be a DAG", optionTag: "A" },
        { optionText: "Be directed or undirected", optionTag: "C" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What does a negative weight cycle cause?",
      options: [
        { optionText: "Cycle detected and reported", optionTag: "C" },
        { optionText: "Faster result", optionTag: "A" },
        { optionText: "Shortest paths updated", optionTag: "B" },
        { optionText: "Cycle removed", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    }
  ]
};

export default quizData;