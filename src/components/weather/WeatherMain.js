import React,{useEffect, useState} from 'react'
import WeatherDetails from './WeatherDetails'
import WeatherSearch from './WeatherSearch'
import axios from 'axios';

const WeatherMain = () => {
    
/* for instant search with on submit */
const [city, updateCity] = useState(null);   
const [weather,updateWeather] = useState();

/* for instant search without on submit */
const [search,setSearch] = useState('Delhi');

/* for instant search with on submit */
const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fec40eb498208bde1cbf13a788a62e34`);
    updateWeather(response.data);
    //console.log(response.data)
}

/* for instant search without on submit */

useEffect( () => {
    const fetchApi = async () => {
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=fec40eb498208bde1cbf13a788a62e34`;
        const res = await fetch(url);
        const resJson = await res.json();
        console.log(resJson);
        updateCity(resJson);
    };
    fetchApi();
},[setSearch])



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
                <p className='no-result'>No result found...</p>
            </>
            } 
    </div>
  )
}

export default WeatherMain