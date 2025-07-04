import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Floyd-Warshall Algorithm - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz evaluates your advanced understanding of the Floyd-Warshall Algorithm in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "FloydWarshallAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of the Floyd-Warshall algorithm?",
            options: [
                { optionText: "O(V^3)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(V log V)", optionTag: "C" },
                { optionText: "O(E log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which type of graph is required for Floyd-Warshall algorithm to work correctly?",
            options: [
                { optionText: "Weighted directed graph", optionTag: "A" },
                { optionText: "Unweighted graph", optionTag: "B" },
                { optionText: "Only tree", optionTag: "C" },
                { optionText: "Only DAG", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the Floyd-Warshall algorithm compute?",
            options: [
                { optionText: "All pairs shortest paths", optionTag: "A" },
                { optionText: "Single-source shortest paths", optionTag: "B" },
                { optionText: "Minimum spanning tree", optionTag: "C" },
                { optionText: "Topological order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What kind of dynamic programming approach does Floyd-Warshall use?",
            options: [
                { optionText: "Bottom-up", optionTag: "A" },
                { optionText: "Top-down", optionTag: "B" },
                { optionText: "Greedy", optionTag: "C" },
                { optionText: "Recursive with memoization", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the recurrence relation in Floyd-Warshall?",
            options: [
                { optionText: "dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])", optionTag: "A" },
                { optionText: "dist[i][j] = max(dist[i][j], dist[i][k] + dist[k][j])", optionTag: "B" },
                { optionText: "dist[i][j] = dist[i][k] - dist[k][j]", optionTag: "C" },
                { optionText: "dist[i][j] = dist[k][j]", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is typically used in Floyd-Warshall algorithm?",
            options: [
                { optionText: "2D matrix", optionTag: "A" },
                { optionText: "Adjacency list", optionTag: "B" },
                { optionText: "Min-heap", optionTag: "C" },
                { optionText: "Union-Find", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Floyd-Warshall algorithm handle negative weight edges?",
            options: [
                { optionText: "Yes, if there are no negative cycles", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Yes, always", optionTag: "C" },
                { optionText: "Only in DAGs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of Floyd-Warshall algorithm?",
            options: [
                { optionText: "O(V^2)", optionTag: "A" },
                { optionText: "O(V)", optionTag: "B" },
                { optionText: "O(E)", optionTag: "C" },
                { optionText: "O(log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does Floyd-Warshall detect negative weight cycles?",
            options: [
                { optionText: "If dist[i][i] < 0 for any i", optionTag: "A" },
                { optionText: "If any edge has negative weight", optionTag: "B" },
                { optionText: "Using DFS", optionTag: "C" },
                { optionText: "Using BFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Floyd-Warshall be applied to undirected graphs?",
            options: [
                { optionText: "Yes, with symmetric initialization", optionTag: "A" },
                { optionText: "No, only directed graphs", optionTag: "B" },
                { optionText: "Only unweighted graphs", optionTag: "C" },
                { optionText: "Only acyclic graphs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What value should you initialize dist[i][j] with when there is no edge between i and j?",
            options: [
                { optionText: "Infinity", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "-1", optionTag: "C" },
                { optionText: "1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Is Floyd-Warshall suitable for sparse graphs?",
            options: [
                { optionText: "No, better to use Dijkstra or Bellman-Ford", optionTag: "A" },
                { optionText: "Yes, always efficient", optionTag: "B" },
                { optionText: "Only if unweighted", optionTag: "C" },
                { optionText: "Only with trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT an advantage of Floyd-Warshall?",
            options: [
                { optionText: "Works on negative edges", optionTag: "A" },
                { optionText: "Handles all pairs shortest paths", optionTag: "B" },
                { optionText: "Optimal for sparse graphs", optionTag: "C" },
                { optionText: "Can detect negative cycles", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "How many iterations of k-loop in Floyd-Warshall for V vertices?",
            options: [
                { optionText: "V", optionTag: "A" },
                { optionText: "V^2", optionTag: "B" },
                { optionText: "V^3", optionTag: "C" },
                { optionText: "log V", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Floyd-Warshall be implemented recursively?",
            options: [
                { optionText: "Yes, using memoization", optionTag: "A" },
                { optionText: "No, only iterative", optionTag: "B" },
                { optionText: "Only with linked list", optionTag: "C" },
                { optionText: "Only in trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result if a negative cycle exists?",
            options: [
                { optionText: "dist[i][i] becomes negative", optionTag: "A" },
                { optionText: "dist[i][j] = 0", optionTag: "B" },
                { optionText: "Graph is disconnected", optionTag: "C" },
                { optionText: "No change", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many updates are performed in total in Floyd-Warshall?",
            options: [
                { optionText: "O(V^3)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E log V)", optionTag: "C" },
                { optionText: "O(V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a valid base case for Floyd-Warshall?",
            options: [
                { optionText: "dist[i][i] = 0", optionTag: "A" },
                { optionText: "dist[i][i] = INF", optionTag: "B" },
                { optionText: "dist[i][j] = 0", optionTag: "C" },
                { optionText: "dist[i][j] = -1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which programming paradigm does Floyd-Warshall follow?",
            options: [
                { optionText: "Dynamic programming", optionTag: "A" },
                { optionText: "Greedy", optionTag: "B" },
                { optionText: "Backtracking", optionTag: "C" },
                { optionText: "Divide and conquer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many nested loops are used in Floyd-Warshall implementation?",
            options: [
                { optionText: "Three", optionTag: "A" },
                { optionText: "Two", optionTag: "B" },
                { optionText: "Four", optionTag: "C" },
                { optionText: "One", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
