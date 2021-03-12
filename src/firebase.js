// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyD5gsXg_lzEJsA7SnbH3rKboX6GOpcr2Oc",
    authDomain: "robinhood-4e8f1.firebaseapp.com",
    projectId: "robinhood-4e8f1",
    storageBucket: "robinhood-4e8f1.appspot.com",
    messagingSenderId: "1097525852122",
    appId: "1:1097525852122:web:ca2e9baa0a615d46e832e3",
    measurementId: "G-WCYXWPJP47"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };