export const LAYERS_IDS_SNT_2 = ["ULYSSYS-WATER-QUALITY-VIEWER"];

export const LAYERS_IDS_SNT_3 = ["OTCI"];

export const LAYERS_IDS_SNT_5 = [
  "AER-AI-340-AND-380",
  "AER-AI-354-AND-388",
  "CH4",
  "CARBON-MONOXIDE",
  "FORMALDEHYDE",
  "OZONE",
  "SULFUR-DIOXIDE",
];

export const sent2_BaseUrl =
  "https://services.sentinel-hub.com/ogc/wms/08853bf3-2fc8-4a35-aeeb-f2405ed1671e";

export const sent3_BaseUrl =
  "https://creodias.sentinel-hub.com/ogc/wms/b6614a1c-ec70-4fc5-a305-c7638caad1e8";

export const sent5_BaseUrl =
  "https://creodias.sentinel-hub.com/ogc/wms/b1f19051-80f8-4545-b4e5-29a0a2148f3c";

export type LayerType = {
  title: string;
  range: string[];
  units: string;
  subTitle: string;
  descr: string;
  link: string;
};

export const LAYERS: { [key: string]: LayerType } = {
  "ULYSSYS-WATER-QUALITY-VIEWER": {
    title: "Ulyssys Water Quality Viewer",
    range: [],
    units: "",
    subTitle: "",
    descr: "",
    link: "",
  },
  OTCI: {
    title: "OTCI",
    range: ["2000", "1950", "1850", "1750", "1650", "1600"],
    units: "",
    subTitle: "",
    descr: "",
    link: "",
  },
  "AER-AI-340-AND-380": {
    title: "Aerosol Index",
    range: ["5", "4.25", "2.75", "1.25", "-0.25", "-1.0"],
    units: "",
    subTitle: "",
    descr:
      "The Aerosol Index (AI) is a qualitative index indicating the presence of elevated layers of aerosols in the atmosphere. It can be used to detect the presence of UV absorbing aerosols such as desert dust and volcanic ash plumes. Positive values (from light blue to red) indicate the presence of UV-absorbing aerosol. This index is calculated for two pairs of wavelengths: 340/380 nm and 354/388 nm.",
    link: "https://sentinels.copernicus.eu/web/sentinel/data-products/-/asset_publisher/fp37fc19FN8F/content/sentinel-5-precursor-level-2-ultraviolet-aerosol-index",
  },
  "AER-AI-354-AND-388": {
    title: "Aerosol Index",
    range: ["5", "4.25", "2.75", "1.25", "-0.25", "-1.0"],
    units: "",
    subTitle: "",
    descr:
      "The Aerosol Index (AI) is a qualitative index indicating the presence of elevated layers of aerosols in the atmosphere. It can be used to detect the presence of UV absorbing aerosols such as desert dust and volcanic ash plumes. Positive values (from light blue to red) indicate the presence of UV-absorbing aerosol. This index is calculated for two pairs of wavelengths: 340/380 nm and 354/388 nm.",
    link: "https://sentinels.copernicus.eu/web/sentinel/data-products/-/asset_publisher/fp37fc19FN8F/content/sentinel-5-precursor-level-2-ultraviolet-aerosol-index",
  },
  CH4: {
    title: "Methane (CH4)",
    range: ["2000", "1950", "1850", "1750", "1650", "1600"],
    units: "ppb",
    subTitle: "Methane (CH4)",
    descr:
      "Methane is, after carbon dioxide, the most important contributor to the anthropogenically (caused by human activity) enhanced greenhouse effect. Measurements are provided in parts per billion (ppb) with a spatial resolution of 7 km x 3.5 km.",
    link: "https://sentinels.copernicus.eu/web/sentinel/data-products/-/asset_publisher/fp37fc19FN8F/content/tropomi-level-2-methane",
  },
  "CARBON-MONOXIDE": {
    title: "Carbon Monoxide (CO)",
    range: ["0.1", "0.0875", "0.0625", "0.0375", "0.0125", "0.0"],
    units: "[mol / m^2]",
    subTitle: "",
    descr:
      "Carbon monoxide (CO) is an important atmospheric trace gas. In certain urban areas, it is a major atmospheric pollutant. Main sources of CO are combustion of fossil fuels, biomass burning, and atmospheric oxidation of methane and other hydrocarbons. The carbon monoxide total column is measured in mol per square meter (mol/ m^2).",
    link: "https://sentinels.copernicus.eu/web/sentinel/data-products/-/asset_publisher/fp37fc19FN8F/content/sentinel-5-precursor-level-2-carbon-monoxide",
  },
  FORMALDEHYDE: {
    title: "Formaldehyde (HCHO)",
    range: ["1E-3", "8.75E-4", "6.25E-4", "3.75E-4", "1.25E-4", "0.0"],
    units: "[mol/m^2]",
    subTitle: "Formaldehyde (HCHO)",
    descr:
      "Long term satellite observations of tropospheric formaldehyde (HCHO) are essential to support air quality and chemistry-climate related studies from the regional to the global scale. The seasonal and inter-annual variations of the formaldehyde distribution are principally related to temperature changes and fire events, but also to changes in anthropogenic (human-made) activities. Its lifetime being of the order of a few hours, HCHO concentrations in the boundary layer can be directly related to the release of short-lived hydrocarbons, which mostly cannot be observed directly from space. Measurements are in mol per square meter (mol/ m^2).",
    link: "https://sentinels.copernicus.eu/web/sentinel/data-products/-/asset_publisher/fp37fc19FN8F/content/sentinel-5-precursor-level-2-formaldehyde",
  },
  OZONE: {
    title: "Ozone (O3)",
    range: ["0.36", "0.315", "0.225", "0.135", "0.045", "0.0"],
    units: "[mol/ m^2]",
    subTitle: "",
    descr:
      "Ozone is of crucial importance for the equilibrium of the Earth atmosphere. In the stratosphere, the ozone layer shields the biosphere from dangerous solar ultraviolet radiation. In the troposphere, it acts as an efficient cleansing agent, but at high concentration it also becomes harmful to the health of humans, animals, and vegetation. Ozone is also an important greenhouse-gas contributor to ongoing climate change. Since the discovery of the Antarctic ozone hole in the 1980s and the subsequent Montreal Protocol regulating the production of chlorine-containing ozone-depleting substances, ozone has been routinely monitored from the ground and from space. Measurements are in mol per square meter (mol/ m^2)",
    link: "https://sentinels.copernicus.eu/web/sentinel/data-products/-/asset_publisher/fp37fc19FN8F/content/sentinel-5-precursor-level-2-ozone-profile",
  },
  "SULFUR-DIOXIDE": {
    title: "Sulfur Dioxide (SO2)",
    range: ["1E-2", "8.75E-3", "6.25E-3", "3.75E-3", "1.25E-3", "0.0"],
    units: "[mol/ m^2]",
    subTitle: "",
    descr:
      "Sulphur dioxide enters the Earth’s atmosphere through both natural and anthropogenic (human made) processes. It plays a role in chemistry on a local and global scale and its impact ranges from short term pollution to effects on climate. Only about 30% of the emitted SO2 comes from natural sources; the majority is of anthropogenic origin. Sentinel-5P/TROPOMI instrument samples the Earth’s surface with a revisit time of one day with a spatial resolution of 3.5 x 7 km which allows the resolution of fine details including the detection of smaller SO2 plumes. Measurements are in mol per square meter (mol/ m^2).",
    link: "https://sentinels.copernicus.eu/web/sentinel/data-products/-/asset_publisher/fp37fc19FN8F/content/sentinel-5-precursor-level-2-sulphur-dioxide",
  },
  Satelite: {
    title: "Satelite",
    range: [],
    units: "",
    subTitle: "",
    descr: "",
    link: "",
  },
  "Topographic map": {
    title: "Topographic map",
    range: [],
    units: "",
    subTitle: "",
    descr: "",
    link: "",
  },
  Hiking: {
    title: "Hiking",
    range: [],
    units: "",
    subTitle: "",
    descr: "",
    link: "",
  },
  Cycling: {
    title: "Cycling",
    range: [],
    units: "",
    subTitle: "",
    descr: "",
    link: "",
  },
  Campings: {
    title: "Campings",
    range: [],
    units: "",
    subTitle: "",
    descr: "",
    link: "",
  },
  default: {
    title: "",
    range: [],
    units: "",
    subTitle: "",
    descr: "",
    link: "",
  },
};
