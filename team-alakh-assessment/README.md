📘 Dependency Aware Assessment Generator

Team Members: Alakh Mathur(Team Lead), Omkar Kumar, Anand Jangid, Pavithra Krishnappa, Aditya Kumar Das

🔍 Problem Statement
Create a system that generates formative assessments based on the prerequisite concepts of a target learning objective to ensure readiness before progression.

🛠️ Technology Stack

- Frontend: React, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens)
- Routing: React Router DOM
- Tools: Git, GitHub, Postman

✨ Key Features

1. User Authentication – Secure login and registration system using JWT tokens.
2. Prerequisite Check – Users can input a learning topic and get a list of prerequisite topics they must complete.
3. Dynamic Learning Path – Based on prerequisites, the system guides the user on what to learn next.
4. Quiz Generator – Each prerequisite comes with an option to Learn or Take Quiz.
5. User Progress Tracking – Tracks user’s completed topics and prevents repetition.
6. Protected Dashboard– Only accessible to authenticated users. Includes Logout functionality and token validation.
7. Responsive UI – Built using Tailwind CSS for sleek and responsive design.

🏗️ System Architecture
The application is structured as follows:

- Client Side (React App)
  - Handles UI rendering, routing, and local token storage.
  - Interacts with backend APIs for data.
- Server Side (Node + Express)
  - Handles API endpoints for user management, topic prerequisites, and user progress.
  - Validates JWT for secure endpoints.
- MongoDB
  - Stores user information, topic dependencies, and progress.

🚀 Future Enhancements (that we will soon ready up)

- AI-powered prerequisite graph builder.
- Role-based access (e.g., student, instructor).
- Real-time collaboration during quizzes.
- Timer-based assessment submission.
- Graph visualization for prerequisite topic networks.
- Admin dashboard for managing topics and quizzes.

🧪 Getting Started

1. Clone the repo and checkout your team branch:
   `git clone https://github.com/continuousactivelearning/cps`
   `git checkout -b team-AlakhMathur-assessment`
   
2. Navigate to `client` and `server` directories and run:
   - `npm install`
   -  npm start` (for standard React) (in one terminal)
   -  npm run dev (for running server) (in another terminal)
   
3. Ensure MongoDB is running locally or provide a MongoDB Atlas connection URI.
   
4. Environment variables:
   - `MONGO_URI=<your_mongo_uri>`
   - `JWT_SECRET=<your_jwt_secret>`

Thank you for reviewing our project. Contributions and feedback are welcome!
