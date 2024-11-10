import React from 'react';
import getWeatherIcon from './WeatherIcons';

interface WeatherCardProps {
    date: string;
    dayOfWeek: string;
    maxTemp: number;
    minTemp: number;
    windSpeed: number;
    description: string;
    weatherCode: number;
    temperatureMaxUnit: string;
    temperatureMinUnit: string;
    windSpeedUnit: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ date, dayOfWeek, description, weatherCode, maxTemp, minTemp, windSpeed, temperatureMaxUnit, temperatureMinUnit, windSpeedUnit }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold">{dayOfWeek} / {date}</h3>
            <div className='flex justify-center'>{getWeatherIcon(weatherCode)}</div>
            <p className="text-xl font-bold">{description}</p>
            <div className="flex justify-between mt-2">
                <span className="text-sm">Max: {maxTemp} {temperatureMaxUnit}</span>
                <span className="text-sm">Min: {minTemp} {temperatureMinUnit}</span>
            </div>
            <p className="text-sm mt-2">Wind: {windSpeed} {windSpeedUnit}</p>
        </div>
    );
};

export default WeatherCard;
