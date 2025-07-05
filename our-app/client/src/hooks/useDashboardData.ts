import { useEffect, useState } from "react";
import { mongoIdToString } from "../utils/mongoIdHelper";

export function useDashboardData(userId: string) {
  console.log("[useDashboardData] hook initialized for userId:", userId);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [recommendedPath, setRecommendedPath] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Function to refresh data
  const refreshData = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const userRes = await fetch(`/api/users/${userId}/dashboard`);
        const userData = await userRes.json();
        console.log("[Dashboard DEBUG] userData from API:", userData);
        // Normalize quizzes and customQuizzes to preserve populated quizId object and add quizIdString for lookups
        if (userData.quizzes) {
          userData.quizzes = userData.quizzes.map((att: any) => {
            const isPopulated = att.quizId && typeof att.quizId === 'object' && att.quizId._id;
            return {
              ...att,
              quizId: att.quizId, // preserve the object if populated
              quizIdString: mongoIdToString(isPopulated ? att.quizId._id : att.quizId),
            };
          });
        }
        if (userData.customQuizzes) {
          userData.customQuizzes = userData.customQuizzes.map((att: any) => {
            const isPopulated = att.quizId && typeof att.quizId === 'object' && att.quizId._id;
            return {
              ...att,
              quizId: att.quizId, // preserve the object if populated
              quizIdString: mongoIdToString(isPopulated ? att.quizId._id : att.quizId),
            };
          });
        }
        setUser(userData);
        // Extract recommended path from dashboard response
        if (userData.recommendations?.path?.path) {
          setRecommendedPath(userData.recommendations.path.path);
        } else {
          setRecommendedPath([]);
        }
      } catch (e: any) {
        setError(e.message || "Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [userId, refreshTrigger]);

  // Refresh data when window gains focus (user returns from course)
  useEffect(() => {
    const handleFocus = () => {
      refreshData();
    };
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  // Concept coverage (based on recommended path and backend course progress)
  let totalConcepts = recommendedPath.length;
  // Create timeline state from backend course progress data
  const [timeline, setTimeline] = useState<any[]>([]);

  // Helper: Get all quiz attempts for a concept and their percentage scores
  function getConceptQuizPercentages(conceptName: string) {
    const quizzes = (user?.quizzes || []).filter(att => {
      if (att.quizId && typeof att.quizId === 'object' && att.quizId.topic && att.quizId.topic.courseName) {
        return att.quizId.topic.courseName.toLowerCase() === conceptName.toLowerCase();
      }
      return false;
    });
    // For each quiz, calculate percentage: (userScore / totalQuestions) * 100
    return quizzes.map(q => {
      let totalQuestions = 0;
      if (q.quizId && typeof q.quizId === 'object' && Array.isArray(q.quizId.questions)) {
        totalQuestions = q.quizId.questions.length;
      }
      // fallback: if no questions, treat as 1 to avoid division by zero
      totalQuestions = totalQuestions > 0 ? totalQuestions : 1;
      return typeof q.userScore === 'number' ? Math.round((q.userScore / totalQuestions) * 100) : 0;
    });
  }

  // Calculate timeline with average percentage per concept
  useEffect(() => {
    if (!user || !recommendedPath.length) {
      setTimeline([]);
      return;
    }
    const timelineItems = recommendedPath.map((courseName: string, idx: number) => {
      const normalizedCourseName = courseName.toLowerCase().trim();
      const userCourse = user?.courseProgress?.courses?.find((c: any) => c.courseName.toLowerCase().trim() === normalizedCourseName);
      const status = userCourse?.status || 'enrolled';
      // Get all quiz percentage scores for this concept
      const quizPercentages = getConceptQuizPercentages(courseName);
      // Average only if there are scores
      const avgPercent = quizPercentages.length > 0 ? Math.round(quizPercentages.reduce((a, b) => a + b, 0) / quizPercentages.length) : 0;
      // A concept is "covered" if the course is completed with a good score (>=60%)
      // OR if the course is explicitly marked as completed regardless of score
      const isCompleted = status === 'completed';
      const hasGoodScore = avgPercent >= 60;
      const isCovered = isCompleted || hasGoodScore;
      return {
        name: courseName,
        covered: isCovered,
        score: avgPercent, // Use average percentage for the concept
        actualScore: avgPercent,
        order: idx,
        status: status,
        isDefaultScore: false // Not needed now
      };
    });
    setTimeline(timelineItems);
  }, [user, recommendedPath]);

  // Calculate concepts covered from timeline
  const conceptsCovered = timeline.filter(item => item.covered).length;
  const conceptCoveragePercent = totalConcepts ? Math.round((conceptsCovered / totalConcepts) * 100) : 0;

  // Calculate average percentage score across all concepts in timeline (only those with at least one quiz attempt)
  let averageScore = 0;
  if (timeline.length > 0) {
    const scores = timeline.filter(item => item.score > 0).map(item => item.score);
    averageScore = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  }

  // Performance by concept: use timeline percentage scores
  const performanceData = {
    labels: timeline.map(c => c.name || 'Unknown'),
    datasets: [
      {
        label: "Scores",
        data: timeline.map(c => (typeof c.score === 'number' ? c.score : 0)),
        backgroundColor: timeline.map(c => c.covered ? "#3b82f6" : "#d1d5db"),
        borderRadius: 8,
        barPercentage: 0.6,
      },
    ],
  };

  // Build testHistory directly from user.quizzes & user.customQuizzes
  const testHistory = [
    ...(user?.quizzes || []).map(att => {
      const quizIdString = att.quizIdString || mongoIdToString(att.quizId && att.quizId._id ? att.quizId._id : att.quizId);
      // Try to get topic name from populated quizId object
      let topicName = 'Quiz';
      if (att.quizId && typeof att.quizId === 'object' && att.quizId.topic && att.quizId.topic.courseName) {
        topicName = att.quizId.topic.courseName;
      }
      return {
        recordId: mongoIdToString(att._id),
        quizId: quizIdString,
        date: att.submittedAt,
        userScore: att.userScore,
        feedback: 'Standard Quiz',
        name: topicName || 'Quiz',
        userAnswers: att.userAnswers || [],
        attempt: {
          ...att,
          quizId: quizIdString,
          userAnswers: att.userAnswers || [],
        },
      };
    }),
    ...(user?.customQuizzes || []).map(att => {
      const quizIdString = att.quizIdString || mongoIdToString(att.quizId && att.quizId._id ? att.quizId._id : att.quizId);
      // Try to get custom quiz title if available
      let customQuizName = 'Custom Quiz';
      if (att.quizId && typeof att.quizId === 'object' && att.quizId.title) {
        customQuizName = att.quizId.title;
      }
      return {
        recordId: mongoIdToString(att._id),
        quizId: quizIdString,
        date: att.submittedAt,
        userScore: att.userScore,
        feedback: 'Custom Quiz',
        name: customQuizName || 'Custom Quiz',
        userAnswers: att.userAnswers || [],
        attempt: {
          ...att,
          quizId: quizIdString,
          userAnswers: att.userAnswers || [],
        },
      };
    }),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Final checks for score formatting - ensure we don't include % symbols in the averageScore
  const formattedAverageScore = isNaN(averageScore) ? 0 : Math.round(averageScore * 100) / 100;

  return {
    loading,
    error,
    user,
    averageScore: formattedAverageScore, // No % symbol here, we'll add it in the UI if needed
    conceptCoveragePercent,
    conceptsCovered,
    totalConcepts,
    timeline,
    performanceData,
    testHistory,
    refreshData,
  };
}
