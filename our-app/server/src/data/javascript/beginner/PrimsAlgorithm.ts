import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Prim's Algorithm - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz tests your beginner-level understanding of Prim's Algorithm using JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "PrimsAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is Prim's Algorithm used for?",
            options: [
                { optionText: "Finding Minimum Spanning Tree", optionTag: "A" },
                { optionText: "Sorting arrays", optionTag: "B" },
                { optionText: "Searching elements", optionTag: "C" },
                { optionText: "Balancing trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is commonly used in Prim’s Algorithm to select the minimum edge?",
            options: [
                { optionText: "Priority Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Hash Table", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Prim’s Algorithm works on which type of graph?",
            options: [
                { optionText: "Connected weighted undirected graph", optionTag: "A" },
                { optionText: "Directed graph", optionTag: "B" },
                { optionText: "Unweighted graph", optionTag: "C" },
                { optionText: "Disconnected graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about Prim's Algorithm?",
            options: [
                { optionText: "It adds the minimum weight edge from the current tree", optionTag: "A" },
                { optionText: "It selects the longest edge", optionTag: "B" },
                { optionText: "It selects random edges", optionTag: "C" },
                { optionText: "It always picks edges in order of input", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Prim's Algorithm using a min heap?",
            options: [
                { optionText: "O(E log V)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(V)", optionTag: "C" },
                { optionText: "O(E)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Prim’s Algorithm, which node is chosen first?",
            options: [
                { optionText: "Any arbitrary node", optionTag: "A" },
                { optionText: "The node with highest degree", optionTag: "B" },
                { optionText: "The last node", optionTag: "C" },
                { optionText: "The central node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition is checked before adding an edge in Prim’s Algorithm?",
            options: [
                { optionText: "The vertex is not already in MST", optionTag: "A" },
                { optionText: "Edge weight is even", optionTag: "B" },
                { optionText: "Vertex has even degree", optionTag: "C" },
                { optionText: "The vertex is a leaf node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a Minimum Spanning Tree?",
            options: [
                { optionText: "A subgraph connecting all vertices with minimum total edge weight", optionTag: "A" },
                { optionText: "A tree with maximum edges", optionTag: "B" },
                { optionText: "A binary search tree", optionTag: "C" },
                { optionText: "A graph with no cycles", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Does Prim's Algorithm always produce the same MST for a graph?",
            options: [
                { optionText: "No, it depends on edge weights and starting node", optionTag: "A" },
                { optionText: "Yes", optionTag: "B" },
                { optionText: "Only for trees", optionTag: "C" },
                { optionText: "Only for graphs with even nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following languages can implement Prim’s Algorithm?",
            options: [
                { optionText: "JavaScript", optionTag: "A" },
                { optionText: "Python", optionTag: "B" },
                { optionText: "C++", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What does MST stand for?",
            options: [
                { optionText: "Minimum Spanning Tree", optionTag: "A" },
                { optionText: "Maximum Sub Tree", optionTag: "B" },
                { optionText: "Main Search Tree", optionTag: "C" },
                { optionText: "Min Search Traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is not needed for Prim's Algorithm?",
            options: [
                { optionText: "A min heap or priority queue", optionTag: "A" },
                { optionText: "Visited array", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Graph representation", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which JS structure is best to represent a graph for Prim's Algorithm?",
            options: [
                { optionText: "Adjacency list", optionTag: "A" },
                { optionText: "Linked list", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "String", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many edges will the MST of a graph with V vertices have?",
            options: [
                { optionText: "V - 1", optionTag: "A" },
                { optionText: "V", optionTag: "B" },
                { optionText: "E", optionTag: "C" },
                { optionText: "V + 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if the graph is not connected?",
            options: [
                { optionText: "Prim’s Algorithm cannot find an MST", optionTag: "A" },
                { optionText: "It finds all cycles", optionTag: "B" },
                { optionText: "It works normally", optionTag: "C" },
                { optionText: "It deletes extra nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main goal of Prim's Algorithm?",
            options: [
                { optionText: "To connect all nodes with minimum cost", optionTag: "A" },
                { optionText: "To sort graph vertices", optionTag: "B" },
                { optionText: "To find maximum path", optionTag: "C" },
                { optionText: "To detect cycle", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What kind of edge is chosen next in Prim's Algorithm?",
            options: [
                { optionText: "Minimum cost edge connecting tree to non-tree", optionTag: "A" },
                { optionText: "Maximum edge", optionTag: "B" },
                { optionText: "Random edge", optionTag: "C" },
                { optionText: "Edge forming a cycle", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data structure in JavaScript is best for a priority queue?",
            options: [
                { optionText: "Min Heap implementation", optionTag: "A" },
                { optionText: "Array", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Prim's Algorithm is a ______ algorithm.",
            options: [
                { optionText: "Greedy", optionTag: "A" },
                { optionText: "Divide and Conquer", optionTag: "B" },
                { optionText: "Backtracking", optionTag: "C" },
                { optionText: "Brute Force", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition ensures we don’t revisit the same node?",
            options: [
                { optionText: "Using a visited array", optionTag: "A" },
                { optionText: "Stack overflow", optionTag: "B" },
                { optionText: "Recursive return", optionTag: "C" },
                { optionText: "Labeling with color", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
