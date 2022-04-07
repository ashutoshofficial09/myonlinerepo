// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAHwQqfsTqDAbbSum0Uay5cHbS-ioSLc8",
  authDomain: "slack-cl-yt.firebaseapp.com",
  projectId: "slack-cl-yt",
  storageBucket: "slack-cl-yt.appspot.com",
  messagingSenderId: "817410805899",
  appId: "1:817410805899:web:15c31a30002514945cc48e",
  measurementId: "G-EDE7FSP18E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
