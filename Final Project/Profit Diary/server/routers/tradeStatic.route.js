// tradeStatic.route.js

const express = require("express");
const router = express.Router();
const { getProfit } = require("../controllers/calculateProfitController"); // Adjust the path as needed

router.get("/daystatistic", getProfit);

module.exports = router;
