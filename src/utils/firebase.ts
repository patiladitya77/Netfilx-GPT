// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj7DYeGgkMvuA8vBH3gYTmCZjZ3KiAzTY",
  authDomain: "netflix-gpt-12d56.firebaseapp.com",
  projectId: "netflix-gpt-12d56",
  storageBucket: "netflix-gpt-12d56.firebasestorage.app",
  messagingSenderId: "751973174729",
  appId: "1:751973174729:web:8f0ef9b1223a3d0866ec18",
  measurementId: "G-NYL600ER7G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
