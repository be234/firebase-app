// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUeYLr4r5hHl_YQdrYDvsQY388D_DwYU0",
    authDomain: "fir-app-a953c.firebaseapp.com",
    projectId: "fir-app-a953c",
    storageBucket: "fir-app-a953c.appspot.com",
    messagingSenderId: "1004675299340",
    appId: "1:1004675299340:web:9b33489614a5104cbfd629"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);