import React from "react";
import services from "../services/persons";

const deleteEntry = (person) => {
  const result = window.confirm(`Delete ${person.name} ?`);
  if (result) {
    services.deleteEntry(person.id);
  }
};

const Display = ({ persons, filter }) => {
  let entries = [];
  if (filter === "") {
    entries = persons;
  } else {
    entries = persons.filter((person) =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  return entries.map((person) => (
    <li key={person.id}>
      {person.name} {person.number}
      <button onClick={() => deleteEntry(person)}>Delete</button>
    </li>
  ));
};

export default Display;
