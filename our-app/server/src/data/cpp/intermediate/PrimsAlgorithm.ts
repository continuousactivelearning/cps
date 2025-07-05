import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Prim's Algorithm - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz tests your intermediate knowledge of Prim's Algorithm in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "PrimsAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the main objective of Prim's algorithm?",
            options: [
                { optionText: "To find the shortest path", optionTag: "A" },
                { optionText: "To sort the graph", optionTag: "B" },
                { optionText: "To find the minimum spanning tree", optionTag: "C" },
                { optionText: "To detect cycles", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Prim's algorithm starts from:",
            options: [
                { optionText: "The vertex with the smallest value", optionTag: "A" },
                { optionText: "A randomly chosen vertex", optionTag: "B" },
                { optionText: "The last vertex", optionTag: "C" },
                { optionText: "The central node", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What data structure is commonly used to optimize Prim’s algorithm?",
            options: [
                { optionText: "Stack", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Priority Queue (Min Heap)", optionTag: "C" },
                { optionText: "Hash Table", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "The time complexity of Prim's algorithm using an adjacency matrix is:",
            options: [
                { optionText: "O(V^2)", optionTag: "A" },
                { optionText: "O(E log V)", optionTag: "B" },
                { optionText: "O(V + E)", optionTag: "C" },
                { optionText: "O(log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the weight of a minimum spanning tree?",
            options: [
                { optionText: "Maximum of edge weights", optionTag: "A" },
                { optionText: "Sum of selected edge weights", optionTag: "B" },
                { optionText: "Count of selected edges", optionTag: "C" },
                { optionText: "Minimum vertex values", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "In Prim’s algorithm, how are edges selected?",
            options: [
                { optionText: "Randomly", optionTag: "A" },
                { optionText: "Based on maximum weight", optionTag: "B" },
                { optionText: "Based on minimum weight from visited to unvisited", optionTag: "C" },
                { optionText: "Based on lexicographic order", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Can Prim's algorithm be applied to a disconnected graph?",
            options: [
                { optionText: "Yes, always", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only if edges are sorted", optionTag: "C" },
                { optionText: "Only if graph is weighted", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What will be the number of edges in the MST of a connected graph with N vertices?",
            options: [
                { optionText: "N", optionTag: "A" },
                { optionText: "N-1", optionTag: "B" },
                { optionText: "N+1", optionTag: "C" },
                { optionText: "E", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Prim’s algorithm guarantees:",
            options: [
                { optionText: "Minimum path", optionTag: "A" },
                { optionText: "Maximum cost", optionTag: "B" },
                { optionText: "Optimal spanning tree", optionTag: "C" },
                { optionText: "Eulerian path", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "In C++, which header file provides the priority_queue used in Prim's?",
            options: [
                { optionText: "<map>", optionTag: "A" },
                { optionText: "<set>", optionTag: "B" },
                { optionText: "<queue>", optionTag: "C" },
                { optionText: "<stack>", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What happens if Prim's algorithm is run on an unweighted graph?",
            options: [
                { optionText: "Returns null", optionTag: "A" },
                { optionText: "Works with all weights as 1", optionTag: "B" },
                { optionText: "Fails with error", optionTag: "C" },
                { optionText: "Generates longest path", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is a minimum spanning tree?",
            options: [
                { optionText: "A tree with minimum number of vertices", optionTag: "A" },
                { optionText: "A tree containing only leaf nodes", optionTag: "B" },
                { optionText: "A tree connecting all vertices with minimal total edge cost", optionTag: "C" },
                { optionText: "A tree formed by removing cycles", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which is better in dense graphs: Prim’s or Kruskal’s?",
            options: [
                { optionText: "Kruskal’s", optionTag: "A" },
                { optionText: "Prim’s with Adjacency Matrix", optionTag: "B" },
                { optionText: "Dijkstra", optionTag: "C" },
                { optionText: "Floyd-Warshall", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of the following is *not* used in Prim’s algorithm?",
            options: [
                { optionText: "Visited array", optionTag: "A" },
                { optionText: "Priority queue", optionTag: "B" },
                { optionText: "Union-Find", optionTag: "C" },
                { optionText: "Adjacency list", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "How many MSTs can a graph have?",
            options: [
                { optionText: "One", optionTag: "A" },
                { optionText: "Zero", optionTag: "B" },
                { optionText: "Multiple if equal weight edges exist", optionTag: "C" },
                { optionText: "Infinite", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "If all edge weights are equal, Prim’s algorithm behaves like:",
            options: [
                { optionText: "DFS", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "Topological Sort", optionTag: "C" },
                { optionText: "Floyd-Warshall", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "The difference between Prim’s and Kruskal’s algorithm is:",
            options: [
                { optionText: "Prim’s works on vertices, Kruskal’s on edges", optionTag: "A" },
                { optionText: "Kruskal’s is faster", optionTag: "B" },
                { optionText: "Prim’s requires sorting", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you ensure a visited node is not revisited in Prim's?",
            options: [
                { optionText: "Skip if distance > 0", optionTag: "A" },
                { optionText: "Mark visited nodes in a boolean array", optionTag: "B" },
                { optionText: "Delete the node", optionTag: "C" },
                { optionText: "Reset graph", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "If the graph has negative weights, does Prim's still work?",
            options: [
                { optionText: "No", optionTag: "A" },
                { optionText: "Only if cycle exists", optionTag: "B" },
                { optionText: "Yes", optionTag: "C" },
                { optionText: "Only for trees", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Prim’s algorithm stops when:",
            options: [
                { optionText: "All vertices are visited", optionTag: "A" },
                { optionText: "All edges are used", optionTag: "B" },
                { optionText: "All vertices form a cycle", optionTag: "C" },
                { optionText: "No minimum edge is found", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
