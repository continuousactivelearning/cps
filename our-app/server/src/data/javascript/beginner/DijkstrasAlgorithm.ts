import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Dijkstra's Algorithm - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz evaluates your beginner-level understanding of Dijkstra's Algorithm in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DijkstrasAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is Dijkstra’s Algorithm used for?",
            options: [
                { optionText: "Finding the shortest path", optionTag: "A" },
                { optionText: "Sorting an array", optionTag: "B" },
                { optionText: "Searching a tree", optionTag: "C" },
                { optionText: "Reversing a string", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is commonly used in Dijkstra's Algorithm?",
            options: [
                { optionText: "Priority Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Dijkstra’s Algorithm works with which kind of graph?",
            options: [
                { optionText: "Non-negative weighted graphs", optionTag: "A" },
                { optionText: "Negative weighted graphs", optionTag: "B" },
                { optionText: "Unweighted graphs only", optionTag: "C" },
                { optionText: "Binary trees only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is initialized to 0 in Dijkstra’s Algorithm?",
            options: [
                { optionText: "Distance to the source node", optionTag: "A" },
                { optionText: "All node distances", optionTag: "B" },
                { optionText: "Graph edges", optionTag: "C" },
                { optionText: "All priorities", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Dijkstra’s Algorithm using a priority queue and adjacency list?",
            options: [
                { optionText: "O((V + E) log V)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E)", optionTag: "C" },
                { optionText: "O(V log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does Dijkstra’s Algorithm return?",
            options: [
                { optionText: "Shortest distances from source to all vertices", optionTag: "A" },
                { optionText: "Longest distances", optionTag: "B" },
                { optionText: "Graph structure", optionTag: "C" },
                { optionText: "Sorted edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Dijkstra’s Algorithm be used on graphs with negative weights?",
            options: [
                { optionText: "No", optionTag: "A" },
                { optionText: "Yes, always", optionTag: "B" },
                { optionText: "Only with DFS", optionTag: "C" },
                { optionText: "Only if the graph is directed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if a node is already visited in Dijkstra’s Algorithm?",
            options: [
                { optionText: "It is skipped", optionTag: "A" },
                { optionText: "It is recalculated", optionTag: "B" },
                { optionText: "It is always updated", optionTag: "C" },
                { optionText: "It is removed from the graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In JavaScript, what is typically used to store distances?",
            options: [
                { optionText: "Object or Map", optionTag: "A" },
                { optionText: "Set", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "String", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is updated in each iteration of Dijkstra’s Algorithm?",
            options: [
                { optionText: "Minimum distance of neighbors", optionTag: "A" },
                { optionText: "Graph edges", optionTag: "B" },
                { optionText: "Node IDs", optionTag: "C" },
                { optionText: "All node values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript structure is best to represent a graph for Dijkstra?",
            options: [
                { optionText: "Adjacency list (object or Map)", optionTag: "A" },
                { optionText: "String list", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Matrix only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What triggers the end of Dijkstra’s Algorithm?",
            options: [
                { optionText: "All nodes are visited", optionTag: "A" },
                { optionText: "Stack is empty", optionTag: "B" },
                { optionText: "Weights are sorted", optionTag: "C" },
                { optionText: "Graph is reversed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is a priority queue useful in Dijkstra’s Algorithm?",
            options: [
                { optionText: "To select the node with the smallest distance quickly", optionTag: "A" },
                { optionText: "To sort the entire graph", optionTag: "B" },
                { optionText: "To store strings", optionTag: "C" },
                { optionText: "To create a new graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if two paths to a node have the same distance?",
            options: [
                { optionText: "The first one found is used", optionTag: "A" },
                { optionText: "The algorithm fails", optionTag: "B" },
                { optionText: "Both paths are added", optionTag: "C" },
                { optionText: "Node is visited twice", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What should be initialized before running Dijkstra’s Algorithm?",
            options: [
                { optionText: "Distance map and visited set", optionTag: "A" },
                { optionText: "Queue only", optionTag: "B" },
                { optionText: "Stack only", optionTag: "C" },
                { optionText: "Graph degree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What value is given to unvisited nodes initially?",
            options: [
                { optionText: "Infinity", optionTag: "A" },
                { optionText: "Zero", optionTag: "B" },
                { optionText: "Negative one", optionTag: "C" },
                { optionText: "Empty string", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Is Dijkstra’s Algorithm greedy?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Sometimes", optionTag: "C" },
                { optionText: "Only with DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In JavaScript, how can you represent the priority queue efficiently?",
            options: [
                { optionText: "Min heap using array", optionTag: "A" },
                { optionText: "Object with keys", optionTag: "B" },
                { optionText: "Set structure", optionTag: "C" },
                { optionText: "Loop through array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the distance array/map track?",
            options: [
                { optionText: "Current shortest known distance to each node", optionTag: "A" },
                { optionText: "Number of neighbors", optionTag: "B" },
                { optionText: "Stack size", optionTag: "C" },
                { optionText: "Node colors", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of algorithm is Dijkstra’s?",
            options: [
                { optionText: "Single source shortest path", optionTag: "A" },
                { optionText: "Sorting algorithm", optionTag: "B" },
                { optionText: "Traversal only", optionTag: "C" },
                { optionText: "Cycle detection", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
