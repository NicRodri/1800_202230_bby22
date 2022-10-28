// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARcFv7CFePts0UnHYkK5O9Gl9LLS-hL5U",
  authDomain: "balance-teambby22.firebaseapp.com",
  projectId: "balance-teambby22",
  storageBucket: "balance-teambby22.appspot.com",
  messagingSenderId: "3885337258",
  appId: "1:3885337258:web:0f7545ca7a119fc175ded3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebase.firestore();