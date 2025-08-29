// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./Routers/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <div className="loaderBox d-none">
        <div className="custom-loader"></div>
      </div>
    </AuthProvider>
  </React.StrictMode>
);
