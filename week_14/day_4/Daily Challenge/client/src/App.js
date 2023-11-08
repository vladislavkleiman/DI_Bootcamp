import React, { useEffect, useState } from "react";
const url = "http://localhost:5000/api/hello";
const url2 = "http://localhost:5000/api/world";

const App = () => {
  const [words, setPhrase] = useState("");
  const [formData, setData] = useState("");
  const [serverResponse, setServerResponse] = useState("");

  const sentData = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(url2, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputValue: formData }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setServerResponse(result.message);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handleData = (event) => {
    setData(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        console.log(data);
        setPhrase(data);
      } catch (error) {
        console.error("Fetch error: " + error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>{words}</div>
      <h1>Post to Server</h1>
      <form onSubmit={sentData}>
        <input type="text" value={formData} onChange={handleData}></input>
        <button>Submit</button>
      </form>
      <p>{serverResponse}</p>
    </>
  );
};

export default App;
