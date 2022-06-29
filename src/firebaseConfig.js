import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCWXzk7C3-wUwXA3Fdhr7K0hzKq7W1dY9k",
    authDomain: "rutfile-b3110.firebaseapp.com",
    projectId: "rutfile-b3110",
    storageBucket: "rutfile-b3110.appspot.com",
    messagingSenderId: "81850329652",
    appId: "1:81850329652:web:b1ea1991da1185c76bf861"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };