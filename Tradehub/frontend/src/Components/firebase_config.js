// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY9ikCNiJPJSNLPN4zUs7SCdZDnUcO3G8",
  authDomain: "tradehub-890d4.firebaseapp.com",
  projectId: "tradehub-890d4",
  storageBucket: "tradehub-890d4.appspot.com",
  messagingSenderId: "196061299257",
  appId: "1:196061299257:web:f8b9a55735871c9100c3e8",
  measurementId: "G-4RY2ZHB0FQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export {app}