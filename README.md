# 🧭 BluePrint: Personal Learning Path Visualization Dashboard

**Team No:** 6

## 🌐 Live Demo

- **Website:** [cps-alpha.vercel.app](https://cps-alpha.vercel.app/)
- **GitHub:** `team-nishita-dashboard` branch

## 🎯 Project Overview

**BluePrint** is a platform designed to help learners **visualize, customize, and track** their personal learning journeys. It empowers both users and admins with interactive dashboards, intelligent support, and robust content management.

## 📝 Objective

- **Personalized Learning Path Visualization:**  
  Interactive dashboards let users visualize and customize their unique learning journeys, adapting paths based on progress and preferences.

- **Admin Course & Material Management:**  
  Admins can securely create and manage courses, upload syllabi and materials via Cloudinary, and organize content efficiently.

- **Integrated Chatbot Support:**  
  A HuggingFace Spaces-powered chatbot 🤖 provides instant, intelligent assistance and guidance throughout the learning process.

- **User Engagement Features:**  
  Badges 🏅, levels, and achievement tracking motivate users and recognize accomplishments.

- **Seamless User Experience:**  
  The platform is designed for intuitive navigation and robust performance, ensuring a smooth and engaging learning environment.

## ✨ Features

- 📊 **Interactive Learning Path Dashboards**
- 🛠️ **Customizable Course and Material Management**
- ⏱️ **Real-time Progress Tracking**
- 🏆 **Achievement Badges and Levels**
- 🤖 **Integrated AI Chatbot for Support**
- 🔒 **Secure Admin Controls**
- ☁️ **Cloud-based Storage for Materials**
- 📱 **Responsive and Intuitive UI**

## 🛠️ Tech Stack

| Layer             | Technology                                 |
|-------------------|--------------------------------------------|
| **Frontend**      | React (deployed on Vercel)                 |
| **Backend**       | Node.js/Express (deployed on Render)       |
| **Database**      | MongoDB Atlas (Free cluster, 512 MB limit) |
| **Admin Storage** | Cloudinary                                 |
| **Chatbot**       | HuggingFace Spaces                         |

## 🏗️ How to Run the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/continuousactivelearning/cps.git
cd cps
git checkout team-nishita-dashboard
```

### 2. Set Up Environment Variables

**Backend:**  
Create a `.env` file in the backend directory with:

```text
MONGO_URI=<your_mongo_atlas_uri>
CLOUDINARY_URL=<your_cloudinary_url>
JWT_SECRET=<your_jwt_secret>
HUGGINGFACE_API_KEY=<your_huggingface_api_key>

```

**Frontend:**  
Create a `.env` file in the frontend directory with:

```text
VITE_API_URL=
```

### 3. Install Dependencies and Start the Application

**Frontend:**

```bash
cd client
npm install
npm run dev
```

**Backend:**

```bash
cd server
npm install
npx tsc
node .\dist\index.js
```

```
cd chatbot-backend
python -m venv venv
venv\Scripts\activate
pip install python-dotenv
pip install flask transformers flask-cors
python chatbot_api.py

```

> 💡 *If using the deployed backend, you can skip running the backend locally and point the frontend to the deployed API.*

## 🚀 Deployment Details

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas (Free cluster, 512 MB limit)
- **Admin Storage:** Cloudinary
- **Chatbot:** HuggingFace Spaces

## 👥 Contributors

- Nishita Sharma (Team Lead)
- Devansh Srivastava
- Sonali
- Deepali
- Tanisha
- Shiv Kumar Behera

## 📚 Documentation

System architecture diagrams, SRS, and user manuals are available in the `Documentation/` folder of the repository.

For further details, refer to the project wiki or contact the team lead.

## 🙏 Acknowledgements

This project was developed as part of a research internship under the guidance of **Prof. Sudarshan Iyengar**, Dept of CSE, IIT Ropar and **Meenakshi V**, DLED Labs, IIT Ropar. The team extends heartfelt thanks to all mentors and contributors for their invaluable support and guidance throughout the journey.

*A special note of gratitude for the dedicated 15-day training period at the start of the 8-week internship, which provided essential skills and foundational knowledge that greatly contributed to the success of this project.*
