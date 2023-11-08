import React, { useState } from "react";
import "./App.css";
import data from "./superheroes.json";

const App = () => {
  const [superHeroes, setSuperHeroes] = useState(data.superheroes);
  const [counter, setCounter] = useState(0);
  const [topScoreCounter, setTopScoreCounter] = useState(0);

  const shuffleArray = (array) => {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleCardClick = (id) => {
    let foundClicked = false;

    const updatedHeroes = superHeroes.map((hero) => {
      if (hero.id === id && !hero.clicked) {
        return { ...hero, clicked: true };
      } else if (hero.id === id && hero.clicked) {
        foundClicked = true;
      }
      return hero;
    });

    if (foundClicked) {
      alert("You've already clicked this hero! Game over.");
      const resetHeroes = updatedHeroes.map((h) => ({ ...h, clicked: false }));
      setSuperHeroes(shuffleArray(resetHeroes));
      if (counter > topScoreCounter) {
        setTopScoreCounter(counter);
      }
      setCounter(0);
    } else {
      setSuperHeroes(shuffleArray(updatedHeroes));
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  return (
    <div className="main">
      <h1 className="header1">Superheroes Memory Game</h1>
      <h2 className="header2">
        Get points by clicking on an image but don't click on any more than
        once!
      </h2>
      <h3>Score: {counter}</h3>
      <h3>Top Score: {topScoreCounter}</h3>
      <div className="heroContainer">
        {superHeroes.map((hero) => (
          <div
            className="hero"
            key={hero.id}
            onClick={() => handleCardClick(hero.id)}
          >
            <img src={hero.image} alt={hero.name} />
            <div>Name: {hero.name}</div>
            <div>Occupation: {hero.occupation}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
