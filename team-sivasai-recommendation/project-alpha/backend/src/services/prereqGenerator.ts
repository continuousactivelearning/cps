import axios from 'axios';

export async function generatePrerequisites(topic: string): Promise<string[]> {
  try {
    console.log('⏳ Asking GPT-4o via OpenRouter for topic:', topic);

    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-4o',
        max_tokens: 200, // ✅ Limit token usage to fit free plan
        messages: [
          {
            role: 'user',
            content: `List 5 to 7 prerequisite concepts needed to understand "${topic}" in computer science. Only return the concepts as a plain numbered list.`,
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
