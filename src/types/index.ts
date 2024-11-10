export interface WeatherDataResponse {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    daily_units: {
        time: string;
        temperature_2m_max: string;
        temperature_2m_min: string;
        weather_code: string;
        windspeed_10m_max: string
    };
    daily: {
        time: string[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        weather_code: number[];
        windspeed_10m_max: number[];
}
}

export interface DailyWeather {
  date: string;
  temperatureMax: number;
  temperatureMin: number;
  description: string;
  weatherCode: number;
  windSpeedMax: number;
  temperatureMaxUnit: string;
  temperatureMinUnit: string;
  weatherCodeUnit: string;
  windSpeedUnit: string;
}

export interface GeoLocation {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  feature_code: string;
  country_code: string;
  admin1_id: number;
  admin2_id: number;
  timezone: string;
  population: number;
  country_id: number;
  country: string;
  admin1: string;
  admin2: string;
}

export interface LocationApiResults {
  results: GeoLocation[];
  generationtime_ms: number;
}
