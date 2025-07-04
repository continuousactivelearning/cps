import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Disjoint Set Union - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz tests your intermediate understanding of Disjoint Set Union (Union-Find) in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DisjointSetUnion"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the primary use of Disjoint Set Union (DSU)?",
            options: [
                { optionText: "To detect cycles in a graph", optionTag: "A" },
                { optionText: "To sort an array", optionTag: "B" },
                { optionText: "To search elements", optionTag: "C" },
                { optionText: "To compute factorial", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which two operations does DSU support efficiently?",
            options: [
                { optionText: "Find and Union", optionTag: "A" },
                { optionText: "Insert and Delete", optionTag: "B" },
                { optionText: "Push and Pop", optionTag: "C" },
                { optionText: "Merge and Split", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of DSU operations with path compression and union by rank?",
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
            questionText: "Which JavaScript data structure is best suited to represent DSU sets?",
            options: [
                { optionText: "Array", optionTag: "A" },
                { optionText: "Set", optionTag: "B" },
                { optionText: "Map", optionTag: "C" },
                { optionText: "Object", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the Find operation do in DSU?",
            options: [
                { optionText: "Finds the representative of a set", optionTag: "A" },
                { optionText: "Finds the maximum element", optionTag: "B" },
                { optionText: "Searches an element in a list", optionTag: "C" },
                { optionText: "Checks if the element is prime", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the Union operation do?",
            options: [
                { optionText: "Combines two sets into one", optionTag: "A" },
                { optionText: "Finds the size of the set", optionTag: "B" },
                { optionText: "Deletes a node", optionTag: "C" },
                { optionText: "Sorts elements of a set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is path compression in DSU?",
            options: [
                { optionText: "Flattening the tree during Find", optionTag: "A" },
                { optionText: "Removing duplicate paths", optionTag: "B" },
                { optionText: "Compressing array size", optionTag: "C" },
                { optionText: "Sorting paths", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is union by rank?",
            options: [
                { optionText: "Attaching smaller tree under root of bigger tree", optionTag: "A" },
                { optionText: "Sorting nodes before union", optionTag: "B" },
                { optionText: "Using priority queue for union", optionTag: "C" },
                { optionText: "Removing duplicate edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of naive DSU operations?",
            options: [
                { optionText: "O(N)", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(log N)", optionTag: "C" },
                { optionText: "O(N log N)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following problems uses DSU?",
            options: [
                { optionText: "Kruskal's algorithm", optionTag: "A" },
                { optionText: "Prim's algorithm", optionTag: "B" },
                { optionText: "Binary Search", optionTag: "C" },
                { optionText: "Floyd-Warshall algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the initial parent value of each element in DSU?",
            options: [
                { optionText: "Itself", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "-1", optionTag: "C" },
                { optionText: "Undefined", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which version is faster: Union by rank or Union by size?",
            options: [
                { optionText: "Both perform similarly", optionTag: "A" },
                { optionText: "Union by size is faster", optionTag: "B" },
                { optionText: "Union by rank is faster", optionTag: "C" },
                { optionText: "Neither is efficient", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is DSU initialized in JavaScript?",
            options: [
                { optionText: "Create parent array with self references", optionTag: "A" },
                { optionText: "Create object with null keys", optionTag: "B" },
                { optionText: "Create empty Set", optionTag: "C" },
                { optionText: "Create queue of size N", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What kind of tree is formed in DSU after multiple unions?",
            options: [
                { optionText: "Forest of trees", optionTag: "A" },
                { optionText: "Heap", optionTag: "B" },
                { optionText: "Binary tree", optionTag: "C" },
                { optionText: "Linked list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When do two nodes belong to the same set?",
            options: [
                { optionText: "They have the same root", optionTag: "A" },
                { optionText: "They are neighbors", optionTag: "B" },
                { optionText: "They are leaves", optionTag: "C" },
                { optionText: "They have different parents", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when Union is called with already connected elements?",
            options: [
                { optionText: "Nothing changes", optionTag: "A" },
                { optionText: "Elements are removed", optionTag: "B" },
                { optionText: "Cycle is created", optionTag: "C" },
                { optionText: "New parent is assigned randomly", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What can DSU detect in undirected graphs?",
            options: [
                { optionText: "Cycle", optionTag: "A" },
                { optionText: "Strongly connected components", optionTag: "B" },
                { optionText: "All paths", optionTag: "C" },
                { optionText: "Bridges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which value is returned by Find operation in DSU?",
            options: [
                { optionText: "Representative of the set", optionTag: "A" },
                { optionText: "Length of the set", optionTag: "B" },
                { optionText: "Next unvisited node", optionTag: "C" },
                { optionText: "Index of smallest element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How to avoid deep trees in DSU?",
            options: [
                { optionText: "Use path compression", optionTag: "A" },
                { optionText: "Use BFS", optionTag: "B" },
                { optionText: "Use DFS", optionTag: "C" },
                { optionText: "Avoid merging trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true for DSU with optimizations?",
            options: [
                { optionText: "Almost constant time operations", optionTag: "A" },
                { optionText: "Linear time operations", optionTag: "B" },
                { optionText: "Exponential operations", optionTag: "C" },
                { optionText: "No benefit from optimizations", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
