// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeqQ5yKhO0IhXcTUq44B7XVd5cv7ZjTUY",
  authDomain: "hng-task3-76eaa.firebaseapp.com",
  projectId: "hng-task3-76eaa",
  storageBucket: "hng-task3-76eaa.appspot.com",
  messagingSenderId: "168616096037",
  appId: "1:168616096037:web:68a7d394df4b3822e96acc",
  measurementId: "G-C4BWNYTZ9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)