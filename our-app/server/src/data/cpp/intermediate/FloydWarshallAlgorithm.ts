import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Floyd-Warshall Algorithm - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz assesses your intermediate knowledge of the Floyd-Warshall Algorithm in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "FloydWarshallAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the primary purpose of the Floyd-Warshall algorithm?",
            options: [
                { optionText: "To find shortest paths between all pairs of vertices", optionTag: "A" },
                { optionText: "To find a minimum spanning tree", optionTag: "B" },
                { optionText: "To detect cycles in a graph", optionTag: "C" },
                { optionText: "To traverse a graph in BFS order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is commonly used in the Floyd-Warshall algorithm?",
            options: [
                { optionText: "2D matrix", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Linked list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Floyd-Warshall algorithm?",
            options: [
                { optionText: "O(V^3)", optionTag: "A" },
                { optionText: "O(E log V)", optionTag: "B" },
                { optionText: "O(V + E)", optionTag: "C" },
                { optionText: "O(V^2 log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "The Floyd-Warshall algorithm works on which type of graphs?",
            options: [
                { optionText: "Directed and weighted", optionTag: "A" },
                { optionText: "Undirected and unweighted", optionTag: "B" },
                { optionText: "Only DAGs", optionTag: "C" },
                { optionText: "Only trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What value is used to represent infinity in Floyd-Warshall implementation?",
            options: [
                { optionText: "A large constant like INT_MAX", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "-1", optionTag: "C" },
                { optionText: "NULL", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Floyd-Warshall can detect negative weight cycles by checking:",
            options: [
                { optionText: "If dist[i][i] < 0 for any i", optionTag: "A" },
                { optionText: "If any edge has negative weight", optionTag: "B" },
                { optionText: "If dist[i][j] > dist[i][k] + dist[k][j]", optionTag: "C" },
                { optionText: "If all edge weights are zero", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many nested loops are required in Floyd-Warshall algorithm?",
            options: [
                { optionText: "3", optionTag: "A" },
                { optionText: "2", optionTag: "B" },
                { optionText: "1", optionTag: "C" },
                { optionText: "4", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which vertex is considered first in the algorithm?",
            options: [
                { optionText: "Intermediate vertex", optionTag: "A" },
                { optionText: "Source vertex", optionTag: "B" },
                { optionText: "Destination vertex", optionTag: "C" },
                { optionText: "Maximum degree vertex", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "The algorithm uses which principle?",
            options: [
                { optionText: "Dynamic Programming", optionTag: "A" },
                { optionText: "Greedy", optionTag: "B" },
                { optionText: "Backtracking", optionTag: "C" },
                { optionText: "Divide and Conquer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "If dist[i][j] > dist[i][k] + dist[k][j], what should happen?",
            options: [
                { optionText: "Update dist[i][j] with new value", optionTag: "A" },
                { optionText: "Delete the path from i to j", optionTag: "B" },
                { optionText: "Add a new vertex", optionTag: "C" },
                { optionText: "Nothing changes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Floyd-Warshall uses how many matrices during computation?",
            options: [
                { optionText: "1 (distance matrix)", optionTag: "A" },
                { optionText: "2", optionTag: "B" },
                { optionText: "V", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Floyd-Warshall handle graphs with negative edges but no negative cycles?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only if all edges are positive", optionTag: "C" },
                { optionText: "Only if graph is undirected", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when there is no direct edge between two vertices?",
            options: [
                { optionText: "Distance is initialized to infinity", optionTag: "A" },
                { optionText: "Distance is set to 0", optionTag: "B" },
                { optionText: "Edge is removed", optionTag: "C" },
                { optionText: "Vertices are skipped", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of Floyd-Warshall?",
            options: [
                { optionText: "O(V^2)", optionTag: "A" },
                { optionText: "O(E)", optionTag: "B" },
                { optionText: "O(V log V)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Floyd-Warshall finds shortest path for how many pairs?",
            options: [
                { optionText: "All vertex pairs", optionTag: "A" },
                { optionText: "Only connected pairs", optionTag: "B" },
                { optionText: "Only pairs with direct edges", optionTag: "C" },
                { optionText: "Only leaf-to-leaf pairs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which value is stored in dist[i][j] after execution?",
            options: [
                { optionText: "Minimum distance from vertex i to j", optionTag: "A" },
                { optionText: "Maximum distance from i to j", optionTag: "B" },
                { optionText: "Number of edges from i to j", optionTag: "C" },
                { optionText: "Sum of all weights in graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a limitation of Floyd-Warshall?",
            options: [
                { optionText: "Does not scale well for large V", optionTag: "A" },
                { optionText: "Can’t handle weighted edges", optionTag: "B" },
                { optionText: "Works only on trees", optionTag: "C" },
                { optionText: "Does not work for directed graphs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What must be true before starting Floyd-Warshall?",
            options: [
                { optionText: "Distance from i to j is known if directly connected", optionTag: "A" },
                { optionText: "Graph must be undirected", optionTag: "B" },
                { optionText: "All edges must be 0", optionTag: "C" },
                { optionText: "Graph should not contain any edge", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the best case time complexity of Floyd-Warshall?",
            options: [
                { optionText: "O(V^3)", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(E)", optionTag: "C" },
                { optionText: "O(V^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Floyd-Warshall be used for dynamic edge weight changes?",
            options: [
                { optionText: "No, it must be re-run from scratch", optionTag: "A" },
                { optionText: "Yes, easily updatable", optionTag: "B" },
                { optionText: "Only for addition", optionTag: "C" },
                { optionText: "Only for deletion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
