import { useState, useCallback } from 'react';
import { mongoIdToString } from './mongoIdHelper';

/**
 * Custom hook for fetching quiz data with proper error handling
 * and MongoDB ObjectId conversion
 */
export function useQuizFetcher() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  /**
   * Fetch a quiz by ID with proper error handling
   * @param quizId - The quiz ID (handles various MongoDB ObjectId formats)
   * @returns The quiz data or null if there was an error
   */
  const fetchQuiz = useCallback(async (quizId: any) => {
    setLoading(true);
    setError(null);
    
    try {
      // Convert the ID to a string using our helper
      const idString = mongoIdToString(quizId);
      
      if (!idString) {
        throw new Error('Invalid quiz ID');
      }
      
      // Fetch the quiz
      const endpoint = `/api/quizzes/${idString}`;
      console.log(`Fetching quiz data from: ${endpoint}`);
      
      const response = await fetch(endpoint);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch quiz data: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!data) {
        throw new Error('Quiz data is empty or null');
      }
      
      return data;
    } catch (err: any) {
      const error = err instanceof Error ? err : new Error(String(err));
      console.error('Error fetching quiz:', error);
      setError(error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    fetchQuiz,
    loading,
    error
  };
}

export default useQuizFetcher;
