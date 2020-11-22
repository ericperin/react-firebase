import firebase from 'firebase';
import 'firebase/database';

var config = {
  apiKey: "AIzaSyC3NYwoL6ZKXGUMoAvmlieLH83W7CKnzxY",
  authDomain: "react-example-6d4f5.firebaseapp.com",
  databaseURL: "https://react-example-6d4f5.firebaseio.com",
  projectId: "react-example-6d4f5",
  storageBucket: "react-example-6d4f5.appspot.com",
  messagingSenderId: "244694280816",
  appId: "1:244694280816:web:93a7c4082140e42b8ba2b5",
  measurementId: "G-N1LHN91NP3"
};
// Initialize Firebase
firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
export const cardsRef = databaseRef.child('cards');
export const userDetailsRef = databaseRef.child('user-details');

export default firebase;