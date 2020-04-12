import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {

    apiKey: "AIzaSyBa4CwrHUUoBrPbdPDHCSYUPDm0ZBHqjAA",
    authDomain: "crown-clothing-db-a1d62.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-a1d62.firebaseio.com",
    projectId: "crown-clothing-db-a1d62",
    storageBucket: "crown-clothing-db-a1d62.appspot.com",
    messagingSenderId: "105792256612",
    appId: "1:105792256612:web:f4ee20a669f59da4d53d71",
    measurementId: "G-J1J5J4CY52"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

