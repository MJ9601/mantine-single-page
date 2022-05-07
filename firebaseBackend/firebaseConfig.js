import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpAgV1gqfYDV0gdmWSa2kwtsaHnNiVJCs",
  authDomain: "shopping-mantine-ui.firebaseapp.com",
  projectId: "shopping-mantine-ui",
  storageBucket: "shopping-mantine-ui.appspot.com",
  messagingSenderId: "156640622803",
  appId: "1:156640622803:web:db156ffaf4822c83c4fc26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { app, auth, db };
