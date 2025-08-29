import { useEffect, useState } from "react";
import { messaging, getToken, onMessage } from "./firebase-config";
import { toast } from "react-toastify";
export const requestPermission = async () => {
  try {
    const status = await Notification.requestPermission();
    if (status === "granted") {
      const serviceWorkerRegistration = await navigator.serviceWorker.register(
        "/firebase-messaging-sw.js"
      );
      // console.log("Service Worker registered:", serviceWorkerRegistration);
      
      // Get the FCM token using service worker registration
      const fcmToken = await getToken(messaging, {
        vapidKey:
          "BL70eM9vMeftEwetnKHEUqNA0KnpsjFIRWmGG03vb-9RMYp2HriB5yOcBKqiqgm4N5jIRrxxvS9D_agi199HIRw",
        serviceWorkerRegistration, // Pass service worker registration
      });
      
      // setToken(fcmToken);
      localStorage.setItem("device_token", fcmToken);
      // console.log("fcmToken.", fcmToken);
      return fcmToken;
    } else {
      console.error("Permission denied for notifications");
    }
  } catch (error) {
    console.error("Error requesting permission", error);
  }
};

const useFirebaseMessaging = () => {
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const permissions = async () => {
    let fcmToken = await requestPermission();
    if (fcmToken) {
      setToken(fcmToken);
    }
  }

  useEffect(() => {
    // Function to request notification permission and get the FCM token

    // let fcmToken = requestPermission();
    // if (fcmToken) {
    //   setToken(fcmToken);
    // }
    permissions();

    // Firebase messaging handler when a message is received in the foreground
    const unsubscribe = onMessage(messaging, (payload) => {
      console.log("Message received:", payload);
      toast(
        <div>
          <p className="text-dark fw-bold mb-0">{payload.notification.title}</p>
          <p className="text-dark  mb-0">{payload.notification.body}</p>
        </div>,
        { autoClose: false }
      );
    });

    // Cleanup the messaging listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!token) return; // Prevent sending undefined token
    // console.log('token', token);
    

    const sendTokenToServer = async () => {
      try {
        setLoading(true); // Start loading
        const response = await fetch(
          "https://server.testlinkwebsitespace.com/hisoc-firebase/public/api/device",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ device_token: token }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // console.log("Server response:", data); // Handle the response data
      } catch (err) {
        setError(err.message); // Set error if the fetch fails
        console.error("Fetch error:", err);
      } finally {
        setLoading(false); // End loading
      }
    };

    sendTokenToServer();
  }, [token]); // This effect will run whenever the `token` changes

  return {
    token,
    loading,
    error,
  };
};

export default useFirebaseMessaging;
