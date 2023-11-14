import React from "react";
import ReactDOM from "react-dom/client";
import LoginComponent from "./components/Login/LoginComponent";
import MainComponent from "./components/Main/MainComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <LoginComponent /> */}
    <MainComponent />
  </React.StrictMode>
);
