import React from "react";

const Display = ({ countries, filter }) => {
  return countries
    .filter((country) => country.name.includes(filter))
    .map((country) => <div>{country.name}</div>);
};

export default Display;
