import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Prim's Algorithm - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz evaluates your understanding of Prim's Algorithm in JavaScript for computing Minimum Spanning Trees.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "PrimsAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Prim's Algorithm is used to find:",
            options: [
                { optionText: "Minimum Spanning Tree", optionTag: "A" },
                { optionText: "Shortest Path Tree", optionTag: "B" },
                { optionText: "Topological Order", optionTag: "C" },
                { optionText: "Eulerian Path", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Prim’s algorithm using a Min Heap and adjacency list?",
            options: [
                { optionText: "O(E log V)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(V + E)", optionTag: "C" },
                { optionText: "O(E^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Prim's Algorithm always starts from:",
            options: [
                { optionText: "Any arbitrary node", optionTag: "A" },
                { optionText: "The smallest weight node", optionTag: "B" },
                { optionText: "A leaf node", optionTag: "C" },
                { optionText: "Node with maximum degree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is most efficient for Prim's algorithm?",
            options: [
                { optionText: "Min Heap with adjacency list", optionTag: "A" },
                { optionText: "Adjacency matrix with array", optionTag: "B" },
                { optionText: "Queue with list", optionTag: "C" },
                { optionText: "Stack with graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does Prim’s Algorithm do in each step?",
            options: [
                { optionText: "Adds the minimum weight edge that connects a visited to an unvisited node", optionTag: "A" },
                { optionText: "Removes maximum weight edge", optionTag: "B" },
                { optionText: "Sorts all edges", optionTag: "C" },
                { optionText: "Visits all neighbors of the current node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What condition must the graph meet to apply Prim’s algorithm?",
            options: [
                { optionText: "Graph must be connected and undirected", optionTag: "A" },
                { optionText: "Graph must be directed", optionTag: "B" },
                { optionText: "Graph must be acyclic", optionTag: "C" },
                { optionText: "Graph must have negative edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the output of Prim’s algorithm?",
            options: [
                { optionText: "A Minimum Spanning Tree", optionTag: "A" },
                { optionText: "Shortest paths from source", optionTag: "B" },
                { optionText: "A topological sort", optionTag: "C" },
                { optionText: "Number of connected components", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript structure is ideal for a priority queue?",
            options: [
                { optionText: "Min Heap", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which edge does Prim’s algorithm never include?",
            options: [
                { optionText: "Edge creating a cycle", optionTag: "A" },
                { optionText: "Minimum edge in the graph", optionTag: "B" },
                { optionText: "Edge from start node", optionTag: "C" },
                { optionText: "Edge with equal weight", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript concept is useful to represent a graph for Prim’s?",
            options: [
                { optionText: "Adjacency list with Map()", optionTag: "A" },
                { optionText: "Set of arrays", optionTag: "B" },
                { optionText: "Nested functions", optionTag: "C" },
                { optionText: "Flat array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "If a graph has V vertices, how many edges will MST contain?",
            options: [
                { optionText: "V - 1", optionTag: "A" },
                { optionText: "V", optionTag: "B" },
                { optionText: "2 * V", optionTag: "C" },
                { optionText: "Depends on graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is similar to Prim’s?",
            options: [
                { optionText: "Kruskal’s", optionTag: "A" },
                { optionText: "Dijkstra’s", optionTag: "B" },
                { optionText: "Bellman-Ford", optionTag: "C" },
                { optionText: "DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Prim’s algorithm can be terminated when:",
            options: [
                { optionText: "All vertices are included in MST", optionTag: "A" },
                { optionText: "All edges are visited", optionTag: "B" },
                { optionText: "All weights are sorted", optionTag: "C" },
                { optionText: "Cycle is detected", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Prim’s algorithm does not work on:",
            options: [
                { optionText: "Disconnected graphs", optionTag: "A" },
                { optionText: "Undirected graphs", optionTag: "B" },
                { optionText: "Connected graphs", optionTag: "C" },
                { optionText: "Graphs with duplicate weights", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which loop structure helps to select the next minimum edge in Prim’s?",
            options: [
                { optionText: "While loop with min heap", optionTag: "A" },
                { optionText: "For loop with index", optionTag: "B" },
                { optionText: "Map for edges", optionTag: "C" },
                { optionText: "Filter function", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the initial key value of all vertices in Prim’s?",
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
            questionText: "Which node has key value 0 at start?",
            options: [
                { optionText: "The source node", optionTag: "A" },
                { optionText: "All nodes", optionTag: "B" },
                { optionText: "Sink node", optionTag: "C" },
                { optionText: "Maximum degree node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Prim’s algorithm is a type of:",
            options: [
                { optionText: "Greedy algorithm", optionTag: "A" },
                { optionText: "Backtracking algorithm", optionTag: "B" },
                { optionText: "Divide and Conquer", optionTag: "C" },
                { optionText: "Dynamic programming", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which field tracks if a vertex is already in MST?",
            options: [
                { optionText: "visited[]", optionTag: "A" },
                { optionText: "path[]", optionTag: "B" },
                { optionText: "queue[]", optionTag: "C" },
                { optionText: "parent[]", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Prim’s and Kruskal’s both solve the problem of:",
            options: [
                { optionText: "Minimum Spanning Tree", optionTag: "A" },
                { optionText: "Maximum Spanning Tree", optionTag: "B" },
                { optionText: "Shortest Path", optionTag: "C" },
                { optionText: "Graph Coloring", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
