// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCpVx2dTu6pIjU9kIUHeWvkLwcd2wKWGiY",
  authDomain: "blogproject-79045.firebaseapp.com",
  projectId: "blogproject-79045",
  storageBucket: "blogproject-79045.appspot.com",
  messagingSenderId: "29538569202",
  appId: "1:29538569202:web:6bb66de16070892b51b96b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()