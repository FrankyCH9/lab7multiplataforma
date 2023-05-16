// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1RqCdRClsHQ7AqQ-czD0SSqiB_vreook",
  authDomain: "laboratorio7-92cad.firebaseapp.com",
  projectId: "laboratorio7-92cad",
  storageBucket: "laboratorio7-92cad.appspot.com",
  messagingSenderId: "476099540172",
  appId: "1:476099540172:web:69e99630b630eb80babe69",
  measurementId: "G-L6CGY70WTL"
};

 initializeApp(firebaseConfig)

 export const database = getFirestore()