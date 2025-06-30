import type { Topic } from "../interface/types";
import api from "./api";

type QuizResult = {
  courseId: string;
  passed: boolean;
  score: number;
  total?: number
};

export const submitQuiz = async (
 results: QuizResult[],
): Promise<Topic[]> => {
  await api.post('/user-progress/complete', 
   
   results,
  );

  const progressRes = await api.get(`/user-progress/`);
  if (progressRes.status < 200 || progressRes.status >= 300) {
    throw new Error('Failed to fetch updated progress');
  }

  return progressRes.data;
};