// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9X9mVjATwmY9AmGVpxLOwcdnMaaQIGWo",
  authDomain: "harsha-portfolio-a9387.firebaseapp.com",
  projectId: "harsha-portfolio-a9387",
  storageBucket: "harsha-portfolio-a9387.firebasestorage.app",
  messagingSenderId: "1078700461479",
  appId: "1:1078700461479:web:d975ef15ed0c91dd5efa82",
  measurementId: "G-K7B958WL5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);