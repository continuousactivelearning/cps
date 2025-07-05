import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Bellman-Ford Algorithm - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz tests your basic understanding of the Bellman-Ford Algorithm in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BellmanFordAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the main use of the Bellman-Ford algorithm?",
            options: [
                { optionText: "Find shortest paths from a source to all vertices", optionTag: "A" },
                { optionText: "Sort arrays", optionTag: "B" },
                { optionText: "Traverse a binary tree", optionTag: "C" },
                { optionText: "Find maximum flow", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Bellman-Ford handle negative edge weights?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only if graph is undirected", optionTag: "C" },
                { optionText: "Only if weights are positive", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Bellman-Ford algorithm?",
            options: [
                { optionText: "O(V * E)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E log V)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many times are edges relaxed in Bellman-Ford?",
            options: [
                { optionText: "V - 1 times", optionTag: "A" },
                { optionText: "E times", optionTag: "B" },
                { optionText: "V times", optionTag: "C" },
                { optionText: "Once", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does Bellman-Ford detect that Dijkstra's algorithm cannot?",
            options: [
                { optionText: "Negative weight cycles", optionTag: "A" },
                { optionText: "Shortest path", optionTag: "B" },
                { optionText: "Positive cycles", optionTag: "C" },
                { optionText: "Disconnected graphs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will Bellman-Ford do if a negative cycle is detected?",
            options: [
                { optionText: "Stop and report it", optionTag: "A" },
                { optionText: "Ignore it", optionTag: "B" },
                { optionText: "Run infinitely", optionTag: "C" },
                { optionText: "Add the cycle to the path", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data structure is used to store distances in Bellman-Ford?",
            options: [
                { optionText: "Array or object", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What initial distance is given to all vertices except the source?",
            options: [
                { optionText: "Infinity", optionTag: "A" },
                { optionText: "Zero", optionTag: "B" },
                { optionText: "Negative one", optionTag: "C" },
                { optionText: "One", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is edge relaxation in Bellman-Ford?",
            options: [
                { optionText: "Updating shortest distance if a better path is found", optionTag: "A" },
                { optionText: "Ignoring longer paths", optionTag: "B" },
                { optionText: "Storing neighbors", optionTag: "C" },
                { optionText: "Calculating edge weight", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which type of graph can Bellman-Ford be applied to?",
            options: [
                { optionText: "Directed or undirected graphs", optionTag: "A" },
                { optionText: "Only undirected", optionTag: "B" },
                { optionText: "Only complete graphs", optionTag: "C" },
                { optionText: "Only trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result of Bellman-Ford for each vertex?",
            options: [
                { optionText: "Shortest distance from the source", optionTag: "A" },
                { optionText: "Longest path", optionTag: "B" },
                { optionText: "Number of edges", optionTag: "C" },
                { optionText: "Degree of vertex", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript method can help iterate edges in Bellman-Ford?",
            options: [
                { optionText: "forEach", optionTag: "A" },
                { optionText: "parseInt", optionTag: "B" },
                { optionText: "filter", optionTag: "C" },
                { optionText: "sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which statement is true about Bellman-Ford?",
            options: [
                { optionText: "It always finds the shortest path", optionTag: "A" },
                { optionText: "It only works for positive weights", optionTag: "B" },
                { optionText: "It uses a heap", optionTag: "C" },
                { optionText: "It requires sorted input", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is NOT needed for Bellman-Ford?",
            options: [
                { optionText: "Priority queue", optionTag: "A" },
                { optionText: "Edge list", optionTag: "B" },
                { optionText: "Graph size", optionTag: "C" },
                { optionText: "Source vertex", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What kind of loop is used to relax all edges?",
            options: [
                { optionText: "for loop", optionTag: "A" },
                { optionText: "while(true)", optionTag: "B" },
                { optionText: "if-else", optionTag: "C" },
                { optionText: "try-catch", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What should be the condition to update the distance of a vertex?",
            options: [
                { optionText: "New path is shorter", optionTag: "A" },
                { optionText: "New path is longer", optionTag: "B" },
                { optionText: "Edge is unvisited", optionTag: "C" },
                { optionText: "Vertex is even-numbered", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you initialize the source distance?",
            options: [
                { optionText: "Set to 0", optionTag: "A" },
                { optionText: "Set to Infinity", optionTag: "B" },
                { optionText: "Set to -1", optionTag: "C" },
                { optionText: "Set to null", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following makes Bellman-Ford slower than Dijkstra?",
            options: [
                { optionText: "Repeated relaxation over all edges", optionTag: "A" },
                { optionText: "It uses priority queue", optionTag: "B" },
                { optionText: "It skips negative edges", optionTag: "C" },
                { optionText: "It sorts edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a drawback of Bellman-Ford?",
            options: [
                { optionText: "Slower than Dijkstra for large graphs", optionTag: "A" },
                { optionText: "Cannot detect negative cycle", optionTag: "B" },
                { optionText: "Only for trees", optionTag: "C" },
                { optionText: "Does not use recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What value is returned if a vertex is unreachable?",
            options: [
                { optionText: "Infinity", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "Null", optionTag: "C" },
                { optionText: "Vertex ID", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
