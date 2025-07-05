import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Arrays - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "java",
    description: "This quiz tests your knowledge of arrays in Java at an intermediate level.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Arrays"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the default value of an array element of type int in Java?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "null", optionTag: "C" },
                { optionText: "Undefined", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is the correct way to declare an array in Java?",
            options: [
                { optionText: "int[] arr;", optionTag: "A" },
                { optionText: "int arr[];", optionTag: "B" },
                { optionText: "Both A and B", optionTag: "C" },
                { optionText: "array int[];", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "How are arrays stored in memory in Java?",
            options: [
                { optionText: "Contiguously", optionTag: "A" },
                { optionText: "Randomly", optionTag: "B" },
                { optionText: "Fragmented", optionTag: "C" },
                { optionText: "Not defined", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will be the output of: int[] arr = new int[5]; System.out.println(arr.length);",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "4", optionTag: "B" },
                { optionText: "5", optionTag: "C" },
                { optionText: "Error", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which of these is true about array indexes in Java?",
            options: [
                { optionText: "Indexes start at 0", optionTag: "A" },
                { optionText: "Indexes start at 1", optionTag: "B" },
                { optionText: "Indexing is not supported", optionTag: "C" },
                { optionText: "Indexes are customizable", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to sort arrays in Java?",
            options: [
                { optionText: "Arrays.sort()", optionTag: "A" },
                { optionText: "sort()", optionTag: "B" },
                { optionText: "Collections.sort()", optionTag: "C" },
                { optionText: "Array.sort()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is the correct way to initialize an array with values?",
            options: [
                { optionText: "int[] arr = {1, 2, 3};", optionTag: "A" },
                { optionText: "int arr = {1, 2, 3};", optionTag: "B" },
                { optionText: "arr = new int[]{1, 2, 3};", optionTag: "C" },
                { optionText: "Both A and C", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What happens if you try to access an invalid index in an array?",
            options: [
                { optionText: "Returns null", optionTag: "A" },
                { optionText: "Throws ArrayIndexOutOfBoundsException", optionTag: "B" },
                { optionText: "Returns 0", optionTag: "C" },
                { optionText: "Ignores the operation", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which class provides utility methods for array manipulation?",
            options: [
                { optionText: "ArrayUtils", optionTag: "A" },
                { optionText: "Arrays", optionTag: "B" },
                { optionText: "Collection", optionTag: "C" },
                { optionText: "Utils", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What does 'arr.length' return in Java?",
            options: [
                { optionText: "The number of elements in the array", optionTag: "A" },
                { optionText: "The memory size of the array", optionTag: "B" },
                { optionText: "The last index", optionTag: "C" },
                { optionText: "Error", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the maximum index of an array of size N?",
            options: [
                { optionText: "N", optionTag: "A" },
                { optionText: "N-1", optionTag: "B" },
                { optionText: "N+1", optionTag: "C" },
                { optionText: "Depends on the system", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of the following will correctly copy arrays?",
            options: [
                { optionText: "System.arraycopy()", optionTag: "A" },
                { optionText: "Arrays.copyOf()", optionTag: "B" },
                { optionText: "Both A and B", optionTag: "C" },
                { optionText: "array.copy()", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is the time complexity of accessing an element in an array by index?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can you loop through an array in Java?",
            options: [
                { optionText: "For loop", optionTag: "A" },
                { optionText: "Enhanced for loop", optionTag: "B" },
                { optionText: "While loop", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which of the following is true about multidimensional arrays in Java?",
            options: [
                { optionText: "They are arrays of arrays", optionTag: "A" },
                { optionText: "They are continuous in memory", optionTag: "B" },
                { optionText: "They cannot have different lengths in each dimension", optionTag: "C" },
                { optionText: "They are not supported in Java", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the correct syntax to declare a two-dimensional array in Java?",
            options: [
                { optionText: "int[][] arr;", optionTag: "A" },
                { optionText: "int arr[][];", optionTag: "B" },
                { optionText: "Both A and B", optionTag: "C" },
                { optionText: "int arr[2][2];", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What will happen if you try to assign a value to an array index greater than its size?",
            options: [
                { optionText: "The array expands automatically", optionTag: "A" },
                { optionText: "The compiler resizes the array", optionTag: "B" },
                { optionText: "An ArrayIndexOutOfBoundsException is thrown", optionTag: "C" },
                { optionText: "Nothing happens", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is the output of: int[] arr = {1, 2, 3}; System.out.println(arr[1]);",
            options: [
                { optionText: "1", optionTag: "A" },
                { optionText: "2", optionTag: "B" },
                { optionText: "3", optionTag: "C" },
                { optionText: "Error", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "How can you find the maximum element in an array?",
            options: [
                { optionText: "Using a for loop to compare elements", optionTag: "A" },
                { optionText: "Using Arrays.stream(arr).max()", optionTag: "B" },
                { optionText: "Using Collections.max() after converting to list", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which is the correct way to print all elements in an array?",
            options: [
                { optionText: "Arrays.toString(arr)", optionTag: "A" },
                { optionText: "System.out.println(arr)", optionTag: "B" },
                { optionText: "System.out.println(arr[all])", optionTag: "C" },
                { optionText: "System.print(arr)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
