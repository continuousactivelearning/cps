# DSA Learning Path Recommendation Platform

This project is a web-based platform for recommending personalized learning paths in Data Structures & Algorithms (DSA), tracking user progress, and providing quizzes and analytics.

## What is in this project?

- Backend server for user management, topic management, recommendations, quizzes, and exam results
- Frontend web application for user interaction and visualization
- Python-based GNN recommendation service (optional, for advanced recommendations)

## Project Structure

```
backend/         # Backend server code (APIs, models, controllers, routes)
frontend/        # Frontend web app (React components, pages, services)
frontend/sk/     # Python GNN model and Streamlit app (optional)
```

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB Atlas or local MongoDB
- Python 3.x (for GNN/AI features)

### Backend Setup

```bash
cd backend
npm install
# Create a .env file (see sample below)
npm run build
npm start
```

#### Sample `.env` for Backend

```
PORT=5001
NODE_ENV=development
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

#### Sample `.env` for Frontend

```
VITE_API_URL=https://your-backend-url.onrender.com
VITE_GNN_API_URL=https://your-gnn-url.onrender.com (optional)
```

### Python GNN Service (Optional)

```bash
cd frontend/sk
pip install -r requirements.txt
streamlit run streamlit_app.py
```

## Deployment

- Both backend and frontend are deployed on Render.
- Set environment variables in the Render dashboard for both services.
- Frontend `Publish Directory`: `dist`

## Team Members

- Mondi Sai Lokesh
- Balusu Venkata Sai Pranav
- Snehasis Mukhopadhyay
- Nabarupa Banik
- Pentapati V V Satya Pavan Sandeep

## License

This project is for educational purposes.
