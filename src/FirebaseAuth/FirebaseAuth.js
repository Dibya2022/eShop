import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBh7XamY5zcm7lKLpHtvlh-HG3OQ5ZP_-0",
  authDomain: "eshop-786df.firebaseapp.com",
  projectId: "eshop-786df",
  storageBucket: "eshop-786df.appspot.com",
  messagingSenderId: "39718446538",
  appId: "1:39718446538:web:a0f161e3f2e63e5189db33",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
