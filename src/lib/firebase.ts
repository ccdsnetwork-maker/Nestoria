import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDa31wtYOenQTcs_B1NsqrF6V7mk6imOsA",
  authDomain: "nestoria1.firebaseapp.com",
  databaseURL: "https://nestoria1-default-rtdb.firebaseio.com",
  projectId: "nestoria1",
  storageBucket: "nestoria1.firebasestorage.app",
  messagingSenderId: "573003414979",
  appId: "1:573003414979:web:e63dc1aef12b4fec761176",
  measurementId: "G-B5JZS1LYDK",
};

const app = initializeApp(firebaseConfig);

export default app;