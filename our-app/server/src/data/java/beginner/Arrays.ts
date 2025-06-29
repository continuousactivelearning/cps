import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Arrays - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz tests your basic knowledge of Arrays in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Arrays"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the index of the first element in a Java array?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "-1", optionTag: "C" },
                { optionText: "Depends on array type", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following correctly declares an array in Java?",
            options: [
                { optionText: "int[] arr;", optionTag: "A" },
                { optionText: "arr{int};", optionTag: "B" },
                { optionText: "int arr[] = int[5];", optionTag: "C" },
                { optionText: "array int arr;", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you find the length of an array in Java?",
            options: [
                { optionText: "arr.length", optionTag: "A" },
                { optionText: "arr.size()", optionTag: "B" },
                { optionText: "length(arr)", optionTag: "C" },
                { optionText: "arr.length()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a valid way to initialize an array?",
            options: [
                { optionText: "int[] arr = {1, 2, 3};", optionTag: "A" },
                { optionText: "int arr = (1, 2, 3);", optionTag: "B" },
                { optionText: "int arr[] = new int(3);", optionTag: "C" },
                { optionText: "int arr() = new int[3];", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will be the default value of an int array element in Java?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "null", optionTag: "B" },
                { optionText: "undefined", optionTag: "C" },
                { optionText: "garbage value", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which array type can store both integers and strings?",
            options: [
                { optionText: "Object[]", optionTag: "A" },
                { optionText: "String[]", optionTag: "B" },
                { optionText: "int[]", optionTag: "C" },
                { optionText: "None of the above", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What exception is thrown when accessing an invalid array index?",
            options: [
                { optionText: "IndexOutOfBoundsException", optionTag: "A" },
                { optionText: "NullPointerException", optionTag: "B" },
                { optionText: "ArrayTypeMismatchException", optionTag: "C" },
                { optionText: "IllegalArgumentException", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which keyword is used to create arrays in Java?",
            options: [
                { optionText: "new", optionTag: "A" },
                { optionText: "create", optionTag: "B" },
                { optionText: "array", optionTag: "C" },
                { optionText: "build", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which loop is most commonly used to traverse arrays?",
            options: [
                { optionText: "for loop", optionTag: "A" },
                { optionText: "while loop", optionTag: "B" },
                { optionText: "do-while loop", optionTag: "C" },
                { optionText: "None of the above", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which array declaration is correct in Java?",
            options: [
                { optionText: "int[] arr = new int[5];", optionTag: "A" },
                { optionText: "int arr = new int[5];", optionTag: "B" },
                { optionText: "arr[] = new int[5];", optionTag: "C" },
                { optionText: "array int arr = new int[5];", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following accesses the third element of an array arr?",
            options: [
                { optionText: "arr[2]", optionTag: "A" },
                { optionText: "arr[3]", optionTag: "B" },
                { optionText: "arr(3)", optionTag: "C" },
                { optionText: "arr{3}", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will be the result of accessing arr[5] in a 5-element array?",
            options: [
                { optionText: "ArrayIndexOutOfBoundsException", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "null", optionTag: "C" },
                { optionText: "The last element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method can be used to sort an array in Java?",
            options: [
                { optionText: "Arrays.sort()", optionTag: "A" },
                { optionText: "sort()", optionTag: "B" },
                { optionText: "arraySort()", optionTag: "C" },
                { optionText: "sortArray()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How to copy all elements of one array to another?",
            options: [
                { optionText: "System.arraycopy()", optionTag: "A" },
                { optionText: "copy()", optionTag: "B" },
                { optionText: "arr.copy()", optionTag: "C" },
                { optionText: "array.copyTo()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the maximum number of dimensions an array can have in Java?",
            options: [
                { optionText: "255", optionTag: "A" },
                { optionText: "256", optionTag: "B" },
                { optionText: "Unlimited", optionTag: "C" },
                { optionText: "Depends on JVM", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is a two-dimensional array declaration?",
            options: [
                { optionText: "int[][] arr = new int[3][3];", optionTag: "A" },
                { optionText: "int arr = new int[3][3];", optionTag: "B" },
                { optionText: "int arr[][] = int[3][3];", optionTag: "C" },
                { optionText: "array int arr[3][3];", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does arr.length return?",
            options: [
                { optionText: "The size of the array", optionTag: "A" },
                { optionText: "The last index", optionTag: "B" },
                { optionText: "Always 0", optionTag: "C" },
                { optionText: "The memory size of the array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these correctly initializes a string array?",
            options: [
                { optionText: "String[] arr = {\"one\", \"two\", \"three\"};", optionTag: "A" },
                { optionText: "String arr = new String{\"one\", \"two\"};", optionTag: "B" },
                { optionText: "String arr[] = new String(3);", optionTag: "C" },
                { optionText: "String arr() = new String[3];", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can you iterate over an array in Java?",
            options: [
                { optionText: "Using for-each loop", optionTag: "A" },
                { optionText: "Using for loop", optionTag: "B" },
                { optionText: "Using while loop", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        }
    ]
};

export default quizData;
