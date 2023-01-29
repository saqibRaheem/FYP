// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXEzSye3qWO_BDflyH36dhR3P-drfNfD0",
  authDomain: "fyp-storage-25d6e.firebaseapp.com",
  projectId: "fyp-storage-25d6e",
  storageBucket: "fyp-storage-25d6e.appspot.com",
  messagingSenderId: "604470828415",
  appId: "1:604470828415:web:1fba28265bf680fe088e4a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
