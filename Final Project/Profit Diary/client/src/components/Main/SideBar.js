import React from "react";
import "../../styles/SideBar.css";

const SideBar = () => {
  return (
    <div className="mainSideBar">
      <div className="sideBarmenu">Privet, Vlad!</div>
      <div className="sideBarmenu">Home</div>
      <div className="sideBarmenu">Diary</div>
      <div className="sideBarmenu">Trade statistics</div>
      <div className="sideBarmenu">Work Space</div>
      <div className="sideBarmenu">Info About Stocks</div>
    </div>
  );
};

export default SideBar;
