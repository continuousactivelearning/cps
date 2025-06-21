# Dependency-Aware Assessment Generator

An experimental **agentic AI system** designed to generate targeted assessments based on a learner’s desired concept. By leveraging a **concept graph**, the system first identifies prerequisite knowledge and then uses AI to generate diagnostic questions — ensuring foundational understanding before progression.

This project is under active development and aims to integrate **LangGraph-based agentic reasoning** with the **MERN stack** for scalable educational applications.

---

## Status

> This project is currently in early development. Features and APIs are subject to frequent changes.
> Both **frontend** and **backend** are independently functional.  
> **Integration between frontend and backend is in progress.** Current workflows are being tested in isolation.

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
npm run dev
```

This will launch the frontend on local host.

#### In Terminal 2 (Backend)

```bash
cd backend
npm install
npm start
```

---

## What Happens Now

In the current development state:

- The frontend allows concept input and renders UI components.

- The backend generates diagnostic questions, scores responses, stores questions and answers in MongoDB, and identifies weak prerequisite topics.

> The connection between frontend input and backend services is not yet wired together, but both parts function correctly when tested separately.

---
## Contributions

- **Nikita S Raj Kapini** : Building the backend for question generation, data storage with MongoDB, and response analysis

- **Shreyas Mene** : Developing the frontend user interface using Vite + React

- **Yeddalu Pushkala** : Developing and integrating a chatbot (help assistant) with the frontend interface

- **Manda Rani** : Designing UI components for registration and login pages  

- **Nakshtra Bandary** : Preparing project documentation, including UML diagrams, SRS, and system design documentation


---

## Documentation

* UML diagrams for the system architecture and flow are available in the `Documentation/` folder.

---

## Tech Stack

* **Frontend**: React (TypeScript)
* **Backend**: Node.js + Express
* **Database**: MongoDB
* **AI/LLM**: Hugging Face Model (via API)
* **Agent Framework**: LangGraph (planned)
