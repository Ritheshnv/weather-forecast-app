import { DailyWeather, WeatherDataResponse } from "../types";
import { getWeatherDescription } from "./weatherDescription";

export const transformWeatherData = (
  weatherData: WeatherDataResponse
): DailyWeather[] => {
  const {
    daily,
    daily_units: {
      temperature_2m_max: temperatureMaxUnit,
      temperature_2m_min: temperatureMinUnit,
      weather_code: weatherCodeUnit,
      windspeed_10m_max: windSpeedUnit,
    },
  } = weatherData;

  return daily.time.map((date: string, index: number) => ({
    date,
    temperatureMax: daily.temperature_2m_max[index],
    temperatureMin: daily.temperature_2m_min[index],
    description: getWeatherDescription(daily.weather_code[index]),
		weatherCode: daily.weather_code[index],
    windSpeedMax: daily.windspeed_10m_max[index],
    temperatureMaxUnit,
    temperatureMinUnit,
    weatherCodeUnit,
    windSpeedUnit,
  }));
};

export const getFullDate = (date: string) => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString("default", { month: "short" });
  const day = dateObj.getDate();
	const year = dateObj.getFullYear();
  return `${day} ${month} ${year}`;
}

export const getDayOfWeek = (date: string) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dateObj = new Date(date);
  return daysOfWeek[dateObj.getDay()];
};
