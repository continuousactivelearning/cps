import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Hash Tables - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz tests your advanced knowledge of hash tables in JavaScript, including internal implementation, collision handling, and optimization techniques.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "HashTables"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which of the following is the primary use of hash tables?",
            options: [
                { optionText: "Fast key-value lookups", optionTag: "A" },
                { optionText: "Sorting values", optionTag: "B" },
                { optionText: "Sequential access", optionTag: "C" },
                { optionText: "Depth traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the average time complexity for lookup in a hash table?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What causes collisions in a hash table?",
            options: [
                { optionText: "Different keys having same hash index", optionTag: "A" },
                { optionText: "Unsorted keys", optionTag: "B" },
                { optionText: "Excess memory allocation", optionTag: "C" },
                { optionText: "Duplicate values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is commonly used for handling collisions?",
            options: [
                { optionText: "Chaining", optionTag: "A" },
                { optionText: "Stacking", optionTag: "B" },
                { optionText: "Queueing", optionTag: "C" },
                { optionText: "Recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In JavaScript, which data structure is closest to a hash table?",
            options: [
                { optionText: "Object", optionTag: "A" },
                { optionText: "Array", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "String", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does the JavaScript `Map` differ from `Object` in key support?",
            options: [
                { optionText: "`Map` allows any data type as key", optionTag: "A" },
                { optionText: "`Object` allows only numbers", optionTag: "B" },
                { optionText: "`Map` keys must be strings", optionTag: "C" },
                { optionText: "`Object` allows functions as keys", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which hashing strategy minimizes clustering?",
            options: [
                { optionText: "Double hashing", optionTag: "A" },
                { optionText: "Linear probing", optionTag: "B" },
                { optionText: "Quadratic probing", optionTag: "C" },
                { optionText: "Universal hashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a good load factor threshold to resize a hash table?",
            options: [
                { optionText: "0.7", optionTag: "A" },
                { optionText: "0.3", optionTag: "B" },
                { optionText: "1.5", optionTag: "C" },
                { optionText: "2.0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity for hash table operations?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript function is commonly used to convert strings to hash keys?",
            options: [
                { optionText: "Custom hash function", optionTag: "A" },
                { optionText: "parseInt()", optionTag: "B" },
                { optionText: "Math.random()", optionTag: "C" },
                { optionText: "toString()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does a good hash function aim to reduce?",
            options: [
                { optionText: "Collisions", optionTag: "A" },
                { optionText: "Array length", optionTag: "B" },
                { optionText: "Time complexity", optionTag: "C" },
                { optionText: "Recursion depth", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is chaining preferred over open addressing in some cases?",
            options: [
                { optionText: "Handles variable-sized data better", optionTag: "A" },
                { optionText: "Uses less memory", optionTag: "B" },
                { optionText: "Requires no rehashing", optionTag: "C" },
                { optionText: "Works only on sorted data", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following keys will collide if a bad hash function is used?",
            options: [
                { optionText: "Different keys with same ASCII sum", optionTag: "A" },
                { optionText: "Identical strings", optionTag: "B" },
                { optionText: "Different numbers", optionTag: "C" },
                { optionText: "Booleans and null", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation is slowest in a hash table with many collisions?",
            options: [
                { optionText: "Search", optionTag: "A" },
                { optionText: "Insert", optionTag: "B" },
                { optionText: "Delete", optionTag: "C" },
                { optionText: "Hashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main disadvantage of open addressing?",
            options: [
                { optionText: "Degraded performance with high load", optionTag: "A" },
                { optionText: "Excess memory usage", optionTag: "B" },
                { optionText: "Too many pointers", optionTag: "C" },
                { optionText: "Inability to use strings", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which collision resolution technique stores all values in the same index?",
            options: [
                { optionText: "Chaining", optionTag: "A" },
                { optionText: "Linear probing", optionTag: "B" },
                { optionText: "Quadratic probing", optionTag: "C" },
                { optionText: "Double hashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript class is built for key-value pairs with preserved insertion order?",
            options: [
                { optionText: "Map", optionTag: "A" },
                { optionText: "Set", optionTag: "B" },
                { optionText: "Object", optionTag: "C" },
                { optionText: "Array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does JavaScript `Map` handle object keys?",
            options: [
                { optionText: "Uses reference equality", optionTag: "A" },
                { optionText: "Uses deep comparison", optionTag: "B" },
                { optionText: "Converts to string", optionTag: "C" },
                { optionText: "Sorts keys internally", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which type of data is not suitable as a key in plain JavaScript objects?",
            options: [
                { optionText: "Objects (reference type)", optionTag: "A" },
                { optionText: "Strings", optionTag: "B" },
                { optionText: "Numbers", optionTag: "C" },
                { optionText: "Symbols", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is rehashing in a hash table?",
            options: [
                { optionText: "Recomputing hash codes after resizing", optionTag: "A" },
                { optionText: "Deleting duplicate keys", optionTag: "B" },
                { optionText: "Sorting keys by frequency", optionTag: "C" },
                { optionText: "Compressing memory", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
