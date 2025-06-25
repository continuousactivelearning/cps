# 📚 Personalized Learning Path Recommendation System

This project is an intelligent educational platform designed to recommend personalized study paths based on a learner’s current knowledge, selected goals, and quiz performance. It helps users navigate concepts in Data Structures, Algorithms, and other domains through adaptive assessments and knowledge graph-driven progression.

---

## 🚀 Features

- 🔐 **User & Admin Authentication**
- 🌐 **Domain & Topic Selection Interface**
- 🧠 **Multi-Level Assessments** (Easy, Medium, Hard)
- 📊 **Progress Tracking & Feedback**
- 🧭 **Knowledge Graph Integration** to recommend logical next steps
- 🤖 **Fallback to AI (ChatGPT/Gemini)** when topic content is unavailable
- 💾 **CACHE Database Support** for managing questions, scores, and prerequisites

---

## 🧩 How It Works

1. **User Registration/Login**  
   - Choose a language and domain to begin.

2. **Initial Quiz (Quiz 1)**  
   - Basic-level assessment (loops, variables, syntax).  
   - Failure → default roadmap; pass → continue to advanced stages.

3. **Knowledge Verification (Quiz 2 & 3)**  
   - Topic-level Q&A to validate claimed knowledge.

4. **Topic Interest & Prerequisite Quiz (Quiz 4)**  
   - Based on selected interest, the system tests prerequisite understanding.

5. **Personalized Recommendations**  
   - Uses quiz scores and knowledge graph traversal to suggest next concepts.
   - Shows what is mastered, what’s pending, and redirects to AI support if needed.

---

## 🗃️ Tech Stack

- **Frontend**: React + Tailwind CSS  
- **Backend**: typescript+Node.js + Express  
- **Database**: MongoDB (CACHE structure)  
- **Routing**: React Router  
- **AI Integration**: ChatGPT / Gemini (planned)

---
🤝 Contributors
	..Sai Deepak Nelluri (Project Lead)
	..Gnaneshwar 
  ..Deekshitha thotapally
  ..Subathra
  ..Hindu
