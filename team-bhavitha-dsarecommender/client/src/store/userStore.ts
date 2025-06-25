import { create } from "zustand";
import { persist } from "zustand/middleware";



interface UserProfile {
  username: string;
  email?: string;
  mastery: Record<string, number>;
  progress: string[];
  recommendations: string[];
  quizHistory: any[];
  setQuizHistory: (history: any[]) => void;
  setProfile: (profile: Partial<UserProfile>) => void;
  clearProfile: () => void;
}

export const useUserStore = create<UserProfile>()(
  persist(
    (set) => ({
      username: "",
      email: "",
      mastery: {},
      progress: [],
      recommendations: [],
      quizHistory: [],
      setQuizHistory: (history) =>
        set({ quizHistory: history }),
      setProfile: (profile) =>
        set((state) => ({
          ...state,
          ...profile,
        })),
      clearProfile: () =>
        set({
          username: "",
          email: "",
          mastery: {},
          progress: [],
          recommendations: [],
        }),
    }),
    {
      name: "user-profile", // key used in localStorage
    }
  )
);
