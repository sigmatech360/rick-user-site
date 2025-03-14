// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// const firebaseConfig = {
//   apiKey: "AIzaSyBDr8tfCZWcNtelV7tdJ9czZI12CS8twIU",
//   authDomain: "test-82db6.firebaseapp.com",
//   projectId: "test-82db6",
//   storageBucket: "test-82db6.firebasestorage.app",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "1:837577380863:web:eb424f4dd7d6eabee24dca",
// };


// const firebaseConfig = {
//   apiKey: "AIzaSyCOF7rSZWP2qgxgl7oiZ7OvetM1xT4cxrU",
//   authDomain: "e-commerce-181d1.firebaseapp.com",
//   projectId: "e-commerce-181d1",
//   storageBucket: "e-commerce-181d1.firebasestorage.app",
//   messagingSenderId: "875592124765",
//   appId: "1:875592124765:web:cabde95ec9b0f7195280b4",
//   measurementId: "G-B8KZY7MJF0"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCcY6_r7kHQOQAeajr39MuWXHvq8bZ9N5Q",
  authDomain: "hisoc-23836.firebaseapp.com",
  projectId: "hisoc-23836",
  storageBucket: "hisoc-23836.firebasestorage.app",
  messagingSenderId: "112902329407",
  appId: "1:112902329407:web:2b3dce23b5d96defd2d48a",
  measurementId: "G-DVJJ2WY7Z1"
};



const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export { messaging, getToken, onMessage };


























// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCcY6_r7kHQOQAeajr39MuWXHvq8bZ9N5Q",
//   authDomain: "hisoc-23836.firebaseapp.com",
//   projectId: "hisoc-23836",
//   storageBucket: "hisoc-23836.firebasestorage.app",
//   messagingSenderId: "112902329407",
//   appId: "1:112902329407:web:2b3dce23b5d96defd2d48a",
//   measurementId: "G-DVJJ2WY7Z1"
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); 
