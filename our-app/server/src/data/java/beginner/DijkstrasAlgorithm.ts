// src/data/java/beginner/dijkstras_algorithm.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Dijkstra's Algorithm - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz evaluates your foundational understanding of Dijkstra's Algorithm in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Dijkstra's Algorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the main purpose of Dijkstra's algorithm?",
            options: [
                { optionText: "To find the shortest path", optionTag: "A" },
                { optionText: "To sort an array", optionTag: "B" },
                { optionText: "To search in binary trees", optionTag: "C" },
                { optionText: "To balance a tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Dijkstra's algorithm works with graphs that have:",
            options: [
                { optionText: "Non-negative weights", optionTag: "A" },
                { optionText: "Negative weights", optionTag: "B" },
                { optionText: "Only positive weights", optionTag: "C" },
                { optionText: "No weights", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data structure is commonly used to implement Dijkstra’s algorithm efficiently?",
            options: [
                { optionText: "Priority Queue (Min-Heap)", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is initialized to 0 in the beginning of Dijkstra’s algorithm?",
            options: [
                { optionText: "Source node distance", optionTag: "A" },
                { optionText: "All node distances", optionTag: "B" },
                { optionText: "Edge weights", optionTag: "C" },
                { optionText: "Graph size", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition causes a node to be added to the visited set in Dijkstra's algorithm?",
            options: [
                { optionText: "When its shortest distance is finalized", optionTag: "A" },
                { optionText: "When it's the neighbor of current node", optionTag: "B" },
                { optionText: "When it has the smallest ID", optionTag: "C" },
                { optionText: "When it has no edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when a shorter path to a node is found?",
            options: [
                { optionText: "Its distance is updated", optionTag: "A" },
                { optionText: "It is deleted", optionTag: "B" },
                { optionText: "It is skipped", optionTag: "C" },
                { optionText: "A new node is added", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Dijkstra's algorithm does not work correctly if the graph has:",
            options: [
                { optionText: "Negative edge weights", optionTag: "A" },
                { optionText: "Self-loops", optionTag: "B" },
                { optionText: "Undirected edges", optionTag: "C" },
                { optionText: "Cyclic paths", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is typically used if negative weights exist?",
            options: [
                { optionText: "Bellman-Ford", optionTag: "A" },
                { optionText: "DFS", optionTag: "B" },
                { optionText: "BFS", optionTag: "C" },
                { optionText: "Prim's Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many times is a node visited in Dijkstra's algorithm?",
            options: [
                { optionText: "Only once", optionTag: "A" },
                { optionText: "Twice", optionTag: "B" },
                { optionText: "Multiple times", optionTag: "C" },
                { optionText: "Never", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which Java class is useful for PriorityQueue?",
            options: [
                { optionText: "java.util.PriorityQueue", optionTag: "A" },
                { optionText: "java.util.Stack", optionTag: "B" },
                { optionText: "java.util.List", optionTag: "C" },
                { optionText: "java.util.TreeMap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a graph with V vertices and E edges, Dijkstra’s time complexity with a min heap is:",
            options: [
                { optionText: "O((V + E) log V)", optionTag: "A" },
                { optionText: "O(VE)", optionTag: "B" },
                { optionText: "O(V^2)", optionTag: "C" },
                { optionText: "O(log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function in Java PriorityQueue removes the element with the lowest value?",
            options: [
                { optionText: "poll()", optionTag: "A" },
                { optionText: "remove()", optionTag: "B" },
                { optionText: "delete()", optionTag: "C" },
                { optionText: "clear()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which loop type is used to relax edges in Dijkstra's algorithm?",
            options: [
                { optionText: "For-each loop", optionTag: "A" },
                { optionText: "Do-while loop", optionTag: "B" },
                { optionText: "Switch statement", optionTag: "C" },
                { optionText: "Try-catch block", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the goal of edge relaxation?",
            options: [
                { optionText: "Update shortest path to neighbor", optionTag: "A" },
                { optionText: "Delete the edge", optionTag: "B" },
                { optionText: "Reverse the direction", optionTag: "C" },
                { optionText: "Add a new node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if we revisit an already finalized node?",
            options: [
                { optionText: "We skip it", optionTag: "A" },
                { optionText: "We update it", optionTag: "B" },
                { optionText: "We remove it", optionTag: "C" },
                { optionText: "We increase its distance", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do we choose the next node to process in Dijkstra’s?",
            options: [
                { optionText: "With the smallest distance value", optionTag: "A" },
                { optionText: "Alphabetically", optionTag: "B" },
                { optionText: "With the largest weight", optionTag: "C" },
                { optionText: "Randomly", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does a distance array do in Dijkstra's algorithm?",
            options: [
                { optionText: "Stores shortest distances to all nodes", optionTag: "A" },
                { optionText: "Tracks visited status", optionTag: "B" },
                { optionText: "Stores all nodes", optionTag: "C" },
                { optionText: "Calculates graph size", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of Dijkstra's algorithm?",
            options: [
                { optionText: "O(V + E)", optionTag: "A" },
                { optionText: "O(log V)", optionTag: "B" },
                { optionText: "O(V^2)", optionTag: "C" },
                { optionText: "O(E^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In the adjacency list, how are edges stored?",
            options: [
                { optionText: "As neighbors with weights", optionTag: "A" },
                { optionText: "As coordinates", optionTag: "B" },
                { optionText: "As keys only", optionTag: "C" },
                { optionText: "As values only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;