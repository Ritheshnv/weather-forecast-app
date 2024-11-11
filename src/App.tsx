import React, { useState } from 'react';
import Header from './components/Header';
import { fetchLocationData, fetchWeatherData } from './utils/api';
import WeatherList from './components/WeatherList';
import SearchBar from './components/SearchBar';
import { transformWeatherData } from './utils';
import { DailyWeather } from './types';

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<DailyWeather[]>([]);
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (location: string) => {
    try {
      setLoading(true);
      setError(null);
      
      if (!location.trim()) {
        throw new Error('Please enter a location');
      }

      const {longitude, latitude, country, name} = await fetchLocationData(location);

      setLocation(`${name}, ${country}`);

    
      const data = await fetchWeatherData(latitude, longitude);
      
      
      if (!data?.daily?.temperature_2m_max) {
        throw new Error('Invalid weather data received');
      }

      const formattedWeatherData: DailyWeather[] = transformWeatherData(data);

      setWeatherData(formattedWeatherData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setWeatherData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-500">
      <Header />
      <SearchBar onSearch={handleSearch} />
      
      {error && (
        <p className="text-center text-red-600 bg-red-100 p-2 m-2 rounded">
          {error}
        </p>
      )}
      
      {loading ? (
        <div className="flex justify-center items-center p-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      ) : (
        weatherData.length > 0 && <WeatherList weatherData={weatherData} location={location} />
      )}
    </div>
  );
};

export default App;
