import React, { useRef, useState } from "react";

function CharacterCounter() {
  const inputRef = useRef(null);
  const [charCounter, setCharCounter] = useState(0);

  const handleInputChange = () => {
    const textLength = inputRef.current.value.length;
    setCharCounter(textLength);
  };

  return (
    <div>
      <h1>Character Counter</h1>
      <textarea
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Type something..."
      ></textarea>
      <p>Character Count: {charCounter}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <CharacterCounter />
    </div>
  );
}

export default App;
