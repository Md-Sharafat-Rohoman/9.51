// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAme7ZiEuYgPzk9dV8egL0-05c1_GwmkJY",
    authDomain: "aut-moha-milon.firebaseapp.com",
    projectId: "aut-moha-milon",
    storageBucket: "aut-moha-milon.appspot.com",
    messagingSenderId: "273701861175",
    appId: "1:273701861175:web:79ad315524600f6b884cb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;