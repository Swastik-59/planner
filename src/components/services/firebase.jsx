import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB7Qr6RP7FoyNkYGpZ9yDWUUEoJNJxu2Gk",
    authDomain: "planner-77d5b.firebaseapp.com",
    projectId: "planner-77d5b",
    storageBucket: "planner-77d5b.appspot.com",
    messagingSenderId: "705527577105",
    appId: "1:705527577105:web:fe758cdee1d08d70554fb0"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth();
export {db,auth}