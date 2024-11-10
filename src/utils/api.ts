import { GeoLocation, LocationApiResults, WeatherDataResponse } from "../types";

const API_ENDPOINTS = {
  GEOCODING: "https://geocoding-api.open-meteo.com/v1/search",
  WEATHER: "https://api.open-meteo.com/v1/forecast",
} as const;

export const fetchLocationData = async (
  location: string
): Promise<GeoLocation> => {
  try {
    if (!location?.trim()) {
      throw new Error("Location parameter is required");
    }

    // Fetch location data
    const geoResponse = await fetch(
      `${API_ENDPOINTS.GEOCODING}?name=${encodeURIComponent(location)}`
    );

    if (!geoResponse.ok) {
      throw new Error(`Geocoding API error: ${geoResponse.statusText}`);
    }

    const geoData: LocationApiResults = await geoResponse.json();

    if (!geoData.results?.length) {
      throw new Error(`No location found for: ${location}`);
    }

    return geoData.results[0];
    
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export const fetchWeatherData = async (latitude:number, longitude: number) => {
  // Fetch weather data
  try {
    if(!latitude || !longitude) {
      throw new Error("Latitude and longitude is not present");
    }
    const weatherResponse = await fetch(
      `${API_ENDPOINTS.WEATHER}?` +
        new URLSearchParams({
          latitude: latitude.toString(),
          longitude: longitude.toString(),
          forecast_days: "5",
          daily:
            "temperature_2m_max,temperature_2m_min,weather_code,windspeed_10m_max",
          timezone: "auto",
        })
    );

    if (!weatherResponse.ok) {
      throw new Error(`Weather API error: ${weatherResponse.statusText}`);
    }

    const weatherData: WeatherDataResponse = await weatherResponse.json();
    return weatherData;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
