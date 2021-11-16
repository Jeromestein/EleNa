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
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© OpenStreetMap contributors'
      />

      
    </MapContainer>
  );
};

export default Map;
