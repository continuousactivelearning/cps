import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Bellman-Ford Algorithm - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of the Bellman-Ford algorithm in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BellmanFordAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What problem does the Bellman-Ford algorithm solve?",
            options: [
                { optionText: "Single Source Shortest Path", optionTag: "A" },
                { optionText: "All Pair Shortest Path", optionTag: "B" },
                { optionText: "Minimum Spanning Tree", optionTag: "C" },
                { optionText: "Topological Sorting", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which type of graph can Bellman-Ford handle that Dijkstra cannot?",
            options: [
                { optionText: "Graphs with negative edge weights", optionTag: "A" },
                { optionText: "Graphs with only positive weights", optionTag: "B" },
                { optionText: "Unconnected graphs", optionTag: "C" },
                { optionText: "Graphs without cycles", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Bellman-Ford Algorithm?",
            options: [
                { optionText: "O(V * E)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E^2)", optionTag: "C" },
                { optionText: "O(V + E)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does Bellman-Ford algorithm detect?",
            options: [
                { optionText: "Negative weight cycles", optionTag: "A" },
                { optionText: "All cycles", optionTag: "B" },
                { optionText: "Back edges", optionTag: "C" },
                { optionText: "Self loops", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many times are all edges relaxed in Bellman-Ford algorithm?",
            options: [
                { optionText: "V - 1 times", optionTag: "A" },
                { optionText: "V times", optionTag: "B" },
                { optionText: "E times", optionTag: "C" },
                { optionText: "Until convergence", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does edge relaxation mean?",
            options: [
                { optionText: "Updating distance if a shorter path is found", optionTag: "A" },
                { optionText: "Reversing edge direction", optionTag: "B" },
                { optionText: "Removing an edge", optionTag: "C" },
                { optionText: "Creating a new edge", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following data structures is typically used in Bellman-Ford?",
            options: [
                { optionText: "Array for distances", optionTag: "A" },
                { optionText: "Priority queue", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Bellman-Ford algorithm works for which kind of graphs?",
            options: [
                { optionText: "Directed and weighted", optionTag: "A" },
                { optionText: "Undirected only", optionTag: "B" },
                { optionText: "Unweighted only", optionTag: "C" },
                { optionText: "Graphs without cycles", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When is a negative weight cycle detected in Bellman-Ford?",
            options: [
                { optionText: "If any edge can still be relaxed after V-1 iterations", optionTag: "A" },
                { optionText: "After V iterations", optionTag: "B" },
                { optionText: "If distance array becomes negative", optionTag: "C" },
                { optionText: "If graph has no edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the initial value for all distances except the source node?",
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
            questionText: "What value is assigned to the source node at the start?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "Infinity", optionTag: "B" },
                { optionText: "-1", optionTag: "C" },
                { optionText: "Depends on the graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is not an application of Bellman-Ford?",
            options: [
                { optionText: "Cycle detection", optionTag: "A" },
                { optionText: "Shortest path in negative edge graph", optionTag: "B" },
                { optionText: "Routing protocols", optionTag: "C" },
                { optionText: "Sorting elements", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Bellman-Ford is ______ compared to Dijkstra in terms of speed.",
            options: [
                { optionText: "Slower", optionTag: "A" },
                { optionText: "Faster", optionTag: "B" },
                { optionText: "Same", optionTag: "C" },
                { optionText: "Always constant", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which routing protocol uses Bellman-Ford?",
            options: [
                { optionText: "RIP (Routing Information Protocol)", optionTag: "A" },
                { optionText: "OSPF", optionTag: "B" },
                { optionText: "BGP", optionTag: "C" },
                { optionText: "EIGRP", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Bellman-Ford algorithm assumes the graph does not contain:",
            options: [
                { optionText: "Negative weight cycles", optionTag: "A" },
                { optionText: "Loops", optionTag: "B" },
                { optionText: "Disconnected components", optionTag: "C" },
                { optionText: "Positive edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many vertices must exist in the graph for Bellman-Ford to run?",
            options: [
                { optionText: "At least 1", optionTag: "A" },
                { optionText: "At least 2", optionTag: "B" },
                { optionText: "Equal to the number of edges", optionTag: "C" },
                { optionText: "Exactly 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following correctly describes Bellman-Ford’s output?",
            options: [
                { optionText: "Shortest path from source to all other vertices", optionTag: "A" },
                { optionText: "Minimum spanning tree", optionTag: "B" },
                { optionText: "Longest path", optionTag: "C" },
                { optionText: "Only direct connections", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is guaranteed to work with negative edge weights?",
            options: [
                { optionText: "Bellman-Ford", optionTag: "A" },
                { optionText: "Dijkstra", optionTag: "B" },
                { optionText: "Prim's", optionTag: "C" },
                { optionText: "Kruskal's", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is required to represent a graph in Bellman-Ford?",
            options: [
                { optionText: "Edge list", optionTag: "A" },
                { optionText: "Adjacency matrix", optionTag: "B" },
                { optionText: "Binary tree", optionTag: "C" },
                { optionText: "Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why does Bellman-Ford use V-1 iterations?",
            options: [
                { optionText: "To guarantee shortest paths in all cases", optionTag: "A" },
                { optionText: "To cover all cycles", optionTag: "B" },
                { optionText: "To match edge count", optionTag: "C" },
                { optionText: "To ensure infinite loops", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
