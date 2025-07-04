// Zod Schemas
import { z } from 'zod';
export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export type loginSchema = z.infer<typeof loginSchema>;

export const signupSchema = z.object({
  name: z.string().min(1, 'Name is required for signup'),
  email: z.string().email('Please enter a valid email address'),
  role: z.enum(['student', 'instructor'], {
    errorMap: () => ({ message: 'Role must be either student or instructor' }),
  }),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  confirmPassword: z.string().min(6, 'Confirm password is required'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

export type signupSchema = z.infer<typeof signupSchema>;