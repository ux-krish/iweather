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
          <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 384 512"><path fill="#00d3eb" d="M16 319.1C16 245.9 118.3 89.43 166.9 19.3C179.2 1.585 204.8 1.585 217.1 19.3C265.7 89.43 368 245.9 368 319.1C368 417.2 289.2 496 192 496C94.8 496 16 417.2 16 319.1zM112 319.1C112 311.2 104.8 303.1 96 303.1C87.16 303.1 80 311.2 80 319.1C80 381.9 130.1 432 192 432C200.8 432 208 424.8 208 416C208 407.2 200.8 400 192 400C147.8 400 112 364.2 112 319.1z"/></svg>
          <span>{weather?.main?.humidity}%</span>
          </div>
          <div className='city_pressure'>
          <svg xmlns="http://www.w3.org/2000/svg"  width={30} height={30} viewBox="0 0 512 512"><path fill="#00d3eb" d="M32 192h320c52.94 0 96-43.06 96-96s-43.06-96-96-96h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c17.66 0 32 14.34 32 32s-14.34 32-32 32H32C14.31 128 0 142.3 0 160S14.31 192 32 192zM160 320H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h128c17.66 0 32 14.34 32 32s-14.34 32-32 32H128c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96S212.9 320 160 320zM416 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h384c17.66 0 32 14.34 32 32s-14.34 32-32 32h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96S468.9 224 416 224z"/></svg>
          <span>{weather?.main?.pressure}hPa</span>
          </div>
     
    </div>
  )
}   

export default WeatherDetails