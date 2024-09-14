import { LATITUDE, LONGITUDE } from "@/constants/openMeteoLocation";
import { fetchWeatherApi } from "openmeteo";

export interface AirQualityDataProps {
  current: {
    time: Date;
    europeanAqi: number | null;
    pm10: number | null;
    pm25: number | null;
    carbonMonoxide: number | null;
    nitrogenDioxide: number | null;
    sulphurDioxide: number | null;
    ozone: number | null;
    aerosolOpticalDepth: number | null;
    dust: number | null;
    uvIndex: number | null;
    uvIndexClearSky: number | null;
    ammonia: number | null;
    alderPollen: number | null;
    birchPollen: number | null;
    grassPollen: number | null;
    mugwortPollen: number | null;
    olivePollen: number | null;
    ragweedPollen: number | null;
  };
}

export default async function AirQualityData() {
  const params = {
    latitude: LATITUDE,
    longitude: LONGITUDE,
    current: [
      "european_aqi",
      "pm10",
      "pm2_5",
      "carbon_monoxide",
      "nitrogen_dioxide",
      "sulphur_dioxide",
      "ozone",
      "aerosol_optical_depth",
      "dust",
      "uv_index",
      "uv_index_clear_sky",
      "ammonia",
      "alder_pollen",
      "birch_pollen",
      "grass_pollen",
      "mugwort_pollen",
      "olive_pollen",
      "ragweed_pollen",
    ],
  };

  const url = "https://air-quality-api.open-meteo.com/v1/air-quality";
  const responses = await fetchWeatherApi(url, params);

  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];

  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds();
  // const timezone = response.timezone();
  // const timezoneAbbreviation = response.timezoneAbbreviation();
  // const latitude = response.latitude();
  // const longitude = response.longitude();
  const current = response.current()!;

  if (current) {
    // Calculate time range and temperature array
    const airQualityData: AirQualityDataProps = {
      current: {
        time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
        europeanAqi: current.variables(0)!.value(),
        pm10: current.variables(1)!.value(),
        pm25: current.variables(2)!.value(),
        carbonMonoxide: current.variables(3)!.value(),
        nitrogenDioxide: current.variables(4)!.value(),
        sulphurDioxide: current.variables(5)!.value(),
        ozone: current.variables(6)!.value(),
        aerosolOpticalDepth: current.variables(7)!.value(),
        dust: current.variables(8)!.value(),
        uvIndex: current.variables(9)!.value(),
        uvIndexClearSky: current.variables(10)!.value(),
        ammonia: current.variables(11)!.value(),
        alderPollen: current.variables(12)!.value(),
        birchPollen: current.variables(13)!.value(),
        grassPollen: current.variables(14)!.value(),
        mugwortPollen: current.variables(15)!.value(),
        olivePollen: current.variables(16)!.value(),
        ragweedPollen: current.variables(17)!.value(),
      },
    };
    console.log(airQualityData);
    return airQualityData;
  }
}
