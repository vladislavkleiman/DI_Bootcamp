const { db } = require("../config/db.js");
const moment = require("moment");

const formatDate = (dateString) => {
  return moment(dateString, "MM/DD/YYYY").format("YYYY-MM-DD");
};

const formatTime = (excelTime) => {
  if (typeof excelTime === "number") {
    // Check if the input is a number
    // Convert Excel time (fraction of a day) to milliseconds since start of day
    const millisecondsInADay = 24 * 60 * 60 * 1000;
    const millisecondsSinceStartOfDay = excelTime * millisecondsInADay;

    // Create a date object at the start of the day
    const startOfDay = new Date(0, 0, 0);

    // Add the milliseconds since the start of the day to the date object
    startOfDay.setMilliseconds(millisecondsSinceStartOfDay);

    // Format the date object as a time string
    return moment(startOfDay).format("HH:mm:ss");
  } else {
    // If it's not a number, assume it's already a time string
    return moment(excelTime, "HH:mm:ss").format("HH:mm:ss");
  }
};

const XLSX = require("xlsx");

const readExcelFile = (filePath) => {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  return XLSX.utils.sheet_to_json(worksheet);
};

const insertDataFromExcel = async (filePath) => {
  const data = readExcelFile(filePath);

  const formattedData = data.map((raw) => ({
    datetrades: formatDate(raw["Date Trades"]), // Convert to 'YYYY-MM-DD' format
    currency: raw["Currency"],
    type: parseInt(raw["Type"]),
    side: raw["Side"],
    symbol: raw["Symbol"],
    qty: parseInt(raw["Qty"]),
    price: parseFloat(raw["Price"]).toFixed(2),
    exectime: formatTime(raw["Exec Time"]),
    grossproceeds: parseFloat(raw["Gross Proceeds"]).toFixed(2),
    netproceeds: parseFloat(raw["Net Proceeds"]).toFixed(2),
  }));

  try {
    const insertedRows = await db("trades")
      .insert(formattedData)
      .returning("*"); // Returning all columns
    return insertedRows;
  } catch (error) {
    console.error("Error inserting data into database:", error);
    // Log more details if needed
    console.error("Error Details:", {
      message: error.message,
      stack: error.stack,
      // Include any other relevant information about the error
    });

    throw error;
  }
};

const getTradesData = () => {
  return db("trades").select("*");
};

module.exports = {
  insertDataFromExcel,
  getTradesData,
};
