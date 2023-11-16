import React from "react";
import ReactDOM from "react-dom/client";
import LoginComponent from "./components/Login/LoginComponent";
import MainComponent from "./components/Main/MainComponent";
import DateCalendarServerRequest from "./components/TradeStatistics/CalendarStatisticComponent";
import SideBar from "./components/Main/SideBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <LoginComponent /> */}
    {/* <MainComponent /> */}
    <DateCalendarServerRequest />
    <SideBar />
  </React.StrictMode>
);
