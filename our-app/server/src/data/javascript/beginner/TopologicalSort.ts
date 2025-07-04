import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Topological Sort - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz tests your basic understanding of Topological Sort in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "TopologicalSort"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What kind of graph is required for topological sorting?",
            options: [
                { optionText: "Directed Acyclic Graph", optionTag: "A" },
                { optionText: "Undirected Graph", optionTag: "B" },
                { optionText: "Directed Cyclic Graph", optionTag: "C" },
                { optionText: "Binary Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main use of topological sorting?",
            options: [
                { optionText: "Task Scheduling", optionTag: "A" },
                { optionText: "Finding Shortest Path", optionTag: "B" },
                { optionText: "Depth First Search", optionTag: "C" },
                { optionText: "Sorting Arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Topological sorting is applicable only to which type of graph?",
            options: [
                { optionText: "DAG (Directed Acyclic Graph)", optionTag: "A" },
                { optionText: "Cyclic Graph", optionTag: "B" },
                { optionText: "Weighted Graph", optionTag: "C" },
                { optionText: "Undirected Graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is commonly used for topological sort?",
            options: [
                { optionText: "Kahn's Algorithm", optionTag: "A" },
                { optionText: "Dijkstra's Algorithm", optionTag: "B" },
                { optionText: "Prim's Algorithm", optionTag: "C" },
                { optionText: "Kruskal's Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In topological sort, which vertex is processed first?",
            options: [
                { optionText: "Vertex with no incoming edges", optionTag: "A" },
                { optionText: "Vertex with highest degree", optionTag: "B" },
                { optionText: "Leaf node", optionTag: "C" },
                { optionText: "Root node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Topological sorting can be performed using which traversal?",
            options: [
                { optionText: "DFS", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "Inorder", optionTag: "C" },
                { optionText: "Level Order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is used in Kahn’s algorithm?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can a graph have multiple topological orders?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only if cyclic", optionTag: "C" },
                { optionText: "Only for trees", optionTag: "D" }
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
                { optionText: "O(V log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a valid topological sort of A->B->C?",
            options: [
                { optionText: "C, B, A", optionTag: "A" },
                { optionText: "A, B, C", optionTag: "B" },
                { optionText: "A, C, B", optionTag: "C" },
                { optionText: "B, A, C", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if a graph contains a cycle?",
            options: [
                { optionText: "Topological sort is not possible", optionTag: "A" },
                { optionText: "Sort will contain duplicates", optionTag: "B" },
                { optionText: "Sorting becomes faster", optionTag: "C" },
                { optionText: "It still works", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the in-degree of a node?",
            options: [
                { optionText: "Number of incoming edges", optionTag: "A" },
                { optionText: "Number of outgoing edges", optionTag: "B" },
                { optionText: "Total edges", optionTag: "C" },
                { optionText: "Position in graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which library helps represent graphs in JavaScript?",
            options: [
                { optionText: "Graphlib", optionTag: "A" },
                { optionText: "GrapherJS", optionTag: "B" },
                { optionText: "SortJS", optionTag: "C" },
                { optionText: "TopoSortJS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a DAG?",
            options: [
                { optionText: "Directed Acyclic Graph", optionTag: "A" },
                { optionText: "Double Array Graph", optionTag: "B" },
                { optionText: "Directed Array Group", optionTag: "C" },
                { optionText: "Dynamic Acyclic Group", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these detects cycles in a graph?",
            options: [
                { optionText: "DFS", optionTag: "A" },
                { optionText: "Linear Search", optionTag: "B" },
                { optionText: "Binary Search", optionTag: "C" },
                { optionText: "BFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is true about topological sort output?",
            options: [
                { optionText: "All dependencies appear before dependent nodes", optionTag: "A" },
                { optionText: "Any node can appear first", optionTag: "B" },
                { optionText: "There is only one order", optionTag: "C" },
                { optionText: "It works only for trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which helps build dependency graphs in JS projects?",
            options: [
                { optionText: "Webpack", optionTag: "A" },
                { optionText: "Express", optionTag: "B" },
                { optionText: "React", optionTag: "C" },
                { optionText: "Node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Topological sorting is often used in which compiler phase?",
            options: [
                { optionText: "Code generation", optionTag: "A" },
                { optionText: "Lexical analysis", optionTag: "B" },
                { optionText: "Parsing", optionTag: "C" },
                { optionText: "Tokenization", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many topological sorts can a graph have?",
            options: [
                { optionText: "Depends on graph structure", optionTag: "A" },
                { optionText: "Always 1", optionTag: "B" },
                { optionText: "0 or 1 only", optionTag: "C" },
                { optionText: "Exactly number of vertices", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when topological sort is applied to a tree?",
            options: [
                { optionText: "It results in postorder traversal", optionTag: "A" },
                { optionText: "Inorder traversal", optionTag: "B" },
                { optionText: "Preorder traversal", optionTag: "C" },
                { optionText: "Random order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
