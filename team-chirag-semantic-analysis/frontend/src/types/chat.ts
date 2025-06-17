export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  links?: LinkPreview[];
}

export interface LinkPreview {
  url: string;
  domain: string;
  title?: string;
  description?: string;
  image?: string;
  favicon?: string;
  badge?: 'YouTube' | 'DSA';
  loading: boolean;
  error: boolean;
}
