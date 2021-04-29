import * as firebase from 'firebase';
// import {
//   API_KEY,
//   AUTH_DOMAIN,
//   DATABASE_URL,
//   PROJECT_ID,
//   MESSAGE_SENDER_ID,
//   APP_ID,
// } from 'react-native-dotenv';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyDLJe0H-JnaaGA7gz68gJsAyibr5yS02s8',
  authDomain: 'takemethere-33f3e.firebaseapp.com',
  projectId: 'takemethere-33f3e',
  storageBucket: 'takemethere-33f3e.appspot.com',
  messagingSenderId: '128023369954',
  appId: '1:128023369954:web:1433871db0f63a0b59e6bb',
  measurementId: 'G-1B82J40M48',
};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

let Firebase;
if (!firebase.apps.length) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;

//firebase.analytics();
