// import { ReactComponent as BlizzardIcon } from "@/assets/forecast-icons/Blizzard.svg";
// import { ReactComponent as BlowingSnowIcon } from "@/assets/forecast-icons/Blowing-snow.svg";
// import { ReactComponent as DrizzleSunIcon } from "@/assets/forecast-icons/Drizzle&Sun.svg";
// import { ReactComponent as HumidityIcon } from "@/assets/forecast-icons/Humidity.svg";
// import { ReactComponent as ScatteradThunderstormIcon } from "@/assets/forecast-icons/Scatterad-thunderstorm.svg";
// import { ReactComponent as SeverThunderstormIcon } from "@/assets/forecast-icons/Sever-thunderstorm.svg";
// import { ReactComponent as SleetIcon } from "@/assets/forecast-icons/Sleet.svg";
// import { ReactComponent as WindIcon } from "@/assets/forecast-icons/Wind.svg";

import { ReactComponent as OvercastIcon } from "@/assets/forecast-icons/Cloudy.svg";
import { ReactComponent as DrizzleIcon } from "@/assets/forecast-icons/Drizzle.svg";
import { ReactComponent as FogIcon } from "@/assets/forecast-icons/Fog.svg";
import { ReactComponent as HeavyRainIcon } from "@/assets/forecast-icons/Heavy-rain.svg";
import { ReactComponent as PartlyCloudyIcon } from "@/assets/forecast-icons/Partly-cloudy.svg";
import { ReactComponent as RainThunderstormIcon } from "@/assets/forecast-icons/Rain&Thunderstorm.svg";
import { ReactComponent as SnowIcon } from "@/assets/forecast-icons/Snow.svg";
import { ReactComponent as SunnyIcon } from "@/assets/forecast-icons/Sunny.svg";
import { ReactComponent as CloudyClearIcon } from "@/assets/forecast-icons/Cloudy-clear-at-times.svg";

export const weatherCode = [
  { key: 0, value: "Clear sky", Icon: SunnyIcon },
  { key: 1, value: "Mainly clear", Icon: PartlyCloudyIcon },
  { key: 2, value: "Partly cloudy", Icon: CloudyClearIcon },
  { key: 3, value: "Overcast", Icon: OvercastIcon },
  { key: 45, value: "Fog", Icon: FogIcon },
  { key: 48, value: "Depositing rime fog", Icon: FogIcon },
  { key: 51, value: "Drizzle light", Icon: DrizzleIcon },
  { key: 53, value: "Drizzle moderate", Icon: DrizzleIcon },
  { key: 55, value: "Drizzle dense intensity", Icon: DrizzleIcon },
  { key: 56, value: "Freezing drizzle light", Icon: DrizzleIcon },
  { key: 57, value: "Freezing drizzle dense intensity", Icon: DrizzleIcon },
  { key: 61, value: "Rain slight", Icon: HeavyRainIcon },
  { key: 63, value: "Rain moderate", Icon: HeavyRainIcon },
  { key: 65, value: "Rain heavy intensity", Icon: HeavyRainIcon },
  { key: 66, value: "Freezing rain light", Icon: HeavyRainIcon },
  { key: 67, value: "Freezing rain heavy intensity", Icon: HeavyRainIcon },
  { key: 71, value: "Snow fall slight", Icon: SnowIcon },
  { key: 73, value: "Snow fall moderate", Icon: SnowIcon },
  { key: 75, value: "Snow fall heavy intensity", Icon: SnowIcon },
  { key: 77, value: "Snow grains", Icon: SnowIcon },
  { key: 80, value: "Rain showers slight", Icon: HeavyRainIcon },
  { key: 81, value: "Rain showers moderate", Icon: HeavyRainIcon },
  { key: 82, value: "Rain showers violent", Icon: HeavyRainIcon },
  { key: 85, value: "Snow showers slight", Icon: SnowIcon },
  { key: 86, value: "Snow showers heavy", Icon: SnowIcon },
  { key: 95, value: "Thunderstorm slight", Icon: RainThunderstormIcon },
  {
    key: 96,
    value: "Thunderstorm with slight hail",
    Icon: RainThunderstormIcon,
  },
  {
    key: 99,
    value: "Thunderstorm with heavy hail",
    Icon: RainThunderstormIcon,
  },
];

export const getWeatherIcon = (code: number) =>
  weatherCode.find(({ key }) => key === code)?.Icon;

export const getWeatherDescription = (code: number) =>
  weatherCode.find(({ key }) => key === code)?.value;
