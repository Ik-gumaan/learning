import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// do facebook authentication

var firebaseConfig = {
    apiKey: "AIzaSyDKOGsn__d7m4qtupC3TpnWh6_tRTE1Y0s",
    authDomain: "chatapp-abfff.firebaseapp.com",
    projectId: "chatapp-abfff",
    storageBucket: "chatapp-abfff.appspot.com",
    messagingSenderId: "742211923924",
    appId: "1:742211923924:web:1e12d818db3117c488b041",
    measurementId: "G-LTL3TPXG89"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase; 

////In cmd==>set HTTPS=true: to change from http to https so that any fb user can login to ur web app