import { LatLngExpression } from "leaflet";
import { useState } from "react";
import { Marker, Popup } from "react-leaflet";

function LocationMarker() {
  const [position] = useState<LatLngExpression | null>(null);

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

export default LocationMarker;
