import React from 'react'
import WeatherMain from './weather/WeatherMain'
import mainImg from '../assets/images/pexels-pixabay-164024.jpg'


const Main = () => {
  const myStyle={
    backgroundImage:`url(${mainImg})`,
    height:'100vh',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    };
            
  return (

    <div className='main' style={myStyle}>
        <div className='container'>
          <h1 className='logo'>iWeather</h1>
          <WeatherMain />
        </div>
    </div>
  )
}

export default Main