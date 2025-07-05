import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ BFS - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of the Breadth-First Search algorithm in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BFS"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What does BFS stand for?",
            options: [
                { optionText: "Breadth-First Search", optionTag: "A" },
                { optionText: "Binary First Search", optionTag: "B" },
                { optionText: "Backtracking First Search", optionTag: "C" },
                { optionText: "Base First Scan", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is commonly used in BFS?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Priority Queue", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "BFS is best suited for finding the _____ path in an unweighted graph.",
            options: [
                { optionText: "Shortest", optionTag: "A" },
                { optionText: "Longest", optionTag: "B" },
                { optionText: "Random", optionTag: "C" },
                { optionText: "Deepest", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of BFS in terms of V and E?",
            options: [
                { optionText: "O(V + E)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E log V)", optionTag: "C" },
                { optionText: "O(VE)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What must be used to avoid visiting the same node multiple times in BFS?",
            options: [
                { optionText: "Visited array", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Random shuffle", optionTag: "C" },
                { optionText: "Hash function", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In BFS, which node is visited first?",
            options: [
                { optionText: "Starting node", optionTag: "A" },
                { optionText: "Last node", optionTag: "B" },
                { optionText: "Deepest node", optionTag: "C" },
                { optionText: "Parent node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph traversal is the opposite of BFS?",
            options: [
                { optionText: "DFS", optionTag: "A" },
                { optionText: "Topological Sort", optionTag: "B" },
                { optionText: "Kruskal's Algorithm", optionTag: "C" },
                { optionText: "Prim's Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a valid application of BFS?",
            options: [
                { optionText: "Shortest path in unweighted graph", optionTag: "A" },
                { optionText: "Minimum spanning tree", optionTag: "B" },
                { optionText: "Sorting numbers", optionTag: "C" },
                { optionText: "Balancing BST", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "BFS is a ______ traversal.",
            options: [
                { optionText: "Level-order", optionTag: "A" },
                { optionText: "Preorder", optionTag: "B" },
                { optionText: "Postorder", optionTag: "C" },
                { optionText: "Inorder", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a graph, how are neighboring nodes of a vertex found in BFS?",
            options: [
                { optionText: "Using adjacency list or matrix", optionTag: "A" },
                { optionText: "Using a stack", optionTag: "B" },
                { optionText: "Using hash map only", optionTag: "C" },
                { optionText: "By calculating distance", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What condition ends the BFS traversal?",
            options: [
                { optionText: "Queue becomes empty", optionTag: "A" },
                { optionText: "Visited reaches half of total nodes", optionTag: "B" },
                { optionText: "Depth reaches maximum", optionTag: "C" },
                { optionText: "Start and end meet", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a valid use case of BFS?",
            options: [
                { optionText: "Finding connected components", optionTag: "A" },
                { optionText: "Heapify a tree", optionTag: "B" },
                { optionText: "Find articulation points", optionTag: "C" },
                { optionText: "Balance an AVL tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure helps maintain the level order in BFS?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Deque", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal visits all neighbors before going deeper?",
            options: [
                { optionText: "BFS", optionTag: "A" },
                { optionText: "DFS", optionTag: "B" },
                { optionText: "Preorder", optionTag: "C" },
                { optionText: "Postorder", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is the distance from the source node updated in BFS?",
            options: [
                { optionText: "Level-wise +1 from the parent node", optionTag: "A" },
                { optionText: "Using max value", optionTag: "B" },
                { optionText: "Random assignment", optionTag: "C" },
                { optionText: "Weighted addition", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the auxiliary space complexity of BFS?",
            options: [
                { optionText: "O(V)", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(V^2)", optionTag: "C" },
                { optionText: "O(E)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can BFS be used for cycle detection?",
            options: [
                { optionText: "Yes, in undirected graphs", optionTag: "A" },
                { optionText: "No, only DFS can detect cycles", optionTag: "B" },
                { optionText: "Only in directed acyclic graphs", optionTag: "C" },
                { optionText: "Never", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which variant of BFS is used in 0-1 BFS optimization?",
            options: [
                { optionText: "Deque instead of queue", optionTag: "A" },
                { optionText: "Stack instead of queue", optionTag: "B" },
                { optionText: "Min-heap instead of queue", optionTag: "C" },
                { optionText: "Set instead of queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is an invalid BFS property?",
            options: [
                { optionText: "Uses recursion", optionTag: "A" },
                { optionText: "Finds shortest path in unweighted graphs", optionTag: "B" },
                { optionText: "Uses queue", optionTag: "C" },
                { optionText: "Traverses level by level", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In C++, what type of container is often used to implement the BFS queue?",
            options: [
                { optionText: "std::queue", optionTag: "A" },
                { optionText: "std::stack", optionTag: "B" },
                { optionText: "std::set", optionTag: "C" },
                { optionText: "std::priority_queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
