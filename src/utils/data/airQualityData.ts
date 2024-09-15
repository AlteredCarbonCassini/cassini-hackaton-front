export const airQualityData = [
  {
    key: "europeanAqi",
    name: "European AQI",
    description: "Low pollution level, comfortable breathing conditions.",
  },
  {
    key: "pm10",
    name: "PM10",
    description:
      "Elevated levels can cause respiratory issues, eye irritation, coughing.",
  },
  {
    key: "pm25",
    name: "PM2.5",
    description:
      "High concentrations can lead to heart disease and lung diseases.",
  },
  {
    key: "carbonMonoxide",
    name: "Carbon Monoxide",
    description:
      "High levels of CO can lead to headaches, dizziness, and unconsciousness at very high concentrations.",
  },
  {
    key: "nitrogenDioxide",
    name: "Nitrogen Dioxide",
    description:
      "Can irritate the respiratory system and cause chronic lung problems.",
  },
  {
    key: "sulphurDioxide",
    name: "Sulphur Dioxide",
    description: "Can irritate the respiratory system, asthma, and allergies.",
  },
  {
    key: "ozone",
    name: "Ozone",
    description:
      "Affects the respiratory system and can cause fainting at very high levels.",
  },
  {
    key: "aerosolOpticalDepth",
    name: "Aerosol Optical Depth",
    description:
      "High concentrations can worsen visibility and contribute to climate change.",
  },
  {
    key: "dust",
    name: "Dust",
    description:
      "Elevated levels can degrade air quality and cause respiratory problems.",
  },
  {
    key: "uvIndex",
    name: "UV Index",
    description:
      "Not significant, but prolonged sun exposure can lead to sunburn.",
  },
  {
    key: "uvIndexClearSky",
    name: "UV Index Clear Sky",
    description: "Not significant, but sun protection is recommended.",
  },
  {
    key: "ammonia",
    name: "Ammonia",
    description:
      "Can irritate skin, eyes, and respiratory tract, causing allergic reactions.",
  },
  {
    key: "alderPollen",
    name: "Alder Pollen",
    description: "Safe level, pollen does not cause allergic reactions.",
  },
  {
    key: "birchPollen",
    name: "Birch Pollen",
    description: "Safe level, pollen does not cause allergic reactions.",
  },
  {
    key: "grassPollen",
    name: "Grass Pollen",
    description: "Safe level, pollen does not cause allergic reactions.",
  },
  {
    key: "mugwortPollen",
    name: "Mugwort Pollen",
    description: "Safe level, pollen does not cause allergic reactions.",
  },
  {
    key: "olivePollen",
    name: "Olive Pollen",
    description: "Safe level, pollen does not cause allergic reactions.",
  },
  {
    key: "ragweedPollen",
    name: "Ragweed Pollen",
    description:
      "Can cause allergic reactions, itching, irritation, runny nose, and breathing difficulties.",
  },
];

export const airQualityStatus: { [key: string]: any } = {
  europeanAqi: (val: number) => val >= 0 && val <= 50,
  pm10: (val: number) => val <= 20,
  pm25: (val: number) => val <= 10,
  carbonMonoxide: (val: number) => val <= 300,
  nitrogenDioxide: (val: number) => val <= 40,
  sulphurDioxide: (val: number) => val <= 20,
  ozone: (val: number) => val <= 180,
  aerosolOpticalDepth: (val: number) => val <= 0.3,
  dust: (val: number) => val <= 15,
  uvIndex: (val: number) => val <= 3,
  uvIndexClearSky: (val: number) => val <= 3,
  ammonia: (val: number) => val <= 10,
  alderPollen: (val: number) => val <= 5,
  birchPollen: (val: number) => val <= 5,
  grassPollen: (val: number) => val <= 5,
  mugwortPollen: (val: number) => val <= 5,
  olivePollen: (val: number) => val <= 5,
  ragweedPollen: (val: number) => val <= 5,
};
