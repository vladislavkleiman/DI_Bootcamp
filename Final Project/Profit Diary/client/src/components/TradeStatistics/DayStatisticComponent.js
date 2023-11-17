import React, { useEffect, useState } from "react";
import TradeTable from "./TradesTableComponent";

const DayStatisticComponent = () => {
  const [dataTrades, setDataTrades] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/profitdiary/daystatistic"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDataTrades(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  const flattenedTrades = Object.entries(dataTrades).flatMap(
    ([symbol, trades]) =>
      trades.map((trade) => ({
        date: formatDate(trade.tradeDate), // Format the date
        symbol: symbol,
        tradeType: trade.tradeType,
        profit: trade.profit,
      }))
  );

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TradeTable trades={flattenedTrades} />
    </div>
  );
};

export default DayStatisticComponent;
