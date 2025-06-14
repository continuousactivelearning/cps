/* AUTHOR - NIKITA S RAJ KAPINI (CREATED ON 10/06/2025) */
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const getAssessment = async (prompt: string) => {
  try {
    const response = await axios.post(
      'https://router.huggingface.co/nebius/v1/chat/completions',
      {
        model: "meta-llama/Meta-Llama-3.1-8B-Instruct-fast", 
        messages: [
          {
            role: "user",
            content: prompt, 
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${String(process.env.HF_TOKEN).trim()}`,
          'Content-Type': 'application/json',
        },
      }
    );
    const messageContent = response.data.choices[0]?.message?.content || "No response received";

    console.log("Assessment Response:", messageContent);

    return response.data;
  } catch (error: any) {
    console.error('Hugging Face API Error:', error.response?.status, error.response?.data);
    throw error;
  }
};

// import { getPrerequisites } from '../services/prereqService';
// export const getAssessment = async (concept: string) => {
//   const prerequisites = getPrerequisites(concept);

//   const prompt = `Generate an assessment for ${concept}. The required prerequisites are: ${prerequisites.join(", ")}`;
  
//   try {
//     const response = await axios.post(
//       'https://router.huggingface.co/nebius/v1/chat/completions',
//       {
//         model: "meta-llama/Meta-Llama-3.1-8B-Instruct-fast",
//         messages: [
//           { role: "user", content: prompt }
//         ],
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.HF_TOKEN}`,
//           'Content-Type': 'application/json',
//         },
//       }
//     );

//     return response.data.choices[0]?.message?.content || "No response received";
//   } catch (error: any) {
//     console.error('Hugging Face API Error:', error.response?.status, error.response?.data);
//     throw error;
//   }
// };
