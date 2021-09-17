import React from "react";
import Country from "./Country";

const Display = ({ countries, filter }) => {
  if (filter.length === 0) {
    return <div></div>;
  }
  const selectedCountries = countries.filter((country) =>
    country.name.toUpperCase().includes(filter.toUpperCase())
  );

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
          Flag: <img src={country.flag} alt="Algerian flag"></img>
        </p>
      </div>
    );
  };

  if (selectedCountries.length > 10) {
    return <div>Please enter a more specific research !</div>;
  } else if (selectedCountries.length === 1) {
    const country = selectedCountries[0];
    return displayInformation(country);
  } else {
    return selectedCountries.map((country) => (
      <div key={country.name}>
        <Country country={country} display={displayInformation} />
      </div>
    ));
  }
};

export default Display;
