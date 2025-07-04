import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Hash Tables - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz tests your basic understanding of hash tables in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "HashTables"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a hash table?",
            options: [
                { optionText: "A data structure that maps keys to values", optionTag: "A" },
                { optionText: "A stack implementation", optionTag: "B" },
                { optionText: "A sorted array", optionTag: "C" },
                { optionText: "A type of tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript object is commonly used to implement hash tables?",
            options: [
                { optionText: "Object", optionTag: "A" },
                { optionText: "Array", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a collision in hash tables?",
            options: [
                { optionText: "Two keys hash to the same index", optionTag: "A" },
                { optionText: "Key is not found", optionTag: "B" },
                { optionText: "Incorrect mapping", optionTag: "C" },
                { optionText: "Memory overflow", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What method is used to access a value in a hash table (object) in JS?",
            options: [
                { optionText: "obj[key]", optionTag: "A" },
                { optionText: "obj.get(key)", optionTag: "B" },
                { optionText: "obj.find(key)", optionTag: "C" },
                { optionText: "obj.indexOf(key)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following handles collisions?",
            options: [
                { optionText: "Chaining", optionTag: "A" },
                { optionText: "Sorting", optionTag: "B" },
                { optionText: "Filtering", optionTag: "C" },
                { optionText: "Mapping", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which built-in JavaScript object can store keys of any type?",
            options: [
                { optionText: "Map", optionTag: "A" },
                { optionText: "Array", optionTag: "B" },
                { optionText: "Object", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you delete a key-value pair in a JS object?",
            options: [
                { optionText: "delete obj[key]", optionTag: "A" },
                { optionText: "obj.remove(key)", optionTag: "B" },
                { optionText: "obj.pop(key)", optionTag: "C" },
                { optionText: "obj.clear(key)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of accessing a value in a hash table?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which object method returns an array of a hash table's keys?",
            options: [
                { optionText: "Object.keys()", optionTag: "A" },
                { optionText: "Object.entries()", optionTag: "B" },
                { optionText: "Object.values()", optionTag: "C" },
                { optionText: "Object.get()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which structure provides ordered key-value pairs?",
            options: [
                { optionText: "Map", optionTag: "A" },
                { optionText: "Object", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which loop is best to iterate over all keys in a JS object?",
            options: [
                { optionText: "for...in", optionTag: "A" },
                { optionText: "for...of", optionTag: "B" },
                { optionText: "while", optionTag: "C" },
                { optionText: "foreach", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does `Object.entries(obj)` return?",
            options: [
                { optionText: "An array of [key, value] pairs", optionTag: "A" },
                { optionText: "A Map", optionTag: "B" },
                { optionText: "Just the keys", optionTag: "C" },
                { optionText: "Just the values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about Map vs Object?",
            options: [
                { optionText: "Map preserves insertion order, Object doesn't", optionTag: "A" },
                { optionText: "Object is more efficient always", optionTag: "B" },
                { optionText: "Map doesn't support all key types", optionTag: "C" },
                { optionText: "Object keys are always in order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the default key type for JavaScript objects?",
            options: [
                { optionText: "String", optionTag: "A" },
                { optionText: "Number", optionTag: "B" },
                { optionText: "Boolean", optionTag: "C" },
                { optionText: "Object", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure allows duplicate keys?",
            options: [
                { optionText: "None of the above", optionTag: "A" },
                { optionText: "Map", optionTag: "B" },
                { optionText: "Object", optionTag: "C" },
                { optionText: "Array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which structure supports iteration over values directly?",
            options: [
                { optionText: "Map", optionTag: "A" },
                { optionText: "Object", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you check if a key exists in a JS object?",
            options: [
                { optionText: "key in obj", optionTag: "A" },
                { optionText: "obj.has(key)", optionTag: "B" },
                { optionText: "obj.find(key)", optionTag: "C" },
                { optionText: "obj.exists(key)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you clear all entries from a JavaScript Map?",
            options: [
                { optionText: "map.clear()", optionTag: "A" },
                { optionText: "map = {}", optionTag: "B" },
                { optionText: "delete map", optionTag: "C" },
                { optionText: "map.removeAll()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which built-in JavaScript class provides O(1) average lookup time?",
            options: [
                { optionText: "Map", optionTag: "A" },
                { optionText: "Array", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "String", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main advantage of hash tables?",
            options: [
                { optionText: "Fast lookup and insertion", optionTag: "A" },
                { optionText: "Sorted data", optionTag: "B" },
                { optionText: "Low memory usage", optionTag: "C" },
                { optionText: "Recursive structure", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
