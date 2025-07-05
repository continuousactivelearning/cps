import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Kruskal's Algorithm - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "Test your understanding of Kruskal’s algorithm used to find the Minimum Spanning Tree (MST).",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Kruskal's Algorithm"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the main goal of Kruskal's algorithm?",
      options: [
        { optionText: "To find the Minimum Spanning Tree", optionTag: "D" },
        { optionText: "To find the shortest path", optionTag: "A" },
        { optionText: "To perform topological sort", optionTag: "B" },
        { optionText: "To traverse the graph", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which data structure is essential for cycle detection in Kruskal's algorithm?",
      options: [
        { optionText: "Disjoint Set Union (DSU)", optionTag: "B" },
        { optionText: "Priority Queue", optionTag: "C" },
        { optionText: "Stack", optionTag: "D" },
        { optionText: "Hash Map", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Kruskal’s algorithm is based on which approach?",
      options: [
        { optionText: "Greedy", optionTag: "C" },
        { optionText: "Backtracking", optionTag: "D" },
        { optionText: "Divide and Conquer", optionTag: "A" },
        { optionText: "Dynamic Programming", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the time complexity of Kruskal's algorithm with DSU?",
      options: [
        { optionText: "O(E log V)", optionTag: "A" },
        { optionText: "O(V^2)", optionTag: "C" },
        { optionText: "O(E^2)", optionTag: "B" },
        { optionText: "O(V log V)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the first step in Kruskal’s algorithm?",
      options: [
        { optionText: "Sort all edges by weight", optionTag: "B" },
        { optionText: "Pick a random vertex", optionTag: "C" },
        { optionText: "Traverse DFS", optionTag: "A" },
        { optionText: "Build a max heap", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How are edges added to the MST in Kruskal’s algorithm?",
      options: [
        { optionText: "In increasing order of weight", optionTag: "A" },
        { optionText: "In decreasing order of weight", optionTag: "D" },
        { optionText: "Using BFS", optionTag: "C" },
        { optionText: "Using DFS", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How many edges are there in an MST of a graph with V vertices?",
      options: [
        { optionText: "V - 1", optionTag: "C" },
        { optionText: "V", optionTag: "D" },
        { optionText: "2V", optionTag: "B" },
        { optionText: "V^2", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following is NOT used in Kruskal’s algorithm?",
      options: [
        { optionText: "Priority Queue", optionTag: "D" },
        { optionText: "Disjoint Set Union", optionTag: "A" },
        { optionText: "Edge Sorting", optionTag: "B" },
        { optionText: "Greedy approach", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Kruskal’s algorithm can be applied on which type of graph?",
      options: [
        { optionText: "Undirected, weighted", optionTag: "B" },
        { optionText: "Unweighted, directed", optionTag: "D" },
        { optionText: "Cyclic, unweighted", optionTag: "C" },
        { optionText: "Directed, weighted", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Kruskal’s algorithm avoids cycles using which technique?",
      options: [
        { optionText: "Union-Find", optionTag: "C" },
        { optionText: "Recursion", optionTag: "A" },
        { optionText: "Backtracking", optionTag: "D" },
        { optionText: "Breadth First Search", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which sorting technique is typically used in Kruskal’s algorithm?",
      options: [
        { optionText: "Any efficient sorting like Merge Sort", optionTag: "B" },
        { optionText: "Bubble Sort", optionTag: "A" },
        { optionText: "Radix Sort", optionTag: "D" },
        { optionText: "Bucket Sort", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the worst-case time complexity of Kruskal’s algorithm?",
      options: [
        { optionText: "O(E log E)", optionTag: "D" },
        { optionText: "O(V^3)", optionTag: "C" },
        { optionText: "O(E^2)", optionTag: "B" },
        { optionText: "O(V log V)", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which of these will cause Kruskal’s algorithm to reject an edge?",
      options: [
        { optionText: "If it creates a cycle", optionTag: "A" },
        { optionText: "If it is the maximum edge", optionTag: "C" },
        { optionText: "If it is not in the adjacency list", optionTag: "B" },
        { optionText: "If it is self-loop", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the main advantage of Kruskal’s algorithm over Prim’s?",
      options: [
        { optionText: "Works better for sparse graphs", optionTag: "B" },
        { optionText: "Handles negative weights", optionTag: "A" },
        { optionText: "No need for a union-find structure", optionTag: "D" },
        { optionText: "Works only on directed graphs", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How are cycles avoided in Kruskal’s algorithm?",
      options: [
        { optionText: "Using Disjoint Sets", optionTag: "C" },
        { optionText: "Using DFS", optionTag: "D" },
        { optionText: "Using BFS", optionTag: "A" },
        { optionText: "Using a stack", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following Java libraries help implement Kruskal’s algorithm?",
      options: [
        { optionText: "Collections.sort and Union-Find custom class", optionTag: "B" },
        { optionText: "Scanner and BufferedReader", optionTag: "C" },
        { optionText: "LinkedList and Stack", optionTag: "D" },
        { optionText: "TreeSet and HashMap", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which is true about the MST formed by Kruskal’s algorithm?",
      options: [
        { optionText: "Always contains V - 1 edges", optionTag: "D" },
        { optionText: "Contains all edges", optionTag: "A" },
        { optionText: "Contains cycles", optionTag: "C" },
        { optionText: "Only minimum weight edges are included", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which sorting algorithm should be used for better performance in Kruskal’s?",
      options: [
        { optionText: "Merge Sort or Quick Sort", optionTag: "A" },
        { optionText: "Selection Sort", optionTag: "B" },
        { optionText: "Bubble Sort", optionTag: "C" },
        { optionText: "Counting Sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the output of Kruskal’s algorithm?",
      options: [
        { optionText: "Minimum Spanning Tree", optionTag: "C" },
        { optionText: "Sorted edges", optionTag: "A" },
        { optionText: "All possible paths", optionTag: "D" },
        { optionText: "Shortest paths", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which edge is picked next in Kruskal's algorithm?",
      options: [
        { optionText: "Next lowest weight edge that does not form a cycle", optionTag: "B" },
        { optionText: "Highest weight edge", optionTag: "A" },
        { optionText: "First from adjacency list", optionTag: "D" },
        { optionText: "Random edge", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;