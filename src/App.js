import React, { useState } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import './App.css';
import Dashboard from './component/dashboard';
const firebaseConfig = {
  apiKey: "AIzaSyDJmtWNsHDqB_pZ_YTrKtQp2E6NcCiSLG8",
    authDomain: "whatsap-firebase-yt.firebaseapp.com",
    projectId: "whatsap-firebase-yt",
    storageBucket: "whatsap-firebase-yt.appspot.com",
    messagingSenderId: "979796581026",
    appId: "1:979796581026:web:1db42402863576b08395fb"
};


initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(firebaseApp);

export default function App() {
  const [user, setUser] = useState(null)
  onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            setUser(user);
            // ...
          } else {
            // User is signed out
            // ...
            setUser(null)
            }
          }
        );

return (
  <>
    {
      user ? 
      <Dashboard />
      :
       <>
         <p>Enjoy</p>
         <button onClick={() =>  
           signInWithPopup(auth, provider)
           .then((result) => {
             const user = result.user;
            })
           .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             const email = error.email;
             const credential = GoogleAuthProvider.credentialFromError(error);
            })}
          >
            Sign in with Google
          </button>
        </>
    }
  </>
)
}