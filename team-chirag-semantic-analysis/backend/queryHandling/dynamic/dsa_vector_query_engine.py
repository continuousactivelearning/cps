# from sentence_transformers import SentenceTransformer
# import faiss
# import numpy as np
# import ollama
# import json
# import datetime
# import os

# #Example Concepts (later can be moved to external JSON)
# concept_chunks = [
#     ("Prefix Sum", "Prefix sum is a technique to preprocess cumulative sums for quick range sum queries."),
#     ("Prefix Sum", "Edge cases in prefix sums include empty arrays, negative numbers, and off-by-one errors."),
#     ("Prefix Sum", "Prefix sums help reduce time complexity in subarray problems from O(n²) to O(n)."),
#     ("Binary Search Tree", "A tree where each node has a key greater than all keys in its left subtree and smaller than right."),
#     ("Hash Table", "Maps keys to values using a hash function; allows O(1) average time complexity for operations."),
#     ("Dynamic Programming", "Breaks a problem into overlapping subproblems and stores results to avoid recomputation."),
#     ("AVL Tree", "Self-balancing BST; balance factor must be -1, 0, or +1."),
#     ("Queue", "Follows FIFO; useful in BFS, CPU scheduling, etc."),
#     ("Stack", "Follows LIFO; useful for DFS, function calls, etc."),
#     ("Red-Black Tree", "BST with additional red/black coloring rules to ensure balanced height."),
# ]

# #Embedding Model
# print("Loading embedding model...")
# embedding_model = SentenceTransformer('all-MiniLM-L6-v2')
# chunk_texts = [chunk for _, chunk in concept_chunks]
# chunk_embeddings = embedding_model.encode(chunk_texts)

# #FAISS Index
# index = faiss.IndexFlatL2(chunk_embeddings.shape[1])
# index.add(np.array(chunk_embeddings))

# #Mapping from Index to Concepts
# chunk_to_concept = {i: name for i, (name, _) in enumerate(concept_chunks)}

# #Log Unmapped Queries
# UNMAPPED_LOG = "unmapped_queries.json"

# def log_unmapped_query(query, score):
#     log_entry = {
#         "query": query,
#         "distance_score": float(score),
#         "timestamp": datetime.datetime.now().isoformat()
#     }
#     try:
#         with open(UNMAPPED_LOG, "r") as f:
#             logs = json.load(f)
#     except FileNotFoundError:
#         logs = []
#     logs.append(log_entry)
#     with open(UNMAPPED_LOG, "w") as f:
#         json.dump(logs, f, indent=4)

# #Handle Query
# def handle_query(user_query, threshold=1.0):
#     query_embedding = embedding_model.encode([user_query])
#     D, I = index.search(np.array(query_embedding), k=3)

#     if D[0][0] > threshold:
#         print("Query seems out of known concept graph. Logging for review...")
#         log_unmapped_query(user_query, D[0][0])
#         retrieved_contexts = []
#     else:
#         retrieved_contexts = [chunk_texts[i] for i in I[0]]

#     prompt = f"""
# You are an expert DSA tutor. Here's a student's question:
# \"{user_query}\"

# {'Below are related DSA concept snippets. Use them if useful, otherwise answer independently.' if retrieved_contexts else 'No related context was found. Answer using your DSA expertise.'}

# Context:
# {retrieved_contexts[0] if len(retrieved_contexts) > 0 else ''}
# {retrieved_contexts[1] if len(retrieved_contexts) > 1 else ''}
# {retrieved_contexts[2] if len(retrieved_contexts) > 2 else ''}

# Answer:"""

#     try:
#         response = ollama.chat(
#             model="mistral",
#             messages=[{"role": "user", "content": prompt}]
#         )
#         return response["message"]["content"]
#     except Exception as e:
#         return f"Error generating response: {e}"

