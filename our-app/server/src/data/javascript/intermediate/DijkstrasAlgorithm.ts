import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Dijkstra's Algorithm - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz tests your intermediate understanding of Dijkstra's algorithm using JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DijkstrasAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Dijkstra's algorithm is used to solve what kind of problem?",
            options: [
                { optionText: "Single-source shortest path", optionTag: "A" },
                { optionText: "Maximum flow", optionTag: "B" },
                { optionText: "Minimum spanning tree", optionTag: "C" },
                { optionText: "Topological sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure improves the performance of Dijkstra's algorithm?",
            options: [
                { optionText: "Priority queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Array", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Dijkstra’s algorithm using a min heap?",
            options: [
                { optionText: "O((V + E) log V)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E)", optionTag: "C" },
                { optionText: "O(VE)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of graph does Dijkstra's algorithm assume?",
            options: [
                { optionText: "Weighted graph with non-negative weights", optionTag: "A" },
                { optionText: "Unweighted graph", optionTag: "B" },
                { optionText: "Directed graph with cycles", optionTag: "C" },
                { optionText: "Graph with negative weights", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT part of Dijkstra’s algorithm?",
            options: [
                { optionText: "Negative edge weight handling", optionTag: "A" },
                { optionText: "Distance array", optionTag: "B" },
                { optionText: "Priority queue", optionTag: "C" },
                { optionText: "Visited set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Dijkstra's algorithm, what is initialized to 0 for the source?",
            options: [
                { optionText: "Distance", optionTag: "A" },
                { optionText: "Priority", optionTag: "B" },
                { optionText: "Weight", optionTag: "C" },
                { optionText: "Path count", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which statement is true about Dijkstra’s algorithm?",
            options: [
                { optionText: "It fails on graphs with negative weight edges", optionTag: "A" },
                { optionText: "It always uses BFS internally", optionTag: "B" },
                { optionText: "It works better on trees", optionTag: "C" },
                { optionText: "It only works on directed graphs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which alternative algorithm can handle negative weights?",
            options: [
                { optionText: "Bellman-Ford", optionTag: "A" },
                { optionText: "Prim's", optionTag: "B" },
                { optionText: "Kruskal’s", optionTag: "C" },
                { optionText: "Floyd-Warshall", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is updated when a shorter path is found during Dijkstra's execution?",
            options: [
                { optionText: "Distance array", optionTag: "A" },
                { optionText: "Visited set", optionTag: "B" },
                { optionText: "Graph edges", optionTag: "C" },
                { optionText: "Heap structure", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if all weights in a graph are equal?",
            options: [
                { optionText: "Dijkstra behaves like BFS", optionTag: "A" },
                { optionText: "Dijkstra fails", optionTag: "B" },
                { optionText: "All nodes are unreachable", optionTag: "C" },
                { optionText: "Algorithm loops infinitely", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which structure ensures we always choose the next closest vertex?",
            options: [
                { optionText: "Min heap (priority queue)", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Adjacency matrix", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why does Dijkstra use a greedy approach?",
            options: [
                { optionText: "It always selects the locally optimal choice", optionTag: "A" },
                { optionText: "It exhausts all possibilities", optionTag: "B" },
                { optionText: "It uses backtracking", optionTag: "C" },
                { optionText: "It’s recursive in nature", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What must be done after relaxing an edge?",
            options: [
                { optionText: "Update priority queue", optionTag: "A" },
                { optionText: "Clear visited list", optionTag: "B" },
                { optionText: "Delete edge", optionTag: "C" },
                { optionText: "Skip to next vertex", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which value is stored in the priority queue in Dijkstra's algorithm?",
            options: [
                { optionText: "Distance from source", optionTag: "A" },
                { optionText: "Node degree", optionTag: "B" },
                { optionText: "Edge weight", optionTag: "C" },
                { optionText: "Parent node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Dijkstra’s algorithm assumes what about edge weights?",
            options: [
                { optionText: "They are non-negative", optionTag: "A" },
                { optionText: "They are integers", optionTag: "B" },
                { optionText: "They are random", optionTag: "C" },
                { optionText: "They are unit values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the initial distance to all nodes except the source?",
            options: [
                { optionText: "Infinity", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "-1", optionTag: "C" },
                { optionText: "Undefined", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When does the algorithm terminate?",
            options: [
                { optionText: "All nodes visited or target reached", optionTag: "A" },
                { optionText: "Priority queue empty", optionTag: "B" },
                { optionText: "Visited list full", optionTag: "C" },
                { optionText: "No update in distance array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which array holds the best known distances during execution?",
            options: [
                { optionText: "Distance array", optionTag: "A" },
                { optionText: "Visited array", optionTag: "B" },
                { optionText: "Heap array", optionTag: "C" },
                { optionText: "Edge array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Dijkstra's be used on directed graphs?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only weighted ones", optionTag: "C" },
                { optionText: "Only unweighted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is used to reconstruct the shortest path after algorithm finishes?",
            options: [
                { optionText: "Parent or previous node map", optionTag: "A" },
                { optionText: "Graph traversal", optionTag: "B" },
                { optionText: "DFS on result", optionTag: "C" },
                { optionText: "Random walk", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
