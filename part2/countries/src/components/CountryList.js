import Weather from './Weather'

const Country = ({country}) => {
  return (
    <div key={country.name.official}>
      <h1>{country.name.common}</h1>
      capital: {country.capital}
      <br />
      area: {country.area}
      <br />
      <br />
      <b>languages:</b>
      <ul>
        {Object.entries(country.languages).map(lang => <li key={lang[0]}>{lang[1]}</li>)}
      </ul>
      <img src={country.flags.png} alt={country.name.common + " flag"}></img>
      <Weather country={country} />
    </div>
  )
}

const CountryList = ({countries, search, setSearch}) => {
  if (search === '') {
    return(<div>Search for a country.</div>)
  }

  const list = countries.filter(countries => 
    countries.name.common.toLowerCase()
      .includes(search.toLowerCase()))

  const setCountry = (event) => setSearch(event.target.name)
  
  if (list.length === 0) {
    return (
      <div>No matches.</div>
    )
  }
  else if (list.length > 10) {
    return ( 
      <div>Too many matches, make your search more specific.</div>
    )
  }
  else if (list.length > 1) {
    return (
      <div>        
        {list.map(country => {
          return (
            <div key={country.name.official}>
              {country.name.common} <button onClick={setCountry} name={country.name.common}>show</button>
            </div>
          )
        })}
      </div>
    )
  }
  
  return (
    <Country country={list[0]} />
  )
}

export default CountryList