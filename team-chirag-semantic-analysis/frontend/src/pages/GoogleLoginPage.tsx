// src/pages/GoogleLoginPage.tsx
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/config";
import { useAuth } from "../contexts/AuthContext";

const GoogleLoginPage: React.FC = () => {
  const { user } = useAuth();

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google sign-in failed:", error);
    }
  };

  if (user) {
    return (
      <div className="text-center">
        <img src={user.photoURL ?? ""} alt="profile" className="rounded-full w-20 mx-auto" />
        <h2>{user.displayName}</h2>
        <p>{user.email}</p>
      </div>
    );
  }

  return (
    <div className="text-center mt-20">
      <button
        onClick={handleSignIn}
        className="bg-blue-600 text-white px-6 py-2 rounded shadow"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleLoginPage;
