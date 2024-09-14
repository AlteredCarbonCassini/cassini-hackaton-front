import { LayersControl, MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import LocationMarker from "./LocationMarker";
import SentinelLayer from "./SentinelLayer";
import SentinelLayerOpacity from "./SentinelLayerOpacity";
import campers from "@/utils/data/campers.json";

const LAYERS_IDS_SNT_2 = ["ULYSSYS-WATER-QUALITY-VIEWER"];

const LAYERS_IDS_SNT_3 = ["OTCI"];

const LAYERS_IDS_SNT_5 = [
  "AER-AI-340-AND-380",
  "AER-AI-354-AND-388",
  "CH4",
  "CARBON-MONOXIDE",
  "FORMALDEHYDE",
  "OZONE",
  "SULFUR-DIOXIDE",
];

const TempMap = () => {
  const sent2_BaseUrl =
    "https://services.sentinel-hub.com/ogc/wms/08853bf3-2fc8-4a35-aeeb-f2405ed1671e";

  const sent3_BaseUrl =
    "https://creodias.sentinel-hub.com/ogc/wms/b6614a1c-ec70-4fc5-a305-c7638caad1e8";

  const sent5_BaseUrl =
    "https://creodias.sentinel-hub.com/ogc/wms/b1f19051-80f8-4545-b4e5-29a0a2148f3c";

  const center: LatLngExpression = [52.2297, 21.0122]; // Warsaw

  console.log(campers);

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

      {/* ====== Sentinel layers ====== */}
      <LayersControl position="topright">
        {LAYERS_IDS_SNT_2.map(id => (
          <LayersControl.Overlay key={id} name={id}>
            <SentinelLayer layerID={id} url={sent2_BaseUrl} />
          </LayersControl.Overlay>
        ))}

        {LAYERS_IDS_SNT_3.map(id => (
          <LayersControl.Overlay key={id} name={id}>
            <SentinelLayerOpacity layerID={id} url={sent3_BaseUrl} />
          </LayersControl.Overlay>
        ))}

        {LAYERS_IDS_SNT_5.map(id => (
          <LayersControl.Overlay key={id} name={id}>
            <SentinelLayerOpacity layerID={id} url={sent5_BaseUrl} />
          </LayersControl.Overlay>
        ))}
      </LayersControl>

      {/* ====== Camping layers ====== */}
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

      <LocationMarker />
    </MapContainer>
  );
};

export default TempMap;
