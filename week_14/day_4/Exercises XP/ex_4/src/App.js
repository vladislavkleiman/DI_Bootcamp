import React from "react";
const url = "https://webhook.site/e4ff3972-fd54-4dfb-b320-ce5bddf334f1";

const App = () => {
  const info = {
    key1: "myusername",
    email: "mymail@gmail.com",
    name: "Isaac",
    lastname: "Doe",
    age: 27,
  };
  const handleData = async () => {
    try {
      console.log("click");
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: info }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Server responded with status:", response.status);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return <button onClick={handleData}>Post Data</button>;
};

export default App;
