const { loadTradesIntoDatabase } = require("../models/tradeStatic.model");
const { removeDuplicateTrades } = require("../models/tradeStatic.model");

const loadTradesController = async (req, res) => {
  try {
    const flattenedTrades = req.body.flattenedTrades;
    await loadTradesIntoDatabase(flattenedTrades);
    res.status(200).json({ message: "Trades loaded successfully" });
  } catch (error) {
    console.error("Error loading trades:", error);
    res.status(500).json({ message: "Error loading trades into the database" });
  }
};

const duplicateControlController = async (req, res) => {
  try {
    await removeDuplicateTrades();
    res.status(200).send({ message: "Duplicates removed successfully" });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error removing duplicates", error: error.message });
  }
};

module.exports = {
  loadTradesController,
  duplicateControlController,
};
