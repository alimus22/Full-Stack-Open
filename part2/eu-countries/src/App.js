import React, { useState, useEffect } from "react";
import axios from "axios";
import Display from "./components/Display";
import Filter from "./components/Filter";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFiler] = useState("");

  const handleFilterChange = (event) => {
    setFiler(event.target.value);
  };

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Country Searcher </h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <Display countries={countries} filter={filter} />
    </div>
  );
};

export default App;
