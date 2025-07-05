import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Kruskal’s Algorithm - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "Test your understanding of Kruskal’s Algorithm for building Minimum Spanning Trees (MSTs).",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Kruskal’s Algorithm"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the primary goal of Kruskal's Algorithm?",
      options: [
        { optionText: "Find the Minimum Spanning Tree", optionTag: "A" },
        { optionText: "Sort the graph vertices", optionTag: "B" },
        { optionText: "Detect cycles in the graph", optionTag: "C" },
        { optionText: "Find the shortest path", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What data structure is essential for Kruskal’s Algorithm?",
      options: [
        { optionText: "Disjoint Set Union (DSU)", optionTag: "A" },
        { optionText: "Priority Queue", optionTag: "B" },
        { optionText: "Stack", optionTag: "C" },
        { optionText: "Queue", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the first step in Kruskal’s Algorithm?",
      options: [
        { optionText: "Sort all edges based on weights", optionTag: "A" },
        { optionText: "Traverse from any node", optionTag: "B" },
        { optionText: "Add all vertices to a queue", optionTag: "C" },
        { optionText: "Create an adjacency list", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which approach does Kruskal’s Algorithm follow?",
      options: [
        { optionText: "Greedy", optionTag: "A" },
        { optionText: "Dynamic Programming", optionTag: "B" },
        { optionText: "Divide and Conquer", optionTag: "C" },
        { optionText: "Backtracking", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation is used to check if adding an edge forms a cycle?",
      options: [
        { optionText: "Find operation in DSU", optionTag: "A" },
        { optionText: "Breadth-First Search", optionTag: "B" },
        { optionText: "Depth-First Search", optionTag: "C" },
        { optionText: "Topological Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What condition is checked before adding an edge in Kruskal’s Algorithm?",
      options: [
        { optionText: "If both vertices belong to different sets", optionTag: "A" },
        { optionText: "If edge weight is odd", optionTag: "B" },
        { optionText: "If edge is directed", optionTag: "C" },
        { optionText: "If edge count is less than V-1", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which sorting algorithm is commonly used in Kruskal’s Algorithm?",
      options: [
        { optionText: "Any efficient sorting algorithm (e.g., quicksort)", optionTag: "A" },
        { optionText: "Bubble sort", optionTag: "B" },
        { optionText: "Counting sort", optionTag: "C" },
        { optionText: "Insertion sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "When does Kruskal’s Algorithm terminate?",
      options: [
        { optionText: "When V-1 edges are included in MST", optionTag: "A" },
        { optionText: "When all vertices are sorted", optionTag: "B" },
        { optionText: "When all cycles are removed", optionTag: "C" },
        { optionText: "When all vertices are in the same set", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Kruskal’s Algorithm is best suited for which type of graph?",
      options: [
        { optionText: "Sparse graphs", optionTag: "A" },
        { optionText: "Dense graphs", optionTag: "B" },
        { optionText: "Unweighted graphs", optionTag: "C" },
        { optionText: "Cyclic graphs only", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of Kruskal’s Algorithm (with DSU and efficient sort)?",
      options: [
        { optionText: "O(E log E)", optionTag: "A" },
        { optionText: "O(V^2)", optionTag: "B" },
        { optionText: "O(E + V)", optionTag: "C" },
        { optionText: "O(E^2)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In Kruskal’s Algorithm, how is a cycle avoided?",
      options: [
        { optionText: "By ensuring vertices are in different sets", optionTag: "A" },
        { optionText: "By using DFS", optionTag: "B" },
        { optionText: "By limiting edge count", optionTag: "C" },
        { optionText: "By visiting nodes only once", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "If Kruskal’s Algorithm is applied to a disconnected graph, what does it yield?",
      options: [
        { optionText: "Minimum spanning forest", optionTag: "A" },
        { optionText: "No result", optionTag: "B" },
        { optionText: "Cycle-free graph", optionTag: "C" },
        { optionText: "Sorted graph", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which library can be used in Python to implement DSU efficiently?",
      options: [
        { optionText: "custom class with path compression and union by rank", optionTag: "A" },
        { optionText: "math module", optionTag: "B" },
        { optionText: "collections module", optionTag: "C" },
        { optionText: "itertools module", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is not true about Kruskal’s Algorithm?",
      options: [
        { optionText: "It always gives the correct MST for connected graphs", optionTag: "A" },
        { optionText: "It forms cycles during execution", optionTag: "B" },
        { optionText: "It can handle negative edge weights", optionTag: "C" },
        { optionText: "It works on undirected graphs", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In Kruskal’s Algorithm, how is the union operation used?",
      options: [
        { optionText: "To merge two disjoint sets", optionTag: "A" },
        { optionText: "To delete a vertex", optionTag: "B" },
        { optionText: "To check if edge weight is minimum", optionTag: "C" },
        { optionText: "To reverse the path", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Kruskal’s Algorithm ensures the MST is:",
      options: [
        { optionText: "Acyclic and connected", optionTag: "A" },
        { optionText: "Acyclic and directed", optionTag: "B" },
        { optionText: "Cyclic and sorted", optionTag: "C" },
        { optionText: "Disconnected and undirected", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How many edges are there in the MST of a graph with V vertices?",
      options: [
        { optionText: "V - 1", optionTag: "A" },
        { optionText: "V", optionTag: "B" },
        { optionText: "V + 1", optionTag: "C" },
        { optionText: "V * 2", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How are edges added in Kruskal’s Algorithm?",
      options: [
        { optionText: "Sorted by weight and added one-by-one", optionTag: "A" },
        { optionText: "Randomly", optionTag: "B" },
        { optionText: "Using DFS traversal", optionTag: "C" },
        { optionText: "From leaves to root", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is another name for DSU?",
      options: [
        { optionText: "Union-Find", optionTag: "A" },
        { optionText: "Tree Sort", optionTag: "B" },
        { optionText: "Graph Matrix", optionTag: "C" },
        { optionText: "Queue Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which graph property is not necessary for Kruskal’s Algorithm?",
      options: [
        { optionText: "Connectivity", optionTag: "A" },
        { optionText: "Undirected", optionTag: "B" },
        { optionText: "Weighted", optionTag: "C" },
        { optionText: "Non-negative weights", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    }
  ]
};

export default quizData;