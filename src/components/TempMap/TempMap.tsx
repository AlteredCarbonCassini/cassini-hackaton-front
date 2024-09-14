import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  WMSTileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { LatLngExpression } from "leaflet";
// import { stringifySearchParams } from "@/utils/stringifySearchParams";

// const LAYERS_IDS = [
//   "AGRICULTURE",
//   "BATHYMETRIC",
//   "FALSE-COLOR-URBAN",
//   "FALSE-COLOR",
//   "GEOLOGY",
//   "MOISTURE-INDEX",
//   "NATURAL-COLOR",
//   "NDVI",
//   "SWIR",
//   "TRUE-COLOR-S2L2A",
// ];

const LAYERS_IDS_SNT_5 = [
  "AER-AI-340-AND-380",
  "AER-AI-354-AND-388",
  "CH4",
  "CARBON-MONOXIDE",
  "FORMALDEHYDE",
  "OZONE",
  "SULFUR-DIOXIDE",
];

function LocationMarker() {
  const [position] = useState<LatLngExpression>([51.505, -0.09]);

  // const map = useMap();

  // useEffect(() => {
  //   map.locate();

  //   map.on("locationfound", e => {
  //     setPosition(e.latlng);
  //     map.flyTo(e.latlng, map.getZoom()); // Перемещаем карту к найденной позиции
  //   });

  //   map.on("locationerror", () => {
  //     alert("Не удалось определить местоположение");
  //   });
  // }, [map]);

  console.log(position);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const SentinelLayer = ({ layerID, url }: { layerID: string; url: string }) => (
  <WMSTileLayer
    layers={layerID}
    format="image/jpeg"
    attribution='&copy; <a href="http://www.sentinel-hub.com/" target="_blank">Sentinel Hub</a>'
    url={url}
    minZoom={6}
    maxZoom={16}
    opacity={0.4}
  />
);

const TempMap = () => {
  // const baseUrl =
  //   "https://services.sentinel-hub.com/ogc/wms/3783c494-8b50-4792-941f-7897789fe94b";

  const customTemplateBaseUrl =
    "https://creodias.sentinel-hub.com/ogc/wms/b1f19051-80f8-4545-b4e5-29a0a2148f3c";

  // const params = {
  //   time: "2023-09-01/2023-09-13",
  // };

  // const searchParams = stringifySearchParams(params);

  // const url = baseUrl + "?" + searchParams;

  const center: LatLngExpression = [52.2297, 21.0122]; // Варшава

  return (
    <MapContainer
      center={center}
      zoom={10}
      scrollWheelZoom={true}
      style={{ minHeight: "100%", minWidth: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LayersControl position="topright">
        {LAYERS_IDS_SNT_5.map(id => (
          <LayersControl.Overlay key={id} name={id}>
            <SentinelLayer layerID={id} url={customTemplateBaseUrl} />
          </LayersControl.Overlay>
        ))}
      </LayersControl>

      <LocationMarker />
    </MapContainer>
  );
};

export default TempMap;
