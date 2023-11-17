import React, { useEffect, useState } from "react";

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
        console.log(data); // Correct place to log the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

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
      {Object.entries(dataTrades).map(([symbol, trades], index) => (
        <div key={index}>
          <h3>{symbol}</h3>
          {Array.isArray(trades) &&
            trades.map((trade, idx) => (
              <div key={idx}>
                <p>Profit/Loss: {trade.profit ? `$${trade.profit}` : "N/A"}</p>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default DayStatisticComponent;
