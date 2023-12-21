// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDst0vvB61P27YyI8qR1X5I5LxRv_1-_I8",
  authDomain: "alphabi-66d15.firebaseapp.com",
  projectId: "alphabi-66d15",
  storageBucket: "alphabi-66d15.appspot.com",
  messagingSenderId: "965839939852",
  appId: "1:965839939852:web:c61ac8795c6947fe3bc129",
  measurementId: "G-D8Z0NCQ9V5"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// export default {app, auth};

export default firebase;
