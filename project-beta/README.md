# Dependency-Aware Assessment Generator

An experimental **agentic AI system** designed to generate targeted assessments based on a learner’s desired concept. By leveraging a **concept graph**, the system first identifies prerequisite knowledge and then uses AI to generate diagnostic questions — ensuring foundational understanding before progression.

This project is under active development and aims to integrate **LangGraph-based agentic reasoning** with the **MERN stack** for scalable educational applications.

---

## Status

> This project is currently in early development. Features and APIs are subject to frequent changes.

---

## Project Overview

### Goal

To assist learners by:
- Automatically determining the prerequisites for any given concept using a structured knowledge graph.
- Using an agentic AI workflow to generate **diagnostic assessments** tailored to those prerequisites.
- Encouraging mastery learning by identifying gaps before a learner advances.

---

## How to Run the Project

### 1. Clone the Repository

### 2. Add Your Hugging Face Token

* Create a `.env` file in the **`backend/`** directory.
* Add the following line to the `.env` file:

```env
HF_TOKEN=your_hugging_face_token_here
MONGO_URI=mongodb://localhost:27017/agenticAI
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

This will launch the frontend on [http://localhost:3000](http://localhost:3000)

#### In Terminal 2 (Backend)

```bash
cd backend
npm install
npm start
```

---

## What Happens Now

* Enter a topic (concept) in the input field on the website.
* The system will:

  * Use the Hugging Face model to generate questions based on the concept.
  * Display the generated questions in the **backend terminal** and on the **web interface**.

---

## Documentation

* UML diagrams for the system architecture and flow are available in the `Documentation/` folder.

---

## 🛠 Tech Stack

* **Frontend**: React (TypeScript)
* **Backend**: Node.js + Express
* **Database**: MongoDB
* **AI/LLM**: Hugging Face Model (via API)
* **Agent Framework**: LangGraph (planned)
