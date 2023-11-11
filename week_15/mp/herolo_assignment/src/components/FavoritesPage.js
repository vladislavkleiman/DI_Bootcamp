import React from "react";
import "../FavoritesComponent.css";

const FavoritesPage = ({ favorites }) => {
  return (
    <div className="mainFavorites">
      {favorites.map((favorite, index) => (
        <div key={index} className="favoriteCity">
          <p className="favoriteCityName">{favorite.name}</p>
          <p className="favoriteCityTemp">{favorite.temperature}°C</p>
          <p className="favoriteCityDescription">{favorite.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesPage;
