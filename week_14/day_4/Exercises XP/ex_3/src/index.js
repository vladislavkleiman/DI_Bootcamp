import React from "react";
import ReactDOM from "react-dom/client";
import SocialMedias from "./components/Example1";
import Skills from "./components/Example2";
import Experience from "./components/Example3";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SocialMedias />
    <Skills />
    <Experience />
  </React.StrictMode>
);
