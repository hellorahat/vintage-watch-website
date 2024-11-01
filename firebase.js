// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKey,
  authDomain: import.meta.env.VITE_authDom,
  projectId: import.meta.env.VITE_proId,
  storageBucket: import.meta.env.VITE_strBucket,
  messagingSenderId: import.meta.env.VITE_msgSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measureId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { firestore };
console.log("hi")