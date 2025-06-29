# Backend Documentation

## Overview
This document provides comprehensive documentation for the Learning Platform Backend, a Node.js/Express/TypeScript application with MongoDB database. The backend serves as a RESTful API for a learning management system that supports interactive quizzes, course management, and user progress tracking.

## Table of Contents
1. [Architecture](#architecture)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Database Design](#database-design)
5. [API Architecture](#api-architecture)
6. [Authentication & Security](#authentication--security)
7. [Data Models](#data-models)
8. [Controllers](#controllers)
9. [Routes](#routes)
10. [Middleware](#middleware)
11. [Database Operations](#database-operations)
12. [Error Handling](#error-handling)
13. [Development Setup](#development-setup)
14. [Deployment](#deployment)
15. [Performance Optimizations](#performance-optimizations)

---

## Architecture

### System Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend API   │    │   MongoDB       │
│   (Client)      │◄──►│   (Express)     │◄──►│   Database      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │
                              ▼
                       ┌─────────────────┐
                       │   Controllers   │
                       └─────────────────┘
                              │
                              ▼
                       ┌─────────────────┐
                       │   Models        │
                       └─────────────────┘
```

### Application Flow
1. **Request Handling**: Express.js receives HTTP requests
2. **Route Matching**: Routes direct requests to appropriate controllers
3. **Business Logic**: Controllers handle request processing
4. **Data Access**: Models interact with MongoDB database
5. **Response**: JSON responses sent back to client

---

## Technology Stack

### Core Technologies
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: bcryptjs for password hashing

### Development Tools
- **Package Manager**: npm
- **Development Server**: nodemon
- **TypeScript Compiler**: tsc
- **Build Tool**: tsx for development

### Dependencies
```json
{
  "express": "^4.21.2",
  "mongoose": "^8.16.0",
  "bcryptjs": "^2.4.3",
  "cors": "^2.8.5",
  "typescript": "^5.8.3"
}
```

---

## Project Structure

```
server/
├── src/
│   ├── app.ts                 # Express application setup
│   ├── server.ts              # Server entry point
│   ├── controllers/           # Request handlers
│   │   ├── authController.ts
│   │   ├── courseController.ts
│   │   ├── customQuizController.ts
│   │   ├── homeController.ts
│   │   ├── quizController.ts
│   │   ├── userController.ts
│   │   └── userDashboardController.ts
│   ├── models/                # Database models
│   │   ├── Course.ts
│   │   ├── CustomQuiz.ts
│   │   ├── Quiz.ts
│   │   └── User.ts
│   ├── routes/                # API route definitions
│   │   ├── authRoutes.ts
│   │   ├── courseRoutes.ts
│   │   ├── customQuizRoutes.ts
│   │   ├── homeRoutes.ts
│   │   ├── quizRoutes.ts
│   │   └── userRoutes.ts
│   ├── interfaces/            # TypeScript interfaces
│   │   ├── Basic.ts
│   │   └── Document_Interfaces.ts
│   ├── types/                 # Custom type definitions
│   │   └── customTypes.ts
│   ├── data/                  # Static data and seed files
│   │   ├── coursesData.ts
│   │   ├── userData.ts
│   │   └── java/              # Java-specific quiz data
│   └── scripts/               # Database scripts
│       ├── seed.ts
│       ├── seedCourses.ts
│       ├── seedUsers.ts
│       └── deleteAllData.ts
├── package.json
├── tsconfig.node.json
└── API_DOCUMENTATION.md
```

---

## Database Design

### Database: MongoDB
- **Database Name**: `our-app-db`
- **Connection**: MongoDB Atlas or local MongoDB instance
- **ODM**: Mongoose for schema validation and query building

### Collections
1. **users** - User accounts and profiles
2. **courses** - Course catalog and metadata
3. **quizzes** - Standard quiz content
4. **customquizzes** - User-generated custom quizzes

### Schema Design Principles
- **Embedded Documents**: Related data embedded for performance
- **Indexing**: Strategic indexes for common query patterns
- **Validation**: Mongoose schema validation for data integrity
- **Timestamps**: Automatic creation and update timestamps

---

## API Architecture

### RESTful Design
- **Base URL**: `/api`
- **HTTP Methods**: GET, POST, PUT, DELETE
- **Response Format**: JSON
- **Status Codes**: Standard HTTP status codes

### Route Structure
```
/api
├── /login                    # Authentication
├── /signup                   # User registration
├── /home                     # Landing page data
├── /users                    # User management
│   ├── /:id/dashboard        # User dashboard
│   ├── /:id/quiz/:level/*    # Level-based quizzes
│   └── /:id/:lang/:level/:topic/* # Topic-based quizzes
├── /courses                  # Course management
│   ├── /search               # Advanced search
│   ├── /difficulty-range     # Difficulty filtering
│   └── /courseName/:name/*   # Course-specific routes
├── /quizzes                  # Quiz management
│   ├── /search               # Advanced search
│   ├── /lang/:lang/*         # Language-specific routes
│   ├── /level/:level/*       # Level-specific routes
│   └── /topic/:topic/*       # Topic-specific routes
└── /custom-quizzes           # Custom quiz management
```

### Advanced Search Capabilities
- **Full-text Search**: MongoDB text indexes
- **Multi-filter Queries**: Combined filters for precise results
- **Range Queries**: Difficulty level ranges
- **Compound Filters**: Multiple parameter combinations

---

## Authentication & Security

### Password Security
- **Hashing**: bcryptjs with salt rounds (12)
- **Validation**: Server-side password validation
- **Storage**: Hashed passwords only in database

### User Roles
- **user**: Standard user with quiz and course access
- **admin**: Administrative access to all features

### Security Features
- **CORS**: Cross-origin resource sharing enabled
- **Input Validation**: Request body validation
- **Error Handling**: Secure error responses
- **Data Sanitization**: Input sanitization and validation

---

## Data Models

### User Model
```typescript
interface User {
  _id: ObjectId;
  name: string;                    // User's full name
  email: string;                   // Unique email address
  password: string;                // Hashed password
  role: 'user' | 'admin';          // User role
  lang: 'cpp' | 'python' | 'javascript' | 'java'; // Preferred language
  quizzes: QuizInfo[];             // User's quiz history
  customQuizzes: QuizInfo[];       // Custom quiz history
  courses: CourseInfo[];           // Enrolled courses
  createdAt: Date;
  updatedAt: Date;
}
```

### Course Model
```typescript
interface Course {
  _id: ObjectId;
  courseName: string;              // Course title
  description: string;             // Course description
  level: 'beginner' | 'intermediate' | 'advanced'; // Difficulty
  prerequisites: string[];         // Required prerequisites
  createdAt: Date;
  updatedAt: Date;
}
```

### Quiz Model
```typescript
interface Quiz {
  _id: ObjectId;
  title: string;                   // Quiz title
  quizLevel: 'beginner' | 'intermediate' | 'advanced';
  lang: 'cpp' | 'python' | 'javascript' | 'java';
  description?: string;            // Optional description
  topic: {
    courseID: ObjectId;            // Related course
    courseName: string;            // Course name
  };
  questions: Question[];           // Quiz questions
  quizScore: number;               // Total possible score
  createdAt: Date;
  updatedAt: Date;
}
```

### Custom Quiz Model
```typescript
interface CustomQuiz {
  _id: ObjectId;
  title: string;                   // Quiz title
  description?: string;            // Optional description
  lang: 'cpp' | 'python' | 'javascript' | 'java';
  quizLevel: 'beginner' | 'intermediate' | 'advanced';
  customQuestions: CustomQuestion[]; // Custom questions
  quizScore: number;               // Total possible score
  createdAt: Date;
  updatedAt: Date;
}
```

---

## Controllers

### Authentication Controller
- **login()**: User authentication with email/password
- **signup()**: New user registration with password hashing

### User Controller
- **CRUD Operations**: Create, read, update, delete users
- **User Management**: Profile management and user data

### User Dashboard Controller
- **getUserDashboard()**: User progress and statistics
- **getQuestions()**: Retrieve quiz questions
- **submitAnswers()**: Process quiz submissions
- **reviewQuiz()**: Quiz review and feedback
- **createAssessment()**: Personalized assessments

### Course Controller
- **CRUD Operations**: Course management
- **Advanced Search**: Multi-parameter course search
- **Filtering**: Level, prerequisite, and name-based filtering
- **Debug Endpoints**: Database state verification

### Quiz Controller
- **CRUD Operations**: Quiz management
- **Advanced Search**: Multi-parameter quiz search
- **Filtering**: Language, level, and topic-based filtering
- **Debug Endpoints**: Database state verification

### Custom Quiz Controller
- **CRUD Operations**: Custom quiz management
- **User-generated Content**: Custom quiz creation and management

---

## Routes

### Route Organization
Routes are organized by resource type and follow RESTful conventions:

1. **Authentication Routes** (`/api`)
   - POST `/login` - User login
   - POST `/signup` - User registration

2. **User Routes** (`/api/users`)
   - Basic CRUD operations
   - Dashboard and quiz-specific endpoints
   - Assessment and progress tracking

3. **Course Routes** (`/api/courses`)
   - Basic CRUD operations
   - Advanced search and filtering
   - Debug endpoints

4. **Quiz Routes** (`/api/quizzes`)
   - Basic CRUD operations
   - Advanced search and filtering
   - Debug endpoints

5. **Custom Quiz Routes** (`/api/custom-quizzes`)
   - Basic CRUD operations for custom quizzes

### Route Parameters
- **Path Parameters**: Resource identifiers (`:id`, `:level`, `:lang`)
- **Query Parameters**: Search and filter options
- **Request Body**: Data for POST/PUT operations

---

## Middleware

### Built-in Middleware
- **express.json()**: JSON body parsing
- **express.urlencoded()**: URL-encoded body parsing
- **cors()**: Cross-origin resource sharing

### Custom Middleware
- **Error Handling**: Global error handler
- **404 Handler**: Route not found handler
- **Request Validation**: Input validation middleware

---

## Database Operations

### Mongoose Features
- **Schema Validation**: Automatic data validation
- **Indexing**: Performance optimization
- **Population**: Related document queries
- **Aggregation**: Complex data queries

### Query Patterns
```typescript
// Find with filters
const courses = await Course.find({ level: 'beginner' });

// Find with multiple filters
const quizzes = await Quiz.find({
  lang: 'java',
  quizLevel: 'intermediate',
  'topic.courseName': 'Arrays'
});

// Text search
const results = await Course.find({
  $text: { $search: 'java programming' }
});

// Aggregation
const stats = await User.aggregate([
  { $match: { role: 'user' } },
  { $group: { _id: null, totalUsers: { $sum: 1 } } }
]);
```

### Indexing Strategy
- **Single Field Indexes**: Common query fields
- **Compound Indexes**: Multi-field queries
- **Text Indexes**: Full-text search
- **Array Indexes**: Array field queries

---

## Error Handling

### Error Types
1. **Validation Errors**: Invalid input data
2. **Authentication Errors**: Invalid credentials
3. **Authorization Errors**: Insufficient permissions
4. **Not Found Errors**: Resource not found
5. **Database Errors**: Database operation failures
6. **Server Errors**: Internal server errors

### Error Response Format
```json
{
  "error": "Error type",
  "message": "Detailed error message",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### Global Error Handler
- **Catch-all**: Handles unhandled errors
- **Logging**: Error logging for debugging
- **Client-safe**: Sanitized error messages

---

## Development Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn package manager

### Installation
```bash
# Clone repository
git clone <repository-url>
cd server

# Install dependencies
npm install

# Environment setup
cp .env.example .env
# Edit .env with your configuration

# Database setup
npm run seed

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run seed         # Seed database with sample data
npm run delete-data  # Clear all database data
npm run lint         # Run ESLint
npm run tsc          # TypeScript compilation check
```

### Environment Variables
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/our-app-db
NODE_ENV=development
```

---

## Deployment

### Production Build
```bash
# Build the application
npm run build

# Start production server
npm start
```

### Environment Configuration
- **Production Database**: MongoDB Atlas or production MongoDB
- **Environment Variables**: Production-specific configuration
- **Security**: HTTPS, environment variables, secure headers

### Deployment Options
1. **Heroku**: Cloud platform deployment
2. **AWS**: EC2 or Lambda deployment
3. **Docker**: Containerized deployment
4. **Vercel**: Serverless deployment

---

## Performance Optimizations

### Database Optimizations
- **Indexing**: Strategic database indexes
- **Query Optimization**: Efficient query patterns
- **Connection Pooling**: MongoDB connection management
- **Caching**: Redis caching for frequently accessed data

### Application Optimizations
- **Compression**: Response compression
- **Rate Limiting**: API rate limiting
- **Pagination**: Large dataset pagination
- **Lazy Loading**: On-demand data loading

### Monitoring
- **Logging**: Application and error logging
- **Metrics**: Performance metrics collection
- **Health Checks**: Application health monitoring
- **Error Tracking**: Error monitoring and alerting

---

## Best Practices

### Code Organization
- **Separation of Concerns**: Controllers, models, routes separation
- **Type Safety**: TypeScript for type checking
- **Error Handling**: Comprehensive error handling
- **Validation**: Input validation and sanitization

### Security
- **Password Hashing**: Secure password storage
- **Input Validation**: Request data validation
- **CORS Configuration**: Proper CORS setup
- **Error Sanitization**: Safe error messages

### Performance
- **Database Indexing**: Optimized query performance
- **Connection Management**: Efficient database connections
- **Response Optimization**: Minimized response payloads
- **Caching Strategy**: Appropriate caching implementation

---

## Troubleshooting

### Common Issues
1. **Database Connection**: MongoDB connection issues
2. **Port Conflicts**: Port already in use
3. **TypeScript Errors**: Compilation issues
4. **Dependency Issues**: Package installation problems

### Debug Tools
- **Debug Endpoints**: `/api/courses/debug`, `/api/quizzes/debug`
- **Logging**: Console and file logging
- **Database Tools**: MongoDB Compass, mongo shell
- **API Testing**: Postman, curl, or similar tools

### Support
For additional support and documentation, refer to:
- [API Documentation](./API_DOCUMENTATION.md)
- [Express.js Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/) 