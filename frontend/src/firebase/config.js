// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGUNcNUXjn1Zvr3eCsRKp9tFLho1smyQQ",
  authDomain: "beewise-ccd2f.firebaseapp.com",
  projectId: "beewise-ccd2f",
  storageBucket: "beewise-ccd2f.firebasestorage.app",
  messagingSenderId: "933309064674",
  appId: "1:933309064674:web:a91caf19328c7a320fc5bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);