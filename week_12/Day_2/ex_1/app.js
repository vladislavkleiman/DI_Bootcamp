const express = require("express");
const app = express();
const moduleEx = require("./routes/index.js");

app.use("/", moduleEx);

app.listen(3000, () => console.log("Server is running"));
