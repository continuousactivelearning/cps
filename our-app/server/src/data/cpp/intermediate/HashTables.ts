import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Hash Tables - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz tests your intermediate understanding of Hash Tables in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "HashTables"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the average time complexity for insertion in a hash table?",
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
            questionText: "Which STL container implements hash tables in C++?",
            options: [
                { optionText: "unordered_map", optionTag: "A" },
                { optionText: "map", optionTag: "B" },
                { optionText: "vector", optionTag: "C" },
                { optionText: "set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which collision resolution strategy involves probing?",
            options: [
                { optionText: "Open addressing", optionTag: "A" },
                { optionText: "Separate chaining", optionTag: "B" },
                { optionText: "Rehashing", optionTag: "C" },
                { optionText: "Hash doubling", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the purpose of a hash function?",
            options: [
                { optionText: "To convert keys into array indices", optionTag: "A" },
                { optionText: "To compare two strings", optionTag: "B" },
                { optionText: "To reverse the data", optionTag: "C" },
                { optionText: "To encrypt keys", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these methods is **not** a collision resolution technique?",
            options: [
                { optionText: "Linear probing", optionTag: "A" },
                { optionText: "Binary search", optionTag: "B" },
                { optionText: "Separate chaining", optionTag: "C" },
                { optionText: "Quadratic probing", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is a primary cause of hash collisions?",
            options: [
                { optionText: "Different keys producing the same hash", optionTag: "A" },
                { optionText: "Incorrect hash table size", optionTag: "B" },
                { optionText: "Too many NULL values", optionTag: "C" },
                { optionText: "Index out of bounds", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ header file is required to use `unordered_map`?",
            options: [
                { optionText: "<unordered_map>", optionTag: "A" },
                { optionText: "<map>", optionTag: "B" },
                { optionText: "<hash>", optionTag: "C" },
                { optionText: "<vector>", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity for searching in a hash table?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which hash table technique is more memory efficient?",
            options: [
                { optionText: "Open addressing", optionTag: "A" },
                { optionText: "Separate chaining", optionTag: "B" },
                { optionText: "BST-based mapping", optionTag: "C" },
                { optionText: "Matrix hashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function gives you the number of elements in an `unordered_map`?",
            options: [
                { optionText: "size()", optionTag: "A" },
                { optionText: "count()", optionTag: "B" },
                { optionText: "length()", optionTag: "C" },
                { optionText: "getSize()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Rehashing typically occurs when:",
            options: [
                { optionText: "The load factor exceeds a threshold", optionTag: "A" },
                { optionText: "The table is empty", optionTag: "B" },
                { optionText: "The key is invalid", optionTag: "C" },
                { optionText: "Collision is detected", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a good property for a hash function?",
            options: [
                { optionText: "Uniform distribution", optionTag: "A" },
                { optionText: "All keys map to 0", optionTag: "B" },
                { optionText: "Maps same input to different outputs", optionTag: "C" },
                { optionText: "Ignores input variations", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In C++, what does `unordered_map::find(key)` return if key is not found?",
            options: [
                { optionText: "end()", optionTag: "A" },
                { optionText: "NULL", optionTag: "B" },
                { optionText: "Throws exception", optionTag: "C" },
                { optionText: "-1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "The load factor in a hash table is defined as:",
            options: [
                { optionText: "Number of elements / Table size", optionTag: "A" },
                { optionText: "Table size / Number of elements", optionTag: "B" },
                { optionText: "Table size", optionTag: "C" },
                { optionText: "Number of collisions", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which type of hashing is most prone to primary clustering?",
            options: [
                { optionText: "Linear probing", optionTag: "A" },
                { optionText: "Separate chaining", optionTag: "B" },
                { optionText: "Quadratic probing", optionTag: "C" },
                { optionText: "Double hashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which STL function removes all entries from an unordered_map?",
            options: [
                { optionText: "clear()", optionTag: "A" },
                { optionText: "deleteAll()", optionTag: "B" },
                { optionText: "remove()", optionTag: "C" },
                { optionText: "flush()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when two keys hash to the same index?",
            options: [
                { optionText: "A collision occurs", optionTag: "A" },
                { optionText: "Index is overwritten", optionTag: "B" },
                { optionText: "Hash function changes", optionTag: "C" },
                { optionText: "Key is discarded", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following best avoids clustering?",
            options: [
                { optionText: "Double hashing", optionTag: "A" },
                { optionText: "Linear probing", optionTag: "B" },
                { optionText: "Quadratic probing", optionTag: "C" },
                { optionText: "Fixed hashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to access the value for a key in unordered_map?",
            options: [
                { optionText: "operator[]", optionTag: "A" },
                { optionText: "get()", optionTag: "B" },
                { optionText: "retrieve()", optionTag: "C" },
                { optionText: "access()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In C++, how is key duplication handled in unordered_map?",
            options: [
                { optionText: "New value overwrites old one", optionTag: "A" },
                { optionText: "Both values are stored", optionTag: "B" },
                { optionText: "Compiler error", optionTag: "C" },
                { optionText: "Exception is thrown", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
