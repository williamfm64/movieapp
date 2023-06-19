// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2pIs2kQaFBPnul-Lj6-1KLizDOC6-Ovo",
  authDomain: "movie-app-77741.firebaseapp.com",
  projectId: "movie-app-77741",
  storageBucket: "movie-app-77741.appspot.com",
  messagingSenderId: "900574916818",
  appId: "1:900574916818:web:7b002e65aaad83778cfd0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);