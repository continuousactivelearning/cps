# EduAssess: ML Prerequisite Assessment Platform
(Recommendation System for Education - Dependency-Aware Assessment Generator)

**EduAssess** is a smart web-based tool designed to help learners assess their knowledge of prerequisites(identified using concept graph) before diving into a **Machine Learning (ML)** topic. It generates targeted quizzes based on selected topics, evaluates user performance, and suggests areas to revisit.

> [Live Demo](https://cpseduassess.netlify.app/)

---

## Project Overview

### Goal

To assist learners by:
- Automatically determining the prerequisites for any given concept using a structured knowledge graph.
- Using AI workflow to generate **diagnostic assessments** tailored to those prerequisites.
- Encouraging mastery learning by identifying gaps before a learner advances.

## Features

- Auto-generates MCQ assessments based on topic prerequisites
- Instant scoring and detailed feedback
- Chatbot integration for concept help
- Auth system (Register/Login/Change/Forgot Password)
- Deployed using netlify(frontend) and render(backend)
  
---

## Tech Stack

| Layer         | Technology                          |
|---------------|--------------------------------------|
| **Frontend**  | React + TypeScript + Vite            |
| **Backend**   | Node.js + Express + TypeScript       |
| **Database**  | MongoDB (via Mongoose)               |
| **AI**        | OpenRouter API           |
| **Deployment**| Frontend: Netlify<br>Backend: Render |

---
## How to Run the Project Locally

### 1. Clone the Repository

### 2. Create the env files 
*Create a `.env` file in the **`backend/`** directory.
* Add the following line to the `.env` file:

```env
MONGO_URI = <your_mongo_atlas_uri>(Create an atlas account, create a cluster and add its uri string here or if using compass use the appropriate uri)
OPENROUTER_API_KEY= your_openrouter_api_key
JWT_SECRET=your_backend_secret_key(Please generate it from web)
EMAIL_USER=your_gmail_id
EMAIL_PASS=your_gmail_app_password
```

> Make sure the `.env` file is located inside the `backend/` folder.
> Note the the password being used in EMAIL_PASS is not your gmail password but is the app password created for this purpose after enabling 2 factor authentication.

* Create another `.env` file in the **`frontend/`** directory.
* Add the following line to the `.env` file:
```env
VITE_API_URL = link_to_express_framework
```
> Note that if you are running it locally, the link will be "http://localhost:5000"
> If you want to directly use the deployed backend, the link will be "http://Eduassess-mzz3.onrender.com"
> Note that the accepted localhost frontend runs on port 5173. Change it in index.ts to your desired port.

---

### 3. Start the Application

#### In Terminal 1 (Frontend)

```bash
cd frontend
npm install
npm run build
npm run dev
```

This will launch the frontend on local host.

#### In Terminal 2 (Backend)

```bash
cd backend
npm install
npm run build
npm run start
```
If you are using the deployed link for backend, no need to run these commands.

---

## Deployment
Modify the backend/package.json to change scripts build from the windows specific copy to a general cp function instead. 
Deployment is on Render and Netlify.

---

## Contributions

- **Nikita S Raj Kapini** (Team Lead) : Building the backend for question generation, data storage with MongoDB, and response analysis; Integration of frontend with backend; Adding navbar component to UI; Added change password feature;Confirmation messages using toast notifications; Minor UI/UX fixes

- **Shreyas Mene** : Developing the frontend user interface using Vite + React and concpt graph creation

- **Yeddalu Pushkala** : Developing and integrating a chatbot (help assistant) with the frontend interface

- **Manda Rani** : Designing UI components for registration and login pages  

- **Nakshtra Bandary** : Preparing project documentation, including UML diagrams, SRS, and system design documentation ; Integrating the UI of login and registration with the dashboard and developing backend functionality to ensure seamless authentication and user management; Added the timer for assessment; Deployment of project using render and netlify


---

## Documentation

* UML diagrams for the system architecture and flow are available in the `Documentation/` folder.
* Design documentation, SRS, testing documentation and User manual are available in `Documentation/Final/` folder.

---
## Acknowledgements

This project was developed as part of a research internship under the guidance of  
**Prof Sudarshan Iyengar**, Dept of CSE, IIT Ropar and **Meenakshi V**, DLED Labs, IIT Ropar.

Their support, insights, and encouragement throughout the development of EduAssess were invaluable.  
