const { db } = require("../config/db.js");

async function calculateProfit() {
  // Fetch all trades from the database, sorted by Symbol and DateTrades
  const trades = await db
    .select("*")
    .from("trades")
    .orderBy(["symbol", "datetrades"]);

  let results = {};
  let positions = {};

  trades.forEach((trade) => {
    const { Symbol: symbol, Qty: qty, Price: price, Side: side } = trade;

    // Initialize the stock position if it doesn't exist
    if (!positions[symbol]) {
      positions[symbol] = { qty: 0, buyCost: 0, sellRevenue: 0 };
    }

    // Update position
    if (side === "B") {
      // Buy
      positions[symbol].qty += qty;
      positions[symbol].buyCost += qty * price;
    } else if (side === "S") {
      // Sell
      positions[symbol].qty -= qty;
      positions[symbol].sellRevenue += qty * price;
    }

    // Check if position is closed
    if (positions[symbol].qty === 0) {
      // Calculate profit for this closed position
      let profit = positions[symbol].sellRevenue - positions[symbol].buyCost;

      // Store the result
      if (!results[symbol]) {
        results[symbol] = [];
      }
      results[symbol].push({
        symbol,
        profit: profit.toFixed(2),
      });

      // Reset position for the next trade sequence
      positions[symbol] = { qty: 0, buyCost: 0, sellRevenue: 0 };
    }
  });

  return results;
}

module.exports = { calculateProfit };
