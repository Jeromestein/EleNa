import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import RoutingMachine from "./RoutingMachine";
import 'leaflet/dist/leaflet.css'
import Menu from "../inputMenu/menu";

const Map = (props) => {
  const route = props.route;
  return (
    <MapContainer style={{zIndex:1}}
      doubleClickZoom={false}
      id="mapId"
      zoom={14}
      center={route[Math.floor(route.length/2)]}
    >
      <RoutingMachine route={route}/>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© OpenStreetMap contributors'
      />

      
    </MapContainer>
  );
};

export default Map;
