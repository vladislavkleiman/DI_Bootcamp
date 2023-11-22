import React, { useEffect, useState } from "react";
import TradeTable from "./TradesTableComponent";
import ProfitChartComponent from "./ProfitChartComponent";
import { useLocation } from "react-router-dom";

const DayStatisticComponent = () => {
  const [dataTrades, setDataTrades] = useState([]);
  const [totalProfit, setTotalProfit] = useState(0);
  const [error, setError] = useState(null);
  const location = useLocation();
  const selectedDate = location.state?.date || "default-date-value";

  // useEffect(() => {
  //   fetchData();
  // }, [selectedDate]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("User ID not found.");
      return;
    }
    if (!selectedDate) {
      console.error("No selected date provided");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/profitdiary/daily-trades?datetrade=${selectedDate}&userId=${userId}`
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

  const flattenTrades = (data) => {
    if (!Array.isArray(data)) {
      console.error("Expected an array, received:", data);
      return [];
    }

    return data.map((trade) => {
      return {
        date: formatDate(trade.tradeDate),
        execTime: trade.execTime,
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
      <div style={{ fontSize: "20px" }}>
        Profit for day: ${totalProfit.toFixed(2)}
      </div>
      <TradeTable trades={flattenTrades(dataTrades)} />
    </div>
  );
};

export default DayStatisticComponent;
