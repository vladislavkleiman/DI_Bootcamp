import React, { useEffect, useState } from "react";
import TradeTable from "./TradesTableComponent";
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
      const response = await fetch(
        "http://localhost:5000/profitdiary/trades-api/loadTrades",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      fetchData();
    } catch (error) {
      console.error("Error triggering trades processing:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedDate]);

  const removeDuplicates = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/profitdiary/trades-api/removeDuplicates",
        {
          method: "POST",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Optionally, fetch updated trades data here
      fetchData();
    } catch (error) {
      console.error("Error removing duplicates:", error);
    }
  };

  const flattenTrades = (data) => {
    if (!Array.isArray(data)) {
      console.error("Expected an array, received:", data);
      return [];
    }

    return data.map((trade) => ({
      date: formatDate(trade.tradeDate),
      symbol: trade.symbol,
      tradeType: trade.tradeType,
      profit: trade.profit,
    }));
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
      <TradeTable trades={flattenTrades(dataTrades)} />
      {/* Buttons or triggers to manually call sendTradesToServer or removeDuplicates if needed */}
    </div>
  );
};

export default DayStatisticComponent;
