import ReactDOM from "react-dom/client";
import Provider from "./providers";
import App from "./App.jsx";
// import React from "react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider>
    <App />
  </Provider>
  // </React.StrictMode>
);
