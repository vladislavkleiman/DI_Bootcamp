const express = require("express");
const cors = require("cors");
const { authRouter } = require("./routers/auth.route");

const app = express();

app.use(express.static("client"));
app.use(express.json());
app.use(cors());
app.use("/profitdiary/auth", authRouter);

app.listen(5000, () => {
  console.log("Server is running on port 3000");
});
