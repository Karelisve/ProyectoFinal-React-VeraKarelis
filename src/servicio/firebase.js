// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg_I0EQsxCB6vYUXXb5cj6_-26HFLRQ-o",
  authDomain: "tienda-potus-2f7a2.firebaseapp.com",
  projectId: "tienda-potus-2f7a2",
  storageBucket: "tienda-potus-2f7a2.appspot.com",
  messagingSenderId: "341658623393",
  appId: "1:341658623393:web:de2e7d358b574cadfabfe0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)