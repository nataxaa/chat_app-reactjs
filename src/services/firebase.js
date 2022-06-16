import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCuBczp29GMO8bJ8Vax-bO83tPv-dSU54U",

  authDomain: "chat-app-fdea9.firebaseapp.com",

  projectId: "chat-app-fdea9",

  storageBucket: "chat-app-fdea9.appspot.com",

  messagingSenderId: "76649010474",

  appId: "1:76649010474:web:bf65385cd245264e3cfa53"

};



const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
