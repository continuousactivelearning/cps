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
    },
    {
        name: "User 3",
        email: "user3@example.com",
        password: "password123",
        role: "user" as const,
        lang: "javascript",
        quizzes: [],
        customQuizzes: [],
        courses: [] // No courses completed yet
    },
    {
        name: "User 4",
        email: "user4@example.com",
        password: "password123",
        role: "user" as const,
        lang: "java",
        quizzes: [],
        customQuizzes: [],
        courses: [
            {
                courseId: new mongoose.Types.ObjectId("607f1f77bcf86cd799439022"),
                courseName: "Arrays",
                status: "completed" as const,
                result: 95
            },
            {
                courseId: new mongoose.Types.ObjectId("607f1f77bcf86cd799439023"),
                courseName: "Strings",
                status: "completed" as const,
                result: 91
            }
        ]
    },
    {
        name: "User 5",
        email: "user5@example.com",
        password: "password123",
        role: "user" as const,
        lang: "python",
        quizzes: [],
        customQuizzes: [],
        courses: [
            {
                courseId: new mongoose.Types.ObjectId("607f1f77bcf86cd799439024"),
                courseName: "Recursion",
                status: "completed" as const,
                result: 89
            },
            {
                courseId: new mongoose.Types.ObjectId("607f1f77bcf86cd799439025"),
                courseName: "Queues",
                status: "completed" as const,
                result: 92
            }
        ]
    },
    {
        name: "User 6 (Beginner+)",
        email: "user6@example.com",
        password: "password123",
        role: "user" as const,
        lang: "javascript",
        quizzes: [],
        customQuizzes: [],
        courses: [
            { courseId: new mongoose.Types.ObjectId(), courseName: "Arrays", status: "completed" as const, result: 98 },
            { courseId: new mongoose.Types.ObjectId(), courseName: "Strings", status: "completed" as const, result: 91 },
            { courseId: new mongoose.Types.ObjectId(), courseName: "Pointers", status: "completed" as const, result: 85 },
            { courseId: new mongoose.Types.ObjectId(), courseName: "Linked Lists", status: "in-progress" as const, result: 70 }
        ]
    },
    {
        name: "User 7 (Intermediate)",
        email: "user7@example.com",
        password: "password123",
        role: "user" as const,
        lang: "java",
        quizzes: [],
        customQuizzes: [],
        courses: [
            { courseId: new mongoose.Types.ObjectId(), courseName: "Arrays", status: "completed" as const, result: 100 },
            { courseId: new mongoose.Types.ObjectId(), courseName: "Recursion", status: "completed" as const, result: 94 },
            { courseId: new mongoose.Types.ObjectId(), courseName: "Trees", status: "completed" as const, result: 91 },
            { courseId: new mongoose.Types.ObjectId(), courseName: "Sorting Algorithms", status: "completed" as const, result: 88 },
            { courseId: new mongoose.Types.ObjectId(), courseName: "Graphs", status: "in-progress" as const, result: 65 }
        ]
    },
    {
        name: "User 8 (Advanced)",
        email: "user8@example.com",
        password: "password123",
        role: "user" as const,
        lang: "python",
        quizzes: [],
        customQuizzes: [],
        courses: [
            { courseId: new mongoose.Types.ObjectId(), courseName: "Arrays", status: "completed" as const, result: 100 },
            { courseId: new mongoose.Types.ObjectId(), courseName: "Recursion", status: "completed" as const, result: 100 },
            { courseId: new mongoose.Types.ObjectId(), courseName: "Trees", status: "completed" as const, result: 95 },
            { courseId: new mongoose.Types.ObjectId(), courseName: "Graphs", status: "completed" as const, result: 92 },
            { courseId: new mongoose.Types.ObjectId(), courseName: "Sorting Algorithms", status: "completed" as const, result: 91 },
            { courseId: new mongoose.Types.ObjectId(), courseName: "Dynamic Programming", status: "in-progress" as const, result: 75 }
        ]
    },
    {
        name: "User 9 (Mixed Progress)",
        email: "user9@example.com",
        password: "password123",
        role: "user" as const,
        lang: "javascript",
        quizzes: [],
        customQuizzes: [],
        courses: [
            { courseId: new mongoose.Types.ObjectId(), courseName: "Arrays", status: "completed" as const, result: 90 },
            { courseId: new mongoose.Types.ObjectId(), courseName: "Strings", status: "completed" as const, result: 88 },
            { courseId: new mongoose.Types.ObjectId(), courseName: "Stacks", status: "in-progress" as const, result: 55 },
            { courseId: new mongoose.Types.ObjectId(), courseName: "Queues", status: "enrolled" as const, result: 0 }
        ]
    },
    {
        name: "User 10 (Newbie)",
        email: "user10@example.com",
        password: "password123",
        role: "user" as const,
        lang: "cpp",
        quizzes: [],
        customQuizzes: [],
        courses: []
    }
];

export { sampleUsers as usersData };
export default sampleUsers;