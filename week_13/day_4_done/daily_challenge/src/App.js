import React, { useState } from "react";
import "./App.css";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const voteCounter = (index) => {
    const newLanguages = [...languages];
    newLanguages[index].votes += 1;
    setLanguages(newLanguages); // Update the state
  };

  return (
    <div className="general">
      <h1>Vote Your Language!</h1>
      <div className="blocks">
        {languages.map((language, index) => (
          <div key={index} className="block">
            <div className="voteCount">{language.votes}</div>
            <div className="languageName">{language.name}</div>
            <button
              style={{
                width: "120px",
                height: "20px",
                color: "green",
                border: "none",
                backgroundColor: "yellow",
                fontSize: "30px",
              }}
              onClick={() => voteCounter(index)}
            >
              Vote
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
