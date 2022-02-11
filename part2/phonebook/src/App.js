import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Display from "./components/Display";
import PersonForm from "./components/PersonForm";
import axios from "axios";
import services from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    services.getAll().then((initialPersons) => {
      setPersons(initialPersons);
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
      services
        .create(newPerson)
        .then((returnedPersons) => {
          setPersons(persons.concat(returnedPersons));
          setNewName("");
          setNewPhone("");
        })
        .catch((error) => {
          alert("An error occured !");
          setNewName("");
          setNewPhone("");
        });
    }
  };

  const deleteEntry = (person) => {
    const result = window.confirm(`Delete ${person.name} ?`);
    if (result) {
      services.deleteEntry(person.id).then(() => {
        setPersons(persons.filter((p) => p.id !== person.id));
      });
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
      <ul>
        {persons
          .filter((person) =>
            person.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((person) => (
            <Display
              key={person.id}
              person={person}
              deleteEntry={() => deleteEntry(person)}
            />
          ))}
      </ul>
    </div>
  );
};

export default App;
