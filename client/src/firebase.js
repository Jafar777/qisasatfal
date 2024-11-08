// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,

  authDomain: "qisasatfal-b83c2.firebaseapp.com",

  projectId: "qisasatfal-b83c2",

  storageBucket: "qisasatfal-b83c2.firebasestorage.app",

  messagingSenderId: "732698730440",

  appId: "1:732698730440:web:b3532162f11a886dadeafd",

  measurementId: "G-D7PRN8M7ZE"

};






// Initialize Firebase
export const app = initializeApp(firebaseConfig);
