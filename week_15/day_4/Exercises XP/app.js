const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoutes = require("./authRoutes");

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the JWT Auth Project!");
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});

module.exports = app;
