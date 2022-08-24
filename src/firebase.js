// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC74pBiXuf0-bv2gx66HS3oTMT0NJZQ5Fg",
  authDomain: "kikiwai-react-app.firebaseapp.com",
  projectId: "kikiwai-react-app",
  storageBucket: "kikiwai-react-app.appspot.com",
  messagingSenderId: "420590312581",
  appId: "1:420590312581:web:7d4355c6a2177e6cf75dec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Esta variable representa la base de datos
export const db = getFirestore(app)

