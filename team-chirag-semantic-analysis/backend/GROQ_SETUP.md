# Groq Cloud Integration Setup Guide

## Overview

This backend now uses Groq Cloud's Mistral-7B-Instruct model instead of local Ollama for better deployment compatibility.

## Setup Instructions

### 1. Get Groq API Key

1. Sign up at [Groq Cloud Console](https://console.groq.com/)
2. Navigate to API Keys section
3. Create a new API key
4. Copy the API key

### 2. Environment Variables

Create a `.env` file in the backend directory with:

```env
# Required: Groq Cloud API Key
GROQ_API_KEY=your_actual_groq_api_key_here

# Optional: YouTube API Key (for video recommendations)
YOUTUBE_API_KEY=your_youtube_api_key_here

# Optional: SERP API Key (if using search features)
SERP_API_KEY=your_serp_api_key_here
```

### 3. Install Dependencies

```bash
cd team-chirag-semantic-analysis/backend/queryHandling/dynamic
pip install -r requirement.txt
```

### 4. Test the Integration

```bash
cd team-chirag-semantic-analysis/backend
python -c "from queryHandling.dynamic.groq_dsa_yt import generate_response; print(generate_response('Explain quicksort algorithm'))"
```

## Deployment Options

### Option 1: Render (Recommended)

1. Connect your GitHub repo to Render
2. Create a new Web Service
3. Set build command: `pip install -r queryHandling/dynamic/requirement.txt`
4. Set start command: `uvicorn server:app --host 0.0.0.0 --port $PORT`
5. Add environment variables in Render dashboard:
   - `GROQ_API_KEY`
   - `YOUTUBE_API_KEY` (optional)
   - `SERP_API_KEY` (optional)

### Option 2: Railway

1. Connect your GitHub repo to Railway
2. Railway will auto-detect Python
3. Add environment variables in Railway dashboard
4. Deploy automatically

### Option 3: Vercel

1. Create `vercel.json` in backend directory:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.py",
      "use": "@vercel/python"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.py"
    }
  ]
}
```

2. Add environment variables in Vercel dashboard
3. Deploy

## API Endpoints

### POST /api/chat

- **Input**: `{"message": "your question here"}`
- **Output**:

```json
{
  "response": "AI explanation",
  "videos": [
    {
      "title": "Video Title",
      "url": "https://youtube.com/...",
      "channel_name": "Channel Name",
      "view_count": "1.2M views",
      "duration": "15m 30s",
      "description": "Video description"
    }
  ]
}
```

## Troubleshooting

### Common Issues:

1. **"GROQ_API_KEY not found"**: Make sure your `.env` file exists and has the correct API key
2. **"Connection timeout"**: Check your internet connection and Groq API status
3. **"Rate limit exceeded"**: Groq has generous free tier limits, but check your usage

### Testing:

```bash
# Test the LLM directly
python queryHandling/dynamic/groq_dsa_yt.py

# Test the server
uvicorn server:app --reload
curl -X POST http://localhost:8000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Explain binary search"}'
```

## Cost Considerations

- Groq Cloud offers free tier with generous limits
- Mistral-7B-Instruct is very cost-effective
- Monitor usage in Groq Console dashboard
