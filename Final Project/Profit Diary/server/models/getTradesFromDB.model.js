const { db } = require("../config/db.js");

const getTradesFromDB = async (selectedDate) => {
  console.log("Request received model");
  try {
    const formattedDate = new Date(selectedDate).toISOString().split("T")[0];

    const trades = await db("trades")
      .select("*")
      .where("trade_date", "=", formattedDate); // Ensure column name matches your database schema

    console.log("Formatted Date in Model:", formattedDate);
    console.log("Trades:", trades);
    return trades;
  } catch (error) {
    console.error("Error fetching trades from the database:", error);
    throw error;
  }
};

module.exports = {
  getTradesFromDB,
};
