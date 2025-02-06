import { initializeApp } from 'firebase/app';
import { getAuth, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword, 
} from 'firebase/auth';
import {  
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDjXhlybqnT7_cRoqYz5ozsmlVsPw1PD_s",
    authDomain: "crystal-clear-db.firebaseapp.com",
    projectId: "crystal-clear-db",
    storageBucket: "crystal-clear-db.firebasestorage.app",
    messagingSenderId: "850036715",
    appId: "1:850036715:web:ae28801d45b4150a3dfbae"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if(!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
          await setDoc(userDocRef, {
              displayName,
              email,
              createdAt,
              ...additionalInformation,
          });
      } catch (error) {
          console.log('error creating the user', error.message)
      }
  }
  return userDocRef;

  // if user data does not exist
  // create/set the document with the data from userAuth in my collecttion

  // if user data exists
      // return user data

};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}