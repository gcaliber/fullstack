import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryList from './components/CountryList'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchString, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
  }, [])

  const handleSearchChange = (event) => setSearch(event.target.value)
  
  return (
    <div>
      <form>
        find countries <input value={searchString} onChange={handleSearchChange}/>
      </form>
      <CountryList countries={countries} search={searchString} setSearch={setSearch} />
    </div>
  )
}

export default App;
