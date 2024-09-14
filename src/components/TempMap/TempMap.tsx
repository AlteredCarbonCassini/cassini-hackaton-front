import {
  ImageOverlay,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  WMSTileLayer,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { LatLngExpression } from "leaflet";
import { stringifySearchParams } from "@/utils/stringifySearchParams";

function LocationMarker() {
  const [position, setPosition] = useState<LatLngExpression>([51.505, -0.09]);

  const map = useMap();

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

const TempMap = () => {
  const baseUrl =
    "https://services.sentinel-hub.com/ogc/wms/3783c494-8b50-4792-941f-7897789fe94b";

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

      {/* <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://services.sentinel-hub.com/ogc/wms/3783c494-8b50-4792-941f-7897789fe94b?version=1.1.1&service=WMS&request=GetMap&format=image%2Fjpeg&srs=EPSG%3A4326&layers=GEOLOGY&bbox=18%2C20%2C20%2C22&time=2022-11-22T00%3A00%3A00Z%2F2023-12-22T23%3A59%3A59Z&width=512&height=512&maxcc=100"
      /> */}

      <LayersControl position="topright">
        <LayersControl.Overlay name="NATURAL-COLOR">
          <WMSTileLayer
            // layers="NDVI"

            layers="NATURAL-COLOR"
            format="image/jpeg"
            attribution='&copy; <a href="http://www.sentinel-hub.com/" target="_blank">Sentinel Hub</a>'
            // url="https://services.sentinel-hub.com/ogc/wms/3783c494-8b50-4792-941f-7897789fe94b?time=2020-04-01/2020-10-08"
            url={url}
            // urlProcessingApi="https://services.sentinel-hub.com/ogc/wms/3783c494-8b50-4792-941f-7897789fe94b"
            // maxcc={ 20}
            minZoom={6}
            maxZoom={16}
            // preset="NDVI"
            // time="2020-04-01/2020-10-08"
          />
        </LayersControl.Overlay>

        <LayersControl.Overlay name="NDVI">
          <WMSTileLayer
            layers="NDVI"
            format="image/jpeg"
            attribution='&copy; <a href="http://www.sentinel-hub.com/" target="_blank">Sentinel Hub</a>'
            // url="https://services.sentinel-hub.com/ogc/wms/3783c494-8b50-4792-941f-7897789fe94b?time=2020-04-01/2020-10-08"
            url={url}
            // urlProcessingApi="https://services.sentinel-hub.com/ogc/wms/3783c494-8b50-4792-941f-7897789fe94b"
            // maxcc={ 20}
            minZoom={6}
            maxZoom={16}
            // preset="NDVI"
            // time="2020-04-01/2020-10-08"
          />
        </LayersControl.Overlay>
      </LayersControl>

      <LocationMarker />
    </MapContainer>
  );
};

export default TempMap;
