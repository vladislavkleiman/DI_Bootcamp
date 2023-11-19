import React, { useState, useRef, useEffect } from "react";
import { Badge, Calendar, Drawer } from "antd";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const getListData = (value) => {
  let listData;

  switch (value.date()) {
    case 8:
      listData = [
        {
          type: "warning",
          content: "This is warning event.",
        },
        {
          type: "success",
          content: "This is usual event.",
        },
      ];
      break;

    case 10:
      listData = [
        {
          type: "warning",
          content: "This is warning event.",
        },
        {
          type: "success",
          content: "This is usual event.",
        },
        {
          type: "error",
          content: "This is error event.",
        },
      ];
      break;

    case 15:
      listData = [
        {
          type: "warning",
          content: "This is warning event",
        },
        {
          type: "success",
          content: "This is very long usual event......",
        },
        {
          type: "error",
          content: "This is error event 1.",
        },
        {
          type: "error",
          content: "This is error event 2.",
        },
        {
          type: "error",
          content: "This is error event 3.",
        },
        {
          type: "error",
          content: "This is error event 4.",
        },
      ];
      break;
    default:
  }
  return listData || [];
};

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

  const calendarStyle = {
    width: "1400px", // Adjust the width as needed
    height: "700px", // Adjust the height as needed
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

  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

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

  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };

  return (
    <div>
      <div style={{ ...containerStyle, ...blurStyle }}>
        <Calendar
          style={calendarStyle}
          cellRender={cellRender}
          onSelect={onSelect}
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
