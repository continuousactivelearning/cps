import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Red-Black Trees - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz tests your advanced understanding of Red-Black Trees in JavaScript, including insertion, deletion, balancing, and properties of the data structure.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "RedBlackTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the maximum height of a red-black tree with n nodes?",
            options: [
                { optionText: "2 * log₂(n + 1)", optionTag: "A" },
                { optionText: "log₂(n)", optionTag: "B" },
                { optionText: "n", optionTag: "C" },
                { optionText: "log₂(n) / 2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a property of a red-black tree?",
            options: [
                { optionText: "No two red nodes can be adjacent", optionTag: "A" },
                { optionText: "Every path from root to leaf contains the same number of black nodes", optionTag: "B" },
                { optionText: "The root node is always red", optionTag: "C" },
                { optionText: "Every leaf (NIL) is black", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What color is the root node of a red-black tree after insertion and rebalancing?",
            options: [
                { optionText: "Always black", optionTag: "A" },
                { optionText: "Always red", optionTag: "B" },
                { optionText: "Depends on the inserted node", optionTag: "C" },
                { optionText: "Alternates between red and black", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation in a red-black tree helps restore properties after insertion?",
            options: [
                { optionText: "Recoloring and rotations", optionTag: "A" },
                { optionText: "Rebalancing only", optionTag: "B" },
                { optionText: "Node deletion", optionTag: "C" },
                { optionText: "Tree traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In red-black trees, what is the black-height of a node?",
            options: [
                { optionText: "Number of black nodes from that node to any leaf (excluding the node itself)", optionTag: "A" },
                { optionText: "Number of red nodes from that node to any leaf", optionTag: "B" },
                { optionText: "Height of the node", optionTag: "C" },
                { optionText: "Number of children", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following cases can require a rotation during insertion in a red-black tree?",
            options: [
                { optionText: "Red uncle with red parent", optionTag: "A" },
                { optionText: "Black uncle with red parent", optionTag: "B" },
                { optionText: "Black uncle with black parent", optionTag: "C" },
                { optionText: "No uncle node", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "How many colors can nodes in a red-black tree have?",
            options: [
                { optionText: "Two (Red or Black)", optionTag: "A" },
                { optionText: "Three", optionTag: "B" },
                { optionText: "Only Black", optionTag: "C" },
                { optionText: "Unlimited", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the color of leaf nodes (NIL nodes) in a red-black tree?",
            options: [
                { optionText: "Black", optionTag: "A" },
                { optionText: "Red", optionTag: "B" },
                { optionText: "Depends on parent", optionTag: "C" },
                { optionText: "White", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the purpose of rotations in a red-black tree?",
            options: [
                { optionText: "To maintain binary search tree property and balance", optionTag: "A" },
                { optionText: "To delete nodes", optionTag: "B" },
                { optionText: "To change node colors", optionTag: "C" },
                { optionText: "To traverse the tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "During insertion, what happens if the newly inserted node's uncle is red?",
            options: [
                { optionText: "Recolor parent, uncle, and grandparent", optionTag: "A" },
                { optionText: "Perform rotations immediately", optionTag: "B" },
                { optionText: "Delete the uncle node", optionTag: "C" },
                { optionText: "Do nothing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which rotation types are used in red-black tree balancing?",
            options: [
                { optionText: "Left rotation and right rotation", optionTag: "A" },
                { optionText: "Up rotation and down rotation", optionTag: "B" },
                { optionText: "Clockwise and counter-clockwise", optionTag: "C" },
                { optionText: "Diagonal rotation only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does a red-black tree guarantee O(log n) time complexity for search operations?",
            options: [
                { optionText: "By maintaining a balanced tree with limited height", optionTag: "A" },
                { optionText: "By storing elements in an array", optionTag: "B" },
                { optionText: "By using hashing internally", optionTag: "C" },
                { optionText: "By caching nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What color is a newly inserted node initially in a red-black tree?",
            options: [
                { optionText: "Red", optionTag: "A" },
                { optionText: "Black", optionTag: "B" },
                { optionText: "Depends on parent's color", optionTag: "C" },
                { optionText: "Green", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property of red-black trees ensures no path is more than twice as long as any other?",
            options: [
                { optionText: "Black-height property", optionTag: "A" },
                { optionText: "Root color property", optionTag: "B" },
                { optionText: "Red parent property", optionTag: "C" },
                { optionText: "Leaf color property", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is a common use case for red-black trees?",
            options: [
                { optionText: "Implementing balanced search trees in libraries", optionTag: "A" },
                { optionText: "Implementing stacks", optionTag: "B" },
                { optionText: "Sorting arrays", optionTag: "C" },
                { optionText: "Hashing keys", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about red-black tree deletion?",
            options: [
                { optionText: "Deletion is followed by rebalancing using rotations and recoloring", optionTag: "A" },
                { optionText: "Deletion does not require any rebalancing", optionTag: "B" },
                { optionText: "Deletion is always O(n)", optionTag: "C" },
                { optionText: "Deletion causes tree to become unbalanced permanently", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the term 'double black' mean in red-black tree deletion?",
            options: [
                { optionText: "Temporary extra blackness on a node to fix violations", optionTag: "A" },
                { optionText: "Node colored both red and black", optionTag: "B" },
                { optionText: "Node is missing", optionTag: "C" },
                { optionText: "A red node with two black children", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if a red node has a red child in a red-black tree?",
            options: [
                { optionText: "It violates the red-black tree properties and requires fixing", optionTag: "A" },
                { optionText: "It is allowed", optionTag: "B" },
                { optionText: "It improves balance", optionTag: "C" },
                { optionText: "It causes deletion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method can be used to represent NIL leaves in red-black tree implementations?",
            options: [
                { optionText: "Singleton black sentinel nodes", optionTag: "A" },
                { optionText: "Null pointers", optionTag: "B" },
                { optionText: "Undefined nodes", optionTag: "C" },
                { optionText: "Red leaves", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the color flip operation in red-black trees?",
            options: [
                { optionText: "Recoloring a black parent and its two red children", optionTag: "A" },
                { optionText: "Rotating nodes", optionTag: "B" },
                { optionText: "Deleting a red node", optionTag: "C" },
                { optionText: "Swapping two nodes' positions", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
