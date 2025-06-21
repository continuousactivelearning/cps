//Author:Yeddula Pushkala            Data:12-06-25
import { removeStopwords } from 'stopword';

export const preprocessText = (text: string): string => {
  let processed = text.toLowerCase().trim();
  processed = processed.replace(/[^\w\s']/g, ' ');
  processed = processed.replace(/\s+/g, ' ');
  
  const tokens = processed.split(' ');
  const customStopwords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for'];
  const filteredTokens = removeStopwords(tokens, customStopwords);
  
  return filteredTokens.join(' ');
};

export const expandSynonyms = (text: string): string => {
  const synonymMap = {
    'ml': 'machine learning',
    'ai': 'artificial intelligence',
    'prereqs': 'prerequisites',
    'reqs': 'requirements',
    'neural nets': 'neural networks',
    'nn': 'neural networks',
    'lr': 'linear regression'
  };
  
  let expanded = text;
  for (const [abbrev, full] of Object.entries(synonymMap)) {
    const regex = new RegExp(`\\b${abbrev}\\b`, 'gi');
    expanded = expanded.replace(regex, full);
  }
  
  return expanded;
};
