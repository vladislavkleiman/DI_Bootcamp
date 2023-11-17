import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import LoginComponent from "./components/Login/LoginComponent";
import HomeComponent from "./components/Main/HomeComponent";
import CalendarStatisticComponent from "./components/TradeStatistics/CalendarStatisticComponent";
import SideBar from "./components/Main/SideBar";
import InfoAboutStockComponent from "./components/InfoAboutCompany/InfoAboutStockComponent";
import GeneralStatisticComponent from "./components/TradeStatistics/GeneralStatisticComponent";
import NoteDiaryComponent from "./components/Diary/NoteDiaryComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/diary" element={<NoteDiaryComponent />} />
        <Route path="/calendar" element={<CalendarStatisticComponent />} />
        <Route
          path="/general-statistic"
          element={<GeneralStatisticComponent />}
        />
        <Route
          path="/info-about-stocks"
          element={<InfoAboutStockComponent />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
