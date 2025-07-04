import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript BFS - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz tests your intermediate knowledge of Breadth-First Search (BFS) in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BFS"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What data structure is commonly used to implement BFS in JavaScript?",
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
            questionText: "What is the time complexity of BFS for a graph with V vertices and E edges?",
            options: [
                { optionText: "O(V + E)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(VE)", optionTag: "C" },
                { optionText: "O(E log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "BFS is most suitable for finding the:",
            options: [
                { optionText: "Shortest path in an unweighted graph", optionTag: "A" },
                { optionText: "Longest path", optionTag: "B" },
                { optionText: "Minimum spanning tree", optionTag: "C" },
                { optionText: "Negative cycle", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case space complexity of BFS?",
            options: [
                { optionText: "O(V)", optionTag: "A" },
                { optionText: "O(E)", optionTag: "B" },
                { optionText: "O(V+E)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How are nodes marked as visited in BFS in JavaScript?",
            options: [
                { optionText: "Using a Set or boolean array", optionTag: "A" },
                { optionText: "Using a counter", optionTag: "B" },
                { optionText: "Using an object only", optionTag: "C" },
                { optionText: "Using a linked list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal strategy does BFS use?",
            options: [
                { optionText: "Level order", optionTag: "A" },
                { optionText: "Preorder", optionTag: "B" },
                { optionText: "Postorder", optionTag: "C" },
                { optionText: "Inorder", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which built-in JavaScript object can simulate a queue?",
            options: [
                { optionText: "Array with push and shift", optionTag: "A" },
                { optionText: "Set", optionTag: "B" },
                { optionText: "Map", optionTag: "C" },
                { optionText: "Object with keys", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if you use a stack instead of a queue in BFS?",
            options: [
                { optionText: "It becomes DFS", optionTag: "A" },
                { optionText: "It performs better", optionTag: "B" },
                { optionText: "It uses more memory", optionTag: "C" },
                { optionText: "It throws an error", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition terminates BFS early in shortest path search?",
            options: [
                { optionText: "When destination node is found", optionTag: "A" },
                { optionText: "After visiting all nodes", optionTag: "B" },
                { optionText: "When queue is full", optionTag: "C" },
                { optionText: "When graph is weighted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph representation is preferred for BFS?",
            options: [
                { optionText: "Adjacency list", optionTag: "A" },
                { optionText: "Adjacency matrix", optionTag: "B" },
                { optionText: "Incidence matrix", optionTag: "C" },
                { optionText: "Edge list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the queue store in BFS?",
            options: [
                { optionText: "Nodes to be visited", optionTag: "A" },
                { optionText: "Visited nodes only", optionTag: "B" },
                { optionText: "Node distances", optionTag: "C" },
                { optionText: "All paths", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which variant of BFS is used to solve 0-1 BFS problems?",
            options: [
                { optionText: "Double-ended queue", optionTag: "A" },
                { optionText: "Priority queue", optionTag: "B" },
                { optionText: "Simple stack", optionTag: "C" },
                { optionText: "Hash table", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In JavaScript, what checks if a node has already been visited?",
            options: [
                { optionText: "visited.has(node)", optionTag: "A" },
                { optionText: "visited.includes(node)", optionTag: "B" },
                { optionText: "visited[node] !== null", optionTag: "C" },
                { optionText: "queue.contains(node)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the role of BFS in bipartite graph detection?",
            options: [
                { optionText: "Coloring nodes with two colors", optionTag: "A" },
                { optionText: "Detecting cycles", optionTag: "B" },
                { optionText: "Sorting nodes", optionTag: "C" },
                { optionText: "Finding connected components", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can BFS be used in shortest path in grid problems?",
            options: [
                { optionText: "By moving in all 4 directions", optionTag: "A" },
                { optionText: "By jumping to neighbors only", optionTag: "B" },
                { optionText: "By using diagonal moves only", optionTag: "C" },
                { optionText: "By checking boundary conditions", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can BFS work on disconnected graphs?",
            options: [
                { optionText: "Yes, by running BFS from each unvisited node", optionTag: "A" },
                { optionText: "No, it fails on disconnected graphs", optionTag: "B" },
                { optionText: "Only on weighted graphs", optionTag: "C" },
                { optionText: "Only if cycles are present", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which scenario is not ideal for BFS?",
            options: [
                { optionText: "Weighted graphs with different costs", optionTag: "A" },
                { optionText: "Finding shortest path in unweighted graph", optionTag: "B" },
                { optionText: "Solving maze problems", optionTag: "C" },
                { optionText: "Finding connected components", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property does BFS guarantee if applied to unweighted graphs?",
            options: [
                { optionText: "Shortest path from source", optionTag: "A" },
                { optionText: "Longest path", optionTag: "B" },
                { optionText: "Lowest memory", optionTag: "C" },
                { optionText: "Fastest runtime", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you prevent infinite loops in BFS?",
            options: [
                { optionText: "Track visited nodes", optionTag: "A" },
                { optionText: "Use recursion limit", optionTag: "B" },
                { optionText: "Use Math.random()", optionTag: "C" },
                { optionText: "Sort the queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does BFS return in pathfinding algorithms?",
            options: [
                { optionText: "Distance and parent for each node", optionTag: "A" },
                { optionText: "Only visited nodes", optionTag: "B" },
                { optionText: "Just true/false", optionTag: "C" },
                { optionText: "List of cycles", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
