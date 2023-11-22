import React from "react";

const TradeStatisticsTable = ({ tradeStatistics }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Trade Statistics</h3>
      <table>
        <tbody>
          <tr>
            <td>Profit/Loss:</td>
            <td>{tradeStatistics.profitloss}</td>
          </tr>
          <tr>
            <td>Total Winners:</td>
            <td>{tradeStatistics.total_winners}</td>
          </tr>
          <tr>
            <td>Total Losers:</td>
            <td>{tradeStatistics.total_losers}</td>
          </tr>
          <tr>
            <td>Total Trades:</td>
            <td>{tradeStatistics.total_trades}</td>
          </tr>
          <tr>
            <td>Average Return:</td>
            <td>{tradeStatistics.avg_return}</td>
          </tr>
          <tr>
            <td>Total Long:</td>
            <td>{tradeStatistics.total_long}</td>
          </tr>
          <tr>
            <td>Total Shorts:</td>
            <td>{tradeStatistics.total_shorts}</td>
          </tr>
          <tr>
            <td>Win Rate:</td>
            <td>{tradeStatistics.win_rate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TradeStatisticsTable;
