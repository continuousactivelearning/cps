import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Dijkstra's Algorithm - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of Dijkstra's Algorithm in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DijkstrasAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is Dijkstra's algorithm used for?",
            options: [
                { optionText: "Finding the shortest path in a weighted graph", optionTag: "A" },
                { optionText: "Topological sorting", optionTag: "B" },
                { optionText: "Cycle detection", optionTag: "C" },
                { optionText: "Spanning tree generation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data structure is commonly used to optimize Dijkstra’s algorithm?",
            options: [
                { optionText: "Priority Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Linked List", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Dijkstra’s algorithm handle negative edge weights?",
            options: [
                { optionText: "No", optionTag: "A" },
                { optionText: "Yes", optionTag: "B" },
                { optionText: "Only if there are no cycles", optionTag: "C" },
                { optionText: "Only with undirected graphs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Dijkstra’s algorithm using a binary heap?",
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
            questionText: "Which STL structure is ideal for implementing a priority queue in C++?",
            options: [
                { optionText: "priority_queue", optionTag: "A" },
                { optionText: "stack", optionTag: "B" },
                { optionText: "vector", optionTag: "C" },
                { optionText: "set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Dijkstra's algorithm starts with:",
            options: [
                { optionText: "The source node", optionTag: "A" },
                { optionText: "The farthest node", optionTag: "B" },
                { optionText: "The node with maximum degree", optionTag: "C" },
                { optionText: "The destination node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is stored in the distance array in Dijkstra’s algorithm?",
            options: [
                { optionText: "Minimum distance from source to each vertex", optionTag: "A" },
                { optionText: "Maximum edge weight", optionTag: "B" },
                { optionText: "Number of visited nodes", optionTag: "C" },
                { optionText: "Number of edges in path", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following graphs can be used with Dijkstra’s algorithm?",
            options: [
                { optionText: "Weighted graphs with non-negative edges", optionTag: "A" },
                { optionText: "Graphs with negative weights", optionTag: "B" },
                { optionText: "Unweighted graphs only", optionTag: "C" },
                { optionText: "Directed acyclic graphs only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is used when the graph has negative weights?",
            options: [
                { optionText: "Bellman-Ford", optionTag: "A" },
                { optionText: "Dijkstra", optionTag: "B" },
                { optionText: "Kruskal", optionTag: "C" },
                { optionText: "Prim", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Dijkstra's algorithm ensures:",
            options: [
                { optionText: "Shortest path from source to all nodes", optionTag: "A" },
                { optionText: "Shortest path to only one destination", optionTag: "B" },
                { optionText: "Longest path", optionTag: "C" },
                { optionText: "Shortest path to leaf nodes only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "If a node is visited in Dijkstra’s algorithm, what can we say about its shortest distance?",
            options: [
                { optionText: "It has been finalized", optionTag: "A" },
                { optionText: "It may still be updated", optionTag: "B" },
                { optionText: "It is infinite", optionTag: "C" },
                { optionText: "It is equal to edge weight", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following does NOT affect the result of Dijkstra’s algorithm?",
            options: [
                { optionText: "The order of node insertion", optionTag: "A" },
                { optionText: "The edge weights", optionTag: "B" },
                { optionText: "The data structure used", optionTag: "C" },
                { optionText: "Negative edge weights", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph representation is best for Dijkstra’s algorithm?",
            options: [
                { optionText: "Adjacency list", optionTag: "A" },
                { optionText: "Adjacency matrix", optionTag: "B" },
                { optionText: "Edge list", optionTag: "C" },
                { optionText: "Linked list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is initialized to INF in Dijkstra’s algorithm?",
            options: [
                { optionText: "All distances except the source", optionTag: "A" },
                { optionText: "All node values", optionTag: "B" },
                { optionText: "All edge weights", optionTag: "C" },
                { optionText: "Parent array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ constant is commonly used as infinity?",
            options: [
                { optionText: "INT_MAX", optionTag: "A" },
                { optionText: "NULL", optionTag: "B" },
                { optionText: "EOF", optionTag: "C" },
                { optionText: "DBL_MAX", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What condition checks whether a node is visited?",
            options: [
                { optionText: "visited[node] == true", optionTag: "A" },
                { optionText: "distance[node] == 0", optionTag: "B" },
                { optionText: "node == INF", optionTag: "C" },
                { optionText: "parent[node] != -1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the role of the priority queue in Dijkstra’s algorithm?",
            options: [
                { optionText: "Select the next node with the smallest distance", optionTag: "A" },
                { optionText: "Track all visited nodes", optionTag: "B" },
                { optionText: "Store adjacency list", optionTag: "C" },
                { optionText: "Track back edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When using priority_queue in C++, how do you store the smallest element on top?",
            options: [
                { optionText: "Use greater comparator", optionTag: "A" },
                { optionText: "Use less comparator", optionTag: "B" },
                { optionText: "Sort the vector", optionTag: "C" },
                { optionText: "Reverse the array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which edge is relaxed in Dijkstra's algorithm?",
            options: [
                { optionText: "One that offers a shorter path to a neighbor", optionTag: "A" },
                { optionText: "One with zero weight", optionTag: "B" },
                { optionText: "The longest edge", optionTag: "C" },
                { optionText: "The edge that forms a cycle", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does 'relaxation' mean in Dijkstra's algorithm?",
            options: [
                { optionText: "Updating distance if a better path is found", optionTag: "A" },
                { optionText: "Removing an edge", optionTag: "B" },
                { optionText: "Resetting all visited nodes", optionTag: "C" },
                { optionText: "Deleting the shortest path", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
