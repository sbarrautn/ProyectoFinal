// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWxCpmVNKwcn8Ckc9vscHMj3SE4p4B4IU",
  authDomain: "proyectofinal-abe28.firebaseapp.com",
  projectId: "proyectofinal-abe28",
  storageBucket: "proyectofinal-abe28.appspot.com",
  messagingSenderId: "424437724625",
  appId: "1:424437724625:web:d89f7770a394e0b3c4dcf0",
  measurementId: "G-VK3VYEZHHK"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const database = getFirestore();

export{ auth, database };