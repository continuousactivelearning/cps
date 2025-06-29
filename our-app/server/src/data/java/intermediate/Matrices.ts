import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Matrices - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "java",
    description: "This quiz covers intermediate concepts of Matrices in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Matrices"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of matrix multiplication using the standard method?",
            options: [
                { optionText: "O(n^3)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(n^4)", optionTag: "C" },
                { optionText: "O(n^2 log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a sparse matrix?",
            options: [
                { optionText: "A matrix with mostly zero elements", optionTag: "A" },
                { optionText: "A matrix with all non-zero elements", optionTag: "B" },
                { optionText: "A square matrix", optionTag: "C" },
                { optionText: "A diagonal matrix", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is faster than the standard method for matrix multiplication?",
            options: [
                { optionText: "Strassen's Algorithm", optionTag: "A" },
                { optionText: "Dijkstra's Algorithm", optionTag: "B" },
                { optionText: "Kruskal's Algorithm", optionTag: "C" },
                { optionText: "Prim's Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the identity matrix?",
            options: [
                { optionText: "A matrix with 1's on the diagonal and 0's elsewhere", optionTag: "A" },
                { optionText: "A matrix with all elements as 1", optionTag: "B" },
                { optionText: "A matrix with all elements as 0", optionTag: "C" },
                { optionText: "A square matrix with random values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can we transpose a matrix in Java?",
            options: [
                { optionText: "By swapping rows with columns", optionTag: "A" },
                { optionText: "By reversing the matrix", optionTag: "B" },
                { optionText: "By rotating the matrix", optionTag: "C" },
                { optionText: "By deleting rows", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result of multiplying a matrix by its identity matrix?",
            options: [
                { optionText: "The original matrix", optionTag: "A" },
                { optionText: "A zero matrix", optionTag: "B" },
                { optionText: "A transposed matrix", optionTag: "C" },
                { optionText: "An inverted matrix", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is commonly used to store sparse matrices?",
            options: [
                { optionText: "Triplet representation", optionTag: "A" },
                { optionText: "ArrayList", optionTag: "B" },
                { optionText: "Vector", optionTag: "C" },
                { optionText: "HashMap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which matrix has all elements zero except the main diagonal?",
            options: [
                { optionText: "Diagonal matrix", optionTag: "A" },
                { optionText: "Sparse matrix", optionTag: "B" },
                { optionText: "Identity matrix", optionTag: "C" },
                { optionText: "Zero matrix", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the sum of the elements on the main diagonal of a square matrix called?",
            options: [
                { optionText: "Trace", optionTag: "A" },
                { optionText: "Sum", optionTag: "B" },
                { optionText: "Determinant", optionTag: "C" },
                { optionText: "Rank", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which matrix property indicates the number of rows and columns?",
            options: [
                { optionText: "Order", optionTag: "A" },
                { optionText: "Rank", optionTag: "B" },
                { optionText: "Size", optionTag: "C" },
                { optionText: "Trace", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
