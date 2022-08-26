// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
//require('firebase/auth')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlDUVtUOh0F619KZYvv7iDWYglRB4JbrM",
  authDomain: "jk-clothing-backend.firebaseapp.com",
  projectId: "jk-clothing-backend",
  storageBucket: "jk-clothing-backend.appspot.com",
  messagingSenderId: "237297255427",
  appId: "1:237297255427:web:fed57e3a858864b915fa36",
  measurementId: "G-V4FKZXPQPD"
};

export const createUserProfileDocument = async (userAuth, additionalData )=>{
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  
  if(!snapShot.exists){
    const {displayName,email} = userAuth;
    const createdAt = new Date()

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch(error){
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth =firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

