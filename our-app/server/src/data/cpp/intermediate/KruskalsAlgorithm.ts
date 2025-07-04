import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Kruskal's Algorithm - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz tests your intermediate knowledge of Kruskal's Algorithm in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "KruskalsAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the main purpose of Kruskal's algorithm?",
            options: [
                { optionText: "To find the Minimum Spanning Tree", optionTag: "A" },
                { optionText: "To find shortest paths", optionTag: "B" },
                { optionText: "To detect cycles", optionTag: "C" },
                { optionText: "To count components", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Kruskal's algorithm using Union-Find?",
            options: [
                { optionText: "O(E log E)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E^2)", optionTag: "C" },
                { optionText: "O(V + E)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data structure is used in Kruskal’s algorithm to detect cycles?",
            options: [
                { optionText: "Disjoint Set (Union-Find)", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Graph Matrix", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the first step in Kruskal’s algorithm?",
            options: [
                { optionText: "Sort all edges in ascending order of weight", optionTag: "A" },
                { optionText: "Visit all nodes", optionTag: "B" },
                { optionText: "Run DFS", optionTag: "C" },
                { optionText: "Build adjacency list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Kruskal’s algorithm works best for which type of graph?",
            options: [
                { optionText: "Sparse graphs", optionTag: "A" },
                { optionText: "Dense graphs", optionTag: "B" },
                { optionText: "Complete graphs", optionTag: "C" },
                { optionText: "Disconnected graphs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT required in Kruskal’s algorithm?",
            options: [
                { optionText: "Visited array", optionTag: "A" },
                { optionText: "Union-Find structure", optionTag: "B" },
                { optionText: "Edge list", optionTag: "C" },
                { optionText: "Sorting of edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "If a graph has V vertices, how many edges will its MST contain?",
            options: [
                { optionText: "V - 1", optionTag: "A" },
                { optionText: "V", optionTag: "B" },
                { optionText: "V + 1", optionTag: "C" },
                { optionText: "2V - 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true for Kruskal’s algorithm?",
            options: [
                { optionText: "It always produces a tree", optionTag: "A" },
                { optionText: "It only works for directed graphs", optionTag: "B" },
                { optionText: "It doesn’t work for negative weights", optionTag: "C" },
                { optionText: "It uses a priority queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if Kruskal’s algorithm adds an edge forming a cycle?",
            options: [
                { optionText: "The edge is skipped", optionTag: "A" },
                { optionText: "The algorithm restarts", optionTag: "B" },
                { optionText: "The program crashes", optionTag: "C" },
                { optionText: "All previous edges are removed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which standard library function is useful for sorting edges in C++?",
            options: [
                { optionText: "std::sort", optionTag: "A" },
                { optionText: "std::shuffle", optionTag: "B" },
                { optionText: "std::random", optionTag: "C" },
                { optionText: "std::count", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What condition checks if two vertices belong to the same set in Union-Find?",
            options: [
                { optionText: "find(u) == find(v)", optionTag: "A" },
                { optionText: "u == v", optionTag: "B" },
                { optionText: "parent[u] == parent[v]", optionTag: "C" },
                { optionText: "depth[u] == depth[v]", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How are the sets merged in Union-Find during Kruskal's?",
            options: [
                { optionText: "By union operation", optionTag: "A" },
                { optionText: "By join operation", optionTag: "B" },
                { optionText: "By add operation", optionTag: "C" },
                { optionText: "By search operation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which version of Union-Find improves efficiency in Kruskal's?",
            options: [
                { optionText: "Union by rank with path compression", optionTag: "A" },
                { optionText: "Simple union", optionTag: "B" },
                { optionText: "Only path compression", optionTag: "C" },
                { optionText: "Only rank-based union", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting criteria is used on edges?",
            options: [
                { optionText: "Edge weight ascending", optionTag: "A" },
                { optionText: "Edge weight descending", optionTag: "B" },
                { optionText: "Vertex index ascending", optionTag: "C" },
                { optionText: "Vertex degree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Kruskal’s algorithm terminates when:",
            options: [
                { optionText: "MST has (V - 1) edges", optionTag: "A" },
                { optionText: "Graph is sorted", optionTag: "B" },
                { optionText: "Queue is empty", optionTag: "C" },
                { optionText: "All components are visited", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph representation is best suited for Kruskal's?",
            options: [
                { optionText: "Edge list", optionTag: "A" },
                { optionText: "Adjacency list", optionTag: "B" },
                { optionText: "Adjacency matrix", optionTag: "C" },
                { optionText: "Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which step ensures that the MST remains acyclic?",
            options: [
                { optionText: "Cycle detection using Union-Find", optionTag: "A" },
                { optionText: "Vertex degree check", optionTag: "B" },
                { optionText: "DFS traversal", optionTag: "C" },
                { optionText: "Visited marking", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Kruskal’s algorithm is a type of which technique?",
            options: [
                { optionText: "Greedy", optionTag: "A" },
                { optionText: "Divide and conquer", optionTag: "B" },
                { optionText: "Dynamic programming", optionTag: "C" },
                { optionText: "Backtracking", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In which case does Kruskal’s algorithm fail?",
            options: [
                { optionText: "It does not fail for connected undirected graphs", optionTag: "A" },
                { optionText: "When graph has loops", optionTag: "B" },
                { optionText: "When weights are equal", optionTag: "C" },
                { optionText: "When DFS is used instead", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will happen if Kruskal’s algorithm is run on a disconnected graph?",
            options: [
                { optionText: "It will form a forest", optionTag: "A" },
                { optionText: "It will crash", optionTag: "B" },
                { optionText: "It will connect components", optionTag: "C" },
                { optionText: "It will enter infinite loop", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
