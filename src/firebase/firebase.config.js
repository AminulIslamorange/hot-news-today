
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD1rDeohDhy8S3-q3raBKlMThy9WhRBMUs",
  authDomain: "dragon-news-af576.firebaseapp.com",
  projectId: "dragon-news-af576",
  storageBucket: "dragon-news-af576.appspot.com",
  messagingSenderId: "277727237207",
  appId: "1:277727237207:web:3e69ca674a3b2388ebff12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;