import React from 'react'

const WeatherSearch = (props) => {

    
   const { updateCity, fetchWeather } = props;


    return (
        <>
            <form onSubmit={fetchWeather} className='search-panel'>
                <input required="required" type="text" placeholder='Enter City Name' onChange={(e) => updateCity(e.target.value)}   />
                <button type='submit'  className='search-btn'>Search</button>
            </form>
        </>
        
    )
}

export default WeatherSearch