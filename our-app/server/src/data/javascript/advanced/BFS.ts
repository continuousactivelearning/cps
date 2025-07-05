import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript BFS - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz tests your advanced understanding of Breadth-First Search (BFS) in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BFS"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which data structure is essential for implementing BFS?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Map", optionTag: "D" }
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
                { optionText: "O(V log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can you avoid revisiting nodes in BFS?",
            options: [
                { optionText: "Use a visited set or array", optionTag: "A" },
                { optionText: "Do not use a queue", optionTag: "B" },
                { optionText: "Terminate early", optionTag: "C" },
                { optionText: "Use a stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the output of BFS traversal for a tree: 1 -> [2, 3] -> [4, 5, 6, 7]?",
            options: [
                { optionText: "[1, 2, 3, 4, 5, 6, 7]", optionTag: "A" },
                { optionText: "[1, 3, 2, 7, 6, 5, 4]", optionTag: "B" },
                { optionText: "[1, 2, 4, 5, 3, 6, 7]", optionTag: "C" },
                { optionText: "[1, 4, 5, 6, 7, 2, 3]", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal guarantees the shortest path in an unweighted graph?",
            options: [
                { optionText: "Breadth-First Search", optionTag: "A" },
                { optionText: "Depth-First Search", optionTag: "B" },
                { optionText: "Topological Sort", optionTag: "C" },
                { optionText: "Dijkstra’s Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What JavaScript structure can efficiently represent an adjacency list?",
            options: [
                { optionText: "Map of arrays", optionTag: "A" },
                { optionText: "Set of numbers", optionTag: "B" },
                { optionText: "Array of objects", optionTag: "C" },
                { optionText: "String", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition helps detect a cycle in an undirected graph using BFS?",
            options: [
                { optionText: "Visited neighbor not equal to parent", optionTag: "A" },
                { optionText: "All nodes visited", optionTag: "B" },
                { optionText: "Queue becomes empty", optionTag: "C" },
                { optionText: "Graph is disconnected", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How would you implement BFS on a disconnected graph?",
            options: [
                { optionText: "Run BFS from each unvisited node", optionTag: "A" },
                { optionText: "Use DFS instead", optionTag: "B" },
                { optionText: "Skip unconnected components", optionTag: "C" },
                { optionText: "Use recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if you use DFS instead of BFS for shortest path in unweighted graph?",
            options: [
                { optionText: "You may not get the shortest path", optionTag: "A" },
                { optionText: "DFS always gives shortest path", optionTag: "B" },
                { optionText: "No difference", optionTag: "C" },
                { optionText: "DFS will be faster", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can BFS be adapted for weighted graphs with all weights = 1?",
            options: [
                { optionText: "No changes needed", optionTag: "A" },
                { optionText: "Convert to DFS", optionTag: "B" },
                { optionText: "Use priority queue", optionTag: "C" },
                { optionText: "Ignore edge weights", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is a BFS variation for shortest path in 0-1 weighted graphs?",
            options: [
                { optionText: "0-1 BFS using deque", optionTag: "A" },
                { optionText: "DFS with weights", optionTag: "B" },
                { optionText: "Floyd Warshall", optionTag: "C" },
                { optionText: "Kruskal’s algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How to handle levels or depth in BFS traversal?",
            options: [
                { optionText: "Use queue size at each level", optionTag: "A" },
                { optionText: "Use a stack", optionTag: "B" },
                { optionText: "Sort nodes by ID", optionTag: "C" },
                { optionText: "Use recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case space complexity of BFS on a binary tree with N nodes?",
            options: [
                { optionText: "O(N)", optionTag: "A" },
                { optionText: "O(log N)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(N^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What if you don’t mark nodes as visited in BFS?",
            options: [
                { optionText: "You may enter an infinite loop", optionTag: "A" },
                { optionText: "Traversal is faster", optionTag: "B" },
                { optionText: "Result is same", optionTag: "C" },
                { optionText: "Program skips nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How to ensure that the BFS gives correct output on directed graphs?",
            options: [
                { optionText: "Traverse using direction of edges only", optionTag: "A" },
                { optionText: "Reverse all edges", optionTag: "B" },
                { optionText: "Use DFS", optionTag: "C" },
                { optionText: "Ignore direction", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How to handle duplicate entries in the BFS queue?",
            options: [
                { optionText: "Track visited nodes before enqueuing", optionTag: "A" },
                { optionText: "Allow duplicates", optionTag: "B" },
                { optionText: "Use stack instead", optionTag: "C" },
                { optionText: "Dequeue at every visit", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In maze solving using BFS, what represents a valid move?",
            options: [
                { optionText: "A neighbor cell within bounds and not a wall", optionTag: "A" },
                { optionText: "Any neighbor cell", optionTag: "B" },
                { optionText: "Only left or right cell", optionTag: "C" },
                { optionText: "Only diagonals", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can BFS detect bipartite graphs?",
            options: [
                { optionText: "Alternate coloring during traversal", optionTag: "A" },
                { optionText: "Checking node degrees", optionTag: "B" },
                { optionText: "DFS instead", optionTag: "C" },
                { optionText: "Using heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is needed in BFS for grid-based shortest path?",
            options: [
                { optionText: "Directional deltas (dx, dy)", optionTag: "A" },
                { optionText: "Node height", optionTag: "B" },
                { optionText: "Binary tree", optionTag: "C" },
                { optionText: "DFS array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
