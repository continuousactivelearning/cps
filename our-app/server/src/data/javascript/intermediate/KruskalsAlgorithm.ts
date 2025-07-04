import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Kruskal's Algorithm - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz tests your intermediate understanding of Kruskal's Algorithm in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "KruskalsAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the goal of Kruskal's Algorithm?",
            options: [
                { optionText: "To find the shortest path", optionTag: "A" },
                { optionText: "To find the minimum spanning tree", optionTag: "B" },
                { optionText: "To count connected components", optionTag: "C" },
                { optionText: "To check graph bipartiteness", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which data structure does Kruskal’s Algorithm heavily rely on?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Disjoint Set (Union-Find)", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Stack", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is the first step in Kruskal’s Algorithm?",
            options: [
                { optionText: "Visit nodes in DFS order", optionTag: "A" },
                { optionText: "Sort all edges by weight", optionTag: "B" },
                { optionText: "Remove all cycles", optionTag: "C" },
                { optionText: "Start from the source node", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which condition is checked before adding an edge to the MST?",
            options: [
                { optionText: "If it connects different components", optionTag: "A" },
                { optionText: "If it's the lightest overall edge", optionTag: "B" },
                { optionText: "If it creates a cycle", optionTag: "C" },
                { optionText: "If it points to a visited node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the 'Find' operation do in Union-Find?",
            options: [
                { optionText: "Unites two sets", optionTag: "A" },
                { optionText: "Finds the minimum spanning tree", optionTag: "B" },
                { optionText: "Finds the representative of a set", optionTag: "C" },
                { optionText: "Finds shortest path", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is the time complexity of Kruskal's Algorithm?",
            options: [
                { optionText: "O(V^2)", optionTag: "A" },
                { optionText: "O(E log E)", optionTag: "B" },
                { optionText: "O(V log V)", optionTag: "C" },
                { optionText: "O(E + V)", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Why do we sort the edges in Kruskal’s Algorithm?",
            options: [
                { optionText: "To detect cycles", optionTag: "A" },
                { optionText: "To minimize the total weight", optionTag: "B" },
                { optionText: "To traverse them quickly", optionTag: "C" },
                { optionText: "To avoid using DFS", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which type of graph is required for Kruskal’s Algorithm?",
            options: [
                { optionText: "Weighted undirected graph", optionTag: "A" },
                { optionText: "Weighted directed graph", optionTag: "B" },
                { optionText: "Unweighted graph", optionTag: "C" },
                { optionText: "Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the output of Kruskal’s Algorithm?",
            options: [
                { optionText: "All cycles in the graph", optionTag: "A" },
                { optionText: "Topological sort", optionTag: "B" },
                { optionText: "Minimum spanning tree", optionTag: "C" },
                { optionText: "List of shortest paths", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What property is preserved in the MST built using Kruskal’s Algorithm?",
            options: [
                { optionText: "Shortest path from root", optionTag: "A" },
                { optionText: "Connectivity without cycles", optionTag: "B" },
                { optionText: "Maximum path length", optionTag: "C" },
                { optionText: "All nodes have same degree", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of the following is true about Kruskal’s Algorithm?",
            options: [
                { optionText: "It builds MST by expanding outward from a root", optionTag: "A" },
                { optionText: "It always uses DFS", optionTag: "B" },
                { optionText: "It processes the graph globally, not node by node", optionTag: "C" },
                { optionText: "It is suitable only for dense graphs", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which graph component is ignored by Kruskal’s Algorithm?",
            options: [
                { optionText: "Edge weights", optionTag: "A" },
                { optionText: "Vertex degrees", optionTag: "B" },
                { optionText: "Edge directions", optionTag: "C" },
                { optionText: "Disconnected components", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What happens if the graph is not connected?",
            options: [
                { optionText: "Kruskal’s still builds MST", optionTag: "A" },
                { optionText: "It builds a minimum spanning forest", optionTag: "B" },
                { optionText: "It fails to execute", optionTag: "C" },
                { optionText: "It returns null", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "In Union-Find, what optimization helps reduce time?",
            options: [
                { optionText: "Path Compression", optionTag: "A" },
                { optionText: "Edge Sorting", optionTag: "B" },
                { optionText: "DFS Traversal", optionTag: "C" },
                { optionText: "Vertex Coloring", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the ‘Union’ operation do?",
            options: [
                { optionText: "Checks if two sets are equal", optionTag: "A" },
                { optionText: "Finds the root of a set", optionTag: "B" },
                { optionText: "Merges two sets", optionTag: "C" },
                { optionText: "Creates a new set", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which sorting algorithm is typically used for edge sorting in Kruskal’s Algorithm?",
            options: [
                { optionText: "Quick Sort", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Heap Sort", optionTag: "C" },
                { optionText: "Any efficient comparison sort", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What is the best case time complexity of Kruskal’s Algorithm?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(E log V)", optionTag: "B" },
                { optionText: "O(E log E)", optionTag: "C" },
                { optionText: "O(V log V)", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Does Kruskal's Algorithm require a starting node?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "Only in directed graphs", optionTag: "B" },
                { optionText: "No", optionTag: "C" },
                { optionText: "Only if the graph is weighted", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "How many edges are in a minimum spanning tree with V vertices?",
            options: [
                { optionText: "V + 1", optionTag: "A" },
                { optionText: "V - 1", optionTag: "B" },
                { optionText: "V", optionTag: "C" },
                { optionText: "E", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which case causes an edge to be skipped in Kruskal’s Algorithm?",
            options: [
                { optionText: "If the edge connects two same components", optionTag: "A" },
                { optionText: "If it is the smallest edge", optionTag: "B" },
                { optionText: "If it connects two different components", optionTag: "C" },
                { optionText: "If the edge weight is 0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
