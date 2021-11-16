import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import RoutingMachine from "./RoutingMachine";
import 'leaflet/dist/leaflet.css'
import Menu from "../inputMenu/menu";

const Map = (props) => {
  return (
    <MapContainer style={{zIndex:1}}
      doubleClickZoom={false}
      id="mapId"
      zoom={14}
      center={[42.39172808705315, -72.52514801414911]}
    >
      <RoutingMachine/>
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"
      />
      
    </MapContainer>
  );
};

export default Map;
