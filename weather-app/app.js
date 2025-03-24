import React, { useState, useEffect } from 'react';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const API_KEY = process.env.OPEN_WEATHER_API_KEY || "YOUR_FALLBACK_API_KEY";
  
  const fetchWeatherData = async (searchLocation) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&units=metric&appid=${API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error("Location not found. Please try again.");
      }
      
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) {
      fetchWeatherData(location);
    }
  };
  
  useEffect(() => {
    // Get user's location weather on initial load
    navigator.geolocation?.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
          );
          
          if (!response.ok) {
            throw new Error("Unable to fetch weather data.");
          }
          
          const data = await response.json();
          setWeatherData(data);
        } catch (err) {
          setError("Failed to get local weather. Please search for a location.");
        }
      },
      () => {
        setError("Location access denied. Please search for a location.");
      }
    );
  }, []);
  
  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-white mb-6 mt-4">Weather Dashboard</h1>
      
      <form onSubmit={handleSubmit} className="w-full max-w-md flex mb-6">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter city name"
          className="flex-grow p-3 rounded-l-lg focus:outline-none shadow-lg"
        />
        <button 
          type="submit" 
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-r-lg shadow-lg transition-colors"
        >
          Search
        </button>
      </form>
      
      {loading && <div className="text-white text-xl">Loading...</div>}
      
      {error && (
        <div className="bg-red-500 text-white p-4 rounded-lg w-full max-w-md mb-4">
          {error}
        </div>
      )}
      
      {weatherData && (
        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 w-full max-w-md shadow-lg text-white">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold">{weatherData.name}, {weatherData.sys.country}</h2>
              <p>{formatDate(weatherData.dt)}</p>
            </div>
            {weatherData.weather[0].icon && (
              <img 
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
                alt={weatherData.weather[0].description}
                className="w-16 h-16"
              />
            )}
          </div>
          
          <div className="mb-4">
            <div className="text-5xl font-bold mb-2">
              {Math.round(weatherData.main.temp)}°C
            </div>
            <p className="text-xl capitalize">{weatherData.weather[0].description}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <p className="text-sm opacity-70">Feels Like</p>
              <p className="text-xl font-semibold">{Math.round(weatherData.main.feels_like)}°C</p>
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <p className="text-sm opacity-70">Humidity</p>
              <p className="text-xl font-semibold">{weatherData.main.humidity}%</p>
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <p className="text-sm opacity-70">Wind Speed</p>
              <p className="text-xl font-semibold">{weatherData.wind.speed} m/s</p>
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <p className="text-sm opacity-70">Pressure</p>
              <p className="text-xl font-semibold">{weatherData.main.pressure} hPa</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;