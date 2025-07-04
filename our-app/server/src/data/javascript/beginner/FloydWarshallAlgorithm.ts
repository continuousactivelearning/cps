import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Floyd-Warshall Algorithm - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz tests your basic knowledge of the Floyd-Warshall algorithm in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "FloydWarshallAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What problem does the Floyd-Warshall algorithm solve?",
            options: [
                { optionText: "All-pairs shortest path", optionTag: "A" },
                { optionText: "Minimum spanning tree", optionTag: "B" },
                { optionText: "Single-source shortest path", optionTag: "C" },
                { optionText: "Topological sorting", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of the Floyd-Warshall algorithm?",
            options: [
                { optionText: "O(n^3)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" },
                { optionText: "O(n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is commonly used to represent the graph in Floyd-Warshall?",
            options: [
                { optionText: "2D array (adjacency matrix)", optionTag: "A" },
                { optionText: "Adjacency list", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Floyd-Warshall handle negative edge weights?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only for DAGs", optionTag: "C" },
                { optionText: "Only if weights are unique", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Floyd-Warshall detect negative weight cycles?",
            options: [
                { optionText: "Yes, by checking if dist[i][i] < 0", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only for complete graphs", optionTag: "C" },
                { optionText: "Only if source and destination are same", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a key step in the Floyd-Warshall algorithm?",
            options: [
                { optionText: "Update dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])", optionTag: "A" },
                { optionText: "Push all nodes into stack", optionTag: "B" },
                { optionText: "Sort all edges by weight", optionTag: "C" },
                { optionText: "Choose smallest degree vertex", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many nested loops are used in Floyd-Warshall?",
            options: [
                { optionText: "3", optionTag: "A" },
                { optionText: "2", optionTag: "B" },
                { optionText: "4", optionTag: "C" },
                { optionText: "1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the initialization value for unreachable vertices?",
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
            questionText: "Which algorithm category does Floyd-Warshall fall under?",
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
            questionText: "What does dist[i][j] represent in the Floyd-Warshall algorithm?",
            options: [
                { optionText: "Shortest distance from i to j", optionTag: "A" },
                { optionText: "Sum of all edges", optionTag: "B" },
                { optionText: "Number of paths from i to j", optionTag: "C" },
                { optionText: "Weight of i", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Floyd-Warshall, when is a distance updated?",
            options: [
                { optionText: "If a shorter path is found via k", optionTag: "A" },
                { optionText: "Every time a node is visited", optionTag: "B" },
                { optionText: "After sorting edges", optionTag: "C" },
                { optionText: "After all nodes are visited once", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph types can Floyd-Warshall be applied to?",
            options: [
                { optionText: "Directed and weighted graphs", optionTag: "A" },
                { optionText: "Unweighted graphs only", optionTag: "B" },
                { optionText: "Undirected graphs only", optionTag: "C" },
                { optionText: "Only complete graphs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a disadvantage of Floyd-Warshall?",
            options: [
                { optionText: "High time complexity for large graphs", optionTag: "A" },
                { optionText: "Cannot find shortest path", optionTag: "B" },
                { optionText: "Does not work with weights", optionTag: "C" },
                { optionText: "Cannot represent graphs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the output of the Floyd-Warshall algorithm?",
            options: [
                { optionText: "Distance matrix with shortest paths", optionTag: "A" },
                { optionText: "Tree representation", optionTag: "B" },
                { optionText: "Stack of visited nodes", optionTag: "C" },
                { optionText: "Adjacency list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What value is used for diagonal elements of distance matrix?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "Infinity", optionTag: "C" },
                { optionText: "-1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following languages can implement Floyd-Warshall?",
            options: [
                { optionText: "All programming languages", optionTag: "A" },
                { optionText: "Only C++", optionTag: "B" },
                { optionText: "Only Java", optionTag: "C" },
                { optionText: "Only Python", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Floyd-Warshall is typically used in which domain?",
            options: [
                { optionText: "Routing and networking", optionTag: "A" },
                { optionText: "Image processing", optionTag: "B" },
                { optionText: "Machine learning", optionTag: "C" },
                { optionText: "Web development", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if a negative weight cycle exists?",
            options: [
                { optionText: "The algorithm detects it", optionTag: "A" },
                { optionText: "It returns incorrect values", optionTag: "B" },
                { optionText: "It runs forever", optionTag: "C" },
                { optionText: "It skips the cycle", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is Infinity represented in JavaScript for this algorithm?",
            options: [
                { optionText: "Number.POSITIVE_INFINITY", optionTag: "A" },
                { optionText: "undefined", optionTag: "B" },
                { optionText: "null", optionTag: "C" },
                { optionText: "MAX_VALUE", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Does Floyd-Warshall work on weighted undirected graphs?",
            options: [
                { optionText: "Yes, if weights are duplicated in both directions", optionTag: "A" },
                { optionText: "No, only directed", optionTag: "B" },
                { optionText: "Only DAGs", optionTag: "C" },
                { optionText: "Only complete graphs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
