import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "C++ Matrices - Advanced Quiz",
  quizLevel: "advanced",
  lang: "cpp",
  description: "This quiz challenges your advanced understanding of matrices in C++, including dynamic memory, operations, and algorithms.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Matrices"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which is the time complexity of multiplying two n×n matrices using the naive method?",
      options: [
        { optionText: "O(n^3)", optionTag: "A" },
        { optionText: "O(n^2)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the output of multiplying an identity matrix with any square matrix A?",
      options: [
        { optionText: "Matrix A", optionTag: "A" },
        { optionText: "Transpose of A", optionTag: "B" },
        { optionText: "0 Matrix", optionTag: "C" },
        { optionText: "Upper triangular matrix", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method is best for representing sparse matrices in C++?",
      options: [
        { optionText: "Array of structures", optionTag: "A" },
        { optionText: "2D array", optionTag: "B" },
        { optionText: "Single structure", optionTag: "C" },
        { optionText: "Vector of maps", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which condition must hold true for matrix multiplication (A×B) to be valid?",
      options: [
        { optionText: "Columns of A = Rows of B", optionTag: "A" },
        { optionText: "Rows of A = Columns of B", optionTag: "B" },
        { optionText: "Both matrices square", optionTag: "C" },
        { optionText: "Same dimensions", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which matrix traversal order is better for cache performance?",
      options: [
        { optionText: "Row-wise", optionTag: "A" },
        { optionText: "Column-wise", optionTag: "B" },
        { optionText: "Zigzag", optionTag: "C" },
        { optionText: "Spiral", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the output of transposing a symmetric matrix?",
      options: [
        { optionText: "Same matrix", optionTag: "A" },
        { optionText: "Zero matrix", optionTag: "B" },
        { optionText: "Inverse", optionTag: "C" },
        { optionText: "Diagonal matrix", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How can we declare a dynamic 2D matrix in C++ using new keyword?",
      options: [
        { optionText: "int** mat = new int*[rows];", optionTag: "A" },
        { optionText: "int mat[][] = new int[rows][cols];", optionTag: "B" },
        { optionText: "int mat = malloc(rows * cols);", optionTag: "C" },
        { optionText: "int mat[rows][cols];", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which C++ STL container is best for variable-sized matrix rows?",
      options: [
        { optionText: "vector<vector<int>>", optionTag: "A" },
        { optionText: "array<array<int>>", optionTag: "B" },
        { optionText: "deque<deque<int>>", optionTag: "C" },
        { optionText: "list<list<int>>", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the determinant of a diagonal matrix with elements d1, d2, ..., dn?",
      options: [
        { optionText: "Product of all diagonal elements", optionTag: "A" },
        { optionText: "Sum of diagonal elements", optionTag: "B" },
        { optionText: "Always 1", optionTag: "C" },
        { optionText: "Zero", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which matrix has only non-zero values on the main diagonal?",
      options: [
        { optionText: "Diagonal Matrix", optionTag: "A" },
        { optionText: "Identity Matrix", optionTag: "B" },
        { optionText: "Triangular Matrix", optionTag: "C" },
        { optionText: "Scalar Matrix", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm is used to rotate a square matrix by 90 degrees clockwise?",
      options: [
        { optionText: "Transpose and reverse rows", optionTag: "A" },
        { optionText: "Swap diagonals", optionTag: "B" },
        { optionText: "Mirror and flip", optionTag: "C" },
        { optionText: "Sort then reverse", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which header in C++ includes std::swap used in matrix operations?",
      options: [
        { optionText: "<algorithm>", optionTag: "A" },
        { optionText: "<matrix>", optionTag: "B" },
        { optionText: "<iostream>", optionTag: "C" },
        { optionText: "<math.h>", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the output if you multiply a matrix with its inverse?",
      options: [
        { optionText: "Identity Matrix", optionTag: "A" },
        { optionText: "Same Matrix", optionTag: "B" },
        { optionText: "Transpose", optionTag: "C" },
        { optionText: "Zero Matrix", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which matrix operation is not associative?",
      options: [
        { optionText: "Matrix subtraction", optionTag: "A" },
        { optionText: "Matrix addition", optionTag: "B" },
        { optionText: "Matrix multiplication", optionTag: "C" },
        { optionText: "Transpose", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which matrix type is used for graph representation?",
      options: [
        { optionText: "Adjacency matrix", optionTag: "A" },
        { optionText: "Transpose matrix", optionTag: "B" },
        { optionText: "Zero matrix", optionTag: "C" },
        { optionText: "Sparse matrix", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is a square matrix with all diagonal elements as 1 and rest 0 called?",
      options: [
        { optionText: "Identity matrix", optionTag: "A" },
        { optionText: "Null matrix", optionTag: "B" },
        { optionText: "Diagonal matrix", optionTag: "C" },
        { optionText: "Unit matrix", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which technique is efficient for sparse matrix storage?",
      options: [
        { optionText: "Triplet representation", optionTag: "A" },
        { optionText: "2D array", optionTag: "B" },
        { optionText: "Linked list", optionTag: "C" },
        { optionText: "Hash map", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which data type in C++ is best suited for matrix of decimals?",
      options: [
        { optionText: "double", optionTag: "A" },
        { optionText: "int", optionTag: "B" },
        { optionText: "char", optionTag: "C" },
        { optionText: "bool", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to check if a matrix is upper triangular?",
      options: [
        { optionText: "All elements below main diagonal are 0", optionTag: "A" },
        { optionText: "All elements above main diagonal are 0", optionTag: "B" },
        { optionText: "All diagonal elements are 1", optionTag: "C" },
        { optionText: "Sum of rows equals 1", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;