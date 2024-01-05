import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import {getAuth} from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import {getFirestore} from 'firebase/firestore';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsH7pTuHCqcTlIKsp0CnUwp80is49kNns",
  authDomain: "chat-app-db190.firebaseapp.com",
  projectId: "chat-app-db190",
  storageBucket: "chat-app-db190.appspot.com",
  messagingSenderId: "877790915983",
  appId: "1:877790915983:web:dd314553b204322db92ffa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export const storage =getStorage();
export const db = getFirestore();
export const db1 = firebase.initializeApp(firebaseConfig).firestore();
// export const db1=app.
