// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-F1WiITTQSD_Q-d_Lga5JPQK7pWF0-rs",
  authDomain: "user-email-pass-auth-c8ca6.firebaseapp.com",
  projectId: "user-email-pass-auth-c8ca6",
  storageBucket: "user-email-pass-auth-c8ca6.firebasestorage.app",
  messagingSenderId: "862607896420",
  appId: "1:862607896420:web:9786a7547eea0f998bd471"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();