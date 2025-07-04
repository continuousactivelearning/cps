import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // Import uuid

export interface MCQ {
  id: string; // Add an ID to each MCQ for better tracking
  topic: string;
  question: string;
  options: string[];
  answer: string;
}

// In-memory store for generated questions to avoid duplicates within a session.
// This is per-server-instance. In a scaled environment, consider a shared cache like Redis.
const generatedQuestions: Map<string, Set<string>> = new Map(); // Stores question content (string) for uniqueness check

/**
 * Resets the in-memory cache of generated questions.
 * @param topics Optional array of topics to reset. If not provided, all topics are reset.
 */
export function resetGeneratedQuestions(topics?: string[]) {
  if (topics && topics.length > 0) {
    topics.forEach(topic => {
      generatedQuestions.delete(topic);
      console.log(`Cleared generated questions cache for topic: "${topic}"`);
    });
  } else {
    // Clear all if no topics are specified or an empty array is passed
    generatedQuestions.clear();
    console.log("Cleared all generated questions cache.");
  }
}

/**
 * Generates MCQs for given prerequisites using an AI model.
 * It attempts to generate unique questions and can reset its internal cache.
 * @param prerequisites An array of topics (strings) for which to generate MCQs.
 * @param targetQuestionCount The total number of questions to generate across all prerequisites.
 * @param shouldResetCacheForTopics If true, clears the internal cache for the given prerequisites before generating new questions.
 * @param courseName Optional course name to provide better context for MCQ generation.
 * @returns A Promise that resolves to an array of MCQ objects.
 */
export async function generateMCQs(prerequisites: string[], targetQuestionCount: number, shouldResetCacheForTopics: boolean = false, courseName?: string): Promise<MCQ[]> {
  const results: MCQ[] = [];

  if (shouldResetCacheForTopics) {
    resetGeneratedQuestions(prerequisites);
  }

  // To distribute questions evenly and handle cases where some topics might not yield questions
  let topicIndex = 0;
  const maxAttemptsPerTopic = 5; // To prevent infinite loops if a topic can't generate unique questions
  const topicAttempts: Map<string, number> = new Map(); // Track attempts for each topic

  // Create a working copy of prerequisites that we can modify (e.g., remove if exhausted)
  let currentPrerequisites = [...prerequisites];

  // Loop until targetQuestionCount is reached or no more questions can be generated
  while (results.length < targetQuestionCount && currentPrerequisites.length > 0) {
    const currentTopic = currentPrerequisites[topicIndex % currentPrerequisites.length];

    // Initialize set for topic if not exists
    if (!generatedQuestions.has(currentTopic)) {
      generatedQuestions.set(currentTopic, new Set());
    }
    const previousQuestionsForTopic = generatedQuestions.get(currentTopic)!;

    // Track attempts for the current topic
    const attempts = (topicAttempts.get(currentTopic) || 0) + 1;
    topicAttempts.set(currentTopic, attempts);

    if (attempts > maxAttemptsPerTopic) {
      console.warn(`Skipping topic "${currentTopic}" due to too many failed attempts to generate unique questions.`);
      // Remove this topic from currentPrerequisites to avoid trying it indefinitely
      currentPrerequisites = currentPrerequisites.filter(t => t !== currentTopic);
      topicIndex = (topicIndex + 1) % currentPrerequisites.length; // Move to next topic
      continue; // Skip to the next iteration of the while loop
    }

    const recentPreviousQuestionsContent = Array.from(previousQuestionsForTopic)
      .slice(Math.max(0, previousQuestionsForTopic.size - 5));

    try {
      const courseContext = courseName ? ` in the context of the course "${courseName}"` : '';
      const prompt = `Generate one unique beginner-level multiple-choice question (MCQ) on the topic "${currentTopic}" as a prerequisite topic ${courseContext} that has not been generated before based on its content.
If any programs or code snippets are included, format them using HTML so they are displayed properly and not as raw text.
Return the response in the following JSON format:
{
  "question": "...",
  "options": ["...", "...", "...", "..."],
  "answer": "..."
}
- The "options" array must contain exactly 4 options.
- The "answer" must be the exact text of the correct option (e.g., "1/6", not "a. 1/6").
- Do not include any prefixes (like "a.", "b.", etc.) in the options or answer.
- Ensure the question is distinct from any previously generated questions for this topic.
${recentPreviousQuestionsContent.length > 0 ? `Do not repeat any of the following questions (based on their content): ${recentPreviousQuestionsContent.map(q => `"${q.replace(/"/g, '\\"')}"`).join(', ')}` : ''}`;


      const response = await axios.post(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          model: 'openai/gpt-4o-mini',
          max_tokens: 250,
          messages: [{ role: 'user', content: prompt }],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const content = response.data.choices[0]?.message?.content ?? '';
      let mcqData: { question: string; options: string[]; answer: string };

      try {
        mcqData = JSON.parse(content);
      } catch (parseError) {
        console.error(`Error parsing JSON response for topic "${currentTopic}":`, parseError);
        // Do not add a placeholder to results, just move on
        topicIndex = (topicIndex + 1) % currentPrerequisites.length;
        continue; // Try next topic
      }

      const questionContentKey = mcqData.question.trim().toLowerCase();
      const isDuplicateByContent = previousQuestionsForTopic.has(questionContentKey);

      if (
        typeof mcqData.question === 'string' &&
        Array.isArray(mcqData.options) &&
        mcqData.options.length === 4 &&
        mcqData.options.every((opt: unknown) => typeof opt === 'string') &&
        typeof mcqData.answer === 'string' &&
        mcqData.options.includes(mcqData.answer) &&
        !isDuplicateByContent
      ) {
        previousQuestionsForTopic.add(questionContentKey);
        results.push({
          id: uuidv4(),
          topic: currentTopic, // Assign the topic the question was generated for
          question: mcqData.question,
          options: mcqData.options,
          answer: mcqData.answer,
        });
        // Reset attempts for this topic if a question was successfully generated
        topicAttempts.set(currentTopic, 0);
      } else {
        console.warn(`Invalid format or duplicate content from LLM for topic "${currentTopic}". Is Duplicate? ${isDuplicateByContent}`);
        // Do not add a placeholder, just increment topicIndex and try again
      }
    } catch (error: any) {
      console.error(`API error during MCQ generation for topic "${currentTopic}":`, error?.response?.data || error.message);
      // Do not add a placeholder, just increment topicIndex and try again
    }

    // Move to the next topic in a circular fashion
    topicIndex = (topicIndex + 1) % currentPrerequisites.length;

    // If we've looped through all available topics and haven't generated a new question,
    // or if we've exhausted all topics, break to prevent infinite loop.
    if (results.length === 0 && topicIndex === 0 && attempts > 1) { // If no questions generated in first full cycle
        console.warn("Could not generate any unique questions after trying all topics. Breaking loop.");
        break;
    }
  }

  // If after the loop we still don't have enough questions, fill with placeholders
  while (results.length < targetQuestionCount) {
    results.push({
      id: uuidv4(),
      topic: 'N/A', // Or some default topic
      question: `⚠️ Could not generate enough unique questions. Question ${results.length + 1}.`,
      options: [],
      answer: ''
    });
  }

  return results;
}
