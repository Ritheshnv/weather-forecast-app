import React, { Fragment } from 'react';
import WeatherCard from './WeatherCard';
import { DailyWeather } from '../types';
import { getDayOfWeek, getFullDate } from '../utils';

interface WeatherListProps {
    weatherData: DailyWeather[];
    location: string;
}

const WeatherList: React.FC<WeatherListProps> = ({ weatherData, location }) => {
    return (
        <Fragment>
            <h1 className='text-2xl justify-center flex font-bold mb-4 text-white'>{`Weather report for ${location.toLocaleUpperCase()}`}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
                {weatherData.map((day, index) => (
                    <WeatherCard
                        key={index}
                        date={getFullDate(day.date)}
                        dayOfWeek={getDayOfWeek(day.date)}
                        description={day.description}
                        weatherCode={day.weatherCode}
                        maxTemp={day.temperatureMax}
                        minTemp={day.temperatureMin}
                        windSpeed={day.windSpeedMax}
                        temperatureMaxUnit={day.temperatureMaxUnit}
                        temperatureMinUnit={day.temperatureMinUnit}
                        windSpeedUnit={day.windSpeedUnit}
                    />
                ))}
            </div>
        </Fragment>
    );
};

export default WeatherList;
