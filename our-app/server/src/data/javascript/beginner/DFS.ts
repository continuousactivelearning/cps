import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript DFS - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz evaluates your beginner-level understanding of Depth First Search (DFS) in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DFS"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What does DFS stand for in graph traversal?",
            options: [
                { optionText: "Depth First Search", optionTag: "A" },
                { optionText: "Data Find Search", optionTag: "B" },
                { optionText: "Downward File Search", optionTag: "C" },
                { optionText: "Direct First Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is commonly used to implement DFS?",
            options: [
                { optionText: "Stack", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the primary goal of DFS?",
            options: [
                { optionText: "To explore as far as possible along each branch", optionTag: "A" },
                { optionText: "To explore the closest nodes first", optionTag: "B" },
                { optionText: "To find the shortest path", optionTag: "C" },
                { optionText: "To remove duplicate nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "DFS can be implemented using which technique?",
            options: [
                { optionText: "Recursion", optionTag: "A" },
                { optionText: "Event loop", optionTag: "B" },
                { optionText: "Promises", optionTag: "C" },
                { optionText: "Ajax", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph representation is efficient for DFS?",
            options: [
                { optionText: "Adjacency list", optionTag: "A" },
                { optionText: "Matrix chain", optionTag: "B" },
                { optionText: "Linked list", optionTag: "C" },
                { optionText: "Heap tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of DFS in a graph with V vertices and E edges?",
            options: [
                { optionText: "O(V + E)", optionTag: "A" },
                { optionText: "O(V * E)", optionTag: "B" },
                { optionText: "O(V^2)", optionTag: "C" },
                { optionText: "O(log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which scenario is DFS NOT ideal for?",
            options: [
                { optionText: "Finding shortest path in an unweighted graph", optionTag: "A" },
                { optionText: "Detecting cycles", optionTag: "B" },
                { optionText: "Topological sorting", optionTag: "C" },
                { optionText: "Graph traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a key feature of DFS traversal?",
            options: [
                { optionText: "Backtracking", optionTag: "A" },
                { optionText: "Greedy selection", optionTag: "B" },
                { optionText: "Heuristic approach", optionTag: "C" },
                { optionText: "Breadth processing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a DFS traversal, a node is visited...",
            options: [
                { optionText: "Before its neighbors", optionTag: "A" },
                { optionText: "Only after all neighbors", optionTag: "B" },
                { optionText: "In reverse order", optionTag: "C" },
                { optionText: "Twice", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you avoid infinite loops in DFS?",
            options: [
                { optionText: "Mark visited nodes", optionTag: "A" },
                { optionText: "Use timers", optionTag: "B" },
                { optionText: "Terminate early", optionTag: "C" },
                { optionText: "Add delay", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "DFS works on which kind of graphs?",
            options: [
                { optionText: "Both directed and undirected", optionTag: "A" },
                { optionText: "Only trees", optionTag: "B" },
                { optionText: "Only DAGs", optionTag: "C" },
                { optionText: "Only undirected graphs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal order does DFS follow?",
            options: [
                { optionText: "Depth-wise", optionTag: "A" },
                { optionText: "Level-wise", optionTag: "B" },
                { optionText: "Random", optionTag: "C" },
                { optionText: "Balanced", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the base case in recursive DFS?",
            options: [
                { optionText: "If node is already visited", optionTag: "A" },
                { optionText: "If node is even", optionTag: "B" },
                { optionText: "If node is null", optionTag: "C" },
                { optionText: "If node is last", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal uses stack explicitly?",
            options: [
                { optionText: "DFS", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "Dijkstra", optionTag: "C" },
                { optionText: "Prim's", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does DFS differ from BFS?",
            options: [
                { optionText: "DFS goes deep first, BFS goes level by level", optionTag: "A" },
                { optionText: "DFS is faster always", optionTag: "B" },
                { optionText: "DFS uses queue", optionTag: "C" },
                { optionText: "They are same", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In which case will DFS not terminate?",
            options: [
                { optionText: "Infinite loop due to cycle with no visited check", optionTag: "A" },
                { optionText: "Tree with leaf nodes", optionTag: "B" },
                { optionText: "No children nodes", optionTag: "C" },
                { optionText: "Queue overflow", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is true for DFS?",
            options: [
                { optionText: "It can be used for path finding", optionTag: "A" },
                { optionText: "It’s used only in binary trees", optionTag: "B" },
                { optionText: "It ignores cycles", optionTag: "C" },
                { optionText: "It uses a queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which type of traversal does recursive DFS follow?",
            options: [
                { optionText: "Preorder-like", optionTag: "A" },
                { optionText: "Postorder always", optionTag: "B" },
                { optionText: "Inorder only", optionTag: "C" },
                { optionText: "Level order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "DFS is useful for which type of sorting?",
            options: [
                { optionText: "Topological sort", optionTag: "A" },
                { optionText: "Bubble sort", optionTag: "B" },
                { optionText: "Merge sort", optionTag: "C" },
                { optionText: "Heap sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "DFS uses what kind of memory model?",
            options: [
                { optionText: "LIFO", optionTag: "A" },
                { optionText: "FIFO", optionTag: "B" },
                { optionText: "Random", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
