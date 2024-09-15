import {
  LayersControl,
  MapContainer,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import LocationMarker from "./LocationMarker";
import SentinelLayer from "./SentinelLayer";
import SentinelLayerOpacity from "./SentinelLayerOpacity";

import { useState } from "react";
import {
  LAYERS_IDS_SNT_2,
  LAYERS_IDS_SNT_3,
  LAYERS_IDS_SNT_5,
  sent2_BaseUrl,
  sent3_BaseUrl,
  sent5_BaseUrl,
  LAYERS,
} from "@/utils/data/layersData";
import InfoCard from "../InfoCard";

import CampingLayer from "./CampingLayer";
import { useCoordsContext } from "../CoordsProvider/CoordsProvider";
import CenterMap from "./CenterMap";

const TempMap = () => {
  const [selectedLayer, setSelectedLayer] = useState<string>("default");
  const { mainCoords } = useCoordsContext();

  const currentLayer = LAYERS[selectedLayer];

  const MapEvents = () => {
    useMapEvents({
      overlayadd: e => {
        setSelectedLayer(e.name);
      },
      overlayremove: () => {
        setSelectedLayer("default");
      },
    });
    return null;
  };

  // const center: LatLngExpression = [52.2297, 21.0122]; // Warsaw
  const center: LatLngExpression = mainCoords; // Warsaw

  return (
    <div className="flex gap-x-2 h-full w-full">
      <InfoCard layer={currentLayer} selectedLayer={selectedLayer} />

      <MapContainer
        className="w-full h-full"
        center={center}
        zoom={10}
        scrollWheelZoom={true}
        style={{ minWidth: "0" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapEvents />
        <CenterMap />

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

          <LayersControl.Overlay name="Campings">
            <CampingLayer />
          </LayersControl.Overlay>
        </LayersControl>

        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default TempMap;
