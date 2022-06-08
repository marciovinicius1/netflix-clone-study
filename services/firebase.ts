// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASVU0kcuufvdAgPizhU2lhyzlxKKec4DU",
  authDomain: "netflix-c-study.firebaseapp.com",
  projectId: "netflix-c-study",
  storageBucket: "netflix-c-study.appspot.com",
  messagingSenderId: "769618672204",
  appId: "1:769618672204:web:882398f05d4b653b9d52e9",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
