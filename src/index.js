import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import Navbar from "../src/Component/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Navbar /> */}
    <h1>Firebase Authentication</h1>
  </React.StrictMode>
);

// reportWebVitals();
