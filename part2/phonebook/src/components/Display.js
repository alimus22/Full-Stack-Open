import React from "react";

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
    <div key={person.name}>
      {person.name} {person.number}
    </div>
  ));
};

export default Display;
