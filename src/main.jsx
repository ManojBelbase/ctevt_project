import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthState from "./context/AuthState.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthState>
  </StrictMode>
);
