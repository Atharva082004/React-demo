import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY || process.env.REACT_APP_API_KEY,
  authDomain:
    import.meta.env.VITE_AUTH_DOMAIN || process.env.REACT_APP_AUTH_DOMAIN,
  projectId:
    import.meta.env.VITE_PROJECT_ID || process.env.REACT_APP_PROJECT_ID,
  storageBucket:
    import.meta.env.VITE_STORAGE_BUCKET || process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:
    import.meta.env.VITE_MESSAGING_SENDER_ID ||
    process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID || process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
