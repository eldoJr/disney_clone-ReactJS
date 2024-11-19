import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDuSb75CbOoBB6rrNWb7AfshAGTbECZeMg",
    authDomain: "disney-clone-83e44.firebaseapp.com",
    projectId: "disney-clone-83e44",
    storageBucket: "disney-clone-83e44.appspot.com",
    messagingSenderId: "745335975042",
    appId: "1:745335975042:web:4f6bd5771599cd4743989b",
    measurementId: "G-NSP464F5VF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;