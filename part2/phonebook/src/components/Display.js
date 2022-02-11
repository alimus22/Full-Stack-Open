import React from "react";
import services from "../services/persons";

const Display = ({ person, deleteEntry }) => {
  return (
    <li>
      {`${person.name} - ${person.number}`}
      <button onClick={deleteEntry}>Delete</button>
    </li>
  );
};

export default Display;
