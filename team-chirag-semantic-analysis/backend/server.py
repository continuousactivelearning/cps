from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from queryHandling.dynamic.ollama_dsa_yt import generate_response, YouTubeResourceFinder  # Adjust import path

app = FastAPI()

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

@app.post("/api/chat")
async def chat(request: MessageRequest):
    prompt = request.message
    response_text = generate_response(prompt)

    # Also fetch YouTube resources
    yt = YouTubeResourceFinder()
    videos = yt.get_videos(prompt)

    video_data = [
        {
            "title": video.title,
            "url": video.url,
            "channel_name": video.channel_name,
            "view_count": video.view_count,
            "duration": video.duration,
            "description": video.description
        }
        for video in videos
    ]

    return {
        "response": response_text,
        "videos": video_data
    }
