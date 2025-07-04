import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript DFS - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz tests your intermediate knowledge of Depth First Search (DFS) algorithms using JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DFS"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What data structure is typically used to implement DFS iteratively?",
            options: [
                { optionText: "Stack", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Priority Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about DFS?",
            options: [
                { optionText: "DFS may not find the shortest path in unweighted graphs", optionTag: "A" },
                { optionText: "DFS always finds the shortest path", optionTag: "B" },
                { optionText: "DFS uses a queue", optionTag: "C" },
                { optionText: "DFS runs in constant time", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is naturally recursive?",
            options: [
                { optionText: "DFS", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "Level order", optionTag: "C" },
                { optionText: "Post-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In DFS, what happens when a node has no unvisited neighbors?",
            options: [
                { optionText: "Backtrack", optionTag: "A" },
                { optionText: "Restart", optionTag: "B" },
                { optionText: "Skip node", optionTag: "C" },
                { optionText: "Throw error", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "DFS on a binary tree visits nodes in which order by default?",
            options: [
                { optionText: "Pre-order", optionTag: "A" },
                { optionText: "Level-order", optionTag: "B" },
                { optionText: "Breadth-first", optionTag: "C" },
                { optionText: "Topological", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "DFS on a graph with n vertices and e edges runs in?",
            options: [
                { optionText: "O(n + e)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n^3)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem is best solved using DFS?",
            options: [
                { optionText: "Cycle detection in graph", optionTag: "A" },
                { optionText: "Shortest path in weighted graph", optionTag: "B" },
                { optionText: "Finding MST", optionTag: "C" },
                { optionText: "Sorting array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do we avoid revisiting nodes in DFS?",
            options: [
                { optionText: "Use a visited set or array", optionTag: "A" },
                { optionText: "Use priority queue", optionTag: "B" },
                { optionText: "Restart search", optionTag: "C" },
                { optionText: "Randomize nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal explores as far as possible along each branch before backtracking?",
            options: [
                { optionText: "DFS", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "In-order", optionTag: "C" },
                { optionText: "Level-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is true for recursive DFS?",
            options: [
                { optionText: "Uses call stack for backtracking", optionTag: "A" },
                { optionText: "Uses queue", optionTag: "B" },
                { optionText: "Cannot be implemented", optionTag: "C" },
                { optionText: "Never terminates", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of DFS in an adjacency matrix?",
            options: [
                { optionText: "O(V^2)", optionTag: "A" },
                { optionText: "O(V)", optionTag: "B" },
                { optionText: "O(V+E)", optionTag: "C" },
                { optionText: "O(log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal order is not necessarily obtained by DFS?",
            options: [
                { optionText: "Level-order", optionTag: "A" },
                { optionText: "Pre-order", optionTag: "B" },
                { optionText: "In-order", optionTag: "C" },
                { optionText: "Post-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many times is a node visited in DFS in a connected graph?",
            options: [
                { optionText: "Once", optionTag: "A" },
                { optionText: "Twice", optionTag: "B" },
                { optionText: "n times", optionTag: "C" },
                { optionText: "Depends on neighbors", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "DFS is best used for which of the following tasks?",
            options: [
                { optionText: "Topological sort", optionTag: "A" },
                { optionText: "Finding shortest path", optionTag: "B" },
                { optionText: "Level order traversal", optionTag: "C" },
                { optionText: "Building heaps", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which version of DFS uses explicit stack?",
            options: [
                { optionText: "Iterative DFS", optionTag: "A" },
                { optionText: "Recursive DFS", optionTag: "B" },
                { optionText: "BFS", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In DFS, what structure holds nodes yet to be explored?",
            options: [
                { optionText: "Stack", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Hash Table", optionTag: "C" },
                { optionText: "Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which variant of DFS visits all children before siblings?",
            options: [
                { optionText: "Pre-order traversal", optionTag: "A" },
                { optionText: "Breadth-first traversal", optionTag: "B" },
                { optionText: "In-order traversal", optionTag: "C" },
                { optionText: "Reverse DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the auxiliary space used by recursive DFS?",
            options: [
                { optionText: "O(h)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When DFS is applied to undirected graphs, what should be ensured?",
            options: [
                { optionText: "Visited nodes tracking", optionTag: "A" },
                { optionText: "Sorted adjacency list", optionTag: "B" },
                { optionText: "No stack", optionTag: "C" },
                { optionText: "Unique keys", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "DFS traversal produces which kind of tree?",
            options: [
                { optionText: "DFS tree", optionTag: "A" },
                { optionText: "BFS tree", optionTag: "B" },
                { optionText: "Binary tree", optionTag: "C" },
                { optionText: "AVL tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
