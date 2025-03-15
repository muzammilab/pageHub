import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./store/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <div className="dark:bg-slate-900 dark:text-white">
        <App />
      </div>
    </AuthProvider>
  </BrowserRouter>
);
