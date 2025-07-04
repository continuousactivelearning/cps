import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Kruskal's Algorithm - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz tests your basic understanding of Kruskal's algorithm and its implementation in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "KruskalsAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is Kruskal's Algorithm used for?",
            options: [
                { optionText: "Finding Minimum Spanning Tree", optionTag: "A" },
                { optionText: "Shortest path in a graph", optionTag: "B" },
                { optionText: "Sorting an array", optionTag: "C" },
                { optionText: "Finding connected components", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of graph does Kruskal’s Algorithm work on?",
            options: [
                { optionText: "Undirected and weighted", optionTag: "A" },
                { optionText: "Directed", optionTag: "B" },
                { optionText: "Unweighted", optionTag: "C" },
                { optionText: "Cyclic", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is commonly used to detect cycles in Kruskal’s Algorithm?",
            options: [
                { optionText: "Disjoint Set Union (DSU)", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the first step of Kruskal's Algorithm?",
            options: [
                { optionText: "Sort all edges by weight", optionTag: "A" },
                { optionText: "Pick the smallest edge", optionTag: "B" },
                { optionText: "Initialize DSU", optionTag: "C" },
                { optionText: "Add all edges to the MST", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the goal of Kruskal's Algorithm?",
            options: [
                { optionText: "Minimize total edge weight in MST", optionTag: "A" },
                { optionText: "Maximize total edge weight", optionTag: "B" },
                { optionText: "Find all cycles", optionTag: "C" },
                { optionText: "Delete nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Kruskal’s Algorithm is a type of ______ algorithm.",
            options: [
                { optionText: "Greedy", optionTag: "A" },
                { optionText: "Dynamic Programming", optionTag: "B" },
                { optionText: "Divide and Conquer", optionTag: "C" },
                { optionText: "Backtracking", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How are edges added in Kruskal’s Algorithm?",
            options: [
                { optionText: "In increasing order of weight", optionTag: "A" },
                { optionText: "Randomly", optionTag: "B" },
                { optionText: "Based on node degree", optionTag: "C" },
                { optionText: "By vertex labels", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if adding an edge creates a cycle?",
            options: [
                { optionText: "It is skipped", optionTag: "A" },
                { optionText: "It is added", optionTag: "B" },
                { optionText: "All previous edges are removed", optionTag: "C" },
                { optionText: "The algorithm terminates", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm can be used for sorting edges in Kruskal's Algorithm?",
            options: [
                { optionText: "Any efficient sorting algorithm (e.g., QuickSort)", optionTag: "A" },
                { optionText: "Only Bubble Sort", optionTag: "B" },
                { optionText: "Only Selection Sort", optionTag: "C" },
                { optionText: "Sorting is not required", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many edges are there in the MST of a graph with V vertices?",
            options: [
                { optionText: "V - 1", optionTag: "A" },
                { optionText: "V", optionTag: "B" },
                { optionText: "V + 1", optionTag: "C" },
                { optionText: "V / 2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does DSU stand for?",
            options: [
                { optionText: "Disjoint Set Union", optionTag: "A" },
                { optionText: "Directed Subgraph Unit", optionTag: "B" },
                { optionText: "Depth Set Union", optionTag: "C" },
                { optionText: "Distributed Search Utility", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to find the parent in DSU?",
            options: [
                { optionText: "find()", optionTag: "A" },
                { optionText: "get()", optionTag: "B" },
                { optionText: "search()", optionTag: "C" },
                { optionText: "lookup()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to merge two sets in DSU?",
            options: [
                { optionText: "union()", optionTag: "A" },
                { optionText: "merge()", optionTag: "B" },
                { optionText: "add()", optionTag: "C" },
                { optionText: "combine()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the complexity of Kruskal's Algorithm using DSU and sorting?",
            options: [
                { optionText: "O(E log E)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(V log V)", optionTag: "C" },
                { optionText: "O(E^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Kruskal’s algorithm be used on disconnected graphs?",
            options: [
                { optionText: "Yes, it finds forest", optionTag: "A" },
                { optionText: "No, it only works on connected graphs", optionTag: "B" },
                { optionText: "Only if all weights are equal", optionTag: "C" },
                { optionText: "Only for cyclic graphs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of edge is preferred first in Kruskal's Algorithm?",
            options: [
                { optionText: "The one with smallest weight", optionTag: "A" },
                { optionText: "The one with largest weight", optionTag: "B" },
                { optionText: "The one with highest vertices", optionTag: "C" },
                { optionText: "Random edge", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which language construct helps represent edges in JS?",
            options: [
                { optionText: "Objects or arrays", optionTag: "A" },
                { optionText: "Only arrays", optionTag: "B" },
                { optionText: "Only maps", optionTag: "C" },
                { optionText: "Only sets", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does path compression do in DSU?",
            options: [
                { optionText: "Speeds up find() operations", optionTag: "A" },
                { optionText: "Slows down union", optionTag: "B" },
                { optionText: "Increases space usage", optionTag: "C" },
                { optionText: "Prevents cycles", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why sort edges in Kruskal’s Algorithm?",
            options: [
                { optionText: "To select the minimum edge next", optionTag: "A" },
                { optionText: "To remove duplicates", optionTag: "B" },
                { optionText: "To count vertices", optionTag: "C" },
                { optionText: "To detect cycles", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will Kruskal’s Algorithm return for a disconnected graph?",
            options: [
                { optionText: "Minimum Spanning Forest", optionTag: "A" },
                { optionText: "Empty Tree", optionTag: "B" },
                { optionText: "Cycle", optionTag: "C" },
                { optionText: "Sorted Edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
