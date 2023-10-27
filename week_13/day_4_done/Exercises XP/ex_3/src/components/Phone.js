import React, { useState } from "react";

const Phone = () => {
  const charactersPhone = {
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020,
  };

  const [brand, setBrand] = useState(charactersPhone.brand);
  const [color, setColor] = useState(charactersPhone.color);
  const [model, setModel] = useState(charactersPhone.model);
  const [year, setYear] = useState(charactersPhone.year);

  const changeColor = () => {
    setColor("blue");
  };

  return (
    <div>
      <h1>My phone is {brand}</h1>
      <p>
        It is a {color} {model} from {year}
      </p>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
};

export default Phone;
