import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Graphs - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This advanced quiz evaluates your in-depth knowledge of graph theory, algorithms, and implementation techniques in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Graphs"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which data structure is typically used for implementing adjacency lists in JavaScript?",
            options: [
                { optionText: "Map of arrays", optionTag: "A" },
                { optionText: "Set of objects", optionTag: "B" },
                { optionText: "Queue of strings", optionTag: "C" },
                { optionText: "Stack of arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm can detect cycles in a directed graph?",
            options: [
                { optionText: "DFS with recursion stack", optionTag: "A" },
                { optionText: "BFS with a queue", optionTag: "B" },
                { optionText: "Prim’s Algorithm", optionTag: "C" },
                { optionText: "Kruskal’s Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following algorithms is used for finding strongly connected components?",
            options: [
                { optionText: "Kosaraju’s Algorithm", optionTag: "A" },
                { optionText: "Dijkstra’s Algorithm", optionTag: "B" },
                { optionText: "Prim’s Algorithm", optionTag: "C" },
                { optionText: "BFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal technique is suitable for level-order traversal in graphs?",
            options: [
                { optionText: "Breadth-First Search", optionTag: "A" },
                { optionText: "Depth-First Search", optionTag: "B" },
                { optionText: "Topological Sort", optionTag: "C" },
                { optionText: "DFS with stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Dijkstra’s algorithm using a min-heap?",
            options: [
                { optionText: "O((V + E) log V)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E)", optionTag: "C" },
                { optionText: "O(V log E)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is used to find the minimum spanning tree?",
            options: [
                { optionText: "Prim’s and Kruskal’s Algorithms", optionTag: "A" },
                { optionText: "Dijkstra’s Algorithm", optionTag: "B" },
                { optionText: "Bellman-Ford Algorithm", optionTag: "C" },
                { optionText: "Floyd-Warshall Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In topological sorting, what condition must the graph satisfy?",
            options: [
                { optionText: "It must be a Directed Acyclic Graph (DAG)", optionTag: "A" },
                { optionText: "It must be undirected", optionTag: "B" },
                { optionText: "It must be weighted", optionTag: "C" },
                { optionText: "It must be connected", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm works with negative edge weights but not negative cycles?",
            options: [
                { optionText: "Bellman-Ford Algorithm", optionTag: "A" },
                { optionText: "Dijkstra’s Algorithm", optionTag: "B" },
                { optionText: "Floyd-Warshall Algorithm", optionTag: "C" },
                { optionText: "Kruskal’s Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the key difference between DFS and BFS in implementation?",
            options: [
                { optionText: "DFS uses stack, BFS uses queue", optionTag: "A" },
                { optionText: "DFS is iterative, BFS is recursive", optionTag: "B" },
                { optionText: "BFS uses recursion stack", optionTag: "C" },
                { optionText: "DFS is used for shortest path", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript structure can efficiently represent a weighted graph?",
            options: [
                { optionText: "Map with Map/Array pairs", optionTag: "A" },
                { optionText: "Array of integers", optionTag: "B" },
                { optionText: "Set of strings", optionTag: "C" },
                { optionText: "Object with boolean values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the maximum number of edges in an undirected graph with V vertices?",
            options: [
                { optionText: "V(V - 1) / 2", optionTag: "A" },
                { optionText: "V(V + 1)", optionTag: "B" },
                { optionText: "V^2", optionTag: "C" },
                { optionText: "V", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph representation is more space-efficient for sparse graphs?",
            options: [
                { optionText: "Adjacency list", optionTag: "A" },
                { optionText: "Adjacency matrix", optionTag: "B" },
                { optionText: "Edge list", optionTag: "C" },
                { optionText: "Hash table", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the purpose of a visited set in DFS?",
            options: [
                { optionText: "To avoid revisiting nodes", optionTag: "A" },
                { optionText: "To sort the result", optionTag: "B" },
                { optionText: "To store edge weights", optionTag: "C" },
                { optionText: "To track recursion depth", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm detects negative cycles in a graph?",
            options: [
                { optionText: "Bellman-Ford Algorithm", optionTag: "A" },
                { optionText: "Dijkstra’s Algorithm", optionTag: "B" },
                { optionText: "Prim’s Algorithm", optionTag: "C" },
                { optionText: "Topological Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In JavaScript, how can a graph be dynamically updated (add/remove edges)?",
            options: [
                { optionText: "Use Map with Sets or Arrays for neighbors", optionTag: "A" },
                { optionText: "Use constant-size arrays", optionTag: "B" },
                { optionText: "Rebuild entire matrix each time", optionTag: "C" },
                { optionText: "Use static global variables", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case space complexity of an adjacency matrix?",
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
            questionText: "How many connected components can an undirected graph have?",
            options: [
                { optionText: "1 or more", optionTag: "A" },
                { optionText: "Only 1", optionTag: "B" },
                { optionText: "Exactly V", optionTag: "C" },
                { optionText: "At most 2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal ensures the shortest path in an unweighted graph?",
            options: [
                { optionText: "Breadth-First Search", optionTag: "A" },
                { optionText: "Depth-First Search", optionTag: "B" },
                { optionText: "Dijkstra’s Algorithm", optionTag: "C" },
                { optionText: "Prim’s Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does Kahn’s algorithm compute?",
            options: [
                { optionText: "Topological order", optionTag: "A" },
                { optionText: "Shortest path", optionTag: "B" },
                { optionText: "Cycle length", optionTag: "C" },
                { optionText: "Minimum spanning tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a weighted graph, which traversal avoids unnecessary path explorations?",
            options: [
                { optionText: "Dijkstra’s Algorithm", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "DFS", optionTag: "C" },
                { optionText: "Flood Fill", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
