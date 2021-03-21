import firebase from "firebase/app"
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDT2ZSkV7z60y612nwa_UvCIjXrilsefS4",
  authDomain: "sparta-react-2c844.firebaseapp.com",
  projectId: "sparta-react-2c844",
  storageBucket: "sparta-react-2c844.appspot.com",
  messagingSenderId: "418640478960",
  appId: "1:418640478960:web:686111333edbc7a2507835",
  measurementId: "G-PJFLQFJDB2"
}
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };