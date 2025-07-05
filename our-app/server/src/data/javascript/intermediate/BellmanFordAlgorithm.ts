import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Bellman-Ford Algorithm - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz tests your intermediate knowledge of the Bellman-Ford Algorithm in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BellmanFordAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What type of graph does Bellman-Ford work on?",
            options: [
                { optionText: "Weighted and directed graphs", optionTag: "A" },
                { optionText: "Unweighted graphs", optionTag: "B" },
                { optionText: "Only undirected graphs", optionTag: "C" },
                { optionText: "Graphs without negative weights", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of the Bellman-Ford algorithm?",
            options: [
                { optionText: "O(VE)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E log V)", optionTag: "C" },
                { optionText: "O(V^3)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the Bellman-Ford algorithm detect that Dijkstra's algorithm cannot?",
            options: [
                { optionText: "Negative weight cycles", optionTag: "A" },
                { optionText: "Disconnected nodes", optionTag: "B" },
                { optionText: "Minimum spanning trees", optionTag: "C" },
                { optionText: "Cycle detection", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the key idea of the Bellman-Ford algorithm?",
            options: [
                { optionText: "Relax all edges repeatedly", optionTag: "A" },
                { optionText: "Relax edges once", optionTag: "B" },
                { optionText: "Use a priority queue", optionTag: "C" },
                { optionText: "Use adjacency matrix", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many times are the edges relaxed in Bellman-Ford?",
            options: [
                { optionText: "V-1 times", optionTag: "A" },
                { optionText: "E times", optionTag: "B" },
                { optionText: "V times", optionTag: "C" },
                { optionText: "V+1 times", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In JavaScript, which data structure is best for representing edges in Bellman-Ford?",
            options: [
                { optionText: "Array of objects", optionTag: "A" },
                { optionText: "Set", optionTag: "B" },
                { optionText: "Map", optionTag: "C" },
                { optionText: "Stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition checks for a negative weight cycle?",
            options: [
                { optionText: "If a shorter path is still found after V-1 iterations", optionTag: "A" },
                { optionText: "If all edges are positive", optionTag: "B" },
                { optionText: "If graph has a cycle", optionTag: "C" },
                { optionText: "If total weight becomes zero", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is stored in the distance array?",
            options: [
                { optionText: "Shortest distance from source to every vertex", optionTag: "A" },
                { optionText: "Edge weights", optionTag: "B" },
                { optionText: "Visited nodes", optionTag: "C" },
                { optionText: "Cycle detection", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What should be the initial value of all distances except the source?",
            options: [
                { optionText: "Infinity", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "1", optionTag: "C" },
                { optionText: "-1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will the algorithm return if it detects a negative cycle?",
            options: [
                { optionText: "Error or false", optionTag: "A" },
                { optionText: "Infinity", optionTag: "B" },
                { optionText: "Graph object", optionTag: "C" },
                { optionText: "Unchanged distances", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which scenario is most suitable for Bellman-Ford?",
            options: [
                { optionText: "Graphs with negative weights", optionTag: "A" },
                { optionText: "Dense graphs", optionTag: "B" },
                { optionText: "Graphs with only positive weights", optionTag: "C" },
                { optionText: "Graphs with cycles", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does 'relaxing an edge' mean?",
            options: [
                { optionText: "Updating the shortest distance if a shorter path is found", optionTag: "A" },
                { optionText: "Removing an edge", optionTag: "B" },
                { optionText: "Ignoring negative weights", optionTag: "C" },
                { optionText: "Skipping the edge", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Bellman-Ford be implemented recursively?",
            options: [
                { optionText: "Yes, but iterative is more efficient", optionTag: "A" },
                { optionText: "No, recursion doesn't work here", optionTag: "B" },
                { optionText: "Yes, only for undirected graphs", optionTag: "C" },
                { optionText: "Yes, only for acyclic graphs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a major limitation of Bellman-Ford?",
            options: [
                { optionText: "Slower than Dijkstra’s algorithm", optionTag: "A" },
                { optionText: "Cannot handle weighted edges", optionTag: "B" },
                { optionText: "Doesn’t work with cycles", optionTag: "C" },
                { optionText: "Needs all nodes to be visited", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which line initializes distances in JavaScript?",
            options: [
                { optionText: "let dist = Array(V).fill(Infinity);", optionTag: "A" },
                { optionText: "let dist = [0]*V;", optionTag: "B" },
                { optionText: "dist = {}; for(i=0;i<V;i++) dist[i]=0;", optionTag: "C" },
                { optionText: "let dist = {}; dist.fill(0);", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function call performs edge relaxation in JavaScript?",
            options: [
                { optionText: "if (dist[u] + weight < dist[v])", optionTag: "A" },
                { optionText: "dist[v] = dist[u] + weight", optionTag: "B" },
                { optionText: "dist[u] = Math.min(...)", optionTag: "C" },
                { optionText: "relaxEdge(u, v, weight)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When is the algorithm terminated early?",
            options: [
                { optionText: "When no distances are updated in an iteration", optionTag: "A" },
                { optionText: "After 1 iteration", optionTag: "B" },
                { optionText: "When a cycle is found", optionTag: "C" },
                { optionText: "After visiting all nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is required input format for Bellman-Ford?",
            options: [
                { optionText: "List of edges with weights", optionTag: "A" },
                { optionText: "Adjacency matrix", optionTag: "B" },
                { optionText: "Object map of nodes", optionTag: "C" },
                { optionText: "2D array of distances", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal does Bellman-Ford follow?",
            options: [
                { optionText: "Edge-based iteration", optionTag: "A" },
                { optionText: "BFS traversal", optionTag: "B" },
                { optionText: "DFS traversal", optionTag: "C" },
                { optionText: "Topological sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Is Bellman-Ford a greedy algorithm?",
            options: [
                { optionText: "No, it's dynamic programming based", optionTag: "A" },
                { optionText: "Yes, always chooses minimum edge", optionTag: "B" },
                { optionText: "Yes, uses local optimum", optionTag: "C" },
                { optionText: "No, uses recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
