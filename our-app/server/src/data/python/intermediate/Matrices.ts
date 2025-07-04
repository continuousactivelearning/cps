import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Matrices - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "python",
  description: "This quiz tests your intermediate-level understanding of matrix operations in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Matrices"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What Python library is commonly used for matrix operations?",
      options: [
        { optionText: "NumPy", optionTag: "A" },
        { optionText: "Pandas", optionTag: "B" },
        { optionText: "Matplotlib", optionTag: "C" },
        { optionText: "SciPy", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you create a 2x2 matrix in NumPy?",
      options: [
        { optionText: "np.array([[1, 2], [3, 4]])", optionTag: "A" },
        { optionText: "np.matrix(2,2)", optionTag: "B" },
        { optionText: "np.mat(2,2)", optionTag: "C" },
        { optionText: "np.create([1, 2], [3, 4])", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function is used for matrix multiplication in NumPy?",
      options: [
        { optionText: "np.dot()", optionTag: "A" },
        { optionText: "np.mult()", optionTag: "B" },
        { optionText: "np.multiply()", optionTag: "C" },
        { optionText: "np.times()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does `A.T` return for a matrix `A`?",
      options: [
        { optionText: "Transpose of matrix A", optionTag: "A" },
        { optionText: "Inverse of A", optionTag: "B" },
        { optionText: "Determinant", optionTag: "C" },
        { optionText: "Shape of A", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method checks the shape of a matrix in NumPy?",
      options: [
        { optionText: "shape", optionTag: "A" },
        { optionText: "length", optionTag: "B" },
        { optionText: "size()", optionTag: "C" },
        { optionText: "dim()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is returned by `np.identity(3)`?",
      options: [
        { optionText: "3x3 identity matrix", optionTag: "A" },
        { optionText: "Matrix of all 3s", optionTag: "B" },
        { optionText: "Error", optionTag: "C" },
        { optionText: "3x3 zero matrix", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which NumPy function returns the inverse of a matrix?",
      options: [
        { optionText: "np.linalg.inv()", optionTag: "A" },
        { optionText: "np.inverse()", optionTag: "B" },
        { optionText: "np.mat.inv()", optionTag: "C" },
        { optionText: "np.inv()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What condition must be met for a matrix to have an inverse?",
      options: [
        { optionText: "Determinant must be non-zero", optionTag: "A" },
        { optionText: "It must be square", optionTag: "B" },
        { optionText: "Both A and B", optionTag: "C" },
        { optionText: "It must be diagonal", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How do you find the determinant of a matrix in NumPy?",
      options: [
        { optionText: "np.linalg.det()", optionTag: "A" },
        { optionText: "np.determinant()", optionTag: "B" },
        { optionText: "np.det()", optionTag: "C" },
        { optionText: "np.matrix.det()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does `np.zeros((2, 3))` create?",
      options: [
        { optionText: "2x3 matrix filled with zeros", optionTag: "A" },
        { optionText: "3x2 matrix with zeros", optionTag: "B" },
        { optionText: "Matrix with no shape", optionTag: "C" },
        { optionText: "Matrix with nulls", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result of element-wise multiplication in NumPy?",
      options: [
        { optionText: "Each element is multiplied individually", optionTag: "A" },
        { optionText: "Matrix product", optionTag: "B" },
        { optionText: "Sum of elements", optionTag: "C" },
        { optionText: "Determinant", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to access the second row of matrix A?",
      options: [
        { optionText: "A[1]", optionTag: "A" },
        { optionText: "A(2)", optionTag: "B" },
        { optionText: "A.row(2)", optionTag: "C" },
        { optionText: "A[2]", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is `np.ones((2,2))`?",
      options: [
        { optionText: "2x2 matrix of ones", optionTag: "A" },
        { optionText: "Matrix of zeros", optionTag: "B" },
        { optionText: "Identity matrix", optionTag: "C" },
        { optionText: "Matrix of NaNs", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you perform slicing on a matrix A?",
      options: [
        { optionText: "A[0:2, 1:3]", optionTag: "A" },
        { optionText: "A(0:2, 1:3)", optionTag: "B" },
        { optionText: "A[0:2][1:3]", optionTag: "C" },
        { optionText: "A.slice(0,2,1,3)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the shape of np.array([[1, 2], [3, 4], [5, 6]])?",
      options: [
        { optionText: "(3, 2)", optionTag: "A" },
        { optionText: "(2, 3)", optionTag: "B" },
        { optionText: "(6,)", optionTag: "C" },
        { optionText: "(3,)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How can you flatten a matrix?",
      options: [
        { optionText: "A.flatten()", optionTag: "A" },
        { optionText: "flatten(A)", optionTag: "B" },
        { optionText: "A.flat()", optionTag: "C" },
        { optionText: "A.reshape(0)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which NumPy function reshapes a matrix?",
      options: [
        { optionText: "reshape()", optionTag: "A" },
        { optionText: "resize()", optionTag: "B" },
        { optionText: "shape()", optionTag: "C" },
        { optionText: "reform()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if matrix multiplication dimensions are incompatible?",
      options: [
        { optionText: "Raises a ValueError", optionTag: "A" },
        { optionText: "Returns None", optionTag: "B" },
        { optionText: "Performs element-wise operation", optionTag: "C" },
        { optionText: "Performs addition", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How can you check if two matrices are equal in NumPy?",
      options: [
        { optionText: "np.array_equal(A, B)", optionTag: "A" },
        { optionText: "A == B", optionTag: "B" },
        { optionText: "A.equals(B)", optionTag: "C" },
        { optionText: "compare(A, B)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is returned by `np.diag(A)`?",
      options: [
        { optionText: "Diagonal elements", optionTag: "A" },
        { optionText: "Transpose of A", optionTag: "B" },
        { optionText: "All rows", optionTag: "C" },
        { optionText: "Upper triangle", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;