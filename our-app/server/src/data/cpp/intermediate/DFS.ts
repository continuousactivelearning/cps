import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ DFS - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz evaluates your intermediate-level knowledge of Depth-First Search (DFS) in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DFS"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of DFS for a graph with V vertices and E edges?",
            options: [
                { optionText: "O(V + E)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E^2)", optionTag: "C" },
                { optionText: "O(VE)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is commonly used to implement DFS iteratively?",
            options: [
                { optionText: "Stack", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Deque", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the default color used to mark a node not visited in DFS?",
            options: [
                { optionText: "White", optionTag: "A" },
                { optionText: "Gray", optionTag: "B" },
                { optionText: "Black", optionTag: "C" },
                { optionText: "Green", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if DFS is called on a disconnected graph?",
            options: [
                { optionText: "It only visits connected components", optionTag: "A" },
                { optionText: "It throws an error", optionTag: "B" },
                { optionText: "It visits all nodes", optionTag: "C" },
                { optionText: "It loops infinitely", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following applications uses DFS?",
            options: [
                { optionText: "Topological sorting", optionTag: "A" },
                { optionText: "Shortest path in unweighted graph", optionTag: "B" },
                { optionText: "Prim’s Algorithm", optionTag: "C" },
                { optionText: "Dijkstra’s Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What kind of graph traversal does DFS perform?",
            options: [
                { optionText: "Depth-wise", optionTag: "A" },
                { optionText: "Level-wise", optionTag: "B" },
                { optionText: "Random", optionTag: "C" },
                { optionText: "Cyclic", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In recursive DFS, what prevents infinite recursion in cyclic graphs?",
            options: [
                { optionText: "Visited array", optionTag: "A" },
                { optionText: "Depth counter", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Stack size", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case space complexity of DFS?",
            options: [
                { optionText: "O(V)", optionTag: "A" },
                { optionText: "O(E)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(V + E)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "DFS can be used to detect:",
            options: [
                { optionText: "Cycles in a graph", optionTag: "A" },
                { optionText: "Shortest path", optionTag: "B" },
                { optionText: "Graph diameter", optionTag: "C" },
                { optionText: "Minimum spanning tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which node is visited first in DFS?",
            options: [
                { optionText: "The start node", optionTag: "A" },
                { optionText: "Any leaf node", optionTag: "B" },
                { optionText: "The farthest node", optionTag: "C" },
                { optionText: "The middle node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the order of DFS in a binary tree?",
            options: [
                { optionText: "Preorder, Inorder, Postorder", optionTag: "A" },
                { optionText: "Level Order", optionTag: "B" },
                { optionText: "Random", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is not a DFS traversal property?",
            options: [
                { optionText: "Follows a single path until end", optionTag: "A" },
                { optionText: "Backtracks when needed", optionTag: "B" },
                { optionText: "Always finds the shortest path", optionTag: "C" },
                { optionText: "Uses recursion or stack", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "How can DFS be used in solving mazes?",
            options: [
                { optionText: "Find any path to the end", optionTag: "A" },
                { optionText: "Find shortest path", optionTag: "B" },
                { optionText: "Remove cycles", optionTag: "C" },
                { optionText: "Color the maze", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the output of DFS for a disconnected graph?",
            options: [
                { optionText: "Only reachable components are visited", optionTag: "A" },
                { optionText: "All nodes are visited", optionTag: "B" },
                { optionText: "DFS fails", optionTag: "C" },
                { optionText: "Graph is converted to connected", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ STL container best fits recursive DFS implementation?",
            options: [
                { optionText: "vector<bool>", optionTag: "A" },
                { optionText: "queue<int>", optionTag: "B" },
                { optionText: "stack<int>", optionTag: "C" },
                { optionText: "deque<int>", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What property must a graph have for DFS to visit all vertices from a single start node?",
            options: [
                { optionText: "Graph is connected", optionTag: "A" },
                { optionText: "Graph is cyclic", optionTag: "B" },
                { optionText: "Graph is undirected", optionTag: "C" },
                { optionText: "Graph is directed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which edge classification is possible during DFS?",
            options: [
                { optionText: "Tree, back, forward, cross", optionTag: "A" },
                { optionText: "Start, middle, end", optionTag: "B" },
                { optionText: "High, low, medium", optionTag: "C" },
                { optionText: "Light, dark", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What prevents infinite loops in DFS on graphs with cycles?",
            options: [
                { optionText: "Visited tracking", optionTag: "A" },
                { optionText: "Depth limits", optionTag: "B" },
                { optionText: "Node coloring", optionTag: "C" },
                { optionText: "Path reversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the role of timestamps in DFS (Tarjan’s Algorithm)?",
            options: [
                { optionText: "To detect back edges", optionTag: "A" },
                { optionText: "To calculate height", optionTag: "B" },
                { optionText: "To measure weight", optionTag: "C" },
                { optionText: "To assign priority", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem does not require DFS?",
            options: [
                { optionText: "Kruskal’s MST", optionTag: "A" },
                { optionText: "Cycle Detection", optionTag: "B" },
                { optionText: "Topological Sort", optionTag: "C" },
                { optionText: "Connected Components", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
