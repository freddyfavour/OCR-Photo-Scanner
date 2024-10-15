import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBabwddYGAXWY8Y9xSn1auNAbOfO7hxK0o",
  authDomain: "res-build.firebaseapp.com",
  projectId: "res-build",
  storageBucket: "res-build.appspot.com",
  messagingSenderId: "755096563596",
  appId: "1:755096563596:web:0a700794600ae6430db0a9",
  measurementId: "G-R8ZF530SX1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
