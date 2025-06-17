#  Dependency-Aware Assessment Generator

A full-stack system that helps learners by understanding the **prerequisites** of a concept and generating a **custom quiz** based on their current knowledge level. Upload a **YouTube link**, **PDF**, or **image**, and the system intelligently derives the main topic, finds all prerequisite concepts, and generates quiz questions using those.

---

> 📌 **Note:** The main development is happening in a separate branch `team-parthan-assessment`. This `README.md` is placed in the `main` branch to provide a basic overview. Please switch to the appropriate branch to access the full project.


##  Features

-  Upload input as YouTube Link / PDF / Image  
-  Extract main topic automatically from content  
-  Traverse a concept dependency graph (stored in MongoDB) to find prerequisites  
-  Display topic and prerequisites in frontend  
-  Generate quiz using prerequisite concepts and main topic  
-  Suggest topics  

---

##  Tech Stack

| Layer      | Technology               |
|------------|---------------------------|
| Frontend   | React                     |
| Backend    | Node.js, Express          |
| Database   | MongoDB (Mongoose)        |


---


##  Installation & Setup

### 📦 Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend folder and add:
   ```env
   MONGO_URI=mongodb://localhost:27017/concept-graph
   ```

4. Start the backend server:
   ```bash
   node server.js
   ```

---

### 💻 Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Run the React app:
   ```bash
   npm start
   ```

---