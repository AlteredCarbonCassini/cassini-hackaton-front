import {
  ImageOverlay,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  WMSTileLayer,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { LatLngExpression } from "leaflet";

function LocationMarker() {
  const [position, setPosition] = useState<LatLngExpression>([51.505, -0.09]);

  const map = useMap();

  //   useEffect(() => {
  //     map.locate();

  //     map.on("locationfound", e => {
  //       setPosition(e.latlng);
  //       map.flyTo(e.latlng, map.getZoom()); // Перемещаем карту к найденной позиции
  //     });

  //     map.on("locationerror", () => {
  //       alert("Не удалось определить местоположение");
  //     });
  //   }, [map]);

  console.log(position);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const TempMap = () => {
  const getTileUrl = (z, x, y) => {
    // Параметры WMS
    const wmsBaseUrl =
      "https://services.sentinel-hub.com/ogc/wms/3783c494-8b50-4792-941f-7897789fe94b";
    const layers = "GEOLOGY";
    const format = "image/jpeg";
    const srs = "EPSG:4326"; // Прямоугольные координаты
    const time = "2022-11-22T00:00:00Z/2023-12-22T23:59:59Z";
    const maxcc = 100;

    // Размер тайла
    const tileSize = 512;

    // Параметры для BBOX
    const n = Math.pow(2, z);
    const lon1 = (x / n) * 360 - 180;
    const lat1 = (1 - (y + 1) / n) * 2 - 1;
    const lat2 = (1 - y / n) * 2 - 1;
    const lon2 = ((x + 1) / n) * 360 - 180;

    // Преобразуем широты и долготы в радианы
    const lat1Rad = Math.atan(Math.sinh(lat1 * Math.PI));
    const lat2Rad = Math.atan(Math.sinh(lat2 * Math.PI));

    // Формируем URL для тайла
    return `${wmsBaseUrl}?service=WMS&version=1.1.1&request=GetMap&layers=${layers}&format=${format}&srs=${srs}&bbox=${lon1},${lat1Rad},${lon2},${lat2Rad}&width=${tileSize}&height=${tileSize}&time=${time}&maxcc=${maxcc}`;
  };

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
      //   style={{ minHeight: "100vh", minWidth: "100vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <WMSTileLayer /> */}

      {/* <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={(z, x, y) => getTileUrl(z, x, y)}
      /> */}

      {/* <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://services.sentinel-hub.com/ogc/wms/be279d70-e6ec-42c6-bcc8-714877e8c621?version=1.1.1&service=WMS&request=GetMap&format=image%2Fjpeg&srs=EPSG%3A4326&layers=MOISTURE-INDEX&bbox=18%2C20%2C20%2C22&time=2018-11-22T00%3A00%3A00Z%2F2018-12-22T23%3A59%3A59Z&width=512&height=512&maxcc=100"
      /> */}

      {/* <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://services.sentinel-hub.com/ogc/wms/3783c494-8b50-4792-941f-7897789fe94b?REQUEST=GetMap&BBOX=3238005,5039853,3244050,5045897&LAYERS=NATURAL-COLOR&MAXCC=20&WIDTH=320&HEIGHT=320&FORMAT=image/jpeg&TIME=2018-03-29/2018-05-29"
      /> */}

      {/* <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://services.sentinel-hub.com/ogc/wms/3783c494-8b50-4792-941f-7897789fe94b?version=1.1.1&service=WMS&request=GetMap&format=image%2Fjpeg&srs=EPSG%3A4326&layers=GEOLOGY&bbox=18%2C20%2C20%2C22&time=2022-11-22T00%3A00%3A00Z%2F2023-12-22T23%3A59%3A59Z&width=512&height=512&maxcc=100"
      /> */}

      {/* <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://mts1.google.com/vt/lyrs=m@186112443&hl=x-local&src=app&x=1325&y=3143&z=13&s=Galile"
      /> */}

      {/* <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}

      {/* <ImageOverlay */}

      {/* <WMSTileLayer
        layers="NDVI"
        format="image/jpeg"
        attribution='&copy; <a href="http://www.sentinel-hub.com/" target="_blank">Sentinel Hub</a>'
        url="https://services.sentinel-hub.com/ogc/wms/0eb749da-a491-MASKED"
        urlProcessingApi="https://services.sentinel-hub.com/ogc/wms/aeafc74a-c894-MASKED"
        maxcc="20"
        minZoom="6"
        maxZoom="16"
        preset="NDVI"
        time="2020-04-01/2020-10-08"
      /> */}

      <LocationMarker />
    </MapContainer>
  );
};

export default TempMap;
