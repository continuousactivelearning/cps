// src/data/java/beginner/prims_algorithm.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Prim's Algorithm - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz tests your understanding of Prim's Algorithm for Minimum Spanning Tree.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Prim's Algorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is Prim's Algorithm used for?",
            options: [
                { optionText: "Finding Minimum Spanning Tree", optionTag: "A" },
                { optionText: "Finding Shortest Path", optionTag: "B" },
                { optionText: "Graph Coloring", optionTag: "C" },
                { optionText: "Cycle Detection", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data structure is commonly used in Prim's Algorithm for optimization?",
            options: [
                { optionText: "Min Heap / Priority Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "HashMap", optionTag: "C" },
                { optionText: "Linked List", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the starting point for Prim’s algorithm?",
            options: [
                { optionText: "Any arbitrary vertex", optionTag: "A" },
                { optionText: "Smallest edge", optionTag: "B" },
                { optionText: "Largest edge", optionTag: "C" },
                { optionText: "Last vertex", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Prim’s algorithm works on which kind of graphs?",
            options: [
                { optionText: "Connected, weighted, undirected graphs", optionTag: "A" },
                { optionText: "Disconnected graphs", optionTag: "B" },
                { optionText: "Directed graphs", optionTag: "C" },
                { optionText: "Unweighted graphs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Prim's algorithm, how are vertices added to the MST?",
            options: [
                { optionText: "One by one, choosing the minimum weight edge", optionTag: "A" },
                { optionText: "All at once", optionTag: "B" },
                { optionText: "Using depth-first traversal", optionTag: "C" },
                { optionText: "Using breadth-first traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these algorithms is most similar to Prim's Algorithm?",
            options: [
                { optionText: "Dijkstra’s Algorithm", optionTag: "A" },
                { optionText: "Floyd-Warshall Algorithm", optionTag: "B" },
                { optionText: "DFS", optionTag: "C" },
                { optionText: "Kruskal’s Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Prim’s algorithm stops when:",
            options: [
                { optionText: "All vertices are included in MST", optionTag: "A" },
                { optionText: "All edges are visited", optionTag: "B" },
                { optionText: "Shortest path is found", optionTag: "C" },
                { optionText: "Graph is sorted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Prim's algorithm belongs to which category of algorithms?",
            options: [
                { optionText: "Greedy Algorithm", optionTag: "A" },
                { optionText: "Divide and Conquer", optionTag: "B" },
                { optionText: "Backtracking", optionTag: "C" },
                { optionText: "Dynamic Programming", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Prim's Algorithm using a priority queue and adjacency list?",
            options: [
                { optionText: "O(E log V)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(V + E)", optionTag: "C" },
                { optionText: "O(E^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which standard Java class can be used to implement a Min Heap?",
            options: [
                { optionText: "PriorityQueue", optionTag: "A" },
                { optionText: "LinkedList", optionTag: "B" },
                { optionText: "ArrayList", optionTag: "C" },
                { optionText: "HashMap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph representation is best suited for Prim’s algorithm?",
            options: [
                { optionText: "Adjacency List with Min Heap", optionTag: "A" },
                { optionText: "Adjacency Matrix only", optionTag: "B" },
                { optionText: "Incidence Matrix", optionTag: "C" },
                { optionText: "Edge List only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "If a graph is disconnected, Prim’s algorithm will:",
            options: [
                { optionText: "Only build MST for the connected component", optionTag: "A" },
                { optionText: "Throw an error", optionTag: "B" },
                { optionText: "Work normally", optionTag: "C" },
                { optionText: "Create cycles", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Prim's algorithm does not work correctly when:",
            options: [
                { optionText: "The graph is not connected", optionTag: "A" },
                { optionText: "All weights are positive", optionTag: "B" },
                { optionText: "Graph has loops", optionTag: "C" },
                { optionText: "There are no cycles", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Prim's algorithm be applied to a directed graph?",
            options: [
                { optionText: "No, it requires undirected graph", optionTag: "A" },
                { optionText: "Yes, always", optionTag: "B" },
                { optionText: "Only if weights are equal", optionTag: "C" },
                { optionText: "Only if negative weights are present", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In the priority queue, what value is prioritized?",
            options: [
                { optionText: "Edge weight", optionTag: "A" },
                { optionText: "Vertex label", optionTag: "B" },
                { optionText: "Path length", optionTag: "C" },
                { optionText: "Degree of vertex", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "The main advantage of Prim’s algorithm is:",
            options: [
                { optionText: "Good for dense graphs", optionTag: "A" },
                { optionText: "Can detect cycles", optionTag: "B" },
                { optionText: "Requires no data structures", optionTag: "C" },
                { optionText: "Always finds longest path", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the base case for Prim’s algorithm?",
            options: [
                { optionText: "Start with one node in MST", optionTag: "A" },
                { optionText: "All nodes visited", optionTag: "B" },
                { optionText: "MST already complete", optionTag: "C" },
                { optionText: "Graph fully traversed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can MST be unique?",
            options: [
                { optionText: "Only if all edge weights are unique", optionTag: "A" },
                { optionText: "Only if graph is cyclic", optionTag: "B" },
                { optionText: "No, never", optionTag: "C" },
                { optionText: "Only for directed graphs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is required before applying Prim’s algorithm?",
            options: [
                { optionText: "Graph must be connected and weighted", optionTag: "A" },
                { optionText: "Graph must be unweighted", optionTag: "B" },
                { optionText: "Graph must be acyclic", optionTag: "C" },
                { optionText: "Graph must be directed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;