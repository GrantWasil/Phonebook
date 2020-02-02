import React from 'react'

const PersonForm = ({ newName, newNumber, setNewName, setNewNumber, persons, setPersons }) => {
    const handleNameChange = (event) => {
        setNewName(event.target.value);
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    }

    const addName = (event) => {
        event.preventDefault();
        const nameObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }

        if (!persons.some(person => person.name === nameObject.name)) {
            setPersons(persons.concat(nameObject));
            setNewName('');
        } else {
            window.alert(`${newName} is already added to phonebook`)
        }
    }

    return (
        <form onSubmit={addName}>
            <div>
                name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm;