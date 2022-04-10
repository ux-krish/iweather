import React from 'react'
import './weather.scss';

const WeatherDetails = (props) => {

  const {weather} = props;
  return (
    <div className='weahter_info'>
          <div className='city_name'>
            City Name: {weather?.name}
          </div>
          <div className='city_country'>
          Country: {weather?.sys?.country} 
          </div>
          <div className='city_temp'>
          Temperature : {Math.round(weather?.main?.temp - 273.15)} ° C
          </div>
          <div className='city_feels_like'>
          Feel : {Math.round(weather?.main?.feels_like - 273.15)} ° C
          </div>
          <div className='city_humidity'>
          humidity : {weather?.main?.humidity}%
          </div>
          <div className='city_pressure'>
          Air pressure : {weather?.main?.pressure}hPa
          </div>
     
    </div>
  )
}   

export default WeatherDetails