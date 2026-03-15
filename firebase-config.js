// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpzLKgY5VQGhS60xB6uPhUaM45WzcJPDI",
  authDomain: "gametest1-86e5d.firebaseapp.com",
  projectId: "gametest1-86e5d",
  storageBucket: "gametest1-86e5d.firebasestorage.app",
  messagingSenderId: "325164779802",
  appId: "1:325164779802:web:db4d32d3738aa00f1c84a3",
  measurementId: "G-Y9J9VB5ZDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
