import React from "react";
import data from "./data.json";
import "./App.css";

const App = () => {
  return (
    <div className="main">
      <h1>Hi This is a Title</h1>
      <h1>{data[0].title}</h1>
      <p>{data[0].content}</p>
      <h1>{data[1].title}</h1>
      <p>{data[1].content}</p>
    </div>
  );
};

export default App;
