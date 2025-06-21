/* AUTHOR - NIKITA S RAJ KAPINI (CREATED ON 10/06/2025) */
/* AUTHOR - NIKITA S RAJ KAPINI (UPDATED ON 13/06/2025) */
import express from 'express';
import { Request, Response } from 'express';
import { getPrerequisites } from '../services/prereqService';
import { generatePrompt } from '../services/promptService';
import { getAssessment } from '../services/apiService';
import Assessment from '../models/Assessment';

const router = express.Router();

router.post('/generate', async (req: Request, res: Response): Promise<void> => {
  const { target } = req.body;
  const prereqs = getPrerequisites(target);
  const prompt = generatePrompt(target, prereqs);

  console.log('Target Topic:', target);
  console.log('Prereqs:', prereqs);

  let content: string | undefined;
  let parsed: any = null;

  try {
    const rawResponse = await getAssessment(prompt);
    content = rawResponse?.choices?.[0]?.message?.content;

    if (!content) {
      console.error('❌ No content in LLM response');
      res.status(500).json({ error: 'No content in LLM response' });
      return;
    }

    console.log('📝 Raw LLM Content:\n', content);

    // Step 1: Extract first valid JSON object from the response using regex
    const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)\s*```/) || content.match(/\{[\s\S]*\}/);
    let jsonString = jsonMatch ? jsonMatch[1] || jsonMatch[0] : '';

    if (!jsonString.trim()) {
      console.error('❌ No JSON found in LLM response');
      res.status(500).json({ error: 'No valid JSON found in response' });
      return;
    }

    // Step 2: Clean and parse
    try {
      const cleanedContent = jsonString
        .replace(/[\u0000-\u001F\u007F-\u009F]/g, '')
        .replace(/\\n/g, '')
        .replace(/\\"/g, '"');

      parsed = JSON.parse(cleanedContent);
    } catch (parseErr) {
      console.error('❌ Failed to parse cleaned content:', parseErr);
      res.status(500).json({ error: 'Failed to parse assessment JSON' });
      return;
    }

    console.log('✅ Parsed questions BEFORE filtering:', parsed?.questions);

    // Step 3: Validate question structure
    if (!parsed.questions || !Array.isArray(parsed.questions)) {
      console.error('❌ Questions not properly structured in parsed content');
      res.status(400).json({ error: 'Invalid questions structure in response' });
      return;
    }

    // Step 4: Filter and sanitize questions
    const sanitizedQuestions: any[] = [];
    const malformedIndexes: number[] = [];

    parsed.questions.forEach((q: any, index: number) => {
      if (!q.question || !q.correct_answer || !q.type) {
        malformedIndexes.push(index);
        return;
      }

      sanitizedQuestions.push({
        question: q.question,
        options: Array.isArray(q.options) ? q.options : [],
        correct_answer: Array.isArray(q.correct_answer)
          ? q.correct_answer
          : [q.correct_answer],
        type: q.type,
        topic_tested: q.topic_tested ?? 'Unknown',
        concept_area: q.concept_area ?? 'General',
        difficulty: q.difficulty ?? 'Medium',
        insight_if_wrong: q.insight_if_wrong ?? '',
        estimated_time_min: q.estimated_time_min ?? 2,
      });
    });

    console.warn(`⚠️ Skipped ${malformedIndexes.length} malformed questions at indexes:`, malformedIndexes);

    if (sanitizedQuestions.length < 3) {
      res.status(500).json({
        error: 'Too many malformed questions. Please try again.',
        malformedCount: malformedIndexes.length,
      });
      return;
    }

    // Step 5: Save and respond
    const newAssessment = new Assessment({
      targetTopic: parsed.targetTopic ?? target,
      prerequisites: prereqs,
      questions: sanitizedQuestions,
    });

    await newAssessment.save();
    res.json(newAssessment);

  } catch (err) {
    console.error('❌ Unexpected error while generating assessment:', err);
    res.status(500).json({ error: 'Server error while generating assessment' });
  }
});

export const assessmentRoutes = router;
