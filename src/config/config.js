import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUt2iWmYHZ6k1Gc2bgHJaw8Y_Myq6a4ig",
  authDomain: "notesapp-53ce7.firebaseapp.com",
  projectId: "notesapp-53ce7",
  storageBucket: "notesapp-53ce7.appspot.com",
  messagingSenderId: "1025413196629",
  appId: "1:1025413196629:web:3487d73585bbd53776dddc",
  measurementId: "G-TWV5FKSB1D",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
