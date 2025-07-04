import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Kruskal's Algorithm - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "Challenge your understanding of Kruskal's algorithm used to find the Minimum Spanning Tree (MST) using sorting and disjoint sets.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Kruskal's Algorithm"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Kruskal’s algorithm is based on which algorithmic paradigm?",
      options: [
        { optionText: "Dynamic Programming", optionTag: "D" },
        { optionText: "Greedy", optionTag: "B" },
        { optionText: "Backtracking", optionTag: "A" },
        { optionText: "Divide and Conquer", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which data structure is crucial in Kruskal’s algorithm?",
      options: [
        { optionText: "Heap", optionTag: "B" },
        { optionText: "Queue", optionTag: "D" },
        { optionText: "Disjoint Set Union (DSU)", optionTag: "A" },
        { optionText: "Stack", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does Kruskal’s algorithm sort before processing?",
      options: [
        { optionText: "Vertices", optionTag: "B" },
        { optionText: "Edges by weight", optionTag: "C" },
        { optionText: "Degrees of nodes", optionTag: "A" },
        { optionText: "Vertex labels", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "The time complexity of Kruskal’s algorithm (with union by rank and path compression) is:",
      options: [
        { optionText: "O(E log V)", optionTag: "D" },
        { optionText: "O(V^2)", optionTag: "B" },
        { optionText: "O(V log V)", optionTag: "C" },
        { optionText: "O(E log E)", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which condition does Kruskal’s algorithm check before including an edge?",
      options: [
        { optionText: "If the edge forms a cycle", optionTag: "B" },
        { optionText: "If the edge is shortest", optionTag: "C" },
        { optionText: "If the edge is self-loop", optionTag: "A" },
        { optionText: "If the vertex degree is minimum", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What will be the output of Kruskal’s algorithm if the graph is disconnected?",
      options: [
        { optionText: "An error", optionTag: "A" },
        { optionText: "No MST", optionTag: "C" },
        { optionText: "A minimum spanning forest", optionTag: "B" },
        { optionText: "A loop", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which Java class is suitable for sorting edges in Kruskal’s algorithm?",
      options: [
        { optionText: "HashSet", optionTag: "B" },
        { optionText: "ArrayList with Comparator", optionTag: "C" },
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Queue", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Kruskal’s algorithm adds an edge when the vertices are in:",
      options: [
        { optionText: "Same component", optionTag: "D" },
        { optionText: "Different components", optionTag: "B" },
        { optionText: "Looped graph", optionTag: "A" },
        { optionText: "Balanced graph", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In Kruskal’s algorithm, cycle detection is done using:",
      options: [
        { optionText: "DFS", optionTag: "B" },
        { optionText: "Union-Find", optionTag: "D" },
        { optionText: "Prim’s logic", optionTag: "C" },
        { optionText: "BFS", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which of the following is true for Kruskal’s algorithm?",
      options: [
        { optionText: "Works only for connected graphs", optionTag: "C" },
        { optionText: "Only for directed graphs", optionTag: "A" },
        { optionText: "Works for both connected and disconnected graphs", optionTag: "B" },
        { optionText: "Fails on dense graphs", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How many edges will be there in an MST of a graph with V vertices?",
      options: [
        { optionText: "V", optionTag: "A" },
        { optionText: "V – 1", optionTag: "B" },
        { optionText: "E – 1", optionTag: "C" },
        { optionText: "V + 1", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which edge is picked first in Kruskal’s algorithm?",
      options: [
        { optionText: "Random edge", optionTag: "C" },
        { optionText: "Edge with minimum weight", optionTag: "D" },
        { optionText: "Maximum weight edge", optionTag: "A" },
        { optionText: "Self-loop", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Kruskal’s algorithm can be implemented using which sorting technique efficiently?",
      options: [
        { optionText: "Selection sort", optionTag: "C" },
        { optionText: "Merge sort", optionTag: "A" },
        { optionText: "Insertion sort", optionTag: "B" },
        { optionText: "Bubble sort", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In Java, which interface is ideal to create a custom sorting logic for edges?",
      options: [
        { optionText: "Comparator", optionTag: "B" },
        { optionText: "Runnable", optionTag: "C" },
        { optionText: "Cloneable", optionTag: "D" },
        { optionText: "Iterable", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Why is Disjoint Set Union used in Kruskal’s algorithm?",
      options: [
        { optionText: "To keep track of MST cost", optionTag: "C" },
        { optionText: "To detect cycles efficiently", optionTag: "D" },
        { optionText: "To sort edges", optionTag: "A" },
        { optionText: "To find minimum edge", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which operation is part of DSU used in Kruskal’s algorithm?",
      options: [
        { optionText: "Find", optionTag: "C" },
        { optionText: "Sort", optionTag: "B" },
        { optionText: "Search", optionTag: "D" },
        { optionText: "Peek", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "The union operation in DSU is optimized using:",
      options: [
        { optionText: "Binary tree", optionTag: "C" },
        { optionText: "Path compression", optionTag: "A" },
        { optionText: "Union by rank", optionTag: "B" },
        { optionText: "DFS", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Kruskal’s and Prim’s differ in that Kruskal’s focuses on:",
      options: [
        { optionText: "Tree expansion", optionTag: "A" },
        { optionText: "Edge sorting and adding", optionTag: "B" },
        { optionText: "Node degree", optionTag: "C" },
        { optionText: "Heap optimization", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What ensures that Kruskal's algorithm does not form cycles?",
      options: [
        { optionText: "Heap", optionTag: "A" },
        { optionText: "Union-Find (DSU)", optionTag: "D" },
        { optionText: "Stack", optionTag: "C" },
        { optionText: "Queue", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the primary benefit of Kruskal’s algorithm?",
      options: [
        { optionText: "Works for dense graphs", optionTag: "B" },
        { optionText: "Handles cycles directly", optionTag: "A" },
        { optionText: "Fast on sparse graphs", optionTag: "C" },
        { optionText: "Does not require sorting", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    }
  ]
};

export default quizData;