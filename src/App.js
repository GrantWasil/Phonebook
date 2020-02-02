import React, { useState } from 'react'

import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  const namesToShow = persons.filter(person => person.name.toUpperCase().includes(newFilter.toUpperCase()));

  const namesList = () => namesToShow.map(person =>
    <Person
      key={person.id}
      name={person.name}
      number={person.number}
    />
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} setNewFilter={setNewFilter} />
      <h3>Add a new</h3>
      <PersonForm 
        newName={newName} 
        newNumber={newNumber} 
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
        />
      <h2>Numbers</h2>
      {namesList()}
    </div>
  )
}

export default App