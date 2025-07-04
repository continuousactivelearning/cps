import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Disjoint Set Union - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz tests your advanced understanding of Disjoint Set Union (DSU) data structure using JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DisjointSetUnion"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the primary purpose of the Disjoint Set Union (DSU) data structure?",
            options: [
                { optionText: "To manage partitioned sets efficiently", optionTag: "A" },
                { optionText: "To store trees", optionTag: "B" },
                { optionText: "To balance BSTs", optionTag: "C" },
                { optionText: "To implement heaps", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What operation does `find` perform in DSU?",
            options: [
                { optionText: "Finds the representative (root) of the set", optionTag: "A" },
                { optionText: "Finds the largest element in the set", optionTag: "B" },
                { optionText: "Finds the size of the set", optionTag: "C" },
                { optionText: "Finds the last inserted element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which technique is used to flatten the tree structure in DSU?",
            options: [
                { optionText: "Path compression", optionTag: "A" },
                { optionText: "Heapify", optionTag: "B" },
                { optionText: "AVL balancing", optionTag: "C" },
                { optionText: "Red-black rotation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of DSU operations with both union by rank and path compression?",
            options: [
                { optionText: "O(α(n))", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the `union` operation do in DSU?",
            options: [
                { optionText: "Joins two sets together", optionTag: "A" },
                { optionText: "Splits a set", optionTag: "B" },
                { optionText: "Inserts new element", optionTag: "C" },
                { optionText: "Deletes an element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which strategy avoids tree height growth in DSU?",
            options: [
                { optionText: "Union by rank", optionTag: "A" },
                { optionText: "Breadth-first merge", optionTag: "B" },
                { optionText: "Recursion limiting", optionTag: "C" },
                { optionText: "Height capping", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm extensively uses DSU?",
            options: [
                { optionText: "Kruskal's MST Algorithm", optionTag: "A" },
                { optionText: "Dijkstra's algorithm", optionTag: "B" },
                { optionText: "Prim’s algorithm", optionTag: "C" },
                { optionText: "Bellman-Ford algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is path compression effective?",
            options: [
                { optionText: "It flattens the tree structure for faster future finds", optionTag: "A" },
                { optionText: "It removes duplicate entries", optionTag: "B" },
                { optionText: "It compresses memory usage", optionTag: "C" },
                { optionText: "It stores only distinct sets", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following statements is true about DSU with path compression?",
            options: [
                { optionText: "The height of any tree becomes nearly constant", optionTag: "A" },
                { optionText: "Each node always becomes the root", optionTag: "B" },
                { optionText: "New sets are created automatically", optionTag: "C" },
                { optionText: "It creates a binary heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does union by size work?",
            options: [
                { optionText: "Smaller tree is attached to larger tree", optionTag: "A" },
                { optionText: "Larger tree is attached to smaller tree", optionTag: "B" },
                { optionText: "Trees are balanced manually", optionTag: "C" },
                { optionText: "Both trees are recreated", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result of performing union on two elements from the same set?",
            options: [
                { optionText: "No change to the structure", optionTag: "A" },
                { optionText: "Tree is split", optionTag: "B" },
                { optionText: "Error occurs", optionTag: "C" },
                { optionText: "Another set is formed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which edge types can DSU detect in graphs?",
            options: [
                { optionText: "Cycle edges", optionTag: "A" },
                { optionText: "Bridge edges", optionTag: "B" },
                { optionText: "Shortest path edges", optionTag: "C" },
                { optionText: "Spanning tree edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of `find` without optimizations?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(α(n))", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is α(n), the inverse Ackermann function, used in DSU complexity analysis?",
            options: [
                { optionText: "It grows extremely slowly and bounds DSU operations", optionTag: "A" },
                { optionText: "It describes recursion depth", optionTag: "B" },
                { optionText: "It represents logarithmic complexity", optionTag: "C" },
                { optionText: "It is used to normalize trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation benefits most from path compression?",
            options: [
                { optionText: "find()", optionTag: "A" },
                { optionText: "union()", optionTag: "B" },
                { optionText: "insert()", optionTag: "C" },
                { optionText: "delete()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the typical implementation of DSU in JavaScript?",
            options: [
                { optionText: "Using arrays for parent and rank", optionTag: "A" },
                { optionText: "Using linked lists", optionTag: "B" },
                { optionText: "Using priority queues", optionTag: "C" },
                { optionText: "Using stacks", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is a necessary property of a disjoint set?",
            options: [
                { optionText: "Mutually exclusive elements", optionTag: "A" },
                { optionText: "Sorted elements", optionTag: "B" },
                { optionText: "Unique identifiers", optionTag: "C" },
                { optionText: "Shared parents", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does DSU not directly support?",
            options: [
                { optionText: "Efficient element deletion", optionTag: "A" },
                { optionText: "Efficient merging", optionTag: "B" },
                { optionText: "Efficient querying", optionTag: "C" },
                { optionText: "Component check", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What role does DSU play in Kruskal’s algorithm?",
            options: [
                { optionText: "Prevents cycles while adding edges", optionTag: "A" },
                { optionText: "Sorts edges by weight", optionTag: "B" },
                { optionText: "Finds shortest path", optionTag: "C" },
                { optionText: "Performs BFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What makes DSU extremely efficient in practice?",
            options: [
                { optionText: "Near constant time complexity per operation", optionTag: "A" },
                { optionText: "Linear space requirements", optionTag: "B" },
                { optionText: "Simplicity of implementation", optionTag: "C" },
                { optionText: "No recursion used", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
