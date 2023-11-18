const express = require("express");
const cors = require("cors");

const { authRouter } = require("./routers/auth.route.js");
const {
  downloadTradesFromXLSXRouter,
} = require("./routers/downloadTradesFromXLSX.route.js");
const { tradesRouter } = require("./routers/trades.route.js");
const { tradeStaticRoute } = require("./routers/tradeStatic.route.js");

const app = express();

app.use(express.static("client"));
app.use(express.json());
app.use(cors());
app.use("/profitdiary/auth", authRouter);
app.use("/profitdiary/calendar", downloadTradesFromXLSXRouter);
app.use("/profitdiary", tradeStaticRoute);
app.use("/profitdiary/api", tradesRouter);
app.use((error, req, res, next) => {
  console.error("Unhandled error:", error);
  res.status(500).send("Something broke!");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
