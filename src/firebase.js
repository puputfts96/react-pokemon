import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database'
var firebaseConfig = {
    apiKey: "AIzaSyAtA_6vzSZbH1Wex_c2r9EnDvmyqLZNfTk",
    authDomain: "pokemon-9ec57.firebaseapp.com",
    databaseURL: "https://pokemon-9ec57-default-rtdb.firebaseio.com",
    projectId: "pokemon-9ec57",
    storageBucket: "pokemon-9ec57.appspot.com",
    messagingSenderId: "837590175852",
    appId: "1:837590175852:web:95b18fc05081f38b90c849",
    measurementId: "G-RFG69JFQDX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
export const database=firebase.database;

export default firebase;