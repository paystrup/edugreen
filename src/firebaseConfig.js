// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZq2eVWTDcTzEZ7xvTyNoHjeuSnw1xhBQ",
  authDomain: "fir-app-7315b.firebaseapp.com",
  projectId: "fir-app-7315b",
  storageBucket: "fir-app-7315b.appspot.com",
  messagingSenderId: "426564172776",
  appId: "1:426564172776:web:4185c200977ec26227825d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// storage
export const storage = getStorage(app);
export const db = getFirestore(app);