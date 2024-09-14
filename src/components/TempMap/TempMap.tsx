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

      <LayersControl position="topright">
        <LayersControl.Overlay name="Satelite">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
        </LayersControl.Overlay>

        <LayersControl.Overlay name="Topographic map">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.opentopomap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.Overlay>

        <LayersControl.Overlay name="Hiking">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png"
          />
        </LayersControl.Overlay>

        <LayersControl.Overlay name="Cycling">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png"
          />
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
};

export default TempMap;
