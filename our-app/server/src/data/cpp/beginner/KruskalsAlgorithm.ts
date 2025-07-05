import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Kruskal's Algorithm - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of Kruskal's Algorithm in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "KruskalsAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the main goal of Kruskal’s Algorithm?",
            options: [
                { optionText: "To find the Minimum Spanning Tree", optionTag: "A" },
                { optionText: "To find the Shortest Path", optionTag: "B" },
                { optionText: "To find Cycles", optionTag: "C" },
                { optionText: "To count connected components", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Kruskal’s algorithm is based on which algorithmic paradigm?",
            options: [
                { optionText: "Greedy", optionTag: "A" },
                { optionText: "Divide and Conquer", optionTag: "B" },
                { optionText: "Dynamic Programming", optionTag: "C" },
                { optionText: "Backtracking", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data structure is commonly used in Kruskal's Algorithm to detect cycles?",
            options: [
                { optionText: "Disjoint Set (Union-Find)", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Priority Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the first step in Kruskal’s algorithm?",
            options: [
                { optionText: "Sort all edges by weight", optionTag: "A" },
                { optionText: "Initialize distance array", optionTag: "B" },
                { optionText: "Pick a source node", optionTag: "C" },
                { optionText: "Traverse the graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Kruskal’s algorithm using union-find?",
            options: [
                { optionText: "O(E log E)", optionTag: "A" },
                { optionText: "O(V²)", optionTag: "B" },
                { optionText: "O(E²)", optionTag: "C" },
                { optionText: "O(V log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What condition must be satisfied when adding an edge in Kruskal’s algorithm?",
            options: [
                { optionText: "It should not form a cycle", optionTag: "A" },
                { optionText: "It must connect only leaf nodes", optionTag: "B" },
                { optionText: "It must have maximum weight", optionTag: "C" },
                { optionText: "It must form a loop", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many edges are in the MST of a connected graph with V vertices?",
            options: [
                { optionText: "V - 1", optionTag: "A" },
                { optionText: "V", optionTag: "B" },
                { optionText: "V + 1", optionTag: "C" },
                { optionText: "2V", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ STL function can be used to sort the edges?",
            options: [
                { optionText: "std::sort()", optionTag: "A" },
                { optionText: "std::order()", optionTag: "B" },
                { optionText: "std::arrange()", optionTag: "C" },
                { optionText: "std::heap_sort()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case space complexity of Kruskal’s algorithm?",
            options: [
                { optionText: "O(V + E)", optionTag: "A" },
                { optionText: "O(E²)", optionTag: "B" },
                { optionText: "O(V²)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if all edges are added without cycle checks in Kruskal's?",
            options: [
                { optionText: "A graph with cycles is formed", optionTag: "A" },
                { optionText: "A tree is guaranteed", optionTag: "B" },
                { optionText: "All disconnected nodes are ignored", optionTag: "C" },
                { optionText: "Minimum spanning tree is always formed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function in C++ STL helps to represent a disjoint set efficiently?",
            options: [
                { optionText: "std::find() with path compression", optionTag: "A" },
                { optionText: "std::stack", optionTag: "B" },
                { optionText: "std::queue", optionTag: "C" },
                { optionText: "std::vector", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Kruskal’s algorithm be used for disconnected graphs?",
            options: [
                { optionText: "Yes, it will find a forest", optionTag: "A" },
                { optionText: "No, it requires connected graphs", optionTag: "B" },
                { optionText: "Yes, but will give wrong answer", optionTag: "C" },
                { optionText: "Only if graph is cyclic", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph representation is most efficient for Kruskal’s algorithm?",
            options: [
                { optionText: "Edge list", optionTag: "A" },
                { optionText: "Adjacency list", optionTag: "B" },
                { optionText: "Adjacency matrix", optionTag: "C" },
                { optionText: "Degree matrix", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "If a graph has negative edge weights, will Kruskal’s algorithm work?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only if all weights are unique", optionTag: "C" },
                { optionText: "Only with Dijkstra's algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT needed for Kruskal’s algorithm?",
            options: [
                { optionText: "Graph sorting", optionTag: "A" },
                { optionText: "Cycle detection", optionTag: "B" },
                { optionText: "Vertex weights", optionTag: "C" },
                { optionText: "Union-Find", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which C++ STL container can store edges efficiently for Kruskal’s?",
            options: [
                { optionText: "vector<pair<int, pair<int, int>>>", optionTag: "A" },
                { optionText: "map<int, int>", optionTag: "B" },
                { optionText: "stack", optionTag: "C" },
                { optionText: "queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about MST?",
            options: [
                { optionText: "It contains no cycles", optionTag: "A" },
                { optionText: "It connects all vertices", optionTag: "B" },
                { optionText: "It has V - 1 edges", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Kruskal’s algorithm stops when:",
            options: [
                { optionText: "MST has V - 1 edges", optionTag: "A" },
                { optionText: "All vertices visited", optionTag: "B" },
                { optionText: "All edges checked", optionTag: "C" },
                { optionText: "Graph becomes cyclic", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main disadvantage of Kruskal’s algorithm?",
            options: [
                { optionText: "Requires sorting edges", optionTag: "A" },
                { optionText: "Cannot handle negative weights", optionTag: "B" },
                { optionText: "Not accurate for dense graphs", optionTag: "C" },
                { optionText: "Takes more memory", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which part of Kruskal's algorithm determines whether to include an edge?",
            options: [
                { optionText: "Cycle detection using union-find", optionTag: "A" },
                { optionText: "Checking edge length", optionTag: "B" },
                { optionText: "Random choice", optionTag: "C" },
                { optionText: "Breadth-first traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
