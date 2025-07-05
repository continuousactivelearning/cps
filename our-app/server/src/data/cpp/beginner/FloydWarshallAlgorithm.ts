import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Floyd-Warshall Algorithm - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your understanding of the Floyd-Warshall Algorithm in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "FloydWarshallAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the Floyd-Warshall algorithm used for?",
            options: [
                { optionText: "Finding shortest paths between all pairs of vertices", optionTag: "A" },
                { optionText: "Topological sorting", optionTag: "B" },
                { optionText: "Finding minimum spanning tree", optionTag: "C" },
                { optionText: "Detecting cycles", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of graph is required for Floyd-Warshall algorithm?",
            options: [
                { optionText: "Weighted graph", optionTag: "A" },
                { optionText: "Unweighted graph", optionTag: "B" },
                { optionText: "Directed Acyclic Graph", optionTag: "C" },
                { optionText: "Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of the Floyd-Warshall algorithm?",
            options: [
                { optionText: "O(n³)", optionTag: "A" },
                { optionText: "O(n²)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" },
                { optionText: "O(m + n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which approach is used in the Floyd-Warshall algorithm?",
            options: [
                { optionText: "Dynamic Programming", optionTag: "A" },
                { optionText: "Greedy", optionTag: "B" },
                { optionText: "Backtracking", optionTag: "C" },
                { optionText: "Divide and Conquer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the key idea behind Floyd-Warshall?",
            options: [
                { optionText: "Update distance matrix by checking each intermediate node", optionTag: "A" },
                { optionText: "Use DFS to compute distances", optionTag: "B" },
                { optionText: "Use priority queue to update paths", optionTag: "C" },
                { optionText: "Remove edges to reduce cost", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many loops does the Floyd-Warshall algorithm use?",
            options: [
                { optionText: "Three nested loops", optionTag: "A" },
                { optionText: "Two loops", optionTag: "B" },
                { optionText: "One loop", optionTag: "C" },
                { optionText: "No loops", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What should be the initial value for unreachable vertices in the distance matrix?",
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
            questionText: "Can the Floyd-Warshall algorithm handle negative edge weights?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only positive weights", optionTag: "C" },
                { optionText: "Only if graph is acyclic", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the following condition mean? `if (dist[i][k] + dist[k][j] < dist[i][j])`",
            options: [
                { optionText: "A shorter path through node k exists", optionTag: "A" },
                { optionText: "There is a cycle", optionTag: "B" },
                { optionText: "Node k is unreachable", optionTag: "C" },
                { optionText: "Node j is closer than i", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does Floyd-Warshall detect a negative cycle?",
            options: [
                { optionText: "If dist[i][i] < 0 for any i", optionTag: "A" },
                { optionText: "If all edges are negative", optionTag: "B" },
                { optionText: "If all vertices are visited", optionTag: "C" },
                { optionText: "If a path exists between every pair", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is stored in the dist[i][j] matrix?",
            options: [
                { optionText: "Shortest distance from vertex i to j", optionTag: "A" },
                { optionText: "Number of edges from i to j", optionTag: "B" },
                { optionText: "Maximum edge weight from i to j", optionTag: "C" },
                { optionText: "Path from i to j", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these can be used to reconstruct the path in Floyd-Warshall?",
            options: [
                { optionText: "Parent matrix or next matrix", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "List of cycles", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about Floyd-Warshall algorithm?",
            options: [
                { optionText: "It finds shortest paths between all pairs of nodes", optionTag: "A" },
                { optionText: "It works only on undirected graphs", optionTag: "B" },
                { optionText: "It does not support self-loops", optionTag: "C" },
                { optionText: "It works only on trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which header file is typically used for INT_MAX or INF in C++?",
            options: [
                { optionText: "<climits>", optionTag: "A" },
                { optionText: "<cstdlib>", optionTag: "B" },
                { optionText: "<iostream>", optionTag: "C" },
                { optionText: "<cmath>", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is typically used in Floyd-Warshall implementation?",
            options: [
                { optionText: "2D array or matrix", optionTag: "A" },
                { optionText: "Priority queue", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What should be the diagonal entries in the distance matrix initially?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "INF", optionTag: "C" },
                { optionText: "-1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many edges does Floyd-Warshall require to process?",
            options: [
                { optionText: "All pairs of nodes", optionTag: "A" },
                { optionText: "Only adjacent edges", optionTag: "B" },
                { optionText: "Only incoming edges", optionTag: "C" },
                { optionText: "Only outgoing edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Floyd-Warshall work on directed graphs?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only undirected", optionTag: "C" },
                { optionText: "Only on trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem can be solved by Floyd-Warshall?",
            options: [
                { optionText: "All-pairs shortest path", optionTag: "A" },
                { optionText: "Minimum spanning tree", optionTag: "B" },
                { optionText: "Single source shortest path", optionTag: "C" },
                { optionText: "Topological sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does Floyd-Warshall optimize?",
            options: [
                { optionText: "Path cost between all vertex pairs", optionTag: "A" },
                { optionText: "Number of vertices", optionTag: "B" },
                { optionText: "Edge count", optionTag: "C" },
                { optionText: "Degree of vertices", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
