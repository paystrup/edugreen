import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDckE_sza0m2IJCbYWwYmYcVgtk85JA1-4",
    authDomain: "webapp-74781.firebaseapp.com",
    projectId: "webapp-74781",
    storageBucket: "webapp-74781.appspot.com",
    messagingSenderId: "3389381951",
    appId: "1:3389381951:web:cc8b742ab20bf73239c78a"
  };

  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);
  export const db = getFirestore(app);