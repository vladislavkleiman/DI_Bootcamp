const { db } = require("../config/db.js");

async function calculateProfit() {
  // Fetch all trades from the database, sorted by symbol and DateTrades
  const trades = await db
    .select("*")
    .from("tradestransaction")
    .orderBy(["symbol", "datetrades"]);

  let results = {};
  let positions = {};

  trades.forEach((trade) => {
    const { symbol, qty, price, side, datetrades } = trade; // Ensure these match your column names

    // Initialize the stock position if it doesn't exist
    if (!positions[symbol]) {
      positions[symbol] = {
        qty: 0,
        buyCost: 0,
        sellRevenue: 0,
        firstTradeType: null,
        firstTradeDate: null, // Add a field to store the date of the first trade
      };
    }

    // Determine the type and date of the first trade (Long or Short)
    if (
      positions[symbol].qty === 0 &&
      positions[symbol].firstTradeType === null
    ) {
      positions[symbol].firstTradeType = side === "B" ? "Long" : "Short";
      positions[symbol].firstTradeDate = datetrades; // Store the date of the first trade
    }

    // Update position
    if (side === "B") {
      positions[symbol].qty += qty;
      positions[symbol].buyCost += qty * price;
    } else if (side === "S") {
      positions[symbol].qty -= qty;
      positions[symbol].sellRevenue += qty * price;
    }

    // Check if position is closed and there was a trade
    if (
      positions[symbol].qty === 0 &&
      (positions[symbol].buyCost > 0 || positions[symbol].sellRevenue > 0)
    ) {
      let profit = positions[symbol].sellRevenue - positions[symbol].buyCost;

      if (!results[symbol]) {
        results[symbol] = [];
      }
      results[symbol].push({
        symbol,
        profit: profit.toFixed(2),
        tradeType: positions[symbol].firstTradeType,
        tradeDate: positions[symbol].firstTradeDate, // Add the trade date to the result
      });

      // Reset position for the next trade sequence
      positions[symbol] = {
        qty: 0,
        buyCost: 0,
        sellRevenue: 0,
        firstTradeType: null,
        firstTradeDate: null,
      };
    }
  });

  return results;
}

module.exports = {
  calculateProfit,
};
