import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBT_LDTBNcXqzOS4UXrFrfhzkBYNWbJnPg",
  authDomain: "crown-dbs.firebaseapp.com",
  projectId: "crown-dbs",
  storageBucket: "crown-dbs.appspot.com",
  messagingSenderId: "1068424122884",
  appId: "1:1068424122884:web:52fddf1aa786a98aaa9b51",
  measurementId: "G-JHBGPRVKYX",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc("users/128fdashadu");

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }

  console.log(snapShot);

  console.log(`users/${userAuth.uid}`);
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "consent" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
