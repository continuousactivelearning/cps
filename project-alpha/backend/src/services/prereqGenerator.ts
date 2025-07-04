import axios from 'axios';

export async function generatePrerequisites(topic: string): Promise<string[]> {
  try {
    console.log('⏳ Asking GPT-4o via OpenRouter for topic:', topic);

    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-4o',
        max_tokens: 100, // ✅ Limit token usage to fit free plan
        messages: [
          {
            role: 'user',
            content: `
You are an expert computer science curriculum designer.

A student wants to learn the topic: "${topic}".  
Your task is to return **only the essential prerequisite concepts** the student must clearly understand *before* learning it.

🔒 STRICT RULES:
- DO NOT include the topic "${topic}" or any of its subtopics (e.g., SQL for DBMS, CNN for Deep Learning).
- DO NOT include advanced or future concepts.
- DO NOT repeat vague/general concepts (like both "Math" and "Set Theory").
- DO NOT include explanations or descriptions — just topic names.
- DO NOT return fewer than 4 or more than 7 items.

✅ Focus only on foundational, truly required concepts that directly prepare a student to understand "${topic}".

📄 Output format:
1. Topic A  
2. Topic B  
3. Topic C  
...  
(Maximum 7 topics, Minimum 4 if fewer are needed)
`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const content: string = response.data.choices[0]?.message?.content ?? '';
    console.log('✅ GPT Response:', content);

    const list = content
      .split('\n')
      .map((line: string) => line.replace(/^\d+\.?\s*/, '').trim())
      .filter(Boolean);

    return list.length > 0 ? list : ['⚠️ Could not generate prerequisites. Try another topic.'];
  } catch (error: any) {
    console.error('❌ GPT API error:\n', error?.response?.data || error.message);
    return ['⚠️ Unable to generate prerequisites. Try another topic.'];
  }
}



///2nd version
// import axios from 'axios';

// export async function generatePrerequisites(topic: string): Promise<string[]> {
//   try {
//     console.log('⏳ Asking GPT-4o via OpenRouter for topic:', topic);

//     const response = await axios.post(
//       'https://openrouter.ai/api/v1/chat/completions',
//       {
//         model: 'openai/gpt-4o',
//         max_tokens: 200,
//         messages: [
//           {
//             role: 'user',
//             content: `
// You are an expert computer science curriculum designer.

// A student wants to learn the topic: "${topic}".  
// Your task is to identify **only the essential prerequisite concepts** that a student must clearly understand *before* learning this topic.

// 🧠 Think carefully — return only topics that are genuinely foundational and required for learning "${topic}".  
// Do NOT list the topic itself or any of its subtopics.

// 📌 Rules:
// - Return a list of 4 to 7 items, but only include what is truly relevant.
// - If fewer than 7 are valid, return fewer — do NOT invent or pad.
// - Do NOT include vague/general items like both "Math" and "Set Theory" (combine them if needed).
// - Do NOT explain the topics — just list the names.
// - Do NOT include future or internal topics like "SQL" for DBMS or "CNN" for ML.

// 📄 Output format:
// 1. Topic A  
// 2. Topic B  
// ...
// (Maximum 7 clean, relevant prerequisite topics only)
//  `,
//           },
//         ],
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
//           'Content-Type': 'application/json',
//         },
//       }
//     );

//     const rawContent: string = response.data.choices[0]?.message?.content ?? '';
//     console.log('✅ GPT Response:\n', rawContent);

//     const initialList = rawContent
//       .split('\n')
//       .map((line: string) => line.replace(/^\d+\.?\s*/, '').split(':')[0].trim())
//       .filter(Boolean);

//     const topicLower = topic.toLowerCase();

//     const bannedSubtopics: Record<string, string[]> = {
//       'database management systems': ['sql', 'normalization', 'transactions'],
//       'theory of computation': ['automata', 'formal languages'],
//       'machine learning': ['cnn', 'rnn', 'deep learning'],
//     };

//     const banned = [
//       topicLower,
//       ...(bannedSubtopics[topicLower] || []),
//     ];

//     // Deduplicate + filter
//     const seen = new Set<string>();
//     const finalList = initialList.filter((item) => {
//       const clean = item.toLowerCase();
//       if (seen.has(clean)) return false;
//       seen.add(clean);
//       return !banned.some(b => clean.includes(b));
//     });

//     return finalList.length >= 4 ? finalList : finalList;
//   } catch (error: any) {
//     console.error('❌ GPT API error:\n', error?.response?.data || error.message);
//     return ['⚠️ Unable to generate prerequisites. Try another topic.'];
//   }
// }
