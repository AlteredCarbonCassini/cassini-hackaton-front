import {
  LayerGroup,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import LocationMarker from "./LocationMarker";
import SentinelLayer from "./SentinelLayer";
import SentinelLayerOpacity from "./SentinelLayerOpacity";
import campers from "@/utils/data/campers.json";
// import campers from "@/utils/data/temp_campers.json";
import tentIcon from "@/assets/game-icons_camping-tent.svg";

import L from "leaflet";
import { useState } from "react";
import {
  LAYERS_IDS_SNT_2,
  LAYERS_IDS_SNT_3,
  LAYERS_IDS_SNT_5,
  sent2_BaseUrl,
  sent3_BaseUrl,
  sent5_BaseUrl,
  LAYERS,
  LayerType,
} from "@/utils/data/layersData";
import InfoCard from "../InfoCard";

const customIcon = L.icon({
  iconUrl: tentIcon, // Путь к вашему изображению
  iconSize: [32, 32], // Размер иконки
  iconAnchor: [16, 32], // Точка привязки маркера (середина нижней части)
  popupAnchor: [0, -32], // Точка привязки попапа относительно маркера
});

const TempMap = () => {
  const [selectedLayer, setSelectedLayer] = useState<string>("default"); // Стейт для хранения ID выбранного слоя
  console.log(`🚀 ~ TempMap ~ selectedLayer:`, selectedLayer);

  const currentLayer = LAYERS[selectedLayer] as LayerType;
  console.log(`🚀 ~ TempMap ~ currentLayer:`, currentLayer);

  const MapEvents = () => {
    useMapEvents({
      overlayadd: e => {
        setSelectedLayer(e.name); // Устанавливаем выбранный слой
      },
      overlayremove: () => {
        setSelectedLayer("default"); // Сбрасываем стейт при удалении слоя
      },
    });
    return null;
  };

  const center: LatLngExpression = [52.2297, 21.0122]; // Warsaw

  return (
    <div className="flex">
      {selectedLayer === "default" ? (
        <span className="h-[600px]">Choose a layer</span>
      ) : (
        <InfoCard layer={currentLayer} />
      )}

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

        <MapEvents />

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

          <LayersControl.Overlay name="Marker">
            <LayerGroup>
              {campers.features.map(
                ({ id, geometry: { coordinates }, properties }) => {
                  const coords = [...coordinates].reverse() as LatLngExpression;

                  return (
                    <Marker key={id} position={coords} icon={customIcon}>
                      <Popup>
                        <div>
                          <p>
                            Name:{" "}
                            {properties.name ? properties.name : "Unknown"}
                          </p>

                          {properties.phone && <p>Phone: {properties.phone}</p>}

                          {properties.website && (
                            <p>
                              Website:{" "}
                              <a href={properties.website}>
                                {properties.website}
                              </a>
                            </p>
                          )}

                          <p>Coords: {coords.toString()}</p>
                        </div>
                      </Popup>
                    </Marker>
                  );
                }
              )}
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>

        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default TempMap;
