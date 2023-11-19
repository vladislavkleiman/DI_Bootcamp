const {
  loadTradesIntoDatabase,
  removeDuplicateTrades,
} = require("../models/tradeStatic.model.js");

const loadTradesController = async (req, res) => {
  try {
    await loadTradesIntoDatabase();
    await removeDuplicateTrades();
    res
      .status(200)
      .json({ message: "Trades processed and loaded successfully" });
  } catch (error) {
    console.error("Error in loadTradesController:", error);
    res.status(500).json({ message: "Error processing trades" });
  }
};

module.exports = {
  loadTradesController,
};
