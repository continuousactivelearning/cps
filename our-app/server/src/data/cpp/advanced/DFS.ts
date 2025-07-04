import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ DFS - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz tests your advanced understanding of Depth-First Search (DFS) algorithms and applications in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DFS"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the maximum time complexity of DFS on a graph with V vertices and E edges?",
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
            questionText: "What data structure is commonly used to implement DFS iteratively?",
            options: [
                { optionText: "Stack", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Priority Queue", optionTag: "C" },
                { optionText: "Deque", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph traversal algorithm can be used to detect cycles in a directed graph?",
            options: [
                { optionText: "DFS", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "Dijkstra", optionTag: "C" },
                { optionText: "Prim’s", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In DFS, when is a node marked as 'finished'?",
            options: [
                { optionText: "After visiting all its adjacent nodes", optionTag: "A" },
                { optionText: "When it is first discovered", optionTag: "B" },
                { optionText: "Before recursion begins", optionTag: "C" },
                { optionText: "Before any adjacent node is visited", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of recursive DFS on a tree with depth D?",
            options: [
                { optionText: "O(D)", optionTag: "A" },
                { optionText: "O(V)", optionTag: "B" },
                { optionText: "O(E)", optionTag: "C" },
                { optionText: "O(log D)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which DFS property is essential for topological sorting?",
            options: [
                { optionText: "Post-order traversal", optionTag: "A" },
                { optionText: "Pre-order traversal", optionTag: "B" },
                { optionText: "In-order traversal", optionTag: "C" },
                { optionText: "Level-order traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In which type of graph traversal is backtracking used?",
            options: [
                { optionText: "DFS", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "Dijkstra", optionTag: "C" },
                { optionText: "Kruskal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main drawback of recursive DFS?",
            options: [
                { optionText: "Stack overflow on deep graphs", optionTag: "A" },
                { optionText: "High time complexity", optionTag: "B" },
                { optionText: "Incorrect traversal order", optionTag: "C" },
                { optionText: "It uses a queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal order does DFS typically follow?",
            options: [
                { optionText: "Depth-first (deepest branch first)", optionTag: "A" },
                { optionText: "Breadth-first (level-wise)", optionTag: "B" },
                { optionText: "Lowest weight edge first", optionTag: "C" },
                { optionText: "Highest degree vertex first", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What indicates a back edge in DFS of a directed graph?",
            options: [
                { optionText: "It points to an ancestor in DFS tree", optionTag: "A" },
                { optionText: "It points to a descendant", optionTag: "B" },
                { optionText: "It connects two unrelated nodes", optionTag: "C" },
                { optionText: "It is a leaf node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a discovery time in DFS?",
            options: [
                { optionText: "The time when a node is first visited", optionTag: "A" },
                { optionText: "The time when all nodes are visited", optionTag: "B" },
                { optionText: "The time when node finishes", optionTag: "C" },
                { optionText: "The time when parent is visited", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these applications uses DFS?",
            options: [
                { optionText: "Finding connected components", optionTag: "A" },
                { optionText: "Shortest path in weighted graphs", optionTag: "B" },
                { optionText: "Cycle detection in trees", optionTag: "C" },
                { optionText: "Building heaps", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which edge types are identified during DFS in directed graphs?",
            options: [
                { optionText: "Tree, Back, Forward, and Cross edges", optionTag: "A" },
                { optionText: "Left and Right edges", optionTag: "B" },
                { optionText: "Upper and Lower edges", optionTag: "C" },
                { optionText: "Inward and Outward edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main difference between DFS and BFS?",
            options: [
                { optionText: "DFS explores depth before breadth", optionTag: "A" },
                { optionText: "BFS uses a stack", optionTag: "B" },
                { optionText: "DFS uses a queue", optionTag: "C" },
                { optionText: "BFS is recursive", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many times is a vertex visited in DFS?",
            options: [
                { optionText: "Once", optionTag: "A" },
                { optionText: "Twice", optionTag: "B" },
                { optionText: "Depends on the edges", optionTag: "C" },
                { optionText: "At most log n times", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which color convention is used in DFS algorithms?",
            options: [
                { optionText: "White, Gray, Black", optionTag: "A" },
                { optionText: "Red, Green, Blue", optionTag: "B" },
                { optionText: "Start, Middle, End", optionTag: "C" },
                { optionText: "Unvisited, In progress, Visited", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which DFS application finds strongly connected components?",
            options: [
                { optionText: "Kosaraju's algorithm", optionTag: "A" },
                { optionText: "Dijkstra’s algorithm", optionTag: "B" },
                { optionText: "Prim’s algorithm", optionTag: "C" },
                { optionText: "Kruskal’s algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What causes DFS to behave like BFS?",
            options: [
                { optionText: "Using a queue instead of a stack", optionTag: "A" },
                { optionText: "Removing recursion", optionTag: "B" },
                { optionText: "Adding all adjacent vertices immediately", optionTag: "C" },
                { optionText: "Limiting depth to 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following best describes DFS?",
            options: [
                { optionText: "It is a graph traversal strategy using recursion or stack", optionTag: "A" },
                { optionText: "It always finds the shortest path", optionTag: "B" },
                { optionText: "It needs a priority queue", optionTag: "C" },
                { optionText: "It fails on directed graphs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When is DFS preferred over BFS?",
            options: [
                { optionText: "When the solution is likely to be far from the root", optionTag: "A" },
                { optionText: "When the graph is shallow", optionTag: "B" },
                { optionText: "When we need minimal memory", optionTag: "C" },
                { optionText: "When path is not needed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
