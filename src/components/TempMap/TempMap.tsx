import { LayersControl, MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const TempMap = () => {
  return (
    <MapContainer
      center={[54.33764, 18.660344]}
      zoom={12}
      scrollWheelZoom={true}
      style={{ minHeight: "100%", minWidth: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LayersControl position="topright"></LayersControl>
    </MapContainer>
  );
};

export default TempMap;
