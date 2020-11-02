import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBTO5PvNm5O5lSKcy3myroqLcdO1xojrsw",
  authDomain: "discord-clone-d81b0.firebaseapp.com",
  databaseURL: "https://discord-clone-d81b0.firebaseio.com",
  projectId: "discord-clone-d81b0",
  storageBucket: "discord-clone-d81b0.appspot.com",
  messagingSenderId: "1052716350966",
  appId: "1:1052716350966:web:189a4f9aefd2ded3a2dbd7",
  measurementId: "G-R3YN7HFZGE",
};

const firebase = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
