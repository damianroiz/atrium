import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "../src/Components/components.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
