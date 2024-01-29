// WeatherApp.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './app.css'

const WeatherApp = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = '31fe5b842997b96202ac28ea6f46da52';
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`;



  const searchWeather = async () => {
    try {
      const response = await fetch(weatherApiUrl);
      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      setWeatherData(data);

      const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
      history.push(search);
      localStorage.setItem('searchHistory', JSON.stringify(history));
    } 
    
    catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };




  return (
    <div   >


      <div className='card'>

      <br />
      <h1>Weather Application & Search History</h1>

      <br />
      <input
      className='input-box'
        type="text"
        placeholder="Enter city or country"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      /> 
      <br />
      <br />
      <button className='btn-search' onClick={searchWeather}>Search</button> &nbsp;
      <button className='btn-history' onClick={() => navigate(`/history`)}>History</button>

      {weatherData && (
        <div>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <h3>Temperature: {weatherData.main.temp} °C</h3>
          <h3>Weather: {weatherData.weather[0].description}</h3>
        </div>
      )}



</div>

    </div>
  );
};

export default WeatherApp;
