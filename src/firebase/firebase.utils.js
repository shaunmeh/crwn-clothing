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

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
    
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

   
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
          await userRef.set({
              displayName, 
              email,
              createdAt,
               ...additionalData
          });  

        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;

};  

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

