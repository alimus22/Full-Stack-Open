import React, { useEffect, useState } from "react";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

const Country = ({ country, display }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [weather, setWeather] = useState([]);

  const param = {
    access_key: "YOUR_ACCESS_KEY",
    query: country.capital,
  };

  useEffect(() => {
    axios
      .get("https://api.weatherstack.com/current", { param })
      .then((response) => {
        console.log(response.data);
        setWeather(response.data);
      });
  });

  if (showInfo) {
    return (
      <div>
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? "Hide" : "Show"}
        </button>
        {display(country)}
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
