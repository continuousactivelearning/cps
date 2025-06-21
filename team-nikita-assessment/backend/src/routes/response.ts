/* AUTHOR - NIKITA S RAJ KAPINI (CREATED ON 12/06/2025) */
import express from 'express';
import { Request, Response } from 'express';
import UserResponse from '../models/UserResponse';
import Assessment from '../models/Assessment';

const router = express.Router();

// POST: Submit user answers
router.post('/submit', async (req: Request, res: Response): Promise<void> => {
  const { assessmentId, userId, answers } = req.body;

  try {
    const assessment = await Assessment.findById(assessmentId);
    if (!assessment) {
      res.status(404).json({ error: 'Assessment not found' });
      return;
    }

    const evaluatedResponses = assessment.questions.map((q, i) => {
      const userAns = answers[i]?.userAnswer || [];
    //   const correct = Array.isArray(q.correct_answer)
    //     ? q.correct_answer.sort().join(',') === userAns.sort().join(',')
    //     : q.correct_answer === userAns;
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

    const newResponse = new UserResponse({
      assessmentId,
      userId,
      targetTopic: assessment.targetTopic,
      responses: evaluatedResponses
    });

    await newResponse.save();
    res.json({ message: 'Response recorded successfully', result: newResponse });
  } catch (err) {
    console.error('❌ Error submitting response:', err);
    res.status(500).json({ error: 'Server error while submitting response' });
  }
});

// GET: Analyze performance to suggest weak prerequisite topics
router.get('/analysis/:userId/:assessmentId', async (req: Request, res: Response) => {
  const { userId, assessmentId } = req.params;

  try {
    const response = await UserResponse.findOne({ userId, assessmentId });
    if (!response) {
      res.status(404).json({ error: 'User response not found' });
      return;
    }

    const weakTopics = response.responses
      .filter(q => !q.isCorrect)
      .map(q => q.topic_tested);

    const uniqueWeakTopics = [...new Set(weakTopics)];

    res.json({
      message: 'Analysis complete',
      weakTopics,
      recommendations: uniqueWeakTopics.length
        ? `Please revisit the following prerequisite topics before continuing: ${uniqueWeakTopics.join(', ')}.`
        : 'Great job! You’re ready to move forward with the target topic.'
    });
  } catch (err) {
    console.error('❌ Error generating analysis:', err);
    res.status(500).json({ error: 'Server error while generating analysis' });
  }
});

export const responseRoutes = router;
