const express = require("express");
const app = express();
const taskModule = require("./script.js");

app.use(express.json());
app.use("/tasks", taskModule);

app.listen(3000, () => {
  console.log("Server is running");
});
