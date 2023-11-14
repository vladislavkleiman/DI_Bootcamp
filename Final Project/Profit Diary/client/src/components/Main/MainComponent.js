import React from "react";
import SideBar from "./SideBar.js";
import MainStatistic from "./MainStatistic.js";

const MainComponent = () => {
  return (
    <div className="mainComponent">
      <MainStatistic />
      <SideBar />
    </div>
  );
};

export default MainComponent;
