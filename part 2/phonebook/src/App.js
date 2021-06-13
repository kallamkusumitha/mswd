
import React, { useState, useRef, useEffect } from 'react';
import personService from './services/Persons';
import Filter from './components/Filter';
import PersonForm from './components/Form';
import Persons from './components/person';
import Notification from './components/Notification';
import './index.css';
const App = () => {
  const [ message, setMessage ] = useState(null);
  const [ type, setType ] = useState('');
  const [ persons, setPersons] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ findName, setFindName ] = useState('');
  const focusName = useRef();
  useEffect(() => {
    personService.getAll()
    .then(setPersons);
  }, []);
  const clearInput = () => {
    setNewName('');
    setNewNumber('');
    focusName.current.focus();    
  };
  const removePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id));
        setMessage(`Deleted ${name}`);
        setType('info');
      });
    } 
  };

  const appendPerson = event => {
    event.preventDefault();

    const currentPerson = persons.find(person => person.name === newName);
    if (currentPerson) {
      window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`) &&
      personService.update(currentPerson.id, {number: newNumber})
      .then(updatedPerson => {
        setPersons(persons.map(person => person.id === updatedPerson.id ? updatedPerson : person));
        setMessage(`Updated ${newName}'s number`);
        setType('info');

        clearInput();
      })
      .catch(error => {
        if (error.name === 'TypeError') {
          setMessage(`Information of ${newName} has already been deleted`);
          setPersons(persons.filter(person => person.id !== currentPerson.id));
        } else {
          setMessage(error.response.data.error);
        }

        setType('error');
      });
    } else {
      personService.create(newName, newNumber)
      .then(newPerson => {
        setPersons(persons.concat(newPerson));
        setMessage(`Added ${newName}`);
        setType('info');

        clearInput();
      })
      .catch(error => {
        setMessage(error.response.data.error);
        setType('error');
      });
    }
  };

  
  return (
    <div>
      <h3>Phonebook</h3>
      <Notification message={message} type={type} setMessage={setMessage} setType={setType} />
      <Filter findName={findName} setFindName={setFindName} />
      <h4>Add a new</h4>
      <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}
        appendPerson={appendPerson} focusName={focusName}
      />
      <h4>Numbers</h4>
      <Persons persons={persons} findName={findName} removePerson={removePerson} />
    </div>
  );
};

export default App;
