import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDoWfHkdZjC-YWFab8_jrGI5_KZ0M7a61I",
    authDomain: "vue-firebase-project-d9571.firebaseapp.com",
    projectId: "vue-firebase-project-d9571",
    storageBucket: "vue-firebase-project-d9571.appspot.com",
    messagingSenderId: "632032317288",
    appId: "1:632032317288:web:076bc3e68bd7ed10fb10dd"
  };

// init firebase
firebase.initializeApp(firebaseConfig)
const projectFirebase = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
export {projectFirebase, timestamp}