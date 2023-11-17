const { db } = require("../config/db.js");

async function calculateProfit() {
  // Fetch all trades from the database, sorted by symbol and DateTrades
  const trades = await db
    .select("*")
    .from("trades")
    .orderBy(["symbol", "datetrades"]);

  let results = {};
  let positions = {};

  trades.forEach((trade) => {
    const { symbol, qty, price, side } = trade; // Assuming these are the correct column names

    // Initialize the stock position if it doesn't exist
    if (!positions[symbol]) {
      positions[symbol] = { qty: 0, buyCost: 0, sellRevenue: 0 };
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
      results[symbol].push({ symbol, profit: profit.toFixed(2) });

      positions[symbol] = { qty: 0, buyCost: 0, sellRevenue: 0 };
    }
  });

  return results;
}

module.exports = {
  calculateProfit,
};
