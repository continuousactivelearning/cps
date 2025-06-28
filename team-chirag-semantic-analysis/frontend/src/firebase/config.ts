// src/firebase/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnX6799V78nkMHCC98n4HIQ6k51Tf8yrs",
  authDomain: "query2concept.firebaseapp.com",
  projectId: "query2concept",
  storageBucket: "query2concept.appspot.com", 
  messagingSenderId: "838000724641",
  appId: "1:838000724641:web:1e1ae394d13c01a88a3ee0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export { app };  