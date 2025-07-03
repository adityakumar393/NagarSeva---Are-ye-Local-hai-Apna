// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB55V4hWjSl5h5zc8yFDSZUCADGxt4e4JM",
  authDomain: "nagarseva-73ae8.firebaseapp.com",
  projectId: "nagarseva-73ae8",
  storageBucket: "nagarseva-73ae8.firebasestorage.app",
  messagingSenderId: "129669969337",
  appId: "1:129669969337:web:17cd7b33fbe77db8583268",
  measurementId: "G-YW7L2B6ESB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const signInWithGoogle = () => signInWithPopup(auth, provider);

export { auth, signInWithGoogle };
