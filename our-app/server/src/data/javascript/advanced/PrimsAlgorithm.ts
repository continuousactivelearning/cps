import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Prim's Algorithm - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz tests your advanced knowledge of Prim's Algorithm for finding the Minimum Spanning Tree (MST) in a graph, including priority queues, edge selection, and implementation nuances in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "PrimsAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the primary objective of Prim's Algorithm?",
            options: [
                { optionText: "Find the Minimum Spanning Tree of a graph", optionTag: "A" },
                { optionText: "Find shortest path between two vertices", optionTag: "B" },
                { optionText: "Detect cycles in a graph", optionTag: "C" },
                { optionText: "Topologically sort the graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data structure is commonly used to efficiently select the next edge with minimum weight in Prim's Algorithm?",
            options: [
                { optionText: "Min-priority queue (min-heap)", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Disjoint set (Union-Find)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Prim's Algorithm using a binary heap and adjacency list?",
            options: [
                { optionText: "O(E log V)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(V + E)", optionTag: "C" },
                { optionText: "O(E^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following steps is performed first in Prim's Algorithm?",
            options: [
                { optionText: "Select an arbitrary starting vertex", optionTag: "A" },
                { optionText: "Sort edges by weight", optionTag: "B" },
                { optionText: "Initialize disjoint sets", optionTag: "C" },
                { optionText: "Run DFS on the graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does Prim's Algorithm decide which edge to add next?",
            options: [
                { optionText: "Add the smallest weight edge connecting MST to a new vertex", optionTag: "A" },
                { optionText: "Add the largest weight edge", optionTag: "B" },
                { optionText: "Add edges in input order", optionTag: "C" },
                { optionText: "Add edges randomly", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Prim's Algorithm works on which types of graphs?",
            options: [
                { optionText: "Weighted undirected graphs", optionTag: "A" },
                { optionText: "Directed graphs only", optionTag: "B" },
                { optionText: "Unweighted graphs only", optionTag: "C" },
                { optionText: "Any graph including cyclic and disconnected", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if the graph is disconnected in Prim's Algorithm?",
            options: [
                { optionText: "Only the MST for the connected component containing the start vertex is found", optionTag: "A" },
                { optionText: "Algorithm fails", optionTag: "B" },
                { optionText: "MST includes edges from all components", optionTag: "C" },
                { optionText: "Algorithm runs infinitely", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure can represent the graph for efficient Prim's Algorithm implementation?",
            options: [
                { optionText: "Adjacency list", optionTag: "A" },
                { optionText: "Adjacency matrix only", optionTag: "B" },
                { optionText: "Edge list only", optionTag: "C" },
                { optionText: "Array of vertices", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In JavaScript, which built-in structure can help implement a priority queue for Prim's Algorithm?",
            options: [
                { optionText: "Binary heap implemented with arrays", optionTag: "A" },
                { optionText: "Set", optionTag: "B" },
                { optionText: "Map", optionTag: "C" },
                { optionText: "Object", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the role of the 'key' array in Prim's Algorithm?",
            options: [
                { optionText: "Stores minimum edge weight to connect each vertex to MST", optionTag: "A" },
                { optionText: "Stores vertex parents", optionTag: "B" },
                { optionText: "Stores visited status", optionTag: "C" },
                { optionText: "Stores graph edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is a vertex marked as included in the MST in Prim's Algorithm?",
            options: [
                { optionText: "By setting its visited status to true", optionTag: "A" },
                { optionText: "By removing it from the graph", optionTag: "B" },
                { optionText: "By deleting its edges", optionTag: "C" },
                { optionText: "By resetting the key array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these best describes the greedy nature of Prim's Algorithm?",
            options: [
                { optionText: "Always picks the minimum weight edge to expand MST", optionTag: "A" },
                { optionText: "Picks edges randomly", optionTag: "B" },
                { optionText: "Sorts all edges first", optionTag: "C" },
                { optionText: "Uses divide and conquer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is an advantage of using adjacency lists in Prim's Algorithm?",
            options: [
                { optionText: "Efficient traversal of edges for sparse graphs", optionTag: "A" },
                { optionText: "Simpler implementation for dense graphs", optionTag: "B" },
                { optionText: "Faster lookup for edges", optionTag: "C" },
                { optionText: "Uses less memory for complete graphs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the difference between Prim's and Kruskal's algorithms?",
            options: [
                { optionText: "Prim's grows MST from a start vertex; Kruskal's picks edges globally", optionTag: "A" },
                { optionText: "Prim's uses union-find; Kruskal's uses priority queue", optionTag: "B" },
                { optionText: "Kruskal's works on directed graphs; Prim's does not", optionTag: "C" },
                { optionText: "They are the same algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition is checked to decide whether to update the key value of a vertex in Prim's Algorithm?",
            options: [
                { optionText: "If the edge weight is less than the current key value", optionTag: "A" },
                { optionText: "If the vertex is already in MST", optionTag: "B" },
                { optionText: "If the edge is the first one examined", optionTag: "C" },
                { optionText: "If the edge connects two visited vertices", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you initialize the key values for vertices in Prim's Algorithm?",
            options: [
                { optionText: "Set to Infinity except for the start vertex", optionTag: "A" },
                { optionText: "Set to zero for all vertices", optionTag: "B" },
                { optionText: "Set to random numbers", optionTag: "C" },
                { optionText: "Set to the number of edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the role of the 'parent' array in Prim's Algorithm?",
            options: [
                { optionText: "Tracks the MST structure by storing parent of each vertex", optionTag: "A" },
                { optionText: "Marks visited vertices", optionTag: "B" },
                { optionText: "Stores all edges", optionTag: "C" },
                { optionText: "Tracks edge weights", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In JavaScript, how would you update the priority queue when a key value decreases?",
            options: [
                { optionText: "Remove and re-insert the vertex with new key", optionTag: "A" },
                { optionText: "Ignore the update", optionTag: "B" },
                { optionText: "Sort the entire queue again", optionTag: "C" },
                { optionText: "Use a Set to store keys", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a typical implementation challenge of Prim's Algorithm in JavaScript?",
            options: [
                { optionText: "Efficient priority queue implementation", optionTag: "A" },
                { optionText: "Handling recursive calls", optionTag: "B" },
                { optionText: "Dynamic typing of variables", optionTag: "C" },
                { optionText: "Lack of loop constructs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
