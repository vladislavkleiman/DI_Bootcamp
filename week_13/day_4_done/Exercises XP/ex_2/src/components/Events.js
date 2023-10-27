import React, { useState } from "react";

const Events = () => {
  const clickMe = () => {
    alert("I was clicked");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const message = event.target.value;
      alert(`The Enter key was pressed, your input is: ${message}`);
    }
  };

  const [isToggleOn, setToggleOn] = useState(true);

  const toggleOnOFF = () => {
    setToggleOn(!isToggleOn);
  };

  return (
    <div>
      <button onClick={clickMe}>Click Me</button>
      <br></br>
      <input
        onKeyDown={handleKeyDown}
        type="text"
        name="something"
        placeholder="Press the ENTER key!"
      ></input>
      <br></br>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100px",
          height: "70px",
          border: "1px solid black",
        }}
      >
        <p style={{ marginTop: "20px" }}>Exercise 9</p>
        <button onClick={toggleOnOFF}> {isToggleOn ? "ON" : "OFF"}</button>
      </div>
    </div>
  );
};

export default Events;
