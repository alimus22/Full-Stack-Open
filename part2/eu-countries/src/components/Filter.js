import React from "react";

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      Search country: <input value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
