import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Kruskal's Algorithm - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz tests your advanced understanding of Kruskal's Algorithm in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "KruskalsAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the primary use of Kruskal's algorithm?",
            options: [
                { optionText: "Finding Minimum Spanning Tree", optionTag: "A" },
                { optionText: "Finding Shortest Path", optionTag: "B" },
                { optionText: "Finding Strongly Connected Components", optionTag: "C" },
                { optionText: "Finding Topological Order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is essential for Kruskal's algorithm?",
            options: [
                { optionText: "Disjoint Set Union", optionTag: "A" },
                { optionText: "Priority Queue", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Deque", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Kruskal's algorithm using Union-Find with path compression?",
            options: [
                { optionText: "O(E log E)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E^2)", optionTag: "C" },
                { optionText: "O(E log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Kruskal’s algorithm, how are the edges sorted?",
            options: [
                { optionText: "By weight in ascending order", optionTag: "A" },
                { optionText: "By weight in descending order", optionTag: "B" },
                { optionText: "By node ID", optionTag: "C" },
                { optionText: "By edge length", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is cycle detection important in Kruskal’s algorithm?",
            options: [
                { optionText: "To avoid creating loops", optionTag: "A" },
                { optionText: "To reduce time complexity", optionTag: "B" },
                { optionText: "To optimize DFS traversal", optionTag: "C" },
                { optionText: "To check bipartiteness", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will be the output of Kruskal’s algorithm if the input graph is disconnected?",
            options: [
                { optionText: "Forest of Minimum Spanning Trees", optionTag: "A" },
                { optionText: "Cycle in graph", optionTag: "B" },
                { optionText: "Maximum Spanning Tree", optionTag: "C" },
                { optionText: "Runtime error", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which part of Kruskal’s algorithm benefits the most from sorting?",
            options: [
                { optionText: "Edge selection", optionTag: "A" },
                { optionText: "Path compression", optionTag: "B" },
                { optionText: "Tree balancing", optionTag: "C" },
                { optionText: "Vertex initialization", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is **not** true about Kruskal’s algorithm?",
            options: [
                { optionText: "It works on disconnected graphs", optionTag: "A" },
                { optionText: "It needs a connected graph to find a spanning tree", optionTag: "B" },
                { optionText: "It is a greedy algorithm", optionTag: "C" },
                { optionText: "It sorts edges initially", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which sorting algorithm is most efficient for edge sorting in Kruskal's algorithm?",
            options: [
                { optionText: "Quick Sort or Merge Sort", optionTag: "A" },
                { optionText: "Bubble Sort", optionTag: "B" },
                { optionText: "Selection Sort", optionTag: "C" },
                { optionText: "Insertion Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many edges will the MST contain for a graph with V vertices?",
            options: [
                { optionText: "V - 1", optionTag: "A" },
                { optionText: "V", optionTag: "B" },
                { optionText: "E - V", optionTag: "C" },
                { optionText: "V / 2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition must hold true to safely add an edge in Kruskal's algorithm?",
            options: [
                { optionText: "The edge connects two different sets", optionTag: "A" },
                { optionText: "The edge has minimum weight", optionTag: "B" },
                { optionText: "The edge is part of a cycle", optionTag: "C" },
                { optionText: "The edge starts from vertex 0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the output of Kruskal’s algorithm?",
            options: [
                { optionText: "Set of MST edges", optionTag: "A" },
                { optionText: "Set of cycles", optionTag: "B" },
                { optionText: "Set of shortest paths", optionTag: "C" },
                { optionText: "Complete Graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Kruskal’s algorithm be implemented without sorting?",
            options: [
                { optionText: "Yes, using a priority queue", optionTag: "A" },
                { optionText: "No, sorting is mandatory", optionTag: "B" },
                { optionText: "Yes, using BFS", optionTag: "C" },
                { optionText: "Only if graph is directed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Kruskal’s algorithm stops when:",
            options: [
                { optionText: "V - 1 edges are added", optionTag: "A" },
                { optionText: "All edges are visited", optionTag: "B" },
                { optionText: "Cycle is formed", optionTag: "C" },
                { optionText: "Vertex 0 is isolated", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In DSU, what is the effect of union by rank?",
            options: [
                { optionText: "Prevents deep trees", optionTag: "A" },
                { optionText: "Increases recursion depth", optionTag: "B" },
                { optionText: "Creates cycles", optionTag: "C" },
                { optionText: "Increases time complexity", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property is true for MST generated by Kruskal’s algorithm?",
            options: [
                { optionText: "Always unique if all weights are unique", optionTag: "A" },
                { optionText: "May contain cycles", optionTag: "B" },
                { optionText: "All edges are used", optionTag: "C" },
                { optionText: "Always disconnected", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function is commonly used for union operation in DSU?",
            options: [
                { optionText: "union(u, v)", optionTag: "A" },
                { optionText: "merge(v, u)", optionTag: "B" },
                { optionText: "link(v, u)", optionTag: "C" },
                { optionText: "append(u, v)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which type of graphs does Kruskal's algorithm work on?",
            options: [
                { optionText: "Undirected and weighted", optionTag: "A" },
                { optionText: "Directed and unweighted", optionTag: "B" },
                { optionText: "Unweighted and directed", optionTag: "C" },
                { optionText: "Only trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Kruskal’s algorithm, what happens if you don’t use path compression?",
            options: [
                { optionText: "DSU operations become slower", optionTag: "A" },
                { optionText: "MST is incorrect", optionTag: "B" },
                { optionText: "All vertices get merged instantly", optionTag: "C" },
                { optionText: "Edge selection becomes invalid", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
