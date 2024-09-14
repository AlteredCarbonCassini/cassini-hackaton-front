import { useEffect, useState } from "react";
import WeatherData, { WeatherDataProps } from "./WeatherData";
import AirQualityData, { AirQualityDataProps } from "./AirQualityData";
import { Weather } from "./Weather";
import { AirQuality } from "./AirQuality";

interface FetchError {
  message: string;
}

export default function Openmeteo() {
  const [dataWeather, setDataWeather] = useState<WeatherDataProps | null>(null);
  const [dataAir, setDataAir] = useState<AirQualityDataProps | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<FetchError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultWeather = await WeatherData();
        const resultAirQuality = await AirQualityData();
        if (resultWeather) {
          setDataWeather(resultWeather);
        } else {
          setDataWeather(null);
        }
        if (resultAirQuality) {
          setDataAir(resultAirQuality);
        } else {
          setDataAir(null);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError({ message: error.message });
          setError({ message: "Unknown error occurred" });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(Weather, dataWeather);

  return (
    <div>
      <h1>Openmeteo</h1>
      <div className="my-4">
        {dataAir ? (
          <AirQuality dataAir={dataAir} />
        ) : (
          <p>No information was found for your parameters</p>
        )}
      </div>
      <ul>{dataWeather && <Weather dataWeather={dataWeather} />}</ul>
    </div>
  );
}
