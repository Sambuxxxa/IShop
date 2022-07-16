// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCiA0DMYSstDpDIsXiDSIxNc-Lk5Q3MOJE",
    authDomain: "phone-shop-47a06.firebaseapp.com",
    databaseURL: "https://phone-shop-47a06-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "phone-shop-47a06",
    storageBucket: "phone-shop-47a06.appspot.com",
    messagingSenderId: "559290066503",
    appId: "1:559290066503:web:4baf77615d185ad4d6b362"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

export const auth = getAuth();
