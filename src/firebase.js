import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDqU4zjDHa91dD6YZAxTzfZBjDE09QQ7vI",
    authDomain: "clone-arsh.firebaseapp.com",
    projectId: "clone-arsh",
    storageBucket: "clone-arsh.appspot.com",
    messagingSenderId: "579375313472",
    appId: "1:579375313472:web:a391d9b581cc9c5a54e5a5",
    measurementId: "G-9NDNB5WLTS"
  });

// const db =firebaseApp.firestore();
const auth = firebase.auth();

export { auth };