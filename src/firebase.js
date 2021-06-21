import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBCErFLTzKUH7DVUhUIKM71PeTOK9qD1I4",
    authDomain: "snapchat-clone-d977d.firebaseapp.com",
    projectId: "snapchat-clone-d977d",
    storageBucket: "snapchat-clone-d977d.appspot.com",
    messagingSenderId: "984550924060",
    appId: "1:984550924060:web:d92270d1ace6f80e9024d9",
    measurementId: "G-BLW41HQ83P"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, storage, provider };