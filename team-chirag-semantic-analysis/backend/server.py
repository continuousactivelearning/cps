from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from queryHandling.integrated_chat_handler import IntegratedChatHandler
from typing import List, Dict, Optional

app = FastAPI()

# Initialize the integrated chat handler
chat_handler = IntegratedChatHandler()

# CORS setup to allow requests from frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class MessageRequest(BaseModel):
    message: str
    chat_history: Optional[List[Dict]] = []
    user_id: Optional[str] = "default"

@app.post("/api/chat")
async def chat(request: MessageRequest):
    prompt = request.message
    chat_history = request.chat_history or []
    user_id = request.user_id or "default"
    
    # Use the integrated chat handler with enhanced parameters
    result = chat_handler.handle_chat_message(
        message=prompt,
        chat_history=chat_history,
        user_id=user_id
    )
    
    return {
        "response": result.get('response', 'Sorry, I could not process your request.'),
        "videos": result.get('videos', []),
        "analysis": result.get('analysis', {}),
        "error": result.get('error')
    }
