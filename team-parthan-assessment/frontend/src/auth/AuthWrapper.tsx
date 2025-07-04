import React, { useState } from 'react';
import AuthComponent from './AuthComponent';
import { login, signup } from '../services/authService';
// import { useAuth } from '../context/AuthContext'; if using auth context

interface AuthWrapperProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const AuthWrapper: React.FC<AuthWrapperProps> = ({ isOpen, setIsOpen }) => {
  //const [isOpen, setIsOpen] = useState(false);
//   const { userlogin } = useAuth(); // If using auth context

  const handleLogin = async (formData: { email: string; password: string }) => {
    const response = await login(formData); // Ensure 'role' is returned from login
    console.log("Login response:", response);
    const { token, userId, role } = response;
    // Store the token (in localStorage or cookies)
    localStorage.setItem('token', token);
    localStorage.setItem('id', userId);
    localStorage.setItem('role', role);
    // If using auth context:
    // userlogin({ id: userId, token });
    return response;
  };

  const handleSignup = async (formData: { email: string; password: string; confirmPassword: string;  name: string; role: string }) => {
    const response = await signup(formData);
    const { token, userId, role } = response;
    // Store the token
    localStorage.setItem('token', token);
    localStorage.setItem('id',userId);
    localStorage.setItem('role', role); 
    // If using auth context:
    // userlogin({ id: userId, token });
    return response;
  };

  return (
    <AuthComponent
      onLogin={handleLogin}
      onSignup={handleSignup}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  );
};

export default AuthWrapper;