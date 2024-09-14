import { fetchWeatherApi } from "openmeteo";

export default async function OpenmeteoData() {
  const params = {
    latitude: 50.4547,
    longitude: 30.5238,
    hourly: "temperature_2m",
    timezone: "GMT",
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
  const hourly = response.hourly();

  if (hourly) {
    // Calculate time range and temperature array
    const weatherData = {
      time: range(
        Number(hourly.time()),
        Number(hourly.timeEnd()),
        hourly.interval()
      ).map(t => new Date((t + utcOffsetSeconds) * 1000)),
      temperature2m: hourly.variables(0)?.valuesArray(),
    };

    return weatherData;
  }
}

OpenmeteoData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error fetching weather data:", error);
  });
