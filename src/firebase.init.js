// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAErWgLZ9QuDllby7CE-mHjVUa7Z7OjNCM",
    authDomain: "spacex-car-inventory.firebaseapp.com",
    projectId: "spacex-car-inventory",
    storageBucket: "spacex-car-inventory.appspot.com",
    messagingSenderId: "707975848316",
    appId: "1:707975848316:web:6e4b67001b6bf71310c4f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;