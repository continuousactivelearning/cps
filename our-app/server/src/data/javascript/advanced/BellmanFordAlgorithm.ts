import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Bellman-Ford Algorithm - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz assesses your advanced understanding of the Bellman-Ford algorithm, including edge relaxation, negative weight cycles, and implementation strategies in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BellmanFordAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the main purpose of the Bellman-Ford algorithm?",
            options: [
                { optionText: "Finding shortest paths from a single source", optionTag: "A" },
                { optionText: "Detecting cycles in graphs", optionTag: "B" },
                { optionText: "Sorting edges of a graph", optionTag: "C" },
                { optionText: "Traversing all nodes in DFS order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of graphs can Bellman-Ford handle that Dijkstra’s cannot?",
            options: [
                { optionText: "Graphs with negative weight edges", optionTag: "A" },
                { optionText: "Graphs with cycles", optionTag: "B" },
                { optionText: "Unweighted graphs", optionTag: "C" },
                { optionText: "Undirected graphs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many times are edges relaxed in the Bellman-Ford algorithm (for a graph with V vertices)?",
            options: [
                { optionText: "V - 1 times", optionTag: "A" },
                { optionText: "V times", optionTag: "B" },
                { optionText: "E times", optionTag: "C" },
                { optionText: "2 * V times", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of the Bellman-Ford algorithm?",
            options: [
                { optionText: "O(V * E)", optionTag: "A" },
                { optionText: "O(E log V)", optionTag: "B" },
                { optionText: "O(V^2)", optionTag: "C" },
                { optionText: "O(E)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is edge relaxation in the Bellman-Ford algorithm?",
            options: [
                { optionText: "Updating shortest distance to a vertex if a better path is found", optionTag: "A" },
                { optionText: "Swapping edges", optionTag: "B" },
                { optionText: "Removing duplicate edges", optionTag: "C" },
                { optionText: "Removing longest path", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the final step in Bellman-Ford to detect a negative weight cycle?",
            options: [
                { optionText: "Check for further relaxation after V-1 iterations", optionTag: "A" },
                { optionText: "Count total edges", optionTag: "B" },
                { optionText: "Sort all edges by weight", optionTag: "C" },
                { optionText: "Traverse with BFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What should you do if a negative weight cycle is detected in Bellman-Ford?",
            options: [
                { optionText: "Return an error or mark paths as invalid", optionTag: "A" },
                { optionText: "Continue execution", optionTag: "B" },
                { optionText: "Remove all edges", optionTag: "C" },
                { optionText: "Perform DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Bellman-Ford handle directed graphs?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only if acyclic", optionTag: "C" },
                { optionText: "Only if weighted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How are distances initialized in Bellman-Ford?",
            options: [
                { optionText: "0 for source, Infinity for others", optionTag: "A" },
                { optionText: "All zero", optionTag: "B" },
                { optionText: "Random values", optionTag: "C" },
                { optionText: "Infinity for all", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is commonly used to store edges in Bellman-Ford?",
            options: [
                { optionText: "Array of objects {from, to, weight}", optionTag: "A" },
                { optionText: "Priority queue", optionTag: "B" },
                { optionText: "Matrix", optionTag: "C" },
                { optionText: "Stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about Bellman-Ford compared to Dijkstra?",
            options: [
                { optionText: "It works with negative weights", optionTag: "A" },
                { optionText: "It’s faster in all cases", optionTag: "B" },
                { optionText: "It doesn't guarantee shortest paths", optionTag: "C" },
                { optionText: "It requires a priority queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if Bellman-Ford fails to converge within V-1 iterations?",
            options: [
                { optionText: "A negative weight cycle exists", optionTag: "A" },
                { optionText: "Algorithm is incomplete", optionTag: "B" },
                { optionText: "Graph is unconnected", optionTag: "C" },
                { optionText: "Memory overflow", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which statement is true about edge weights in Bellman-Ford?",
            options: [
                { optionText: "They can be negative", optionTag: "A" },
                { optionText: "They must be positive", optionTag: "B" },
                { optionText: "They must all be zero", optionTag: "C" },
                { optionText: "They must be integers", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the algorithm return after successful execution?",
            options: [
                { optionText: "Shortest distance to all vertices", optionTag: "A" },
                { optionText: "Cycle of minimum weight", optionTag: "B" },
                { optionText: "Topological order", optionTag: "C" },
                { optionText: "All spanning trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In JavaScript, which loop is best for relaxing all edges?",
            options: [
                { optionText: "for (let i = 0; i < V - 1; i++)", optionTag: "A" },
                { optionText: "while (edges.length)", optionTag: "B" },
                { optionText: "for (const edge of edges) {}", optionTag: "C" },
                { optionText: "for (let i = 0; i < E; i++)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will be the result if all edge weights are positive?",
            options: [
                { optionText: "Bellman-Ford still works but is slower than Dijkstra", optionTag: "A" },
                { optionText: "Bellman-Ford fails", optionTag: "B" },
                { optionText: "It returns incorrect results", optionTag: "C" },
                { optionText: "It takes O(1) time", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Is Bellman-Ford a greedy algorithm?",
            options: [
                { optionText: "No", optionTag: "A" },
                { optionText: "Yes", optionTag: "B" },
                { optionText: "Depends on graph type", optionTag: "C" },
                { optionText: "Only for positive weights", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What should be done after every relaxation step?",
            options: [
                { optionText: "Update the distance array", optionTag: "A" },
                { optionText: "Delete current edge", optionTag: "B" },
                { optionText: "Rebuild graph", optionTag: "C" },
                { optionText: "Recalculate all paths", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "If a vertex remains at Infinity after the algorithm, what does it indicate?",
            options: [
                { optionText: "It is unreachable from the source", optionTag: "A" },
                { optionText: "It is part of a cycle", optionTag: "B" },
                { optionText: "It is the source", optionTag: "C" },
                { optionText: "It has the longest path", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is edge relaxation implemented in JavaScript?",
            options: [
                { optionText: "if (dist[u] + weight < dist[v]) dist[v] = dist[u] + weight;", optionTag: "A" },
                { optionText: "dist[v] = Math.max(dist[u], weight);", optionTag: "B" },
                { optionText: "dist[v] += weight;", optionTag: "C" },
                { optionText: "dist[v] = dist[u];", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
