const { db } = require("../config/db.js");

const getUserTradeStatistics = async (userId) => {
  try {
    // Calculate Gross Profit
    const { sum: grossProfit } = await db("statisticoftradesforday")
      .where({ user_id: userId })
      .sum("profitloss as sum")
      .first();

    // Calculate Average Daily Return
    const { count: tradingDays } = await db("statisticoftradesforday")
      .where({ user_id: userId })
      .count("id as count")
      .first();
    const averageDailyReturn = grossProfit / tradingDays;

    // Calculate Average Profit
    const { avg: averageProfit } = await db("trades")
      .where({ user_id: userId })
      .avg("profit_loss as avg")
      .first();

    // Calculate Profit Factor
    const winnerLoser = await db("statisticoftradesforday")
      .where({ user_id: userId })
      .sum("total_winners as winners")
      .sum("total_losers as losers")
      .first();
    const profitFactor = (winnerLoser.winners / winnerLoser.losers) * 100;

    // Calculate Winrate
    const { sum: totalWinners } = await db("statisticoftradesforday")
      .where({ user_id: userId })
      .sum("total_winners as sum")
      .first();
    const { sum: totalTrades } = await db("statisticoftradesforday")
      .where({ user_id: userId })
      .sum("total_trades as sum")
      .first();
    const winrate = (totalWinners / totalTrades) * 100;

    // Get All Trades
    const trades = await db("trades").where({ user_id: userId }).select("*");

    return {
      grossProfit,
      averageDailyReturn,
      averageProfit,
      profitFactor,
      winrate,
      totalTrades: totalTrades,
      trades,
    };
  } catch (error) {
    console.error(
      "Error fetching user trade statistics from the database:",
      error
    );
    throw error;
  }
};

module.exports = {
  getUserTradeStatistics,
};
