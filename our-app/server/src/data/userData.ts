import mongoose from "mongoose";

const sampleUsers = [
    {
        name: "User 1",
        email: "user1@example.com",
        password: "password123",
        role: "admin" as const,
        lang: "java",
        quizzes: [
            {
                quizId: new mongoose.Types.ObjectId("507f1f77bcf86cd799439011"),
                userScore: 8,
                userAnswers: ["A", "C", "B", "D", "A"]
            },
            {
                quizId: new mongoose.Types.ObjectId("507f1f77bcf86cd799439012"),
                userScore: 6,
                userAnswers: ["B", "A", "C", "D", "B", "A"]
            }
        ],
        customQuizzes: [
            {
                quizId: new mongoose.Types.ObjectId("507f1f77bcf86cd799439021"),
                userScore: 9,
                userAnswers: ["C", "D", "A", "B", "C"]
            }
        ],
        courses: [
            {
                courseId: new mongoose.Types.ObjectId("607f1f77bcf86cd799439011"),
                courseName: "Arrays",
                status: "completed" as const,
                result: 92
            },
            {
                courseId: new mongoose.Types.ObjectId("607f1f77bcf86cd799439012"),
                courseName: "Linked Lists",
                status: "in-progress" as const,
                result: 65
            }
        ]
    },
    {
        name: "User 2",
        email: "user2@example.com",
        password: "password123",
        role: "user" as const,
        lang: "cpp",
        quizzes: [
            {
                quizId: new mongoose.Types.ObjectId("507f1f77bcf86cd799439013"),
                userScore: 7,
                userAnswers: ["D", "B", "A", "C", "D"]
            }
        ],
        customQuizzes: [],
        courses: [
            {
                courseId: new mongoose.Types.ObjectId("607f1f77bcf86cd799439013"),
                courseName: "Recursion",
                status: "enrolled" as const,
                result: 0
            }
        ]
    },
    {
        name: "User 20",
        email: "user20@example.com",
        password: "password123",
        role: "user" as const,
        lang: "python",
        quizzes: [],
        customQuizzes: [
            {
                quizId: new mongoose.Types.ObjectId("507f1f77bcf86cd799439038"),
                userScore: 10,
                userAnswers: ["A", "B", "C", "D", "A", "B", "C", "D"]
            }
        ],
        courses: [
            {
                courseId: new mongoose.Types.ObjectId("607f1f77bcf86cd799439020"),
                courseName: "Stacks",
                status: "completed" as const,
                result: 88
            },
            {
                courseId: new mongoose.Types.ObjectId("607f1f77bcf86cd799439021"),
                courseName: "Queues",
                status: "completed" as const,
                result: 95
            }
        ]
    }
];

export { sampleUsers as usersData };
export default sampleUsers;