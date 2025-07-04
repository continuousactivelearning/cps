import type { Dispatch,SetStateAction } from "react";

export interface FormData {
  email: string;
  password: string;
  role?: string; // 'student' | 'instructor'
  confirmPassword?: string;
  name?: string;
}
export interface signupFormData {
  name: string;
  email: string;
  role: string;
  password: string;
  confirmPassword: string;
}


export interface AuthResponse {
  token?: string;
  role?: string;
  [key: string]: any;
}

export interface AuthComponentProps {
  onLogin?: (data: FormData) => Promise<AuthResponse>;
  onSignup?: (data: signupFormData) => Promise<AuthResponse>;
  onGoogleAuth?: () => void;
  setIsOpen:Dispatch<SetStateAction<boolean>>;
  isOpen:boolean;
}