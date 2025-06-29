import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Strings - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "java",
    description: "This quiz tests your intermediate knowledge of strings in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Strings"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which class is used to create immutable strings in Java?",
            options: [
                { optionText: "String", optionTag: "A" },
                { optionText: "StringBuilder", optionTag: "B" },
                { optionText: "StringBuffer", optionTag: "C" },
                { optionText: "StringArray", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to find the length of a string in Java?",
            options: [
                { optionText: "size()", optionTag: "A" },
                { optionText: "length()", optionTag: "B" },
                { optionText: "getLength()", optionTag: "C" },
                { optionText: "count()", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which method compares two strings for equality, ignoring case?",
            options: [
                { optionText: "compareTo()", optionTag: "A" },
                { optionText: "equals()", optionTag: "B" },
                { optionText: "equalsIgnoreCase()", optionTag: "C" },
                { optionText: "compareToIgnoreCase()", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which method is used to extract a substring from a string?",
            options: [
                { optionText: "split()", optionTag: "A" },
                { optionText: "substring()", optionTag: "B" },
                { optionText: "extract()", optionTag: "C" },
                { optionText: "slice()", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which class is preferred for mutable strings in Java?",
            options: [
                { optionText: "String", optionTag: "A" },
                { optionText: "StringBuilder", optionTag: "B" },
                { optionText: "StringBuffer", optionTag: "C" },
                { optionText: "StringArray", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What does the indexOf() method return if the substring is not found?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "-1", optionTag: "B" },
                { optionText: "null", optionTag: "C" },
                { optionText: "Throws exception", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which method checks if a string starts with a specified prefix?",
            options: [
                { optionText: "startsWith()", optionTag: "A" },
                { optionText: "beginWith()", optionTag: "B" },
                { optionText: "hasPrefix()", optionTag: "C" },
                { optionText: "checkPrefix()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to convert all characters in a string to lowercase?",
            options: [
                { optionText: "toLower()", optionTag: "A" },
                { optionText: "toLowerCase()", optionTag: "B" },
                { optionText: "lower()", optionTag: "C" },
                { optionText: "convertLower()", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What will be the output of 'Java'.charAt(2)?",
            options: [
                { optionText: "v", optionTag: "A" },
                { optionText: "a", optionTag: "B" },
                { optionText: "J", optionTag: "C" },
                { optionText: "IndexOutOfBoundsException", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method removes whitespace from both ends of a string?",
            options: [
                { optionText: "strip()", optionTag: "A" },
                { optionText: "trim()", optionTag: "B" },
                { optionText: "clean()", optionTag: "C" },
                { optionText: "deleteSpace()", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which method splits a string into an array of substrings?",
            options: [
                { optionText: "divide()", optionTag: "A" },
                { optionText: "split()", optionTag: "B" },
                { optionText: "break()", optionTag: "C" },
                { optionText: "partition()", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which operator is used for string concatenation in Java?",
            options: [
                { optionText: "+", optionTag: "A" },
                { optionText: "&", optionTag: "B" },
                { optionText: "*", optionTag: "C" },
                { optionText: "%", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method checks if a string contains a specific sequence of characters?",
            options: [
                { optionText: "has()", optionTag: "A" },
                { optionText: "contains()", optionTag: "B" },
                { optionText: "includes()", optionTag: "C" },
                { optionText: "check()", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which method returns a new string with replaced characters?",
            options: [
                { optionText: "replace()", optionTag: "A" },
                { optionText: "change()", optionTag: "B" },
                { optionText: "swap()", optionTag: "C" },
                { optionText: "convert()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the result of comparing two string references with '=='?",
            options: [
                { optionText: "Checks content", optionTag: "A" },
                { optionText: "Checks memory reference", optionTag: "B" },
                { optionText: "Always returns true", optionTag: "C" },
                { optionText: "Always returns false", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which method is preferred to compare string contents?",
            options: [
                { optionText: "==", optionTag: "A" },
                { optionText: "equals()", optionTag: "B" },
                { optionText: "compareTo()", optionTag: "C" },
                { optionText: "compare()", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is the output of 'Java'.substring(1, 3)?",
            options: [
                { optionText: "Ja", optionTag: "A" },
                { optionText: "av", optionTag: "B" },
                { optionText: "va", optionTag: "C" },
                { optionText: "Jav", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which class is thread-safe for string modification?",
            options: [
                { optionText: "String", optionTag: "A" },
                { optionText: "StringBuilder", optionTag: "B" },
                { optionText: "StringBuffer", optionTag: "C" },
                { optionText: "StringArray", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which method converts primitive types to string in Java?",
            options: [
                { optionText: "String.toString()", optionTag: "A" },
                { optionText: "String.valueOf()", optionTag: "B" },
                { optionText: "String.convert()", optionTag: "C" },
                { optionText: "String.toPrimitive()", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which string method is used to check if the string ends with a specified suffix?",
            options: [
                { optionText: "endsWith()", optionTag: "A" },
                { optionText: "finishesWith()", optionTag: "B" },
                { optionText: "suffix()", optionTag: "C" },
                { optionText: "checkEnd()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
