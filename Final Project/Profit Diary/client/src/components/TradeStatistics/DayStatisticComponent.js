import React, { useEffect, useState } from "react";
import TradeTable from "./TradesTableComponent";
import ProfitChartComponent from "./ProfitChartComponent";
import { useLocation } from "react-router-dom";

const DayStatisticComponent = () => {
  const [dataTrades, setDataTrades] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();
  const selectedDate = location.state?.date || "default-date-value";

  useEffect(() => {
    sendTradesToServer();
  }, []);

  const fetchData = async () => {
    if (!selectedDate) {
      console.error("No selected date provided");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/profitdiary/daily-trades?datetrade=${selectedDate}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setDataTrades(data);
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    }
  };

  const sendTradesToServer = async () => {
    try {
      console.log("Starting to process trades...");
      const response = await fetch(
        "http://localhost:5000/profitdiary/trades-api/loadTrades",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Error in processing trades. HTTP status: ${response.status}`
        );
      }
      console.log("Trades processed successfully.");

      console.log("Fetching processed data for display...");
      fetchData();
    } catch (error) {
      console.error("Error in trade processing flow:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedDate]);

  const flattenTrades = (data) => {
    if (!Array.isArray(data)) {
      console.error("Expected an array, received:", data);
      return [];
    }

    return data.map((trade) => {
      return {
        date: formatDate(trade.tradeDate),
        execTime: trade.execTime, // Format the execution time
        symbol: trade.symbol,
        tradeType: trade.tradeType,
        profit: trade.profit,
      };
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

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
      <ProfitChartComponent trades={flattenTrades(dataTrades)} />
      <TradeTable trades={flattenTrades(dataTrades)} />

      {/* Buttons or triggers to manually call sendTradesToServer or removeDuplicates if needed */}
    </div>
  );
};

export default DayStatisticComponent;
