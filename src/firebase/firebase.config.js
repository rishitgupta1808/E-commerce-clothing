import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDbJWTAC6xxj77WzEEyaSwupNatuTDD1yc",
    authDomain: "diamond-db-e2086.firebaseapp.com",
    projectId: "diamond-db-e2086",
    storageBucket: "diamond-db-e2086.appspot.com",
    messagingSenderId: "305824815737",
    appId: "1:305824815737:web:df6aaef4f90f9a5349d2a8",
    measurementId: "G-DLLX89ZRZ8"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

export const registerUser = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
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

  const provider = new firebase.auth.GoogleAuthProvider();  //returns a new instance of AuthCredential that wraps Google Sign-In ID or access tokens. Used when calling FirebaseAuth.signInWithCredential(AuthCredential)
  provider.setCustomParameters({'prompt':'select_account'}); //set functionality to the instance to open aprompt to seleact the account
  export const GoogleSignIn = () => auth.signInWithPopup(provider);

  export default firebase; 

