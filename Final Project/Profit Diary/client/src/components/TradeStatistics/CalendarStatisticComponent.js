import React, { useState, useRef, useEffect } from "react";
import { Badge, Calendar, Drawer } from "antd";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const CalendarStatisticComponent = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const [tradeStats, setTradeStats] = useState({});

  const calendarStyle = {
    width: "1400px",
    height: "700px",
    margin: "auto",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    marginLeft: "120px",
  };

  const blurStyle = {
    filter: sidebarVisible ? "blur(4px)" : "none",
    transition: "filter 0.3s",
  };

  const fetchTradeStats = async (year, month) => {
    const userId = localStorage.getItem("userId");
    console.log("fetchTradeStats called with year:", year, "month:", month);
    try {
      const response = await fetch(
        `http://localhost:5000/profitdiary/trade-stats`,
        {
          method: "GET",
          headers: {
            "user-id": userId,
            year: year.toString(),
            month: month.toString(),
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch trade statistics");
      }
      const data = await response.json();
      console.log("Response data:", data);

      const statsMap = {};
      data.forEach((stat) => {
        const day = new Date(stat.date_trade).getDate();
        statsMap[day] = stat;
      });
      // setTradeStats(statsMap);
      setTradeStats(data);
      console.log(data);
      console.log(
        "fetchTradeStats для полученимя данных за месяц закончил работу"
      );
    } catch (error) {
      console.error("Error fetching trade statistics:", error);
    }
  };

  const getListData = (value) => {
    const dayStats = tradeStats[value.date()];
    if (!dayStats) return [];

    return [
      {
        type: dayStats.profitloss >= 0 ? "success" : "error",
        content: `Profit/Loss: ${dayStats.profitloss}, Trades: ${dayStats.total_trades}`,
      },
    ];
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    const userId = localStorage.getItem("userId");
    if (userId) {
      formData.append("userId", userId);
    } else {
      alert("User ID not found. Please log in again.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/profitdiary/trades-upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      try {
        const result = await response.json();
        alert(result.message);
      } catch (e) {
        console.error("Response is not in JSON format:", e);
        alert("Error processing response");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file");
    } finally {
      setSelectedFile(null);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  useEffect(() => {
    if (selectedFile) {
      handleFileUpload();
    }
  }, [selectedFile]);

  useEffect(() => {
    console.log("Updated tradeStats:", tradeStats);
  }, [tradeStats]);

  const navigate = useNavigate();

  const viewDay = () => {
    if (selectedDate) {
      const formattedDate = selectedDate.format("YYYY-MM-DD");
      navigate("/daystatistic", { state: { date: formattedDate } });
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const onSelect = (value) => {
    setSelectedDate(value);
    setSidebarVisible(true);
  };

  useEffect(() => {
    const today = new Date();
    fetchTradeStats(today.getFullYear(), today.getMonth());
  }, []);

  const onPanelChange = (value) => {
    const year = value.year();
    const month = value.month() + 1; // month() returns 0-11, so adding 1
    console.log("Selected Year:", year, "Selected Month:", month); // Log the selected year and month
    fetchTradeStats(year, month);
  };

  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const cellRender = (current, info) => {
    if (info && info.type === "date") {
      const listData = getListData(current);
      return (
        <ul className="events">
          {listData.map((item, index) => (
            <li key={index}>
              <Badge status={item.type} text={item.content} />
            </li>
          ))}
        </ul>
      );
    }
    if (info && info.type === "month") {
      return monthCellRender(current);
    }
    return null;
  };

  return (
    <div>
      <div style={{ ...containerStyle, ...blurStyle }}>
        <Calendar
          style={calendarStyle}
          cellRender={cellRender}
          onSelect={onSelect}
          onPanelChange={onPanelChange}
        />
      </div>
      <Drawer
        title={`Events on ${
          selectedDate ? selectedDate.format("YYYY-MM-DD") : ""
        }`}
        placement="right"
        onClose={() => setSidebarVisible(false)}
        open={sidebarVisible}
      >
        <div
          className="formStatisticInCalendar"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <p>
            Details statistic for{" "}
            {selectedDate ? selectedDate.format("YYYY-MM-DD") : ""}
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              style={{ backgroundColor: "black" }}
              onClick={triggerFileInput}
            >
              Add Statistic
            </Button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept=".xlsx"
              onChange={handleFileChange}
            />
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              style={{ backgroundColor: "black" }}
              onClick={viewDay}
            >
              View Day
            </Button>
          </p>
        </div>
      </Drawer>
    </div>
  );
};

export default CalendarStatisticComponent;
