import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Disjoint Set Union - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz evaluates your intermediate understanding of Disjoint Set Union (DSU) / Union-Find data structure in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DisjointSetUnion"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which of the following is a key operation in Disjoint Set Union (DSU)?",
            options: [
                { optionText: "Find", optionTag: "A" },
                { optionText: "Insert", optionTag: "B" },
                { optionText: "Delete", optionTag: "C" },
                { optionText: "Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the purpose of the `find` function in DSU?",
            options: [
                { optionText: "To find the representative (parent) of a set", optionTag: "A" },
                { optionText: "To search in a sorted array", optionTag: "B" },
                { optionText: "To traverse a graph", optionTag: "C" },
                { optionText: "To sort a set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What optimization technique is used in `find` to improve performance?",
            options: [
                { optionText: "Path Compression", optionTag: "A" },
                { optionText: "Memoization", optionTag: "B" },
                { optionText: "Backtracking", optionTag: "C" },
                { optionText: "Binary Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does union by rank do?",
            options: [
                { optionText: "Attaches smaller depth tree under root of deeper tree", optionTag: "A" },
                { optionText: "Attaches deeper tree under smaller tree", optionTag: "B" },
                { optionText: "Always merges the tree to the left side", optionTag: "C" },
                { optionText: "None of the above", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of DSU with path compression and union by rank?",
            options: [
                { optionText: "O(α(N))", optionTag: "A" },
                { optionText: "O(log N)", optionTag: "B" },
                { optionText: "O(N)", optionTag: "C" },
                { optionText: "O(N log N)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does α(N) denote in the DSU time complexity?",
            options: [
                { optionText: "Inverse Ackermann function", optionTag: "A" },
                { optionText: "Logarithmic growth", optionTag: "B" },
                { optionText: "Linear complexity", optionTag: "C" },
                { optionText: "Geometric series", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following problems can be solved using DSU?",
            options: [
                { optionText: "Cycle detection in undirected graphs", optionTag: "A" },
                { optionText: "Graph coloring", optionTag: "B" },
                { optionText: "Dijkstra’s shortest path", optionTag: "C" },
                { optionText: "Matrix multiplication", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which DSU operation helps merge two sets?",
            options: [
                { optionText: "Union", optionTag: "A" },
                { optionText: "Find", optionTag: "B" },
                { optionText: "Insert", optionTag: "C" },
                { optionText: "Build", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structures are commonly used in DSU?",
            options: [
                { optionText: "Arrays and Trees", optionTag: "A" },
                { optionText: "Heaps", optionTag: "B" },
                { optionText: "Queues", optionTag: "C" },
                { optionText: "Stacks", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When does path compression occur in DSU?",
            options: [
                { optionText: "During the find operation", optionTag: "A" },
                { optionText: "During the union operation", optionTag: "B" },
                { optionText: "During initialization", optionTag: "C" },
                { optionText: "During traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the initial rank or size of a set in DSU?",
            options: [
                { optionText: "1", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "Depends on the index", optionTag: "C" },
                { optionText: "Undefined", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ STL container is commonly used for DSU?",
            options: [
                { optionText: "vector<int>", optionTag: "A" },
                { optionText: "queue<int>", optionTag: "B" },
                { optionText: "list<int>", optionTag: "C" },
                { optionText: "set<int>", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "DSU can be used in which of the following algorithms?",
            options: [
                { optionText: "Kruskal’s Algorithm", optionTag: "A" },
                { optionText: "Dijkstra’s Algorithm", optionTag: "B" },
                { optionText: "Bellman-Ford Algorithm", optionTag: "C" },
                { optionText: "Topological Sorting", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In DSU, what does `parent[i] = i` imply?",
            options: [
                { optionText: "i is the root of its own set", optionTag: "A" },
                { optionText: "i is not initialized", optionTag: "B" },
                { optionText: "i has a child", optionTag: "C" },
                { optionText: "i is a leaf", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the effect of path compression in DSU?",
            options: [
                { optionText: "Flattens the structure of the tree", optionTag: "A" },
                { optionText: "Makes the tree deeper", optionTag: "B" },
                { optionText: "Slows down future find operations", optionTag: "C" },
                { optionText: "Removes duplicates", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if you union two sets with equal rank?",
            options: [
                { optionText: "One root becomes child of the other and rank increases", optionTag: "A" },
                { optionText: "Nothing changes", optionTag: "B" },
                { optionText: "Both sets remain separate", optionTag: "C" },
                { optionText: "Rank is decreased", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the goal of union by size?",
            options: [
                { optionText: "Attach smaller set to the larger set", optionTag: "A" },
                { optionText: "Attach larger set to the smaller one", optionTag: "B" },
                { optionText: "Always attach to lower index", optionTag: "C" },
                { optionText: "Randomly attach sets", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can DSU be used in detecting cycles in a graph?",
            options: [
                { optionText: "Yes, especially in undirected graphs", optionTag: "A" },
                { optionText: "Only for trees", optionTag: "B" },
                { optionText: "Only if edges are sorted", optionTag: "C" },
                { optionText: "No, it's not suitable", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is returned by the `find` operation in DSU?",
            options: [
                { optionText: "The representative/root of the set", optionTag: "A" },
                { optionText: "The size of the set", optionTag: "B" },
                { optionText: "The number of sets", optionTag: "C" },
                { optionText: "The maximum value", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many disjoint sets are there initially with N nodes?",
            options: [
                { optionText: "N", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "1", optionTag: "C" },
                { optionText: "Depends on edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
