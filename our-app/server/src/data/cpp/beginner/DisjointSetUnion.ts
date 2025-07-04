import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Disjoint Set Union - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of Disjoint Set Union (DSU) in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DisjointSetUnion"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the main purpose of the Disjoint Set Union (DSU) data structure?",
            options: [
                { optionText: "To track a set of elements partitioned into non-overlapping subsets", optionTag: "A" },
                { optionText: "To sort elements", optionTag: "B" },
                { optionText: "To store graph edges", optionTag: "C" },
                { optionText: "To implement a stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is another name for Disjoint Set Union?",
            options: [
                { optionText: "Union-Find", optionTag: "A" },
                { optionText: "Set-Merge", optionTag: "B" },
                { optionText: "Find-Join", optionTag: "C" },
                { optionText: "Merge-Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which two operations are mainly supported by DSU?",
            options: [
                { optionText: "Find and Union", optionTag: "A" },
                { optionText: "Insert and Delete", optionTag: "B" },
                { optionText: "Push and Pop", optionTag: "C" },
                { optionText: "Add and Remove", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the Find operation do in DSU?",
            options: [
                { optionText: "Finds the representative of the set containing an element", optionTag: "A" },
                { optionText: "Finds the maximum element in the set", optionTag: "B" },
                { optionText: "Finds the number of sets", optionTag: "C" },
                { optionText: "Finds the minimum spanning tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is path compression in DSU?",
            options: [
                { optionText: "An optimization to flatten the tree during Find", optionTag: "A" },
                { optionText: "An operation to shrink arrays", optionTag: "B" },
                { optionText: "Compressing edge weights", optionTag: "C" },
                { optionText: "Reducing memory by removing nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of a single DSU operation with optimizations?",
            options: [
                { optionText: "O(α(n))", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does α(n) represent in DSU complexity?",
            options: [
                { optionText: "Inverse Ackermann function", optionTag: "A" },
                { optionText: "Logarithmic function", optionTag: "B" },
                { optionText: "Square root function", optionTag: "C" },
                { optionText: "Factorial function", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ STL container is best for storing parent links in DSU?",
            options: [
                { optionText: "vector<int>", optionTag: "A" },
                { optionText: "set<int>", optionTag: "B" },
                { optionText: "queue<int>", optionTag: "C" },
                { optionText: "stack<int>", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm commonly uses DSU?",
            options: [
                { optionText: "Kruskal’s algorithm", optionTag: "A" },
                { optionText: "Dijkstra’s algorithm", optionTag: "B" },
                { optionText: "Bellman-Ford algorithm", optionTag: "C" },
                { optionText: "Prim’s algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In DSU, what does the Union operation do?",
            options: [
                { optionText: "Merges two disjoint sets", optionTag: "A" },
                { optionText: "Adds a new node", optionTag: "B" },
                { optionText: "Removes a node", optionTag: "C" },
                { optionText: "Counts the number of sets", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How are cycles detected using DSU?",
            options: [
                { optionText: "If both vertices of an edge have the same parent", optionTag: "A" },
                { optionText: "If vertices are in different sets", optionTag: "B" },
                { optionText: "If the degree of a vertex is more than 2", optionTag: "C" },
                { optionText: "If all sets have size > 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which DSU optimization keeps the tree shallow?",
            options: [
                { optionText: "Union by rank", optionTag: "A" },
                { optionText: "Union by sum", optionTag: "B" },
                { optionText: "Union by height", optionTag: "C" },
                { optionText: "Depth-first merge", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does rank in Union by Rank mean?",
            options: [
                { optionText: "Approximate tree height", optionTag: "A" },
                { optionText: "Element value", optionTag: "B" },
                { optionText: "Number of children", optionTag: "C" },
                { optionText: "Memory address", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "DSU is best suited for problems involving:",
            options: [
                { optionText: "Dynamic connectivity", optionTag: "A" },
                { optionText: "Matrix multiplication", optionTag: "B" },
                { optionText: "String matching", optionTag: "C" },
                { optionText: "Greedy scheduling", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which value does the parent array hold initially?",
            options: [
                { optionText: "Each index is its own parent", optionTag: "A" },
                { optionText: "All values are zero", optionTag: "B" },
                { optionText: "All values are -1", optionTag: "C" },
                { optionText: "Random values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is union by rank implemented?",
            options: [
                { optionText: "Attach shorter tree to taller one", optionTag: "A" },
                { optionText: "Attach taller to shorter", optionTag: "B" },
                { optionText: "Merge in ascending order", optionTag: "C" },
                { optionText: "Use linked lists", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is returned by the find function?",
            options: [
                { optionText: "The root/representative of the set", optionTag: "A" },
                { optionText: "The next element in set", optionTag: "B" },
                { optionText: "The total set size", optionTag: "C" },
                { optionText: "A boolean value", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why use both path compression and union by rank?",
            options: [
                { optionText: "To optimize time complexity", optionTag: "A" },
                { optionText: "To increase tree height", optionTag: "B" },
                { optionText: "To avoid loops", optionTag: "C" },
                { optionText: "To reduce memory", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT true about DSU?",
            options: [
                { optionText: "It supports constant time queries", optionTag: "A" },
                { optionText: "It is used in Kruskal's algorithm", optionTag: "B" },
                { optionText: "It has nearly constant time operations with optimizations", optionTag: "C" },
                { optionText: "It tracks disjoint subsets", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
