import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');
  
  // Grabs the db.json data and sets it to setPersons[]
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fufilled')
        setPersons(response.data)
      })
  },[])

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