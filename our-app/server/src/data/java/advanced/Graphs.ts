import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Graphs - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "This quiz tests your expertise in graph theory, Java implementations, and advanced problem-solving using graphs.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Graphs"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which data structure is commonly used to implement graphs in Java?",
      options: [
        { optionText: "Array", optionTag: "A" },
        { optionText: "LinkedList", optionTag: "B" },
        { optionText: "Adjacency List", optionTag: "C" },
        { optionText: "Queue", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following algorithms is used to detect cycles in a directed graph?",
      options: [
        { optionText: "Prim's algorithm", optionTag: "A" },
        { optionText: "Kruskal's algorithm", optionTag: "B" },
        { optionText: "Topological Sort", optionTag: "C" },
        { optionText: "Dijkstra's algorithm", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How is a weighted graph represented in Java?",
      options: [
        { optionText: "2D Matrix", optionTag: "A" },
        { optionText: "Adjacency List with Edge Weights", optionTag: "B" },
        { optionText: "HashSet", optionTag: "C" },
        { optionText: "LinkedList of Integers", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which traversal method uses a stack or recursion to explore graph nodes?",
      options: [
        { optionText: "Breadth-First Search", optionTag: "A" },
        { optionText: "Depth-First Search", optionTag: "B" },
        { optionText: "Binary Search", optionTag: "C" },
        { optionText: "Greedy Search", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which algorithm finds the shortest path in a graph with negative edge weights?",
      options: [
        { optionText: "Dijkstra's Algorithm", optionTag: "A" },
        { optionText: "Prim's Algorithm", optionTag: "B" },
        { optionText: "Bellman-Ford Algorithm", optionTag: "C" },
        { optionText: "Kruskal's Algorithm", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which property must a graph have to perform topological sorting?",
      options: [
        { optionText: "Undirected", optionTag: "A" },
        { optionText: "Connected", optionTag: "B" },
        { optionText: "Directed Acyclic Graph (DAG)", optionTag: "C" },
        { optionText: "Weighted Graph", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the time complexity of BFS in an adjacency list representation?",
      options: [
        { optionText: "O(V + E)", optionTag: "A" },
        { optionText: "O(V^2)", optionTag: "B" },
        { optionText: "O(E log V)", optionTag: "C" },
        { optionText: "O(V log E)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these is not a valid representation of a graph in Java?",
      options: [
        { optionText: "Adjacency List", optionTag: "A" },
        { optionText: "Adjacency Matrix", optionTag: "B" },
        { optionText: "Edge List", optionTag: "C" },
        { optionText: "Stack Matrix", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which of the following is used to find strongly connected components?",
      options: [
        { optionText: "Dijkstra’s Algorithm", optionTag: "A" },
        { optionText: "Floyd-Warshall", optionTag: "B" },
        { optionText: "Kosaraju’s Algorithm", optionTag: "C" },
        { optionText: "Prim’s Algorithm", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the minimum number of edges required to make a graph connected?",
      options: [
        { optionText: "V", optionTag: "A" },
        { optionText: "V-1", optionTag: "B" },
        { optionText: "E+1", optionTag: "C" },
        { optionText: "V+1", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which Java collection is commonly used for adjacency lists?",
      options: [
        { optionText: "HashMap<Integer, List<Integer>>", optionTag: "A" },
        { optionText: "ArrayList<int[]>", optionTag: "B" },
        { optionText: "Queue<Integer>", optionTag: "C" },
        { optionText: "TreeSet<Integer>", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following statements is true for undirected graphs?",
      options: [
        { optionText: "Every edge is bidirectional", optionTag: "A" },
        { optionText: "DFS doesn’t work", optionTag: "B" },
        { optionText: "It must be connected", optionTag: "C" },
        { optionText: "It cannot have loops", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm is suitable for minimum spanning tree?",
      options: [
        { optionText: "DFS", optionTag: "A" },
        { optionText: "BFS", optionTag: "B" },
        { optionText: "Prim’s", optionTag: "C" },
        { optionText: "Topological Sort", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which of the following is not applicable to graphs?",
      options: [
        { optionText: "Cycle detection", optionTag: "A" },
        { optionText: "Searching", optionTag: "B" },
        { optionText: "Sorting", optionTag: "C" },
        { optionText: "Traversal", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "In Java, which structure helps in storing graph nodes with priority?",
      options: [
        { optionText: "LinkedList", optionTag: "A" },
        { optionText: "HashMap", optionTag: "B" },
        { optionText: "PriorityQueue", optionTag: "C" },
        { optionText: "Deque", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which type of graph allows multiple edges between two vertices?",
      options: [
        { optionText: "Simple Graph", optionTag: "A" },
        { optionText: "Multigraph", optionTag: "B" },
        { optionText: "Directed Graph", optionTag: "C" },
        { optionText: "Weighted Graph", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "In DFS, what is the color state of a node that has been visited and fully explored?",
      options: [
        { optionText: "White", optionTag: "A" },
        { optionText: "Gray", optionTag: "B" },
        { optionText: "Black", optionTag: "C" },
        { optionText: "Red", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which method is used in Java to remove an element from a PriorityQueue?",
      options: [
        { optionText: "remove()", optionTag: "A" },
        { optionText: "pop()", optionTag: "B" },
        { optionText: "delete()", optionTag: "C" },
        { optionText: "cut()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In a connected graph, the number of edges is at least:",
      options: [
        { optionText: "V", optionTag: "A" },
        { optionText: "V-1", optionTag: "B" },
        { optionText: "V+1", optionTag: "C" },
        { optionText: "2V", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which class of graphs has every vertex connected to every other vertex?",
      options: [
        { optionText: "Tree", optionTag: "A" },
        { optionText: "Complete Graph", optionTag: "B" },
        { optionText: "Cycle", optionTag: "C" },
        { optionText: "DAG", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;