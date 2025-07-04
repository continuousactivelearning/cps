import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ BFS - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz tests your intermediate-level knowledge of Breadth-First Search (BFS) in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BFS"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which data structure is primarily used in BFS traversal?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Priority Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of BFS for a graph with V vertices and E edges?",
            options: [
                { optionText: "O(V + E)", optionTag: "A" },
                { optionText: "O(V * E)", optionTag: "B" },
                { optionText: "O(V^2)", optionTag: "C" },
                { optionText: "O(E log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In BFS, which vertex is processed first?",
            options: [
                { optionText: "The vertex that was discovered first", optionTag: "A" },
                { optionText: "The vertex with smallest degree", optionTag: "B" },
                { optionText: "The farthest vertex", optionTag: "C" },
                { optionText: "The last vertex alphabetically", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the auxiliary space complexity of BFS (excluding output)?",
            options: [
                { optionText: "O(V)", optionTag: "A" },
                { optionText: "O(E)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What kind of traversal order does BFS use?",
            options: [
                { optionText: "Level order", optionTag: "A" },
                { optionText: "Postorder", optionTag: "B" },
                { optionText: "Preorder", optionTag: "C" },
                { optionText: "Inorder", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is essential to avoid infinite loops in BFS on cyclic graphs?",
            options: [
                { optionText: "Visited array", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Counter variable", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In BFS, what happens if you do not mark visited nodes?",
            options: [
                { optionText: "It may enter infinite loop", optionTag: "A" },
                { optionText: "It finds the wrong answer", optionTag: "B" },
                { optionText: "It ignores some nodes", optionTag: "C" },
                { optionText: "Nothing unusual", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which STL container is best used to implement BFS in C++?",
            options: [
                { optionText: "std::queue", optionTag: "A" },
                { optionText: "std::stack", optionTag: "B" },
                { optionText: "std::vector", optionTag: "C" },
                { optionText: "std::priority_queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph representation is best for BFS?",
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
            questionText: "Which scenario best describes BFS usage?",
            options: [
                { optionText: "Finding shortest path in unweighted graph", optionTag: "A" },
                { optionText: "Topological sorting", optionTag: "B" },
                { optionText: "Cycle detection in undirected graph", optionTag: "C" },
                { optionText: "Finding minimum spanning tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can BFS be used in shortest path finding?",
            options: [
                { optionText: "Track level or distance from source node", optionTag: "A" },
                { optionText: "Always follow leaf nodes", optionTag: "B" },
                { optionText: "Use a priority queue", optionTag: "C" },
                { optionText: "Reverse edges and traverse", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does BFS differ from DFS?",
            options: [
                { optionText: "BFS explores neighbors first, DFS goes deep", optionTag: "A" },
                { optionText: "BFS uses stack", optionTag: "B" },
                { optionText: "BFS doesn't use memory", optionTag: "C" },
                { optionText: "BFS only works on trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can BFS be used to find connected components?",
            options: [
                { optionText: "Run BFS from each unvisited node", optionTag: "A" },
                { optionText: "Run BFS from the node with max degree", optionTag: "B" },
                { optionText: "Use only one BFS run", optionTag: "C" },
                { optionText: "Sort nodes by degree first", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What condition makes BFS optimal in shortest path finding?",
            options: [
                { optionText: "When all edge weights are equal", optionTag: "A" },
                { optionText: "When edge weights are negative", optionTag: "B" },
                { optionText: "When the graph is a tree", optionTag: "C" },
                { optionText: "When BFS is replaced with DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when BFS is applied to a tree?",
            options: [
                { optionText: "It performs level order traversal", optionTag: "A" },
                { optionText: "It fails due to cycles", optionTag: "B" },
                { optionText: "It visits only leaves", optionTag: "C" },
                { optionText: "It sorts the tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you find minimum moves in a game board using BFS?",
            options: [
                { optionText: "Model each move as a node and perform BFS", optionTag: "A" },
                { optionText: "Use binary search", optionTag: "B" },
                { optionText: "Use DFS with stack", optionTag: "C" },
                { optionText: "Use dynamic programming", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which BFS modification can find all shortest paths (not just one)?",
            options: [
                { optionText: "Track paths from source during traversal", optionTag: "A" },
                { optionText: "Run BFS repeatedly", optionTag: "B" },
                { optionText: "Use stack instead of queue", optionTag: "C" },
                { optionText: "Use DFS before BFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the drawback of BFS in dense graphs?",
            options: [
                { optionText: "Higher memory usage", optionTag: "A" },
                { optionText: "Slower than DFS", optionTag: "B" },
                { optionText: "Requires sorting", optionTag: "C" },
                { optionText: "Doesn't visit all nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when the graph has disconnected components?",
            options: [
                { optionText: "BFS only explores reachable nodes from source", optionTag: "A" },
                { optionText: "BFS visits all nodes", optionTag: "B" },
                { optionText: "BFS merges all components", optionTag: "C" },
                { optionText: "BFS returns nothing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is one way to improve BFS for large graphs?",
            options: [
                { optionText: "Use bidirectional BFS", optionTag: "A" },
                { optionText: "Replace with DFS", optionTag: "B" },
                { optionText: "Avoid using visited array", optionTag: "C" },
                { optionText: "Use unordered_map only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
