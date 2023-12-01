// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnhrsUED4ZTykkuoFo8lDmqVyw2iw8wEk",
  authDomain: "react-course-c76ff.firebaseapp.com",
  projectId: "react-course-c76ff",
  storageBucket: "react-course-c76ff.appspot.com",
  messagingSenderId: "252784361634",
  appId: "1:252784361634:web:66e5fb80c66ccd7550d7fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
