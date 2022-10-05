// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqxDMq9rTKPyAKQmN_Bh-4K-JwyrwzGSk",
    authDomain: "demo1-6c436.firebaseapp.com",
    projectId: "demo1-6c436",
    storageBucket: "demo1-6c436.appspot.com",
    messagingSenderId: "749611265324",
    appId: "1:749611265324:web:5b575d1a3be74c755fd089",
    measurementId: "G-WGC96D2S38"
  };

  export const Firebase = firebase.initializeApp(firebaseConfig)