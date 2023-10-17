const express = require("express");
const bodyParser = require("body-parser");
const quiz = require("./script.js");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/quiz", quiz);

app.listen(3000, () => {
  console.log("Server running in http://localhost:3000");
});
