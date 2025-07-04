// src/data/java/beginner/kruskals_algorithm.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Kruskal's Algorithm - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz tests your basic knowledge of Kruskal's Algorithm for finding Minimum Spanning Tree.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Kruskal's Algorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What type of algorithm is Kruskal's Algorithm?",
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
            questionText: "Which data structure is used in Kruskal’s Algorithm to detect cycles?",
            options: [
                { optionText: "Disjoint Set (Union-Find)", optionTag: "A" },
                { optionText: "Priority Queue", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the first step in Kruskal's Algorithm?",
            options: [
                { optionText: "Sort all edges by weight", optionTag: "A" },
                { optionText: "Pick a random vertex", optionTag: "B" },
                { optionText: "Traverse graph", optionTag: "C" },
                { optionText: "Create adjacency list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph representation is most commonly used with Kruskal’s Algorithm?",
            options: [
                { optionText: "Edge list", optionTag: "B" },
                { optionText: "Adjacency matrix", optionTag: "C" },
                { optionText: "Adjacency list", optionTag: "D" },
                { optionText: "Incidence matrix", optionTag: "A" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What condition must be checked before adding an edge in Kruskal's Algorithm?",
            options: [
                { optionText: "Whether it forms a cycle", optionTag: "C" },
                { optionText: "Whether it's the heaviest edge", optionTag: "A" },
                { optionText: "Whether both vertices are visited", optionTag: "B" },
                { optionText: "Whether it connects back to the root", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which sorting technique is best for Kruskal's Algorithm?",
            options: [
                { optionText: "Any efficient sorting like MergeSort or QuickSort", optionTag: "D" },
                { optionText: "Bubble Sort", optionTag: "A" },
                { optionText: "Selection Sort", optionTag: "B" },
                { optionText: "Insertion Sort", optionTag: "C" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Time complexity of Kruskal's Algorithm (E edges, V vertices)?",
            options: [
                { optionText: "O(E log E)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E + V)", optionTag: "C" },
                { optionText: "O(E^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Kruskal’s algorithm works on which kind of graph?",
            options: [
                { optionText: "Weighted and connected", optionTag: "C" },
                { optionText: "Unweighted", optionTag: "A" },
                { optionText: "Directed", optionTag: "B" },
                { optionText: "Unconnected", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which of the following is not required in Kruskal’s Algorithm?",
            options: [
                { optionText: "Adjacency matrix", optionTag: "D" },
                { optionText: "Edge list", optionTag: "A" },
                { optionText: "Sorting edges", optionTag: "B" },
                { optionText: "Disjoint Set Union", optionTag: "C" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "If the graph has V vertices, how many edges will the MST contain after Kruskal’s Algorithm finishes?",
            options: [
                { optionText: "V - 1", optionTag: "B" },
                { optionText: "V", optionTag: "A" },
                { optionText: "E", optionTag: "C" },
                { optionText: "V + 1", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Does Kruskal's algorithm guarantee the optimal MST?",
            options: [
                { optionText: "Yes", optionTag: "C" },
                { optionText: "No", optionTag: "A" },
                { optionText: "Only for small graphs", optionTag: "B" },
                { optionText: "Only with negative weights", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which of the following Java classes helps implement Disjoint Set?",
            options: [
                { optionText: "Custom class using parent and rank", optionTag: "B" },
                { optionText: "LinkedList", optionTag: "A" },
                { optionText: "PriorityQueue", optionTag: "C" },
                { optionText: "ArrayList", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which function in Disjoint Set merges two sets?",
            options: [
                { optionText: "Union()", optionTag: "C" },
                { optionText: "Merge()", optionTag: "A" },
                { optionText: "Combine()", optionTag: "B" },
                { optionText: "Join()", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which function finds the representative of a set?",
            options: [
                { optionText: "Find()", optionTag: "A" },
                { optionText: "Locate()", optionTag: "C" },
                { optionText: "Search()", optionTag: "B" },
                { optionText: "Root()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does Kruskal’s algorithm do when an edge forms a cycle?",
            options: [
                { optionText: "Skips the edge", optionTag: "D" },
                { optionText: "Adds it to MST", optionTag: "A" },
                { optionText: "Deletes a vertex", optionTag: "B" },
                { optionText: "Sorts again", optionTag: "C" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What is the space complexity of Kruskal's Algorithm?",
            options: [
                { optionText: "O(V + E)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "C" },
                { optionText: "O(E)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is more efficient for dense graphs, Kruskal or Prim?",
            options: [
                { optionText: "Prim's Algorithm", optionTag: "B" },
                { optionText: "Kruskal’s Algorithm", optionTag: "A" },
                { optionText: "Both same", optionTag: "C" },
                { optionText: "Depends on sorting", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "How many sets exist at the start of Kruskal's algorithm?",
            options: [
                { optionText: "One per vertex", optionTag: "C" },
                { optionText: "One for entire graph", optionTag: "A" },
                { optionText: "Depends on edges", optionTag: "B" },
                { optionText: "Zero", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Kruskal’s algorithm terminates when:",
            options: [
                { optionText: "Number of edges in MST is V-1", optionTag: "D" },
                { optionText: "All edges are checked", optionTag: "A" },
                { optionText: "Graph becomes cyclic", optionTag: "B" },
                { optionText: "Root is reached", optionTag: "C" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which of the following problems can Kruskal’s Algorithm solve?",
            options: [
                { optionText: "Finding minimum spanning tree", optionTag: "A" },
                { optionText: "Finding shortest path", optionTag: "B" },
                { optionText: "Graph coloring", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;