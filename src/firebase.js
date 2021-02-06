import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAf0Gm-cjgGCYOymPDfrijDJ7MtL93Yx1c",
  authDomain: "netflix-clone-fc00d.firebaseapp.com",
  projectId: "netflix-clone-fc00d",
  storageBucket: "netflix-clone-fc00d.appspot.com",
  messagingSenderId: "26972300119",
  appId: "1:26972300119:web:b3c6b38dff860eb52a5412",
  measurementId: "G-4NX86K65QQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
