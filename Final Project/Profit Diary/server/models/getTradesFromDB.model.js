const { db } = require("../config/db.js");

const getTradesFromDB = async (selectedDate) => {
  console.log("Request received model");
  try {
    const trades = await db("trades")
      .select("*")
      .where("trade_date", "=", selectedDate);
    console.log("Selected Date in Model:", selectedDate);
    console.log("Trades:", trades); // Log the trades for debugging
    console.log(trades);
    return trades;
  } catch (error) {
    console.error("Error fetching trades from the database:", error);
    throw error;
  }
};

module.exports = {
  getTradesFromDB,
};
