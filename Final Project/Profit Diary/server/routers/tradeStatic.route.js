const express = require("express");
const tradeStaticRoute = express.Router();
const { getProfit } = require("../controllers/calculateProfitController");
tradeStaticRoute.get("/daystatistic", getProfit);

module.exports = { tradeStaticRoute };
