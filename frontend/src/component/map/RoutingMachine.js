import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props) => {
  const route = props.route;
  const points = route.map(e=>{
    return L.latLng(e[0],e[1])
  })



  const instance = L.Routing.control({
    waypoints: points,
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
   
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
