// src/data/java/beginner/breadthFirstSearch.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java BFS - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz tests your basic understanding of Breadth-First Search (BFS) in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Breadth-First Search (BFS)"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What data structure is commonly used to implement BFS?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "List", optionTag: "C" },
                { optionText: "Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the starting point in BFS traversal?",
            options: [
                { optionText: "Any chosen node", optionTag: "A" },
                { optionText: "Root node", optionTag: "B" },
                { optionText: "Leaf node", optionTag: "C" },
                { optionText: "Visited node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of graph does BFS work on?",
            options: [
                { optionText: "Directed and Undirected", optionTag: "A" },
                { optionText: "Only Directed", optionTag: "B" },
                { optionText: "Only Undirected", optionTag: "C" },
                { optionText: "Only Trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which node is visited first in BFS?",
            options: [
                { optionText: "Closest neighbor", optionTag: "A" },
                { optionText: "Farthest node", optionTag: "B" },
                { optionText: "Random node", optionTag: "C" },
                { optionText: "Root of the tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you avoid revisiting nodes in BFS?",
            options: [
                { optionText: "Mark nodes as visited", optionTag: "A" },
                { optionText: "Delete visited nodes", optionTag: "B" },
                { optionText: "Restart algorithm", optionTag: "C" },
                { optionText: "There is no way", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of BFS?",
            options: [
                { optionText: "O(V + E)", optionTag: "A" },
                { optionText: "O(V)", optionTag: "B" },
                { optionText: "O(E)", optionTag: "C" },
                { optionText: "O(VE)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "BFS is most commonly used in:",
            options: [
                { optionText: "Shortest path in unweighted graphs", optionTag: "A" },
                { optionText: "Sorting", optionTag: "B" },
                { optionText: "Compilation", optionTag: "C" },
                { optionText: "Memory allocation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these will BFS explore first?",
            options: [
                { optionText: "All neighbors of current node", optionTag: "A" },
                { optionText: "All leaves", optionTag: "B" },
                { optionText: "Root node only", optionTag: "C" },
                { optionText: "Random neighbor", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In BFS, the visited order is maintained by:",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Recursion", optionTag: "C" },
                { optionText: "List", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "BFS is a type of:",
            options: [
                { optionText: "Level-order traversal", optionTag: "A" },
                { optionText: "Depth-first traversal", optionTag: "B" },
                { optionText: "Preorder traversal", optionTag: "C" },
                { optionText: "Postorder traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In an unweighted graph, BFS gives:",
            options: [
                { optionText: "Shortest path", optionTag: "A" },
                { optionText: "Longest path", optionTag: "B" },
                { optionText: "Random path", optionTag: "C" },
                { optionText: "No path", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following avoids infinite loop in BFS?",
            options: [
                { optionText: "Visited set", optionTag: "A" },
                { optionText: "Extra loop", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Exception", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of BFS?",
            options: [
                { optionText: "O(V)", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(log V)", optionTag: "C" },
                { optionText: "O(E)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "BFS ensures:",
            options: [
                { optionText: "Shortest path in unweighted graph", optionTag: "A" },
                { optionText: "Longest path", optionTag: "B" },
                { optionText: "Maximum flow", optionTag: "C" },
                { optionText: "Cycle detection", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is true about BFS traversal?",
            options: [
                { optionText: "Explores level by level", optionTag: "A" },
                { optionText: "Explores deepest node first", optionTag: "B" },
                { optionText: "Uses recursion only", optionTag: "C" },
                { optionText: "Cannot be used on trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is initialized first in BFS?",
            options: [
                { optionText: "Visited array", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Graph", optionTag: "C" },
                { optionText: "Stack", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a use of BFS?",
            options: [
                { optionText: "Topological Sort", optionTag: "A" },
                { optionText: "Finding shortest path", optionTag: "B" },
                { optionText: "Web crawling", optionTag: "C" },
                { optionText: "Finding connected components", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is added to the queue after visiting a node?",
            options: [
                { optionText: "All unvisited neighbors", optionTag: "A" },
                { optionText: "All visited nodes", optionTag: "B" },
                { optionText: "No nodes", optionTag: "C" },
                { optionText: "All children and parent", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When does BFS terminate?",
            options: [
                { optionText: "When the queue is empty", optionTag: "A" },
                { optionText: "After visiting one node", optionTag: "B" },
                { optionText: "After visiting all leaves", optionTag: "C" },
                { optionText: "Never ends", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;