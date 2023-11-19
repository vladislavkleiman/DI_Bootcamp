const { db } = require("../config/db.js");

async function calculateProfit() {
  // Fetch all trades from the database, sorted by symbol and DateTrades
  const trades = await db
    .select("*")
    .from("tradestransaction")
    .orderBy(["symbol", "datetrades"]);

  console.log(
    "calculateProfit: Trades fetched from tradestransaction:",
    trades
  );

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

async function loadTradesIntoDatabase() {
  const calculatedTrades = await calculateProfit();
  console.log("Loading trades into database: ", calculatedTrades);

  for (const symbol in calculatedTrades) {
    for (const trade of calculatedTrades[symbol]) {
      await db("trades").insert({
        trade_date: trade.tradeDate,
        stock_ticker: symbol,
        trade_type: trade.tradeType,
        profit_loss: trade.profit,
      });
    }
  }
  console.log("All trades have been successfully loaded into the database.");
}

async function removeDuplicateTrades() {
  try {
    // Use a CTE to find duplicates and keep only the first instance of each duplicate set
    await db.raw(`
      WITH duplicates AS (
        SELECT id_trades,
               ROW_NUMBER() OVER (
                 PARTITION BY trade_date, stock_ticker, trade_type, profit_loss 
                 ORDER BY id_trades
               ) as row_num
        FROM trades
      )
      DELETE FROM trades
      WHERE id_trades IN (
        SELECT id_trades FROM duplicates WHERE row_num > 1
      )
    `);
    console.log("Duplicate trades removed successfully.");
  } catch (error) {
    console.error("Error removing duplicate trades:", error);
  }
}

module.exports = {
  loadTradesIntoDatabase,
  removeDuplicateTrades,
};
