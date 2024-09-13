import { useEffect, useState } from "react";
import OpenmeteoData from "./OpenmeteoData";

interface WeatherData {
  time: Date[];
  temperature2m: Float32Array | null;
}

interface FetchError {
  message: string;
}

export default function Openmeteo() {
  const [data, setData] = useState<WeatherData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<FetchError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await OpenmeteoData();
        if (result) {
          setData(result);
        } else {
          setData([]);
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

  return (
    <div>
      <h1>Openmeteo</h1>
      <ul>
        {data &&
          data.map((item, index) => (
            <li key={index}>
              {item.temperature2m ? item.temperature2m.join(", ") : "No data"}
            </li>
          ))}
      </ul>
    </div>
  );
}
