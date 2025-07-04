import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Kruskal's Algorithm - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz tests your advanced understanding of Kruskal's Algorithm for finding the Minimum Spanning Tree (MST) in a graph, including union-find data structure, edge sorting, and implementation details in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "KruskalsAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the primary goal of Kruskal's Algorithm?",
            options: [
                { optionText: "Find the Minimum Spanning Tree of a graph", optionTag: "A" },
                { optionText: "Find the shortest path between two nodes", optionTag: "B" },
                { optionText: "Detect cycles in a graph", optionTag: "C" },
                { optionText: "Topologically sort the graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data structure is commonly used in Kruskal's Algorithm to detect cycles?",
            options: [
                { optionText: "Disjoint Set Union (Union-Find)", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Priority Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following steps is performed first in Kruskal's Algorithm?",
            options: [
                { optionText: "Sort edges by their weight", optionTag: "A" },
                { optionText: "Add all vertices to the MST", optionTag: "B" },
                { optionText: "Run DFS from the starting vertex", optionTag: "C" },
                { optionText: "Initialize all nodes as visited", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of sorting edges in Kruskal's Algorithm assuming E edges?",
            options: [
                { optionText: "O(E log E)", optionTag: "A" },
                { optionText: "O(V + E)", optionTag: "B" },
                { optionText: "O(V^2)", optionTag: "C" },
                { optionText: "O(log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In the Union-Find data structure, what does 'union by rank' help optimize?",
            options: [
                { optionText: "Keeps tree shallow to optimize find operations", optionTag: "A" },
                { optionText: "Speeds up edge sorting", optionTag: "B" },
                { optionText: "Removes cycles from the graph", optionTag: "C" },
                { optionText: "Helps in topological sorting", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition indicates that adding an edge would create a cycle in Kruskal's Algorithm?",
            options: [
                { optionText: "Both vertices of the edge belong to the same set", optionTag: "A" },
                { optionText: "Edge has the largest weight", optionTag: "B" },
                { optionText: "Edge is already included in MST", optionTag: "C" },
                { optionText: "Vertices have different parents", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the purpose of the 'find' operation in the Union-Find structure?",
            options: [
                { optionText: "To identify the set or parent of an element", optionTag: "A" },
                { optionText: "To merge two sets", optionTag: "B" },
                { optionText: "To insert an edge into MST", optionTag: "C" },
                { optionText: "To delete an edge", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the overall time complexity of Kruskal's Algorithm with E edges and V vertices using Union-Find?",
            options: [
                { optionText: "O(E log E)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E + V)", optionTag: "C" },
                { optionText: "O(log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is path compression used in Union-Find?",
            options: [
                { optionText: "To flatten the structure and speed up subsequent find operations", optionTag: "A" },
                { optionText: "To split a set into smaller sets", optionTag: "B" },
                { optionText: "To merge two edges", optionTag: "C" },
                { optionText: "To remove cycles from the graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a property of Kruskal's Algorithm?",
            options: [
                { optionText: "Works on disconnected graphs", optionTag: "A" },
                { optionText: "Can handle weighted graphs", optionTag: "B" },
                { optionText: "Is a greedy algorithm", optionTag: "C" },
                { optionText: "Constructs a minimum spanning forest if graph is disconnected", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if edges are not sorted before running Kruskal's Algorithm?",
            options: [
                { optionText: "The MST may not be minimal", optionTag: "A" },
                { optionText: "The algorithm runs faster", optionTag: "B" },
                { optionText: "Union-Find structure will fail", optionTag: "C" },
                { optionText: "The graph becomes disconnected", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In JavaScript, which data structure is most suitable for implementing Union-Find?",
            options: [
                { optionText: "Arrays to track parents and ranks", optionTag: "A" },
                { optionText: "Objects for key-value mapping", optionTag: "B" },
                { optionText: "Sets for storing vertices", optionTag: "C" },
                { optionText: "Maps for edge weights", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does Kruskal's Algorithm handle multiple edges with the same weight?",
            options: [
                { optionText: "Edges are considered in any order; algorithm still finds MST", optionTag: "A" },
                { optionText: "Algorithm fails with duplicate weights", optionTag: "B" },
                { optionText: "Edges with same weight are ignored", optionTag: "C" },
                { optionText: "Only the first edge with that weight is included", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What kind of graph input is required for Kruskal's Algorithm?",
            options: [
                { optionText: "Edge list representation", optionTag: "A" },
                { optionText: "Adjacency matrix only", optionTag: "B" },
                { optionText: "Adjacency list only", optionTag: "C" },
                { optionText: "Any input format except edge list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Kruskal's Algorithm be used for directed graphs?",
            options: [
                { optionText: "No, it works only on undirected graphs", optionTag: "A" },
                { optionText: "Yes, with slight modifications", optionTag: "B" },
                { optionText: "Yes, as-is", optionTag: "C" },
                { optionText: "Only if graph is acyclic", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the output of Kruskal's Algorithm?",
            options: [
                { optionText: "A set of edges forming the minimum spanning tree", optionTag: "A" },
                { optionText: "A shortest path tree", optionTag: "B" },
                { optionText: "A topologically sorted list", optionTag: "C" },
                { optionText: "A graph adjacency list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does Kruskal's Algorithm differ from Prim's Algorithm?",
            options: [
                { optionText: "Kruskal's adds edges globally; Prim's adds edges from a single vertex", optionTag: "A" },
                { optionText: "Kruskal's works only on trees; Prim's on graphs", optionTag: "B" },
                { optionText: "Prim's uses union-find; Kruskal's does not", optionTag: "C" },
                { optionText: "They are the same algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if the input graph to Kruskal's Algorithm is disconnected?",
            options: [
                { optionText: "It returns a minimum spanning forest", optionTag: "A" },
                { optionText: "Algorithm fails", optionTag: "B" },
                { optionText: "It returns no edges", optionTag: "C" },
                { optionText: "It returns a maximum spanning tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method in JavaScript could be used to sort the edges by weight before processing?",
            options: [
                { optionText: "Array.prototype.sort()", optionTag: "A" },
                { optionText: "Array.prototype.filter()", optionTag: "B" },
                { optionText: "Array.prototype.map()", optionTag: "C" },
                { optionText: "Array.prototype.reduce()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is NOT true about the Union-Find data structure used in Kruskal's Algorithm?",
            options: [
                { optionText: "It stores graph edges explicitly", optionTag: "A" },
                { optionText: "It helps in cycle detection", optionTag: "B" },
                { optionText: "It maintains disjoint sets", optionTag: "C" },
                { optionText: "It supports efficient union and find operations", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
