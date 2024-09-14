import { WMSTileLayer } from "react-leaflet";

const SentinelLayer = ({ layerID, url }: { layerID: string; url: string }) => (
  <WMSTileLayer
    layers={layerID}
    format="image/jpeg"
    attribution='&copy; <a href="http://www.sentinel-hub.com/" target="_blank">Sentinel Hub</a>'
    url={url}
    minZoom={6}
    maxZoom={16}
  />
);

export default SentinelLayer;
