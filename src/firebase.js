import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAAHwQqfsTqDAbbSum0Uay5cHbS-ioSLc8",
  authDomain: "slack-cl-yt.firebaseapp.com",
  projectId: "slack-cl-yt",
  storageBucket: "slack-cl-yt.appspot.com",
  messagingSenderId: "817410805899",
  appId: "1:817410805899:web:15c31a30002514945cc48e",
  measurementId: "G-EDE7FSP18E",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebase.fireStore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthprovider();

export { auth, db, provider };
