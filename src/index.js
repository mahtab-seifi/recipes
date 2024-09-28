import React, { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, HashRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </HashRouter>
);
