
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD0WrFPCqw580ZWuGHmHjPa37Iq4duaX3c",
  authDomain: "block-master-8968d.firebaseapp.com",
  projectId: "block-master-8968d",
  storageBucket: "block-master-8968d.appspot.com",
  messagingSenderId: "56310461156",
  appId: "1:56310461156:web:a7958b68ae9b58e66132f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google =  new GoogleAuthProvider();

export{
    app,
    google
}

