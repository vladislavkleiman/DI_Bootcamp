import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useRef,
} from "react";

import "../MainComponent.css";
import HomePage from "./HomePage";
import FavoritesPage from "./FavoritesPage";

const api_key = "6aa1ff2d813f15111d7e6b5a28aadd18";

const MainComponent = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [weatherDescription, setWeatherDescription] = useState(null);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [iconWeather, setIconWeather] = useState("");
  const [idIconWeather, setidIconWeather] = useState("");
  const [day1date, setDay1date] = useState(null);
  const [day2date, setDay2date] = useState(null);
  const [day3date, setDay3date] = useState(null);
  const [day4date, setDay4date] = useState(null);
  const [day5date, setDay5date] = useState(null);
  const [day1temp, setDay1temp] = useState(null);
  const [day2temp, setDay2temp] = useState(null);
  const [day3temp, setDay3temp] = useState(null);
  const [day4temp, setDay4temp] = useState(null);
  const [day5temp, setDay5temp] = useState(null);
  const [day1icon, setDay1icon] = useState(null);
  const [day2icon, setDay2icon] = useState(null);
  const [day3icon, setDay3icon] = useState(null);
  const [day4icon, setDay4icon] = useState(null);
  const [day5icon, setDay5icon] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const fetchCityData = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${api_key}`
      );
      if (!response.ok) {
        throw new Error("Error with fetch data");
      }
      const data = await response.json();
      console.log(data);
      console.log(data[0].lat);
      console.log(data[0].lon);
      setLat(data[0].lat);
      setLon(data[0].lon);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`
      );
      if (!response.ok) {
        throw new Error("Error with fetch data");
      }
      const data = await response.json();
      console.log(data);
      setWeatherData(data.main.temp);
      console.log(data.weather[0].description);
      setWeatherDescription(data.weather[0].description);
      setIconWeather(data.weather[0].icon);
      setidIconWeather(data.weather[0].id);
    } catch (error) {}
  };

  const fetchWeatherForecast = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${api_key}`
      );
      if (!response.ok) {
        throw new Error("Error with fetch data");
      }
      const data = await response.json();
      console.log("fetchWeatherForecast:", data);

      setDay1date(data.list[1].dt_txt.slice(0, 10));
      setDay1temp(data.list[1].main.temp);
      setDay1icon(data.list[1].weather[0].icon);
      setDay2date(data.list[2].dt_txt.slice(0, 10));
      setDay2temp(data.list[2].main.temp);
      setDay2icon(data.list[2].weather[0].icon);
      setDay3date(data.list[3].dt_txt.slice(0, 10));
      setDay3temp(data.list[3].main.temp);
      setDay3icon(data.list[3].weather[0].icon);
      setDay4date(data.list[4].dt_txt.slice(0, 10));
      setDay4temp(data.list[4].main.temp);
      setDay4icon(data.list[4].weather[0].icon);
      setDay5date(data.list[5].dt_txt.slice(0, 10));
      setDay5temp(data.list[5].main.temp);
      setDay5icon(data.list[5].weather[0].icon);
    } catch (error) {
      console.error(error);
    }
  };

  const getBackgroundColor = () => {
    if (idIconWeather >= 200 && idIconWeather <= 321) {
      return "gray";
    } else if (idIconWeather >= 500 && idIconWeather <= 531) {
      return "blue";
    } else if (idIconWeather >= 600 && idIconWeather <= 782) {
      return "white";
    } else if (idIconWeather === 800) {
      return "yellow";
    } else if (idIconWeather >= 801 && idIconWeather <= 804) {
      return "blue";
    } else {
      return "defaultColor";
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      fetchCityData();
    }
  };

  const handleAddFavorite = () => {
    const favorite = {
      name: city,
      temperature: weatherData,
      description: weatherDescription,
    };
    setFavorites((prevFavorites) => [...prevFavorites, favorite]);
  };

  const showHomePage = () => {
    setCurrentPage("home");
  };

  const showFavoritesPage = () => {
    setCurrentPage("favorites");
  };

  useEffect(() => {
    if (lat && lon) {
      fetchWeatherData();
      fetchWeatherForecast();
    }
  }, [lat, lon]);

  return (
    <div className="main">
      <header>
        <h2 className="head">Herolo Weather Task</h2>
        <div className="buttons">
          <button className="home" onClick={showHomePage}>
            Home
          </button>
          <button className="favorites" onClick={showFavoritesPage}>
            Favorites
          </button>
        </div>
      </header>
      {currentPage === "home" && (
        <HomePage
          city={city}
          setCity={setCity}
          handleKeyDown={handleKeyDown}
          handleAddFavorite={handleAddFavorite}
          iconWeather={iconWeather}
          weatherData={weatherData}
          weatherDescription={weatherDescription}
          day1date={day1date}
          day1temp={day1temp}
          day1icon={day1icon}
          day2date={day2date}
          day2temp={day2temp}
          day2icon={day2icon}
          day3date={day3date}
          day3temp={day3temp}
          day3icon={day3icon}
          day4date={day4date}
          day4temp={day4temp}
          day4icon={day4icon}
          day5date={day5date}
          day5temp={day5temp}
          day5icon={day5icon}
          getBackgroundColor={getBackgroundColor}
        />
      )}
      {currentPage === "favorites" && favorites.length > 0 && (
        <FavoritesPage favorites={favorites} />
      )}
    </div>
  );
};

export default MainComponent;
