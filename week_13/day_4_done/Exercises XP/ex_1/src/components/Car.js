import React, { useState } from "react";
import Garage from "./Garage";
const carInfo = { name: "Ford", model: "Mustang" };

function Car() {
  const [model] = useState(carInfo.model);
  const [color, setColor] = useState("red");

  return (
    <div>
      <h1>
        This car is {model} and has a color: {color}
      </h1>
      <Garage size="small" />
    </div>
  );
}

export default Car;
