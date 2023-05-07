import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCK-xOIAaYaVIK9GliJJOd7VFdpFSHUVCM",
  authDomain: "zastore-e4577.firebaseapp.com",
  projectId: "zastore-e4577",
  storageBucket: "zastore-e4577.appspot.com",
  messagingSenderId: "707016134396",
  appId: "1:707016134396:web:26feff725f597960015179"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;