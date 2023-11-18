const {
  insertDataFromExcel,
  getTradesData,
} = require("../models/downloadTradesFromXLSX.model");

const insertTradeData = async (req, res) => {
  console.log("Received file:", req.file); // Log the received file details
  console.log("Request body:", req.body);
  try {
    const filePath = req.file.path;
    const insertedRows = await insertDataFromExcel(filePath);
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
  const { date } = req.query; // Get the date from query parameters
  try {
    const trades = await getTradesData(date); // Pass the date to the model function
    res
      .status(200)
      .json({ message: "Data fetched successfully", data: trades });
  } catch (error) {
    console.error("Error querying database:", error);
    res
      .status(500)
      .json({ message: "Error fetching data", error: error.message });
  }
};

module.exports = {
  insertTradeData,
  getAllTradesData, // Export the function
};
