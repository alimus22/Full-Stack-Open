import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Display from "./components/Display";
import PersonForm from "./components/PersonForm";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const addEntry = (event) => {
    event.preventDefault();
    if (newName === "") {
      alert("Please enter a Name.");
    } else if (persons.map((person) => person.name).includes(newName)) {
      alert(`${newName} is already in the phonebook`);
    } else {
      const newPerson = {
        name: newName,
        number: newPhone,
      };
      setPersons(persons.concat(newPerson));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <PersonForm
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
        newName={newName}
        newPhone={newPhone}
        addEntry={addEntry}
      />
      <h2>Numbers</h2>
      <Display persons={persons} filter={filter} />
    </div>
  );
};

export default App;
