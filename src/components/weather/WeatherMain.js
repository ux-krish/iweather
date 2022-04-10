import React,{useEffect, useState} from 'react'
import WeatherDetails from './WeatherDetails'
import WeatherSearch from './WeatherSearch'
import axios from 'axios';

const WeatherMain = () => {
    
/* for instant search with on submit */



const [city, updateCity] = useState('');   
const [weather,updateWeather] = useState('');


/* for instant search with on submit */
const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fec40eb498208bde1cbf13a788a62e34`);
    updateWeather(response.data);
    console.log(response.data)
}


  return (
    <div className='weather_main'>
            {
            weather ?
            <>
                <WeatherSearch updateCity={updateCity} fetchWeather={fetchWeather}  />
                <WeatherDetails weather={weather} />
            </>
            :
            <>
                <WeatherSearch updateCity={updateCity} fetchWeather={fetchWeather}  />
            </>
            } 
    </div>
  )
}

export default WeatherMain