import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Dijkstra’s Algorithm - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz tests your advanced understanding of Dijkstra’s Algorithm in JavaScript, including implementation details, complexity, and edge cases.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DijkstrasAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What data structure is most efficient for Dijkstra’s algorithm?",
            options: [
                { optionText: "Min-heap (priority queue)", optionTag: "A" },
                { optionText: "Array", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Dijkstra’s algorithm using a min-heap?",
            options: [
                { optionText: "O((V + E) log V)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E log E)", optionTag: "C" },
                { optionText: "O(V + E)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Dijkstra's algorithm does not work correctly on graphs with:",
            options: [
                { optionText: "Negative weight edges", optionTag: "A" },
                { optionText: "Zero weight edges", optionTag: "B" },
                { optionText: "Undirected edges", optionTag: "C" },
                { optionText: "Disconnected nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is initialized as 0 in Dijkstra’s algorithm?",
            options: [
                { optionText: "Source node distance", optionTag: "A" },
                { optionText: "All node distances", optionTag: "B" },
                { optionText: "Maximum distance", optionTag: "C" },
                { optionText: "Visited count", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is used to track the shortest path to each node?",
            options: [
                { optionText: "Distance array", optionTag: "A" },
                { optionText: "Adjacency matrix", optionTag: "B" },
                { optionText: "Graph object", optionTag: "C" },
                { optionText: "Visited queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does Dijkstra’s algorithm choose the next node to explore?",
            options: [
                { optionText: "Node with the minimum current distance", optionTag: "A" },
                { optionText: "Node with the most neighbors", optionTag: "B" },
                { optionText: "Node with the highest weight", optionTag: "C" },
                { optionText: "Random unvisited node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In JavaScript, what is commonly used to implement a priority queue?",
            options: [
                { optionText: "Min-heap using array", optionTag: "A" },
                { optionText: "Linked list", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when a shorter path is found during Dijkstra’s run?",
            options: [
                { optionText: "Update distance and re-insert into priority queue", optionTag: "A" },
                { optionText: "Ignore it", optionTag: "B" },
                { optionText: "Break the loop", optionTag: "C" },
                { optionText: "Reset all distances", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What graph representation is most efficient for Dijkstra's algorithm?",
            options: [
                { optionText: "Adjacency list", optionTag: "A" },
                { optionText: "Adjacency matrix", optionTag: "B" },
                { optionText: "Edge list", optionTag: "C" },
                { optionText: "String encoding", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the purpose of the visited set in Dijkstra’s algorithm?",
            options: [
                { optionText: "Prevent reprocessing nodes", optionTag: "A" },
                { optionText: "Track maximum depth", optionTag: "B" },
                { optionText: "Store all paths", optionTag: "C" },
                { optionText: "Record recursion depth", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Dijkstra’s algorithm is a variant of which broader algorithmic technique?",
            options: [
                { optionText: "Greedy algorithm", optionTag: "A" },
                { optionText: "Divide and conquer", optionTag: "B" },
                { optionText: "Backtracking", optionTag: "C" },
                { optionText: "Dynamic programming", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if all edges have the same weight?",
            options: [
                { optionText: "Dijkstra behaves like BFS", optionTag: "A" },
                { optionText: "Dijkstra fails", optionTag: "B" },
                { optionText: "Dijkstra acts like DFS", optionTag: "C" },
                { optionText: "Dijkstra ignores weights", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of graph can Dijkstra handle?",
            options: [
                { optionText: "Directed or undirected with non-negative weights", optionTag: "A" },
                { optionText: "Only directed", optionTag: "B" },
                { optionText: "Only undirected", optionTag: "C" },
                { optionText: "Graphs with negative edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which node does Dijkstra start with?",
            options: [
                { optionText: "The source node", optionTag: "A" },
                { optionText: "The node with max weight", optionTag: "B" },
                { optionText: "The destination node", optionTag: "C" },
                { optionText: "Any random node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "If all nodes are visited, what should the algorithm return?",
            options: [
                { optionText: "Shortest distances to all reachable nodes", optionTag: "A" },
                { optionText: "Only the longest path", optionTag: "B" },
                { optionText: "All paths with weights", optionTag: "C" },
                { optionText: "No output", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JS Map method is useful for Dijkstra’s algorithm?",
            options: [
                { optionText: "set()", optionTag: "A" },
                { optionText: "slice()", optionTag: "B" },
                { optionText: "reduce()", optionTag: "C" },
                { optionText: "concat()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the priority queue hold in Dijkstra's?",
            options: [
                { optionText: "[distance, node] pairs", optionTag: "A" },
                { optionText: "Only node IDs", optionTag: "B" },
                { optionText: "Graph edges", optionTag: "C" },
                { optionText: "Visited nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is a priority queue preferred over a simple array?",
            options: [
                { optionText: "Faster minimum extraction", optionTag: "A" },
                { optionText: "Easier to implement", optionTag: "B" },
                { optionText: "Less space", optionTag: "C" },
                { optionText: "All values sorted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What’s the output of Dijkstra’s algorithm?",
            options: [
                { optionText: "Array of shortest distances", optionTag: "A" },
                { optionText: "Graph object", optionTag: "B" },
                { optionText: "Sorted edges", optionTag: "C" },
                { optionText: "DFS tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Dijkstra be used in weighted directed acyclic graphs (DAGs)?",
            options: [
                { optionText: "Yes, if weights are non-negative", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only with BFS", optionTag: "C" },
                { optionText: "Only if acyclic", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
