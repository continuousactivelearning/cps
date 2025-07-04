import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript DFS - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz tests your advanced knowledge of Depth First Search (DFS) in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DFS"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the space complexity of recursive DFS in the worst case?",
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
            questionText: "In DFS, what does backtracking refer to?",
            options: [
                { optionText: "Returning to previous node when all neighbors are visited", optionTag: "A" },
                { optionText: "Jumping to a random unvisited node", optionTag: "B" },
                { optionText: "Marking nodes as unvisited", optionTag: "C" },
                { optionText: "Swapping visited and unvisited nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is typically used to implement iterative DFS?",
            options: [
                { optionText: "Stack", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Deque", optionTag: "C" },
                { optionText: "Priority Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of DFS on a graph with V vertices and E edges?",
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
            questionText: "Which of the following problems can DFS solve efficiently?",
            options: [
                { optionText: "Cycle detection in graphs", optionTag: "A" },
                { optionText: "Shortest path in weighted graphs", optionTag: "B" },
                { optionText: "Finding minimum spanning tree", optionTag: "C" },
                { optionText: "Topological sorting in a tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if we do not mark visited nodes in DFS?",
            options: [
                { optionText: "It may enter infinite loops on cyclic graphs", optionTag: "A" },
                { optionText: "It becomes BFS", optionTag: "B" },
                { optionText: "It skips leaf nodes", optionTag: "C" },
                { optionText: "It only traverses half the graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is NOT an application of DFS?",
            options: [
                { optionText: "Dijkstra's algorithm", optionTag: "A" },
                { optionText: "Pathfinding in a maze", optionTag: "B" },
                { optionText: "Topological sort", optionTag: "C" },
                { optionText: "Connected component detection", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property of DFS is used in Tarjan's algorithm?",
            options: [
                { optionText: "Discovery and low times", optionTag: "A" },
                { optionText: "Parent pointers", optionTag: "B" },
                { optionText: "Priority queue usage", optionTag: "C" },
                { optionText: "Memoization", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does DFS tree consist of?",
            options: [
                { optionText: "All edges used in DFS traversal", optionTag: "A" },
                { optionText: "Only cross edges", optionTag: "B" },
                { optionText: "Only back edges", optionTag: "C" },
                { optionText: "Edges not visited", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a graph with cycles, what type of edge is detected during DFS?",
            options: [
                { optionText: "Back edge", optionTag: "A" },
                { optionText: "Cross edge", optionTag: "B" },
                { optionText: "Tree edge", optionTag: "C" },
                { optionText: "Forward edge", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is DFS modified for topological sorting?",
            options: [
                { optionText: "Nodes are pushed to stack after all neighbors are visited", optionTag: "A" },
                { optionText: "Use queue instead of stack", optionTag: "B" },
                { optionText: "Visit all nodes twice", optionTag: "C" },
                { optionText: "Sort nodes alphabetically", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about DFS on a disconnected graph?",
            options: [
                { optionText: "It must be called for every component", optionTag: "A" },
                { optionText: "It visits all nodes in one call", optionTag: "B" },
                { optionText: "It detects only cycles", optionTag: "C" },
                { optionText: "It fails to traverse", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which variant of DFS is used for solving strongly connected components?",
            options: [
                { optionText: "Kosaraju’s algorithm", optionTag: "A" },
                { optionText: "Dijkstra’s algorithm", optionTag: "B" },
                { optionText: "Kruskal’s algorithm", optionTag: "C" },
                { optionText: "Prim’s algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does low time signify in DFS-based algorithms?",
            options: [
                { optionText: "Earliest reachable ancestor node", optionTag: "A" },
                { optionText: "Node's depth in the tree", optionTag: "B" },
                { optionText: "Cost of the node", optionTag: "C" },
                { optionText: "Edge weight to parent", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition indicates a bridge in DFS?",
            options: [
                { optionText: "low[v] > disc[u]", optionTag: "A" },
                { optionText: "disc[u] > low[v]", optionTag: "B" },
                { optionText: "low[u] = disc[v]", optionTag: "C" },
                { optionText: "disc[v] = low[v]", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What’s the key difference between DFS and iterative deepening DFS?",
            options: [
                { optionText: "Depth limit in each iteration", optionTag: "A" },
                { optionText: "It uses queue", optionTag: "B" },
                { optionText: "It visits children breadth-wise", optionTag: "C" },
                { optionText: "It memorizes the path", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these can be used to avoid recursion stack overflow in DFS?",
            options: [
                { optionText: "Iterative approach using explicit stack", optionTag: "A" },
                { optionText: "Memoization", optionTag: "B" },
                { optionText: "Tail call optimization", optionTag: "C" },
                { optionText: "Breadth-first search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "DFS is best suited for which of the following?",
            options: [
                { optionText: "Pathfinding in large but shallow graphs", optionTag: "A" },
                { optionText: "Finding shortest path in weighted graphs", optionTag: "B" },
                { optionText: "Exploring unweighted graphs", optionTag: "C" },
                { optionText: "Finding minimum spanning tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "DFS traversal always uses which of the following nature of recursion?",
            options: [
                { optionText: "Depth-first recursion", optionTag: "A" },
                { optionText: "Breadth-first recursion", optionTag: "B" },
                { optionText: "Top-down memoization", optionTag: "C" },
                { optionText: "Tail recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal order is produced by DFS on a binary tree?",
            options: [
                { optionText: "Preorder / Inorder / Postorder", optionTag: "A" },
                { optionText: "Level-order only", optionTag: "B" },
                { optionText: "Random", optionTag: "C" },
                { optionText: "Zigzag", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
