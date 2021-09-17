import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "./Button";

const api_key = process.env.REACT_APP_API_KEY;

const Country = ({ country }) => {
  const [showInfo, setShowInfo] = useState(false);
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
  }, [country.capital]);

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
        <img src={weather.condition.icon} alt="Condition"></img>
      </div>
    );
  };

  if (showInfo) {
    console.log("From if(showInfo)");
    return (
      <div>
        {displayInformation(country)}
        <Button
          onClickFunction={setShowInfo}
          string1={"Hide"}
          string2={"Show"}
          boolean={showInfo}
        />
      </div>
    );
  }

  return (
    <div>
      {country.name}
      <Button
        onClickFunction={setShowInfo}
        string1={"Hide"}
        string2={"Show"}
        boolean={showInfo}
      />
    </div>
  );
};

export default Country;
