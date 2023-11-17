import React, { useState } from "react";
import { Badge, Calendar, Drawer } from "antd";

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
        visible={sidebarVisible}
      >
        <p>
          Details for {selectedDate ? selectedDate.format("YYYY-MM-DD") : ""}
        </p>
      </Drawer>
    </div>
  );
};

export default CalendarStatisticComponent;
