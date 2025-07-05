import { useState, useEffect } from 'react';
import axios from 'axios';

export interface CustomQuizProgressionOptions {
  userId: string;
  difficulties: { name: string; key: string }[];
}

export interface CustomQuizProgressionResult {
  completed: string[];
  lockedUntil: Record<string, number>;
  loading: boolean;
  refresh: () => void;
}

// Usage: const { completed, lockedUntil, loading, refresh } = useCustomQuizProgression({ userId, difficulties });
export function useCustomQuizProgression({ userId, difficulties }: CustomQuizProgressionOptions): CustomQuizProgressionResult {
  const [completed, setCompleted] = useState<string[]>([]);
  const [lockedUntil, setLockedUntil] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [refreshFlag, setRefreshFlag] = useState(0);

  useEffect(() => {
    const fetchStatus = async () => {
      setLoading(true);
      try {
        const userRes = await axios.get(`/api/users/${userId}`);
        const userData = userRes.data;
        const customQuizInfos = userData.customQuizzes || [];
        const completedLevels: string[] = [];
        const lockedLevels: Record<string, number> = {};
        const userUpdatedAt = userData.updatedAt || userData.createdAt || new Date().toISOString();

        // Get all custom quizzes for this user
        const customQuizzesRes = await axios.get(`/api/users/${userId}/custom-quizzes`);
        const allCustomQuizzes = customQuizzesRes.data.customQuizzes || [];

        for (const diff of difficulties) {
          // Find completed custom quizzes for this difficulty level
          const levelQuizzes = allCustomQuizzes.filter((quiz: any) => 
            quiz.quizLevel === diff.key && quiz.isSubmitted
          );

          // CUSTOM QUIZ: 1 attempt per level, unlock next level after completion, lock after 1 attempt
          if (levelQuizzes.length > 0) {
            completedLevels.push(diff.key);
            // Lock this level after 1 attempt (effectively forever)
            const lastQuiz = levelQuizzes[levelQuizzes.length - 1];
            const lastTime = new Date(lastQuiz.submittedAt || userUpdatedAt).getTime();
            lockedLevels[diff.key] = lastTime + 100 * 365 * 24 * 60 * 60 * 1000; // Effectively forever
          }
        }

        setCompleted(completedLevels);
        setLockedUntil(lockedLevels);
      } catch (e) {
        console.error('Error fetching custom quiz progression:', e);
        setCompleted([]);
        setLockedUntil({});
      }
      setLoading(false);
    };

    if (userId) {
      fetchStatus();
    }
  }, [userId, refreshFlag]);

  const refresh = () => {
    setRefreshFlag(prev => prev + 1);
  };

  return { completed, lockedUntil, loading, refresh };
}
