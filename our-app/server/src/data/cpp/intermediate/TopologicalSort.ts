import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Topological Sort - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz tests your intermediate knowledge of Topological Sorting in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "TopologicalSort"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a topological sort?",
            options: [
                { optionText: "A linear ordering of vertices such that for every directed edge u → v, u comes before v", optionTag: "A" },
                { optionText: "A sort that works only on undirected graphs", optionTag: "B" },
                { optionText: "A method to sort integers", optionTag: "C" },
                { optionText: "A way to traverse a tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is commonly used in Kahn’s algorithm for topological sort?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Topological sorting is possible only if the graph is:",
            options: [
                { optionText: "Directed and Acyclic", optionTag: "A" },
                { optionText: "Undirected", optionTag: "B" },
                { optionText: "Cyclic", optionTag: "C" },
                { optionText: "Weighted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm uses DFS for topological sort?",
            options: [
                { optionText: "Depth First Search with stack", optionTag: "A" },
                { optionText: "Breadth First Search", optionTag: "B" },
                { optionText: "Dijkstra's Algorithm", optionTag: "C" },
                { optionText: "Floyd-Warshall", optionTag: "D" }
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
                { optionText: "O(VE)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the in-degree of a node represent?",
            options: [
                { optionText: "Number of incoming edges", optionTag: "A" },
                { optionText: "Number of outgoing edges", optionTag: "B" },
                { optionText: "Distance from root", optionTag: "C" },
                { optionText: "Weight of the node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Kahn’s algorithm, when is a node added to the queue?",
            options: [
                { optionText: "When its in-degree becomes zero", optionTag: "A" },
                { optionText: "When it has the highest weight", optionTag: "B" },
                { optionText: "When it has the most neighbors", optionTag: "C" },
                { optionText: "When it is isolated", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Topological sort is mainly used for:",
            options: [
                { optionText: "Task scheduling with dependencies", optionTag: "A" },
                { optionText: "Shortest path finding", optionTag: "B" },
                { optionText: "Minimum spanning trees", optionTag: "C" },
                { optionText: "Cycle detection in undirected graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if a cycle is detected during topological sort?",
            options: [
                { optionText: "Topological sort is not possible", optionTag: "A" },
                { optionText: "Cycle is ignored", optionTag: "B" },
                { optionText: "Partial sort is returned", optionTag: "C" },
                { optionText: "Cycle is printed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is required to implement topological sort using Kahn's algorithm?",
            options: [
                { optionText: "Indegree array", optionTag: "A" },
                { optionText: "Outdegree array", optionTag: "B" },
                { optionText: "Minimum heap", optionTag: "C" },
                { optionText: "Segment tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the output of topological sort?",
            options: [
                { optionText: "An ordering of vertices", optionTag: "A" },
                { optionText: "A tree", optionTag: "B" },
                { optionText: "A graph", optionTag: "C" },
                { optionText: "A spanning forest", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many topological orderings can a graph have?",
            options: [
                { optionText: "Can be more than one", optionTag: "A" },
                { optionText: "Only one", optionTag: "B" },
                { optionText: "Exactly two", optionTag: "C" },
                { optionText: "Depends on number of cycles", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is not true for topological sort?",
            options: [
                { optionText: "It can be applied to any graph", optionTag: "A" },
                { optionText: "It is applicable to DAGs", optionTag: "B" },
                { optionText: "Multiple orderings are possible", optionTag: "C" },
                { optionText: "It requires in-degree or DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which STL container can be used for storing the topological order?",
            options: [
                { optionText: "Vector", optionTag: "A" },
                { optionText: "Map", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Unordered Map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ container is ideal for Kahn’s algorithm queue?",
            options: [
                { optionText: "std::queue", optionTag: "A" },
                { optionText: "std::stack", optionTag: "B" },
                { optionText: "std::priority_queue", optionTag: "C" },
                { optionText: "std::deque", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can topological sort be used for cycle detection?",
            options: [
                { optionText: "Yes, if sorting is not possible", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only on trees", optionTag: "C" },
                { optionText: "Only if weights are equal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a valid topological order for a DAG?",
            options: [
                { optionText: "One where all dependencies appear before the dependent nodes", optionTag: "A" },
                { optionText: "One where all nodes are sorted numerically", optionTag: "B" },
                { optionText: "One that uses BFS traversal", optionTag: "C" },
                { optionText: "One that contains a cycle", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is returned if the graph has a cycle using Kahn’s Algorithm?",
            options: [
                { optionText: "Empty result or error", optionTag: "A" },
                { optionText: "Partial order", optionTag: "B" },
                { optionText: "Random vertices", optionTag: "C" },
                { optionText: "All nodes with cycle", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What must be done to a graph before applying Kahn's algorithm?",
            options: [
                { optionText: "Calculate in-degrees of all vertices", optionTag: "A" },
                { optionText: "Find out-degree of all vertices", optionTag: "B" },
                { optionText: "Sort all edges", optionTag: "C" },
                { optionText: "Remove cycles", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Topological sort is used in which of these compilers' features?",
            options: [
                { optionText: "Dependency resolution", optionTag: "A" },
                { optionText: "Code formatting", optionTag: "B" },
                { optionText: "Error logging", optionTag: "C" },
                { optionText: "Variable declaration", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
