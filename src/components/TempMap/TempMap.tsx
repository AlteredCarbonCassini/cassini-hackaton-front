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
import { stringifySearchParams } from "@/utils/stringifySearchParams";

const LAYERS_IDS = [
  "AGRICULTURE",
  "BATHYMETRIC",
  "FALSE-COLOR-URBAN",
  "FALSE-COLOR",
  "GEOLOGY",
  "MOISTURE-INDEX",
  "NATURAL-COLOR",
  "NDVI",
  "SWIR",
  "TRUE-COLOR-S2L2A",
];

function LocationMarker() {
  // const [position] = useState<LatLngExpression>([51.505, -0.09]);
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
  />
);

const TempMap = () => {
  const baseUrl =
    "https://services.sentinel-hub.com/ogc/wms/3783c494-8b50-4792-941f-7897789fe94b";

  const customTemplateBaseUrl =
    "https://creodias.sentinel-hub.com/ogc/wms/00922745-a285-4ee4-8691-2da608fb5a53";

  const params = {
    time: "2023-09-01/2023-09-13",
  };

  const searchParams = stringifySearchParams(params);

  const url = baseUrl + "?" + searchParams;

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ minHeight: "100%", minWidth: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LayersControl position="topright">
        {LAYERS_IDS.map(id => (
          <LayersControl.Overlay key={id} name={id}>
            <SentinelLayer layerID={id} url={url} />
          </LayersControl.Overlay>
        ))}

        {/* <LayersControl.Overlay name="EW_HH_DB">
          <SentinelLayer layerID="EW_HH_DB" url={customTemplateBaseUrl} />
        </LayersControl.Overlay> */}

        {/* <LayersControl.Overlay name="SO2">
          <WMSTileLayer
            layers="SO2"
            format="image/jpeg"
            attribution='&copy; <a href="http://www.sentinel-hub.com/" target="_blank">Sentinel Hub</a>'
            url="https://creodias.sentinel-hub.com/ogc/wms/b1f19051-80f8-4545-b4e5-29a0a2148f3c"
            minZoom={6}
            maxZoom={16}
            opacity={0.3}
          />
        </LayersControl.Overlay> */}

        {/* <LayersControl.Overlay name="CH4">
          <WMSTileLayer
            layers="CH4"
            format="image/jpeg"
            attribution='&copy; <a href="http://www.sentinel-hub.com/" target="_blank">Sentinel Hub</a>'
            url="https://creodias.sentinel-hub.com/ogc/wms/00922745-a285-4ee4-8691-2da608fb5a53"
            minZoom={6}
            maxZoom={16}
            opacity={0.3}
          />
        </LayersControl.Overlay> */}

        {/* <LayersControl.Overlay name="EW_HH_DB">
          <WMSTileLayer
            layers="EW_HH_DB"
            format="image/jpeg"
            attribution='&copy; <a href="http://www.sentinel-hub.com/" target="_blank">Sentinel Hub</a>'
            url="https://services.sentinel-hub.com/ogc/wms/717540a4-e45e-4660-875e-052d4f409280"
            minZoom={6}
            maxZoom={16}
            opacity={0.3}
          />
        </LayersControl.Overlay>
      </LayersControl> */}
      </LayersControl>

      <LocationMarker />
    </MapContainer>
  );
};

export default TempMap;
