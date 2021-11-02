  import firebase from "firebase";
  
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0qYR4do1FdF24fAKMCiCq0pypqj57jzM",
  authDomain: "challenge-8beee.firebaseapp.com",
  projectId: "challenge-8beee",
  storageBucket: "challenge-8beee.appspot.com",
  messagingSenderId: "458016747453",
  appId: "1:458016747453:web:0e5051de4cac97ac70ecd4",
  measurementId: "G-MVJ98DVLBZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };