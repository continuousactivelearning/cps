/* AUTHOR - NIKITA S RAJ KAPINI (CREATED ON 12/06/2025) */
/*UPDATED BY NIKITA S RAJ KAPINI ON 18/06/2025*/

import express from 'express';
import { Request, Response } from 'express';
import UserResponse from '../models/UserResponse';
import Assessment from '../models/Assessment';
import jwt from 'jsonwebtoken';

const router = express.Router();

function getUserEmailFromToken(req: Request): string | null {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) return null;

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    return decoded.email;
  } catch (error) {
    console.error('JWT decoding failed:', error);
    return null;
  }
}

// POST: Submit user answers
router.post('/submit', async (req: Request, res: Response): Promise<void> => {
  const { assessmentId, userId, answers } = req.body;

  const email = getUserEmailFromToken(req);

  if (!email) {
    res.status(401).json({ error: 'Unauthorized: Email not found in token' });
    return;
  }

  try {
    const assessment = await Assessment.findById(assessmentId);
    if (!assessment) {
      res.status(404).json({ error: 'Assessment not found' });
      return;
    }

    const evaluatedResponses = assessment.questions.map((q, i) => {
      const userAns = answers[i]?.userAnswer || [];
    let correct = false;

    if (Array.isArray(q.correct_answer)) {
    const userArray = Array.isArray(userAns) ? userAns : [userAns];
    correct =
        q.correct_answer.slice().sort().join(',') === userArray.slice().sort().join(',');
    } else {
    correct = q.correct_answer === userAns;
    }

      return {
        questionText: q.question,
        userAnswer: userAns,
        correctAnswer: q.correct_answer,
        isCorrect: correct,
        topic_tested: q.topic_tested,
      };
    });

    const totalQuestions = evaluatedResponses.length;
    const correctAnswers = evaluatedResponses.filter(r => r.isCorrect).length;
    const percentageScore = Math.round((correctAnswers / totalQuestions) * 100);

    const newResponse = new UserResponse({
      assessmentId,
      userId: email,
      targetTopic: assessment.targetTopic,
      responses: evaluatedResponses,
      percentage_score: percentageScore,
      timeTaken: req.body.timeTaken
    });

    await newResponse.save();
    res.json({ message: 'Response recorded successfully', result: newResponse });
  } catch (err) {
    console.error('❌ Error submitting response:', err);
    res.status(500).json({ error: 'Server error while submitting response' });
  }
});



// GET: Analyze performance to suggest weak prerequisite topics
router.get('/analysis/:assessmentId', async (req: Request, res: Response) => {
  const assessmentId = req.params.assessmentId;
  const email = getUserEmailFromToken(req); // secure extraction

  if (!email) {
    res.status(401).json({ error: 'Unauthorized: Email not found in token' });
    return;
  }

  try {
    const response = await UserResponse.findOne({ userId: email, assessmentId });
    const assessment = await Assessment.findById(assessmentId);

    if (!response || !assessment) {
      res.status(404).json({ error: 'User response or assessment not found' });
      return;
    }

    const conceptMap = new Map<string, string>(); // Map topic_tested => concept_area

    assessment.questions.forEach((q) => {
      if (typeof q.topic_tested === 'string' && typeof q.concept_area === 'string') {
        conceptMap.set(q.question, `${q.topic_tested}|${q.concept_area}`);
      }
    });

    const weakTopics: string[] = [];
    const weakConcepts: string[] = [];

    for (const q of response.responses) {
        if (!q.isCorrect) {
          if (Array.isArray(q.topic_tested)) {
            weakTopics.push(...q.topic_tested);
          } else if (typeof q.topic_tested === 'string') {
            weakTopics.push(q.topic_tested);
          }

          // Match concept area from original assessment by question text
          const match = conceptMap.get(q.questionText);
          if (match) {
            const [, concept] = match.split('|');
            if (concept) weakConcepts.push(concept.trim());
          }
        }
      }

    const uniqueTopics = [...new Set(weakTopics)];
    const uniqueConcepts = [...new Set(weakConcepts)];

    res.json({
      message: 'Analysis complete',
      weakTopics: uniqueTopics,
      weakConcepts: uniqueConcepts,
      recommendations: uniqueTopics.length
        ? `Please revisit these topics and concepts: ${uniqueTopics.join(', ')} | ${uniqueConcepts.join(', ')}.`
        : 'Great job! You’re ready to move forward with the target topic.'
    });
  } catch (err) {
    console.error('❌ Error generating analysis:', err);
    res.status(500).json({ error: 'Server error while generating analysis' });
  }
});

export const responseRoutes = router;