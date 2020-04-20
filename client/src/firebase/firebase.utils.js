import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCttv6bMFWacFma4NQ41urWdcFtkkNck8Q",
  authDomain: "whale-and-jaguar.firebaseapp.com",
  databaseURL: "https://whale-and-jaguar.firebaseio.com",
  projectId: "whale-and-jaguar",
  storageBucket: "whale-and-jaguar.appspot.com",
  messagingSenderId: "890111825725",
  appId: "1:890111825725:web:d0446662cea890194c1754",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;
