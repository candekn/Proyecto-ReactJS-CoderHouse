// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore/lite";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3w1iV8V7iWjRRvmOIA4GNrbYVQT73dJM",
  authDomain: "tangerine-games.firebaseapp.com",
  projectId: "tangerine-games",
  storageBucket: "tangerine-games.appspot.com",
  messagingSenderId: "270234242329",
  appId: "1:270234242329:web:eac8d7247b7844b8bfc988"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)