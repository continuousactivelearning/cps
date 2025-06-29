import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Matrices - Advanced Quiz",
    quizLevel: "advanced",
    lang: "java",
    description: "This quiz covers advanced concepts of Matrices in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Matrices"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of multiplying two n x n matrices using the standard algorithm?",
            options: [
                { optionText: "O(n^2)", optionTag: "A" },
                { optionText: "O(n^3)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n^4)", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which algorithm improves the multiplication of matrices over the naive method?",
            options: [
                { optionText: "Strassen's algorithm", optionTag: "A" },
                { optionText: "Bellman-Ford algorithm", optionTag: "B" },
                { optionText: "Dijkstra's algorithm", optionTag: "C" },
                { optionText: "Floyd-Warshall algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the minimum number of multiplications required to multiply three matrices A(10x20), B(20x30), and C(30x40)?",
            options: [
                { optionText: "18000", optionTag: "A" },
                { optionText: "24000", optionTag: "B" },
                { optionText: "30000", optionTag: "C" },
                { optionText: "None of the above", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which property is true for the determinant of a matrix?",
            options: [
                { optionText: "det(AB) = det(A) * det(B)", optionTag: "A" },
                { optionText: "det(A+B) = det(A) + det(B)", optionTag: "B" },
                { optionText: "det(A-B) = det(A) - det(B)", optionTag: "C" },
                { optionText: "det(A) = det(-A)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following methods is used to calculate the inverse of a matrix?",
            options: [
                { optionText: "Adjoint Method", optionTag: "A" },
                { optionText: "Gaussian Elimination", optionTag: "B" },
                { optionText: "LU Decomposition", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a property of a symmetric matrix?",
            options: [
                { optionText: "A = A^T", optionTag: "A" },
                { optionText: "All eigenvalues are real", optionTag: "B" },
                { optionText: "It is always invertible", optionTag: "C" },
                { optionText: "It is square", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which type of matrix has non-zero elements only on its main diagonal?",
            options: [
                { optionText: "Diagonal Matrix", optionTag: "A" },
                { optionText: "Sparse Matrix", optionTag: "B" },
                { optionText: "Unit Matrix", optionTag: "C" },
                { optionText: "Identity Matrix", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the rank of a matrix?",
            options: [
                { optionText: "The number of non-zero rows in its row echelon form", optionTag: "A" },
                { optionText: "The sum of all elements", optionTag: "B" },
                { optionText: "The largest eigenvalue", optionTag: "C" },
                { optionText: "The number of zero rows", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the trace of a matrix?",
            options: [
                { optionText: "The sum of its diagonal elements", optionTag: "A" },
                { optionText: "The product of its diagonal elements", optionTag: "B" },
                { optionText: "The sum of all elements", optionTag: "C" },
                { optionText: "The largest diagonal element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation is used to transpose a matrix?",
            options: [
                { optionText: "Switch rows with columns", optionTag: "A" },
                { optionText: "Reverse all rows", optionTag: "B" },
                { optionText: "Reverse all columns", optionTag: "C" },
                { optionText: "Multiply by -1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;