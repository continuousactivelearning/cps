<<<<<<< HEAD
# personalized-learning-path
Project repo for Problem Statement 2 - Personalized Learning Path Recommendation
## Our Team

We’re a collaborative team working together on this project:

| Name                  | Email                       | Role            |
|-----------------------|-----------------------------|-----------------|
| B Bhavitha            | bhavitha9052004@gmail.com   | T3 Team Lead    |
| Anurag Kumar          | anurag2003ias@gmail.com     | T3 Contributor  |
| Nishant               | nishantthakurs7519@gmail.com| T3 Contributor  |
| Tamalampudi Sameer Reddy| sameerreddy213@gmail.com  | T3 Contributor |

Everyone’s contributions are highly valued!
## Contribution Guidelines

We welcome contributions from all team members! Here’s how you can get started:

1. **Fork the repository** to your own GitHub account.
2. **Clone** your fork to your local machine.
3. **Create a new branch** for your work.
4. Make your changes, ensuring they follow good coding practices.
5. **Commit** your changes with a clear message.
6. **Push** your branch to your fork.
7. **Open a Pull Request (PR)** to the main repository.

Please make sure to:
- Check if an issue already exists before starting new features or fixes.
- Follow the folder structure (`client/`, `server/`, `scraper/`, `graph/`, `docs/`).
- Add meaningful commit messages.
- Be respectful of others’ work — collaboration is key!

Refer to [`CONTRIBUTING.md`](CONTRIBUTING.md) for more detailed guidelines.

Happy contributing!
=======
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
>>>>>>> 9d6a6dce7f761ae257c5582a234806c602ac9ed5
