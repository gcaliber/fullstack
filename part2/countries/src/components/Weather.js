import { useState, useEffect } from 'react'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY

const Weather = ({country}) => {
  const [weather, setWeather] = useState({})

  const lat = country.capitalInfo.latlng[0]
  const lng = country.capitalInfo.latlng[1]

  useEffect(() => {
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lng}&appid=${api_key}`)
      .then(response => setWeather(response.data))
  }, [lat, lng])

  if (Object.keys(weather).length === 0) {
    return (
    <div>
      <h1>Weather in {country.capital}</h1>
      Retrieving weather for {country.capital}...
    </div>)
  }
  else { 
    const info = weather.weather[0]
    return (
      <div>
        <h1>Weather in {country.capital}</h1>
        temperature: {weather.main.temp}° Celcius<br />
        <img src={`http://openweathermap.org/img/wn/${info.icon}@2x.png`} alt={info.description}></img><br />
        wind: {weather.wind.speed} m/s
      </div>
    )
  }
}

export default Weather