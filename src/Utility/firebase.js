// Import the functions you need from the SDKs you need
// Importing Firebase modules using v9 syntax
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAit81pveeqAaXZA9rSk0Kal-Sk9PXgxXI",
  authDomain: "clone-c96c2.firebaseapp.com",
  projectId: "clone-c96c2",
  storageBucket: "clone-c96c2.firebasestorage.app",
  messagingSenderId: "410956021439",
  appId: "1:410956021439:web:33a59405ce92d870ad900a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
