// src/pages/Auth/GoogleLogin.tsx
import React from "react";
import { auth, provider } from "../../firebase/config";
import { signInWithPopup } from "firebase/auth";

export const GoogleLogin: React.FC = () => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
      // Optional: Save user info to localStorage
      localStorage.setItem("userProfile", JSON.stringify({
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL
      }));
      alert(`Welcome, ${user.displayName}`);
      // Optional: navigate to student dashboard
    } catch (error) {
      console.error("Google Sign-In error:", error);
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-white text-black p-2 border rounded hover:bg-gray-100 shadow"
    >
      Sign in with Google
    </button>
  );
};
