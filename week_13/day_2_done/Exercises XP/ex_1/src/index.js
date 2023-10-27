import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const myelement = <h1>I Love JSX!</h1>;
const sum = 5 + 5;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {myelement}
    <h1>React is {sum} times better with JSX</h1>
  </React.StrictMode>
);
