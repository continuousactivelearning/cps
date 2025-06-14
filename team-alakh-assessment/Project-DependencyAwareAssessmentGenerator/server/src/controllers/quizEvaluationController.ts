interface QuizSubmission {
  userId: string;
  quizId: string;
  answers: Record<string, string>;
}

/*async function evaluateQuiz(submission: QuizSubmission) {
  // 1. Fetch correct answers from DB
  const quiz = await Quiz.findById(submission.quizId);
  if (!quiz) throw new Error('Invalid quiz ID');
  
  // 2. Calculate score
  let correct = 0;
  Object.entries(submission.answers).forEach(([questionId, answer]) => {
    if (quiz.questions.get(questionId)?.correctAnswer === answer) correct++;
  });
  
  const score = (correct / quiz.questions.size) * 100;
  const passed = score >= quiz.passingThreshold;

  // 3. Update user progress
  await UserProgress.updateOne(
    { userId: submission.userId },
    { [passed ? '$addToSet' : '$pull']: { passedTopics: quiz.topicId } }
  );

  return {
    score,
    passed,
    retakeAllowed: !passed && quiz.maxAttempts > currentAttempt,
    learningMaterials: quiz.learningMaterials
  };
}
*/