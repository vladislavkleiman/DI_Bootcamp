import React from "react";

const HomePage = ({
  city,
  setCity,
  handleKeyDown,
  handleAddFavorite,
  iconWeather,
  weatherData,
  weatherDescription,
  day1date,
  day1temp,
  day1icon,
  day2date,
  day2temp,
  day2icon,
  day3date,
  day3temp,
  day3icon,
  day4date,
  day4temp,
  day4icon,
  day5date,
  day5temp,
  day5icon,
  getBackgroundColor,
}) => {
  return (
    <div
      className="mainContainer"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <input
        className="searchCity"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="weatherContainer">
        <div className="weather">
          <div className="top">
            <div className="cityWeather">
              <div className="pictureOfWeather">
                <img
                  className="imageWeather"
                  src={`https://openweathermap.org/img/wn/${iconWeather}@2x.png`}
                  alt="Weather Icon"
                />
              </div>
              <p className="nameOfCity">Weather in: {city}</p>
              <p className="currentWeather">
                Current temperature: {weatherData}&#8451;
              </p>
            </div>
            <button className="addToFavorites" onClick={handleAddFavorite}>
              Add to Favorites
            </button>
          </div>
          <div className="stateOfWeather">{weatherDescription}</div>
          <div className="bottom">
            <div className="weatherForDays">
              <div className="dayWeather">
                Day 1<p className="dateOfDay">{day1date}</p>
                <p className="tempOfDay">{day1temp}&#8451;</p>
                <img
                  className="imageWeatherDays"
                  src={`https://openweathermap.org/img/wn/${day1icon}@2x.png`}
                  alt="Weather Icon"
                />
              </div>
              <div className="dayWeather">
                Day 2<p className="dateOfDay">{day2date}</p>
                <p className="tempOfDay">{day2temp}&#8451;</p>
                <img
                  className="imageWeatherDays"
                  src={`https://openweathermap.org/img/wn/${day2icon}@2x.png`}
                  alt="Weather Icon"
                />
              </div>
              <div className="dayWeather">
                Day 3<p className="dateOfDay">{day3date}</p>
                <p className="tempOfDay">{day3temp}&#8451;</p>
                <img
                  className="imageWeatherDays"
                  src={`https://openweathermap.org/img/wn/${day3icon}@2x.png`}
                  alt="Weather Icon"
                />
              </div>
              <div className="dayWeather">
                Day 4<p className="dateOfDay">{day4date}</p>
                <p className="tempOfDay">{day4temp}&#8451;</p>
                <img
                  className="imageWeatherDays"
                  src={`https://openweathermap.org/img/wn/${day4icon}@2x.png`}
                  alt="Weather Icon"
                />
              </div>
              <div className="dayWeather">
                Day 5<p className="dateOfDay">{day5date}</p>
                <p className="tempOfDay">{day5temp}&#8451;</p>
                <img
                  className="imageWeatherDays"
                  src={`https://openweathermap.org/img/wn/${day5icon}@2x.png`}
                  alt="Weather Icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
