import L from "leaflet";
import { LatLngExpression } from "leaflet";
import { LayerGroup, Marker, Popup, useMap } from "react-leaflet";

import tentIcon from "@/assets/game-icons_camping-tent.svg";
import campers from "@/utils/data/campers.json";
import { useEffect, useState } from "react";

const customIcon = L.icon({
  iconUrl: tentIcon,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

type Campers = typeof campers.features;

const CampingLayer = () => {
  const [filteredCapmers, setFilteredCampers] = useState<Campers>([]);
  const map = useMap();

  const filterCampersByBounds = () => {
    const bounds = map.getBounds();

    const visibleCampers = campers.features.filter(
      ({ geometry: { coordinates } }) => {
        const [lng, lat] = coordinates.reverse();
        return bounds.contains([lat, lng]);
      }
    );

    setFilteredCampers(visibleCampers);
  };

  useEffect(() => {
    filterCampersByBounds();

    map.on("dragend", filterCampersByBounds);
    map.on("zoomend", filterCampersByBounds);

    return () => {
      map.off("dragend", filterCampersByBounds);
      map.off("zoomend", filterCampersByBounds);
    };
  }, [map]);

  // console.log("filteredCapmers", filteredCapmers);

  return (
    <LayerGroup>
      {filteredCapmers.map(({ id, geometry: { coordinates }, properties }) => {
        const coords = [...coordinates].reverse() as LatLngExpression;

        return (
          <Marker key={id} position={coords} icon={customIcon}>
            <Popup>
              <div>
                <p>Name: {properties.name ? properties.name : "Unknown"}</p>

                {properties.phone && <p>Phone: {properties.phone}</p>}

                {properties.website && (
                  <p>
                    Website:{" "}
                    <a href={properties.website}>{properties.website}</a>
                  </p>
                )}

                <p>Coords: {coords.toString()}</p>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </LayerGroup>
  );
};

export default CampingLayer;
