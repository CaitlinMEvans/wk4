import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

// Global styles from your old site
import "./styles/base.css";
import "./styles/dark-mode.css";
import "./styles/layout.css";
import "./styles/main.css";
import "./styles/nvt_base.css";
import "./styles/nvt_responsive.css";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
