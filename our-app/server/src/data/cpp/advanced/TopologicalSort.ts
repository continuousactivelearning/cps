import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Topological Sort - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz tests your advanced knowledge of Topological Sorting in C++ graph algorithms.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "TopologicalSort"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What type of graph is required for topological sorting?",
            options: [
                { optionText: "Directed Acyclic Graph", optionTag: "A" },
                { optionText: "Undirected Graph", optionTag: "B" },
                { optionText: "Cyclic Graph", optionTag: "C" },
                { optionText: "Weighted Graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of topological sort using DFS?",
            options: [
                { optionText: "O(V + E)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E log V)", optionTag: "C" },
                { optionText: "O(E^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ STL container is typically used to implement the topological sort stack?",
            options: [
                { optionText: "std::stack", optionTag: "A" },
                { optionText: "std::queue", optionTag: "B" },
                { optionText: "std::priority_queue", optionTag: "C" },
                { optionText: "std::vector", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result of topological sort in a DAG?",
            options: [
                { optionText: "A linear ordering of vertices", optionTag: "A" },
                { optionText: "Shortest path tree", optionTag: "B" },
                { optionText: "Minimum spanning tree", optionTag: "C" },
                { optionText: "Cycle detection", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is typically used to implement topological sort iteratively?",
            options: [
                { optionText: "Kahn’s Algorithm", optionTag: "A" },
                { optionText: "Dijkstra’s Algorithm", optionTag: "B" },
                { optionText: "Kruskal’s Algorithm", optionTag: "C" },
                { optionText: "Prim’s Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data structure does Kahn’s algorithm use to track vertices with in-degree 0?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does a back edge in DFS indicate?",
            options: [
                { optionText: "Cycle", optionTag: "A" },
                { optionText: "Tree edge", optionTag: "B" },
                { optionText: "Cross edge", optionTag: "C" },
                { optionText: "Forward edge", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true for topological sorting?",
            options: [
                { optionText: "It exists only if the graph is acyclic", optionTag: "A" },
                { optionText: "It works for any graph", optionTag: "B" },
                { optionText: "It requires undirected edges", optionTag: "C" },
                { optionText: "It needs weighted edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In topological sort, for every directed edge u → v, which must be true?",
            options: [
                { optionText: "u appears before v in ordering", optionTag: "A" },
                { optionText: "v appears before u in ordering", optionTag: "B" },
                { optionText: "u and v appear together", optionTag: "C" },
                { optionText: "v is removed first", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following problems can be solved using topological sort?",
            options: [
                { optionText: "Course Scheduling", optionTag: "A" },
                { optionText: "Cycle Detection in Undirected Graph", optionTag: "B" },
                { optionText: "Minimum Spanning Tree", optionTag: "C" },
                { optionText: "Shortest Path in Unweighted Graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many valid topological sorts can a graph have?",
            options: [
                { optionText: "Can be more than one", optionTag: "A" },
                { optionText: "Only one", optionTag: "B" },
                { optionText: "Exactly two", optionTag: "C" },
                { optionText: "Infinite", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following indicates that a topological sort is not possible?",
            options: [
                { optionText: "Presence of a cycle", optionTag: "A" },
                { optionText: "Disconnected nodes", optionTag: "B" },
                { optionText: "Multiple in-degrees", optionTag: "C" },
                { optionText: "Out-degree is 0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In DFS-based topological sort, when is a node added to the stack?",
            options: [
                { optionText: "After all adjacent nodes are visited", optionTag: "A" },
                { optionText: "Before visiting adjacent nodes", optionTag: "B" },
                { optionText: "At the start of DFS", optionTag: "C" },
                { optionText: "After visiting only one neighbor", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of Kahn's algorithm for topological sorting?",
            options: [
                { optionText: "O(V)", optionTag: "A" },
                { optionText: "O(E)", optionTag: "B" },
                { optionText: "O(log V)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following will be true if a DAG has more than one topological order?",
            options: [
                { optionText: "It has nodes with same in-degree and out-degree", optionTag: "A" },
                { optionText: "It is cyclic", optionTag: "B" },
                { optionText: "It is undirected", optionTag: "C" },
                { optionText: "It is weighted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In which scenario would topological sort be used in compiler design?",
            options: [
                { optionText: "Dependency resolution of modules", optionTag: "A" },
                { optionText: "Token parsing", optionTag: "B" },
                { optionText: "Symbol table generation", optionTag: "C" },
                { optionText: "Error handling", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition ensures no cycle during DFS-based topological sort?",
            options: [
                { optionText: "Color marking or visited flags", optionTag: "A" },
                { optionText: "Degree count", optionTag: "B" },
                { optionText: "Priority queue", optionTag: "C" },
                { optionText: "Hashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What would the in-degree of a source vertex be in a DAG?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "Greater than 0", optionTag: "C" },
                { optionText: "Depends on out-degree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following libraries can help with graphs in C++?",
            options: [
                { optionText: "Boost Graph Library (BGL)", optionTag: "A" },
                { optionText: "STDGraph", optionTag: "B" },
                { optionText: "STL Network", optionTag: "C" },
                { optionText: "C++Topology", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which version of DFS is used in topological sort?",
            options: [
                { optionText: "Post-order DFS", optionTag: "A" },
                { optionText: "Pre-order DFS", optionTag: "B" },
                { optionText: "Level-order DFS", optionTag: "C" },
                { optionText: "In-order DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
