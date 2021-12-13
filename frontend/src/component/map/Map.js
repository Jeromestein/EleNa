import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import RoutingMachine from "./RoutingMachine";
import 'leaflet/dist/leaflet.css'
import Menu from "../inputMenu/menu";

const Map = (props) => {
  const route = props.route;
  console.log(route,"route")
  if(route.length>0){

    return (
      <MapContainer style={{zIndex:1}} data-testid="Map"
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

  }

  else{
    return (
      <MapContainer style={{zIndex:1}} data-testid="Map"
        doubleClickZoom={false}
        id="mapId"
        zoom={14}
        center={[42.392611, -72.533832]}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© OpenStreetMap contributors'
        />
  
        
      </MapContainer>
    );
  }

  
};

export default Map;
