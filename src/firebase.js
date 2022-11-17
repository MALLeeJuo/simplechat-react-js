import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBor84ZmpO4XZKBGWLxFC1ztHst55iPgfw",
  authDomain: "simplechat-react-js.firebaseapp.com",
  projectId: "simplechat-react-js",
  storageBucket: "simplechat-react-js.appspot.com",
  messagingSenderId: "446214347127",
  appId: "1:446214347127:web:a78628dbb25f5f5d9a2972"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
