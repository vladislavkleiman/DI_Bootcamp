import React, { useEffect, useState } from "react";
import TradeTable from "./TradesTableComponent";
import { useLocation, useNavigate } from "react-router-dom";

const DayStatisticComponent = () => {
  const [dataTrades, setDataTrades] = useState({});
  const [error, setError] = useState(null);
  const [isInitialLoadComplete, setIsInitialLoadComplete] = useState(false);
  const location = useLocation();
  const selectedDate = location.state?.date;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/profitdiary/daystatistic?date=${selectedDate}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDataTrades(data);
        setIsInitialLoadComplete(true);
        console.log(dataTrades);
      } catch (error) {
        console.error("Error:", error);
        setError(error.message);
      }
    };

    if (!isInitialLoadComplete) {
      fetchData();
    }
  }, [isInitialLoadComplete, selectedDate]);

  useEffect(() => {
    if (Object.keys(dataTrades).length > 0) {
      const flattenedTrades = flattenTrades(dataTrades);
      sendTradesToServer(flattenedTrades);
    }
  }, [dataTrades]);

  const flattenTrades = (data) => {
    return Object.entries(data).flatMap(([symbol, trades]) =>
      trades.map((trade) => ({
        date: formatDate(trade.tradeDate),

        symbol: symbol,
        tradeType: trade.tradeType,
        profit: trade.profit,
      }))
    );
  };

  const formatDate = (dateString) => {
    // Create a Date object from the dateString
    const date = new Date(dateString);

    // Format the date as YYYY-MM-DD
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const sendTradesToServer = async (flattenedTrades) => {
    try {
      const response = await fetch(
        "http://localhost:5000/profitdiary/api/loadTrades",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ flattenedTrades }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result.message);

      // Call to remove duplicates
      await removeDuplicates();
    } catch (error) {
      console.error("Error sending trades:", error);
    }
  };

  const removeDuplicates = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/profitdiary/api/removeDuplicates",
        {
          method: "POST",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result.message);
    } catch (error) {
      console.error("Error removing duplicates:", error);
    }
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
    </div>
  );
};

export default DayStatisticComponent;
