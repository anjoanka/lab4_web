import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Додано
import { getAnalytics } from "firebase/analytics";



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Експортуємо auth
const analytics = getAnalytics(app);