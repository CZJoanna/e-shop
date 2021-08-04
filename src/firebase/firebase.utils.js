import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBj9iNiCNCr1M8bhN0q3VruLsPVsrqxsSo",
  authDomain: "e-shop-db-a33d9.firebaseapp.com",
  projectId: "e-shop-db-a33d9",
  storageBucket: "e-shop-db-a33d9.appspot.com",
  messagingSenderId: "915995830849",
  appId: "1:915995830849:web:f82d261a15f4b6d26d34c0",
  measurementId: "G-6M8Q9472E5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// always trigger the Google popup whenever using GoogleAuthProvider for authentication and sign in
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
