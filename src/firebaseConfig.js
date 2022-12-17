// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBue8vtWIpdva63y9h7FHg2lRYbmLO2zo0",
  authDomain: "estoquehospitalmunicipal.firebaseapp.com",
  projectId: "estoquehospitalmunicipal",
  storageBucket: "estoquehospitalmunicipal.appspot.com",
  messagingSenderId: "814586759571",
  appId: "1:814586759571:web:008874758cede72461c066",
  measurementId: "G-DNL8DGLQZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);