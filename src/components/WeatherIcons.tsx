import { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning, faCloud, faCloudBolt, faCloudMeatball, faCloudMoonRain, faCloudShowersHeavy, faCloudSun, faCloudSunRain, faSmog, faSnowflake } from '@fortawesome/free-solid-svg-icons';

const getWeatherIcon = (weatherCode: number): ReactNode => {
    switch (weatherCode) {
        case 0:
            return <FontAwesomeIcon icon={faCloudSun} size="5x" />;
        case 1:
        case 2:
        case 3:
            return <FontAwesomeIcon icon={faCloud} size="5x" />;
        case 45:
        case 48:
            return <FontAwesomeIcon icon={faSmog} size="5x" />;
        case 51:
        case 53:
        case 55:
        case 56:
        case 57:
            return <FontAwesomeIcon icon={faCloudSunRain} size="5x" />;
        case 61:
        case 63:
        case 65:
        case 66:
        case 67:
            return <FontAwesomeIcon icon={faCloudMoonRain} size="5x" />;
        case 71:
        case 73:
        case 75:
        case 77:
            return <FontAwesomeIcon icon={faSnowflake} size="5x" />;
        case 80:
        case 81:
        case 82:
            return <FontAwesomeIcon icon={faCloudShowersHeavy} size="5x" />;
        case 85:
        case 86:
            return <FontAwesomeIcon icon={faCloudMeatball} size="5x" />;
        case 95:
            return <FontAwesomeIcon icon={faBoltLightning} size="5x" />;
        case 96:
        case 99:
            return <FontAwesomeIcon icon={faCloudBolt} size="5x" />;
        default:
            return <FontAwesomeIcon icon={faCloudSun} size="5x" />;
    }
};

export default getWeatherIcon;
