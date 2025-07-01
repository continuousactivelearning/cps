import { useEffect, useState } from "react";

export function useDashboardData(userId: string) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [learningPath, setLearningPath] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const userRes = await fetch(`/api/users/${userId}/dashboard`);
        const userData = await userRes.json();
        setUser(userData);
        // Optionally fetch learning path if route exists
        try {
          const pathRes = await fetch(`/api/users/${userId}/learning-path`);
          if (pathRes.ok) {
            const pathData = await pathRes.json();
            setLearningPath(pathData);
          }
        } catch {}
      } catch (e: any) {
        setError(e.message || "Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [userId]);

  // Calculate average score
  let averageScore = 0;
  let allQuizzes: any[] = [];
  if (user) {
    allQuizzes = [...(user.quizzes || []), ...(user.customQuizzes || [])];
    if (allQuizzes.length > 0) {
      averageScore =
        allQuizzes.reduce((sum, q) => sum + (q.userScore || 0), 0) /
        allQuizzes.length;
    }
  }

  // Concept coverage (after path selection)
  let conceptsCovered = 0;
  let totalConcepts = 0;
  if (learningPath && learningPath.length > 0) {
    totalConcepts = learningPath.length;
    conceptsCovered = allQuizzes.filter(q =>
      learningPath.some((c: any) => c.quizId === q.quizId?.$oid || c.quizId === q.quizId)
    ).length;
  }
  const conceptCoveragePercent = totalConcepts ? Math.round((conceptsCovered / totalConcepts) * 100) : 0;

  // Timeline: mark covered/uncovered
  const timeline = (learningPath || []).map((concept: any, idx: number) => {
    const quiz = allQuizzes.find(q => concept.quizId === q.quizId?.$oid || concept.quizId === q.quizId);
    return {
      ...concept,
      covered: !!quiz,
      score: quiz ? quiz.userScore : null,
      order: idx,
    };
  });

  // Performance by concept
  const performanceData = {
    labels: timeline.map(c => c.name),
    datasets: [
      {
        label: "Scores",
        data: timeline.map(c => c.score != null ? Math.round((c.score / (c.total || 1)) * 100) : 0),
        backgroundColor: timeline.map(c => c.covered ? "#3b82f6" : "#d1d5db"),
        borderRadius: 8,
        barPercentage: 0.6,
      },
    ],
  };

  // Test history (all quizzes)
  const testHistory = allQuizzes.map(q => ({
    ...q,
    date: q.date || user?.updatedAt,
  }));

  return {
    loading,
    error,
    user,
    averageScore: Math.round(averageScore * 100) / 100,
    conceptCoveragePercent,
    conceptsCovered,
    totalConcepts,
    timeline,
    performanceData,
    testHistory,
  };
}
