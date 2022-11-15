import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { Firestore } from "firebase/firestore";
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
//const provider = new GoogleAuthProvider();
//const auth = getAuth(firebaseApp);
//export auth;
export default firebaseApp;