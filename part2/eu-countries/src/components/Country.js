import React, { useState } from "react";

const Country = ({ country, display }) => {
  const [showInfo, setShowInfo] = useState(false);

  if (showInfo) {
    return (
      <div>
        {display(country)}
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? "Hide" : "Show"}
        </button>
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
