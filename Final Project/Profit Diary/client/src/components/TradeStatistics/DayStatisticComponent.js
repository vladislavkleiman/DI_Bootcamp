import React, { useEffect, useState } from "react";

const DayStatisticComponent = () => {
  const [dataTrades, setDataTrades] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/profitdiary/calendar/daystatistic"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const dataTrades = await response.json();
        console.log(dataTrades);
        setDataTrades(dataTrades);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {dataTrades.data &&
        dataTrades.data.map((item, index) => (
          <div key={index}>
            <p>Price: {item.price}</p>
          </div>
        ))}
    </div>
  );
};

export default DayStatisticComponent;
