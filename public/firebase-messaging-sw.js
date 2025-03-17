
// /* public/firebase-messaging-sw.js */
// importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");
// const firebaseConfig = {
//   apiKey: "AIzaSyCcY6_r7kHQOQAeajr39MuWXHvq8bZ9N5Q",
//   authDomain: "hisoc-23836.firebaseapp.com",
//   projectId: "hisoc-23836",
//   storageBucket: "hisoc-23836.firebasestorage.app",
//   messagingSenderId: "112902329407",
//   appId: "1:112902329407:web:2b3dce23b5d96defd2d48a",
//   measurementId: "G-DVJJ2WY7Z1"
// };

// firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//   console.log("Received background message:", payload);

//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: payload.notification.icon,
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });
   














import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCcY6_r7kHQOQAeajr39MuWXHvq8bZ9N5Q",
  authDomain: "hisoc-23836.firebaseapp.com",
  projectId: "hisoc-23836",
  storageBucket: "hisoc-23836.firebasestorage.app",
  messagingSenderId: "112902329407",
  appId: "1:112902329407:web:2b3dce23b5d96defd2d48a",
  measurementId: "G-DVJJ2WY7Z1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Request notification permission
export const requestForToken = async () => {
  try {
    const currentToken = await getToken(messaging, {
      // vapidKey: "BMXsusBZvpnKvJuKk6FAfou4O5BDZMXfmL5j4vqVY1I5zBLWXniCo-7LF0fZi3WtD7sDfLKYBGmHOWhvDNoORYo",
      vapidKey: "BMXsusBZvpnKvJuKk6FAfou4O5BDZMXfmL5j4vqVY1I5zBLWXniCo-7LF0fZi3WtD7sDfLKYBGmHOWhvDNoORYo",
      serviceWorkerRegistration: await navigator.serviceWorker.register('/firebase-messaging-sw.js'),
    });

    console.log("currentToken", currentToken)

    if (currentToken) {
      console.log("FCM Token:", currentToken);
    } else {
      console.log("No registration token available.");
    }
  } catch (error) {
    console.error("Error retrieving FCM token:", error);
  }
};

// Listen for foreground messages


// (messaging, (payload) => {
//   console.log("Message received in foreground:", payload);
// });


messaging.onBackgroundMessage((payload) => {
  console.log("Received background message:", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});