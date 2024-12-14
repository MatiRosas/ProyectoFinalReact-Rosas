
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSn8UEh1_erBAb-6EuBIhjyzNlVmKdxfY",
  authDomain: "nutrire-shop.firebaseapp.com",
  projectId: "nutrire-shop",
  storageBucket: "nutrire-shop.firebasestorage.app",
  messagingSenderId: "869899424724",
  appId: "1:869899424724:web:3bb28ec02bd08cac41fc41",
  measurementId: "G-TGQSSB5R1P"
};

const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
