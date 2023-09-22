import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAo6yPAdrOCwGIXacyOu2WsncH2mnip70E",
  authDomain: "auth-08-35094.firebaseapp.com",
  projectId: "auth-08-35094",
  storageBucket: "auth-08-35094.appspot.com",
  messagingSenderId: "565820024409",
  appId: "1:565820024409:web:9c425198c802fdae6e3348",
  measurementId: "G-BE6CGQXSVD",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Use getAuth instead of getauth
const firestore = getFirestore(app);

export { auth, firestore };
