// /* public/firebase-messaging-sw.js */
 importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
 importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");
 const firebaseConfig = {
   apiKey: "AIzaSyCm1NOoAB7eVTXfD3ZG0dxaq3PpD-C40Tg",
   authDomain: "his-oc.firebaseapp.com",
   projectId: "his-oc",
   storageBucket: "his-oc.firebasestorage.app",
   messagingSenderId: "623658638893",
   appId: "1:623658638893:web:1cc6378b6b53e74d3062a4",
   measurementId: "G-2GKCDP7GZ8"
 };
 
 firebase.initializeApp(firebaseConfig);
 
 const messaging = firebase.messaging();
 
 messaging.onBackgroundMessage((payload) => {
 
   const notificationTitle = payload.notification.title;
   const notificationOptions = {
     body: payload.notification.body,
     icon: payload.notification.icon,
   };
 
   self.registration.showNotification(notificationTitle, notificationOptions);
 });