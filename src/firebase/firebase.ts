// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByjlCCOHm31yRXmgiu6G-fU_WUb2cvMUM",
  authDomain: "entertiament-web-app.firebaseapp.com",
  projectId: "entertiament-web-app",
  storageBucket: "entertiament-web-app.appspot.com",
  messagingSenderId: "674319405846",
  appId: "1:674319405846:web:8dd098fad5d38511593637",
  measurementId: "G-54KZ8CDKN8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
