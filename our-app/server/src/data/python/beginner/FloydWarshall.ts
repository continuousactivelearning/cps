import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python - Floyd-Warshall Algorithm - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "Quiz to assess understanding of Floyd-Warshall Algorithm basics in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Floyd-Warshall Algorithm",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What problem does Floyd-Warshall algorithm solve?",
      options: [
        { optionText: "Single-source shortest path", optionTag: "B" },
        { optionText: "Minimum spanning tree", optionTag: "D" },
        { optionText: "All-pairs shortest path", optionTag: "A" },
        { optionText: "Longest path", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the time complexity of Floyd-Warshall algorithm?",
      options: [
        { optionText: "O(V^3)", optionTag: "C" },
        { optionText: "O(E log V)", optionTag: "A" },
        { optionText: "O(VE)", optionTag: "D" },
        { optionText: "O(V^2)", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What data structure is typically used in Floyd-Warshall?",
      options: [
        { optionText: "Adjacency list", optionTag: "D" },
        { optionText: "Heap", optionTag: "A" },
        { optionText: "Adjacency matrix", optionTag: "B" },
        { optionText: "Binary search tree", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "How many loops are used in Floyd-Warshall algorithm?",
      options: [
        { optionText: "2", optionTag: "D" },
        { optionText: "4", optionTag: "C" },
        { optionText: "1", optionTag: "A" },
        { optionText: "3", optionTag: "B" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which language construct is commonly used for Floyd-Warshall?",
      options: [
        { optionText: "if-else", optionTag: "D" },
        { optionText: "while", optionTag: "B" },
        { optionText: "recursion", optionTag: "C" },
        { optionText: "nested for-loops", optionTag: "A" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What kind of graphs can Floyd-Warshall handle?",
      options: [
        { optionText: "Undirected only", optionTag: "D" },
        { optionText: "Unweighted only", optionTag: "B" },
        { optionText: "Weighted graphs with negative weights (no negative cycle)", optionTag: "C" },
        { optionText: "Trees only", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "What does the algorithm check in each step?",
      options: [
        { optionText: "If a node is disconnected", optionTag: "D" },
        { optionText: "If node is isolated", optionTag: "B" },
        { optionText: "If going through k is shorter", optionTag: "A" },
        { optionText: "If edge is removed", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "How are the results stored?",
      options: [
        { optionText: "In a list of edges", optionTag: "B" },
        { optionText: "In a matrix of distances", optionTag: "C" },
        { optionText: "As graphs", optionTag: "A" },
        { optionText: "In a hash table", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which of the following is a limitation of Floyd-Warshall?",
      options: [
        { optionText: "Cannot handle unweighted graphs", optionTag: "C" },
        { optionText: "Works only with positive weights", optionTag: "D" },
        { optionText: "Inefficient for large graphs", optionTag: "A" },
        { optionText: "Requires recursion", optionTag: "B" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "How do you initialize unreachable paths?",
      options: [
        { optionText: "0", optionTag: "B" },
        { optionText: "float('inf')", optionTag: "C" },
        { optionText: "-1", optionTag: "D" },
        { optionText: "None", optionTag: "A" },
      ],
      correctOption: "C",
      score: 1,
    },

    // Next 10
    {
      questionText: "What is the purpose of the k-loop in Floyd-Warshall?",
      options: [
        { optionText: "Acts as intermediate node", optionTag: "A" },
        { optionText: "Indicates terminal node", optionTag: "C" },
        { optionText: "Counts total paths", optionTag: "B" },
        { optionText: "Stores edge weights", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the typical input format for Floyd-Warshall?",
      options: [
        { optionText: "Adjacency matrix", optionTag: "D" },
        { optionText: "List of parent nodes", optionTag: "C" },
        { optionText: "Pre-order list", optionTag: "B" },
        { optionText: "Priority queue", optionTag: "A" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Can Floyd-Warshall detect negative weight cycles?",
      options: [
        { optionText: "Yes", optionTag: "A" },
        { optionText: "No", optionTag: "B" },
        { optionText: "Only in DAGs", optionTag: "D" },
        { optionText: "Only if preprocessed", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What does it mean if distance[i][i] becomes negative?",
      options: [
        { optionText: "Invalid input", optionTag: "D" },
        { optionText: "Unreachable node", optionTag: "C" },
        { optionText: "Negative weight cycle detected", optionTag: "B" },
        { optionText: "Node is terminal", optionTag: "A" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which Python data type is often used to represent the matrix?",
      options: [
        { optionText: "Set", optionTag: "C" },
        { optionText: "Tuple", optionTag: "A" },
        { optionText: "List of lists", optionTag: "D" },
        { optionText: "Dictionary", optionTag: "B" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "Floyd-Warshall is considered what type of algorithm?",
      options: [
        { optionText: "Divide and Conquer", optionTag: "B" },
        { optionText: "Greedy", optionTag: "C" },
        { optionText: "Dynamic Programming", optionTag: "A" },
        { optionText: "Backtracking", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What does distance[i][j] represent?",
      options: [
        { optionText: "Minimum weight of path from i to j", optionTag: "B" },
        { optionText: "Number of paths from i to j", optionTag: "D" },
        { optionText: "All edges in the graph", optionTag: "A" },
        { optionText: "Shortest tree height", optionTag: "C" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "Which is a valid base case initialization?",
      options: [
        { optionText: "distance[i][j] = 0 if i != j", optionTag: "D" },
        { optionText: "distance[i][j] = 1", optionTag: "A" },
        { optionText: "distance[i][j] = weight if edge exists", optionTag: "C" },
        { optionText: "distance[i][j] = -inf", optionTag: "B" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which algorithm is most similar to Floyd-Warshall?",
      options: [
        { optionText: "Kruskal’s", optionTag: "B" },
        { optionText: "Prim’s", optionTag: "D" },
        { optionText: "Bellman-Ford", optionTag: "A" },
        { optionText: "DFS", optionTag: "C" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What does the final matrix contain after all iterations?",
      options: [
        { optionText: "Shortest paths between all pairs", optionTag: "C" },
        { optionText: "Maximum distances", optionTag: "A" },
        { optionText: "Parent nodes", optionTag: "B" },
        { optionText: "Number of edges", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
  ],
};

export default quizData;