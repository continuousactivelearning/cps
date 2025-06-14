// import fs from "fs";
// import path from "path";
// import { OpenAI } from "openai";
// import dotenv from "dotenv";

// export interface MCQQuestion {
//   question: string;
//   options: string[];
//   correctAnswer: string;
// }

// // Load environment variables
// dotenv.config({ path: path.join(__dirname, "../../.env") });

// // 1. Load preprocessed chunks (simulating retrieval DB)
// const chunks = JSON.parse(
//   fs.readFileSync(path.join(__dirname, "../data/chunks.json"), "utf-8")
// ) as { topic: string; content: string }[];

// // 2. Initialize OpenAI
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// // 3. Generate default MCQ questions for a topic
// function generateDefaultQuestions(topic: string): MCQQuestion[] {
//   return [
//     {
//       question: `What is the main concept of ${topic}?`,
//       options: [
//         "It's a fundamental principle",
//         "It's an advanced technique",
//         "It's a theoretical concept",
//         "It's a practical application"
//       ],
//       correctAnswer: "It's a fundamental principle"
//     },
//     {
//       question: `How is ${topic} typically applied?`,
//       options: [
//         "In theoretical research",
//         "In practical applications",
//         "In both theory and practice",
//         "In neither theory nor practice"
//       ],
//       correctAnswer: "In both theory and practice"
//     },
//     {
//       question: `What is the primary benefit of understanding ${topic}?`,
//       options: [
//         "Better problem-solving ability",
//         "Improved technical skills",
//         "Enhanced theoretical knowledge",
//         "All of the above"
//       ],
//       correctAnswer: "All of the above"
//     }
//   ];
// }

// // 4. Parse OpenAI response into MCQ format
// function parseOpenAIResponse(content: string): MCQQuestion[] | null {
//   try {
//     // First try to parse as JSON
//     try {
//       const parsed = JSON.parse(content);
//       if (Array.isArray(parsed) && 
//           parsed.every(q => q.question && Array.isArray(q.options) && q.correctAnswer)) {
//         return parsed;
//       }
//     } catch (e) {
//       console.log("Not JSON format, trying text parsing");
//     }

//     // Fallback: Try to parse formatted text
//     const questions = content.split(/\d+\.|Q\d+:/).filter(q => q.trim());
//     return questions.map(q => {
//       const lines = q.trim().split('\n').filter(l => l.trim());
//       const question = lines[0].trim();
//       const options = lines.slice(1, -1).map(l => 
//         l.replace(/^[A-D]\)|^[A-D]\.|^-/, '').trim()
//       );
//       const correctAnswer = options[0]; // Default to first option if not specified

//       return {
//         question,
//         options: options.length >= 4 ? options : [
//           "Option A",
//           "Option B",
//           "Option C",
//           "Option D"
//         ],
//         correctAnswer
//       };
//     });
//   } catch (error) {
//     console.error("Failed to parse OpenAI response:", error);
//     return null;
//   }
// }

// // 5. Retrieve content & generate questions
// export async function generateQuizQuestions(topic: string): Promise<MCQQuestion[]> {
//   if (!topic) {
//     console.warn("No topic provided");
//     return generateDefaultQuestions("general knowledge");
//   }

//   try {
//     // First try to find the topic in our chunks
//     const relevant = chunks.filter(chunk =>
//       chunk.topic.toLowerCase().includes(topic.toLowerCase())
//     );

//     const context = relevant.map(r => r.content).slice(0, 3).join("\n\n");

//     try {
//       const completion = await openai.chat.completions.create({
//         model: "gpt-3.5-turbo",
//         messages: [
//           {
//             role: "system",
//             content: `You are a quiz generator. Create 3 multiple-choice questions about the given topic.
//             Each question should have:
//             1. A clear question
//             2. Four options (A, B, C, D)
//             3. One correct answer
            
//             Format as a JSON array of objects like:
//             [
//               {
//                 "question": "Question text?",
//                 "options": ["Option A", "Option B", "Option C", "Option D"],
//                 "correctAnswer": "Option that is correct"
//               }
//             ]`
//           },
//           {
//             role: "user",
//             content: `Create MCQ questions about: ${topic}
//             Context: ${context || 'This is a topic in computer science or programming.'}`
//           }
//         ],
//         temperature: 0.7,
//         max_tokens: 1000,
//       });

//       const generatedText = completion.choices[0]?.message?.content || "";
//       const questions = parseOpenAIResponse(generatedText);

//       if (questions && questions.length > 0) {
//         return questions;
//       }

