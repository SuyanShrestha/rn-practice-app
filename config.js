import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTsYJKUCyFYFkduPBzSJ1NQvpLLSPY-6E",
  authDomain: "rn-awesome-2.firebaseapp.com",
  projectId: "rn-awesome-2",
  storageBucket: "rn-awesome-2.appspot.com",
  messagingSenderId: "1085742106572",
  appId: "1:1085742106572:web:3289d3ab2f6cfbcda57f69"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);