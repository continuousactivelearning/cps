import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Dijkstra's Algorithm - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz assesses advanced understanding and implementation details of Dijkstra's Algorithm in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DijkstrasAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of Dijkstra's algorithm using a min-priority queue and an adjacency list (with binary heap)?",
            options: [
                { optionText: "O((V + E) log V)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E^2)", optionTag: "C" },
                { optionText: "O(VE)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is commonly used to implement the priority queue in Dijkstra's algorithm?",
            options: [
                { optionText: "Min Heap", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Deque", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which type of graphs can Dijkstra's algorithm handle correctly?",
            options: [
                { optionText: "Graphs with non-negative weights only", optionTag: "A" },
                { optionText: "Graphs with negative weights", optionTag: "B" },
                { optionText: "Undirected graphs only", optionTag: "C" },
                { optionText: "Unweighted graphs only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will happen if Dijkstra’s algorithm is used on a graph with negative edge weights?",
            options: [
                { optionText: "It may give incorrect shortest paths", optionTag: "A" },
                { optionText: "It will detect negative cycles", optionTag: "B" },
                { optionText: "It will crash", optionTag: "C" },
                { optionText: "It always works fine", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Dijkstra’s algorithm is a special case of which general algorithm?",
            options: [
                { optionText: "Uniform Cost Search", optionTag: "A" },
                { optionText: "Bellman-Ford", optionTag: "B" },
                { optionText: "Prim’s Algorithm", optionTag: "C" },
                { optionText: "A* Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does Dijkstra's algorithm decide the next vertex to process?",
            options: [
                { optionText: "Vertex with the smallest tentative distance", optionTag: "A" },
                { optionText: "Vertex with highest degree", optionTag: "B" },
                { optionText: "Vertex with lowest degree", optionTag: "C" },
                { optionText: "Vertex farthest from source", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When is a vertex marked as finalized in Dijkstra’s algorithm?",
            options: [
                { optionText: "When its shortest path distance is confirmed", optionTag: "A" },
                { optionText: "After it is first added to the queue", optionTag: "B" },
                { optionText: "When all its neighbors are visited", optionTag: "C" },
                { optionText: "At the start", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ STL container is best suited for implementing the priority queue in Dijkstra’s algorithm?",
            options: [
                { optionText: "priority_queue with greater comparator", optionTag: "A" },
                { optionText: "queue", optionTag: "B" },
                { optionText: "stack", optionTag: "C" },
                { optionText: "unordered_map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these can improve performance over binary heap in Dijkstra’s algorithm?",
            options: [
                { optionText: "Fibonacci Heap", optionTag: "A" },
                { optionText: "AVL Tree", optionTag: "B" },
                { optionText: "Segment Tree", optionTag: "C" },
                { optionText: "Red-Black Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Dijkstra's algorithm maintains which main array to store results?",
            options: [
                { optionText: "Distance array", optionTag: "A" },
                { optionText: "Visited array", optionTag: "B" },
                { optionText: "Parent array", optionTag: "C" },
                { optionText: "Adjacency array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph representation is most efficient for sparse graphs in Dijkstra?",
            options: [
                { optionText: "Adjacency List", optionTag: "A" },
                { optionText: "Adjacency Matrix", optionTag: "B" },
                { optionText: "Incidence Matrix", optionTag: "C" },
                { optionText: "Linked List", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the initial value of all distances in Dijkstra’s algorithm except for the source?",
            options: [
                { optionText: "Infinity", optionTag: "A" },
                { optionText: "Zero", optionTag: "B" },
                { optionText: "One", optionTag: "C" },
                { optionText: "Undefined", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Dijkstra's algorithm, how many times is a node relaxed?",
            options: [
                { optionText: "At most once", optionTag: "A" },
                { optionText: "At least twice", optionTag: "B" },
                { optionText: "Depends on degree", optionTag: "C" },
                { optionText: "Infinite", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What causes the performance of Dijkstra's algorithm to degrade on dense graphs?",
            options: [
                { optionText: "Too many edges cause more priority queue operations", optionTag: "A" },
                { optionText: "Too many nodes to scan", optionTag: "B" },
                { optionText: "Heap memory overflow", optionTag: "C" },
                { optionText: "DFS is preferred", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following uses Dijkstra’s algorithm in real life?",
            options: [
                { optionText: "GPS Navigation Systems", optionTag: "A" },
                { optionText: "Sorting Emails", optionTag: "B" },
                { optionText: "Browser Rendering", optionTag: "C" },
                { optionText: "Memory Allocation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Dijkstra's algorithm is based on which programming paradigm?",
            options: [
                { optionText: "Greedy", optionTag: "A" },
                { optionText: "Dynamic Programming", optionTag: "B" },
                { optionText: "Backtracking", optionTag: "C" },
                { optionText: "Divide and Conquer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the output of Dijkstra’s algorithm?",
            options: [
                { optionText: "Shortest distances from source to all vertices", optionTag: "A" },
                { optionText: "Minimum spanning tree", optionTag: "B" },
                { optionText: "Maximum flow", optionTag: "C" },
                { optionText: "Topological order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is NOT a limitation of Dijkstra’s algorithm?",
            options: [
                { optionText: "Does not work with negative edge weights", optionTag: "A" },
                { optionText: "Cannot detect negative cycles", optionTag: "B" },
                { optionText: "Needs all edges beforehand", optionTag: "C" },
                { optionText: "Works only for DAGs", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which vertex is considered next after source in the priority queue?",
            options: [
                { optionText: "The one with least cumulative cost", optionTag: "A" },
                { optionText: "The farthest from the source", optionTag: "B" },
                { optionText: "The one with max degree", optionTag: "C" },
                { optionText: "The neighbor of a leaf", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which version of Dijkstra’s performs better on large graphs?",
            options: [
                { optionText: "Min-heap based implementation", optionTag: "A" },
                { optionText: "Array-based implementation", optionTag: "B" },
                { optionText: "Matrix-based approach", optionTag: "C" },
                { optionText: "Queue without priority", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
