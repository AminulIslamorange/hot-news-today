// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiPQKxqIife1ozU17zW9l5gmy6HEQSI4Y",
  authDomain: "hotnews-today.firebaseapp.com",
  projectId: "hotnews-today",
  storageBucket: "hotnews-today.appspot.com",
  messagingSenderId: "37005637862",
  appId: "1:37005637862:web:2b8a3fb5589ea014066327"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;