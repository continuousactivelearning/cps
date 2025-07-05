// src/types/auth.ts

export interface UserProfile {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
  userInfo?: {
    programmingExperience: string;
    knownLanguages: string[];
    dsaExperience: string;
    preferredPace: string;
  };
  knownConcepts?: {
    topics: Array<{
      id: string;
      name: string;
      type: string;
      subtopics: Array<{
        id: string;
        name: string;
        type: string;
      }>;
    }>;
    totalTopics: number;
    totalSubtopics: number;
  };
  createdAt: string;
  googleId?: string;
}

export interface AuthResponse {
  token: string;
  user: UserProfile;
  isFirstTime: boolean;
}

export interface GoogleAuthMessageEvent extends MessageEvent {
  data: AuthResponse & { error?: string };
}
