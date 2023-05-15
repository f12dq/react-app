import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWB8GOnZTodEnWidPKFN3tN212wbGVYto",
  authDomain: "dumitru-malic.firebaseapp.com",
  databaseURL: "https://dumitru-malic-default-rtdb.firebaseio.com",
  projectId: "dumitru-malic",
  storageBucket: "dumitru-malic.appspot.com",
  messagingSenderId: "105989324230",
  appId: "1:105989324230:web:33bba09bd6769c86e786c7",
  measurementId: "G-2BFFX5HMLT"
};
if (firebase.apps.length === 0) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ experimentalForceLongPolling: true });
} else {
  console.log("firebase apps already running...");
}

const auth = firebase.auth();
const db = firebase.firestore();

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // We will display Google as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

export { auth, db, uiConfig };
