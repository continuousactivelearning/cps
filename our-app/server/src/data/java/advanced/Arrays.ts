import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Arrays - Advanced Quiz",
    quizLevel: "advanced",
    lang: "java",
    description: "This quiz tests your advanced knowledge of Arrays in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Arrays"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "How can you efficiently remove duplicates from an unsorted array in Java?",
            options: [
                { optionText: "Using a HashSet", optionTag: "A" },
                { optionText: "Using a TreeSet", optionTag: "B" },
                { optionText: "Using nested loops", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which sorting algorithm is used by Arrays.sort() for primitive types?",
            options: [
                { optionText: "Dual-Pivot Quicksort", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Insertion Sort", optionTag: "C" },
                { optionText: "Bubble Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of searching in a sorted array using binary search?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method can be used to fill an array with a specific value?",
            options: [
                { optionText: "Arrays.fill()", optionTag: "A" },
                { optionText: "Array.fill()", optionTag: "B" },
                { optionText: "fillArray()", optionTag: "C" },
                { optionText: "Arrays.assign()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method performs binary search on arrays?",
            options: [
                { optionText: "Arrays.binarySearch()", optionTag: "A" },
                { optionText: "Array.searchBinary()", optionTag: "B" },
                { optionText: "binarySearchArray()", optionTag: "C" },
                { optionText: "searchBinary()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can you compare two arrays for equality in Java?",
            options: [
                { optionText: "Arrays.equals()", optionTag: "A" },
                { optionText: "arr1 == arr2", optionTag: "B" },
                { optionText: "arr1.equals(arr2)", optionTag: "C" },
                { optionText: "compareArrays()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does Arrays.copyOf() return?",
            options: [
                { optionText: "A new array with copied elements", optionTag: "A" },
                { optionText: "A reference to the same array", optionTag: "B" },
                { optionText: "An empty array", optionTag: "C" },
                { optionText: "It throws an exception", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if you assign one array to another directly (arr1 = arr2)?",
            options: [
                { optionText: "Both point to the same memory location", optionTag: "A" },
                { optionText: "A new array is created", optionTag: "B" },
                { optionText: "The arrays are deeply copied", optionTag: "C" },
                { optionText: "It causes a compile-time error", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to convert an array to a list?",
            options: [
                { optionText: "Arrays.asList()", optionTag: "A" },
                { optionText: "Array.toList()", optionTag: "B" },
                { optionText: "toListArray()", optionTag: "C" },
                { optionText: "convertToList()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a multi-dimensional array declaration?",
            options: [
                { optionText: "int[][] arr = new int[4][4];", optionTag: "A" },
                { optionText: "int arr = new int[4][4];", optionTag: "B" },
                { optionText: "arr[][] = int[4][4];", optionTag: "C" },
                { optionText: "array int arr[4][4];", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the maximum size of an array in Java?",
            options: [
                { optionText: "Integer.MAX_VALUE", optionTag: "A" },
                { optionText: "Long.MAX_VALUE", optionTag: "B" },
                { optionText: "Depends on JVM memory", optionTag: "C" },
                { optionText: "No limit", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which function in Arrays class can reverse an array?",
            options: [
                { optionText: "There is no direct function", optionTag: "A" },
                { optionText: "Arrays.reverse()", optionTag: "B" },
                { optionText: "reverseArray()", optionTag: "C" },
                { optionText: "Array.reverse()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which statement about jagged arrays is correct?",
            options: [
                { optionText: "They can have different lengths in each row", optionTag: "A" },
                { optionText: "All rows must have the same length", optionTag: "B" },
                { optionText: "Java does not support jagged arrays", optionTag: "C" },
                { optionText: "They require special syntax", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when Arrays.sort() is called on an array of objects?",
            options: [
                { optionText: "It uses the compareTo method", optionTag: "A" },
                { optionText: "It uses the object's hashcode", optionTag: "B" },
                { optionText: "It compares memory addresses", optionTag: "C" },
                { optionText: "It throws a compile-time error", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How are arrays stored in Java?",
            options: [
                { optionText: "Contiguous memory locations", optionTag: "A" },
                { optionText: "Non-contiguous linked memory", optionTag: "B" },
                { optionText: "Hash-based memory", optionTag: "C" },
                { optionText: "Indexed lists", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which class provides deep equality checks for arrays?",
            options: [
                { optionText: "Arrays", optionTag: "A" },
                { optionText: "Objects", optionTag: "B" },
                { optionText: "ArrayUtils", optionTag: "C" },
                { optionText: "Collections", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which method is used to find the hash code of an array?",
            options: [
                { optionText: "Arrays.hashCode()", optionTag: "A" },
                { optionText: "Array.hash()", optionTag: "B" },
                { optionText: "hashArray()", optionTag: "C" },
                { optionText: "Arrays.hash()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which exception is thrown when using an invalid array index?",
            options: [
                { optionText: "ArrayIndexOutOfBoundsException", optionTag: "A" },
                { optionText: "IndexException", optionTag: "B" },
                { optionText: "OutOfRangeException", optionTag: "C" },
                { optionText: "InvalidIndexException", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you declare a final array in Java?",
            options: [
                { optionText: "final int[] arr = new int[5];", optionTag: "A" },
                { optionText: "const int[] arr = new int[5];", optionTag: "B" },
                { optionText: "final arr = new int[5];", optionTag: "C" },
                { optionText: "static final int[] arr;", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
