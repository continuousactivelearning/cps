import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ BFS - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz tests your advanced understanding of Breadth-First Search (BFS) in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BFS"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What data structure is primarily used in the BFS traversal of a graph?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Priority Queue", optionTag: "C" },
                { optionText: "Deque", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of BFS on a graph with V vertices and E edges?",
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
            questionText: "Which property of BFS makes it suitable for finding the shortest path in an unweighted graph?",
            options: [
                { optionText: "Level-order exploration", optionTag: "A" },
                { optionText: "Depth-first expansion", optionTag: "B" },
                { optionText: "Random exploration", optionTag: "C" },
                { optionText: "Greedy pruning", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which STL container is most commonly used to implement a queue for BFS in C++?",
            options: [
                { optionText: "std::queue", optionTag: "A" },
                { optionText: "std::stack", optionTag: "B" },
                { optionText: "std::vector", optionTag: "C" },
                { optionText: "std::map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can BFS be used to check if a graph is bipartite?",
            options: [
                { optionText: "By alternating colors for adjacent vertices", optionTag: "A" },
                { optionText: "By ensuring no cycles exist", optionTag: "B" },
                { optionText: "By counting edges", optionTag: "C" },
                { optionText: "By comparing degrees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if BFS is executed on a disconnected graph?",
            options: [
                { optionText: "It only visits vertices in the same connected component", optionTag: "A" },
                { optionText: "It visits all vertices anyway", optionTag: "B" },
                { optionText: "It throws an error", optionTag: "C" },
                { optionText: "It loops infinitely", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following applications can use BFS?",
            options: [
                { optionText: "Cycle detection in undirected graph", optionTag: "A" },
                { optionText: "Topological sorting", optionTag: "B" },
                { optionText: "Strongly connected components", optionTag: "C" },
                { optionText: "Finding articulation points", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is the distance array initialized in BFS for shortest path finding?",
            options: [
                { optionText: "All distances are set to INT_MAX, except source as 0", optionTag: "A" },
                { optionText: "All distances are set to 0", optionTag: "B" },
                { optionText: "All distances are set to -1", optionTag: "C" },
                { optionText: "No initialization needed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which case can cause BFS to perform poorly in terms of memory usage?",
            options: [
                { optionText: "Wide branching factor", optionTag: "A" },
                { optionText: "High depth", optionTag: "B" },
                { optionText: "Negative weights", optionTag: "C" },
                { optionText: "Self loops", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What kind of traversal does BFS perform in trees?",
            options: [
                { optionText: "Level-order traversal", optionTag: "A" },
                { optionText: "Pre-order traversal", optionTag: "B" },
                { optionText: "In-order traversal", optionTag: "C" },
                { optionText: "Post-order traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which variant of BFS can be used to find the shortest path in a weighted graph with weights of 0 and 1?",
            options: [
                { optionText: "0-1 BFS using deque", optionTag: "A" },
                { optionText: "Dijkstra’s algorithm", optionTag: "B" },
                { optionText: "DFS with backtracking", optionTag: "C" },
                { optionText: "Prim’s algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if a visited node is not marked in BFS?",
            options: [
                { optionText: "It may cause infinite loops or revisits", optionTag: "A" },
                { optionText: "Traversal is still correct", optionTag: "B" },
                { optionText: "It skips all nodes", optionTag: "C" },
                { optionText: "Memory usage reduces", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many times is each node enqueued in BFS?",
            options: [
                { optionText: "At most once", optionTag: "A" },
                { optionText: "Twice", optionTag: "B" },
                { optionText: "V times", optionTag: "C" },
                { optionText: "Until it is visited", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property distinguishes BFS from DFS?",
            options: [
                { optionText: "BFS explores closest nodes first", optionTag: "A" },
                { optionText: "BFS is recursive", optionTag: "B" },
                { optionText: "BFS visits deepest node first", optionTag: "C" },
                { optionText: "BFS uses stacks", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "BFS is best suited for which type of problem?",
            options: [
                { optionText: "Shortest path in unweighted graphs", optionTag: "A" },
                { optionText: "Finding strongly connected components", optionTag: "B" },
                { optionText: "Finding articulation points", optionTag: "C" },
                { optionText: "Minimum spanning tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What must be true about a graph for BFS to visit all vertices in one pass?",
            options: [
                { optionText: "Graph must be connected", optionTag: "A" },
                { optionText: "Graph must be acyclic", optionTag: "B" },
                { optionText: "Graph must be complete", optionTag: "C" },
                { optionText: "Graph must be tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which technique is used to implement BFS in maze-solving problems?",
            options: [
                { optionText: "Using queue with visited matrix", optionTag: "A" },
                { optionText: "Using stack with depth level", optionTag: "B" },
                { optionText: "Using recursive function with path tracing", optionTag: "C" },
                { optionText: "Using priority queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the auxiliary space complexity of BFS on a graph with V vertices?",
            options: [
                { optionText: "O(V)", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(V^2)", optionTag: "C" },
                { optionText: "O(log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following graph representations is most memory efficient for BFS?",
            options: [
                { optionText: "Adjacency list", optionTag: "A" },
                { optionText: "Adjacency matrix", optionTag: "B" },
                { optionText: "Edge list", optionTag: "C" },
                { optionText: "Set of pairs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
