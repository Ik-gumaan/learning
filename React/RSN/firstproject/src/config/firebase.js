import firebase from 'firebase/app';
import 'firebase/database';//services import(here database as dtabase)
import 'firebase/auth';//services import(here authenrtication as auth)


var firebaseConfig = {
    apiKey: "AIzaSyC8Q8SlaW4sRN_TIs1nycw3cFhpW6YTI8o",
    authDomain: "rsn-graphics-website.firebaseapp.com",
    databaseURL: "https://rsn-graphics-website-default-rtdb.firebaseio.com",
    projectId: "rsn-graphics-website",
    storageBucket: "rsn-graphics-website.appspot.com",
    messagingSenderId: "46149063183",
    appId: "1:46149063183:web:6dc8281d5f553cda6b497a",
    measurementId: "G-26JVFXCJWD"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;