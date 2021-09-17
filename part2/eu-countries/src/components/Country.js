import React, { useEffect, useState } from "react";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

const Country = ({ country, show }) => {
  const [showInfo, setShowInfo] = useState(show);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    axios
      .get("http://api.weatherapi.com/v1/current.json", {
        params: {
          key: api_key,
          q: country.capital,
        },
      })
      .then((response) => {
        setWeather(response.data.current);
      });
  });

  const displayInformation = (country) => {
    return (
      <div key={country.name}>
        <h2>Name: {country.name}</h2>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population} </p>
        <p>Languages:</p>
        <ul>
          {country.languages.map((language) => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>
        <p>
          Flag: <img src={country.flag} alt="Flag"></img>
        </p>
        <h2>Weather in {country.capital}</h2>
        <p>Temperature: {weather.temp_c}</p>
        <img src={weather.condition.icon.icon} alt="Condition"></img>
      </div>
    );
  };

  if (showInfo) {
    return (
      <div>
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? "Hide" : "Show"}
        </button>
        {displayInformation(country)}
      </div>
    );
  }

  return (
    <div>
      {country.name}
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default Country;
