// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMDjE_PGk14ig8fEzE65pD8-n3txuJ3dI",
  authDomain: "watchsite-9f24c.firebaseapp.com",
  projectId: "watchsite-9f24c",
  storageBucket: "watchsite-9f24c.appspot.com",
  messagingSenderId: "737728809815",
  appId: "1:737728809815:web:5877f81621159621c50c12",
  measurementId: "G-19FLNBME2M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);
export { firestore };