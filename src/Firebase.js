
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAOLHk2rYNhxOvqB2m2A2nWThnzwBhT9oQ",
    authDomain: "clone-38f49.firebaseapp.com",
    databaseURL: "https://clone-38f49.firebaseio.com",
    projectId: "clone-38f49",
    storageBucket: "clone-38f49.appspot.com",
    messagingSenderId: "608163772421",
    appId: "1:608163772421:web:1d32e81730b376e7e4046c",
    measurementId: "G-VH1J3E04J2"
  };
 const fire = firebase.initializeApp(config);
  export default fire;