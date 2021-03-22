import firebase from "firebase/app"
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeHFfdhExkmJ3wcUXZh8D21HTYUDcmBro",
  authDomain: "sprata-react-basic-hw.firebaseapp.com",
  projectId: "sprata-react-basic-hw",
  storageBucket: "sprata-react-basic-hw.appspot.com",
  messagingSenderId: "236429487975",
  appId: "1:236429487975:web:91a584fd90d679ab0f09c2",
  measurementId: "G-LBMLG5JEF5"
}
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };