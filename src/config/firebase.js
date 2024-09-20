// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB38zH14hznJVIpGEnIUYdL2le5PgTWj_8",
  authDomain: "fuerza-del-pueblo-punta-cana.firebaseapp.com",
  projectId: "fuerza-del-pueblo-punta-cana",
  storageBucket: "fuerza-del-pueblo-punta-cana.appspot.com",
  messagingSenderId: "707981537280",
  appId: "1:707981537280:web:6939f2326b19e4a760a8e5",
  measurementId: "G-F0K74Z7Z5E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
