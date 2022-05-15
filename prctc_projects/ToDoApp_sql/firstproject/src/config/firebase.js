import firebase from 'firebase';
import 'firebase/database';//services import(which we want to use)
import 'firebase/auth';//services import(which we want to use)


var firebaseConfig = {
    apiKey: "AIzaSyC1bMr6JrF4DfBQPCIj7CuxiFI7N7V8ciw",
    authDomain: "todoapp-388d8.firebaseapp.com",
    projectId: "todoapp-388d8",
    storageBucket: "todoapp-388d8.appspot.com",
    messagingSenderId: "121434947515",
    appId: "1:121434947515:web:26c4f2ff7e214e92c30e9e",
    measurementId: "G-3F7J4QLW27"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;
