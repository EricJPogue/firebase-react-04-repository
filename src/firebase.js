import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator  } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDdbKsLlJJBQInCFlmWF_fshSoDKDxKf4s",
  authDomain: "fir-react-04-project.firebaseapp.com",
  projectId: "fir-react-04-project",
  storageBucket: "fir-react-04-project.firebasestorage.app",
  messagingSenderId: "875501344341",
  appId: "1:875501344341:web:1a97dc01f9afdb8e8fe6dc"
};

const app = initializeApp(firebaseConfig);

// Auth 
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Firestore
const db = getFirestore(app);

// Storage
const storage = getStorage(app);

// Only connect to emulators when running locally
if (window.location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
  connectStorageEmulator(storage, "localhost", 9199);
}

export { auth, provider };
export  { db };
export { storage };
