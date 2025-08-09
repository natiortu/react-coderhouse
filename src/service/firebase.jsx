// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPuJ8mgYyY7z2uyd1_zRjzqw7DFMwqDLY",
  authDomain: "nataliaortu-388b3.firebaseapp.com",
  projectId: "nataliaortu-388b3",
  storageBucket: "nataliaortu-388b3.firebasestorage.app",
  messagingSenderId: "861659983384",
  appId: "1:861659983384:web:468793f93e890ce3631d6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);