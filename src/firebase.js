// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhc78C_-6jsWWi1PHp_OF0b74nLnaSMXs",
  authDomain: "city-hospital-a0a07.firebaseapp.com",
  projectId: "city-hospital-a0a07",
  storageBucket: "city-hospital-a0a07.appspot.com",
  messagingSenderId: "517779877109",
  appId: "1:517779877109:web:3a3f1c7553e23bdb9329bc",
  measurementId: "G-4XW4V9WFSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
