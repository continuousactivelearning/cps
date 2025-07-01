import { useState, useEffect } from 'react';
import axios from 'axios';

export interface QuizProgressionOptions {
  userId: string;
  language: string;
  topic: string;
  difficulties: { name: string; key: string }[];
}

export interface QuizProgressionResult {
  completed: string[];
  lockedUntil: Record<string, number>;
  loading: boolean;
  refresh: () => void;
}

// Usage: const { completed, lockedUntil, loading, refresh } = useQuizProgression({ userId, language, topic, difficulties });
export function useQuizProgression({ userId, language, topic, difficulties }: QuizProgressionOptions): QuizProgressionResult {
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
        const quizInfos = userData.quizzes || [];
        const completedLevels: string[] = [];
        const lockedLevels: Record<string, number> = {};
        const userUpdatedAt = userData.updatedAt || userData.createdAt || new Date().toISOString();
        for (const diff of difficulties) {
          try {
            const quizRes = await axios.get(`/api/quizzes/lang/${language}/level/${diff.key}/topic/${topic}`);
            const quiz = quizRes.data;
            const quizId = Array.isArray(quiz) ? (quiz[0]?._id || quiz[0]?.id) : (quiz?._id || quiz?.id);
            if (!quizId) continue;
            const attempts = quizInfos.filter((q: any) => {
              if (typeof q.quizId === 'string') return q.quizId === quizId;
              if (q.quizId && typeof q.quizId === 'object' && q.quizId.$oid) return q.quizId.$oid === quizId;
              return false;
            }).filter((a: any) => typeof a.userScore === 'number' && Array.isArray(a.userAnswers) && a.userAnswers.length > 0);
            // BASIC: 1 attempt, no lockout, unlock next level regardless of score, lock after 1 attempt
            if (topic === 'basic') {
              if (attempts.length > 0) {
                completedLevels.push(diff.key);
                // Lock this level after 1 attempt
                const lastAttempt = attempts[0];
                const lastTime = new Date(lastAttempt.updatedAt || userUpdatedAt).getTime();
                lockedLevels[diff.key] = lastTime + 100 * 365 * 24 * 60 * 60 * 1000; // Effectively forever
              }
              continue;
            }
            // OTHER TOPICS: 2 attempts, lockout if both ≤50%
            const passingAttempt = attempts.find((a: any) => {
              const score = typeof a.userScore === 'number' ? a.userScore : 0;
              const total = Array.isArray(a.userAnswers) ? a.userAnswers.length : 10;
              return total > 0 && (score / total) > 0.5;
            });
            if (passingAttempt) {
              completedLevels.push(diff.key);
              continue;
            }
            if (attempts.length >= 2) {
              const failedAttempts = attempts.filter((a: any) => {
                const score = typeof a.userScore === 'number' ? a.userScore : 0;
                const total = Array.isArray(a.userAnswers) ? a.userAnswers.length : 10;
                return total > 0 && (score / total) <= 0.5;
              });
              if (failedAttempts.length >= 2) {
                const lastAttempt = failedAttempts.reduce((latest: any, curr: any) => {
                  const lastDate = new Date(latest.updatedAt || latest.createdAt || userUpdatedAt);
                  const currDate = new Date(curr.updatedAt || curr.createdAt || userUpdatedAt);
                  return currDate > lastDate ? curr : latest;
                }, failedAttempts[0]);
                const lastTime = new Date(lastAttempt.updatedAt || userUpdatedAt).getTime();
                const now = Date.now();
                if (now - lastTime < 24 * 60 * 60 * 1000) {
                  lockedLevels[diff.key] = lastTime + 24 * 60 * 60 * 1000;
                }
              }
            }
          } catch (e) {
            continue;
          }
        }
        setCompleted(completedLevels);
        setLockedUntil(lockedLevels);
      } catch (e) {
        setCompleted([]);
        setLockedUntil({});
      }
      setLoading(false);
    };
    fetchStatus();
    // eslint-disable-next-line
  }, [userId, language, topic, refreshFlag]);

  return {
    completed,
    lockedUntil,
    loading,
    refresh: () => setRefreshFlag(f => f + 1)
  };
}
