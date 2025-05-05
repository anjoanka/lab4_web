import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Додано
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBIik-Pj7UJXzAsGv_PIDmHESZK4wJoDYI",
  authDomain: "sportify-f808b.firebaseapp.com",
  projectId: "sportify-f808b",
  storageBucket: "sportify-f808b.appspot.com",
  messagingSenderId: "334428415051",
  appId: "1:334428415051:web:8212cfe00d9618ffe999ce",
  measurementId: "G-3R0KZ5L53T"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Експортуємо auth
const analytics = getAnalytics(app);