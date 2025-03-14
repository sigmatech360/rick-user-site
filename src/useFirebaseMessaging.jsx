// src/useFirebaseMessaging.js
import { useEffect, useState } from "react";
import { messaging, getToken, onMessage } from "./firebase-config";
import { toast } from "react-toastify";

const useFirebaseMessaging = () => {
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  useEffect(() => {
    // Function to request notification permission and get the FCM token
    const requestPermission = async () => {
      try {
        const status = await Notification.requestPermission();
        if (status === "granted") {
          const fcmToken = await getToken(messaging, {
            vapidKey: "BMXsusBZvpnKvJuKk6FAfou4O5BDZMXfmL5j4vqVY1I5zBLWXniCo-7LF0fZi3WtD7sDfLKYBGmHOWhvDNoORYo",
          });
          setToken(fcmToken);
          console.log("FCM Token:", fcmToken);
        } else {
          console.error("Permission denied for notifications");
        }
      } catch (error) {
        console.error("Error requesting permission", error);
      }
    };

    requestPermission();

    // Firebase messaging handler when a message is received
    const unsubscribe = onMessage(messaging, (payload) => {
      console.log("Message received:", payload);
      // alert(`Notification: ${payload.notification.title}`);
      toast(
        <div>
          <p className="fw-bold mb-0">
            {payload.notification.title}</p>
        
          <p className="mb-0">
            {payload.notification.body}
          </p>
        </div>
      );


    });

    // Cleanup the messaging listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  // Effect to send the FCM token to your server when the token changes
  useEffect(() => {
    const sendTokenToServer = async () => {
      try {
        setLoading(true); // Start loading
        const response = await fetch("https://server.testlinkwebsitespace.com/hisoc-firebase/public/api/device", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',

          },
          body: JSON.stringify({ device_token: token }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Server response:", data); // Handle the response data
      } catch (err) {
        setError(err.message); // Set error if the fetch fails
        console.error('Fetch error:', err);
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
