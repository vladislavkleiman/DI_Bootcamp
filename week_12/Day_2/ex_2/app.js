const express = require("express");
const app = express();
const todos = require("./routes/todos.js");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/todos", todos);

app.listen(3000, () => {
  console.log("Server is running");
});
