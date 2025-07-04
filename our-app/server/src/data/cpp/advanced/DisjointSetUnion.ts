import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Disjoint Set Union - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz assesses advanced understanding and implementation details of Disjoint Set Union (DSU) in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DisjointSetUnion"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which two main operations define a Disjoint Set Union (DSU)?",
            options: [
                { optionText: "Find and Union", optionTag: "A" },
                { optionText: "Insert and Delete", optionTag: "B" },
                { optionText: "Merge and Split", optionTag: "C" },
                { optionText: "Push and Pop", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the 'Find' operation do in a DSU structure?",
            options: [
                { optionText: "Identifies the representative of the set", optionTag: "A" },
                { optionText: "Merges two sets", optionTag: "B" },
                { optionText: "Deletes a set", optionTag: "C" },
                { optionText: "Creates a new set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is path compression in DSU used for?",
            options: [
                { optionText: "Flattening the tree to improve future queries", optionTag: "A" },
                { optionText: "Compressing memory usage", optionTag: "B" },
                { optionText: "Reducing space complexity", optionTag: "C" },
                { optionText: "Detecting cycles", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of a DSU operation with path compression and union by rank?",
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
            questionText: "Which function grows extremely slowly and is used in DSU analysis?",
            options: [
                { optionText: "Ackermann’s inverse", optionTag: "A" },
                { optionText: "Fibonacci", optionTag: "B" },
                { optionText: "Exponential", optionTag: "C" },
                { optionText: "Factorial", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does union by rank help in DSU?",
            options: [
                { optionText: "Keeps trees shallow by attaching shorter tree to taller one", optionTag: "A" },
                { optionText: "Makes all trees balanced", optionTag: "B" },
                { optionText: "Ensures O(1) operations", optionTag: "C" },
                { optionText: "Avoids recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem is efficiently solved using DSU?",
            options: [
                { optionText: "Cycle detection in undirected graph", optionTag: "A" },
                { optionText: "Topological Sort", optionTag: "B" },
                { optionText: "BFS traversal", optionTag: "C" },
                { optionText: "Matrix multiplication", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In union by rank, what does rank usually represent?",
            options: [
                { optionText: "An upper bound on the height of the tree", optionTag: "A" },
                { optionText: "Size of the tree", optionTag: "B" },
                { optionText: "Level of node", optionTag: "C" },
                { optionText: "Weight of element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is a correct use-case of DSU?",
            options: [
                { optionText: "Kruskal’s Minimum Spanning Tree", optionTag: "A" },
                { optionText: "Prim’s MST", optionTag: "B" },
                { optionText: "Floyd-Warshall", optionTag: "C" },
                { optionText: "Binary Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if you do not use path compression in DSU?",
            options: [
                { optionText: "The trees may become deep, resulting in slower operations", optionTag: "A" },
                { optionText: "Operations become constant time", optionTag: "B" },
                { optionText: "Cycle detection is impossible", optionTag: "C" },
                { optionText: "Incorrect results", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How are disjoint sets initialized in DSU?",
            options: [
                { optionText: "Each node is its own parent", optionTag: "A" },
                { optionText: "All nodes have same parent", optionTag: "B" },
                { optionText: "Parent is assigned randomly", optionTag: "C" },
                { optionText: "Only root has a parent", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can DSU be used to count number of connected components?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only in trees", optionTag: "C" },
                { optionText: "Only in DAGs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is most similar to DSU?",
            options: [
                { optionText: "Dynamic connectivity", optionTag: "A" },
                { optionText: "Dynamic programming", optionTag: "B" },
                { optionText: "Greedy strategy", optionTag: "C" },
                { optionText: "Priority queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is union by size different from union by rank?",
            options: [
                { optionText: "It uses number of elements instead of height", optionTag: "A" },
                { optionText: "It merges based on value", optionTag: "B" },
                { optionText: "It’s slower", optionTag: "C" },
                { optionText: "They are identical", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the default value of rank array in union by rank DSU?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "Infinity", optionTag: "C" },
                { optionText: "Depends on element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property makes DSU nearly constant time?",
            options: [
                { optionText: "Path compression + union by rank", optionTag: "A" },
                { optionText: "Only union by size", optionTag: "B" },
                { optionText: "Only path compression", optionTag: "C" },
                { optionText: "Recursion elimination", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What kind of graph cycles can DSU detect?",
            options: [
                { optionText: "Undirected graph cycles", optionTag: "A" },
                { optionText: "Directed graph cycles", optionTag: "B" },
                { optionText: "Weighted cycles", optionTag: "C" },
                { optionText: "Negative weight cycles", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In DSU, what does find(u) == find(v) imply?",
            options: [
                { optionText: "u and v are in the same set", optionTag: "A" },
                { optionText: "u is a parent of v", optionTag: "B" },
                { optionText: "u is not in the structure", optionTag: "C" },
                { optionText: "v is not connected", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which technique is often used to optimize Kruskal’s MST algorithm?",
            options: [
                { optionText: "Disjoint Set Union", optionTag: "A" },
                { optionText: "Dijkstra's Algorithm", optionTag: "B" },
                { optionText: "Prim’s Algorithm", optionTag: "C" },
                { optionText: "DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation is performed during merging two disjoint sets?",
            options: [
                { optionText: "Union operation", optionTag: "A" },
                { optionText: "Find operation", optionTag: "B" },
                { optionText: "Insert operation", optionTag: "C" },
                { optionText: "Delete operation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
