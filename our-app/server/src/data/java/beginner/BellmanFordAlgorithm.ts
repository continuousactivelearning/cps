// src/data/java/beginner/bellman_ford_algorithm.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Bellman-Ford Algorithm - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz evaluates your basic understanding of the Bellman-Ford algorithm and its usage in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Bellman-Ford Algorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the main purpose of the Bellman-Ford algorithm?",
            options: [
                { optionText: "To find the shortest path in a graph", optionTag: "A" },
                { optionText: "To sort a list", optionTag: "B" },
                { optionText: "To perform DFS traversal", optionTag: "C" },
                { optionText: "To find connected components", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following can the Bellman-Ford algorithm handle that Dijkstra’s cannot?",
            options: [
                { optionText: "Graphs with negative edge weights", optionTag: "A" },
                { optionText: "Graphs with loops", optionTag: "B" },
                { optionText: "Undirected graphs", optionTag: "C" },
                { optionText: "Graphs with cycles", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of the Bellman-Ford algorithm?",
            options: [
                { optionText: "O(V * E)", optionTag: "A" },
                { optionText: "O(V log E)", optionTag: "B" },
                { optionText: "O(V^2)", optionTag: "C" },
                { optionText: "O(log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the number of iterations in the main loop of Bellman-Ford?",
            options: [
                { optionText: "V - 1", optionTag: "A" },
                { optionText: "V", optionTag: "B" },
                { optionText: "E", optionTag: "C" },
                { optionText: "E - 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if a shorter path is found after V-1 iterations?",
            options: [
                { optionText: "A negative weight cycle exists", optionTag: "A" },
                { optionText: "Algorithm restarts", optionTag: "B" },
                { optionText: "Graph is disconnected", optionTag: "C" },
                { optionText: "The path is ignored", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Bellman-Ford algorithm can be used for:",
            options: [
                { optionText: "Single-source shortest path", optionTag: "A" },
                { optionText: "All-pairs shortest path", optionTag: "B" },
                { optionText: "Minimum spanning tree", optionTag: "C" },
                { optionText: "Depth-first traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What Java data structure is commonly used to store edge lists?",
            options: [
                { optionText: "ArrayList<Edge>", optionTag: "A" },
                { optionText: "HashMap", optionTag: "B" },
                { optionText: "PriorityQueue", optionTag: "C" },
                { optionText: "Stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the typical edge representation in Bellman-Ford?",
            options: [
                { optionText: "(source, destination, weight)", optionTag: "A" },
                { optionText: "(start, end)", optionTag: "B" },
                { optionText: "(vertex, cost)", optionTag: "C" },
                { optionText: "(node, index)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is used to store shortest distances?",
            options: [
                { optionText: "Array", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When is Bellman-Ford preferred over Dijkstra?",
            options: [
                { optionText: "When graph has negative weights", optionTag: "A" },
                { optionText: "When graph is small", optionTag: "B" },
                { optionText: "When graph has no edges", optionTag: "C" },
                { optionText: "When graph is acyclic", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which part of Bellman-Ford is repeated for V-1 times?",
            options: [
                { optionText: "Edge relaxation", optionTag: "A" },
                { optionText: "Vertex visit", optionTag: "B" },
                { optionText: "Graph creation", optionTag: "C" },
                { optionText: "Edge deletion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function updates the shortest path value?",
            options: [
                { optionText: "Relax()", optionTag: "A" },
                { optionText: "Update()", optionTag: "B" },
                { optionText: "Assign()", optionTag: "C" },
                { optionText: "Reset()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Bellman-Ford uses which traversal method?",
            options: [
                { optionText: "Edge-based traversal", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "DFS", optionTag: "C" },
                { optionText: "Priority queue traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is similar in usage but differs in edge weight conditions?",
            options: [
                { optionText: "Dijkstra’s algorithm", optionTag: "A" },
                { optionText: "DFS", optionTag: "B" },
                { optionText: "Prim’s algorithm", optionTag: "C" },
                { optionText: "Kruskal’s algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Bellman-Ford detect negative cycles?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only in weighted graphs", optionTag: "C" },
                { optionText: "Only in trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the best case time complexity of Bellman-Ford?",
            options: [
                { optionText: "O(V * E)", optionTag: "A" },
                { optionText: "O(E)", optionTag: "B" },
                { optionText: "O(V)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What indicates that no path exists between source and vertex?",
            options: [
                { optionText: "Distance is Integer.MAX_VALUE", optionTag: "A" },
                { optionText: "Distance is 0", optionTag: "B" },
                { optionText: "Vertex is not visited", optionTag: "C" },
                { optionText: "Graph is cyclic", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of Bellman-Ford?",
            options: [
                { optionText: "O(V + E)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(log V)", optionTag: "C" },
                { optionText: "O(E^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these can be a result of Bellman-Ford if used incorrectly?",
            options: [
                { optionText: "Infinite loop in negative cycle", optionTag: "A" },
                { optionText: "Graph crash", optionTag: "B" },
                { optionText: "Duplicate paths", optionTag: "C" },
                { optionText: "Incorrect graph size", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;