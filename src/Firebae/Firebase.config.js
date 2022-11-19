// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhItYRKoSIZ0A0NWeWWArCjS0t8fDzgfo",
  authDomain: "doctors-portal-f43f4.firebaseapp.com",
  projectId: "doctors-portal-f43f4",
  storageBucket: "doctors-portal-f43f4.appspot.com",
  messagingSenderId: "534349148775",
  appId: "1:534349148775:web:64284265cdda3b02f21ac2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;