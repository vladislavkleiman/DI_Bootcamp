import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserFavoriteAnimals from "./UserFavoriteAnimals";

const user = {
  firstName: "Bob",
  lastName: "Dylan",
  favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <UserFavoriteAnimals favAnimals={user.favAnimals} />
  </React.StrictMode>
);
