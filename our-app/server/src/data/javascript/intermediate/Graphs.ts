import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Graphs - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz tests your intermediate knowledge of Graphs in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Graphs"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which data structure is commonly used to represent graphs in JavaScript?",
            options: [
                { optionText: "Adjacency list", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Linked list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity to check if there is an edge between two vertices in an adjacency list?",
            options: [
                { optionText: "O(V)", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(E)", optionTag: "C" },
                { optionText: "O(log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is used to detect cycles in a directed graph?",
            options: [
                { optionText: "DFS with recursion stack", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "Dijkstra’s algorithm", optionTag: "C" },
                { optionText: "Prim’s algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you add a vertex to an adjacency list in JavaScript?",
            options: [
                { optionText: "graph[vertex] = []", optionTag: "A" },
                { optionText: "graph.push(vertex)", optionTag: "B" },
                { optionText: "graph.add(vertex)", optionTag: "C" },
                { optionText: "graph.append(vertex)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is suitable for traversing graphs level-by-level?",
            options: [
                { optionText: "BFS", optionTag: "A" },
                { optionText: "DFS", optionTag: "B" },
                { optionText: "Topological sort", optionTag: "C" },
                { optionText: "Dijkstra", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about a complete graph with n vertices?",
            options: [
                { optionText: "It has n*(n-1)/2 edges", optionTag: "A" },
                { optionText: "It has n edges", optionTag: "B" },
                { optionText: "It is a tree", optionTag: "C" },
                { optionText: "It has n*(n-1) edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is best suited for shortest path in graphs with non-negative weights?",
            options: [
                { optionText: "Dijkstra's algorithm", optionTag: "A" },
                { optionText: "Bellman-Ford algorithm", optionTag: "B" },
                { optionText: "Floyd-Warshall algorithm", optionTag: "C" },
                { optionText: "Kruskal's algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is used for topological sorting?",
            options: [
                { optionText: "DFS", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "DFS + Stack", optionTag: "C" },
                { optionText: "Union-Find", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which graph representation is most space-efficient for sparse graphs?",
            options: [
                { optionText: "Adjacency list", optionTag: "A" },
                { optionText: "Adjacency matrix", optionTag: "B" },
                { optionText: "Edge list", optionTag: "C" },
                { optionText: "Incidence matrix", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of BFS on a graph with V vertices and E edges?",
            options: [
                { optionText: "O(V + E)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E^2)", optionTag: "C" },
                { optionText: "O(log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you check for connectivity in an undirected graph?",
            options: [
                { optionText: "Run DFS or BFS from any node and check if all nodes are visited", optionTag: "A" },
                { optionText: "Check if number of edges equals number of vertices", optionTag: "B" },
                { optionText: "Use Kruskal’s algorithm", optionTag: "C" },
                { optionText: "Sort vertices", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph traversal algorithm uses a stack (implicitly or explicitly)?",
            options: [
                { optionText: "DFS", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "Dijkstra", optionTag: "C" },
                { optionText: "Prim", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can you detect cycle in an undirected graph?",
            options: [
                { optionText: "Using Union-Find (Disjoint Set)", optionTag: "A" },
                { optionText: "Using BFS", optionTag: "B" },
                { optionText: "Using adjacency matrix", optionTag: "C" },
                { optionText: "Using a stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph traversal technique uses a queue?",
            options: [
                { optionText: "BFS", optionTag: "A" },
                { optionText: "DFS", optionTag: "B" },
                { optionText: "Dijkstra", optionTag: "C" },
                { optionText: "Topological Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method would you use to detect a cycle in a directed graph?",
            options: [
                { optionText: "DFS with visited and recursion stack", optionTag: "A" },
                { optionText: "BFS with queue", optionTag: "B" },
                { optionText: "Union-Find", optionTag: "C" },
                { optionText: "Prim’s algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript object is typically used to represent adjacency lists?",
            options: [
                { optionText: "Map", optionTag: "A" },
                { optionText: "Set", optionTag: "B" },
                { optionText: "Array", optionTag: "C" },
                { optionText: "Object", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the degree of a vertex?",
            options: [
                { optionText: "Number of edges connected to it", optionTag: "A" },
                { optionText: "Number of vertices in the graph", optionTag: "B" },
                { optionText: "Weight of the vertex", optionTag: "C" },
                { optionText: "Depth of the vertex", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph algorithm is used to find the minimum spanning tree?",
            options: [
                { optionText: "Kruskal’s or Prim’s", optionTag: "A" },
                { optionText: "DFS", optionTag: "B" },
                { optionText: "BFS", optionTag: "C" },
                { optionText: "Bellman-Ford", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can a graph have both directed and undirected edges?",
            options: [
                { optionText: "Yes, it is called a mixed graph", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only in trees", optionTag: "C" },
                { optionText: "Only in DAGs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a complete graph?",
            options: [
                { optionText: "A graph where every vertex is connected to every other vertex", optionTag: "A" },
                { optionText: "A graph with a cycle", optionTag: "B" },
                { optionText: "A graph with no edges", optionTag: "C" },
                { optionText: "A graph with no vertices", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