# #Main App
# if __name__ == "__main__":
#     print("Welcome to the Dynamic DSA Query Engine!")
#     print("ype your DSA-related question. Type 'exit' to quit.")
#     while True:
#         user_input = input("\nAsk your DSA question: ").strip()
#         if user_input.lower() == "exit":
#             print("Session ended. Goodbye!")
#             break
#         answer = handle_query(user_input)
#         print("\nAnswer:", answer)


from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer
import faiss
import numpy as np
import ollama
import json
import datetime
import os

# ─────────────────────────────────────────────
# Load Concepts and Embedding Model
# ─────────────────────────────────────────────

concept_chunks = [
    ("Prefix Sum", "Prefix sum is a technique to preprocess cumulative sums for quick range sum queries."),
    ("Prefix Sum", "Edge cases in prefix sums include empty arrays, negative numbers, and off-by-one errors."),
    ("Prefix Sum", "Prefix sums help reduce time complexity in subarray problems from O(n²) to O(n)."),
    ("Binary Search Tree", "A tree where each node has a key greater than all keys in its left subtree and smaller than right."),
    ("Hash Table", "Maps keys to values using a hash function; allows O(1) average time complexity for operations."),
    ("Dynamic Programming", "Breaks a problem into overlapping subproblems and stores results to avoid recomputation."),
    ("AVL Tree", "Self-balancing BST; balance factor must be -1, 0, or +1."),
    ("Queue", "Follows FIFO; useful in BFS, CPU scheduling, etc."),
    ("Stack", "Follows LIFO; useful for DFS, function calls, etc."),
    ("Red-Black Tree", "BST with additional red/black coloring rules to ensure balanced height."),
]

print("🔍 Loading embedding model...")
embedding_model = SentenceTransformer('all-MiniLM-L6-v2')
chunk_texts = [chunk for _, chunk in concept_chunks]
chunk_embeddings = embedding_model.encode(chunk_texts)

print("📊 Building FAISS index...")
index = faiss.IndexFlatL2(chunk_embeddings.shape[1])
index.add(np.array(chunk_embeddings))
chunk_to_concept = {i: name for i, (name, _) in enumerate(concept_chunks)}

UNMAPPED_LOG = "unmapped_queries.json"

def log_unmapped_query(query, score):
    log_entry = {
        "query": query,
        "distance_score": float(score),
        "timestamp": datetime.datetime.now().isoformat()
    }
    try:
        with open(UNMAPPED_LOG, "r") as f:
            logs = json.load(f)
    except FileNotFoundError:
        logs = []
    logs.append(log_entry)
    with open(UNMAPPED_LOG, "w") as f:
        json.dump(logs, f, indent=4)

# ─────────────────────────────────────────────
# Handle Query Function
# ─────────────────────────────────────────────

def handle_query(user_query, threshold=1.0):
    query_embedding = embedding_model.encode([user_query])
    D, I = index.search(np.array(query_embedding), k=3)

    if D[0][0] > threshold:
        print("🚫 Out-of-graph query. Logging...")
        log_unmapped_query(user_query, D[0][0])
        retrieved_contexts = []
    else:
        retrieved_contexts = [chunk_texts[i] for i in I[0]]

    prompt = f"""
You are an expert DSA tutor. Here's a student's question:
\"{user_query}\"

{'Below are related DSA concept snippets. Use them if useful, otherwise answer independently.' if retrieved_contexts else 'No related context was found. Answer using your DSA expertise.'}

Context:
{retrieved_contexts[0] if len(retrieved_contexts) > 0 else ''}
{retrieved_contexts[1] if len(retrieved_contexts) > 1 else ''}
{retrieved_contexts[2] if len(retrieved_contexts) > 2 else ''}

Answer:"""

    try:
        response = ollama.chat(
            model="mistral",
            messages=[{"role": "user", "content": prompt}]
        )
        return response["message"]["content"]
    except Exception as e:
        return f"Error generating response: {e}"

# ─────────────────────────────────────────────
# FastAPI Setup
# ─────────────────────────────────────────────

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ⚠️ For dev only. Restrict in production.
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

@app.post("/api/chat")
def chat_endpoint(request: ChatRequest):
    response = handle_query(request.message)
    return {"response": response}
