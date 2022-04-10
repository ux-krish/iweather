import React from 'react'
import './weather.scss';

const WeatherDetails = (props) => {

  const {weather} = props;
  return (
    <div className='weahter_info'>
          <div className='city_name'>
            {weather?.name}
          </div>
          <div className='city_country'>
           {weather?.sys?.country} 
          </div>
          <div className='city_temp'>
          
          <img src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}.png`} />
          <span>{Math.round(weather?.main?.temp - 273.15)} ° C</span>
          </div>
          <div className='city_feels_like'>
          <span>Feel</span>  
          <span>{Math.round(weather?.main?.feels_like - 273.15)} ° C</span>
          <span>{weather?.weather[0]?.main}</span>
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