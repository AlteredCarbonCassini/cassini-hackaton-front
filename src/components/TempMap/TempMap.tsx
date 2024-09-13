import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { LatLngExpression } from "leaflet";

function LocationMarker() {
  const [position, setPosition] = useState<LatLngExpression>([51.505, -0.09]);
  //   const map = useMapEvents({
  //     click() {
  //       map.locate();
  //     },

  //     locationfound(e) {
  //       setPosition(e.latlng);
  //       map.flyTo(e.latlng, map.getZoom());
  //     },

  //     load() {
  //       map.locate();
  //     },
  //   });

  const map = useMap();

  useEffect(() => {
    map.locate();

    map.on("locationfound", e => {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom()); // Перемещаем карту к найденной позиции
    });

    map.on("locationerror", () => {
      alert("Не удалось определить местоположение");
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const TempMap = () => {
  //   const [position, setPosition] = useState<LatLngExpression>([51.505, -0.09]);

  //   const map = useMapEvents({
  //     // click() {
  //     //   map.locate();
  //     // },

  //     locationfound(e) {
  //       setPosition(e.latlng);
  //       map.flyTo(e.latlng, map.getZoom());
  //     },

  //   load() {
  //     map.locate();
  //   },
  //   });

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ minHeight: "100vh", minWidth: "100vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}

      <LocationMarker />
    </MapContainer>
  );
};

export default TempMap;
