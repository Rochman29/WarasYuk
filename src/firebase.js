import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAjVyvTYIEiyqbtAkw60nFuvAXWRMbHN4",
  authDomain: "warasyuk-b1fec.firebaseapp.com",
  projectId: "warasyuk-b1fec",
  storageBucket: "warasyuk-b1fec.appspot.com",
  messagingSenderId: "886675991782",
  appId: "1:886675991782:web:ed78de98dae4659c095f27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
