import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ DFS - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of Depth-First Search (DFS) in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DFS"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What does DFS stand for?",
            options: [
                { optionText: "Depth-First Search", optionTag: "A" },
                { optionText: "Data Flow Search", optionTag: "B" },
                { optionText: "Data First Search", optionTag: "C" },
                { optionText: "Depth Function Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is commonly used to implement DFS iteratively?",
            options: [
                { optionText: "Stack", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Array", optionTag: "C" },
                { optionText: "Linked List", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "DFS can be implemented using:",
            options: [
                { optionText: "Recursion", optionTag: "A" },
                { optionText: "Iteration using stack", optionTag: "B" },
                { optionText: "Both A and B", optionTag: "C" },
                { optionText: "Neither A nor B", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which traversal method explores as far as possible along each branch before backtracking?",
            options: [
                { optionText: "DFS", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "In-order", optionTag: "C" },
                { optionText: "Post-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of DFS in an adjacency list representation?",
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
            questionText: "What is required to prevent revisiting the same node in DFS?",
            options: [
                { optionText: "Visited array or set", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Distance array", optionTag: "C" },
                { optionText: "Degree array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "DFS is not suitable for finding:",
            options: [
                { optionText: "Shortest path in unweighted graphs", optionTag: "A" },
                { optionText: "Connected components", optionTag: "B" },
                { optionText: "Cycle detection", optionTag: "C" },
                { optionText: "Topological sorting", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which STL container can be used to implement DFS iteratively?",
            options: [
                { optionText: "stack", optionTag: "A" },
                { optionText: "queue", optionTag: "B" },
                { optionText: "map", optionTag: "C" },
                { optionText: "set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a valid DFS base case for recursion?",
            options: [
                { optionText: "If the node is already visited", optionTag: "A" },
                { optionText: "If the node is null", optionTag: "B" },
                { optionText: "If the node has no child", optionTag: "C" },
                { optionText: "If the stack is full", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In DFS, what happens if we don’t mark visited nodes?",
            options: [
                { optionText: "We may enter an infinite loop", optionTag: "A" },
                { optionText: "Program will crash", optionTag: "B" },
                { optionText: "Result will be optimal", optionTag: "C" },
                { optionText: "No effect", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following applications use DFS?",
            options: [
                { optionText: "Topological sort", optionTag: "A" },
                { optionText: "Cycle detection", optionTag: "B" },
                { optionText: "Path finding", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which is true about recursive DFS?",
            options: [
                { optionText: "Uses call stack implicitly", optionTag: "A" },
                { optionText: "Does not require visited array", optionTag: "B" },
                { optionText: "Slower than BFS", optionTag: "C" },
                { optionText: "Only works on trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a disconnected graph, DFS needs to be called:",
            options: [
                { optionText: "From every unvisited node", optionTag: "A" },
                { optionText: "Only from node 0", optionTag: "B" },
                { optionText: "Only once", optionTag: "C" },
                { optionText: "From all leaf nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of DFS (recursive)?",
            options: [
                { optionText: "O(h), where h is the height of recursion stack", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(n^2)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property makes DFS suitable for solving mazes?",
            options: [
                { optionText: "It goes deep before backtracking", optionTag: "A" },
                { optionText: "It uses queue", optionTag: "B" },
                { optionText: "It prefers wide search", optionTag: "C" },
                { optionText: "It always finds shortest path", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is used to store adjacency list in C++?",
            options: [
                { optionText: "vector<vector<int>>", optionTag: "A" },
                { optionText: "map<int, int>", optionTag: "B" },
                { optionText: "set<int>", optionTag: "C" },
                { optionText: "list<int>", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "DFS is suitable for which type of graph?",
            options: [
                { optionText: "Both directed and undirected", optionTag: "A" },
                { optionText: "Only directed", optionTag: "B" },
                { optionText: "Only undirected", optionTag: "C" },
                { optionText: "Only trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which header file is needed for using stack in DFS?",
            options: [
                { optionText: "<stack>", optionTag: "A" },
                { optionText: "<queue>", optionTag: "B" },
                { optionText: "<map>", optionTag: "C" },
                { optionText: "<list>", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "DFS traversal of a graph visits:",
            options: [
                { optionText: "All reachable nodes from the starting node", optionTag: "A" },
                { optionText: "Only leaf nodes", optionTag: "B" },
                { optionText: "Only root node", optionTag: "C" },
                { optionText: "Random nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
