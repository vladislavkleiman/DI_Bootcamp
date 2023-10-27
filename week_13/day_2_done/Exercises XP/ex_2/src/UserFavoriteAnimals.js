import React from "react";

class UserFavoriteAnimals extends React.Component {
  render() {
    const favAnimals = this.props.favAnimals;
    return (
      <div>
        <h2>Favorite animals:</h2>
        <ul>
          {favAnimals.map((animal, index) => (
            <li key={index}>{animal}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserFavoriteAnimals;
