// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // Import Firebase Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmlmLnfshKyIl7p7VtLd_n8JXpMA_gA3o",
  authDomain: "skyhireweb.firebaseapp.com",
  projectId: "skyhireweb",
  storageBucket: "skyhireweb.appspot.com",
  messagingSenderId: "821954081840",
  appId: "1:821954081840:web:8c78eb81c186f49fc569f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); // Initialize Firebase Storage

export { db, auth, storage };
