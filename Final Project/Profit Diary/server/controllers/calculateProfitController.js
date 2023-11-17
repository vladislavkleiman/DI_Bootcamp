const { calculateProfit } = require("../models/tradeStatic.model"); // Adjust the path as needed

async function getProfit(req, res) {
  try {
    const profits = await calculateProfit();
    res.json(profits);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = { getProfit };
