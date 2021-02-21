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

  if(additionalData){
    let  displayName = '';
    displayName = additionalData.displayName;
    let { email } = userAuth;
    let createdAt = new Date();
    console.log(displayName);
    try {
      await userRef.set({
        displayName,
        email,
        createdAt
      });

    } catch (error) {
      console.log('error creating user', error.message);
    }
  }else{
    let { email,displayName } = userAuth;
    let createdAt = new Date();
    console.log(displayName);
    try {
      await userRef.set({
        displayName,
        email,
        createdAt
      });

    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  }

  return userRef;
};

export const addCollectionObjects = async (collectionKey,collectionData) =>{

  const collectionRef = firestore.collection(collectionKey);
  
  const batch = firestore.batch();

  

  collectionData.forEach(obj=>{
   const newDocRef = collectionRef.doc();
   
   batch.set(newDocRef,obj);
  })

  return await batch.commit();
}

export const convertDataToMap = (collections) =>{

  const transformData = collections.docs.map(doc=>{
    const{title,items} = doc.data();

    return{
      routeName : encodeURI(title.toLowerCase()),
      id : doc.id,
      title,
      items
    }
  })

  return transformData.reduce((accumlator,collection)=>{
    accumlator[collection.title.toLowerCase()]=collection;
    return accumlator;
  },{});

}

export const getCurrentUser = () =>{

  return new Promise((resolve,reject)=>{
  const unsubscribe = auth.onAuthStateChanged(userAuth=>{
    unsubscribe();
    
    resolve(userAuth);
  },reject)
})
} 


  export const Googleprovider = new firebase.auth.GoogleAuthProvider();  //returns a new instance of AuthCredential that wraps Google Sign-In ID or access tokens. Used when calling FirebaseAuth.signInWithCredential(AuthCredential)
  Googleprovider.setCustomParameters({'prompt':'select_account'}); //set functionality to the instance to open aprompt to seleact the account
  export const GoogleSignIn = () => auth.signInWithPopup(Googleprovider);

  export default firebase; 

