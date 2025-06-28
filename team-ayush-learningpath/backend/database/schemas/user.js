// Import ObjectId from MongoDB
const { ObjectId } = require("mongodb")

// User Collection Schema
const userSchema = {
  _id: ObjectId,
  email: String, // unique, required
  password: String, // hashed, required
  profile: {
    firstName: String,
    lastName: String,
    displayName: String,
    avatar: String, // URL to profile image
    bio: String,
    location: String,
    timezone: String,
    language: String, // default: "en"
    dateOfBirth: Date,
    phone: String,
    website: String,
    socialLinks: {
      github: String,
      linkedin: String,
      twitter: String,
    },
  },
  subscription: {
    plan: String, // "free", "premium", "enterprise"
    status: String, // "active", "cancelled", "expired", "trial"
    startDate: Date,
    endDate: Date,
    autoRenew: Boolean,
    paymentMethod: String,
    billingCycle: String, // "monthly", "yearly"
  },
  preferences: {
    notifications: {
      email: Boolean,
      push: Boolean,
      courseReminders: Boolean,
      achievements: Boolean,
      weeklyReports: Boolean,
    },
    learning: {
      difficultyPreference: String, // "beginner", "intermediate", "advanced", "adaptive"
      dailyGoal: Number, // minutes per day
      preferredLanguages: [String], // programming languages
      studyReminders: {
        enabled: Boolean,
        time: String, // "09:00"
        days: [String], // ["monday", "tuesday", ...]
      },
    },
    privacy: {
      profileVisibility: String, // "public", "private"
      showProgress: Boolean,
      showAchievements: Boolean,
    },
  },
  stats: {
    totalStudyTime: Number, // in minutes
    coursesCompleted: Number,
    coursesEnrolled: Number,
    conceptsMastered: Number,
    problemsSolved: Number,
    quizzesCompleted: Number,
    currentStreak: Number, // days
    longestStreak: Number, // days
    lastActiveDate: Date,
    joinDate: Date,
    level: Number,
    experiencePoints: Number,
  },
  achievements: [
    {
      achievementId: ObjectId,
      unlockedAt: Date,
      progress: Number, // for progressive achievements
    },
  ],
  learningPaths: [
    {
      pathId: ObjectId,
      status: String, // "active", "completed", "paused"
      progress: Number, // percentage
      startedAt: Date,
      completedAt: Date,
      customPath: Boolean,
      aiGenerated: Boolean,
    },
  ],
  enrollments: [
    {
      courseId: ObjectId,
      enrolledAt: Date,
      progress: Number, // percentage
      lastAccessedAt: Date,
      completedAt: Date,
      certificateIssued: Boolean,
      rating: Number, // 1-5 stars
      review: String,
    },
  ],
  createdAt: Date,
  updatedAt: Date,
  lastLoginAt: Date,
  isActive: Boolean,
  emailVerified: Boolean,
  role: String, // "student", "instructor", "admin"
}

// Declare db variable
const db = require("./yourDatabaseConnection") // Replace with actual database connection import

// Indexes
db.users.createIndex({ email: 1 }, { unique: true })
db.users.createIndex({ "profile.displayName": 1 })
db.users.createIndex({ "subscription.status": 1 })
db.users.createIndex({ createdAt: -1 })
db.users.createIndex({ lastLoginAt: -1 })
