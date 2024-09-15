import { formatDate } from "@/utils/formatDate";
import { WeatherDataProps } from "./WeatherData";
import { weatherCode } from "@/constants/weatherCode";

export const Weather = ({ dataWeather }: { dataWeather: WeatherDataProps }) => {
  const timeData = dataWeather?.hourly.time;
  const temprData = dataWeather?.hourly.temperature2m;
  const humidity = dataWeather?.hourly.relativeHumidity2m;
  const rain = dataWeather?.hourly.rain;
  const weather = dataWeather?.hourly.weatherCode;
  const pressure = dataWeather?.hourly.surfacePressure;

  const checkWeatherDataExicting =
    timeData && temprData && humidity && rain && weather && pressure;
  const weatherArray = weather ? Array.from(weather) : [];

  const weatherDescription: string[] | undefined = weatherArray?.map(code => {
    const foundWeather = weatherCode.find(item => item.key === code);

    return foundWeather ? foundWeather.value : "Unknown weather"; // якщо код погоди не знайдено
  });
  // console.log(weatherDescription);
  return (
    <>
      {checkWeatherDataExicting &&
        timeData.map((time, index) => (
          <li key={index} className="flex gap-2">
            <p>{time instanceof Date ? formatDate(time) : time}</p>
            <p>{Math.round(temprData[index])}&deg;C</p>
            <p>{humidity[index]}</p>
            <p>{Math.round(rain[index])}</p>
            <p>{weatherDescription[index]}</p>
            <p>{Math.round(pressure[index])}</p>
          </li>
        ))}
    </>
  );
};
