import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import bookService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setNewFilter] = useState('')

  useEffect(() => {
    bookService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(e => e.name === newName)) {
      alert(`${newName} is already in the phonebook`)
    }
    else {
      const personObject = { name: newName, number: newNumber }
      bookService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const handleFilterChange = (event) => setNewFilter(event.target.value)
  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterName} handle={handleFilterChange} />
      <h2>Add new contact</h2>
      <PersonForm 
        submitHandle={addPerson}
        nameValue={newName} 
        nameHandle={handleNameChange}
        numberValue={newNumber}
        numberHandle={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filterName} />
    </div>
  )
}

export default App