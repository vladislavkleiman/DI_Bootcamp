import React, { useEffect, useState } from "react";

const DayStatisticComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:5000/profitdiary/calendar/"
      );
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((row, index) => (
        <div key={index}>
          <p>
            {row.DateTrades} - {row.Currency} - {row.Price} ...
          </p>
        </div>
      ))}
    </div>
  );
};

export default DayStatisticComponent;
