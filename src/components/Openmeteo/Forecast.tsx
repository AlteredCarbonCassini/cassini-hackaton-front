import { FC } from "react";
import { WeatherDataProps } from "./WeatherData";
import moment from "moment";
import { getWeatherDescription, getWeatherIcon } from "@/constants/weatherCode";

interface IForecastProps {
  data: WeatherDataProps;
}

type ConvertedObject = {
  time: number;
  datetime: Date;
  temperature: string | number;
  humidity: string | number;
  code: number;
  rain: string | number;
  pressure: string | number;
};

const Forecast: FC<IForecastProps> = ({ data }) => {
  const {
    rain,
    relativeHumidity2m,
    surfacePressure,
    temperature2m,
    time,
    weatherCode,
  } = data.hourly;

  const convertedForecast = time.reduce((acc, val, i) => {
    const date = new Date(val);

    const day = date.getDate();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const hour = date.getHours();
    // const hour = moment(date).format("LT");

    const obj: ConvertedObject = {
      time: hour,
      datetime: date,
      temperature: temperature2m ? temperature2m[i] : "-",
      humidity: relativeHumidity2m ? relativeHumidity2m[i] : "-",
      code: weatherCode ? weatherCode[i] : 0,
      rain: rain ? rain[i] : "-",
      pressure: surfacePressure ? surfacePressure[i] : "-",
    };

    const key = `${day}/${month}`;
    // const key = val.toString();

    if (!acc[key]) {
      acc[key] = [];
      acc[key].push(obj);
    } else {
      acc[key].push(obj);
    }

    return acc;
  }, {} as any);

  const days = Object.keys(convertedForecast);
  const isLastDayIndex = days.length - 1;
  return (
    <ul className="">
      {days.map(
        (key, index) =>
          index != isLastDayIndex && (
            <li key={key} className="border-b border-gray-600 py-4">
              <div className="flex gap-4 items-center">
                <div className="text-xl font-semibold text-gray-300">{key}</div>

                {convertedForecast[key].map(
                  ({ time, temperature, code, datetime }: ConvertedObject) => {
                    const Icon = getWeatherIcon(code);

                    return time % 3 === 0 && time != 0 ? (
                      <div
                        key={time}
                        className="flex flex-col items-center gap-2 w-[100px]"
                      >
                        <p>{moment(datetime).format("LT")}</p>

                        <div className="w-8 h-8">
                          {Icon && <Icon className="block h-full w-full" />}
                        </div>

                        <p className="text-gray-500 text-sm italic h-10 text-center overflow-hidden">
                          {getWeatherDescription(code)}
                        </p>

                        <p className="text-lg font-bold">
                          {Math.round(Number(temperature))}&deg;C
                        </p>
                      </div>
                    ) : null;
                  }
                )}
              </div>
            </li>
          )
      )}
    </ul>
  );
};

export default Forecast;
