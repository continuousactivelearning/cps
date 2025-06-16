# Concept Positioning System (CPS) – Semantic Analysis of Learner Queries to Map to Concept Gaps

Inspired by intelligent systems like YouTube and Netflix, the **Concept Positioning System (CPS)** is designed to assist learners in mastering advanced Data Structures & Algorithms (DSA) by identifying their knowledge gaps and dynamically recommending tailored micro-learning paths through prerequisite-driven concept graphs.

---

## Project Objective

CPS aims to answer the core question:

> “How can we position known and unknown concepts in a learner’s cognitive graph to make a difficult concept accessible?”

To achieve this, CPS:
- Maps user queries to DSA concepts using semantic understanding.
- Identifies prerequisite gaps by comparing learner knowledge with a curriculum ontology.
- Recommends a learning path composed of missing intermediate concepts and targeted learning resources.
- Integrates live web data retrieval to handle out-of-graph queries.
- Enables adaptive, self-paced, teacher-free conceptual progress.

---

## Current Progress

### Semantic Query Handling
- Embedding-based search using `SentenceTransformers` + `FAISS`
- Closest concepts are retrieved and used as context for LLM responses

### NLP-Based Gap Detection
- Queries mapped to concept embeddings
- Curriculum ontology used to detect missing links between learner knowledge and target concepts

### Dynamic Fallback for Out-of-Graph Queries
- Live integration with **Google Custom Search API**
- Fetched content used in context prompt for **Mistral** via **Ollama**

### LLM-Driven Explanations
- Concise, contextual responses generated using Mistral
- Concepts and explanations summarized with clarity and focus

---

## Team & Roles

| Member             | Role                         |
|--------------------|------------------------------|
| Chirag Khairnar    | Team Lead, Backend - Dynamic Querying  | 
| Shashwat           | Backend – Static Graph & NLP |
| Shreya Ojha        | Backend – Dynamic Querying |
| Aditi Mishra       | Frontend            |
| Goutam             | Frontend            |
---

## Tech Stack

| Component                 | Technology Used                    |
|--------------------------|-------------------------------------|
| Frontend                 | React, TailwindCSS   |
| Backend                  | Python/TypeScript                   |
| Semantic Search          | SentenceTransformers + FAISS        |
| Language Model           | Mistral (via Ollama)                |
| Dynamic Web Search       | SERP API      |

---

## End-to-End Query Flow

1. Learner asks a DSA question.
2. System encodes the query and searches for concept similarity in local graph.
3. If found → retrieve context → pass to LLM.
4. If not found → fetch relevant info via Google CSE → summarize → pass to LLM.
5. Return explanation + related prerequisite concepts + resources (if available).
