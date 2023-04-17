// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAegcB0PHoQYatxBOvKvEWu9OgkjSQjNzc",
  authDomain: "react-bookmyshow.firebaseapp.com",
  databaseURL: "https://react-bookmyshow-default-rtdb.firebaseio.com",
  projectId: "react-bookmyshow",
  storageBucket: "react-bookmyshow.appspot.com",
  messagingSenderId: "729994593131",
  appId: "1:729994593131:web:7c9d2730766b7c8eab022e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);