import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Topological Sort - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz tests your advanced knowledge of topological sorting in JavaScript, including graph theory concepts, algorithms, cycle detection, and applications.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "TopologicalSort"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What type of graph is required to perform topological sorting?",
            options: [
                { optionText: "Directed Acyclic Graph (DAG)", optionTag: "A" },
                { optionText: "Undirected Graph", optionTag: "B" },
                { optionText: "Cyclic Directed Graph", optionTag: "C" },
                { optionText: "Weighted Graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is commonly used to perform topological sort?",
            options: [
                { optionText: "Kahn's Algorithm", optionTag: "A" },
                { optionText: "Dijkstra's Algorithm", optionTag: "B" },
                { optionText: "Prim's Algorithm", optionTag: "C" },
                { optionText: "Floyd-Warshall Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is essential in Kahn's algorithm for topological sorting?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Priority Queue", optionTag: "C" },
                { optionText: "Deque", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of topological sorting using DFS?",
            options: [
                { optionText: "O(V + E)", optionTag: "A" },
                { optionText: "O(V²)", optionTag: "B" },
                { optionText: "O(E log V)", optionTag: "C" },
                { optionText: "O(V log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does topological sorting detect cycles in a graph?",
            options: [
                { optionText: "If no valid topological ordering exists", optionTag: "A" },
                { optionText: "If the graph is disconnected", optionTag: "B" },
                { optionText: "If all vertices have incoming edges", optionTag: "C" },
                { optionText: "If graph is undirected", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal order is used in DFS based topological sort?",
            options: [
                { optionText: "Post-order", optionTag: "A" },
                { optionText: "Pre-order", optionTag: "B" },
                { optionText: "In-order", optionTag: "C" },
                { optionText: "Level-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Kahn's algorithm, what indicates a cycle in the graph?",
            options: [
                { optionText: "Remaining vertices with non-zero in-degree after processing", optionTag: "A" },
                { optionText: "Queue becomes empty before all vertices processed", optionTag: "B" },
                { optionText: "Stack overflow", optionTag: "C" },
                { optionText: "Graph being disconnected", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following problems can be solved using topological sort?",
            options: [
                { optionText: "Task Scheduling", optionTag: "A" },
                { optionText: "Shortest Path", optionTag: "B" },
                { optionText: "Minimum Spanning Tree", optionTag: "C" },
                { optionText: "Maximum Flow", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How are vertices ordered in a topological sort?",
            options: [
                { optionText: "For every directed edge u -> v, u appears before v", optionTag: "A" },
                { optionText: "For every directed edge u -> v, v appears before u", optionTag: "B" },
                { optionText: "In increasing order of vertex ids", optionTag: "C" },
                { optionText: "In decreasing order of vertex degrees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can a graph with cycles have a valid topological ordering?",
            options: [
                { optionText: "No", optionTag: "A" },
                { optionText: "Yes", optionTag: "B" },
                { optionText: "Only if the cycles are small", optionTag: "C" },
                { optionText: "Only if it is undirected", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if you run DFS based topological sort on a graph with cycles?",
            options: [
                { optionText: "The algorithm will not produce a valid ordering", optionTag: "A" },
                { optionText: "It will return a correct ordering", optionTag: "B" },
                { optionText: "It will run indefinitely", optionTag: "C" },
                { optionText: "It will ignore cycles automatically", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is typically used to store the result in DFS based topological sort?",
            options: [
                { optionText: "Stack", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Array", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the in-degree of a vertex represent?",
            options: [
                { optionText: "Number of incoming edges", optionTag: "A" },
                { optionText: "Number of outgoing edges", optionTag: "B" },
                { optionText: "Total edges connected", optionTag: "C" },
                { optionText: "Degree of connectivity", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can you detect a cycle during DFS for topological sort?",
            options: [
                { optionText: "If a vertex is visited twice in the current recursion stack", optionTag: "A" },
                { optionText: "If a vertex has zero in-degree", optionTag: "B" },
                { optionText: "If stack becomes empty early", optionTag: "C" },
                { optionText: "If graph is disconnected", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT an application of topological sort?",
            options: [
                { optionText: "Cycle detection in dependency graphs", optionTag: "A" },
                { optionText: "Finding shortest path in weighted graphs", optionTag: "B" },
                { optionText: "Task scheduling with dependencies", optionTag: "C" },
                { optionText: "Build systems and compilation order", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is the key difference between Kahn’s algorithm and DFS based topological sort?",
            options: [
                { optionText: "Kahn’s uses queue and tracks in-degree; DFS uses recursion and stack", optionTag: "A" },
                { optionText: "Kahn’s works on undirected graphs; DFS works on directed", optionTag: "B" },
                { optionText: "DFS uses queue; Kahn’s uses stack", optionTag: "C" },
                { optionText: "They are essentially the same algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "If multiple valid topological orderings exist, what does that imply about the graph?",
            options: [
                { optionText: "Graph has multiple sources or choices at some steps", optionTag: "A" },
                { optionText: "Graph contains cycles", optionTag: "B" },
                { optionText: "Graph is disconnected", optionTag: "C" },
                { optionText: "Graph is weighted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In topological sort, what is a source vertex?",
            options: [
                { optionText: "A vertex with zero in-degree", optionTag: "A" },
                { optionText: "A vertex with zero out-degree", optionTag: "B" },
                { optionText: "A vertex part of a cycle", optionTag: "C" },
                { optionText: "Any vertex chosen arbitrarily", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does topological sorting relate to cycle detection?",
            options: [
                { optionText: "If topological sort is not possible, graph contains a cycle", optionTag: "A" },
                { optionText: "Topological sort is used only for weighted graphs", optionTag: "B" },
                { optionText: "Cycle detection is irrelevant for topological sort", optionTag: "C" },
                { optionText: "Topological sort removes cycles", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result of topological sorting a graph?",
            options: [
                { optionText: "A linear ordering of vertices respecting edges", optionTag: "A" },
                { optionText: "A spanning tree", optionTag: "B" },
                { optionText: "A minimum cut", optionTag: "C" },
                { optionText: "A maximum flow", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
