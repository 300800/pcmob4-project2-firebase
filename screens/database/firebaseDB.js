import * as firebase from "firebase";
import firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSna2GMu-C6vd4Hj6AMG_lhTlj5zRcxEY",
  authDomain: "to-do-demo-0.firebaseapp.com",
  projectId: "to-do-demo-0",
  storageBucket: "to-do-demo-0.appspot.com",
  messagingSenderId: "921544051224",
  appId: "1:921544051224:web:ae925f1fcc01d163dad16d",
  measurementId: "G-NZ8Y4SW6FT",
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
