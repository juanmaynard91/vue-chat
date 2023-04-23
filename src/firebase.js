import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAvYxCTq6ud4lDwK8gFl19VZvrVKQ8DuVU",
    authDomain: "chat-vue-fad8b.firebaseapp.com",
    projectId: "chat-vue-fad8b",
    storageBucket: "chat-vue-fad8b.appspot.com",
    messagingSenderId: "231817000560",
    appId: "1:231817000560:web:8cdafd7c3b432814e3a6b5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };