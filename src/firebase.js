// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "epa-admin-d2fa7.firebaseapp.com",
  projectId: "epa-admin-d2fa7",
  storageBucket: "epa-admin-d2fa7.appspot.com",
  messagingSenderId: "626749219555",
  appId: "1:626749219555:web:5cc588dfb1c0e90c6b1bd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);