import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript BFS - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz tests your beginner knowledge of Breadth-First Search (BFS) in JavaScript.",
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
                { optionText: "Backtrack-First Search", optionTag: "B" },
                { optionText: "Binary-First Search", optionTag: "C" },
                { optionText: "Basic Forward Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data structure is used in BFS?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "BFS visits nodes in what order?",
            options: [
                { optionText: "Level by level", optionTag: "A" },
                { optionText: "Depth by depth", optionTag: "B" },
                { optionText: "Random order", optionTag: "C" },
                { optionText: "In-order traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "BFS is usually implemented using a ________ loop.",
            options: [
                { optionText: "while", optionTag: "A" },
                { optionText: "forEach", optionTag: "B" },
                { optionText: "if", optionTag: "C" },
                { optionText: "switch", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is true about BFS?",
            options: [
                { optionText: "It explores all neighbors before going deeper", optionTag: "A" },
                { optionText: "It uses recursion", optionTag: "B" },
                { optionText: "It’s not used in shortest path problems", optionTag: "C" },
                { optionText: "It requires a stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript method adds an element to the end of a queue?",
            options: [
                { optionText: "push()", optionTag: "A" },
                { optionText: "pop()", optionTag: "B" },
                { optionText: "shift()", optionTag: "C" },
                { optionText: "unshift()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method removes the first element in a JavaScript queue?",
            options: [
                { optionText: "shift()", optionTag: "A" },
                { optionText: "pop()", optionTag: "B" },
                { optionText: "splice()", optionTag: "C" },
                { optionText: "push()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a key difference between BFS and DFS?",
            options: [
                { optionText: "BFS uses a queue, DFS uses a stack", optionTag: "A" },
                { optionText: "BFS uses a stack, DFS uses a queue", optionTag: "B" },
                { optionText: "BFS is recursive, DFS is iterative", optionTag: "C" },
                { optionText: "They are the same", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In BFS, a node is visited when:",
            options: [
                { optionText: "It is dequeued", optionTag: "A" },
                { optionText: "It is enqueued", optionTag: "B" },
                { optionText: "It is popped", optionTag: "C" },
                { optionText: "It is shifted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of BFS (adjacency list)?",
            options: [
                { optionText: "O(V + E)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E log V)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "BFS is used in which of the following?",
            options: [
                { optionText: "Shortest path in unweighted graph", optionTag: "A" },
                { optionText: "Sorting", optionTag: "B" },
                { optionText: "Recursion", optionTag: "C" },
                { optionText: "Greedy algorithms", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What helps prevent infinite loops in BFS?",
            options: [
                { optionText: "Visited set", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Nested loops", optionTag: "C" },
                { optionText: "Random generator", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which format is best for representing graphs in BFS?",
            options: [
                { optionText: "Adjacency list", optionTag: "A" },
                { optionText: "Linked list", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Matrix chain", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these can represent a node in BFS?",
            options: [
                { optionText: "An object with neighbors", optionTag: "A" },
                { optionText: "A boolean", optionTag: "B" },
                { optionText: "A string only", optionTag: "C" },
                { optionText: "A constant", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does enqueue mean in BFS?",
            options: [
                { optionText: "Add node to end of queue", optionTag: "A" },
                { optionText: "Remove node from front", optionTag: "B" },
                { optionText: "Sort queue", optionTag: "C" },
                { optionText: "Loop through neighbors", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is a visited set important in BFS?",
            options: [
                { optionText: "To avoid revisiting nodes", optionTag: "A" },
                { optionText: "To sort nodes", optionTag: "B" },
                { optionText: "To store values", optionTag: "C" },
                { optionText: "To reduce memory", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which type of graph can BFS be used on?",
            options: [
                { optionText: "Directed or undirected", optionTag: "A" },
                { optionText: "Only undirected", optionTag: "B" },
                { optionText: "Only weighted", optionTag: "C" },
                { optionText: "Only DAGs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which loop construct is most used in BFS code?",
            options: [
                { optionText: "while (queue.length)", optionTag: "A" },
                { optionText: "forEach()", optionTag: "B" },
                { optionText: "if()", optionTag: "C" },
                { optionText: "switch()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is BFS mainly used for?",
            options: [
                { optionText: "Traversing graphs level-wise", optionTag: "A" },
                { optionText: "Binary search", optionTag: "B" },
                { optionText: "Sorting arrays", optionTag: "C" },
                { optionText: "Factorizing numbers", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property does BFS guarantee on unweighted graphs?",
            options: [
                { optionText: "Shortest path", optionTag: "A" },
                { optionText: "Longest path", optionTag: "B" },
                { optionText: "Least edges", optionTag: "C" },
                { optionText: "No cycles", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
