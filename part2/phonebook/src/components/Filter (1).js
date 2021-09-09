import React from "react";

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      Filter search: <input value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
