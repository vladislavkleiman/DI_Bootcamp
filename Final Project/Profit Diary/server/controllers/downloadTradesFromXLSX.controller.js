const {
  insertDataFromExcel,
  getTradesData,
} = require("../models/downloadTradesFromXLSX.model");

const {
  loadTradesIntoDatabase,
  removeDuplicateTrades,
} = require("../models/tradeStatic.model.js");

const insertTradeData = async (req, res) => {
  const userId = req.body.userId || req.query.userId || req.params.userId;
  try {
    const filePath = req.file.path;
    const insertedRows = await insertDataFromExcel(filePath, userId);
    await loadTradesIntoDatabase(userId);
    await removeDuplicateTrades();
    res
      .status(200)
      .json({ message: "Data successfully inserted", data: insertedRows });
  } catch (error) {
    console.error("Error in insertTradeData controller:", error);
    res
      .status(500)
      .json({ message: "Error inserting data", error: error.message });
  }
};

const getAllTradesData = async (req, res) => {
  const { date } = req.query;
  try {
    console.log("getAllTradesData в контроллере начал работу");
    const trades = await getTradesData(date);
    res.status(200).json({ message: "Data fetched successfully" });
  } catch (error) {
    console.error("Error querying database:", error);
    res
      .status(500)
      .json({ message: "Error fetching data", error: error.message });
  }
};

module.exports = {
  insertTradeData,
  getAllTradesData,
};
