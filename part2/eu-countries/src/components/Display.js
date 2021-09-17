import React from "react";
import Country from "./Country";

const Display = ({ countries, filter }) => {
  if (filter.length === 0) {
    return <div></div>;
  }
  const selectedCountries = countries.filter((country) =>
    country.name.toUpperCase().includes(filter.toUpperCase())
  );

  if (selectedCountries.length > 10) {
    return <div>Please enter a more specific research !</div>;
  } else if (selectedCountries.length === 1) {
    return (
      <div key={selectedCountries[0].name}>
        <Country country={selectedCountries[0]} show={true} />
      </div>
    );
  } else {
    return selectedCountries.map((country) => (
      <div key={country.name}>
        <Country country={country} show={false} />
      </div>
    ));
  }
};

export default Display;
