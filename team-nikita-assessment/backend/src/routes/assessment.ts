/* AUTHOR - NIKITA S RAJ KAPINI (CREATED ON 10/06/2025) */
/* AUTHOR - NIKITA S RAJ KAPINI (UPDATED ON 14/06/2025) and 26/06/2025 */
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

  if (!prereqs || prereqs.length === 0) {
    res.json({
      _id: '', // optionally return null or empty
      targetTopic: target,
      prerequisites: [],
      questions: []
    });
    return;
  }

  let finalAssessment = null;
  const MAX_RETRIES = 3;
  let attempt = 0;

  while (attempt < MAX_RETRIES && !finalAssessment) {
    attempt++;
    console.log(`🔁 Attempt ${attempt} to generate assessment...`);

    try {
      const rawResponse = await getAssessment(prompt);
      const content = rawResponse?.choices?.[0]?.message?.content;

      if (!content) {
        console.warn('⚠️ No content in LLM response');
        continue;
      }

      const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)\s*```/) || content.match(/\{[\s\S]*\}/);
      let jsonString = jsonMatch ? jsonMatch[1] || jsonMatch[0] : '';

      if (!jsonString.trim()) {
        console.warn('⚠️ No JSON found in LLM response');
        continue;
      }

      let parsed: any = null;
      try {
        const cleanedContent = jsonString
          .replace(/[\u0000-\u001F\u007F-\u009F]/g, '')
          .replace(/\\n/g, '')
          .replace(/\\"/g, '"');

        parsed = JSON.parse(cleanedContent);
      } catch (parseErr) {
        console.warn('⚠️ Failed to parse cleaned JSON:', parseErr);
        continue;
      }

      if (!parsed.questions || !Array.isArray(parsed.questions)) {
        console.warn('⚠️ Questions missing or malformed');
        continue;
      }

      const sanitizedQuestions: any[] = [];
      parsed.questions.forEach((q: any) => {
        if (!q.question || !q.correct_answer || !q.type) return;

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

      if (sanitizedQuestions.length >= 3) {
        finalAssessment = new Assessment({
          targetTopic: parsed.targetTopic ?? target,
          prerequisites: prereqs,
          questions: sanitizedQuestions,
        });

        await finalAssessment.save();
        break;
      } else {
        console.warn(`⚠️ Only ${sanitizedQuestions.length} questions found — retrying...`);
      }
    } catch (err) {
      console.error('❌ Error during assessment generation attempt:', err);
    }
  }

  if (finalAssessment) {
    res.json(finalAssessment);
  } else {
    res.status(500).json({ error: 'Failed to generate valid assessment after multiple attempts.' });
  }
});

export const assessmentRoutes = router;
