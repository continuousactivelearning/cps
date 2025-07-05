import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Floyd-Warshall Algorithm - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz assesses advanced understanding of the Floyd-Warshall algorithm implemented in JavaScript.",
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
                { optionText: "To find minimum spanning tree", optionTag: "B" },
                { optionText: "To perform topological sorting", optionTag: "C" },
                { optionText: "To traverse graphs using DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of the Floyd-Warshall algorithm?",
            options: [
                { optionText: "O(V^3)", optionTag: "A" },
                { optionText: "O(V + E)", optionTag: "B" },
                { optionText: "O(V^2)", optionTag: "C" },
                { optionText: "O(E log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many loops are typically used in the Floyd-Warshall algorithm implementation?",
            options: [
                { optionText: "Three nested loops", optionTag: "A" },
                { optionText: "Two nested loops", optionTag: "B" },
                { optionText: "One loop with recursion", optionTag: "C" },
                { optionText: "Four loops", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is typically used to represent the graph in Floyd-Warshall?",
            options: [
                { optionText: "2D matrix (adjacency matrix)", optionTag: "A" },
                { optionText: "Adjacency list", optionTag: "B" },
                { optionText: "Min-heap", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Floyd-Warshall, what does `dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])` represent?",
            options: [
                { optionText: "Relaxation step checking intermediate node k", optionTag: "A" },
                { optionText: "Dijkstra’s priority update", optionTag: "B" },
                { optionText: "Edge list construction", optionTag: "C" },
                { optionText: "Recursive subproblem split", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What should be the initial value for unreachable vertices in the matrix?",
            options: [
                { optionText: "Infinity (Number.POSITIVE_INFINITY)", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "null", optionTag: "C" },
                { optionText: "false", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What kind of graphs does Floyd-Warshall algorithm work on?",
            options: [
                { optionText: "Weighted directed graphs (including negative weights, no cycles)", optionTag: "A" },
                { optionText: "Unweighted undirected graphs only", optionTag: "B" },
                { optionText: "Graphs with only positive weights", optionTag: "C" },
                { optionText: "Trees and DAGs only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Does Floyd-Warshall handle graphs with negative cycles?",
            options: [
                { optionText: "No, it detects but does not work with them", optionTag: "A" },
                { optionText: "Yes, it handles them properly", optionTag: "B" },
                { optionText: "No, it crashes on them", optionTag: "C" },
                { optionText: "Yes, by skipping those nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What should be done if `dist[i][i] < 0` after running Floyd-Warshall?",
            options: [
                { optionText: "There is a negative cycle", optionTag: "A" },
                { optionText: "No path from i to i", optionTag: "B" },
                { optionText: "All paths are optimal", optionTag: "C" },
                { optionText: "Cycle is positive", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these applications is best suited for Floyd-Warshall?",
            options: [
                { optionText: "Computing all-pairs shortest paths", optionTag: "A" },
                { optionText: "Topological sorting", optionTag: "B" },
                { optionText: "Minimum spanning tree", optionTag: "C" },
                { optionText: "DFS traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is the diagonal of the matrix initialized in Floyd-Warshall?",
            options: [
                { optionText: "Zero for dist[i][i]", optionTag: "A" },
                { optionText: "Infinity", optionTag: "B" },
                { optionText: "Negative one", optionTag: "C" },
                { optionText: "Null", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is Floyd-Warshall considered a dynamic programming approach?",
            options: [
                { optionText: "It builds the solution using previously solved subproblems", optionTag: "A" },
                { optionText: "It uses recursion only", optionTag: "B" },
                { optionText: "It works on greedy steps", optionTag: "C" },
                { optionText: "It modifies the graph structure directly", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which part of the Floyd-Warshall algorithm can be parallelized for performance?",
            options: [
                { optionText: "Inner loop for each k", optionTag: "A" },
                { optionText: "Outer loop only", optionTag: "B" },
                { optionText: "Input processing", optionTag: "C" },
                { optionText: "Initialization step", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In JavaScript, which constant is used to represent infinity?",
            options: [
                { optionText: "Number.POSITIVE_INFINITY", optionTag: "A" },
                { optionText: "InfinityConstant", optionTag: "B" },
                { optionText: "MAX_VALUE", optionTag: "C" },
                { optionText: "Math.infinity", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Floyd-Warshall algorithm return the actual shortest paths, not just distances?",
            options: [
                { optionText: "Yes, by maintaining a predecessor matrix", optionTag: "A" },
                { optionText: "No, it only finds distances", optionTag: "B" },
                { optionText: "Yes, with recursion only", optionTag: "C" },
                { optionText: "Yes, but only with graphs with no cycles", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is most similar to Floyd-Warshall in concept?",
            options: [
                { optionText: "Bellman-Ford", optionTag: "A" },
                { optionText: "Prim’s", optionTag: "B" },
                { optionText: "Kruskal’s", optionTag: "C" },
                { optionText: "DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Floyd-Warshall requires how much space in memory?",
            options: [
                { optionText: "O(V^2)", optionTag: "A" },
                { optionText: "O(E)", optionTag: "B" },
                { optionText: "O(log V)", optionTag: "C" },
                { optionText: "O(V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the base case in Floyd-Warshall logic?",
            options: [
                { optionText: "dist[i][j] = weight of edge if exists, else Infinity", optionTag: "A" },
                { optionText: "dist[i][j] = 0", optionTag: "B" },
                { optionText: "dist[i][j] = i+j", optionTag: "C" },
                { optionText: "dist[i][j] = 1 if i==j", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does it mean if dist[i][j] becomes smaller at some iteration k?",
            options: [
                { optionText: "There is a shorter path from i to j through k", optionTag: "A" },
                { optionText: "Path from i to j is not reachable", optionTag: "B" },
                { optionText: "Edge (i,j) is removed", optionTag: "C" },
                { optionText: "Cycle is formed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
