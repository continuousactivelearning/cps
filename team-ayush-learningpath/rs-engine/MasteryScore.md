# Mastery Score Prediction

## Overview

The Mastery Score Prediction service is a key component in our AI-Based Personalized Learning Path Recommendation System.
It assesses a learner’s understanding of each concept and produces a mastery score (between 0 and 1).
This score guides the path-finding algorithm (A*) in tailoring a path to aid the learner’s progress.

⸻

## Role in Overall System
	•	The Mastery Score Prediction feeds into the Recommendation Engine.
	•	The algorithm considers these scores to:
	•	Filter out or prioritize certain nodes in the knowledge graph.
	•	Allocate additional practice or prerequisites if a concept’s mastery is low.

⸻

## Input Format (JSON)
{
  "user_id": "1234",
  "concept": "Graphs",
  "features": {
    "avg_quiz_score": 0.6,
    "avg_time_spent": 18.4,
    "video_used": true,
    "article_used": false,
    "quiz_attempted": true
  }
}

## Model

We predict mastery scores using a machine learning regression or classifier algorithm (depending on your implementation), trained on historical data from many users.
Features typically include:

✅ Quiz scores
✅ Time spent on concept
✅ Number of practice problems solved
✅ Type of resources used (articles, video, coding problems)

⸻

## Algorithm (Example)

While the algorithm can vary (Random Forest, Logistic Regression, or even Neural Networks), a common pipeline might be:
	1.	Gather training data with:
	•	User IDs
	•	Concept IDs
	•	Interaction data
	•	Ground truth scores
	2.	Perform feature engineering and scaling.
	3.	Train a regression or classifier algorithm.
	4.	Validate with a separate test set.
	5.	Save the trained model for future inference.

##  Inference (API)

### POST endpoint (Flask/FastAPI) for mastery score prediction:
POST /predict-mastery
Content-Type: application/json
{
  "user_id": "1234",
  "concept": "Graphs",
  "features": {
    "avg_quiz_score": 0.6,
    "avg_time_spent": 18.4,
    "video_used": true,
    "article_used": false,
    "quiz_attempted": true
  }
}

### Response:
{
  "concept": "Graphs",
  "mastery_score": 0.72
}

## Storage Schema (in Database)
{
  "user_id": "1234",
  "concept": "Graphs",
  "mastery_score": 0.72,
  "timestamp": "2025-06-11 T12:00:00Z"
}

## Summary
	•	The Mastery Score Prediction service assesses a learner’s knowledge state for each concept.
	•	It feeds into the path-finding algorithm (A*) and guides its decisions.
	•	The algorithm utilizes historical data and learner-specific interactions to produce highly personalized scores.

⸻
