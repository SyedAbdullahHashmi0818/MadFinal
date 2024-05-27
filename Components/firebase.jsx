// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARE1SDJcJQSkvWuSyaMOSR8jLfGHwAOFs",
  authDomain: "wifidirect-1628d.firebaseapp.com",
  projectId: "wifidirect-1628d",
  storageBucket: "wifidirect-1628d.appspot.com",
  messagingSenderId: "224524636538",
  appId: "1:224524636538:web:846b39d9a3ecac1695c6c3",
  measurementId: "G-5RQPB68N7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export default auth