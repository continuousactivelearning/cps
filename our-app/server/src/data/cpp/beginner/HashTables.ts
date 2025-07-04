import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Hash Tables - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic knowledge of Hash Tables in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "HashTables"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which C++ STL container implements a hash table?",
            options: [
                { optionText: "unordered_map", optionTag: "A" },
                { optionText: "map", optionTag: "B" },
                { optionText: "set", optionTag: "C" },
                { optionText: "vector", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the average time complexity of searching in a hash table?",
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
            questionText: "Which STL header is required for using unordered_map?",
            options: [
                { optionText: "<unordered_map>", optionTag: "A" },
                { optionText: "<map>", optionTag: "B" },
                { optionText: "<hash_map>", optionTag: "C" },
                { optionText: "<set>", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does a hash function do?",
            options: [
                { optionText: "Maps a key to an index", optionTag: "A" },
                { optionText: "Sorts the keys", optionTag: "B" },
                { optionText: "Generates random numbers", optionTag: "C" },
                { optionText: "Converts values to keys", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which collision resolution technique does unordered_map use internally?",
            options: [
                { optionText: "Chaining", optionTag: "A" },
                { optionText: "Open addressing", optionTag: "B" },
                { optionText: "Linear probing", optionTag: "C" },
                { optionText: "Double hashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function is used to insert a key-value pair into unordered_map?",
            options: [
                { optionText: "insert()", optionTag: "A" },
                { optionText: "push()", optionTag: "B" },
                { optionText: "add()", optionTag: "C" },
                { optionText: "append()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you access the value associated with a key in unordered_map?",
            options: [
                { optionText: "map[key]", optionTag: "A" },
                { optionText: "map.at(key)", optionTag: "B" },
                { optionText: "Both A and B", optionTag: "C" },
                { optionText: "map.get(key)", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which method checks if a key exists in an unordered_map?",
            options: [
                { optionText: "count(key)", optionTag: "A" },
                { optionText: "find(key)", optionTag: "B" },
                { optionText: "contains(key)", optionTag: "C" },
                { optionText: "Both A and B", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What is a common drawback of hash tables?",
            options: [
                { optionText: "Hash collisions", optionTag: "A" },
                { optionText: "Slow performance", optionTag: "B" },
                { optionText: "Sorted keys", optionTag: "C" },
                { optionText: "Fixed size", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following cannot be used as a key in unordered_map by default?",
            options: [
                { optionText: "Custom class without hash function", optionTag: "A" },
                { optionText: "int", optionTag: "B" },
                { optionText: "string", optionTag: "C" },
                { optionText: "char", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which member function removes all elements from an unordered_map?",
            options: [
                { optionText: "clear()", optionTag: "A" },
                { optionText: "erase_all()", optionTag: "B" },
                { optionText: "remove()", optionTag: "C" },
                { optionText: "reset()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function returns the number of elements with a given key?",
            options: [
                { optionText: "count()", optionTag: "A" },
                { optionText: "size()", optionTag: "B" },
                { optionText: "exists()", optionTag: "C" },
                { optionText: "length()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity for search in hash tables?",
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
            questionText: "How can collisions be minimized?",
            options: [
                { optionText: "Use a good hash function", optionTag: "A" },
                { optionText: "Use large tables", optionTag: "B" },
                { optionText: "Keep load factor low", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which hash table operation is typically fastest?",
            options: [
                { optionText: "Insert", optionTag: "A" },
                { optionText: "Delete", optionTag: "B" },
                { optionText: "Search", optionTag: "C" },
                { optionText: "All are similar in average case", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What is a load factor in hash tables?",
            options: [
                { optionText: "Ratio of elements to table size", optionTag: "A" },
                { optionText: "Size of hash function", optionTag: "B" },
                { optionText: "Table memory size", optionTag: "C" },
                { optionText: "Number of collisions", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does rehashing affect performance?",
            options: [
                { optionText: "Temporarily slows down", optionTag: "A" },
                { optionText: "Always speeds up", optionTag: "B" },
                { optionText: "Does not affect", optionTag: "C" },
                { optionText: "Causes data loss", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ feature allows custom hash functions?",
            options: [
                { optionText: "Function overloading", optionTag: "A" },
                { optionText: "Function templates", optionTag: "B" },
                { optionText: "Function specialization", optionTag: "C" },
                { optionText: "Function objects (functors)", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which is true about keys in unordered_map?",
            options: [
                { optionText: "Must be unique", optionTag: "A" },
                { optionText: "Can be duplicated", optionTag: "B" },
                { optionText: "Always integers", optionTag: "C" },
                { optionText: "Must be sorted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is returned by find() if key is not found?",
            options: [
                { optionText: "unordered_map::end()", optionTag: "A" },
                { optionText: "nullptr", optionTag: "B" },
                { optionText: "0", optionTag: "C" },
                { optionText: "Null", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
