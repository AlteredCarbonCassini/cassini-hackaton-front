import { LATITUDE, LONGITUDE } from "@/constants/openMeteoLocation";
import { fetchWeatherApi } from "openmeteo";

export interface WeatherDataProps {
  hourly: {
    time: Date[];
    temperature2m: Float32Array | null;
    relativeHumidity2m: Float32Array | null;
    rain: Float32Array | null;
    weatherCode: Float32Array | null;
    surfacePressure: Float32Array | null;
  };
}

export default async function WeatherData() {
  const params = {
    latitude: LATITUDE,
    longitude: LONGITUDE,
    hourly: [
      "temperature_2m",
      "relative_humidity_2m",
      "rain",
      "weather_code",
      "surface_pressure",
    ],
  };

  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);

  // Helper function to form time ranges
  const range = (start: number, stop: number, step: number): number[] =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];

  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds();
  //   const timezone = response.timezone();
  //   const timezoneAbbreviation = response.timezoneAbbreviation();
  //   const latitude = response.latitude();
  //   const longitude = response.longitude();
  const hourly = response.hourly()!;

  if (hourly) {
    // Calculate time range and temperature array
    const weatherData: WeatherDataProps = {
      hourly: {
        time: range(
          Number(hourly.time()),
          Number(hourly.timeEnd()),
          hourly.interval()
        ).map(t => new Date((t + utcOffsetSeconds) * 1000)),
        temperature2m: hourly.variables(0)!.valuesArray()!,
        relativeHumidity2m: hourly.variables(1)!.valuesArray()!,
        rain: hourly.variables(2)!.valuesArray()!,
        weatherCode: hourly.variables(3)!.valuesArray()!,
        surfacePressure: hourly.variables(4)!.valuesArray()!,
      },
    };
    return weatherData;
  }
}
