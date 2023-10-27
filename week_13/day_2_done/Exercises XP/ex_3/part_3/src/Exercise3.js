import React from "react";
import "./Exercise.css";

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

class Exercise extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={style_header}>This is a Header</h1>
        <p className="para">This is paragraph</p>
        <a href="url">This is link</a>
        <form>
          This is a form:<br></br>
          <label for="name">Enter your name:</label>
          <br></br>
          <input name="text" type="text"></input>
          <button type="submit">Submit</button>
        </form>
        <p>Here is an image:</p>
        <img
          style={{ width: "100px" }}
          src="./logo192.png"
          alt="react_logo"
        ></img>
        <ul>
          This is a List:
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
