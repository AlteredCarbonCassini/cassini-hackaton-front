import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { useCoordsContext } from "../CoordsProvider/CoordsProvider";

const CenterMap = () => {
  const map = useMap();
  const { setMainCoords } = useCoordsContext();

  useEffect(() => {
    function getCenter() {
      const { lat, lng } = map.getCenter();
      setMainCoords([lat, lng]);
    }

    map.on("dragend", getCenter);
    map.on("zoomend", getCenter);

    return () => {
      map.off("dragend", getCenter);
      map.off("zoomend", getCenter);
    };
  }, [map]);

  return null;
};

export default CenterMap;
