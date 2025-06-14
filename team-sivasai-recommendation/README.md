# Personalized Learning Path Recommendation

An experimental AI-powered educational tool that recommends personalized learning paths based on a user’s target topic. The system dynamically constructs a prerequisite concept graph to identify foundational knowledge, and uses GPT-based analysis to generate diagnostic assessments — ensuring learners build a strong conceptual base before progressing.

This project is actively being developed using the MERN stack, with plans to integrate advanced agentic reasoning and adaptive feedback for scalable and personalized learning support.



---

## Status

> This project is currently in early development. Features and APIs are subject to frequent changes.

---

## System Workflow (4 Stages)

### Stage 1: Prerequisite Graph Construction

- Accepts any user-given topic (e.g., "Machine Learning").
- Uses GPT-4o to generate 5–7 relevant prerequisite concepts
- Visualizes them as a Directed Acyclic Graph (DAG).

### Stage 2: MCQ Exam Generator

- Automatically generates diagnostic multiple-choice questions based on each prerequisite concept.
- Questions are AI-generated and domain-aware.

### Stage 3: Result Display and Analysis
- Evaluates user responses to identify strengths and knowledge gaps.
- Provides clear, structured feedback

### Stage 4: Personalized Learning Path Recommendation
- Constructs a custom learning path based on analysis of prerequisite performance
- Highlights weak areas and recommends learning order

---

## How to Run the Project

### 1. Clone the Repository

### 2. Add Your OpenRouter API Key

* Create a `.env` file in the **`backend/`** directory.
* Add the following lines to the `.env` file:

```env
OPENROUTER_API_KEY=your_openrouter_key_here
MONGO_URI=mongodb://localhost:27017/cps-prerequisites
```

> Make sure the `.env` file is located inside the `backend/` folder.

---

### 3. Start the Application

#### In Terminal 1 (Frontend)

```bash
cd frontend
npm install
npm start
```

This will start the frontend on http://localhost:5173 (Vite default)

#### In Terminal 2 (Backend)

```bash
cd backend
npm install
npm start
```

---

## What Happens Now

* Enter a concept or topic in the input field (e.g., "Machine Learning").
* The system will:
  * Call OpenRouter (GPT-4o) to generate 5–7 prerequisite concepts.
  * Save the topic and prerequisites in MongoDB.
  * Display them as a bullet list and a directed graph (DAG) on the frontend.

---

## Tech Stack

* **Frontend**: React (TypeScript)
* **Backend**: Node.js + Express
* **Database**: MongoDB
* **AI/LLM**: GPT-4o via OpenRouter
* **Graph Rendering**: vis-network
* **Environment Management**: dotenv
