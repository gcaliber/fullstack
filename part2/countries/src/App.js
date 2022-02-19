import { useState, useEffect } from 'react'
import axios from 'axios'

const CountryList = ({countries, search}) => {
  if (search === '') {
    return(<div></div>)
  }

  const list = countries.filter(countries => 
    countries.name.common.toLowerCase()
      .includes(search.toLowerCase()))

  if (list.length > 10) {
    return ( 
      <div>Too many matches, make your search more specific.</div>
    )
  }
  else if (list.length > 1) {
    return (
      <div>        
        {list.map(country => <div key={country.name.official}>{country.name.common}</div>)}
      </div>
    )
  }
  
  const country = list[0]
  return (
    <div key={country.name.official}>
      <h1>{country.name.common}</h1>
      <p>
        <div>capital: {country.capital}</div>
        <div>area: {country.area}</div>
      </p>
      <b>languages:</b>
      <ul>
        {Object.values(country.languages).map(lang => <li>{lang}</li>)}
      </ul>
      <img src={country.flags.png}></img>
    </div>
  )
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchString, setNewSearch] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
  }, [])

  const handleSearchChange = (event) => setNewSearch(event.target.value)
  
  return (
    <div>
      <form>
        find countries <input value={searchString} onChange={handleSearchChange}/>
      </form>
      <CountryList countries={countries} search={searchString} />
    </div>
  )
}

export default App;
