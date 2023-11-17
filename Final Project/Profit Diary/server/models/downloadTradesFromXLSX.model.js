const { db } = require("../config/db.js");
const moment = require("moment");

const formatDate = (dateString) => {
  return moment(dateString, "MM/DD/YYYY").format("YYYY-MM-DD");
};

const formatTime = (excelTime) => {
  if (typeof excelTime === "number") {
    const millisecondsInADay = 24 * 60 * 60 * 1000;
    const millisecondsSinceStartOfDay = excelTime * millisecondsInADay;

    const startOfDay = new Date(0, 0, 0);

    startOfDay.setMilliseconds(millisecondsSinceStartOfDay);

    return moment(startOfDay).format("HH:mm:ss");
  } else {
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
    datetrades: formatDate(raw["Date Trades"]),
    currency: raw["Currency"],
    side: raw["Side"].charAt(0),
    symbol: raw["Symbol"],
    qty: parseInt(raw["Qty"]),
    price: parseFloat(raw["Price"]).toFixed(2),
    exectime: formatTime(raw["Exec Time"]),
    grossproceeds: parseFloat(raw["Gross Proceeds"]).toFixed(2),
    netproceeds: parseFloat(raw["Net Proceeds"]).toFixed(2),
  }));

  try {
    const insertedRows = await db("tradestransaction")
      .insert(formattedData)
      .returning("*");
    return insertedRows;
  } catch (error) {
    console.error("Error inserting data into database:", error);

    console.error("Error Details:", {
      message: error.message,
      stack: error.stack,
    });

    throw error;
  }
};

const getTradesData = () => {
  return db("tradestransaction").select("*");
};

module.exports = {
  insertDataFromExcel,
  getTradesData,
};
