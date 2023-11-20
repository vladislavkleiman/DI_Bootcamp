const { getTradesFromDB } = require("../models/getTradesFromDB.model.js");

const getTradesController = async (req, res) => {
  console.log("Request received in getTradesController");
  try {
    const isoDateTime = req.query.datetrade;
    const selectedDate = new Date(isoDateTime).toISOString().split("T")[0];
    console.log("Selected Date:", selectedDate); // Log the date for debugging
    console.log("Selected Date in Controller:", selectedDate);

    let trades = await getTradesFromDB(selectedDate);

    // Transform the database fields to camelCase
    trades = trades.map((trade) => ({
      symbol: trade.stock_ticker,
      profit: trade.profit_loss,
      tradeType: trade.trade_type,
      tradeDate: trade.trade_date.toISOString(),
      execTime: trade.exectime,
    }));

    res.json(trades);
  } catch (error) {
    console.error("Error fetching trades:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getTradesController,
};
