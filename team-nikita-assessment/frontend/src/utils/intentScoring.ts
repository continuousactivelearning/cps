//Author:Yeddula Pushkala            Data:13-06-25
import { fuzzyMatch } from './textMatching';

// Simple stopword removal without external dependency for now
const removeBasicStopwords = (tokens: string[]): string[] => {
  const stopwords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by'];
  return tokens.filter(token => !stopwords.includes(token.toLowerCase()));
};

export const calculateIntentScore = (userInput: string, intentPatterns: any): number => {
  const input = userInput.toLowerCase().trim();
  const tokens = removeBasicStopwords(input.split(' '));
  let score = 0;

  // Exact phrase match: +5 points
  if (intentPatterns.phrases) {
    intentPatterns.phrases.forEach((phrase: string) => {
      if (input.includes(phrase.toLowerCase())) {
        score += 5;
      }
    });
  }

  // Partial phrase match: +3 points
  if (intentPatterns.phrases) {
    intentPatterns.phrases.forEach((phrase: string) => {
      const phraseWords = phrase.toLowerCase().split(' ');
      const matchedWords = phraseWords.filter(word => input.includes(word));
      if (matchedWords.length >= phraseWords.length * 0.6 && matchedWords.length < phraseWords.length) {
        score += 3;
      }
    });
  }

  // Single-word direct match: +4 points
  if (intentPatterns.single_words) {
    intentPatterns.single_words.forEach((word: string) => {
      if (tokens.includes(word.toLowerCase()) || fuzzyMatch(input, word)) {
        score += 4;
      }
    });
  }

  // Single keyword match: +1 point
  if (intentPatterns.keywords) {
    intentPatterns.keywords.forEach((keyword: string) => {
      if (tokens.includes(keyword.toLowerCase())) {
        score += 1;
      }
    });
  }

  // Synonym matching with fuzzy logic
  if (intentPatterns.synonyms) {
    intentPatterns.synonyms.forEach((synonym: string) => {
      tokens.forEach(token => {
        if (fuzzyMatch(token, synonym, 0.75)) {
          score += 2;
        }
      });
    });
  }

  return score;
};

export const calculateConfidenceThreshold = (userInput: string, totalScore: number): { confidence: number, threshold: number } => {
  const words = userInput.trim().split(' ');
  const wordCount = words.length;
  
  let baseThreshold = 0.1;
  
  if (wordCount === 1) {
    baseThreshold = 0.05;
  } else if (wordCount <= 3) {
    baseThreshold = 0.08;
  } else if (wordCount <= 6) {
    baseThreshold = 0.12;
  } else {
    baseThreshold = 0.15;
  }
  
  const maxPossibleScore = 15;
  const confidence = Math.min(totalScore / maxPossibleScore, 1);
  
  return { confidence, threshold: baseThreshold };
};
