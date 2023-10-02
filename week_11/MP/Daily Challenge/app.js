const express = require("express");
const app = express();
const usersModule = require("./script.js");

app.use(express.static("public"));

app.use(express.json());
app.use("/users", usersModule);

app.listen(5000, () => {
  console.log("Server is running");
});
