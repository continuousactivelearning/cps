/* AUTHOR - NIKITA S RAJ KAPINI (CREATED ON 10/06/2025) */
/* AUTHOR - NIKITA S RAJ KAPINI (UPDATED ON 14/06/2025) */
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const getAssessment = async (prompt: string) => {
  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'mistralai/mistral-7b-instruct:free',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${String(process.env.OPENROUTER_API_KEY).trim()}`,
          'Content-Type': 'application/json',
          // 'HTTP-Referer': 'https://your-site.com', // Optional: for leaderboard attribution
          // 'X-Title': 'Your App Name',              // Optional: for leaderboard attribution
        },
      }
    );

    const messageContent = response.data.choices[0]?.message?.content || 'No response received';
    console.log('Assessment Response:', messageContent);

    return response.data;
  } catch (error: any) {
    console.error('OpenRouter API Error:', error.response?.status, error.response?.data);
    throw error;
  }
};
