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
};

export const LAYERS = {
  ["ULYSSYS-WATER-QUALITY-VIEWER"]: {
    title: "Ulyssys Water Quality Viewer",
    range: [],
    units: "",
    subTitle: "",
    descr: "",
  },
  ["OTCI"]: {
    title: "Ulyssys Water Quality Viewer",
    range: [],
    units: "",
    subTitle: "",
    descr: "",
  },
  ["AER-AI-340-AND-380"]: {
    title: "Ulyssys Water Quality Viewer",
    range: [],
    units: "",
    subTitle: "",
    descr: "",
  },
  ["AER-AI-354-AND-388"]: {
    title: "Ulyssys Water Quality Viewer",
    range: [],
    units: "",
    subTitle: "",
    descr: "",
  },
  ["CH4"]: {
    title: "Ulyssys Water Quality Viewer",
    range: [],
    units: "",
    subTitle: "",
    descr: "",
  },
  ["CARBON-MONOXIDE"]: {
    title: "Ulyssys Water Quality Viewer",
    range: [],
    units: "",
    subTitle: "",
    descr: "",
  },
  ["FORMALDEHYDE"]: {
    title: "Formaldehyde",
    range: ["1E-3", "8.75E-4", "6.25E-4", "3.75E-4", "1.25E-4", "0.0"],
    units: "[mol/m^2]",
    subTitle: "Formaldehyde (HCHO)",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,ut, fugiat voluptatem consequuntur sapiente itaque eius ab quia eumanimi, ducimus vitae minus! Veniam quisquam sint officiis nihil illovelit!",
  },
  ["OZONE"]: {
    title: "Ulyssys Water Quality Viewer",
    range: [],
    units: "",
    subTitle: "",
    descr: "",
  },
  ["SULFUR-DIOXIDE"]: {
    title: "Ulyssys Water Quality Viewer",
    range: [],
    units: "",
    subTitle: "",
    descr: "",
  },
  ["default"]: {
    title: "",
    range: [],
    units: "",
    subTitle: "",
    descr: "",
  },
};
