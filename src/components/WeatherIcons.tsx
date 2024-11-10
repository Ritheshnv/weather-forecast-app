import { ReactNode } from 'react';
import { WeatherSvg } from 'weather-icons-animated';

const getWeatherIcon = (weatherCode: number): ReactNode => {
    switch(weatherCode) {
        case 0:
            return <WeatherSvg state='sunny' width={100} height={100}/>;
        case 1:
        case 2:
        case 3:
            return <WeatherSvg state='partlycloudy' width={100} height={100}/>;
        case 45:
        case 48:
            return <WeatherSvg state='cloudy' width={100} height={100}/>;
        case 51:
        case 53:
        case 55:
            return <WeatherSvg state='rainy' width={100} height={100}/>;
        case 56:
        case 57:
        case 61:
        case 63:
        case 65:
        case 80:
        case 81:
        case 82:
            return <WeatherSvg state='pouring' width={100} height={100}/>;
        case 66:
        case 67:
            return <WeatherSvg state='snowy-rainy' width={100} height={100}/>;
        case 71:
        case 73:
        case 75:
        case 77:
        case 85:
        case 86:
            return <WeatherSvg state='snowy' width={100} height={100}/>;
        case 95:
        case 96:
        case 99:
            return <WeatherSvg state='lightning' width={100} height={100}/>;
        default:
            return <WeatherSvg state='sunny' width={100} height={100}/>;
    }
    
};

export default getWeatherIcon;
