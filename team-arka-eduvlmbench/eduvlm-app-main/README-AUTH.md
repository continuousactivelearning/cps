# EduVLM-Bench Authentication System

## Overview

Complete login/signup system for the EduVLM-Bench research website using MongoDB, Express.js, Node.js, and vanilla HTML/CSS/JavaScript.

## Features

✅ **User Registration & Login**
- Secure password hashing with bcrypt
- JWT token-based authentication
- Form validation on both client and server
- User session management with HTTP-only cookies

✅ **User Interface**
- Modal-based login/signup forms
- Clean, responsive design matching the academic theme
- Real-time user information display
- Professional error handling and notifications

✅ **Security Features**
- Password validation (minimum 6 characters)
- Email and username uniqueness checks
- Secure JWT tokens with 7-day expiration
- HTTP-only cookies for token storage
- CORS configuration for cross-origin requests

## File Structure

```
simple-site/
├── server.js              # Main MongoDB server
├── server-memory.js       # In-memory demo server
├── auth.js                # Frontend authentication logic
├── index.html             # Main page with auth UI
├── leaderboard.html       # Leaderboard page with auth UI
├── styles.css             # Includes authentication styles
├── script.js              # Main website functionality
├── test-auth.js           # Authentication testing script
├── package.json           # Node.js dependencies
└── .env                   # Environment configuration
```

## Setup Instructions

### Option 1: MongoDB Setup (Production)

1. **Install MongoDB** (if not already installed)
2. **Update .env file** with your MongoDB connection string:
   ```env
   MONGODB_URI=mongodb://localhost:27017/eduvlm-bench
   # Or for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/eduvlm-bench
   ```
3. **Start the server:**
   ```bash
   cd simple-site
   npm install
   node server.js
   ```

### Option 2: In-Memory Demo (Quick Start)

1. **Start the demo server:**
   ```bash
   cd simple-site
   npm install
   node server-memory.js
   ```
2. **Visit:** http://localhost:3001

## How to Use

### User Registration
1. Click "Sign Up" button in navigation
2. Fill in the registration form:
   - First Name & Last Name
   - Username (3-20 characters)
   - Email address
   - Password (minimum 6 characters)
   - Confirm password
3. Click "Register" to create account

### User Login
1. Click "Login" button in navigation
2. Enter email and password
3. Click "Login" to sign in

### User Information Display
Once logged in, the navigation shows:
- User avatar with initials
- Full name
- Username (@username)
- Email address
- Logout button

## API Endpoints

- `POST /api/register` - User registration
- `POST /api/login` - User login
- `POST /api/logout` - User logout
- `GET /api/user` - Get current user info
- `GET /` - Serve main page
- `GET /leaderboard` - Serve leaderboard page

## Authentication Flow

1. **Registration/Login** → JWT token created → Stored in HTTP-only cookie
2. **Protected requests** → Token validated → User info returned
3. **Logout** → Cookie cleared → User session ended

## Security Notes

- Passwords are hashed using bcrypt with 12 salt rounds
- JWT tokens expire after 7 days
- Cookies are HTTP-only and secure in production
- Input validation on both client and server sides
- Email and username uniqueness enforced

## Testing

Run the authentication test:
```bash
node test-auth.js
```

This will test:
- Server connectivity
- User registration
- User login
- Authenticated endpoints

## MongoDB Integration

The system includes both MongoDB and in-memory storage options:

- **server.js** - Full MongoDB implementation
- **server-memory.js** - In-memory demo version

For production, use the MongoDB version with proper connection string in .env file.

## Customization

### Styling
Authentication styles are in `styles.css` under the "Authentication Styles" section.

### Frontend Logic
User interface logic is in `auth.js` with the `AuthManager` class handling:
- Modal display/hiding
- Form submission
- User state management
- Error handling
- UI updates based on authentication status

### Backend Logic
Server logic handles:
- User model and validation
- Password hashing and verification
- JWT token generation and validation
- Session management
- API route protection

## Environment Variables

Required environment variables in `.env`:
```env
PORT=3001
JWT_SECRET=your-secret-key-change-in-production
MONGODB_URI=mongodb://localhost:27017/eduvlm-bench
NODE_ENV=development
```

## Dependencies

- **express** - Web framework
- **mongoose** - MongoDB ODM
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT token handling
- **cors** - Cross-origin requests
- **express-validator** - Input validation
- **cookie-parser** - Cookie handling
- **nodemon** - Development server restart