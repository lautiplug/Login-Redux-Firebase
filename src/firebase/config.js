// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApDIxi4DhibKiy0bfdAJtDD3KlRMfn20M",
  authDomain: "react-cursos-a74bc.firebaseapp.com",
  projectId: "react-cursos-a74bc",
  storageBucket: "react-cursos-a74bc.appspot.com",
  messagingSenderId: "897316648537",
  appId: "1:897316648537:web:474ddda62568110e4ee348"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)