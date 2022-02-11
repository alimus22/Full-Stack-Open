import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Display from "./components/Display";
import PersonForm from "./components/PersonForm";
import services from "./services/persons";
import Notification from "./components/Notification";
import "./index.css";

const App = () => {
  const errorStyle = {
    color: "red",
    fontSize: 20,
    fontStyle: "bold",
    borderStyle: "solid",
    borderRadius: 5,
  };

  const msgStyle = {
    color: "green",
    fontSize: 20,
    fontStyle: "itallic",
    borderStyle: "solid",
    borderRadius: 5,
  };

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");
  const [notificationMsg, setNotificationMsg] = useState(null);
  const [notificationStyle, setNotificationStyle] = useState(msgStyle);

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
    } else if (
      persons
        .map((person) => person.name.toLowerCase())
        .includes(newName.toLowerCase())
    ) {
      const result = window.confirm(
        `${newName} is already in the phonebook. Replace the old number with a new one ?`
      );
      if (result) {
        let found = persons.find(
          (person) => person.name.toLowerCase() === newName.toLowerCase()
        );

        found.number = newPhone;
        services.update(found).then((returnedPersons) => {
          setPersons(
            persons.map((person) => (person.id !== found.id ? person : found))
          );
          setNewName("");
          setNewPhone("");
          setNotificationMsg(`${found.name} number was successfully updated !`);
          setTimeout(() => {
            setNotificationMsg(null);
          }, 5000);
        });
      }
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
          setNotificationMsg(`${newPerson.name} was successfully added !`);
          setTimeout(() => {
            setNotificationMsg(null);
          }, 5000);
        })
        .catch((error) => {
          setNotificationMsg(
            `An error occured. ${newPerson.name} was not saved!`
          );
          setNotificationStyle(errorStyle);
          setNewName("");
          setNewPhone("");
          setTimeout(() => {
            setNotificationMsg(null);
          }, 5000);
        });
    }
  };

  const deleteEntry = (person) => {
    const result = window.confirm(`Delete ${person.name} ?`);
    if (result) {
      services
        .deleteEntry(person.id)
        .then(() => {
          setPersons(persons.filter((p) => p.id !== person.id));
        })
        .then(() => {
          setNotificationMsg(`Entry successfully deleted !`);
          setTimeout(() => {
            setNotificationMsg(null);
          }, 5000);
        });
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notificationMsg} style={notificationStyle} />
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