//     } catch (openaiError) {
//       console.error("OpenAI API error:", openaiError);
//     }

//     // If we get here, either OpenAI failed or returned invalid format
//     return generateDefaultQuestions(topic);

//   } catch (error) {
//     console.error("Error in generateQuizQuestions:", error);
//     return generateDefaultQuestions(topic);
//   }
// }

// server/utils/ragEngine.ts

import { OpenAI } from "openai";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";

export interface MCQQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

// Load environment variables
dotenv.config({ path: path.join(__dirname, "../../.env") });

// 1. Load preprocessed chunks (simulating retrieval DB)
const chunks = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/chunks.json"), "utf-8")
) as { topic: string; content: string }[];

// 2. Initialize OpenAI
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// 3. Generate default MCQ questions for a topic
function generateDefaultQuestions(topic: string): MCQQuestion[] {
  return [
    {
      question: `What is the main concept of ${topic}?`,
      options: [
        "It's a fundamental principle",
        "It's an advanced technique",
        "It's a theoretical concept",
        "It's a practical application"
      ],
      correctAnswer: "It's a fundamental principle"
    },
    {
      question: `How is ${topic} typically applied?`,
      options: [
        "In theoretical research",
        "In practical applications",
        "In both theory and practice",
        "In neither theory nor practice"
      ],
      correctAnswer: "In both theory and practice"
    },
    {
      question: `What is the primary benefit of understanding ${topic}?`,
      options: [
        "Better problem-solving ability",
        "Improved technical skills",
        "Enhanced theoretical knowledge",
        "All of the above"
      ],
      correctAnswer: "All of the above"
    }
  ];
}

// 4. Parse OpenAI response into MCQ format
function parseOpenAIResponse(content: string): MCQQuestion[] | null {
  try {
    // First try to parse as JSON
    try {
      const parsed = JSON.parse(content);
      if (Array.isArray(parsed) && 
          parsed.every(q => q.question && Array.isArray(q.options) && q.correctAnswer)) {
        return parsed;
      }
    } catch (e) {
      console.log("Not JSON format, trying text parsing");
    }

    // Fallback: Try to parse formatted text
    const questions = content.split(/\d+\.|Q\d+:/).filter(q => q.trim());
    return questions.map(q => {
      const lines = q.trim().split('\n').filter(l => l.trim());
      const question = lines[0].trim();
      const options = lines.slice(1, -1).map(l => 
        l.replace(/^[A-D]\)|^[A-D]\.|^-/, '').trim()
      );
      const correctAnswer = options[0]; // Default to first option if not specified

      return {
        question,
        options: options.length >= 4 ? options : [
          "Option A",
          "Option B",
          "Option C",
          "Option D"
        ],
        correctAnswer
      };
    });
  } catch (error) {
    console.error("Failed to parse OpenAI response:", error);
    return null;
  }
}

// 5. Retrieve content & generate questions
export async function generateQuizQuestions(topic: string): Promise<MCQQuestion[]> {
  if (!topic) {
    console.warn("No topic provided");
    return generateDefaultQuestions("general knowledge");
  }

  try {
    // First try to find the topic in our chunks
    const relevant = chunks.filter(chunk =>
      chunk.topic.toLowerCase().includes(topic.toLowerCase())
    );

    const context = relevant.map(r => r.content).slice(0, 3).join("\n\n");

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are a quiz generator. Create 3 multiple-choice questions about the given topic.
            Each question should have:
            1. A clear question
            2. Four options (A, B, C, D)
            3. One correct answer
            
            Format as a JSON array of objects like:
            [
              {
                "question": "Question text?",
                "options": ["Option A", "Option B", "Option C", "Option D"],
                "correctAnswer": "Option that is correct"
              }
            ]`
          },
          {
            role: "user",
            content: `Create MCQ questions about: ${topic}
            Context: ${context || 'This is a topic in computer science or programming.'}`
          }
        ],
        temperature: 0.7,
        max_tokens: 1000,
      });

      const generatedText = completion.choices[0]?.message?.content || "";
      const questions = parseOpenAIResponse(generatedText);

      if (questions && questions.length > 0) {
        return questions;
      }

    } catch (openaiError) {
      console.error("OpenAI API error:", openaiError);
    }

    // If we get here, either OpenAI failed or returned invalid format
    return generateDefaultQuestions(topic);

  } catch (error) {
    console.error("Error in generateQuizQuestions:", error);
    return generateDefaultQuestions(topic);
  }
}
